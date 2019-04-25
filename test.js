
let user1 = {
    userAge: 18,
    userSurname: 'Fririr',
    userName: 'Fen',
    userStatus: true,
    userBets: [20, 100, 400, 10],
    userDog:{
        voice: function (){
            console.log('Wooo');
        },
    },
    create: function(){
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

function User(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}
let user = new User("Dav", "Daav", "25");
console.log(user);


function deleteUser(){
    console.log('Run');
}
function updateUser(){
    console.log('Run');
}


