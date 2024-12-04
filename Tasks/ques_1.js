//You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
var book={
    "title":"Inner Engineering",
    "author": "Sadhguru",
    "yearPublished":"2012"
}
//1.Access the author property and print it.
console.log(book["author"]);
//2.Modify the yearPublished property to 2022.
book["yearPublished"]="2022";
//3.Add a new property genre to the book object with the value “Fiction”.
book["genre"]="Fiction";
//4.	Delete the title property from the book object.
delete book["title"];
console.table(book);

