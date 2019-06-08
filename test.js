let num = '12345';
let rez = 0;
for (i = 0; i <= 2; i++) {
    rez = (num[i]) + (num[i + 1]) + '<br>';
}

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

let user3 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
document.getElementById("out_num4").innerHTML = user3.php[0] + user3.php[1] + user3.php[2];


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

function arrsum() {
    let arr = ['a', 'b', 'c', 'd'];
    rez1 = ('a' + 'b' + '<br>');
    rez2 = ('c' + 'd');
    rez = rez1 + rez2;
}

arrsum();
document.getElementById("out_num5").innerHTML = rez;

function arrMultiply() {
    let i = 3;
    let arr = [1, 2, 3, 4, 5];
    rez1 = '1 * 3 = ' + arr[0] * i + '<br>';
    rez2 = '2 * 3 = ' + arr[1] * i + '<br>';
    rez3 = '3 * 3 = ' + arr[2] * i + '<br>';
    rez4 = '4 * 3 = ' + arr[3] * i + '<br>';
    rez5 = '5 * 3 = ' + arr[4] * i + '<br>';
    rez = rez1 + rez2 + rez3 + rez4 + rez5;
}

arrMultiply();
document.getElementById("out_num6").innerHTML = rez;

let obj = {a: 1, b: 2, c: 3};
console.log(obj);
/*alert(obj.c);*/

let dayWeek = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
}
let day = 3;
document.getElementById("out_num7").innerHTML = 'сегoдня - ' + dayWeek[day];


let arrNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
document.getElementById("out_num8").innerHTML = arrNum[1][0];


function pow(x, n) {
    let result = 1;
    if (n < 10) {
        for (let i = 0; i < n; i++) {
            result *= x;
        }
    }
    return result;
}

document.write(pow(2, 2));
document.write('<br>');

var landscape = function () {
    var result = "";
    var flat = function (size) {
        result += "<br>";
        for (var count = 0; count < size; count++)
            result += '*';
    };
    /*var mountain = function(size) {
        result += "<br>";
        for (var count = 0; count < size; count++)
            result += "*";
        result += "\\";
    };*/

    flat(1);
    /* mountain(2);

     mountain(1);*/
    flat(2);
    /* mountain(1);*/
    flat(3);
    flat(4);
    return result;
};

console.log(landscape());

document.write(landscape());

let count = 5;

function init() {
    let count = 20;
    if (count < 100) {
        let count = 30;
        console.log('inside' + count);
    }
    console.log('inside' + count);
}

init();
console.log('outside function' + count);
document.write('<br>');
for (let i = 0; i < 10; i++) {
    document.write(i);
}
document.write('<br>');

function sayHello(name) {
    let prefix = 'Wellcome Nr. ';
    name = 'Bart!';
    return prefix + name;
    /*document.write(prefix + name);*/
}

/*sayHello('John');
document.write('<br>');
sayHello('Ji');*/
document.write(sayHello());
document.write('<br>');

let param = 'Boy!';
let myObj = {
    name: 'Smith',
    param: 'Bin',
    dev: function sayHi(name) {
        let prefix = 'Hi Mr. ';
        return prefix + name.param;
    },
};
document.write(myObj.param);
document.write('<br>');
document.write(myObj.name);
document.write('<br>');
document.write(myObj.dev(name));
document.write('<br>');
document.write(myObj.name);
document.write('<br>');
document.write(myObj.dev(param));
document.write('<br>');


function play(ind) {
    let prefix = 'Oy';
    ind = '-888!';
    return prefix + ind;
}

let result = play();
document.write(play());
document.write('<br>');
document.write(result);

let okHandler = function () {
    return 'Data Saved';
};
let canselHandler = function () {
    return 'Rollback';
};

let popupHandler = function (ok, cansel) {
    let status = true;
    let res = "";
    if (status) {
        res = ok();
    } else {
        res = cansel();
    }
    return res;
};
let out = popupHandler(okHandler, canselHandler);
console.log(out);

document.write('<br>');
document.write(test());
console.log("*********");
document.write('<br>');
run(test);
function run(param){
    console.log(param);
    param();
}
function test(){
    console.log("test data");
}
document.write(run(test));

let userMy = {
    firstName : 'John',
    age : '25',
    info : {
        birthDay : '12/12/1985',
        language : 'English'
    }
};
for(let key in userMy){
    console.log('Key: ' + key + ' ' + 'Value: ' + userMy[key]);
}