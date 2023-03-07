let firstName = prompt('What is your name?', 'kiichiro').trim();
firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

let lastName = prompt('What is your surname?', 'toyoda').trim();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

let userEmail = prompt('Enter your email please.', '').replaceAll().toLowerCase();

userEmail = (!userEmail.includes('@')) ? `not valid email <b>${userEmail}</b> (symbol @ not exist)`:
  (userEmail.startsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in first place)`:
  (userEmail.endsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in last place)`:
  `<b>${userEmail}</b>`;


// if (!userEmail.includes('@')) {
//   userEmail = (`not valid email <b>${userEmail}</b> (symbol @ not exist)`);
// } else if (userEmail.startsWith('@')) {
//   userEmail = (`not valid email <b>${userEmail}</b> (symbol @ find in first place)`);
// } else if (userEmail.endsWith('@')) {
//   userEmail = (`not valid email <b>${userEmail}</b> (symbol @ find in last place)`);
// } else {
//   userEmail = (`<b>${userEmail}</b>`);
// }


yearOfBirth = +prompt('Enter your year of birth', "").replaceAll();
today = new Date();
thisYear = today.getFullYear();
age = thisYear - yearOfBirth;

document.write(`<ul>
            <li>Full name: <b>${firstName} ${lastName}</b></li>
            <li>Email: ${userEmail}</li>
            <li>Age: <b>${age}</b></li>
            </ul>`
);