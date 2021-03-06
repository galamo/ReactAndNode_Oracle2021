const cars = [{
    "Name": "chevrolet chevelle malibu",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Acceleration": 12,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "plymouth satellite",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 318,
    "Horsepower": 150,
    "Weight_in_lbs": 3436,
    "Acceleration": 11,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "amc rebel sst",
    "Miles_per_Gallon": 16,
    "Cylinders": 8,
    "Displacement": 304,
    "Horsepower": 150,
    "Weight_in_lbs": 3433,
    "Acceleration": 12,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "ford torino",
    "Miles_per_Gallon": 17,
    "Cylinders": 8,
    "Displacement": 302,
    "Horsepower": 140,
    "Weight_in_lbs": 3449,
    "Acceleration": 10.5,
    "Year": "1970-01-01",
    "Origin": "USA"
}
]

function getCarsFromApi(name) { // callback? =?= ()=>{}
    console.log("loading...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof name !== 'string') {
                return reject("missing name parameter")
            } else {
                resolve(cars)
            }

        }, 3000);
    })
}

console.log("Script start")
getCarsFromApi().then((carsData) => {

    console.log(carsData)
}).catch((ex) => {
    console.log(ex)
})
console.log("Script End")