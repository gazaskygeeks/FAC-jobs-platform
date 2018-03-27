export const getUserId = () => (dispatch,getState) => {
  return getState().login.user.id;
};
