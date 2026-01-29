/* Neutral class colors aligned with tailwind.config.js */
const COLORS = {
  HIIT: "bg-[#2f2f2f] text-textLight border border-divider",
  Yoga: "bg-[#3a3a3a] text-textLight border border-divider",
  Zumba: "bg-[#4a4a4a] text-textLight border border-divider",
  Tabata: "bg-[#1f1f1f] text-textLight border border-divider",
  Strength: "bg-[#555555] text-textLight border border-divider",
  Spin: "bg-[#666666] text-textLight border border-divider",
};


const schedule = {
  Monday: [
    ["7:00 AM", "HIIT"],
    ["6:30 PM", "Strength"],
    ["7:00 PM", "Spin"],
  ],
  Tuesday: [
    ["7:00 AM", "Zumba"],
    ["7:00 PM", "HIIT"],
  ],
  Wednesday: [
    ["7:00 AM", "Strength"],
    ["6:30 PM", "Spin"],
  ],
  Thursday: [
    ["7:00 AM", "HIIT"],
    ["7:00 PM", "Yoga"],
  ],
  Friday: [
    ["6:30 PM", "Tabata"],
    ["7:30 PM", "Zumba"],
  ],
  Saturday: [
    ["8:00 AM", "HIIT"],
    ["9:00 AM", "Yoga"],
  ],
};

export default function GroupScheduleModal({ isOpen, onClose, onBook }) {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 grid place-items-center text-textPrimary">

      {/* backdrop */}
      <div className="absolute inset-0 " onClick={onClose} />

      {/* modal */}
      <div className="relative bg-surface w-full max-w-4xl mx-4 rounded-2xl border border-divider flex flex-col max-h-[90vh]">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-textPrimary bg-transparent"
        >
          ✕
        </button>

        {/* header */}
        <div className="p-6 text-center border-b border-divider">
          <h2 className="text-2xl font-extrabold italic uppercase text-textPrimary">
            Plan B The Gym
          </h2>
          <p className="text-sm text-textMuted">
            Weekly Group Class Schedule
          </p>
        </div>

        {/* table */}
        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full bg-base rounded-xl overflow-hidden border border-divider">
            <thead className="bg-section">
              <tr>
                <th className="p-4 text-left uppercase text-sm text-textPrimary">
                  Day
                </th>
                <th className="p-4 text-left uppercase text-sm text-textPrimary">
                  Classes
                </th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(schedule).map(([day, classes]) => (
                <tr key={day} className="border-t border-divider">
                  <td className="p-4 font-bold uppercase bg-section">
                    {day}
                  </td>

                  <td className="p-4 flex flex-wrap gap-2">
                    {classes.map(([time, name], i) => (
                      <span
                        key={i}
                        className={`${COLORS[name]} text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {name} · {time}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* footer */}
        <div className="p-6 border-t border-divider flex justify-center">
          <button
            onClick={onBook}
            className="bg-button text-textPrimary px-8 py-3 rounded-xl font-bold uppercase border border-buttonBorder transition hover:bg-buttonHover"
          >
            Book a Free Class
          </button>
        </div>
      </div>
    </div>
  );
}
