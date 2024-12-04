const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  }
 console.log(company.employees[1]["name"]);
 company.employees[0].contact["phone"]="555-1111";
 company.employees[0]["Dept"]="Engineering";
 delete company["location"];
 console.log(company); 
  