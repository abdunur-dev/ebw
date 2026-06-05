import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Sparkles, Users, Calendar, MapPin, Mail, User, Building2, Globe, Phone, Code2, Mic, Handshake, Heart, Newspaper, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

type Category = 'attendee' | 'developer' | 'student' | 'speaker' | 'sponsor' | 'volunteer' | 'press';
type Tshirt = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

const categories: { id: Category; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: 'attendee',   label: 'Attendee',    icon: <Users size={16} />,     desc: 'General participant' },
  { id: 'developer',  label: 'Developer',   icon: <Code2 size={16} />,     desc: 'Builder / engineer' },
  { id: 'student',    label: 'Student',     icon: <Sparkles size={16} />,  desc: 'University / bootcamp' },
  { id: 'speaker',    label: 'Speaker',     icon: <Mic size={16} />,       desc: 'Apply to present' },
  { id: 'sponsor',    label: 'Sponsor',     icon: <Handshake size={16} />, desc: 'Partner with us' },
  { id: 'volunteer',  label: 'Volunteer',   icon: <Heart size={16} />,     desc: 'Help run the event' },
  { id: 'press',      label: 'Press',       icon: <Newspaper size={16} />, desc: 'Media / journalist' },
];

const interestsList = [
  'Keynotes & Panels',
  'Workshops',
  'Hackathon',
  'Networking',
  'Exhibition Hall',
  'Investor Meetups',
  'Community Meetups',
  'Scholarship Program',
];

const hearOptions = [
  'X / Twitter',
  'Telegram',
  'LinkedIn',
  'Instagram',
  'Word of mouth',
  'Search engine',
  'Previous EBW event',
  'Other',
];

const benefits = [
  { icon: <Calendar size={18} />, title: 'Early Access', text: 'Lock in early-bird pricing 50% off until June 30.' },
  { icon: <Users size={18} />,   title: 'Network First', text: 'Join the attendee list and connect before doors open.' },
  { icon: <Sparkles size={18} />, title: 'Scholarship Pool', text: 'Students & developers from underserved regions get priority.' },
  { icon: <Mail size={18} />,     title: 'Weekly Pulse', text: 'Speaker drops, schedule reveals, and partner announcements.' },
];

const faqs = [
  {
    q: 'Is pre-registration the same as a ticket?',
    a: 'Pre-registration reserves your spot and grants early-bird pricing. You will receive a link to complete payment and finalize your ticket closer to the event.',
  },
  {
    q: 'Does it cost anything to pre-register?',
    a: 'No. Pre-registration is free. You only pay when you finalize your ticket. Early-bird tickets are 50% off until June 30.',
  },
  {
    q: 'I am a student or developer from an underserved region. What about scholarships?',
    a: 'We have a generous scholarship program covering tickets, travel, and accommodation. Select "Student" or "Developer" and tick "Scholarship Program" in your interests.',
  },
  {
    q: 'Can I update my information later?',
    a: 'Yes. After submission you will receive a confirmation email with a link to edit your details until July 15.',
  },
  {
    q: 'Will my data be shared with sponsors?',
    a: 'No. Your information is only used by the EBW team for event logistics. We never sell attendee data.',
  },
];

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    organization: '',
    role: '',
    category: 'attendee' as Category,
    interests: [] as string[],
    tshirt: '' as Tshirt | '',
    dietary: '',
    hearAbout: '',
    newsletter: true,
    agree: false,
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleInterest = (i: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(i)
        ? f.interests.filter((x) => x !== i)
        : [...f.interests, i],
    }));

  const canNext1 = form.fullName.trim() && /\S+@\S+\.\S+/.test(form.email) && form.country.trim();
  const canNext2 = form.category && form.interests.length > 0;
  const canSubmit = canNext1 && canNext2 && form.agree;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setDone(true);
  };

  const StepDot = ({ n, label }: { n: number; label: string }) => (
    <div className="flex items-center gap-3">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
          step > n
            ? 'bg-ebw-gold text-ebw-navy'
            : step === n
            ? 'bg-ebw-gold/20 text-ebw-gold border border-ebw-gold/50'
            : 'bg-white/5 text-white/40 border border-white/10'
        }`}
      >
        {step > n ? <Check size={16} strokeWidth={3} /> : n}
      </div>
      <span
        className={`text-xs uppercase tracking-widest font-mono transition-colors ${
          step >= n ? 'text-white' : 'text-white/30'
        }`}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-[#001B4D] min-h-screen text-white font-body selection:bg-ebw-gold/30">
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-6 sm:px-10 lg:px-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-pixel-grid-animated opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-ebw-mesh" />
        <div className="hidden sm:block absolute top-32 right-[10%] w-24 h-24 border border-ebw-gold/20 rotate-45 animate-float-slow" />
        <div className="hidden sm:block absolute bottom-20 left-[8%] w-16 h-16 border border-ebw-gold/15 rotate-12 animate-float-medium" />
        <div className="hidden sm:block absolute top-1/3 left-[15%] w-10 h-10 bg-ebw-gold/10 rotate-[20deg] animate-float-slow" style={{ animationDelay: '1s' }} />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ebw-gold/10 border border-ebw-gold/20 text-ebw-gold text-xs font-semibold mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-ebw-gold animate-pulse" />
              Pre-Registration Open
            </div>
            <h1 className="font-display font-bold leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              <span className="text-white">Reserve Your Spot at</span>
              <br />
              <span className="text-gradient-gold">Ethiopian Blockchain Week 2026</span>
            </h1>
            <div className="w-16 h-0.5 bg-ebw-gold/40 mx-auto mb-6" />
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              July 31 – August 1, 2026 · Science Museum, Addis Ababa. Pre-register to lock in early-bird pricing
              and be the first to know about speakers, workshops, and the hackathon lineup.
            </p>
            <div className="flex items-center justify-center gap-5 mt-8 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/30 flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={13} className="text-ebw-gold" /> July 31 – Aug 1</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2"><MapPin size={13} className="text-ebw-gold" /> Addis Ababa, ET</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2"><Users size={13} className="text-ebw-gold" /> 500+ Expected</span>
            </div>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="feat-card text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-ebw-gold/10 border border-ebw-gold/20 flex items-center justify-center text-ebw-gold mb-4">
                  {b.icon}
                </div>
                <h4 className="text-sm font-bold mb-1.5">{b.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════ FORM ════════════ */}
      <section className="px-6 sm:px-10 lg:px-[72px] pb-24 relative">
        <div className="absolute inset-0 bg-ebw-mesh-dark opacity-60 pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="ebw-card p-10 sm:p-16 text-center max-w-2xl mx-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-ebw-gold/15 border-2 border-ebw-gold flex items-center justify-center mx-auto mb-6"
                  style={{ boxShadow: '0 0 40px rgba(244,196,0,0.3)' }}
                >
                  <Check size={36} className="text-ebw-gold" strokeWidth={3} />
                </motion.div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">You're on the list!</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
                  We've sent a confirmation to <span className="text-ebw-gold">{form.email}</span>. Watch your inbox
                  for the weekly pulse and your early-bird ticket link.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-left mb-8">
                  <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] uppercase tracking-widest text-ebw-gold mb-1">Ticket Tier</div>
                    <div className="text-sm font-semibold">Early Bird · 50% Off</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] uppercase tracking-widest text-ebw-gold mb-1">Category</div>
                    <div className="text-sm font-semibold capitalize">{form.category}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] uppercase tracking-widest text-ebw-gold mb-1">Confirmation</div>
                    <div className="text-sm font-semibold">Sent ✓</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/" className="btn-solana text-xs px-6 py-3">Back to Home</a>
                  <button onClick={() => { setDone(false); setStep(1); }} className="btn-ghost text-xs px-6 py-3">Register Another</button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="ebw-card p-6 sm:p-10 lg:p-12"
              >
                {/* Stepper */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5 gap-4 flex-wrap">
                  <StepDot n={1} label="Personal" />
                  <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-ebw-gold/30 via-white/10 to-white/10 max-w-[120px]" />
                  <StepDot n={2} label="Interests" />
                  <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 via-white/10 to-white/10 max-w-[120px]" />
                  <StepDot n={3} label="Confirm" />
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-2">&gt; Step 01</div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl">Tell us about you</h2>
                      <p className="text-white/40 text-sm mt-2">We use this for your badge, confirmation, and event updates.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full Name" required icon={<User size={14} />}>
                        <input
                          type="text"
                          required
                          value={form.fullName}
                          onChange={(e) => update('fullName', e.target.value)}
                          placeholder="Abebe Bikila"
                          className="ebw-input"
                        />
                      </Field>
                      <Field label="Email Address" required icon={<Mail size={14} />}>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@example.com"
                          className="ebw-input"
                        />
                      </Field>
                      <Field label="Phone (optional)" icon={<Phone size={14} />}>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="+251 ..."
                          className="ebw-input"
                        />
                      </Field>
                      <Field label="Country" required icon={<Globe size={14} />}>
                        <input
                          type="text"
                          required
                          value={form.country}
                          onChange={(e) => update('country', e.target.value)}
                          placeholder="Ethiopia"
                          className="ebw-input"
                        />
                      </Field>
                      <Field label="Organization (optional)" icon={<Building2 size={14} />}>
                        <input
                          type="text"
                          value={form.organization}
                          onChange={(e) => update('organization', e.target.value)}
                          placeholder="University, startup, or company"
                          className="ebw-input"
                        />
                      </Field>
                      <Field label="Job Title / Role" icon={<User size={14} />}>
                        <input
                          type="text"
                          value={form.role}
                          onChange={(e) => update('role', e.target.value)}
                          placeholder="e.g. Smart Contract Engineer"
                          className="ebw-input"
                        />
                      </Field>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        disabled={!canNext1}
                        onClick={() => setStep(2)}
                        className="btn-solana text-xs px-7 py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Continue <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="s2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-7"
                  >
                    <div>
                      <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-2">&gt; Step 02</div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl">What brings you to EBW?</h2>
                      <p className="text-white/40 text-sm mt-2">Pick the category and tracks that fit you best.</p>
                    </div>

                    <div>
                      <Label>I'm registering as</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                        {categories.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => update('category', c.id)}
                            className={`text-left p-3.5 rounded-xl border transition-all duration-300 ${
                              form.category === c.id
                                ? 'bg-ebw-gold/10 border-ebw-gold/50 shadow-[0_0_25px_rgba(244,196,0,0.15)]'
                                : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className={`mb-2 ${form.category === c.id ? 'text-ebw-gold' : 'text-white/50'}`}>
                              {c.icon}
                            </div>
                            <div className={`text-sm font-semibold ${form.category === c.id ? 'text-white' : 'text-white/80'}`}>
                              {c.label}
                            </div>
                            <div className="text-[10px] text-white/40 mt-0.5">{c.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>I'm interested in <span className="text-ebw-gold">*</span></Label>
                      <div className="flex flex-wrap gap-2">
                        {interestsList.map((i) => {
                          const active = form.interests.includes(i);
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => toggleInterest(i)}
                              className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                                active
                                  ? 'bg-ebw-gold text-ebw-navy border-ebw-gold'
                                  : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                              }`}
                            >
                              {active && <Check size={12} className="inline -ml-1 mr-1" strokeWidth={3} />}
                              {i}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="T-Shirt Size (optional)">
                        <select
                          value={form.tshirt}
                          onChange={(e) => update('tshirt', e.target.value as Tshirt)}
                          className="ebw-input"
                        >
                          <option value="">Select size</option>
                          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="How did you hear about EBW?">
                        <select
                          value={form.hearAbout}
                          onChange={(e) => update('hearAbout', e.target.value)}
                          className="ebw-input"
                        >
                          <option value="">Select option</option>
                          {hearOptions.map((h) => (
                            <option key={h} value={h}>{h}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Dietary Requirements or Accessibility Needs (optional)">
                      <textarea
                        rows={2}
                        value={form.dietary}
                        onChange={(e) => update('dietary', e.target.value)}
                        placeholder="Let us know so we can accommodate you."
                        className="ebw-input resize-none"
                      />
                    </Field>

                    <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between pt-2">
                      <button type="button" onClick={() => setStep(1)} className="btn-ghost text-xs px-6 py-3">
                        Back
                      </button>
                      <button
                        type="button"
                        disabled={!canNext2}
                        onClick={() => setStep(3)}
                        className="btn-solana text-xs px-7 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Review <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div
                    key="s3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-7"
                  >
                    <div>
                      <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-2">&gt; Step 03</div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl">Review &amp; confirm</h2>
                      <p className="text-white/40 text-sm mt-2">Double-check everything before you lock it in.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Summary title="Full Name" value={form.fullName} />
                      <Summary title="Email" value={form.email} />
                      {form.phone && <Summary title="Phone" value={form.phone} />}
                      <Summary title="Country" value={form.country} />
                      {form.organization && <Summary title="Organization" value={form.organization} />}
                      {form.role && <Summary title="Role" value={form.role} />}
                      <Summary title="Category" value={form.category} capitalize />
                      <Summary title="Interests" value={form.interests.join(', ')} />
                      {form.tshirt && <Summary title="T-Shirt" value={form.tshirt} />}
                      {form.hearAbout && <Summary title="Heard via" value={form.hearAbout} />}
                      {form.dietary && <Summary title="Notes" value={form.dietary} />}
                    </div>

                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={form.newsletter}
                          onChange={(e) => update('newsletter', e.target.checked)}
                          className="mt-1 w-4 h-4 accent-ebw-gold"
                        />
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                          Send me the Weekly Pulse with speaker drops, schedule reveals, and partner announcements.
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={form.agree}
                          onChange={(e) => update('agree', e.target.checked)}
                          className="mt-1 w-4 h-4 accent-ebw-gold"
                          required
                        />
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                          I agree to the event <span className="text-ebw-gold underline-animate">Code of Conduct</span> and consent to the processing of my data for event logistics.
                        </span>
                      </label>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between pt-2">
                      <button type="button" onClick={() => setStep(2)} className="btn-ghost text-xs px-6 py-3">
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!canSubmit || submitting}
                        className="btn-solana text-xs px-8 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={14} className="animate-spin" /> Submitting...
                          </>
                        ) : (
                          <>
                            Complete Pre-Registration <ChevronRight size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-[72px] relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-15 pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="text-ebw-gold font-display font-bold text-sm tracking-widest uppercase mb-4">&gt; Pre-Registration FAQ</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Common Questions</h2>
            <div className="w-16 h-0.5 bg-ebw-gold/40 mx-auto mt-4" />
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden hover:border-ebw-gold/20 transition-all"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <span className="font-semibold text-sm sm:text-base text-white/90 group-hover:text-ebw-gold transition-colors">{f.q}</span>
                  <span className="w-6 h-6 rounded-full border border-white/10 group-hover:border-ebw-gold/40 group-open:bg-ebw-gold/15 group-open:border-ebw-gold/40 group-open:rotate-45 transition-all duration-300 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/40 group-open:text-ebw-gold"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-white/50 text-sm leading-relaxed">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER (matching Index) ════════════ */}
      <footer className="footer-section py-10 px-6 sm:px-10 lg:px-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-pixel-grid-animated opacity-15 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="max-w-[260px]">
              <div className="flex items-center gap-2 mb-4 sm:mb-3">
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
                  <li><a href="mailto:info@etbw.online" className="hover:text-white transition-colors">Sponsor</a></li>
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

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-[11px] uppercase tracking-widest font-mono text-white/50 mb-3">
    {children}
  </label>
);

const Field: React.FC<{ label: string; required?: boolean; icon?: React.ReactNode; children: React.ReactNode }> = ({
  label,
  required,
  icon,
  children,
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

const Summary: React.FC<{ title: string; value: string; capitalize?: boolean }> = ({ title, value, capitalize }) => (
  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
    <div className="text-[10px] uppercase tracking-widest text-ebw-gold mb-1">{title}</div>
    <div className={`text-sm font-medium text-white/90 ${capitalize ? 'capitalize' : ''}`}>{value || '—'}</div>
  </div>
);

export default Register;
