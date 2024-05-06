const noOfFriends = '3';
console.log(noOfFriends==0 ? "no Friends": noOfFriends);
console.log(`I have,${noOfFriends} friends`);
// new practice
const obj = {
    name:"Aisha" ,
    gender:"Female" ,
    code:"92" ,
    age:"21",
}
let obj2 = {...obj}; // spread operator
obj.name="Gul";
console.log(obj);
console.log(obj2);
const{name,age,...rest}=obj;
console.log({name , age});
// set timeout
//console.log('Starting setTimeout example...');
//setTimeout(() => {
//console.log('This message will be displayed after 2 seconds.');
//}, 2000); // 2000 milliseconds = 2 seconds
//console.log('setTimeout example scheduled.');
// promise
function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    resolve(data);
   reject({message:"Unable to get data"});
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    const data1 = getData()
    .then(data => {
    console.log('Data received:',data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
console.log(data1);
// random number
let randomNumber = Math.random(0,1);
resolve(randomNumber);
reject({message:"Unable to get data"});
console.log(randomNumber>0.5?reject:resolve);
function Random() {
    return new Promise((resolve, reject) => {
    
    
    const randomNumber = Math.random();
    console.log("Random number Genrated is :", randomNumber);
    if(randomNumber > 0.5){
    resolve(randomNumber);
    }
    else{
   reject({message:"Random number is less then 0.5"});
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    const data1 = getData()
    .then(data => {
    console.log('Data received:',data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });