const uppercaseAll = (...words) => {
 const newArr = []
 for (let word of words) {  
  if (typeof word === "string"){
     newArr.push(word.toUpperCase());
  }
  
 }
 return newArr;
};

const destructureCoordinates = (coordinates) => {
 
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
