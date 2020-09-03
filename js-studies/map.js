/*
  .map method is basically a method or function of an array which is used to modify the array itself

  for instance lets say you have an array
  [1, 2, 3, 4, 5, 6]
  lets say you have been told to multiply each element in the array by 2 resulting to an array like
  [2, 4, 6, 8, 10, 12]
  this is where you will use the map method ( [].map )

  map method or function, is a function which takes in one input which should be a function
  [1, 2, 3, 4, 5, 6].map(
    function() { function logic inside here... }
  )

  this function will take one input which is one of the array element and should return a new value which
  will be set on a new array
  [1, 2, 3, 4, 5, 6].map(
    // element will be 1 then 2 then 3 then 4 then 5 then 6
    // basically this function will be called for all elements in the array
    function(element) {
      return element
    }
  )

  since we need to multiply the elements by 2
  [1, 2, 3, 4, 5, 6].map(
    function(element) {
      return element * 2
    }
  )
  this will create a new array but elements will be multiplied by 2
  [2, 4, 6, 8, 10, 12]
*/

console.log(
  [1, 2, 3, 4, 5, 6].map(
    function(element) {
      return element * 2
    }
  )
)

/*
  Understand that this concept of mapping is just iterating through all elements in an array and the
  input function of the map method is the one that returns new elements to a new array

  The concept is the same the only difference with previous example is now we are using objects
*/
console.log(
  [
    { name: 'price', age: 50 },
    { name: 'sue', age: 80 },
    { name: 'jane', age: 2 },
  ].map(
    function(element) {
      // String concatenation - please search this online
      return 'User name is > ' + element.name + ' Their age is > ' + element.age
    }
  )
)

/*
    More bizzare use case, lets say you have an array of functions, we will run each function which returns
    a string. This will result to an array of strings
*/
console.log(
  [
    function() { return 'String one'; }, // This is called anonymous function search online
    () => 'Another string', // This is called an arrow function search online
    function () { return 1 + ' and Hello'; }
  ].map(
    function(element) {
      return element();
    }
  )
)

/*
    CONCEPT
    [ array ].map(
      function () {
        return new element
      }
    )
    [ array ].map(
      () => new element
    )
*/