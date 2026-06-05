import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, Sparkles, Wheat, Wallet, Fingerprint, Building2, Cpu, Globe,
  Crown, Award, Medal, Layers, Wrench, Code2, PartyPopper, Store,
  ArrowRight, Mail, Phone, User, Building, Globe2, MessageSquare,
  Link2, Layers3, Loader2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

type TierId = 'title' | 'platinum' | 'gold' | 'silver' | 'workshop' | 'hackathon' | 'side' | 'expo';

type Tier = {
  id: TierId;
  name: string;
  price: string;
  tag?: string;
  accent: string;
  icon: React.ReactNode;
  benefits: string[];
};

const tiers: Tier[] = [
  {
    id: 'title',
    name: 'Title Sponsor',
    price: '$25,000',
    tag: 'Exclusive',
    accent: 'from-yellow-300 via-ebw-gold to-amber-500',
    icon: <Crown size={20} />,
    benefits: [
      'Naming rights: "EBW 2026 presented by [Brand]"',
      'Main-stage headline logo & opening keynote',
      'Premium 6×4m island booth in highest-traffic zone',
      '30-min keynote speaking slot on Day 1',
      '20 full-access conference passes',
      'Logo on all marketing, signage, livestream & swag',
      'VIP dinner host + backstage all-access',
      'Featured press release & dedicated blog post',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Sponsor',
    price: '$15,000',
    accent: 'from-slate-200 via-slate-300 to-slate-400',
    icon: <Award size={20} />,
    benefits: [
      'Premium 4×4m booth with priority placement',
      '20-min featured speaking slot',
      '15 full-access conference passes',
      'Logo on website, banners, livestream & swag',
      'Private networking room for meetings',
      'Co-branded social media campaign',
      'Hackathon prize category naming rights',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: '$10,000',
    accent: 'from-amber-300 via-yellow-500 to-amber-600',
    icon: <Medal size={20} />,
    benefits: [
      'Standard 3×4m booth in featured zone',
      'Confirmed panel seat',
      '10 full-access conference passes',
      'Logo on website, banner & swag',
      'Social media mentions (3x pre-event + 2x live)',
      'Attendee list access (opt-in)',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: '$5,000',
    accent: 'from-zinc-300 via-zinc-400 to-zinc-500',
    icon: <Layers size={20} />,
    benefits: [
      'Standard 3×4m exhibition booth',
      '5 full-access conference passes',
      'Logo on website & shared banner wall',
      'Social media mentions (1x pre-event + 1x live)',
      'Listed in post-event recap report',
    ],
  },
  {
    id: 'workshop',
    name: 'Workshop Sponsor',
    price: '$5,000',
    accent: 'from-sky-300 via-sky-400 to-sky-500',
    icon: <Wrench size={20} />,
    benefits: [
      'Host one branded 90-min workshop (capacity 60)',
      'Workshop listed in official schedule',
      'Speaker passes for 3 facilitators',
      'Logo on workshop page & signage',
      'Email blast to registered attendees',
    ],
  },
  {
    id: 'hackathon',
    name: 'Hackathon Sponsor',
    price: '$5,000',
    accent: 'from-fuchsia-300 via-fuchsia-400 to-fuchsia-500',
    icon: <Code2 size={20} />,
    benefits: [
      'Title sponsorship of a hackathon track',
      'Branded prize pool for winning team',
      'Mentor passes for 4 team members',
      'Logo on hackathon dashboard & t-shirts',
      'Judging panel seat',
    ],
  },
  {
    id: 'side',
    name: 'Side Event Sponsor',
    price: '$5,000',
    accent: 'from-emerald-300 via-emerald-400 to-emerald-500',
    icon: <PartyPopper size={20} />,
    benefits: [
      'Host one official side event (capacity 100)',
      'Venue & AV coordination included',
      'Logo on side event page & signage',
      '6 social-only passes',
      'Email invite to opt-in attendees',
    ],
  },
  {
    id: 'expo',
    name: 'Expo Booth',
    price: '$2,000',
    tag: 'Entry',
    accent: 'from-cyan-300 via-cyan-400 to-cyan-500',
    icon: <Store size={20} />,
    benefits: [
      '3×4m exhibition booth in a themed zone',
      '2 exhibitor passes (no keynote access)',
      'Logo on event website exhibitor page',
      'Access to expo-floor networking nights',
    ],
  },
];

const zones = [
  { name: 'Agri-Tech Zone',         count: 8,  color: '#22C55E', icon: <Wheat size={22} /> },
  { name: 'DeFi Zone',              count: 12, color: '#8B5CF6', icon: <Wallet size={22} /> },
  { name: 'Identity Zone',          count: 6,  color: '#F59E0B', icon: <Fingerprint size={22} /> },
  { name: 'Enterprise Zone',        count: 10, color: '#3B82F6', icon: <Building2 size={22} /> },
  { name: 'Infrastructure Zone',    count: 10, color: '#EC4899', icon: <Cpu size={22} /> },
  { name: 'Global Partners Zone',   count: 6,  color: '#06B6D4', icon: <Globe size={22} /> },
];

const whyBullets = [
  'Direct access to Ethiopian government officials and policymakers',
  'Connect with 1,000+ attendees from across Africa',
  'Brand visibility across all event marketing channels',
  'Opportunity to shape the blockchain ecosystem from the ground up',
];

const ethiopiaStats = [
  { value: '139M',  label: 'Population',     sub: 'Second most populous nation in Africa' },
  { value: '70%',   label: 'Youth Under 30', sub: 'Massive digital-native demographic' },
  { value: '12%',   label: 'GDP Growth Rate', sub: "One of Africa's fastest growing economies" },
  { value: '50M+',  label: 'Mobile Users',   sub: 'Rapidly growing mobile internet penetration' },
];

const chains = ['Ethereum', 'Solana', 'Polygon', 'Arbitrum', 'Base', 'Celo', 'Lisk', 'Cardano', 'Avalanche', 'Other / Multi-chain'];
const products = ['DeFi Protocol', 'NFT / Gaming', 'Infrastructure', 'Exchange', 'Wallet', 'Identity / KYC', 'Agri-Tech', 'Enterprise Solution', 'Other'];

const SectionLabel: React.FC<{ children: React.ReactNode; center?: boolean }> = ({ children, center }) => (
  <div className={`text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-3 ${center ? 'text-center' : ''}`}>
    {`> ${children}`}
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; sub?: string; center?: boolean }> = ({ children, sub, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">{children}</h2>
    <div className={`w-16 h-0.5 bg-ebw-gold/40 ${center ? 'mx-auto' : ''} mb-5`} />
    {sub && <p className={`text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>{sub}</p>}
  </div>
);

const Partnership: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TierId>('title');

  // Sponsor form state
  const [sponsor, setSponsor] = useState({ fullName: '', email: '', company: '', package: '', message: '' });
  const updateSponsor = <K extends keyof typeof sponsor>(k: K, v: (typeof sponsor)[K]) => setSponsor((s) => ({ ...s, [k]: v }));
  const [sponsorSent, setSponsorSent] = useState(false);
  const [sponsorSending, setSponsorSending] = useState(false);
  const sponsorValid = sponsor.fullName.trim() && /\S+@\S+\.\S+/.test(sponsor.email) && sponsor.company.trim();

  const submitSponsor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sponsorValid) return;
    setSponsorSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSponsorSending(false);
    setSponsorSent(true);
  };

  // Booth form state
  const [booth, setBooth] = useState({ company: '', chain: '', product: '', website: '', email: '', notes: '' });
  const updateBooth = <K extends keyof typeof booth>(k: K, v: (typeof booth)[K]) => setBooth((b) => ({ ...b, [k]: v }));
  const [boothSent, setBoothSent] = useState(false);
  const [boothSending, setBoothSending] = useState(false);
  const boothValid = booth.company.trim() && booth.product && booth.website.trim() && /\S+@\S+\.\S+/.test(booth.email);

  const submitBooth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!boothValid) return;
    setBoothSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setBoothSending(false);
    setBoothSent(true);
  };

  const activeTier = tiers.find((t) => t.id === activeTab)!;
  const totalBooths = zones.reduce((s, z) => s + z.count, 0);

  return (
    <div className="bg-[#001B4D] min-h-screen text-white font-body selection:bg-ebw-gold/30">
      <Navbar />

      {/* ════════════ HERO / WHY ETHIOPIA ════════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-6 sm:px-10 lg:px-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-pixel-grid-animated opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-ebw-mesh" />
        <div className="absolute top-32 right-[8%] w-24 h-24 border border-ebw-gold/20 rotate-45 animate-float-slow" />
        <div className="absolute bottom-20 left-[10%] w-16 h-16 border border-ebw-gold/15 rotate-12 animate-float-medium" />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ebw-gold/10 border border-ebw-gold/20 text-ebw-gold text-xs font-semibold mb-6">
              <Sparkles size={12} /> The Opportunity
            </div>
            <h1 className="font-display font-bold leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
              <span className="text-white">Why </span>
              <span className="text-gradient-gold">Ethiopia?</span>
            </h1>
            <div className="w-16 h-0.5 bg-ebw-gold/40 mx-auto mb-7" />
            <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Ethiopia represents one of the largest untapped markets for blockchain technology. With a young,
              tech-eager population and government commitment to digital transformation, it's the perfect frontier
              for Web3 expansion.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ethiopiaStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="feat-card text-left relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-ebw-gold/5 blur-2xl rounded-full" />
                <div className="relative">
                  <div className="font-display font-black text-3xl sm:text-4xl text-gradient-gold mb-2">{s.value}</div>
                  <div className="text-sm font-semibold mb-1">{s.label}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PARTNER WITH THE MOVEMENT ════════════ */}
      <section className="px-6 sm:px-10 lg:px-[72px] pb-20 sm:pb-28 relative">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="ebw-card p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-ebw-gold/8 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-ebw-gold/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Why partner</SectionLabel>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">Partner with the Movement</h2>
                <div className="w-12 h-0.5 bg-ebw-gold/40 mb-6" />
                <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-7">
                  Ethiopian Blockchain Week offers unique access to a market that's ready for blockchain solutions.
                  From government partnerships to developer talent, your brand will be at the forefront of Africa's
                  digital revolution.
                </p>
                <ul className="space-y-3">
                  {whyBullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm sm:text-base"
                    >
                      <span className="w-6 h-6 rounded-full bg-ebw-gold/15 border border-ebw-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} className="text-ebw-gold" strokeWidth={3} />
                      </span>
                      <span className="text-white/80">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:block">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-ebw-gold/20 bg-gradient-to-br from-ebw-gold/10 via-ebw-navy to-ebw-navy p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-pixel-grid-animated opacity-30" />
                  <img src="/ebwlogo.png" alt="EBW 2026" className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(244,196,0,0.3)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ SPONSORSHIP TIERS ════════════ */}
      <section id="tiers" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-ebw-mesh-dark opacity-60 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <SectionLabel center>Sponsorship</SectionLabel>
          <SectionTitle center sub="Pick the tier that fits your goals. Every package includes recognition, passes, and dedicated partner support.">
            Sponsorship Tiers
          </SectionTitle>

          {/* Tier tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tiers.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  activeTab === t.id
                    ? 'bg-ebw-gold text-ebw-navy border-ebw-gold shadow-[0_0_25px_rgba(244,196,0,0.25)]'
                    : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active tier card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="ebw-card p-8 sm:p-10 lg:p-12 relative overflow-hidden"
            >
              <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${activeTier.accent} pointer-events-none`} />

              <div className="relative grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 bg-gradient-to-r ${activeTier.accent} text-ebw-navy`}>
                    {activeTier.icon}
                    {activeTier.tag || 'Sponsor'}
                  </div>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl mb-3">{activeTier.name}</h3>
                  <div className="font-display font-black text-5xl sm:text-6xl text-gradient-gold mb-6">{activeTier.price}</div>
                  <a
                    href="#sponsor-form"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('sponsor-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                      setSponsor((s) => ({ ...s, package: activeTier.name + (activeTier.price ? ' — ' + activeTier.price : '') }));
                    }}
                    className="btn-solana text-xs px-7 py-3 w-full sm:w-auto justify-center"
                  >
                    Apply for {activeTier.name.split(' ')[0]} <ArrowRight size={14} />
                  </a>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-mono">What's included</div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeTier.benefits.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-2.5 text-sm text-white/80"
                      >
                        <Check size={15} className="text-ebw-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All tiers grid (mini overview) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
            {tiers.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => {
                  setActiveTab(t.id);
                  document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeTab === t.id
                    ? 'bg-ebw-gold/10 border-ebw-gold/50'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-1.5 rounded-md bg-gradient-to-br ${t.accent} text-ebw-navy`}>{t.icon}</span>
                  {t.tag && <span className="text-[9px] uppercase tracking-widest text-ebw-gold font-bold">{t.tag}</span>}
                </div>
                <div className="text-xs font-semibold mb-1">{t.name}</div>
                <div className="text-ebw-gold text-sm font-bold">{t.price}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ APPLY FOR SPONSORSHIP ════════════ */}
      <section id="sponsor-form" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-[72px] relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-15 pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <SectionLabel center>Become a Sponsor</SectionLabel>
          <SectionTitle center sub="Partner with the fastest-growing blockchain event in the Horn of Africa. Fill out the form and our team will send you a tailored proposal within 48 hours.">
            Apply for Sponsorship
          </SectionTitle>

          <AnimatePresence mode="wait">
            {sponsorSent ? (
              <motion.div
                key="sponsor-done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="ebw-card p-10 sm:p-14 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-ebw-gold/15 border-2 border-ebw-gold flex items-center justify-center mx-auto mb-5" style={{ boxShadow: '0 0 30px rgba(244,196,0,0.3)' }}>
                  <Check size={28} className="text-ebw-gold" strokeWidth={3} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Inquiry received</h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
                  Thanks {sponsor.fullName.split(' ')[0]} — our partnerships team will reach out to <span className="text-ebw-gold">{sponsor.email}</span> within 48 hours with a tailored proposal.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="sponsor-form-active"
                onSubmit={submitSponsor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="ebw-card p-6 sm:p-10 lg:p-12"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <SponsorField label="Full Name" required icon={<User size={14} />}>
                    <input
                      type="text"
                      required
                      value={sponsor.fullName}
                      onChange={(e) => updateSponsor('fullName', e.target.value)}
                      placeholder="Your full name"
                      className="ebw-input"
                    />
                  </SponsorField>
                  <SponsorField label="Email" required icon={<Mail size={14} />}>
                    <input
                      type="email"
                      required
                      value={sponsor.email}
                      onChange={(e) => updateSponsor('email', e.target.value)}
                      placeholder="you@company.com"
                      className="ebw-input"
                    />
                  </SponsorField>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <SponsorField label="Company" required icon={<Building size={14} />}>
                    <input
                      type="text"
                      required
                      value={sponsor.company}
                      onChange={(e) => updateSponsor('company', e.target.value)}
                      placeholder="Your company name"
                      className="ebw-input"
                    />
                  </SponsorField>
                  <SponsorField label="Package Interest" icon={<Layers3 size={14} />}>
                    <select
                      value={sponsor.package}
                      onChange={(e) => updateSponsor('package', e.target.value)}
                      className="ebw-input"
                    >
                      <option value="">Select a package</option>
                      {tiers.map((t) => (
                        <option key={t.id} value={`${t.name} — ${t.price}`}>{t.name} — {t.price}</option>
                      ))}
                      <option value="other">Other / Custom Package</option>
                    </select>
                  </SponsorField>
                </div>
                <div className="mb-6">
                  <SponsorField label="Message" icon={<MessageSquare size={14} />}>
                    <textarea
                      rows={4}
                      value={sponsor.message}
                      onChange={(e) => updateSponsor('message', e.target.value)}
                      placeholder="Tell us about your interest and any specific requirements..."
                      className="ebw-input resize-none"
                    />
                  </SponsorField>
                </div>
                <button
                  type="submit"
                  disabled={!sponsorValid || sponsorSending}
                  className="btn-solana text-xs px-8 py-3.5 w-full sm:w-auto justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sponsorSending ? (<><Loader2 size={14} className="animate-spin" /> Sending...</>) : (<>Submit Inquiry <ArrowRight size={14} /></>)}
                </button>
                <p className="text-white/40 text-xs mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>Prefer direct contact?</span>
                  <a href="mailto:info@etbw.online" className="text-ebw-gold hover:underline inline-flex items-center gap-1"><Mail size={11} /> info@etbw.online</a>
                  <span className="text-white/20">·</span>
                  <span className="inline-flex items-center gap-1"><Phone size={11} /> +251-925904181</span>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════ VENUE LAYOUT ════════════ */}
      <section id="exhibitors" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-ebw-mesh opacity-50 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <SectionLabel center>Exhibition Floor</SectionLabel>
          <SectionTitle center sub={`Six themed zones across the exhibition floor, each dedicated to a key vertical. ${totalBooths} booths in total.`}>
            Venue Layout
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z, i) => (
              <motion.div
                key={z.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="feat-card group"
                style={{ borderColor: `${z.color}33` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${z.color}1f`, border: `1px solid ${z.color}55`, color: z.color }}
                  >
                    {z.icon}
                  </div>
                  <div
                    className="text-2xl font-display font-black"
                    style={{ color: z.color }}
                  >
                    {z.count}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl mb-1.5">{z.name}</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest font-mono">{z.count} booths available</p>
                <div className="mt-5 h-1 rounded-full overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(z.count / 12) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                    className="h-full"
                    style={{ background: z.color, boxShadow: `0 0 10px ${z.color}99` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-white/40 text-xs uppercase tracking-widest font-mono">
            {totalBooths} booths · 6 themed zones · 1 unmissable expo
          </div>
        </div>
      </section>

      {/* ════════════ APPLY FOR SHOWCASE BOOTH ════════════ */}
      <section id="apply" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-[72px] relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-15 pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <SectionLabel center>Apply Now</SectionLabel>
          <SectionTitle center sub="Secure your exhibition space at Ethiopian Blockchain Week 2026">
            Apply for a Showcase Booth
          </SectionTitle>

          <AnimatePresence mode="wait">
            {boothSent ? (
              <motion.div
                key="booth-done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="ebw-card p-10 sm:p-14 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-ebw-gold/15 border-2 border-ebw-gold flex items-center justify-center mx-auto mb-5" style={{ boxShadow: '0 0 30px rgba(244,196,0,0.3)' }}>
                  <Check size={28} className="text-ebw-gold" strokeWidth={3} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Application submitted</h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
                  Booth application for <span className="text-ebw-gold">{booth.company}</span> received. Our team will confirm your zone assignment and onboarding details at <span className="text-ebw-gold">{booth.email}</span>.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="booth-form-active"
                onSubmit={submitBooth}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="ebw-card p-6 sm:p-10 lg:p-12"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <SponsorField label="Company Name" required icon={<Building size={14} />}>
                    <input
                      type="text"
                      required
                      value={booth.company}
                      onChange={(e) => updateBooth('company', e.target.value)}
                      placeholder="Your company"
                      className="ebw-input"
                    />
                  </SponsorField>
                  <SponsorField label="Chain / Protocol" icon={<Link2 size={14} />}>
                    <select
                      value={booth.chain}
                      onChange={(e) => updateBooth('chain', e.target.value)}
                      className="ebw-input"
                    >
                      <option value="">Select a chain</option>
                      {chains.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </SponsorField>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <SponsorField label="Product Type" required icon={<Layers3 size={14} />}>
                    <select
                      required
                      value={booth.product}
                      onChange={(e) => updateBooth('product', e.target.value)}
                      className="ebw-input"
                    >
                      <option value="">Select product type</option>
                      {products.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </SponsorField>
                  <SponsorField label="Website" required icon={<Globe2 size={14} />}>
                    <input
                      type="url"
                      required
                      value={booth.website}
                      onChange={(e) => updateBooth('website', e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="ebw-input"
                    />
                  </SponsorField>
                </div>
                <div className="mb-5">
                  <SponsorField label="Contact Email" required icon={<Mail size={14} />}>
                    <input
                      type="email"
                      required
                      value={booth.email}
                      onChange={(e) => updateBooth('email', e.target.value)}
                      placeholder="partnerships@yourcompany.com"
                      className="ebw-input"
                    />
                  </SponsorField>
                </div>
                <div className="mb-6">
                  <SponsorField label="Additional Information" icon={<MessageSquare size={14} />}>
                    <textarea
                      rows={4}
                      value={booth.notes}
                      onChange={(e) => updateBooth('notes', e.target.value)}
                      placeholder="Tell us about your booth concept, demos, or any special requirements..."
                      className="ebw-input resize-none"
                    />
                  </SponsorField>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <div className="text-white/50 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ebw-gold animate-pulse" />
                    Booth pricing: <span className="text-ebw-gold font-bold">$2,000</span> for a 3×4m space
                  </div>
                  <button
                    type="submit"
                    disabled={!boothValid || boothSending}
                    className="btn-solana text-xs px-8 py-3.5 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {boothSending ? (<><Loader2 size={14} className="animate-spin" /> Submitting...</>) : (<>Submit Application <ArrowRight size={14} /></>)}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="footer-section py-10 px-6 sm:px-10 lg:px-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-pixel-grid-animated opacity-15 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="max-w-[260px]">
              <div className="flex items-center gap-2 mb-3">
                <img src="/ebwlogo.png" alt="EBW 2026" className="h-7 w-7 object-cover rounded-full" />
                <span className="font-display font-bold text-base tracking-[0.05em] uppercase text-white">EBW</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">Ethiopian Blockchain Week 2026. Inclusive innovation for every Ethiopian. July 31 - August 1, Addis Ababa.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-3 text-ebw-gold">Event</h5>
                <ul className="space-y-2 text-xs text-white/40">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/#features" className="hover:text-white transition-colors">Highlights</a></li>
                  <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-3 text-ebw-gold">Participate</h5>
                <ul className="space-y-2 text-xs text-white/40">
                  <li><a href="/register" className="hover:text-white transition-colors">Pre-Register</a></li>
                  <li><a href="/#how-it-works" className="hover:text-white transition-colors">How to Attend</a></li>
                  <li><a href="/partnership" className="hover:text-white transition-colors">Sponsorship</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-3 text-white/60">Contact</h5>
                <ul className="space-y-2 text-xs text-white/40">
                  <li><a href="mailto:info@etbw.online" className="hover:text-white transition-colors">info@etbw.online</a></li>
                  <li>+251-925904181</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 gap-4">
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/20">
              Forged with <span className="text-ebw-gold">❤</span> & code
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-white/20">
              &copy; 2026 EBW. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SponsorField: React.FC<{ label: string; required?: boolean; icon?: React.ReactNode; children: React.ReactNode }> = ({
  label, required, icon, children,
}) => (
  <div>
    <label className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-mono text-white/50 mb-2">
      {icon}
      <span>{label}</span>
      {required && <span className="text-ebw-gold">*</span>}
    </label>
    {children}
  </div>
);

export default Partnership;
