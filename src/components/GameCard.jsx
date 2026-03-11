/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card transition-all"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">{game.title}</h3>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
