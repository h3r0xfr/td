const fs = require('fs');
const allUsers = require('./users');

let usersSelectable = allUsers.users
  .filter(userName => !allUsers.afk.includes(userName))
  .filter(username => !allUsers.dead.includes(username));


if (usersSelectable.length === 0) {
  usersSelectable = allUsers.dead;
  allUsers.dead = [];
}

const randomIndex = Math.floor(Math.random() * usersSelectable.length);

const selectedUser = usersSelectable[randomIndex];

allUsers.dead.push(selectedUser);

fs.writeFileSync('./users.json', JSON.stringify(allUsers, null, 2));

console.log(`🎉 ${selectedUser} a gagné !`);
