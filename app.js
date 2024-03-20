
let score =+prompt('Enter your score btween 0 to 100')



if(score>=90 && score<=100){
    alert("You score a Grade A1")
    console.log("You score a Grade A1")

}else if(score>=80 && score<=89){
    alert("You score a Grade A+")
    console.log("You score a Grade A+")
    
}else if(score>=70 && score <=79){

    alert("You score a Grade A")
    console.log("You score a Grade A")
}else if(score>=60 && score <=69){

    alert("You score a Grade B")
    console.log("You score a Grade B")
}else if(score>=50 && score <=59){

    alert("You score a Grade C")
    console.log("You score a Grade C")
}else if(score>=40 && score <=49){

    alert("You score a Grade D")
    console.log("You score a Grade D")
}else if(score>=33 && score <=39){

    alert("You score a Grade E")
    console.log("You score a Grade E")
}else if(score<33){
    alert("You are Failed")
}else{
    alert("Enter a valid Score between 0 to 100")
}