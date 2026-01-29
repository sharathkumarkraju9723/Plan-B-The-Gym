export default function Toast({ message, onClose }) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[999]">
      <div className="flex items-center gap-4 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-semibold">
        <span>✓</span>

        <span>{message}</span>

        <button
          onClick={onClose}
          className="ml-2 font-bold text-white/80 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
