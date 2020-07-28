export const getMonthsWithUsers = state => state.monthsWithUsers;
export const getUsersByMonth = (state, nameOfMonth) => state.monthsWithUsers[nameOfMonth];
export const getErrors = state => state.errors;
