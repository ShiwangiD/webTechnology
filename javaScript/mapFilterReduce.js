
// forEach :== loop through each element of an array.

const arr = [10,20,'shikha',90];
arr.forEach((number)=>console.log(number));


// Filter :== keep only what passes the condition.

const arr1 = [30,50,70,'lovely','nikita'];
const newArr = arr1.filter((num)=> num>25);
   console.log(newArr);

   //filtering custom function implementation :=== 

   const arr2 = [10,20,30,40,50,60];
   arr2.filtering = function(compare){
    const ans=[];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;

   }
   const aRR = arr2.filtering((num)=>num>25);
   console.log(aRR);

// Mapping :==  Mapping in JavaScript means taking each item in an array, changing it in some way, and creating a new array with those changed values.

// const arr4 = [40,70,69,50,20,60];
// arr4.map((call))

const product = [
    {
        id:1,
        name:'lovely',
        price:3000,
        place:'mumbai'
    },
    {
        id:2,
        name:'shiwangi',
        price:4000,
        place:'delhi'
    },
    {
        id:3,
        name:'shikha',
        price:6000,
        place:'kolkata'
    },
    {
        id:4,
        name:'nikki',
        price:8000,
        place:'varanasi'
    },
    {
        id:5,
        name:'tukku',
        price:6000,
        place:'varansi'
    }
]

const newProduct=product.filter((product)=> product.price >5000);
console.log(newProduct);

// map method :==

const ans = product.map((product)=>({name:product.name, price:product.price}));
console.log(ans);

// reducer method :==takes argument of two first is accumelator and currentValue ;
// reduce ((acc,currentValue)=>{}) accumulator is sum value and current vazaalue is present on  arrays.

const totalPrice = product.reduce((accmulator,currentValue)=>{
return accmulator + currentValue.price;
},0)
console.log(totalPrice);

const setValue = [10,20,30,40,50,60,70,80];
console.log(setValue);

const s1 = new Set(setValue);
s1.add(11);
console.log(s1);
s1.add(11);
console.log(s1);
console.log(s1.has(23));
console.log(s1.delete(40));
console.log(s1);
s1.clear();
console.log(s1);

const email = ["shi@gm","love@gm","dubey@gm","shi@gm"]; // remove duplicates values  on array 
const s2 = new Set(email);
console.log(s2);

const uniqueSet = [...new Set(email)];
console.log(uniqueSet);

// how to create map value :==

const m1 = new Map([
    ["Rohit", 40],
    [2,"Rohit"],
    [true,11],
    [[10,20,30,22],"mohit"]
]);
console.log(m1);
console.log(m1.size);

for(let [keys,value]  of m1){
    console.log(keys,value)
}