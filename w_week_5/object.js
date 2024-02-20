let array = ["Apple","Mango","Apple","Orange","Mango","Mango"];
const obj = {}
/*
   obj ['1']=100;
   console.log(obj);
   obj ['1']++;

   console.log(obj);*/
   
   /*
if(obj ['0']){
    console.log("Key Found");
}
else{
    console.log("Key not found");
}
console.log(obj[0]);*/
const obj1 = {}
const obj2 = {}
const obj3 = {}
let data =[
    {'id': 1, name:"Aisha"}
    {'id': 2, name:"dua"}
    {'id': 3, name:"Aisha"}
]
for (let itreator in array){
    const element = array[itreator]
    if(obj['id']){
        obj[element]++;
    }
    else{
        obj[element]=1;
    }
   }
   console.log(obj);