'use strict';

function collectSameElements(collectionA, objectB) {
  let result=[]
  collectionA.forEach(function(item) {
    for(let j=0;j<objectB['value'].length;j++){
      if(item.key ==objectB['value'][j] ){
        result.push(item.key)
        break;
      }
    }
  }, this);
  return result;
}
