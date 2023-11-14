type Duration = {
  years: number;
  months: number;
  days: number;
};

export function getDuration(startDate: Date, endDate: Date | null): string {
  const currentDate = new Date();
  const endDateToUse = endDate || currentDate;
  // Ensure is a Date object
  const endDateObject =
    endDateToUse instanceof Date ? endDateToUse : new Date(endDateToUse);
  const startDateObject =
    startDate instanceof Date ? startDate : new Date(startDate);

  const diffInMilliseconds = Math.abs(
    endDateObject.getTime() - startDateObject.getTime()
  );
  const duration: Duration = {
    years: endDateObject.getUTCFullYear() - startDateObject.getUTCFullYear(),
    months: endDateObject.getUTCMonth() - startDateObject.getUTCMonth(),
    days: Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)),
  };

  if (duration.years > 0) {
    return `${duration.years} ${duration.years === 1 ? "year" : "years"}`;
  }

  if (duration.months > 0) {
    return `${duration.months} ${duration.months === 1 ? "month" : "months"}`;
  }

  if (duration.days > 0) {
    return `${duration.days} ${duration.days === 1 ? "day" : "days"}`;
  }

  return "0 days"; // default if no duration
}

export function aboutObject(arr: { designation: string; content: string }[]) {
  const result: { [key: string]: string } = {};
  arr.forEach((item) => {
    result[item.designation] = item.content;
  });

  return result;
}
