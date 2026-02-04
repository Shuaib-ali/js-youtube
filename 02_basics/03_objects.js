//singleton

// object  literals
// Object.create

const mySym = "Key1"
const JsUser = {
    name: "Shuaib",
    "full name":"Shuaib Ali",
    [mySym]: "mykey1",
    age:24,
    location:"Rampur",
    email:"shuaib123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "ali234@gmail.com"
// Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, $(this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());