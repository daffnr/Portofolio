import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

// Komponen Grid
export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        // Grid responsive: 1 kolom di mobile, 3 kolom di desktop
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Komponen Item Card
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
        // card fix height biar konsisten, bg-black, text putih
        "row-span-1 rounded-xl h-[400px] group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-black border border-neutral-800 flex flex-col overflow-hidden",
        className
      )}
    >
      {/* Gambar */}
      {image && (
        <img
          src={image}
          alt={title as string}
          className="w-full h-[180px] object-cover rounded-md mb-2"
        />
      )}

      {/* Text */}
      <div className="flex-grow group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-white mb-2 mt-2 break-words">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-300 text-xs pb-2 break-words">
          {description}
        </div>
      </div>

      {/* Tombol */}
      <div className="flex gap-2 mt-4">
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
  );
};
