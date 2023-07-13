const users = [
  {
    name: "John",
    email: "johnson@mail.com",
    age: 25,
    address: "USA",
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    age: 35,
    address: "England",
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 28,
    address: "England",
  },
];

const filterUsers = (filter) => {
  return users.filter((user) => {
    let found = false;
    Object.values(user).forEach((value) => {
      if (!found) {
        value.toString().toLowerCase().includes(filter.toLowerCase())
          ? (found = true)
          : (found = false);
      }
    });

    return found;
  });
};

const results = document.getElementById("results");

const searchInput = document.getElementById("search");
let searchTerm = "";

const showUsers = () => {
  results.innerHTML = "";

  let usersList = filterUsers(searchTerm);

  const ul = document.createElement("ul");

  usersList.forEach((user) => {
    const li = document.createElement("li");

    const name = document.createElement("h3");
    name.innerText = user.name;
    const email = document.createElement("p");
    email.innerText = user.email;
    const age = document.createElement("p");
    age.innerText = user.age;
    const address = document.createElement("p");
    address.innerText = user.address;

    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(age);
    li.appendChild(address);

    ul.appendChild(li);
  });

  results.appendChild(ul);
};

showUsers();

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;

  showUsers();
});
