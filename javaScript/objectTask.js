// create a person with properties : name , age and city . then
/*
 a) Log each property as : value of "name" property is "shivi" using loop.
 b) Add a new property called email to the person object.
 c) Delete "city" property from person object.
*/

let person = {
    name : "shivi",
    age : 23,
    city : "varanasi"
}
person.email = "dubey@gmail.com";
delete person.city;

for(let key in person){
    console.log(`value of ${key} is ${person[key]}`);
}

// 2. create a function that an object with firstName, middleName, lastName properties and returns the full Name .

let obj = {
    firstName : "shiv",
    middlename : "angi",
    lastName : " dubey"
}
let convertFullName = (nick)=>{
return `${nick.firstName} ${nick.middlename} ${nick.lastName}`;
}
let fullName = convertFullName(obj);
console.log(fullName);

//3. write a function that takes object and returns the number of properties in an object.

let obj1 = {
    name : "shikha",
    age : 20,
    city : "ghjhk"
}
let keys = Object.keys(obj1).length;
console.log(keys);

// 4 . write a function that return an array of names of users who have the role "admin".

let arr = [
    {name : "gaurangi", role: "admin"},
    {name : "a", role: "user"},
    {name : "b", role: "user"},
]
let filterItem = arr.filter((item)=>{
    console.log(item);
    return item.role === 'admin';
})
let resultArray = arr.filter((item)=>{

    return 1;
})
console.log(resultArray);


// 5. write a function search Products (products ,keyword) that return an array of products whose name includes the given keyword (case-insensitive).

let products = [
    {id :1 , name: "samgang galaxy"},
     {id :2 , name: "vivo "},
      {id :3 , name: "realMe "}
]
function search(products, searchKeyword){
  let filterArray =  products.filter(obj=>{
        return obj.name.toLowerCase().includes(searchKeyword.
            toLowerCase()) 
    })
    console.log(filterArray)
}
search(products, "sam");

// 6. write a function groupByPost(comments) that returns an object grouping comments by postId.

// let comments = [
//     { pstId:1 , comment: "hello"},
//     { pstId:2 , comment: "hii"},
//     { pstId:3 , comment: "hello hii"},
// ]

// function groupByPost(comments){
//     let groupedComments = {}
//     comments.forEach(obj => {
//         if(groupedComments.hasOwnProperty(obj.postId)){
//             groupedComments[obj.postId.push(obj.comment)]
//         }
//         else{
//             groupedComments[obj.postId] = [obj.comment]

//         }
//     });
//     console.log(groupedComments);
// }
// groupByPost(comments);


// 7. write a function buildQuery(params) that return. const param = {search : "laptop", page:2, sort: "price"};

let params = {
    search : "alpha",
    page: 2,
    sort: 'asc'
}
function createUrl(){
    let url = '';
    for(let key in params){
        url = url + `${key}=${params[key]}&`

    }
    let finalUrl = url.slice(0,url.length);
    console.log(finalUrl);

}
createUrl(params);