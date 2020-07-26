const countBD = (persistedMonths, users) => {
  return users.reduce((acc, user) => {
    const month = new Date(user.dob).getMonth();

    acc[month].push(user);
    return acc;
  }, persistedMonths);
};

export default countBD;
