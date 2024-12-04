//You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
var employee={
    "name":"suresh",
    "age":"21",
    "Position":"Job Seeker",
    "salary":"20K"
}
//1.	Access the position property and print it.
console.log(employee["Position"]);
//2.	Modify the salary property to 50000.
employee["salary"]="50K";
//3.	Add a new property department to the employee object with the value “HR”.
employee["dept"]="HR";
//4.	Delete the age property from the employee object.
delete employee["age"];
console.table(employee);