'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result=[];
  let object={};
  for(let i=0;i<collectionA.length;i++){
    object[collectionA[i]] = collectionA[i] in object ? ++object[collectionA[i]] : 1 ; 
  }
  for(let item in object){
    result.push({key:item,count:object[item]})
  }
  result.forEach(item => {
    for (let i = 0; i < objectB['value'].length; i++) {
      if (item['key'] === objectB['value'][i]) {
        item['count'] -= parseInt(item['count'] / 3);
        break;
      }
    }
  });
  return result;
}
