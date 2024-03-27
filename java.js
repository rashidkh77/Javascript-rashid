// alert("Hello Mr.Rashid Khan");
// alert("! Please Enter Valid Passrowd");
// alert("WellCome to Js Land\n Happy coding.");

// alert("WellCome to Js Land");
// alert("Happy coding.");
// alert("Hello ...I Can run Jscript through my web console.")
// console.log(alert);
// var userName = ("Rkhan");
// alert(userName);
// console.log(userName);
// var myName= ("Rashid Khan");
// alert ("Hello Mr. "+ myName);

// var message =("Hello World");
// alert(message);
// var studentName ="Bilal Khan";
// var studentAge = "16 years Old";
// var studentCourse = "Web Development & Mobile App";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);
// var pizza ="Pizza \n Pizz \n Piz \n Pi \n P";
// alert(pizza);
// var email ="rashid@gmail.com";
// alert("My email is"+" "+email);
// var book = "I am trying to learn from the Book A Smarter \nway to learn Javasript"
// alert(book);
// var message = "! Yes i can write script "
// alert(script);
// write.script("Yes I can Write");
// var age = 45;
// alert("I am "+ age + " "+ "Years Old")
// var visit = 1;
// var totalVisit = visit + 1;
// alert( "You Have visited this site " + totalVisit+ " "+ "times")
// var birthYear= 1978;
// alert("My Birth Year "+birthYear);
// alert("And Data Type of my decleare variable is " + typeof birthYear)

// Pending to be correct///
//  var vistorName="";
//  var item="";
//  var qty= 1;
// function orderProcess(visitorName,Item,qty){;
// var visitorName;=(prompt("Enter your name "+visitorName));
// var item=;(prompt("Item name" +item));
// var qty=;(prompt("Order Qty "+qty))} 
// console.log(orderProcess());
// var userName="Ahmed";var age=10 ;var address="Karachi Pakistan";
// alert("Name "+ " "+ userName + age +"Years "+ "Address " +address);
// Chapter 8 //
// var message = "Thanks";
// var userName ="Rashid";
// var banger= "!";
// var customessage=( message + userName + banger);
// alert(customessage);
// alert("2"+ "2");
// alert("2 Plus 2 Equal" + 2 + 2);
// var name= prompt("Your Name?",  "Rashid");
// var question =("Your Name");
// var defaultAns= ("Rashid");
// var userName= prompt(question,defaultAns)
// var numberOfCats= prompt("How many Cats?");
// var toManyCats= (numberOfCats + 1);
// alert(toManyCats);
    //Chapter -10//  
//  var question1= prompt("Where Muhammad Ali Jinnah was born ?");
// if(question1==="Karachi"){
// alert("Correct")};
// var score=10;
// var userIq;
// var correctAnswer="Karachi";
// if (question1===correctAnswer){
//     score++;
//     userIq="Genius"
// alert("Correct!");
// }
    
// var fristName="Rashid";
// var lastname="Khan";
// if (fullName=== fristName==="Rashid")
// Chpater -12
// var question1= prompt("Where Muhammad Ali Jinnah was born ?");
// if(question1==="Karachi"){
// alert("Correct Answer")}
// else{
//     alert("Wrong")
// }
// if (question1!=="Karachi"){
    // alert("Wrong Answer");
// }
// chapter -13// Testing  set of Set conditions 
// Testing set of conditions
// var weight = prompt("Enter Your Weight?");
// var run = prompt("Enter Your Mileage?");
// if (weight < 400 && run < 20){
//     alert("Wonderfull you can join us.")
// }
// else{
//     alert("Sorry Dear")

// }
// var age = prompt("Enter Your Age?");
// var education = prompt("Enter Your Education?");
// var experience = prompt("Enter Your Years of Experience?")
// if (age > 20 && education === "Masters" && experience > 10){
//     alert("Congratulations! you have been Selected.")
// }
// else{
//     alert("Sorry Dear Try Next Year");

// }
// Chaper 15 & 16 Array
// var cities =["Karachi","Lahore", "Islamabad", "Peshawar","Hyderabad","Faisalabad"]
// alert ("Wellcome to " + cities [0]);
// alert ("Wellcome to " + cities[4]);

// var cities =["Karachi","Lahore", "Islamabad", "Peshawar","Hyderabad","Faisalabad"]
// var cities = [];
// cities [0] = "Lahore"; 
// cities [1] = "Karachi";
// cities [2] = "Islamabad";
// cities [3] = "Peshawar"
// alert ("Wellcome to " +cities[1]+ " "+"The City of Lights.");
// alert ("Wellcome to "+ cities[0]+ " "+ "City of Foodies");
// cities.pop();
// alert(cities);
// cities.push("Peshwar");
// alert(cities);

// var fruits = ["Apple","Banana","Mango","Watermalen"];
// alert(fruits);
// fruits.pop(); This will remove last element of Array
// alert(fruits);
// fruits.push("Watermalen"); this will add last item in the array
// shift will remove frist element of the Array
// unshift will add in begninng element in the Array

// var fruits = ["Apple","Banana","Mango","Watermalen"];
// alert(fruits);
// fruits.shift();
// alert(fruits);
// fruits.unshift("Apple","Cherry");
// alert(fruits);
// var fruits = ["Apple","Banana","Mango","Watermalen","Graps","Rusberry","Blueberry"];
// alert(fruits);
// fruits.splice(2,2,"Chiko","Mango");
// alert(fruits);
// fruits.splice(0,3, "Pineapple","Strawberry")
// alert(fruits);
// splice will add and remove element in the Array (frist digit is the index number of array and 2nd digit will remove items from the array)
// on above code splice (0 will add item from zero to 1 and 3 will remove 3 items from array)
// fruits.splice(4,0, "Pineapple","Strawberry")
// alert(fruits);
// Below code will remove 2 items from zero index.
// fruits.splice(0,2);
// alert(fruits);

var fruits = ["Apple","Banana","Mango","Watermalen","Graps","Rusberry","Blueberry"];
alert(fruits);
myFruits =fruits.slice(0,3);
// slice will copy items  into another array like myFruits= "apple,Banana,Mango"
// alert(fruits);
alert(myFruits);
alert(fruits);
const website = "Youtube"