// Challenge 1

let weather = {};

console.log(weather);

// Challenge 2

weather.temp = 23;
weather.humidity = 64;
console.timeLog(weather);

// Challenge 3
console.log(weather.humidity);
console.log(weather.temp);

// Challenge 4
weather.windSpeed = 8;

console.log(weather.windSpeed);

// Challenge 5

console.log(weather["humidity"]);
console.log(weather["temp"]);
console.log(weather["windSpeed"]);

// Challenge 6

let template = (dayObject) =>
  `The temperature for ${dayObject.day} will be ${dayObject.temp} degree,
humidity will be ${dayObject.humidity} percent and
windSpeed will be ${dayObject.windSpeed} mph`;

let forecast = [
  {
    day: "tomorrow",
    temp: 22,
    humidity: 54,
    windSpeed: 12
  },
  {
    day: "after tomorrow",
    temp: 25,
    humidity: 58,
    windSpeed: 8
  },
  {
    day: "the day after that",
    temp: 23,
    humidity: 63,
    windSpeed: 13
  }
];

for (let i = 0; i < forecast.length; i++) console.log(template(forecast[i]));
