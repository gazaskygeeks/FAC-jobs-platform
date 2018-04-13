export default (array, dataToFilter) => {
  // console.log(array,'all student');
  // console.log(dataToFilter,'data to filter');
  function search(user) {
    // console.log(user,'user');
    return Object.keys(this).every(key => {

      return user[key].includes(this[key])|| !this[key];
    });

  }
  const result = array.filter(search, dataToFilter);

  return result;
};
