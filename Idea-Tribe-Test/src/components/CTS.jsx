import { motion, useScroll, useTransform } from 'framer-motion'
//import bgImg from '../assets/background1.png' // use this if image is in src/assets
// If it's in public/, remove the import and use url('/background1.png')

export default function CTA() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]) // Parallax effect

  return (
    <section 
      className="w-full max-w-[1440px] mx-auto min-h-fit py-12 px-8 md:px-24 lg:px-32 relative overflow-hidden"
      style={{ y }}
    >
      {/* Parallax Background */}
      <div 
         style={{ y, backgroundImage: "url('/background1.jpg')" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-sm" />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Heading + Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight font-inter tracking-tight">
            Join us on a journey to Excellence
          </h1>
          <motion.button 
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="bg-linear-to-r from-[#0091ff] to-[#0073ff] text-black px-1 py-1 rounded-lg text-md shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 border-2 border-white/30 font-inter"
          >
            Get Started →
          </motion.button>
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl lg:text-4xl text-white/90 font-inter leading-relaxed mt-8">
          Powered by 
          <span className= "font-bold"> IdeaTribe</span> 
        </p>
      </motion.div>
    </section>
  )
}
