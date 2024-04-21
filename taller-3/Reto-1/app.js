
while (true) {

  const users = [];

  const fullName = prompt("Ingresa tu nombre y apellido: ").trim();
  const name = fullName.split(" ")[0];
  const lastName = fullName.split(" ")[1];

  const userName = name.slice(0, 3);
  const userLastName = lastName.slice(0, 3);
  const fullUserName = userName + userLastName;
  const dominio = fullUserName.toLowerCase();
  const emailDominio = fullUserName.toLowerCase() + "@myDomain.com";
  const bothInfo = `${dominio}: ${emailDominio}`;

  const usersInfo = {
    username: dominio,
    email: emailDominio,
    usuarios: bothInfo,
  };

  users.push(usersInfo);


  let usernameIndex = -1;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === dominio) {
      usernameIndex = i;
      break;
    }
  }

  if (usernameIndex !== -1) {
    let index = 1;
    let newDominio = "";
    let newEmailDominio = "";
    let newBothInfo = "";

    while (true) {
      newDominio = fullUserName.toLowerCase() + index;
      newEmailDominio = newDominio + "@myDomain.com";
      newBothInfo = newDominio + ": " + newEmailDominio;

      let exists = false;
      for (let j = 0; j < users.length; j++) {
        if (users[j].username === newDominio) {
          exists = true;
          break;
        }
      }

      if (!exists) {
        let newUser = {
          username: newDominio,
          email: newEmailDominio,
          usuarios: newBothInfo,
        };
        users.push(newUser);
        console.log(newUser)
        break;
      }
      index++;
    }
  }
}