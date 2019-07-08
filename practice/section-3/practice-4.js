'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = [];
  let object = {};
  for (let i = 0; i < collectionA.length; i++) {
    if (collectionA[i].length < 3) {
      object[collectionA[i]] = collectionA[i] in object ? ++object[collectionA[i]] : 1;
    } else {
      let chars = collectionA[i].split("-");
      object[chars[0]] = chars[0] in object ? object[chars[0]] + Number(chars[1]) : Number(chars[1]);
    }
  }
  for (let item in object) {
    result.push({ key: item, count: object[item] })
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
