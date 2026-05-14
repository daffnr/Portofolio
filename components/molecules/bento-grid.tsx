import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";

export const TECH_LOGOS: Record<string, string> = {
  "Next.js": "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  "React": "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "Tailwind CSS": "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  "Framer Motion": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  "EmailJS": "https://cdn.worldvectorlogo.com/logos/emailjs.svg",
  "Redux Toolkit": "https://cdn.worldvectorlogo.com/logos/redux.svg",
  "React Router": "https://cdn.worldvectorlogo.com/logos/react-router.svg",
  "Styled Components": "https://cdn.worldvectorlogo.com/logos/styled-components-1.svg",
  "React Native": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
  "Expo": "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
  "Axios": "https://cdn.worldvectorlogo.com/logos/axios.svg",
  "Reanimated": "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "Firebase": "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  "Material UI": "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
};

export const DARK_LOGOS = new Set(["Next.js", "Expo", "Axios", "GitHub"]);

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        // grid-rows auto + items-stretch ensures every card in the same row
        // stretches to the tallest card naturally — no fixed height needed.
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack?: string[];
  priority?: boolean;
  onOpenDetails?: () => void;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  techStack,
  priority,
  onOpenDetails,
}) => {
  return (
    <div
      onClick={onOpenDetails}
      className={cn(
        "cursor-pointer rounded-2xl h-[460px] md:h-[480px] group/bento hover:shadow-2xl transition duration-300 p-5 bg-[#0a0a0a] border border-white/5 flex flex-col hover:border-yellow-400/30",
        className
      )}
    >
      {image && (
        <div className="relative w-full h-[200px] md:h-[210px] mb-4 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={image}
            alt={title as string}
            fill
            className="object-cover group-hover/bento:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <h3 className="font-sans font-bold text-white text-lg md:text-xl line-clamp-1 group-hover/bento:text-yellow-400 transition-colors flex-shrink-0">
          {title}
        </h3>

        <p className="font-sans font-normal text-slate-400 text-sm mt-1 line-clamp-3 flex-shrink-0">
          {description}
        </p>

        <div className="flex-grow flex items-end mt-3">
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 4).map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-2 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                  title={tech}
                >
                  {TECH_LOGOS[tech] ? (
                    <img
                      src={TECH_LOGOS[tech]}
                      alt={tech}
                      className={cn(
                        "w-3.5 h-3.5 object-contain",
                        DARK_LOGOS.has(tech) ? "filter invert brightness-0 opacity-90" : ""
                      )}
                    />
                  ) : null}
                  <span className="text-[10px] md:text-xs text-slate-300 font-medium whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
              {techStack.length > 4 && (
                <div className="flex items-center justify-center px-2 py-1 bg-white/5 border border-white/10 rounded-md">
                  <span className="text-[10px] md:text-xs text-slate-300 font-bold whitespace-nowrap">
                    +{techStack.length - 4}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center text-yellow-400 font-semibold text-sm mt-5 pt-4 border-t border-white/5 flex-shrink-0 group-hover/bento:translate-x-1 transition-transform duration-300">
          View Details <FaArrowRight className="ml-2 w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
