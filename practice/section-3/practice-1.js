'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(item => {
    for (let i = 0; i < objectB['value'].length; i++) {
      if (item['key'] === objectB['value'][i]) {
        --item['count'];
        break;
      }
    }
  });
  return collectionA;
}
