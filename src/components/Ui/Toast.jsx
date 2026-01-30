import { useEffect } from "react";

export default function Toast({ message, onClose }) {

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-end justify-center pb-10">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* TOAST BOX */}
      <div
        className="
          relative z-10
          flex items-center gap-6
          px-10 py-6
          min-w-[420px]
          bg-surface/100 text-textPrimary
          border border-divider
          rounded-2xl shadow-2xl
          text-base font-semibold
        "
      >
        {/* MESSAGE */}
        <span className="leading-relaxed">
          {message}
        </span>

        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="ml-auto text-textMuted hover:text-textPrimary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="w-5 h-5"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

    </div>
  );
}
