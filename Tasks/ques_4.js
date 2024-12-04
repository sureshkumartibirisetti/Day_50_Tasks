//You are given an object car with the properties make, model, year, and color. Perform the following operations:
var car={
    make:"Iron",
    model:"new",
    year:"2024",
    color:"yellow"
}
//1.Access the make property and print it
console.log(car["make"]);
//2.	Modify the color property to “Black”.
car["color"]="black"
//3.Add a new property engineType to the car object with the value “V6”.
car["EngineType"]="V6";
//4.	Delete the year property from the car object.
delete car["year"];
console.table(car)
