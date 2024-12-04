var student={
    name:"suresh",
    age:"24",
    Grade:"A",
    School:"Aditya"
}
console.log(student["School"]);
student["Grade"]="95";
student["Hobbies"]="reading,Sports";
delete student["age"];
console.table(student);