// callbackHell := Callback hell occurs when functions using callbacks are nested repeatedly inside one another.

// Zomato application 

const orderDetails = {
    orderId :12345,
    food : ["pizza","coke","burger"],
    cost:620,
    customer_name:"shivi",
    customer_location:"delhi",
    restaurant_location:"puchgaon"
}

function palcedOrder(orderDetails,callback){
    console.log(`${orderDetails.cost} payment is in progress`);
    setTimeout(()=>{
        console.log("Payment is recived and order get placed");
        orderDetails.status = true;
        callback(orderDetails);
        
    },3000);
}

function preparingOrder(orderDetails,callback){
    console.log(`your food preparation is started ${orderDetails.food}`);
    setTimeout(() => {
        console.log("your order is now prepared");
        orderDetails.token = 123;
        callback(orderDetails);
        
    }, 3000);
}

function pickupOrder(orderDetails,callback){
    console.log(`Delivery boy is on way pickup order ${orderDetails.restaurant_location}`);
    setTimeout(() => {
        console.log("I have  picked the order");
        orderDetails.recieve = true;
        callback(orderDetails);
        
    }, 3000);
}

function deliverOrder(orderDetails){
    console.log("I am on my way to deliver order ");
    setTimeout(() => {
        console.log("order delivered successfully!");
        orderDetails.delivery = true;
    }, 3000);
}

palcedOrder(orderDetails,(orderDetails)=>{
    preparingOrder(orderDetails,(orderDetails)=>{
        pickupOrder(orderDetails,(orderDetails)=>{
            deliverOrder(orderDetails);
        });
    });
});