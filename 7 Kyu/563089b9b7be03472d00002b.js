/* Remove All The Marked Elements of a List (7 Kyu) */

// Original submission
Array.prototype.remove_ = function(integer_list, values_list) {
  values_list.map(value => {
    for (let n = 0; n < integer_list.length; n++) {
      if (integer_list[n] === value) {
        integer_list.splice(n, 1);
        n--;
      }
    }
  });
  return integer_list;
};

// One-liner done with Amanda's help
/* Array.prototype.remove_ = function(integer_list, values_list) {
  return integer_list.filter(integer => !values_list.includes(integer));
}; */

// Would have done this if I know how to use .includes() haha
/* Array.prototype.remove_ = function(integer_list, values_list) {
  var result = [];
  integer_list.forEach(integer => {
    if (values_list.includes(integer) === false) result.push(integer);
  });
  return result;
}; */
