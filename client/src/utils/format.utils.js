import TimeAgo from "javascript-time-ago";
// English.
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
export const formatDate = (d) => {
  const date = new Date(d);

  return timeAgo.format(date);
};
