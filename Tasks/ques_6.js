const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  }
  console.log(user.profile.address["city"]);
  user.preferences["theme"]="light";
  user.profile["phone"]="555-9876";
  delete user.profile.address["zip"];
  console.table(user);
  console.log(user);
  