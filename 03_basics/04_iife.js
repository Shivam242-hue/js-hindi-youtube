// Immediately Invoked function Expression (IILFE)

 (function chai(){
    //named IIFI
    console.log(`DB CONNECTED`);
    
 })();

//  (() => { 
//     console.log(`DB CONNECTED`);
    
//  })()

 ((name) => { 
    console.log(`DB CONNECTED ${name}`);
    
 })('shivam')