/** 
 * Convert a Firebase snapshot object into
 * an array. Mostly for use when iterating Firebase data
 * from within a HTML template.
 * 
*/
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    
    item.id = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
};