import { motion } from 'framer-motion';

export function BlogGrid() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog post cards will be added here */}
        </div>
      </div>
    </motion.section>
  );
}