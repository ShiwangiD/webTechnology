// nullish operator know as short -circutting
// or (||) operator search truthy value 

console.log("" || undefined || "shiwangi" || null || 0n );
console.log(undefined || "shikha" || null || 0n);
console.log("dubey" || null || undefined); // short -circutting

// and (&&) operator search falsy value 

console.log("subha" && null && undefined && "nikita");
console.log("nikita" && 25 && null && true);
console.log("lovely" && 23 && 35 && "shivi dubey");

// nullish (??) operator 
let result= null ?? "lovely";
console.log(result);

let result1 = "alpha" ?? "dubey";
console.log(result1);

let result2 = undefined ?? null;
console.log(result2);

let result3 = null ?? undefined;
console.log(result3);