import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cards() {
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      setScrollOffset(Math.max(0, (scroll - 1200) / 4))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cardsData = [
    {
      num: '01',
      title: 'Build',
      subtitle: 'Identify Your\nCybersecurity Skills',
      desc: 'Build a personalized, role-ready Skill Map in 15 minutes.\nDesigned for fresh graduates and professionals.',
      image: '/Build.png',
      color: 'from-orange-500/80 via-red-500/70 to-pink-500/50',
      layout: 'left'
    },
    {
      num: '02',
      title: 'Validate',
      subtitle: 'Validate to\nConquer',
      desc: 'Verify your cybersecurity skills through targeted questions and mini challenges.\nSkills: Network Security, Threat Mitigation, Intrusion Detection, System Hardening.',
      image: '/Validate.png',
      color: 'from-emerald-500/80 via-teal-500/70 to-cyan-500/50',
      layout: 'right'
    },
    {
      num: '03',
      title: 'Grow',
      subtitle: 'Unleash Your\n Potential',
      desc: 'Use personalized recommendations and role-aligned learning paths to strengthen your capabilities.\nCourses: Threat Detection, Network Defense, Security Certification.',
      image: '/Grow.png',
      color: 'from-purple-500/80 via-indigo-500/70 to-blue-500/50',
      layout: 'left'
    }
  ]

  return (
    <section className="w-full max-w-[1440px] mx-auto min-h-[2098px] md:min-h-[1400px] rounded-t-[64px] bg-gradient-to-b from-[#000063] to-black pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
      <div className="h-full flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center pt-16 ">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1000px] lg:max-w-[1200px] bg-[#090909] border-4 md:border-6 border-white/40 rounded-[24px] md:rounded-[32px] p-4 sm:p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 md:gap-12 relative shadow-2xl overflow-hidden"
            style={{
              transform: `translateY(${scrollOffset * (index + 1) * 15}px)`,
              zIndex: 3 - index
            }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Card Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[24px] md:rounded-[32px]" />

            
<div 
    className={`relative z-10 flex flex-col ${
    card.layout === 'right'
      ? 'items-end text-right lg:order-2'
      : 'items-start text-left lg:order-1'
  }`}>
  
    
  {/* Num */}
  <div className="text-[104px] md:text-[120px] lg:text-[140px]  font-black text-white/90">
    {card.num}
  </div>

  {/* Title */}
  <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white tracking-tight">
    {card.title}
  </h1>
</div>


            {/* Image and Description Container */}
            <div className={`relative z-10 flex flex-col gap-6 flex-1 ${card.layout === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
              {/* Image Container */}
              <div className="w-full h-auto border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl bg--to-r from-white/10 to-transparent/50">
                <img
                  src={card.image}
                  alt={`${card.title} Image`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Subtitle + Description BELOW Image */}
              <div className="flex flex-col gap-4">
                {card.subtitle && (
  <div className="flex flex-col">
    {card.subtitle.split('\n').map((line, i) => (
      <span
        key={i}
        className={
          i === 0
            ? "text-xl md:text-2xl lg:text-[28px] font-semibold text-white/70"
            : "text-xl md:text-2xl lg:text-[28px] font-bold text-white"
        }
      >
        {line}
      </span>
    ))}
  </div>
)}

                <div className="text-lg md:text-xl lg:text-[20px] leading-relaxed text-white/70 whitespace-pre-line">
                  {card.desc}
                </div>
              </div>
            </div>

            
          </motion.div>
        ))}
      </div>
    </section>
  )
}
