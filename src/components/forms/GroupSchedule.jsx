import { useNavigate } from "react-router-dom";
import { DAYS } from "../../utils/constants";
import { getScheduleByClass } from "../../utils/getScheduleByClass";

/* Neutral class colors */
const COLORS = {
  HIIT: "bg-[#2f2f2f] text-textLight border border-divider",
  Yoga: "bg-[#3a3a3a] text-textLight border border-divider",
  Zumba: "bg-[#4a4a4a] text-textLight border border-divider",
  Tabata: "bg-[#1f1f1f] text-textLight border border-divider",
  Strength: "bg-[#555555] text-textLight border border-divider",
  Spin: "bg-[#666666] text-textLight border border-divider",
};

/* class - Route Mapping */
const CLASS_ROUTES = {
  HIIT: "/classes/hiit",
  Yoga: "/classes/yoga",
  Zumba: "/classes/zumba",
  Tabata: "/classes/tabata",
  Strength: "/classes/strength",
  Spin: "/classes/spin",
};

const CLASSES = ["HIIT", "Yoga", "Zumba", "Tabata", "Strength", "Spin"];

export default function GroupScheduleModal({ isOpen, onClose, onBook }) {

  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center text-textPrimary">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* modal */}
      <div className="relative bg-surface/100 w-full max-w-5xl mx-4 rounded-2xl border border-divider flex flex-col max-h-[90vh]">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* header */}
        <div className="p-6 text-center border-b border-divider">
          <h2 className="text-2xl font-extrabold italic uppercase">
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
                <th className="p-4 text-left uppercase text-sm">Day</th>
                <th className="p-4 text-left uppercase text-sm">Classes</th>
              </tr>
            </thead>

            <tbody>
              {DAYS.map((day) => (
                <tr key={day} className="border-t border-divider">
                  <td className="p-4 font-bold uppercase bg-section">
                    {day}
                  </td>

                  <td className="p-4 flex flex-wrap gap-2">
                    {CLASSES.flatMap((className) =>
                      (getScheduleByClass(className)[day] || []).map(
                        (item, i) => (
                          <span
                            key={`${className}-${i}`}
                            className={`${COLORS[className]} text-xs font-bold px-3 py-1 rounded-full`}
                          >
                            {className} · {item.time}
                          </span>
                        )
                      )
                    )}

                    {/* Empty state */}
                    {CLASSES.every(
                      (cls) => getScheduleByClass(cls)[day]?.length === 0
                    ) && (
                        <span className="text-sm text-textMuted">
                          No classes
                        </span>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* footer */}
        <div className="p-6 border-t border-divider flex justify-center">
          <button
            onClick ={() => navigate("/classes")}
            className="bg-button text-textPrimary px-8 py-3 rounded-xl font-bold uppercase border border-buttonBorder hover:bg-buttonHover transition"
          >
            Book a Free Class
          </button>
        </div>
      </div>
    </div>
  );
}
