// 1 задание

town = {
    town: 'Moscow',
    country: 'Russia',
    population: 3000000000,
    stadion: true,
};

console.log(town);

// 2 задание

let height = 40;
let width = 70;

ans = height * width;

console.log(ans);

// 3 задание 

const time = 2,
      speedOfFirst = 95,
      speedOfSecond = 114;

distance = (speedOfFirst + speedOfSecond) * 2;

console.log(distance);

// 4 задание 

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if(randomNumber < 20) {
    console.log("randomNumber меньше 20");
}else if(randomNumber > 50) {
    console.log("randomNumber больше 50");
}else {
    console.log("randomNumber больше 20, и меньше 50")
};

// 5 задание 

switch(randomNumber) {
    case randomNumber < 20:
        console.log("randomNumber меньше 20");
        break;
    case randomNumber > 50:
        console.log("randomNumber больше 50");
        break;
    default :
        console.log("randomNumber больше 20, и меньше 50");
}
