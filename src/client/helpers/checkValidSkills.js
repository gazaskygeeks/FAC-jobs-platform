export default (arr1, arr2) => {
  return check(arr1,arr2).every(isTrue);
};

function check(arr1,arr2) {
  return arr2.map(e => {
    if (arr1.includes(e)) {
      return { topic: e , valid: true };
    } else {
      return { topic: e , valid: false };
    }
  });
}

function isTrue(element) {
  return element.valid === true;
}
