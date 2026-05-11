// JSON FORMATE :=

const j1 = {
    name:"shivi",
    age:"24",
    address:"up",
    c:undefined,
}

// convert into json(json is string )

const jsonFormate = JSON.stringify(j1);
console.log(jsonFormate);

const jsFormate = `{
    "name":"lovely",
    "age":"24",
    "address":"varansi"
}`;

// convert into java script object

const jsObj = JSON.parse(jsFormate);
console.log(jsObj);



