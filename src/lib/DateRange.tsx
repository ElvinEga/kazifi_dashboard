const DateRange = ({
  startYear,
  endYear,
  id,
}: {
  startYear: number;
  endYear: number;
  id?: string;
}) => {
  // Rest of the code...
  const start = new Date(startYear);
  const end = new Date(endYear);
  return (
    <p id={id} className="sub-content">
      {start.toLocaleString("default", { month: "short" })},{" "}
      {start.getFullYear()} -{" "}
      {end.toString() != "Invalid Date"
        ? end.toLocaleString("default", { month: "short" }) +
          ", " +
          end.getFullYear()
        : "Present"}
    </p>
  );
};

export default DateRange;
