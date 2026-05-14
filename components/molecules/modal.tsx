"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("modalState", { detail: true }));
    } else {
      document.body.style.overflow = "unset";
      window.dispatchEvent(new CustomEvent("modalState", { detail: false }));
    }
    return () => {
      document.body.style.overflow = "unset";
      window.dispatchEvent(new CustomEvent("modalState", { detail: false }));
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0a0a0a]/95 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          aria-label="Close preview"
        >
          ✕
        </button>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
