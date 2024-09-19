 
 // this is a async ofunction
 async function getData() {
     return 5 ;
 }

 // An async function always returns a promise. Even if it is a raw value , the async function will wrap it in a promise

 const dataPromise = getData();
 console.log(dataPromise);
 dataPromise.then((val) =>console.log(val));
 console.log("................................................................")

 /* Using async with await */ 
// async ,wait combo is used to handle promises
// 'await' is a keyword that only be used inside async function

/* Using async wait VS normaly handling promises */
const  p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved successfully ");
    }, 5000);
});

 
async function  handlePromise() {
    const data = await p;  // this case code(js engine) seems waiting here and after 5 seconds both 
    console.log(" i am after promise resolved "); // this console log prints together
    console.log(data);
}

// handlePromise();


 function thenWay(){
    p.then((value) =>console.log(value));
    console.log("i am after promise resolved"); // here this line print first then after 5 seconds the promsise result
                                                // is printed
 }

 // thenWay()



/* Interview type question  */
   
async function resolvePromise1(){  // this case both resolve prarally after 5 sec
    console.log("i am before promise resolved"); 
    const data = await p;
    console.log("i am after promise resolved"); 
    console.log(data);

    const data2 = await p;
    console.log("i am after promise resolved 2"); 
    console.log(data);
}

// resolvePromise1();


const  p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1 resolved successfully 5 sec ");
    }, 5000);
});

const  p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise2 resolved successfully 10 sec ");
    }, 10000);
});


async function resolvePromise2(){    // this case both promise get priented after 10 seconds
    console.log("i am before promise resolved"); 
    const data1 = await p2; //10s
    console.log("i am after promise resolved"); 
    console.log(data1);

    const data2 = await p1; //5s
    console.log("i am after promise resolved 2"); 
    console.log(data2);
}

// resolvePromise2();


async function resolvePromise3(){    // this case first after 5 promise 1 get priented and after 10 seconds promise
      
    console.log("i am before promise resolved");  // 2 get priented
    
    const data2 = await p1; //5s
    console.log("i am after promise resolved 2"); 
    console.log(data2);

    const data1 = await p2; //10s
    console.log("i am after promise resolved"); 
    console.log(data1);
}

// resolvePromise3()


/* How everything  works behind the scene */

//when the 'callstack' see 'await' keyword  the handle promise execution will suspend and this will move out
// of 'callstack' so it will not block the main thread, and when the promise is resolved the it will come back to
// the 'callstack' and execute quickly
// so the whole code execution is not suspended, just  the function execution is suspended .

/* how fetch() works ??*/

// 'fetch' return us a promise after resolving that promise we get a response oject that response object has body
// which is a readable stream  that we can convert as per out need.
// ('fetch' -> Promise -> response object -> body with readable stream)