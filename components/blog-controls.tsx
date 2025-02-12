"use client"

import { motion } from 'framer-motion'
import { Search, SortAsc, SortDesc, Filter } from 'lucide-react'
import { useState } from 'react'

interface BlogControlsProps {
  onSearch: (query: string) => void
  onSort: (order: 'asc' | 'desc') => void
  onFilterByTag: (tag: string) => void
  availableTags: string[]
}

export function BlogControls({ onSearch, onSort, onFilterByTag, availableTags }: BlogControlsProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [selectedTag, setSelectedTag] = useState<string>('')

  const handleSort = () => {
    const newOrder = sortOrder === 'desc' ? 'asc' : 'desc'
    setSortOrder(newOrder)
    onSort(newOrder)
  }

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag)
    onFilterByTag(tag === selectedTag ? '' : tag)
  }

  return (
    <motion.div 
      className="mb-8 md:mb-12 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Search */}
      <div className="relative w-full">
        <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10">
          <Search className="w-4 h-4 md:w-5 md:h-5 text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60" />
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl bg-[#A4B7C9]/30 dark:bg-[#3D4E6C]/30 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 text-[#3D4E6C] dark:text-[#C5D1DC] placeholder-[#3D4E6C]/50 dark:placeholder-[#C5D1DC]/50 focus:outline-none focus:ring-2 focus:ring-[#C5D1DC]/50 dark:focus:ring-white/20 transition-all"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Sort Button */}
        <motion.button
          className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-sm md:text-base rounded-lg bg-[#A4B7C9]/30 dark:bg-[#3D4E6C]/30 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 text-[#3D4E6C] dark:text-[#C5D1DC] hover:bg-[#A4B7C9]/50 dark:hover:bg-[#3D4E6C]/50 transition-all w-full sm:w-auto"
          onClick={handleSort}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative z-10">
            {sortOrder === 'desc' ? (
              <SortDesc className="w-4 h-4" />
            ) : (
              <SortAsc className="w-4 h-4" />
            )}
          </div>
          <span>Sort by Date</span>
        </motion.button>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <div className="w-full sm:w-auto flex flex-wrap gap-2 justify-start">
            {availableTags.map((tag) => (
              <motion.button
                key={tag}
                className={`px-3 py-1.5 text-xs md:text-sm rounded-lg ${
                  selectedTag === tag
                    ? 'bg-[#3D4E6C] dark:bg-[#C5D1DC] text-white dark:text-[#2D3C54]'
                    : 'bg-[#A4B7C9]/30 dark:bg-[#3D4E6C]/30 text-[#3D4E6C] dark:text-[#C5D1DC] hover:bg-[#A4B7C9]/50 dark:hover:bg-[#3D4E6C]/50'
                } backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 transition-all flex-shrink-0`}
                onClick={() => handleTagFilter(tag)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 