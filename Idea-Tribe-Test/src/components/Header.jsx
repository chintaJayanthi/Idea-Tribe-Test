import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userName = 'Jayanthi' // Replace with auth state

  return (
    <header className="inset-x-0 top-0 z-50 bg-black/50 backdrop-blur-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between">
      {/* Left - Empty */}
      <div className="w-16 sm:w-20 md:w-24"></div>

      {/* Center - GCA + Line + Full Name */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-widest">GCA</div>
        <div className="w-px h-8 sm:h-10 md:h-12 bg-white/80"></div>
        <div className="text-xs sm:text-sm md:text-sm font-bold text-white/90 tracking-wide leading-tight">
          GLOBAL <br />
          <span className='font-extralight'>CYBERSECURITY</span>
          <br />
          <span className="font-extralight">ASSOCIATION</span>
        </div>
      </div>

      {/* Right - Avatar + Username + Social Icons */}
      <div className="flex items-center space-x-3 sm:space-x-3 md:space-x-4 gap-2">

        {/* Avatar Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center space-x-1 sm:space-x-2 rounded-full hover:bg-white/10 px-2 sm:px-2 py-2 sm:py-2 transition-all cursor-pointer"
          >
            <img
              src="https://ui-avatars.com/api/?name=Jayanthi&background=00d4ff&color=000"
              alt="Avatar"
              className="w-8 h-8 sm:w-9 md:w-10 sm:h-9 md:h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-all flex-shrink-0"
            />
            {/* Username */}
            <span className="text-xs sm:text-sm font-medium text-white/90 hidden sm:block whitespace-nowrap">
              {userName}
            </span>
            {/* Dropdown Arrow */}
            <svg className={`w-4 h-4 sm:w-4 sm:h-4 text-white/70 transition-transform flex-shrink-0 ${userMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>

          {/* Dropdown Menu */}
          {userMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed right-4 sm:right-8 top-16 sm:top-20 w-48 sm:w-56 bg-black/98 backdrop-blur-xl rounded-2xl py-3 shadow-2xl border border-white/10 z-[9999]"
            >
              <div className="px-4 py-2 text-xs text-white/60 border-b border-white/10">User Menu</div>
              <button className="w-full text-left px-6 py-3 text-sm hover:bg-white/10 transition-all rounded-xl">
                Update Profile
              </button>
              <button
                onClick={() => {
                  setUserMenuOpen(false)
                  // Add logout logic here
                }}
                className="w-full text-left px-6 py-3 text-sm hover:bg-red-500/20 text-red-300 transition-all rounded-xl"
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all group p-1 sm:p-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white group-hover:text-cyan-400" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all group p-1 sm:p-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white group-hover:text-red-400" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.115 3.115 0 0 0-2.208-2.132 30.238 30.238 0 0 0-3.658-.253c-1.897 0-3.406.193-4.726 1.161-3.246 2.243-6.19 6.172-6.62 9.715-.397 3.268-.14 5.745.886 7.604.35.65 1.184 1.112 2.105 1.33a13.575 13.575 0 0 0 3.152.22c1.315 0 2.667-.17 4.02-.495 1.204-.28 2.16-.92 2.546-1.84.12-.29.194-.598.223-.916a3.4 3.4 0 0 1 .04-1.438 2.28 2.28 0 0 0-.045-.828zM9.415 20.5c-.22-.96-.28-2.02-.17-3.09.43-4.24 3.67-7.48 7.88-7.92 1.09-.12 2.21-.04 3.32.24-1.09 3.71-3.97 6.44-7.38 6.79-.78.23-1.59.17-2.35-.17.02-.02.02-.02.05-.06z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
