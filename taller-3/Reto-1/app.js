const users = [];

let fullName = prompt("Ingresa tu nombre y apellido: ");
// console.log(fullName.toLowerCase());
// console.log(fullName.split(" ")[0]);
const name = fullName.split(" ")[0];
const lastName = fullName.split(" ")[1];
// console.log(fullName.split(" ")[1]);
// console.log(name.slice(0, 3));
// console.log(lastName.slice(0, 3));

const userName = name.slice(0, 3);
const userLastName = lastName.slice(0, 3);
const fullUserName = userName + userLastName;
console.log(fullUserName.toLowerCase());
const dominio = fullUserName.toLowerCase();
const emailDominio = fullUserName.toLowerCase() + "@myDomain.com";
const bothInfo = dominio + ":" + " " + emailDominio;
console.log(bothInfo);

const usersInfo = {
  username: dominio,
  email: emailDominio,
  usuarios: bothInfo,
};

users.push(usersInfo);
console.log(users);
