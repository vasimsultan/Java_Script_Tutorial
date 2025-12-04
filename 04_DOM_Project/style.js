// document.body.style.background="green";
// document.body.childNodes[5].innerText="text add by js";
// let h2=document.getElementsByClassName("header");
// console.dir(h2);

// console.log(h2);

// let para =document.querySelector("h1");
// console.dir(para);

// const hendler=  ()=> {
//     console.log("Mouse is Clicked secoud time");
// }

// let btn=addEventListener("click" , (evt) => {
//     console.log("Mouse is clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

//  btn=addEventListener("click",hendler); 

//  btn=addEventListener("click", () => {
//     console.log("Mouse is Clicked third time");

// });

//  btn=addEventListener("click", () => {
//     console.log("Mouse is Clicked fourth time");

// });



//  btn=removeEventListener("click", hendler);

// Toggle use in form of button
// let modebtn= document.querySelector("#btn");
// let currmode="light";
// let body=document.querySelector("body");


// modebtn.addEventListener("click", () =>{
//     if(currmode==="light")
//     {
//         currmode="dark";
//        body.classList.add("dark");  // wgen want to add dark mode then remove light mode &
//        // & if we want to access light mode so that time we need to do remove dark mode.
//        body.classList.remove("light");
//     }else
//     {
//         currmode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });

// let str1= "vasim";
// let str2="khans";
// let str3="";
// function margeString(){
//     for(let i=0;i<str1.length;i++){
//     if(str1.length){
//         str3=str3+str1[i];
//     }
//     if(str2.length){
//         str3=str3+str2[i];
//     }
// }
// }

// margeString();
// console.log(str3);

// const a ={
//     age:25
// }

// let newObj={...a}
// newObj.age=120;
// console.log(a);

// let number=[1,2,3,4,5,6];

// number.forEach((num)=>{
//     console.log(num*2)
   
// })

// console.log('');

// let mapnum=number.map((num)=>{
   
//     return num*4;
// })
// console.log(mapnum);

// let parent=document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children)
// console.log(parent.children[3].innerHTML)

// for(let i=0;i<parent.children.length;i++){
//     console.log(parent.children[2].innerHTML)
// }
// parent.children[4].style.color='cyan';
// parent.children[2].style.backgroundColor='orange';

// console.log(parent.firstElementChild);
// let dayone= document.querySelector('.day');
// console.log(dayone)
// console.log(dayone.parentElement)
// console.log(dayone.nextElementSibling)
// console.log(dayone.nextElementSibling.nextElementSibling)
// console.log(dayone.nextElementSibling.nextElementSibling.previousElementSibling)

// console.log(parent.childNodes)

// const div=document.createElement('div');
// console.log(div);
// div.className='newdiv';
// div.style.color='cyan'
// div.id=Math.round(Math.random() * 100 + 1 );
// // div.innerText='This div is created by js';
// const addtext=document.createTextNode('This div is created by js');
// div.appendChild(addtext);

// const appendch =document.body.appendChild(div);


// function addlang(langName){
//     const li= document.createElement('li');
//     li.innerHTML=`${langName}`;
//     document.querySelector('.language').appendChild(li);

// }
// addlang('javaScript')
// addlang('Ruby')

// function addnewlang(langName){
//     const nli= document.createElement('li');
//     nli.innerHTML= `${langName}`;
//     document.querySelector('.language').appendChild(nli);

    function addsothing(langs){
       const lis= document.createElement('li');
        lis.innerHTML =`${langs}`
        document.querySelector('.language').appendChild(lis);


    }
    addsothing('json')
    addsothing('sql')

    function addoptilang(lang){
       const lis= document.createElement('li');
        lis.appendChild(document.createTextNode(lang));
        document.querySelector('.language').appendChild(lis);
    }
    addoptilang('nosql');

    // Edit
    const newli = document.querySelector('li:nth-Child(3)')
    const li= document.createElement('li');
    li.textContent='golang';
    newli.replaceWith(li)


// }
// addnewlang('python')

// setTimeout(()=>{
//     console.log("hello timeouter");
// },4000);
// console.log("this is befor timeout content");
// timeout syntex is ==-------------
// setTimeout(()=>{},time in second);


// setTimeout(()=>{
//     console.log("this is show after timeout of the timer")
// },2000);
// console.log("This line is show befor timeout")