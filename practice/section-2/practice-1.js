'use strict';

function countSameElements(collection) {
  let result=[];
  let object={};
  for(let i=0;i<collection.length;i++){
    object[collection[i]] = collection[i] in object ? ++object[collection[i]] : 1 ; 
  }
  for(let item in object){
    result.push({key:item,count:object[item]})
  }
  return result;
}
