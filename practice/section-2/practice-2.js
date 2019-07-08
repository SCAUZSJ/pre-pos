'use strict';

function countSameElements(collection) {
  let result = [];
  let object = {};
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length < 3) {
      object[collection[i]] = collection[i] in object ? ++object[collection[i]] : 1;
    } else {
      let chars = collection[i].split("-");
      object[chars[0]] = chars[0] in object ? object[chars[0]] + Number(chars[1]) : Number(chars[1]); 
    }
  }
  for (let item in object) {
    result.push({ key: item, count: object[item] })
  }
  return result;
}
