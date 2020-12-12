var name_of_the_students_array=[];
function submit(){
var name1=document.getElementById("st1").value;
var name2=document.getElementById("st2").value;
var name3=document.getElementById("st3").value;
var name4=document.getElementById("st4").value;

name_of_the_students_array.push(name1);
name_of_the_students_array.push(name2);
name_of_the_students_array.push(name3);
name_of_the_students_array.push(name4);
console.log(name_of_the_students_array);

document.getElementById("display").innerHTML=name_of_the_students_array;

document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
name_of_the_students_array.sort();
console.log(name_of_the_students_array);
document.getElementById("display").innerHTML=name_of_the_students_array;
}