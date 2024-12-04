var product={
    id:"123",
    name:"suresh",
    price:"20K",
    category:"unknown"
}
//1.Access the price property and print it.
console.log(product["price"]);
//2.Modify the category property to “Electronics”.
product["category"]="Electronic";
//3.Add a new property inStock to the product object with the value true.
product["InStock"]=true;
//4.	Delete the id property from the product object.
delete product["id"];
console.table(product);

