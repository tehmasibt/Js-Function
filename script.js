// todo Function




// task-1

// let num = 21;
// if (num%3==0&&num%7==0) {
//     console.log("bolunur");
// }else{
//     console.log("bolunmur");
// }

// task-2

// let a,b;
// a=1;
// b=10;
// let count=0;
// if (b>a) {
//     for (let i = a; i < b; i++) {
//         if (i%2==1) {
//             count++;
//         }
//     }  
//     console.log(count); 
// }


// task-3

// let a,b;
// a=1;
// b=10;
// let count=0;
// if (b>a) {
//     for (let i = a; i < b; i++) {
//         if (i%2==1) {
//             count+=i;
//         }
//     }  
//     console.log(count); 
// }


// task-4

// let num = 10;
// let count=0;
// for (let i = 0; i <= num; i++) {
//     if (num%i==0) {
//         count++;
//     }
// }
// if (count<3) {
//     console.log("Sadedir");
// }
// else if(count>3){
//     console.log("Murekkebdir");
// }


// task-5

// let arr=[2, 4, 7, 9, 5, 8, 10];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//         sum+=arr[i];
//     }
// }
// console.log(sum);




// task-6

// let array=[10,17,23,37,18,20];
// let kvadrat=1;
// let kvsum=0;
// function SumCut(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2==0) {
//             kvadrat=arr[i]*arr[i];
//             kvsum+=kvadrat;
//         }
//     }
//     return kvsum;
// }
// console.log(SumCut(array));


// task-7

// function NumberSum(x, y) {
//     let sum=0;
//     if (typeof x === 'number' && typeof y === 'number') {
//         for (let i = x; i < y; i++) {
//             sum+=i;
//         }
//         return sum;
//     } else {
//         return "Biri ve ya her ikisi reqem deyil"; 
//     }
// }

// console.log(NumberSum(1,4));

// task-8

// document.addEventListener('DOMContentLoaded', function() {
//     const box = document.getElementById('box');
//     const increaseButton = document.getElementById('increaseButton');
//     increaseButton.addEventListener('click', function() {
//         let currentWidth = parseInt(box.style.width);
//         box.style.width = (currentWidth + 50) + 'px';
//         let currentHeight = parseInt(box.style.height);
//         box.style.height = (currentHeight + 20) + 'px';
//     });
// });