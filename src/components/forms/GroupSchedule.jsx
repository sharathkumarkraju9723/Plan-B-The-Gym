const COLORS = {
  HIIT: "bg-pink-500",
  Yoga: "bg-purple-600",
  Zumba: "bg-teal-500",
  Tabata: "bg-blue-600",
  Strength: "bg-green-600",
  Spin: "bg-indigo-600",
};

const schedule = {
  Monday: [["7:00 AM", "HIIT"], ["6:30 PM", "Strength"], ["7:00 PM", "Spin"],],
  Tuesday: [["7:00 AM", "Zumba"], ["7:00 PM", "HIIT"],
  ],
  Wednesday: [["7:00 AM", "Strength"], ["6:30 PM", "Spin"],],

  Thursday: [["7:00 AM", "HIIT"], ["7:00 PM", "Yoga"],],

  Friday: [["6:30 PM", "Tabata"], ["7:30 PM", "Zumba"],],

  Saturday: [["8:00 AM", "HIIT"], ["9:00 AM", "Yoga"],],
};

export default function GroupScheduleModal({ isOpen, onClose, onBook }) {
  if (!isOpen) return null;

  return (
    <div className="fixed text-black inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="relative bg-[#f6f4ef] w-full max-w-4xl mx-4 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">✕</button>

        <div className="p-6 text-center border-b">
          <h2 className="text-2xl font-extrabold italic uppercase">Plan B The Gym</h2>
          <p className="text-sm text-gray-600">Weekly Group Class Schedule</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full bg-white rounded-xl overflow-hidden border">
            <thead className="bg-[#ece9e2]">
              <tr>
                <th className="p-4 text-left uppercase text-sm">Day</th>
                <th className="p-4 text-left uppercase text-sm">Classes</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(schedule).map(([day, classes]) => (
                <tr key={day} className="border-t">
                  <td className="p-4 font-bold uppercase bg-[#faf9f6]">{day}</td>
                  <td className="p-4 flex flex-wrap gap-2">
                    {classes.map(([time, name], i) => (
                      <span
                        key={i}
                        className={`${COLORS[name]} text-white text-xs font-bold px-3 py-1 rounded-full`}
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

        <div className="p-6 border-t flex justify-center">
          <button
            onClick={onBook}
            className="bg-[#2a2a2a] border-black text-white px-8 py-3 rounded-xl font-bold uppercase border hover:bg-[#f6f4ef] hover:text-[#2a2a2a]"
          >
            Book a Free Class
          </button>
        </div>
      </div>
    </div>
  );
}
