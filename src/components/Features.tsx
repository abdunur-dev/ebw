import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Wallet,
  ArrowLeftRight,
  Send,
  QrCode,
  Zap,
  Landmark,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Keynote Speakers",
    description: "Hear from leading voices in blockchain, AI, and fintech from across Africa and the world.",
    tag: "Talks",
  },
  {
    icon: Globe,
    title: "Interactive Workshops",
    description: "Hands-on sessions covering Solana development, DeFi, NFTs, and real-world blockchain applications.",
    tag: "Learn",
  },
  {
    icon: ArrowLeftRight,
    title: "Networking Opportunities",
    description: "Connect with 500+ developers, founders, investors, and policymakers shaping Ethiopia's blockchain future.",
    tag: "Network",
  },
  {
    icon: Landmark,
    title: "Hackathon",
    description: "Build innovative solutions on Solana and compete for prizes. Open to developers of all skill levels.",
    tag: "Build",
  },
  {
    icon: QrCode,
    title: "Exhibition Hall",
    description: "Explore cutting-edge projects, startups, and protocols from Ethiopia's growing blockchain ecosystem.",
    tag: "Expo",
  },
  {
    icon: Zap,
    title: "Investor Meetups",
    description: "Pitch your ideas to VCs and angel investors actively funding African blockchain startups.",
    tag: "Funding",
  },
  {
    icon: Send,
    title: "Community Meetups",
    description: "Side events, after-parties, and informal gatherings to build lasting connections with the community.",
    tag: "Social",
  },
  {
    icon: Wallet,
    title: "Scholarship Program",
    description: "Sponsored tickets for students, developers, and community builders from underserved regions.",
    tag: "Access",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(263_100%_63%_/_0.04)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
            <span className="text-primary">{">"}</span> Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Conference Highlights
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Two days of world-class content, connections, and
            collaboration at Ethiopia's premier blockchain event.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-7 overflow-hidden hover-lift card-border-glow"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(263_100%_63%_/_0.04)_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <span className="rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
