'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(item => {
    for (let i = 0; i < objectB['value'].length; i++) {
      if (item['key'] === objectB['value'][i]) {
        item['count'] -= parseInt(item['count'] / 3);
        break;
      }
    }
  });
  return collectionA;
}
