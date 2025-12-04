// const arr=[1,2,3,4];

// console.log(arr);

// const students=[{
//     name:'rahul',
//     occ:'dev',
//     marks:370,
// }]
// console.log(students.fing((value)=>value.marks>=3600));

const students =[
    {name:'abc',marks:20,age:20},
    {name:'abcd',marks:200,age:30},
    {name:'abcver',marks:240,age:40},
    {name:'abcfe',marks:230,age:29},
    {name:'abwedewc',marks:270,age:21},
]

console.log(students.filter(marks=>{return marks==='200'}))

let s=32;
// let i;
 function MulTable()
 {
     for(let i=1;i<10;i++){
         document.write('2 * i = 2*i');
         document.write("<br>");
     }
 }

 MulTable();
//  document.write(hello);

let  i,j;
while(i=7)
    {
        for(j=1;j>=10;j++)
            {
                console.log((j*i)+ "");
                
            }
            console.log();
                i++;
    }

let number=parseInt(prompt("Enter any Number"));

// let number =2;
for(i=1;i<=10;i++)
    {
        document.getElementById('Multiplication Table').innerHTML += '${number} * ${i} = ${number*i}';
       document.getElementById('${number} * ${i} = ${number*i}');
       document.getElementById("<br>");
        console.log('${number} * ${i} = ${number*i}');
        document.write('${number} * ${i} = ${number*i}');
   
// console.log('${number} * ${i} = ${number*i}')
// console.log("<br>");
}
        let x=7;
        let y=4;
        let z;
        z=x ** 5;
        alert(z);

        let age =10;
        if(age>=14){
                alert("you can vote!");

        }else{
                alert("you can not vote!");
        }

        let islogin=1; // if 0 so login and if 1 so logout
        if(islogin == 0){
                document.write("Login");
        }else{
                document.write("Logout");
        }
        
        // use of tarnari opretor ---
        let option= islogin= 0 ? "Logout" : "Login";
        document.write(option);

        // null opreter --

        let user
        document.write(user ?? "gest user");

        let input = 1,y, yes; output = continue;
        let input = 0,x,no ; output = end;

        let input ="y";
        if(input === 1){
                        document.write("Countinue");
        }else if(input === "y"){
                document.write("Countinue");
        }
        else if(input === "yes" ){
                document.write("Countinue");                
        }
        else if(input === 0){
                document.write("End..");                
        }
        else if(input === "x" ){
                document.write("End..");                
        }
        else if(input === "no"){
                document.write("End..");
                
        }
        else{
                document.write("Please Enter correct input");                
        }
         
        // strict comparision use in switch case 

        // use while loop 
      
        // let counter=1;
        // while(counter <=9){
        //         document.write("Smaile-");
                
        //         counter++;
        // }
        // let sum=0;
        // while(counter=90){
        //         if(counter % 2== 0)
        //         {
        //                 sum= sum+counter;
        //         }
        //         document.write(sum);
        //         counter++;

        // }
        



        // use for loop --
        // for(counter =1;counter<=4;counter++)
        // {
        //         document.write("smaile-")
        // }

        // let a=12;


        // let x = new Date(2020,10,23,12,34,23,44);
        // // x.getFullYear();
        //  console.log(x);

// let person= {
//         name :" Rahul Kumar",
//         age :22,

// //  getname: function(){
// //         return this.name.toUpperCase();
// //  }

// // use to getter function  and we use getter like properti  not a  mathed ------------

// //  get getname(){
// //         return this.name.toUpperCase();
// //  }


// set setname(a){
//         this.name = a.toUpperCase();
// }

// };

// person.setname= "amit";

// console.log(person);


// hoe to call object constroctor function in js ----------------------------------------

// let student = {
//         name : "Rajat",
//         lastname : "Kumar",
//         age: 23,
//         class:11
//  }; // this is old method when we use this method so that time lots of line to write any object

//  function Student(fname,lname,age,clas){
//         this.firstname= fname,
//         this.lastname = lname,
//         this.age = age,
//         this.class = clas
       
//  };

//  let student1 = new Student("Rahul","Kumar",12,7);
//  let student2 = new Student("Amit", "Jain",10,5);
//  let student3 = new Student("Sumit", "pal",11,6);
//  let student4 = new Student("Rajat","kumar",9,4);

//  Student.prototype.nationality = "indian"; 

 // if we forget add any properties  in constoructor function so that time we need prototype function  
//  Porototype = we use porototype function for add property in contructor -------------------------------
 
// console.log(student1);


function hello(hi,ok){
        console.log(hi+','+ this.name+ok)
}

const parson = {name:"rahul"};




