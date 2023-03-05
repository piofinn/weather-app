export const getLocalTime = (
  dateValue: string | number | Date,
  locales?: Intl.LocalesArgument
) =>
  new Date(dateValue).toLocaleTimeString(locales, {
    timeStyle: "short",
  });
