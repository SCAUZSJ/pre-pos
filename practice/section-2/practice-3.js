'use strict';

function countSameElements(collection) {
  let result = [];
  let object = {};
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length < 3) {
      object[collection[i]] = collection[i] in object ? ++object[collection[i]] : 1;
    } else {
      let chars = [];
      if(collection[i][1] == '-' || collection[i][1] == ':'){
        chars = collection[i].split(collection[i][1]);
      }else{
        chars = collection[i].substring(0,collection[i].length-1).split(collection[i][1]);
      }
      object[chars[0]] = chars[0] in object ? object[chars[0]] + Number(chars[1]) : Number(chars[1]); 
    }
  }
  for (let item in object) {
    result.push({ name: item, summary: object[item] })
  }
  return result;
}
