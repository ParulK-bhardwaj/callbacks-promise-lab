function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(timeOfDay === 'breakfast') {
        resolve(`Let's eat Eggs and Toast for ${timeOfDay}.`)
      } else if (timeOfDay ==='lunch') {
        resolve(`Let's eat Veggie Sandwich for ${timeOfDay}.`)
      } else if(timeOfDay ==='dinner') {
        resolve(`Let's eat Rice and Lentils for ${timeOfDay}.`)
      } else {
        reject("I don't eat between meal snacks!")
      }
    }, 1000)
  })
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch')
  .then(foodMessage => console.log(foodMessage)) 
  .catch(error => console.error(error));

// // Handle this Promise: 
whatToEat('elevens')
  .then(foodMessage => console.log(foodMessage)) 
  .catch(error => console.error(error));
