const nome = prompt ("Qual'è il tuo nome?");
console.log(nome);

const cognome = prompt ("Qual'è il tuo cognome?");
console.log(cognome)

const colore = prompt ("Qual'è il tuo colore preferito?")
console.log(colore);

const password = nome + cognome + colore + "25";
console.log(password);

document.getElementById('password').innerHTML = password;