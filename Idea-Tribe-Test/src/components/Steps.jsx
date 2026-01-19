import { motion, useScroll, useTransform } from 'framer-motion'

export default function Steps() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]) // Parallax effect

  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto h-auto md:h-[280px] pt-8 md:pt-[64px] pb-12 md:pb-[64px] px-[32px] md:px-[48px] lg:px-[64px] gap-[10px] border-b border-white/10 overflow-hidden"
    >
      {/* Background Image - Parallax */}
      <motion.div
        style={{ y, backgroundImage: "url('/background.jpg')" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-2xl md:text-[44px] leading-relaxed md:leading-[60px] font-bold text-center tracking-[-2%] font-inter max-w-[1216px] mx-auto"
        style={{
          textShadow:
            '0px 10px 15px rgba(16, 24, 40, 0.1), 0px 4px 6px rgba(16, 24, 40, 0.1)',
        }}
      >
        Three steps. A million possibilities.
      </motion.h2>
    </section>
  )
}
