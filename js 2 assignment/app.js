

var city = prompt("where do you live??");
var correctans = "karachi";
var score = 0;
document.write("<h1> Question 1 </h1>");

if(city === correctans){
    document.write("welcome to the city of lights")
}
else{
    document.write("karachi ajao")
};

var gender = prompt("Are you male or female");
var man = "male";
var women = "female";
document.write("<h1> Question 2 </h1>");

if(gender === man){
    document.write("Good Morning Sir")
}
if(gender === women){
    document.write("Good Morning Ma'am")
};

var traffic = prompt("Give any traffic signal color");
var correctanswer = "Red";
var correctansw = "Yellow";
var correctanswe = "Green";

document.write("<h1> Question 3 </h1>");

if(traffic === correctanswer){
    document.write("Must Stop")
}

if(traffic === correctanswe){
    document.write("Move now")
}

if(traffic === correctansw){
    document.write("Ready to move")
};

var fuel = prompt("how many fuel is left in your car??");
var answer = "o.25 liters";

document.write("<h1> Question 4 </h1>");
if(fuel === answer){
    document.write("ok!")
}
else{
    document.write("Please refil the fuel in your car")
};

var a = 4;
document.write("<h1> Question 5 </h1>");
if (++a === 5){
alert("given condition for variable a is true");
};

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write("this condition is false" + "</br>");

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
document.write("this condition 1  is false" + "</br>");
if (c === 13){
    alert("condition 2 is true");
};

if (++c < 14){
    alert("condition 3 is true");
    }
    document.write("this condition is false" + "</br>");
    if(c === 14){
        alert("condition 4 is true");
        };

        var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost + "</br>"){
alert("The cost equals");
}
if (true + "</br>"){
    alert("True");
}
if (false + "</br>"){
    alert("False");
    }

    if("car" < "cat" + "</br>"){
        alert("car is smaller than cat");
    };
    document.write("<h1> Question 6 </h1>");
    document.write("<h1> Marksheet </h1>");
    document.write("<h4> TotalMark:300 </h4>");
    var eng = prompt("Enter your english marks");
    var maths = prompt("Enter your maths number");
    var urdu = prompt("Enter your urdu marks");
    var obtainedMarks = parseInt(eng) + parseInt(maths) + parseInt(urdu);
    var percentage = obtainedMarks * 100 / 300;
   
    document.write("ObtainedMarks :" +  obtainedMarks + "</br>");
    document.write("Percentage:" + percentage + "</br>");

    if(percentage >= 80){
        document.write("Grade : A-1" + "</br>")
    }
    else if (percentage >= 70){
        document.write("Grade : A" + "</br>" )
    }
    else if (percentage >= 60){
        document.write("Grade : B" + "</br>")
    }
    else if (percentage >= 50){
        document.write("Grade : C" + "</br>")
    }
    else if (percentage >= 40){
        document.write("Grade : D" + "</br>")
    }
    else{
        document.write("You are Fail !" + "</br>")
    };
    if(percentage >= 80){
        document.write("Remarks : Excellent" + "</br>")
    }
    else if (percentage >= 70){
        document.write("Remarks : Good")
    }
    else if (percentage >= 60){
        document.write("Remarks : Average")
    }
    else if (percentage >= 50){
        document.write("Remarks : Fair")
    }
    else if (percentage >= 40){
        document.write("Remarks : Need improvement")
    }
    else{
        document.write("Not Promoted" + "</br>")
    };
    document.write("<h1> Question 7 </h1>");

    var num = +prompt("Guess the secret Number:");
    var secnum = 8;

    if(num===secnum){
        document.write("You win!")
    }
    else if(num===9){
        document.write("ziada agy nhi barho!")
    }
    else if(num===7){
        document.write("Agy barho!")
    }
    else{
        document.write("Jao agy barho")
    };
    document.write("<h1> Question 8 </h1>");
    
     var num = +prompt("Enter a number : ")
        if (num%3==0){
        document.write("Number is divisible by 3")
        }
    else{
        document.write("Number is not divisible by 3")
    };
    document.write("<h1> Question 9 </h1>");
    var num = +prompt("Enter a number to test whether it is odd or even:")
    if (num % 2 == 0){
        document.write("The number is even")
    }
    else{
        document.write("The number is odd")
    };
    document.write("<h1> Question 10 </h1>");
    var num = prompt("What is the temperature today?")
    if(num<=40){
        document.write("It is too hot outside")
    }
     if(num<=30){
        document.write("The weather is normal today")
    }
     if(num<=20){
        document.write("The weather is cool today")
    }
    if(num<=10){
        document.write("The weather is so cool today")
    };
    document.write("<h1> Question 11 </h1>");
    
var operator = prompt('Enter operator ( either +, -, * ,% or / ): ');
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
if (operator == "+"){
    document.write(num1 + num2)
}
else if(operator == "-"){
    document.write(num1 - num2)
}
else if(operator == "*"){
    document.write(num1 * num2)
}
else if(operator == "/"){
    document.write(num1 / num2)
};
