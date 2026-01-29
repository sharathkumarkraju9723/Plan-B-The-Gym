const classSchedules = {
  HIIT: {
    Monday: [
      { time: "7:00 AM", title: "HIIT Conditioning", color: "bg-pink-600" },
      { time: "6:30 PM", title: "HIIT Strength", color: "bg-red-600" },
    ],
    Tuesday: [],
    Wednesday: [
      { time: "7:00 AM", title: "HIIT Cardio", color: "bg-pink-600" },
      { time: "6:30 PM", title: "Full Body HIIT", color: "bg-red-600" },
    ],
    Thursday: [],
    Friday: [
      { time: "6:30 PM", title: "Evening HIIT", color: "bg-pink-600" },
    ],
    Saturday: [
      { time: "8:00 AM", title: "Weekend HIIT", color: "bg-red-600" },
    ],
    Sunday: [],
  },

  Yoga: {
    Monday: [{ time: "6:00 AM", title: "Morning Yoga", color: "bg-green-600" }],
    Tuesday: [],
    Wednesday: [{ time: "6:00 PM", title: "Evening Yoga", color: "bg-green-700" }],
    Thursday: [],
    Friday: [],
    Saturday: [{ time: "7:00 AM", title: "Weekend Yoga", color: "bg-green-600" }],
    Sunday: [],
  },

  Spin: {
    Monday: [{ time: "6:30 AM", title: "Spin Training", color: "bg-indigo-600" }],
    Tuesday: [],
    Wednesday: [{ time: "7:00 PM", title: "Spin Training", color: "bg-indigo-700" }],
    Thursday: [],
    Friday: [{ time: "7:00 PM", title: "Spin Training", color: "bg-indigo-600" }],
    Saturday: [],
    Sunday: [],
  },

  Strength: {
    Monday: [{ time: "6:30 AM", title: "Strength Training", color: "bg-green-600" }],
    Tuesday: [],
    Wednesday: [{ time: "7:00 PM", title: "Strength Training", color: "bg-green-700" }],
    Thursday: [],
    Friday: [],
    Saturday: [{ time: "8:00 AM", title: "Strength Training", color: "bg-green-600" }],
    Sunday: [],
  },

  Tabata: {
    Monday: [{ time: "7:00 AM", title: "Tabata Burn", color: "bg-rose-600" }],
    Tuesday: [],
    Wednesday: [{ time: "6:30 PM", title: "Tabata Cardio", color: "bg-red-600" }],
    Thursday: [],
    Friday: [],
    Saturday: [{ time: "8:00 AM", title: "Weekend Tabata", color: "bg-red-600" }],
    Sunday: [],
  },

  Zumba: {
    Monday: [{ time: "7:00 AM", title: "Morning Zumba", color: "bg-pink-600" }],
    Tuesday: [],
    Wednesday: [{ time: "6:30 PM", title: "Zumba Burn", color: "bg-red-500" }],
    Thursday: [],
    Friday: [],
    Saturday: [{ time: "8:00 AM", title: "Weekend Zumba", color: "bg-red-500" }],
    Sunday: [],
  },
};

export default classSchedules;
