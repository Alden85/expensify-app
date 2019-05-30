import moment from 'moment';
//Get visible expenses
 export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch =startDate ? startDate.isSameOrBefore(createdAtMoment,'day') :true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch; // only if all 3 of these match we will return in new filter array.
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1; //1 is truthy -1 falsy
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    }); //expenses passed in will be the entire array of expenses we create.
};
