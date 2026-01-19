import { motion } from 'framer-motion'
import heroImg from '../assets/frame.png' // adjust path if needed

export default function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-28 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-2 bg-linear-to-b from-[#0a0a23] via-[#1a0a3a] to-[#0a0a23]">

      {/* Left: Hero Text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } }
        }}
        className="w-full lg:w-auto flex flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left"
      >
        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1 }}
          //className="text-5xl md:text-6xl font-black text-white leading-tight"
          className="text-white leading-[1.1] tracking-tight mb-8"
        >
          <span className="block lg:ml-[470px] text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">Be</span>
          <span className="font-extrabold block text-5xl sm:text-6xl md:text-7xl lg:text-[94px]">Skilltastic!</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
          className="text-sm sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
        >
          <span className="block">BUILD, VALIDATE & STRENGTHEN YOUR CYBER SKILLS.</span>
          <span className="block">Open doors to resilient careers and future-ready opportunities.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 lg:ml-[350px] bg-linear-to-r from-[#00d4ff] to-[#0099ff] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 border-2 border-white/30"
        >
          Get Started →
        </motion.button>
      </motion.div>

      {/* Right: Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[400px] lg:w-[600px] lg:h-[550px]">
          {/* Glow Background */}
          {/*           <div className="absolute -inset-4 bg-linear-to-br from-[#00d4ff]/20 via-[#ff00d4]/10 to-[#00d4ff]/20 rounded-3xl backdrop-blur-xl shadow-2xl border border-[#00d4ff]/30 animate-pulse"></div>
 */}
          {/* Image Container */}
          {/*           <div className="relative w-full h-full bg-black/20 rounded-3xl backdrop-blur-xl border-2 border-[#00d4ff]/40 shadow-2xl overflow-hidden">
 */}            <img
            src={heroImg}
            alt="Skilltastic Hero"
            className="w-full h-full object-contain"
          />
        </div>
        {/* </div> */}
      </motion.div>
    </section>
  )
}
