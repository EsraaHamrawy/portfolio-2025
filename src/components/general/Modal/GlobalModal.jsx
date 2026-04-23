import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const GlobalModal = ({ open, onClose, title, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm" role="presentation">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="relative w-[min(92vw,760px)] max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-[rgba(132,60,188,0.15)] text-white shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h3 id="project-modal-title" className="text-lg font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="project-details-scroll max-h-[calc(85vh-64px)] overflow-y-auto px-5 py-4">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GlobalModal;
