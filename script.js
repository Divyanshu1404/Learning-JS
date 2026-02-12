// var a=5;
// var a=6;

// let c=7;


// const dulha="LAb";
// const dulhan="laby";


// Resignment
// var a=32;
// a=65;

// let b=23;
//  b=70
//  console.log(a+b);

// Temporal DEAD zone   
// console.log(a);
// let 0;

// Hoisting

// var a=undefined;
// a=12;

//  console.log(a);
//  let a=5;


// let a=50;
// {
//     let a=67;
//     console.log("inside: ",a);
// }
// console.log("outside: ",a);


// let a="5"+4;
// console.log(a);


// let b="5"-4;
// console.log(b);


// 5=="5";
// 5==="5";


// bingInt
//   let a =9007199254740991n;
//   a+3n; 


// let a=[1,2,3,4,5];
// let b=a;
// b.pop();


// let a={
//     name:"aman",
// }
// let b=a;4

// b.name="jai";

//Ternary operator

// 12<13 ? console.log("true") : console.log("false");


// let x=10;
// let y=20;

// if(x>5&&y<25){
//     console.log("A")
// }
// else{
//     console.log("B");       
// }

//  let a=4;
//  if(a>5){
//     console.log("a");
//  }else{
//     console.log("not valid");
//  }

// if(loggedIn && admin){
//     console.log("welcome Admmin");
// }
// else if(loggedin){
//     console.log("welcome user");
// }
// else{
//     console.log("please login");
// }



//switch case



// switch (1){
//     case 1:
//         console.log("Jai Shree RAM");
//         break;
//     case 2:
//         break;
//     case 3:
//         console.log("hello jai shree Sayam");
//         break;
//     default:
//         console.log("default case");
// }



/// Early return case
// function getval(val){
//     if(val < 25) return "D";
//     else if(val < 50) return "C";
//     else if(val < 75) return "B";
//     else return "A";
// } 

// console.log(getval(67));

//  function grade(score){
//     if(score>=90 && score<=100){
//         return "A";
//         }
//     else if(score>=80 && score<=89){
//         return "B";  }
//     else if(score>=70 && score<=79){
//         return "C"; }
//     else if(score>=60 && score<=69){
//         return "D"; }
//     else if(score>=33 && score<=59){
//         return "E"; }
//     else if(score<0 || score>=32){
//         return "F"; }
//      else{
//         return "Invalid score";
//     }
//  }

// console.log(grade(85));

// console.log(getval(67));


/// Same with early return case

//  function grade(score){
//     if(score>=90 && score<=100) return "A";
//     if(score>=80 && score<=89) return "B";  
//     if(score>=70 && score<=79)   return "C"; 
//     if(score>=60 && score<=69) return "D"; 
//     if(score>=33 && score<=59)  return "E"; 
//     if(score<0 || score>=32)return "F";     
//     else return "Invalid Marks";
//  }
// console.log(grade(95));


// function RPS(user, sys){
//     if(user ==="rock" && sys === "scissor") return "rock";
//     if(user ==="scissor" && sys === "rock") return "rock";
//     if(user ==="paper" && sys === "rock") return "paper";
//   }


// console.log(RPS("rock","paper"));

// for Loop

// for (let i=1;i<=100;i++){
//     console.log(i);
// }

//while loop

// let i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// do while loop

// let i=1;

// do{
//     console.log(i);
//     i++
//     if(i===50){
//         break;
//     }
// }
// while(i<=100);



// for (let i=10;i>=1;i--){
//     console.log(i);
// // }
// sum=0;
// for (let i=1;i<=20;i++){
//     sum+=i
// }
// console.log("sum: ",sum);


// for (let i=1;i<=10;i++){
//     console.log("5 * "+i+" = "+(5*i));
// }


// let val= prompt("enter the value: ");
// for (let i=1;i<=val;i++){
//     if(i%2===0){
//         console.log(i+" is even");
//     }
//     else{
//         console.log(i+" is odd");
//     }
// }


// for (let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
// }
// }


// for (let i=1;i<=100;i++){
// if(i%3===0){
//     continue;
// }
// console.log(i);
// }
// let count=0;
// for (let i=1;i<=100;i++){
//     if(i%2 ===1){   
//         count++;
//         console.log(i);
//     }
//     if(count ===5)
//         break;  
// }


let num=987654;
let count =0;
while (num > 0){
    num=Math.floor(num/10);
    count++;
}
console.log(count);