import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileItem, setActiveMobileItem] = useState(null)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null)

  const menuItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      dropdown: ['Our Mission', 'Team', 'History', 'Values']
    },
    {
      label: 'Events',
      href: '/events',
      dropdown: ['Upcoming Events', 'Past Events', 'Webinars', 'Conferences']
    },
    {
      label: 'Free Learnings',
      href: '/learnings',
      dropdown: ['Cybersecurity Basics', 'Threat Intelligence', 'Ethical Hacking', 'Security Tools']
    },
    {
      label: 'Certifications',
      href: '/certifications',
      dropdown: ['CISSP Prep', 'CEH Training']
    },
    {
      label: 'Courses',
      href: '/courses',
      dropdown: ['Advanced Threat Hunting', 'Cloud Security', 'Penetration Testing', 'Incident Response']
    },
    {
      label: 'Store',
      href: '/store',
      dropdown: ['Books', 'Courses']
    }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveMobileItem(null)
  }

  const toggleMobileSubmenu = (itemLabel) => {
    setActiveMobileItem(activeMobileItem === itemLabel ? null : itemLabel)
  }

  return (
    <nav className="inset-x-0 top-20 z-40 bg-black/40 backdrop-blur-xl px-4 md:px-6 lg:px-12 xl:px-18 py-3 md:py-4 lg:py-6 border-t border-white/20">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex items-center space-x-1 lg:space-x-4 xl:space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                className="text-white/90 hover:text-white px-2 md:px-3 lg:px-4 py-2 text-sm lg:text-base xl:text-lg font-medium transition-all group-hover:text-white whitespace-nowrap"
                onMouseEnter={() => item.dropdown && setActiveDesktopMenu(item.label)}
                onMouseLeave={() => setActiveDesktopMenu(null)}
              >
                {item.label}
                {item.dropdown && (
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 inline-block group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {item.dropdown && activeDesktopMenu === item.label && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 md:w-72 lg:w-80 bg-black/90 backdrop-blur-xl rounded-2xl py-2 shadow-2xl border border-white/20"
                >
                  <div className="grid grid-cols-2 gap-1 md:gap-2 px-3 md:px-4">
                    {item.dropdown.map((subItem, i) => (
                      <a key={i} href="#" className="block px-3 py-3 md:py-4 text-sm md:text-base text-white/90 hover:text-white hover:bg-white/20 rounded-xl transition-all">
                        {subItem}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center justify-between">
        <motion.button
          className="p-2 rounded-lg hover:bg-white/20 transition-all relative z-50"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path className={`transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} d="M5 7l14 0" />
            <path className={`transition-all duration-300 my-1 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} d="M5 12l14 0" />
            <path className={`transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} d="M5 17l14 0" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay + Dropdown BELOW Hamburger */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-md md:hidden"
            onClick={toggleMobileMenu}
          />

          {/* Dropdown BELOW Hamburger - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-[60px] left-0 w-1/2 max-w-md mx-auto z-50 md:hidden bg-black/95 backdrop-blur-2xl border border-white/20 rounded-b-2xl shadow-2xl py-2 px-4"
          >
            <div className="space-y-1 max-h-[60vh] overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-white/10 last:border-b-0">
                  {/* Main Menu Item */}
                  <div
                    className="flex items-center justify-between py-1 px-1 cursor-pointer hover:bg-white/10 rounded-xl transition-all"
                    onClick={() => toggleMobileSubmenu(item.label)}
                  >
                    <a
                      href={item.href}
                      className="text-lg font-medium text-white/95 flex-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        setMobileMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <svg className={`w-5 h-5 transition-transform ${activeMobileItem === item.label ? 'rotate-180 text-cyan-400' : 'text-white/70'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>

                  {/* Submenu */}
                  {item.dropdown && activeMobileItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="ml-4 pl-4 border-l-2 border-cyan-400/50 space-y-2 pb-4"
                    >
                      {item.dropdown.map((subItem, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block py-3 px-4 text-base text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </nav>
  )
}
