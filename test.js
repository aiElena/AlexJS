let num = '12345';
let rez = 0;
for (i = 1; i <= 2; i++) {
    rez = (num[i]) + (num[i + 1]) + '<br>';
}
console.log(rez);
document.getElementById("out_num1").innerHTML = rez;


let hour = '16';
let min = '05';
let sec = '59';
document.getElementById("out_num2").innerHTML = (hour + ':' + min + ':' + sec);

let user2 = {
    'Коля': '1000',
    'Вася': '500',
    'Петя': '200'
};
document.getElementById("out_num3").innerHTML = user2['Коля'];
document.getElementById("out_num3").innerHTML = user2['Вася'];


let user1 = {
    userAge: 18,
    userSurname: 'Fririr',
    userName: 'Fen',
    userStatus: true,
    userBets: [20, 100, 400, 10],
    userDog: {
        voice: function () {
            console.log('Wooo');
        },
    },
    create: function () {
        console.log('Dididi');
    }
};

user1.fur = false;

user1.userBets = 234567;
user1.create(56, 56);

let date = new Date();
console.log(date);

Math.max();

console.log(user1.userBets);

function User(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let user = new User("Dav", "Daav", "25");
console.log(user);


function deleteUser() {
    console.log('Run');
}

function updateUser() {
    console.log('Run');
}


