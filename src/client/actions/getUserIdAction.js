export default () => (dispatch,getState) => {
  return getState().login.user.name;
};
