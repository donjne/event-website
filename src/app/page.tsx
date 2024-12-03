"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const speakers = [
  {
    name: "Anatoly Yakovenko",
    role: "Founder @ Solana Labs",
    image: "/anatoly.png",
    topic: "Future of Solana Infrastructure"
  },
  {
    name: "Nwankwoala David",
    role: "Co-Founder @ ARK Labs",
    image: "/dav.png",
    topic: "Building High-Performance Solana Programs with Rust"
  },
  {
    name: "Kanav Kariya",
    role: "CEO @ Jump Crypto",
    image: "/kanav.png",
    topic: "DeFi 3.0: The Next Wave"
  },
];

const stats = [
  { number: "10,000+", label: "Attendees" },
  { number: "200+", label: "Speakers" },
  { number: "50+", label: "Countries" },
  { number: "100+", label: "Workshops" },
];

const sponsors = [
  { name: 'Solana Labs', image: '/solanalabs.png' },
  { name: 'Ore', image: '/ore.png' },
  { name: 'Phantom', image: '/phantom.png' },
  { name: 'SMetadao', image: '/metadao.png' },
  { name: 'Squads', image: '/squads.png' },
  { name: 'Jupiter', image: '/jupiter.png' },
  { name: 'Helius', image: '/helius.png' },
  { name: 'Anza', image: '/anza.png' },
  // All 8 sponsor images
];

const highlights = [
  {
    title: "Developer Summit",
    description: "Two full days of hands-on workshops, technical deep-dives, and collaborative coding sessions.",
    icon: "💻"
  },
  {
    title: "Ecosystem Showcase",
    description: "Explore hundreds of projects building the future of Solana, from DeFi to Gaming.",
    icon: "🌐"
  },
  {
    title: "Networking Events",
    description: "Connect with industry leaders, investors, and fellow builders in exclusive networking sessions.",
    icon: "🤝"
  },
];

const HomePage = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };


  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-black">
      {/* Hero Section */}
      <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-0 mb-20 md:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #7928CA 0%, #000000 50%)",
              "radial-gradient(circle at 100% 100%, #FF0080 0%, #000000 50%)",
              "radial-gradient(circle at 0% 100%, #7928CA 0%, #000000 50%)",
              "radial-gradient(circle at 100% 0%, #FF0080 0%, #000000 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-20">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2 bg-purple-500/20 rounded-full text-purple-400 font-mono mb-8">
            NOV 15-20 • DUBAI
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            BREAKPOINT
          </span>
          <br />
          <span className="text-white">2025</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The world's premier Solana conference bringing together developers, creators, 
          and visionaries to shape the future of Web3.
        </motion.p>

        <motion.div
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Register Now Button */}
            <motion.button
              className="w-full md:w-auto px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-sm md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/register')}
            >
              Register Now
            </motion.button>

            {/* View Schedule Button */}
            <motion.button
              className="w-full md:w-auto px-4 py-3 md:px-8 md:py-4 bg-purple-500/10 border-2 border-purple-500 rounded-full text-white font-semibold text-sm md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('schedule')}
            >
              View Schedule
            </motion.button>
          </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-purple-500 rounded-full p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-purple-500 rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The World's Premier <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Solana Conference
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join us in Dubai for five days of innovation, collaboration, and celebration of the 
              Solana ecosystem. Breakpoint 2025 brings together the world's top developers, creators, 
              and visionaries to shape the future of Web3.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-purple-900/50 to-black/50 p-8 rounded-2xl border border-purple-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl mb-4 block">{highlight.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Featured Speakers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn from industry leaders and innovators who are shaping the future of blockchain technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-square">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{speaker.name}</h3>
                    <p className="text-purple-400 mb-2">{speaker.role}</p>
                    <p className="text-gray-300">{speaker.topic}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule Preview Section */}
      <section id="schedule" className="py-20 relative bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Event Schedule</h2>
            
            <div className="space-y-8">
              {[
                {
                  day: "Day 1",
                  title: "Developer Summit",
                  events: [
                    "Opening Keynote: State of Solana",
                    "Technical Workshops",
                    "Networking Lunch",
                    "Panel: Future of Web3"
                  ]
                },
                {
                  day: "Day 2",
                  title: "Ecosystem Deep Dive",
                  events: [
                    "DeFi Innovation Summit",
                    "GameFi Showcase",
                    "NFT & Creator Economy",
                    "Evening Networking Event"
                  ]
                }
              ].map((day, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-900/20 rounded-2xl p-8 border border-purple-500/20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-purple-400 text-xl mb-2">{day.day}</h3>
                      <h4 className="text-2xl font-bold text-white mb-4">{day.title}</h4>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {day.events.map((event, i) => (
                      <p key={i} className="text-gray-400">{event}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Experience Dubai
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us at the iconic Dubai World Trade Centre, where innovation meets luxury. 
                Experience the future of blockchain in one of the world's most forward-thinking cities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌆</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Dubai World Trade Centre</h3>
                    <p className="text-gray-400">Trade Centre 2, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">November 15-20, 2025</h3>
                    <p className="text-gray-400">5 days of innovation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6807744521714!2d55.28693439999999!3d25.2233459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42e912bc6305%3A0x1e486da5f44c6a2b!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2s!4v1701628060043!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Join the Future of
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Web3
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Don't miss the opportunity to be part of the world's largest Solana conference.
              Early bird tickets available now.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/register')}
              >
                Register Now
              </motion.button>
              <motion.button
className="px-8 py-4 bg-purple-500/10 border-2 border-purple-500 rounded-full text-white font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Sponsor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Partners</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Backed by the leading organizations in the Solana ecosystem
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={sponsor.image}
                alt={sponsor.name}
                className="w-32 h-32 object-contain"
              />
            </motion.div>
          ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">FAQ</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is Solana Breakpoint?",
                  answer: "Solana Breakpoint is the premier conference for developers, creators, and innovators in the Solana ecosystem. It's a five-day event featuring keynotes, workshops, networking events, and more."
                },
                {
                  question: "When and where is Breakpoint 2025?",
                  answer: "Breakpoint 2025 will be held from November 15-20, 2025, at the Dubai World Trade Centre in Dubai, UAE."
                },
                {
                  question: "What's included in the ticket?",
                  answer: "Your ticket includes access to all conference sessions, workshops, networking events, meals, and exclusive swag. VIP tickets include additional perks like private networking sessions and exclusive events."
                },
                {
                  question: "Are there speaking opportunities?",
                  answer: "Yes! We welcome speaker applications from developers, founders, and thought leaders in the Solana ecosystem. Applications open in early 2025."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-900/20 rounded-2xl p-8 border border-purple-500/20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Breakpoint
              </h3>
              <p className="text-gray-400">The future of Solana awaits.</p>
            </div>
            {[
              {
                title: "Event",
                links: ["Schedule", "Speakers", "Workshops", "Sponsors"]
              },
              {
                title: "Resources",
                links: ["FAQ", "Travel", "Venue", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Code of Conduct"]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-white font-bold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-400">
            <p>© 2025 Solana Breakpoint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;