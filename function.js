//structure:

//function sum () {
//    console.log(sum);
//}
//sum();

//function sum (x,y) {
//    const result = x+y;
//    return result;
//} 
//const total = sum (5,3);
//console.log(total);

//function square(number) {
//    const borgo = number * number;
//
//    return borgo;
//}
//
//console.log(square(5));

//function add (num1,num2) {
//    const sum = (num1+num2);
//    console.log(sum);
//}
//
//add (5,71);

//function diff (num1,num2) {
//    const dif = num1-num2;
//    console.log(dif);
//}
//
//const fatherAge = 40;
//const myAge = 10;
//diff(fatherAge,myAge);

//function tenTimes (number){
//    const result = number*10;
//    return result;
//}
//const output = tenTimes(5);
//console.log(output);

//short function:

//function add (price1,price2){
//    const total = (price1+price2);
//    return total;
//
//}
//const bill = add (5,80);
//console.log(bill);

//function add (price1, price2) {
//    return (price1+price2);
//}
//const bill = add (75,6);
//console.log (bill);

//function doMath (num1,num2) {
//    const sum = (num1 + num2);
//    const diff = (num1-num2);
//    const multiply = sum*diff;
//    const result = multiply/2;
//    return result;
//}
//const result = doMath(10,5);
//console.log(result);

//conditional return function:
//function isEven(number){
//    if(number%2 === 0){
//        return true;
//    }
//    else{
//        return false;
//    }
//}
//
//console.log(isEven(5));
//console.log(isEven(10));

//this in short:

//function isEven(number){
//    if(number%2 === 0){
//        return true;
//    }
//    
//        return false;
//    
//}
//
//console.log(isEven(5));
//console.log(isEven(10));


//string-in function:

//function evenSizeString (str) {
//    const size = str.length;
//    console.log(size);
//}
//evenSizeString('Dhaka');
//evenSizeString('fake');

//function evenSizeString (str) {
//    const size = str.length;
//    if (size%2 ===0) {
//        console.log ('even-size');
//        return true;
//    }
//
//    else {
//        console.log ('odd-size');
//        return false;
//    }
//}
//
//evenSizeString('Dhaka');
//evenSizeString('fake');


 //bolean parameter:
 
 //function doubleOnTriple (number,doDouble) {
 //   if (doDouble === true) {
 //       const result = number*2;
 //       return result;
 //   }
 //   else {
 //       const result = number*3;
 //       return result;
 //   }
 //}
//
 //console.log(doubleOnTriple(5,true));
 //console.log(doubleOnTriple(5,false));

 //array paremeter :

 //function numberOfElements (number) {
 //   const ten = number.length;
 //   return ten;
 //}
 //const num = numberOfElements([34,745,36,865,357,74,56,3]);
 //console.log(num);

 //function sumOfNumbers (numbers) {
 //   let sum = 0;
 //   for (const number of numbers) {
 //       console.log (numbers);
 //       sum = sum + number;
 //   }
 //   return sum;
//
 //}
 //const numbers = [54,62,12,6];
 //const sum = sumOfNumbers(numbers);
 //console.log(sum);