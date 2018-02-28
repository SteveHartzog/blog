/** 
 * Convert a Firebase snapshot object into
 * an array. Mostly for use when iterating Firebase data
 * from within a HTML template.
 * 
*/
export const snapshotToArray = (snapshot, type = null) => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    
    item.id = childSnapshot.key;

    // If we are filtering by type
    if (type !== null) {
      if (type === item.type) {
        returnArr.push(item);
      }
    } else {
      returnArr.push(item);
    }
  });

  return returnArr;
};

export const filterByType = (object, type) => object.filter(key => object.type === type);