import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {         
  return (
    <div className='flex flex-col left-0 bottom-0 w-screen'>
    <footer className="bg-gray-700 text-white py-10 w-screen overflow-hidden mt-15">
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl md:text-xl font-serif font-bold mb-4 text-[#8046FD]">eVento</h3>
            <p className="mb-1 text-sm font-serif">Discover the power of connection with Communion. Uniting diverse
                 communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/manash.baruah.14811" target="_blank" className="text-white hover:text-blue-400" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white hover:text-blue-400" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/manashbaruah_" target="_blank" className="text-white hover:text-blue-400" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/in/manash-baruah-mb" target="_blank" className="text-white hover:text-blue-400" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Undriling" target="_blank" className="text-white hover:text-blue-400" aria-label="Github">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          
          <div className='text-sm font-serif'>
            <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/create-event" className="hover:text-blue-400">Create Event</a></li>
              <li><a href="/view-event" className="hover:text-blue-400">Explore Events</a></li>
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
          
          <div className='text-sm font-serif'>
            <h3 className="text-lg md:text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/" className="hover:text-blue-400">Our Team</a></li>
              <li><a href="/" className="hover:text-blue-400">Careers</a></li>
              <li><a href="/" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div className='text-sm font-serif'>
            <h3 className="text-lg md:text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="/" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-blue-400">Cookie Policy</a></li>
              <li><a href="/" className="hover:text-blue-400">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center font-serif text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Evento . All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Designed by Undriling for communities the world</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer;