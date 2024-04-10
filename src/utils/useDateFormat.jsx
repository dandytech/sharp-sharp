import { useState, useEffect } from "react";

const useDateFormat = (initialDate) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = (date) => {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };
      return new Date(date).toLocaleString("en-US", options);
    };

    setFormattedDate(formatDate(initialDate));
  }, [initialDate]);

  return formattedDate;
};

export default useDateFormat;
