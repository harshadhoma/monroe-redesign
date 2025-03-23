import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function EventCard({ date, title, description, imageUrl }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-purple-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}