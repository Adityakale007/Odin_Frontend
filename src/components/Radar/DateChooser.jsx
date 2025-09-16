import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateChooser() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="absolute top-6 left-6 bg-black/80 border border-white/30 rounded-xl p-6 shadow-lg shadow-white/10 backdrop-blur-md z-20 scale-100 origin-top-left">
      <label className="block text-xl font-bold mb-3 text-gray-200">Select Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        className="w-48 bg-black/90 text-white text-base px-3 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/70"
        calendarClassName="
          bg-black text-white border border-white/40 rounded-lg shadow-lg
          [&_.react-datepicker__header]:bg-gray-900
          [&_.react-datepicker__current-month]:text-white
          [&_.react-datepicker__day]:text-white
          [&_.react-datepicker__day--selected]:bg-green-500
          [&_.react-datepicker__day--keyboard-selected]:bg-green-500
          [&_.react-datepicker__day--today]:border border-green-500
          [&_.react-datepicker__triangle]:border-b-gray-900
          [&_.react-datepicker__day:hover]:bg-green-700
        "
      />
    </div>
  );
}
