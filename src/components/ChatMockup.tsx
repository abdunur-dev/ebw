import React from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

const messages = [
  {
    role: "user" as const,
    text: "When is EBW 2026 taking place?",
  },
  {
    role: "agent" as const,
    text: "EBW 2026 is happening July 31 - August 1 at the Science Museum, Addis Ababa. Two days of keynotes, workshops, and networking!",
  },
  {
    role: "agent" as const,
    text: "Early bird tickets are available now. Register before June 30 for 50% off!",
    status: "success",
  },
];

const ChatMockup: React.FC = () => {
  return (
    <div className="relative animate-float">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_hsl(263_100%_63%_/_0.08)_0%,_transparent_60%)] rounded-3xl" />

      <div className="relative glass-card rounded-2xl overflow-hidden border border-border/80 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border/50">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Bot size={16} className="text-primary" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">EBW</div>
            <div className="text-[10px] text-primary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse-glow" />
              Online
            </div>
          </div>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 flex flex-col gap-3 min-h-[280px]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.4 }}
              className={`flex gap-2.5 ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                  msg.role === "user"
                    ? "bg-secondary/10 border border-secondary/30"
                    : "bg-primary/10 border border-primary/30"
                }`}
              >
                {msg.role === "user" ? (
                  <User size={12} className="text-secondary" />
                ) : (
                  <Bot size={12} className="text-primary" />
                )}
              </div>
              <div
                className={`rounded-xl px-3.5 py-2.5 max-w-[85%] text-xs leading-relaxed ${
                  msg.role === "user"
                    ? "bg-secondary/10 border border-secondary/20 text-foreground"
                    : "bg-muted/50 border border-border/50 text-foreground/90"
                }`}
              >
                {msg.text}
                {"status" in msg && msg.status === "success" && (
                  <div className="mt-1.5 flex items-center gap-1 text-primary text-[10px] font-medium">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    Confirmed on-chain
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-muted/30 border border-border/50">
            <span className="text-xs text-muted-foreground flex-1">
              Type a command...
            </span>
            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Send size={12} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMockup;
