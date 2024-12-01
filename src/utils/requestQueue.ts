interface QueueItem<T> {
  task: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
}

export class RequestQueue<T> {
  private queue: QueueItem<T>[] = [];
  private processing: boolean = false;
  private concurrentLimit: number;
  private activeRequests: number = 0;

  constructor(concurrentLimit: number = 1) {
    this.concurrentLimit = concurrentLimit;
  }

  async add(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.processing || this.activeRequests >= this.concurrentLimit) {
      return;
    }

    this.processing = true;

    while (this.queue.length > 0 && this.activeRequests < this.concurrentLimit) {
      const item = this.queue.shift();
      if (!item) continue;

      this.activeRequests++;
      
      try {
        const result = await item.task();
        item.resolve(result);
      } catch (error) {
        item.reject(error instanceof Error ? error : new Error(String(error)));
      } finally {
        this.activeRequests--;
      }

      // Add a small delay between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.processing = false;

    // If there are more items and we're under the limit, continue processing
    if (this.queue.length > 0 && this.activeRequests < this.concurrentLimit) {
      this.processQueue();
    }
  }

  clear() {
    this.queue = [];
  }

  get length(): number {
    return this.queue.length;
  }

  get active(): number {
    return this.activeRequests;
  }
}
