export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto bg-black/90 backdrop-blur-xl py-20 px-8 md:px-24 border-t border-white/20">
      <div className="max-w-10xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-4 mb-20">
          {/* GCA Branding */}
          <div className="col-span-1 lg:col-span-1 lg:-ml-8">
            <div className="flex items-center space-x-2 justify-start">
              <div className="text-5xl font-black text-white tracking-widest">GCA</div>
              <div className="w-px h-12 bg-white/80"></div>
              <div className="text-sm font-semibold text-white/90 tracking-wide leading-snug">
                GLOBAL <br /> CYBERSECURITY <br /> ASSOCIATION
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-inter">Quick Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Membership</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Terms and Conditions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Cancellation and Refund</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition font-inter">Shipping and Exchange</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-inter">Stay Connected</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center space-x-3 text-white/70 hover:text-white transition group">
                <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition">
                  {/* YouTube Icon */}
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-1.02-.38-5.115-.38-5.115-.38s-4.095 0-5.115.38C8.06 3.564 7.5 4.5 7.5 4.5s-.5 1.02-.5 2.04v2.91c0 1.02.5 2.04.5 2.04s.56.936 1.385 1.316c1.02.38 5.115.38 5.115.38s4.095 0 5.115-.38c.825-.38 1.385-1.316 1.385-1.316s.5-1.02.5-2.04v-2.91c0-1.02-.5-2.04-.5-2.04s-.56-.936-1.385-1.316zM10 9.75v-3l3 1.5-3 1.5z"/>
                  </svg>
                </div>
                <span className="text-md font-inter">YouTube</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-white/70 hover:text-white transition group">
                <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition">
                  {/* LinkedIn Icon */}
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                </div>
                <span className="text-md font-inter">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-inter">Get in Touch</h4>
            <p className="text-white/70 text-md font-inter mb-2">team@gcaforum.com</p>
            <p className="text-white/70 text-md font-inter">Phone No. +91 8910392803</p>
          </div>
        </div>
          
        {/* Scroll to Top Button */}
<div className="flex justify-center mt-2">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="w-12 h-12 bg-[#00d4ff] text-black rounded-full shadow-lg hover:scale-105 transition"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm font-inter">
          <p>&copy; 2025 Global Cybersecurity Association. All Rights Reserved.</p>
        </div>


      </div>
    </footer>
  )
}

