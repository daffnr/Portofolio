import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
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
  link?: string;
  onPreview?: () => void;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  image,
  link,
  onPreview,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl h-[420px] md:h-[450px] group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-black border border-neutral-800 flex flex-col overflow-hidden",
        className
      )}
    >
      {image && (
        <div className="flex-shrink-0 mb-3">
          <img
            src={image}
            alt={title as string}
            className="w-full h-[180px] md:h-[200px] object-cover rounded-md"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow justify-between group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-col space-y-2 flex-grow">
          <div className="font-sans font-bold text-white text-base md:text-lg line-clamp-2 break-words">
            {title}
          </div>
          <div className="font-sans font-normal text-gray-300 text-xs md:text-sm line-clamp-3 break-words flex-grow">
            {description}
          </div>
        </div>

        <div className="flex gap-2 mt-4 flex-shrink-0">
          <button
            onClick={() => link && window.open(link, "_blank")}
            className="px-3 py-2 rounded-md bg-yellow-500 text-black text-xs font-semibold 
                       hover:bg-yellow-400 hover:scale-105 transition-transform duration-200"
          >
            Website
          </button>
          <button
            onClick={onPreview}
            className="px-3 py-2 rounded-md bg-neutral-700 text-white text-xs font-semibold 
                       hover:bg-neutral-600 hover:scale-105 transition-transform duration-200"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};
