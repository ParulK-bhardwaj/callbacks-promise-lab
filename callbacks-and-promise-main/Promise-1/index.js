// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`


/*
it results in catch block being executed: returns error message for reject() 
"Promise rejected! 😞
 --- Oops ---"
*/


// **2)** What happens when you call both `resolve` and `reject`? Test this.

/*
only first one is called which is reject in this case. This will result in promise state to get settled.
it results in catch block being executed: returns error message for reject() 
"Promise rejected! 😞
 --- Oops ---"
*/

// **3)** Does the order matter you call resolve and reject matter? Test this. 

/*
Yes, as we saw in the second question, only first one called will take place 
*/

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
/*
Similar to q 2 and 3, only first one called will take place and all the other called will be ignored. 
*/