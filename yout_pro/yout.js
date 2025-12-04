// Array 
// let items= [200,400,533,423,567];
// let i=0;
// // for(i=0;i< items.length;i++)
// for(let val of items)
// {
//     let offer = val / 10;
//     items[i]= items[i] - offer;
//     console.log(`value after offer = ${items[i]}  `);
//     i++;
// }

// let val= items ;
// for(i=0;i< items.length;i++){
//     let offer = val/10;
//     items[i] = items[i]- offer;
//     console.log(`value after offer = ${items[i]}`);
// }

// let fname = prompt("Enter your full name");
// let username = "@"+ fname + fname.length;
// console.log(username);

//   here use concat() mathed .....


// let item = ["alim","khan","Vajid","malik","javed"];
// let items= ["samad","Aahad","Raheem","Kareem"];
// let defitem = ["king","hashim"];

// console.log(item);
// console.log(items);

// mainitem = item.concat(items,defitem);
// console.log(mainitem);


// when we want to add any item in start of array so there we use 'unshift()' mathed ... & if we use single 'shift()' so it's delete frist index value

let item = ["rahul","amit","karan","Charan","kavit","bhagat"];

// item.unshift("sumit","suman");
item.shift();

console.log(item);

// use of " slice() " mathed -=-- return a piece of array . it's use to take slice of items(means any pice  of items) and sone time we use slice to copy a array.

slic= item.slice(1,4);
console.log(slic);



// use of " splice" mathed ===== it's change in originale array(add, remove, replace) etc. 
//  syntex(start index, delete index value, add new value in start index)


let num =[1,2,3,4,5,6,7,8,9,10,];

//  num.splice(3,2,24,56);

 // if we want to delete any index value --

 num.splice(4,1)

 console.log(num);

 