const expensesDate = (date) => {
  let day = new Date(date);
  let month = day.toLocaleString("en-US", { month: "long" });
  let dayOfTheWeek = day.toLocaleString("en-US", { weekday: "long" });
  let year = day.getFullYear();
  return { month, dayOfTheWeek, year };
};

export default expensesDate;
