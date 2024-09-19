

// Suppose we want to create a e-commerce website 

const cart = ['shoes', 'mobile', 'earphone'];

// Now we need to create an order according to the cart

createOrder(cart)  // this is our create order api which will return the order id    

// But after create order we need proceed to payment but our createOrder api is a async function so we need to pass
// a callback to the createOrder Api so that whenever the order is created then the proceed to payment function will be
// called

createOrder(cart, (orderId)=>{
     ProceedToPayment(orderId);  
})

// This callback procedure has some flaw ,like callback hell and inversion of controll 

/***********/
// To solve this problem we can design our api such a way that, it will take the cart and return us a promise which is an immutable object. 
// Promise is nothing but an empty object with some data value in it, what ever our Api will return the data value will hold it.
// But before data is returned the promise will be empty.
// After the promise filled with data then we will attach the callback fucntion ProceedToPayment with it

const promise = createOrder(cart); //{data:undefined} initially 

promise.then((orderId) => {
   return ProceedToPayment(orderId); 
})

// Promise has two thing, one 'promiseState' and another one is 'promiseResult'.
// Initial condition  { promiseState: 'pending', promiseResult:Undefined } 
// Inside the promiseResult has body which contains our results in form of readable streams whcih we can not use directly
// PromiseState has 3 conditions. 'pending', 'fulfilled', 'rejected'


// What is promise?
// Ans: A Promise is an object representing the eventual completion or failure of an asynchronous operation




