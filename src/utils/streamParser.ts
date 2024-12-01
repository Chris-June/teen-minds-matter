export class StreamParser {
  private buffer: string = '';
  private decoder: TextDecoder;

  constructor() {
    this.decoder = new TextDecoder();
  }

  // Parse a chunk of stream data
  parseChunk(chunk: Uint8Array): string[] {
    const messages: string[] = [];
    this.buffer += this.decoder.decode(chunk, { stream: true });

    // Split on double newlines which typically separate SSE messages
    const lines = this.buffer.split('\n\n');
    
    // Keep the last (potentially incomplete) line in the buffer
    this.buffer = lines.pop() || '';

    // Process complete messages
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        try {
          const data = JSON.parse(line.slice(6));
          if (data.choices?.[0]?.delta?.content) {
            messages.push(data.choices[0].delta.content);
          }
        } catch (e) {
          console.warn('Failed to parse SSE message:', e);
        }
      }
    }

    return messages;
  }

  // Clear the buffer
  reset() {
    this.buffer = '';
  }
}
