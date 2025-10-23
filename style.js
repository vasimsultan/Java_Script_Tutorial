function something(){
   alert("someone clicked button");
}
something();

function makegreen(){
document.getElementById("mainpart")
.style.backgroundColor="green";
}
function setbutton(){
document.getElementById("mainpart")
.style.backgroundColor="blue";
document.getElementById("bluebutton")
.style.backgroundColor="aqua";
}

// let x,y=1;
// console.log(x);
// let s=1;
// alert(s);
// alert(s=3);
// alert(s==`3`);
// alert(s===3);

// let x=0;
// for(let i=0;i<0;i++){
//     sum=sum+i;
// }
// console.log(sum);

// let person= prompt("What's Your Name ");
// alert(person)

// document.writeln("Thsi is use document.write mathod "
// );

// let mm="hello_vs";
// let hm="hello_vs".slice(-5);

// // alert(mm);
// alert(hm);

// const obj_0={a:"this is empty "};
// alert(JSON.stringify(obj_0));

// const obj_1={a:"!hello",b:23,c:{}};
// alert(JSON.stringify(obj_1))

// const a= "This is String Value";
// const b=42;
// const c={};
// const obj_2= {a:a,b:b,c:c};
// alert(JSON.stringify(obj_2))

//  const obj_3={a,b,c};
// alert(JSON.stringify(obj_3));

// const obj_4=new Object({a:45,b:53,c:7});
// alert(JSON.stringify(obj_4));


// const obj_5=Object.create({a:3,b:6});
// alert(JSON.stringify(obj_5));

// alert(JSON.stringify(obj_5,a));

// console.log(obj_5);

// const person={
//     firstname:"rabart", lastname:"stim"};
// alert(person.firstname);

// alert(person['firstname']);

// const fn="lastname";

// alert(person[fn]);

// const person={
//     firstname:"rabat",lastname:"piterson"
   
//}
//  alert(Object.keys(person));
//  alert(Object.values(person));

// for(const k in person){
//     alert("This is key : " + k + " ," + " Value is : " + person[k]);
// }

// for(const[k,v] of Object.entries(person)){
//     alert(`this is key : ` + k + ` and  vlaue is : ` + v)
// }

// const person={
//     firstname:`Rohan` , lastname:`Kumar`
// }

// person.brithIn=` Rajisthan `;
// person["profession "]=" Dr.";
// alert(JSON.stringify(person))

// const arr=[1,2,3,9,5,6];
// // alert(arr[3]-['1']);
// alert(arr.length-1) -->

// <!-- const arr=new array(1,2,3,4,5);
// co(arr); -->

// const arr_1=[1,2,4,5,6,7];
// alert(arr_1)
// arr_1[5]=0;
// alert(arr_1)
// arr_1[10]=18;

// const arr_1=[0,4,4,"three",8,9,"four",3]
// const arr_2=[11,14,15]
// arr_2[4]=arr_1;
// // console.log(arr_2)
// console.log(arr_2.length)

//  const arr_1=[[34,33],[12,13,14,15],[21,32,42,46,63,36,72,21]];
// console.log(arr_1);
// console.log(arr_1[0][1])

//  arr_1[0][1]=["tharty"];
//  console.log(arr_1[0]);

// const arr_1=[12,32,42,52];
// const arr_2=[98,90,88];
// const arr_3=arr_1.concat(arr_2);
// console.log(arr_3);

// const ab=["raja","rahul","rita","radha"];
// const a = ab.join("! ");
// const b=ab.join(" ")
// // document.writeln(a);
// // console.log(a)

// const a1=a.split("; ");
// console.log(a1)

// const arr=[2,4,5,1];
// let a=arr.push(90);
// console.log(arr);
// console.log(a);

// const aarr=[5,3,2,5,1];
// const aa=aarr.pop();
// console.log(aarr);
// console.log(aa);

// const p=[0,1,2,3,4];
// console.log(p)

// const c=p.unshift(100)
// console.log(c)
// console.log(p)

// const p=[1,24,4,5,6]
// console.log(p);
// const a=p.shift();
// console.log(a);
// console.log(p);

//about date how to work date Object;

// const currentsecound = new Date();
// alert(currentsecound)
// alert(currentsecound.toString());
// alert(currentsecound.valueOf());

//if we add (1000 milisecond=1 second) 1 second in this Object;
// const lastminuts=new Date(1000);
// console.log(lastminuts);
// const lastmint=new Date(1990,23,43,62)
// console.log(lastmint);

// for loop and nested loop

// let maxIner=54;
// let maxouter=10;
// let mystring=" ";

   
//    for(let o=1;o <= maxIner.length;o++ ){
//    mystring=" ";
//    for(let i = 1 ; i<= maxouter.length;i++){
//       mystring= mystring + o*i + " , ";

//    }
//    alert(mystring);
// };

// let counter= 82;
// do{
//    counter++;
//    alert(counter);
// }while(conter > 10);

// const mobj={name:"Rahul kumar",age:42, address:"channi"};
// for(const mykey in mobj) // it's use for key and object paire  access detais by for .. in loop , sintext is  (<key> in <object>) 
//    {
//    alert(mykey);
//    alert( mobj[mykey]);
// }

// -------------- forEach() method uses  with array

// function myfunction(element){
//    alert("this is myfunction " +element);
// }
// const myarr=["a","b","c",42]

// myarr.forEach(myfunction);

// function paradigram(p){
//    alert(p + "! " + p + "! ");
// }

// const ret= paradigram("quick go");
//    alert(ret);


// let paradigram = fucntion(p){
//    retun p + "! " + p + "! ";
// };
// const ret=paradigram("quik go");
// alert(ret);

// function demopromise(){
//    return new Promise(funciton (resolve, reject)
// {
// const result=true;
// if(result === true){
//    resolve("demopromise worked.");
// }else
// {
//    reject("demopromise failed.");
// }
// }
//    );
// }


// this is wikipidia prectice set
// demopromise();
// .then((msg)=> console.log("ok" + msg));
// .catch((msg)=> console.log("error" + msg));

// ------------------------------------ prototype in js with youtube --------------------

// console.log("this is worked properly .")

// function person(name){
//    this.name=name;
// }
// person.prototype.sayhello=function(){
//    console.log("hello.${this.name}");
// }
// let p1=new person("Vasim");
// let p2=new person("Rahul");

// p1.sayhello();
// p2.sayhello();
// // alert(a);
// alert(b);

//const name="Radha";
//const sarname="Swami";

//console.log(`This is ${name} and it is sarname ${sarname}`);

// const vname = new String("vasim-sultan");

//console.log(vname);
//console.log(vname.fixed());
//console.log(vname.substring());
//console.log(vname.toWellFormed());
//console.log(vname.sup());
//console.log(vname.blink());
//alert(vname.blink());
//console.log(vname);
// console.log(vname.startsWith());
// console.log(vname.fontcolor());
// console.log(vname.toUpperCase());
// console.log(vname.valueOf());
//console.log(vname.codePointAt());
//console.log(vname.search());
//console.log(vname.split());
//console.log(vname.__proto__);

//const url= "https://vasim.com/vasim%20sultan";
//console.log(url.replace('%20','_'));  // https://vasim.com/vasim_sultan
//console.log(url.slice(8,18)); // vasim.com/
//console.log(url.slice(-6)); // sultan
//console.log(url.includes('solution')); // false
//console.log(url.includes('sultan'));  //true

// use Number in js. -----------------
// const Numbers =2424;
// console.log(Numbers);
// const Num= new Number(12.8989);

// console.log(Num.toPrecision(2))
// console.log(Num.toFixed(3 ));

// const balance= 1000000;
// console.log(balance.toLocaleString()); // 10,00,000

//--------------- Math --------------------------
// console.log(Math.abs(-5)); // 5.5
// console.log(Math.round(5.7))  // 6
// console.log(Math.ceil(3.1)); // 4
// console.log(Math.floor(6.9)); // 6
// console.log(Math.max(4,7,2,1,8,9,12)); // 12
// console.log(Math.min(4,7,2,1,8,9,12)); //1



// Date Object in js --------------------
// const myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// const mDate=new Date(2002,0,21,13,42);
// console.log(mDate.toString());
// const vDate = new Date("1-24-2004 ");
// console.log(vDate.toLocaleString());

// let myStemp= new Date( );
// console.log(myStemp);
// // console.log(getTime());
// console.log(myStemp/1000);
// console.log(Math.floor(myStemp/1000));

// console.log(myStemp.getMonth());
// console.log(myStemp.getDate());
// let vs=myStemp.toDateString('default', {month:'long'});
// console.log(vs);

//  ------------------ Functions in js --------------------

// function sayHello(){
//    console.log("Hello Coders!")
// }

// sayHello();

// function addsomething(num1 ,num2){
//  console.log(
//    num1 + num2
//  )
// }
// addsomething(42,53);
//  let add=addsomething(12,52);
//  console.log(add);
// function addsomething(num1,num2){
//    // console.log("this is befor retun statement");
//    return num1+num2
   //  console.log("this is after retun statement");
// }

// console.log(addsomething(53,12));

// function  userloggedIn(username){
//    // if(username === undefined){ // this is fist way to check conndition
//    if(!username){  // this is second way to check condition
// // console.log("please enter your name");
// return
//    }
//    return `${username} logged IN`
// }
// userloggedIn("Vsk")  // yaha ye value  retrun to hoga but show nahi hoga becouse value ko print nahi karaya gaya

// console.log(userloggedIn())

// ------------- How to pass object in function --------------------------------------

// const userDetails = {
//    userName : "Radha",
//    fee : 188,
//    course : "HTML"
// }

// function handaluser(anyuse){
//    console.log(`userName is ${anyuse.userName} and  Course is ${anyuse.course} and Fee is ${anyuse.fee}`);

// }
// handaluser(userDetails)

// const myArray = [ 32233,33353,114132,22324 ];

// function getResult(getvalue){
//    return getvalue[2]
// }
// console.log(getResult(myArray));

// --------------- scope in js --------------------------------------------------

// let myVar= "global variable ";   // this is global variable

// function first(){
//    const userName="Vasim"; 
   
//    function second(){
//       const website="www.vasim.com";
//       console.log(userName);

// }
// // console.log(website);

// second();
// }
// first();

//  ++++++++++++++++++++++++++++++++ intresting part +++++++++++++++++++++++++++++++++++

// firstp(6);
// function firstp(num){   // es function ko hum pahle execute kara sakte becouse ye function declaration hai
//    return num+1
// }

// console.log(firstp(6));

// second(8) 
// const second= function(num){      // es function ko hum pahle execute nahi kara sakte becouse ye veriable me declare hua hai

//    return num+4
// }

  
// console.log(second(8));

// const third=(num) => num+5;      
// console.log(third(9));
// third(9);

// ====================== use this keyword in js =====================================

// const cofee ={
// usern: "Rahul",
// website :"filipcart",
//  rshan: function(){
//    console.log(`${this.usern}  and website is ${this.website}`);
// }

// }

// cofee.rshan()  // this keyword is work in object 

// console.log(this.usern);//

// const user= function()
// {
//    usern= "rehil",
//    website = "rayzon.com"
//    console.log(this.usern);
//    console.log(this.website)
// }
// user()   

// // console.log(this.usern);  
// const one = () => {
//    usern="chaman",
//    webnar="chenai"
// console.log(this.webnar)
// }
// one()
// console.log(this.usern) // result is undefined becouse this keyword is use in object only

// const addone = (num1 , num2) => {
//    return num1 + num2
// }                          // this is arrow function
// addone(12,53);
// console.log(addone(43,54))

// const addones = (num1 , num2) => num1 +num2;  // this is arrow function
// console.log(addones(400,53));

// const addtwo = (num1 , num2) => (num1+num2) ;
// console.log(addtwo(90,23))

// if we use arrow function with object means "{}" use curllybrases   then retun keyword must be used and
//  if we not use retun keyword then we use ()  prentheses this bracket


// ------- for loop ------
// for(let a = 1 ; a <= 10 ; a++ ){
//    console.log(`Outer Loop : ${a} ` );
//    for(let j=1; j<= 10 ; j++){
//       // console.log(`Inner Loop : ${j}`);
//       // console.log(a + ' * ' + j + ' = ' + (a*j));
//       console.log(`${a} * ${j} = ${a*j}`);
//    }  
// }

// for(let a = 1 ; a <= 10 ; a++ ){
//    console.log(`Outer Loop : ${a} ` );
//    for(let j=1; j<= 10 ; j++){
//       if(j== 5){
//          break;
//       }
//       console.log(`${a} * ${j} = ${a*j}`);
//    }  };

   //  for(let j=1; j<= 10 ; j++){
   //    if(j == 5){
   //        console.log(`Detected hare 5 , exiting loop`);
   //       break;
   //    }
   //    console.log(`Inner Loop : ${j}`);
   // }

   //  for(let j=1; j<= 10 ; j++){
   //    if(j == 5){
   //        console.log(`Detected hare 5 , exiting loop`);
   //       continue;
   //    }
   //    console.log(`Inner Loop : ${j}`);
   // }

   // -------- while loop ----------
   // const myArray=["rahul","radha", "rita","rani"];
   // let arr=0;
   // while(arr< myArray.length){
   //    console.log(myArray[arr]);
   //    arr++;

   // }


   // let as =1;
   // do{
   //    console.log(`value is : ${as}`);
   //    as= as+1;

   // }while(as <=10);

// -------- for of loop ----------
  
// const arr=[1,2,3,4,5,6];
// for(const num of arr){
//    console.log(num);
// }

// const mString= "Hello Vasim Sultan";
// for(const strings of mString){
//    console.log(strings);
// }

// ------------ use of MAP ---------------

// const theMap=new Map()
//    theMap.set("nm ","Name is Vasim Sultan");
//    theMap.set("sal","Salary is 423242");
//    theMap.set("IN "," India ");
//    theMap.set("USA "," United State of America ");
//    theMap.set(" UN"," United Nation ");
//    theMap.set("TAL ","Taliban");
//    theMap.set("Ch ","Chai")

// // console.log(theMap);

// // for of loop use in map

// for(const[key,value] of theMap){
//    console.log(`Key is : ${key}  and Value is : ${value}`);

// }

// const myObject ={
//    js:'JavaScript',
//    rb:'Ruby',
//    cpp:'c++',
// }

// for(const keyword in myObject){
//    console.log(` key is : ${keyword} and value is : ${myObject[keyword]}`);
// }

''
// const myArray =["ram", "shayam","naam", "dam"];

// for( const key in myArray){
//    // console.log(myArray[key]);
//    console.log(` Index Number is : ${[key]} and value is : ${myArray[key]}`)
// }

// const theMap=new Map()
//    theMap.set("nm ","Name is Vasim Sultan");
//    theMap.set("sal","Salary is 423242");
//    theMap.set("IN "," India ");
//    theMap.set("USA "," United State of America ");
//    theMap.set(" UN"," United Nation ");
//    theMap.set("TAL ","Taliban");
//    theMap.set("Ch ","Chai")

//    for(const key in theMap){
//       console.log(theMap)
//    }

//  ----------------- forEach() method in js --------------------

const arr=["java","JavaScript", "c++","ruby","python"];

// arr.forEach(  function (item) {
// console.log(item);  // hare we use callback fucntion -- in callback fucntion we not pass the name of fucntion
// })

// arr.forEach( (item) => {
//    console.log(item)
// })  // hare we use arrow function in callback function


// function me(item){
//    console.log(item);
// }

// arr.forEach(me); // hare we use normal function in callback function and we call only function name

// arr.forEach( (item,index,array) => {
//    console.log(item,index,array);
// })

// const Arr =[ 
//    { languageName : "JavaScript",
//       fileName : "js"
//    },
//    { 
//       languageName : "Java",
//       fileName : "java"
//    },
//    {
//       languageName : "Python",
//       fileName : "py"
//     }
// ]

// Arr.forEach( (item) => {
//    // console.log(item.languageName);
//    console.log(item.fileName);  // Array access in object data
// })

const newArr=[1,2,3,4,5,6,7,8,9,10,11];

// const arrs= newArr.filter( (item) => item > 4 ); // hare no any return keyword required becouse we use single line code

// const arrs = newArr.filter( (item) => {
//          return item > 4
// }  );       // hare return keyword required becouse we use scope ( {}) or multiple line code
   // console.log(arrs);


   // const userbooks=[
   //    {
   //       bookName :"One book A", genre:"Hindi", publish : "1998", edition :"2005"
   //    },
   //    {
   //       bookName :"One book B", genre:"English", publish : "1963", edition :"2009"
   //    },
   //    {
   //       bookName :"One book c", genre:"History", publish : "1988", edition :"2012"
   //    },
   //    {
   //       bookName :"One book D", genre:"Science", publish : "1968", edition :"2015"
   //    },
   //    {
   //       bookName :"One book E", genre:"Hindi", publish : "1998", edition :"2012"
   //    },
   //    {
   //       bookName :"One book F", genre:"English", publish : "1948", edition :"2018"
   //    },
   //    {
   //       bookName :"One book G", genre:"Science", publish : "1968", edition :"2015"
   //    },
   //    {
   //       bookName :"One book H", genre:"Hindi", publish : "1998", edition :"2011"
   //    },
   // ];                       

   // // const newbooks= userbooks.filter( (bks) => bks.genre === "Hindi" && bks.publish >= "1958")
   // // console.log(newbooks);

   //    const newbooks= userbooks.filter( (bks) => { return bks.genre === "Hindi" && bks.publish >= "1958"})
   // // hare we use return keyword becouse we use scope ( {} )

   // console.log(newbooks);

   // const myNum = [1,2,3,4,5,6,7,8,9,10];

   // const myNumber = myNum.map((num) => {return num+ 10});
   // console.log(myNumber);

// --------------- reduce() method in js -------------------

// const num= [1,2,3,4,5,6];

// const newnum= num.reduce( (acc, currentval) => {
//    //  console.log(`accumulator is ${acc} amd Current Value is ${currentval}`);
//    return acc+ currentval;
// },9 );  // hare 9 is initial value of accumulator

// console.log(newnum);

// const wenum =num.reduce( (acc, currentval) => acc+ currentval,9); // hare we use single line code so no any return keyword required

// console.log(wenum);


// const shoppingCart =[
//    {
//       CourseName: "js",
//       price: 2999,
//    },
//    {
//       CourseName: "Data Science",
//       price: 12999,
//    },
//    {
//       CourseName: "python",
//       price: 1999,
//    },
//    {
//       CourseName: "sql",
//       price: 2999,
//    },
//    {
//       CourseName: "java",
//       price: 14999,
//    },
//    {
//       CourseName: "html",
//       price: 299,
//    },
  
// ];

// const shoppingCartTotal= shoppingCart.reduce((acc, item) => acc + item.price,0);

// console.log(shoppingCartTotal); // hare 0 is initial value of accumulator