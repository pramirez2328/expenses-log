const expensesDate = (date) => {
  let day = date.getDate();
  let month = date.toLocaleString("en-US", { month: "long" });
  let dayOfTheWeek = date.toLocaleString("en-US", { weekday: "long" });
  let year = date.getFullYear();
  return { month, dayOfTheWeek, year, day };
};

export default expensesDate;
