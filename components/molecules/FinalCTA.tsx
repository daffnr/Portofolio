import React from "react";
import Link from "next/link";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeInWrapper direction="up" delay={100} duration={800}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let&apos;s build something <span className="text-yellow-400">together</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Whether you have a specific project in mind or just want to chat about tech, I&apos;m always open to new opportunities.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-12 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a Conversation
          </Link>
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default FinalCTA;
