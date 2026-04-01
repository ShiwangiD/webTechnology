/*
5 Phases of dom manupulation:
1. DOM .
2. selection of html elements.
3. How to change or manupulate HTML.
4. How to change CSS.
5. how listen Event(event listener).

*/

console.log('hii');

// select the html  element by dom

let a = document.querySelector('h1');
console.log(a);
let b = document.querySelector('p');
console.log(b);

// change sentence by dom 

// let h1 = document.querySelector('h1');
// h1.innerHTML = 'hello duniya';

let p = document.querySelector('p');
p.innerHTML = "hello girls";

// change css by dom

let a1 = document.querySelector('h1');
a1.style.backgroundColor = 'green';


// 5. event listener

let h1 = document.querySelector('h1');
h1.addEventListener('click',()=>{

    h1.style.backgroundColor = "pink";
    h1.style.color = "green";
    h1.innerHTML = 'hello nature!';
    // console.log("alpha");
})



