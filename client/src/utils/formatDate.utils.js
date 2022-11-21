const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
export const formatDate = (d) => {
  const date = new Date(d);
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${date.getDay().toString().padStart(2, "0")}-${
    Months[date.getMonth()]
  }
`;
};
