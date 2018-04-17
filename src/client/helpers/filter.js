export default (array, dataToFilter) => {
  function search(user) {
    return Object.keys(this).every(key => {

      return user[key].includes(this[key])|| !this[key];
    });

  }
  const result = array.filter(search, dataToFilter);

  return result;
};
