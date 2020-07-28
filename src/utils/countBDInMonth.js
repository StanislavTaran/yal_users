const countBD = (persistedMonths, users) => {
  return users.reduce((acc, user) => {
    const formatedDate = new Date(user.dob);
    const nameOfMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(formatedDate);

    acc[nameOfMonth].push(user);

    return acc;
  }, persistedMonths);
};

export default countBD;
