const countBD = (persistedMonths, users) => {
  return users.reduce((acc, user) => {
    const formatedDate = new Date(user.dob);
    const month = formatedDate.getMonth();

    acc[month].push({ ...user, formatedDayOfBD: new Intl.DateTimeFormat().format(formatedDate) });
    return acc;
  }, persistedMonths);
};

export default countBD;
