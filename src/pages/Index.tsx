import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';

const roles = ["Inclusive Innovation.", "Blockchain for Every Ethiopian.", "July 31 - August 1, 2026."];

const chatSequence = [
  { role: "user", text: "When is EBW 2026?" },
  { role: "typing" },
  { role: "ai", text: "EBW 2026 runs July 31 - August 1 at the Science Museum, Addis Ababa. Two days of keynotes, workshops, and networking!" },
  { role: "ai", text: "✅ Early bird tickets are 50% off until June 30!" },
  { role: "user", text: "Who is speaking?" },
  { role: "typing" },
  { role: "ai", text: "We have 30+ speakers confirmed including blockchain pioneers, fintech leaders, and policymakers from across Africa." },
  { role: "ai", text: "🎉 Full speaker lineup will be announced in May!" },
  { role: "user", text: "How do I register?" },
  { role: "typing" },
  { role: "ai", text: "Visit ebw2026.com/register or click Register Now. Student and developer scholarships are available!" },
  { role: "ai", text: "🚀 See you at EBW 2026!" },
];

const Index: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    const delays = [600, 800, 2200, 1800, 1000, 600, 2200, 1800, 1000, 600, 2200, 4000];
    if (chatCount >= chatSequence.length) {
      const t = setTimeout(() => setChatCount(0), 5000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setChatCount((v) => v + 1), delays[chatCount] ?? 1500);
    return () => clearTimeout(t);
  }, [chatCount]);

  useEffect(() => {
    const targetText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < targetText.length) {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const faqs = [
    {
      q: "What is EBW 2026?",
      a: "EBW 2026 (Ethiopian Blockchain Week) is Ethiopia's premier blockchain conference, taking place July 31 - August 1 at the Science Museum in Addis Ababa. It features keynotes, workshops, a hackathon, and networking with 500+ attendees."
    },
    {
      q: "Where is the venue?",
      a: "The conference is held at the Science Museum, Addis Ababa, Ethiopia. The venue is centrally located with easy access to hotels, restaurants, and public transportation."
    },
    {
      q: "How do I get tickets?",
      a: "Tickets are available on our registration page. Early bird pricing (up to 50% off) runs until June 30. We also offer scholarship tickets for students and developers from underserved regions."
    },
    {
      q: "Are there scholarships available?",
      a: "Yes! We offer a generous scholarship program covering tickets, travel, and accommodation for students, developers, and community builders. Applications are reviewed on a rolling basis."
    },
    {
      q: "Can I sponsor or exhibit?",
      a: "Absolutely! We have multiple sponsorship tiers available. Exhibitor spots are also open for projects, startups, and protocols. Contact our partnerships team for details."
    }
  ];

  const handleLaunch = () => {
    const el = document.getElementById('cta-register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#001B4D] min-h-screen text-white font-body selection:bg-ebw-gold/30">
      
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section className="hero">
        <div className="absolute inset-0 bg-pixel-grid-animated opacity-30 pointer-events-none" />
        <div className="absolute top-20 left-[8%] w-16 h-16 border border-ebw-gold/20 rotate-45 animate-float-slow" />
        <div className="absolute top-40 right-[12%] w-24 h-24 border border-ebw-gold/15 rotate-12 animate-float-medium" />
        <div className="absolute bottom-32 left-[18%] w-12 h-12 bg-ebw-gold/10 rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 left-[4%] w-20 h-20 border-2 border-ebw-gold/10 rotate-[30deg] animate-float-medium" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-[6%] w-14 h-14 bg-ebw-gold/8 rotate-[60deg] animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[60%] left-[55%] w-10 h-10 border border-ebw-gold/20 rotate-[20deg] animate-float-medium" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[12%] left-[42%] w-8 h-8 bg-ebw-gold/15 rotate-45 animate-float-slow" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[15%] right-[28%] w-16 h-16 border border-ebw-gold/10 rotate-[75deg] animate-float-medium" style={{ animationDelay: "2.5s" }} />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-[72px] gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 max-w-[650px] text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ebw-gold/10 border border-ebw-gold/20 text-ebw-gold text-xs font-semibold mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-ebw-gold animate-pulse"></div>
                Ethiopian Blockchain Week 2026
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display font-bold leading-[1.08] tracking-[-0.025em] mb-6" 
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.8rem)' }}
            >
              Inclusive Innovation<br/><span className="text-ebw-gold font-mono tracking-wider text-lg sm:text-xl">for Every Ethiopian</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl mb-3 font-semibold"
            >
              <span className="typing-cursor text-gradient-gold">{displayText}</span>
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/60 text-base sm:text-lg lg:text-xl mb-10 leading-relaxed max-w-[550px]"
            >
              Join 500+ developers, founders, and innovators at Ethiopia's premier blockchain conference. July 31 - August 1, 2026.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button onClick={handleLaunch} className="btn-solana text-sm px-8 py-4">Register Now</button>
              <a href="#how-it-works">
                <button className="btn-ghost text-sm px-8 py-4">How it Works →</button>
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-6 sm:gap-10 mt-12 sm:mt-16 justify-center lg:justify-start flex-wrap"
            >
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display">500+</div>
                <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest mt-1">Attendees</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display">30+</div>
                <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest mt-1">Speakers</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-ebw-gold">2</div>
                <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest mt-1">Days</div>
              </div>
            </motion.div>
          </motion.div>

          {/* AI Chat Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full max-w-[480px] hidden lg:block animate-float-slow"
          >
            <div className="chat-window flex flex-col">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-ebw-gold rounded-full flex items-center justify-center font-bold">E</div>
                  <div>
                    <div className="text-sm font-bold">EBW</div>
                    <div className="text-[10px] text-ebw-gold flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-ebw-gold"></div>
                      Online
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 min-h-[300px] max-h-[300px] overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {chatSequence.slice(0, chatCount).map((msg, i) => (
                    msg.role === "typing" ? (
                      <motion.div
                        key={`typing-${i}`}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -60 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 px-4 py-3 shrink-0"
                      >
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-ebw-gold/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 rounded-full bg-ebw-gold/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 rounded-full bg-ebw-gold/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                        <span className="text-[11px] text-ebw-gold/60 font-mono">EBW is thinking...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`msg-${i}`}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -60 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`chat-bubble shrink-0 ${msg.role === "user" ? "user" : "ai"}`}
                      >
                        {msg.text}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="mt-8 relative">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/30 text-sm flex items-center justify-between">
                  Type a command...
                  <div className="w-5 h-5 bg-ebw-gold rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="text-[10px] uppercase tracking-[0.2em]">Scroll</div>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* ════════════ LOGO TICKER ════════════ */}
      <section className="py-20 border-y border-white/5 bg-black/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-ebw-mesh-dark" />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-[11px] uppercase tracking-[0.3em] mb-12 relative z-10"
        >
          Proudly supported by our partners
        </motion.p>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {['Phantom', 'Backpack', 'Solflare', 'Ledger', 'Magic Eden', 'Atomic', 'Exodus', 'Trust Wallet'].concat(['Phantom', 'Backpack', 'Solflare', 'Ledger', 'Magic Eden', 'Atomic', 'Exodus', 'Trust Wallet']).map((wallet, i) => (
              <div key={i} className="flex items-center gap-3 text-white/40 font-display font-bold text-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10">
                  {wallet === 'Phantom' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><path d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64 64-28.66 64-64S99.34 0 64 0z" fill="#AB9FF2"/><path d="M88 52H72c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V56c0-2.2-1.8-4-4-4z" fill="white"/><path d="M56 52H40c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V56c0-2.2-1.8-4-4-4z" fill="white"/></svg>
                  )}
                  {wallet === 'Backpack' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="28" fill="#E5E7EB"/><path d="M88 44H40c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h48c2.2 0 4-1.8 4-4V48c0-2.2-1.8-4-4-4z" fill="#111827"/><path d="M52 56h24v16H52V56z" fill="#E5E7EB"/></svg>
                  )}
                  {wallet === 'Solflare' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="24" fill="#FC7B7B"/><path d="M96 48L64 96 32 48h64z" fill="white"/><circle cx="64" cy="48" r="8" fill="white"/></svg>
                  )}
                  {wallet === 'Ledger' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="16" fill="#000"/><path d="M96 32H80v64h16V32zM48 32H32v40c0 13.25 10.75 24 24 24h8V68H48V32z" fill="white"/></svg>
                  )}
                  {wallet === 'Magic Eden' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="24" fill="#E42575"/><path d="M96 48c0 8.84-14.33 32-32 32S32 56.84 32 48s14.33-16 32-16 32 7.16 32 16z" fill="white"/><circle cx="48" cy="44" r="4" fill="#E42575"/><circle cx="80" cy="44" r="4" fill="#E42575"/></svg>
                  )}
                  {wallet === 'Atomic' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="28" fill="#2991F1"/><ellipse cx="64" cy="64" rx="24" ry="24" fill="white"/><ellipse cx="64" cy="52" rx="16" ry="8" fill="#2991F1"/><circle cx="64" cy="40" r="6" fill="white"/></svg>
                  )}
                  {wallet === 'Exodus' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="28" fill="#1B1B1B"/><path d="M88 40L40 88 64 96l24-24-8-8 8-24z" fill="#8B5CF6"/><path d="M40 40l48 48-24 8-24-24 8-8-8-24z" fill="#A78BFA"/></svg>
                  )}
                  {wallet === 'Trust Wallet' && (
                    <svg width="20" height="20" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="32" fill="#3375BB"/><path d="M64 28c-8 0-20 4-20 16v20c0 24 20 36 20 36s20-12 20-36V44c0-12-12-16-20-16z" fill="white" opacity="0.9"/><path d="M64 32c-6 0-14 3-14 12v16c0 18 14 28 14 28s14-10 14-28V44c0-9-8-12-14-12z" fill="#3375BB"/></svg>
                  )}
                </div>
                {wallet}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section id="how-it-works" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-[72px] relative overflow-hidden bg-ebw-mesh-dark scroll-mt-20">
        <div className="absolute top-1/2 right-0 w-[40%] h-[60%] bg-ebw-gold/5 blur-[120px] rounded-full pointer-events-none animate-float-slow"></div>
        <div className="absolute -left-32 bottom-0 w-64 h-64 bg-ebw-gold/[0.03] rounded-full blur-[100px] pointer-events-none animate-float-medium"></div>
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-20"
          >
            <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-4">&gt; Simple by Design</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">How It Works</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10">
            {[
              { num: '01', title: 'Register for EBW', desc: 'Secure your spot at EBW 2026. Early bird tickets available with significant discounts until June 30.' },
              { num: '02', title: 'Attend the Conference', desc: 'Join us July 31 - August 1 at the Science Museum, Addis Ababa for keynotes, workshops, and networking.' },
              { num: '03', title: 'Connect & Build', desc: 'Meet developers, founders, and investors. Collaborate on projects shaping Ethiopia\'s blockchain future.' }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group text-center md:text-left"
              >
                <div className="text-5xl sm:text-6xl font-display font-black text-white/5 mb-6 group-hover:text-ebw-gold/10 transition-colors">{step.num}</div>
                <h4 className="text-lg sm:text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CAPABILITIES ════════════ */}
      <section id="features" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-[72px] bg-black/40 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-ebw-mesh" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-4">&gt; Highlights</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">Conference Highlights</h2>
            <p className="text-white/40 max-w-[600px] mx-auto text-base sm:text-lg">Two days of world-class content, connections, and collaboration at Ethiopia's premier blockchain event.</p>
          </motion.div>
          
          <div className="feat-grid">
            {[
              { tag: 'Talks', title: 'Keynote Speakers', desc: 'Hear from leading voices in blockchain, AI, and fintech from across Africa and the world.' },
              { tag: 'Learn', title: 'Interactive Workshops', desc: 'Hands-on sessions covering Solana development, DeFi, NFTs, and real-world blockchain applications.' },
              { tag: 'Network', title: 'Networking Opportunities', desc: 'Connect with 500+ developers, founders, investors, and policymakers shaping Ethiopia\'s blockchain future.' },
              { tag: 'Build', title: 'Hackathon', desc: 'Build innovative solutions on Solana and compete for prizes. Open to developers of all skill levels.' },
              { tag: 'Expo', title: 'Exhibition Hall', desc: 'Explore cutting-edge projects, startups, and protocols from Ethiopia\'s growing blockchain ecosystem.' },
              { tag: 'Funding', title: 'Investor Meetups', desc: 'Pitch your ideas to VCs and angel investors actively funding African blockchain startups.' },
              { tag: 'Social', title: 'Community Meetups', desc: 'Side events, after-parties, and informal gatherings to build lasting connections.' },
              { tag: 'Access', title: 'Scholarship Program', desc: 'Sponsored tickets for students, developers, and community builders from underserved regions.' }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="feat-card"
              >
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-6 bg-ebw-gold/10 text-ebw-gold">
                  {feat.tag}
                </div>
                <h4 className="text-lg font-bold mb-3">{feat.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ COMPARISON ════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-ebw-mesh-dark" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-4">&gt; Compare</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">Why EBW 2026?</h2>
            <p className="text-white/40 text-base sm:text-lg">Compare traditional conferences with EBW 2026's innovative approach to blockchain events.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto -mx-6 sm:mx-0"
          >
            <table className="comp-table">
              <thead className="comp-header">
                <tr>
                  <th>Feature</th>
                  <th>Traditional Conference</th>
                  <th>EBW 2026</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ticket Cost', '$500 - $2000+', '$50 - $200 (Early bird)'],
                  ['Content Access', 'Limited to one track', 'All tracks, workshops & expo'],
                  ['Networking', 'Expensive add-ons', 'Built-in networking app'],
                  ['Scholarships', 'Rare or none', 'Generous student & dev scholarships'],
                  ['Community Focus', 'Corporate-heavy', 'Local-first, inclusive innovation']
                ].map((row, i) => (
                  <motion.tr 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="comp-row"
                  >
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ════════════ ROADMAP ════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-[72px] bg-black/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-ebw-mesh" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-24"
          >
            <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-4">&gt; Timeline</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">Event Schedule</h2>
          </motion.div>
          
          <div className="relative">
            <div className="roadmap-line"></div>
            
            <div className="space-y-16 sm:space-y-24">
              {[
                { phase: 'Pre-Event', title: 'Early Bird Registration', date: 'Now - June 30', items: ['Discounted tickets available', 'Speaker submissions open', 'Hackathon registration live'], status: 'In Progress' },
                { phase: 'Day 1', title: 'Main Conference', date: 'July 31, 2026', items: ['Opening keynotes', 'Workshops & panels', 'Networking lunch & expo'] },
                { phase: 'Day 2', title: 'Hackathon & Closing', date: 'August 1, 2026', items: ['Hackathon finals & demos', 'Investor meetups', 'Closing ceremony & after-party'] },
                { phase: 'Post-Event', title: 'Community Building', date: 'Q3-Q4 2026', items: ['Grant program launch', 'Monthly meetups', 'EBW 2027 announcement'] }
              ].map((milestone, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row gap-6 md:gap-0 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 text-center md:text-right md:px-12">
                    {i % 2 === 0 ? (
                      <>
                        <div className="text-ebw-gold font-bold mb-1">{milestone.phase}</div>
                        <h4 className="text-lg sm:text-xl font-bold mb-4">{milestone.title}</h4>
                        <div className="text-white/30 text-sm font-display">{milestone.date}</div>
                      </>
                    ) : (
                      <div className="space-y-2 text-center md:text-right">
                        {milestone.items.map((item, j) => (
                          <div key={j} className="text-white/50 text-sm">{item}</div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="roadmap-dot"></div>
                  
                  <div className="flex-1 text-center md:text-left md:px-12">
                    {i % 2 !== 0 ? (
                      <>
                        <div className="text-ebw-gold font-bold mb-1">{milestone.phase}</div>
                        <h4 className="text-lg sm:text-xl font-bold mb-4">{milestone.title}</h4>
                        <div className="text-white/30 text-sm font-display">{milestone.date}</div>
                      </>
                    ) : (
                      <div className="space-y-2 text-center md:text-left">
                        {milestone.items.map((item, j) => (
                          <div key={j} className="text-white/50 text-sm">{item}</div>
                        ))}
                        {milestone.status && <div className="inline-block px-2 py-0.5 bg-ebw-gold/10 text-ebw-gold text-[10px] font-bold rounded mt-2 uppercase">{milestone.status}</div>}
                      </div>
                    )}
                  </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section id="faq" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-[72px] relative scroll-mt-20">
        <div className="absolute inset-0 bg-pixel-grid opacity-20 pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-4">&gt; Support</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">Frequently Asked Questions</h2>
            <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto">Everything you need to know about EBW 2026.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-start">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:bg-white/[0.06] hover:border-ebw-gold/20 transition-all duration-300 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${openFaq === i ? 'text-ebw-gold' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.q}
                  </h3>
                  <div className={`w-6 h-6 rounded-full border shrink-0 flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-ebw-gold/20 border-ebw-gold/40 rotate-45' : 'border-white/10 group-hover:border-white/20'}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={openFaq === i ? 'text-ebw-gold' : 'text-white/30'}>
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/50 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section id="cta-register" className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_hsl(263_100%_63%_/_0.08)_0%,_transparent_60%)]" />
        <div className="max-w-[700px] mx-auto py-28 sm:py-36 px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Ready to Join EBW 2026?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/50 text-base sm:text-lg mt-5 mb-10 max-w-md mx-auto leading-relaxed"
          >
            Register now and be part of Ethiopia's premier blockchain event. Early bird tickets are selling fast!
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLaunch} 
            className="btn-solana text-base px-10 py-4"
          >
            Register Now
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-8 mt-14 text-[11px] font-medium uppercase tracking-widest text-white/25 flex-wrap"
          >
            <span>Addis Ababa</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>July 31 - Aug 1</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Inclusive Innovation</span>
          </motion.div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="footer-section py-16 sm:py-20 px-6 sm:px-10 lg:px-[72px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 sm:gap-12 mb-16 sm:mb-20">
            <div className="max-w-[300px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-ebw-gold rounded-lg flex items-center justify-center font-display font-extrabold text-white">E</div>
                <span className="font-display font-extrabold text-xl tracking-[0.05em] uppercase">EBW</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-8">Ethiopian Blockchain Week 2026. Inclusive innovation for every Ethiopian. July 31 - August 1, Addis Ababa.</p>
              <a href="https://github.com/abdunur-dev/ebw-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-ebw-gold transition-colors text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span className="text-xs">GitHub</span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-ebw-gold">Platform</h5>
                <ul className="space-y-4 text-sm text-white/40">
                  <li onClick={handleLaunch} className="hover:text-white cursor-pointer transition-colors">Register Now</li>
                  <li className="hover:text-white cursor-pointer transition-colors">How it Works</li>
                  <li className="hover:text-white cursor-pointer transition-colors">API Docs</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-ebw-gold">Community</h5>
                <ul className="space-y-4 text-sm text-white/40">
                  <li className="hover:text-white cursor-pointer transition-colors">X / Twitter</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Discord</li>
                  <li className="hover:text-white cursor-pointer transition-colors">GitHub</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-white/60">Legal</h5>
                <ul className="space-y-4 text-sm text-white/40">
                  <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/20">
              Forged with <span className="text-ebw-gold">❤</span> & code
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/20">
              Addis Ababa, Ethiopia
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              © 2026 EBW. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
