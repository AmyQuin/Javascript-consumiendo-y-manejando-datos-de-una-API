
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"

fetch(url)
.then()
.catch()



//Ejemplo de como funciona una promesa
const solicitud = new Promise ((resolve, reject) => {
    const response = "resolve"

    if(response == "resolve") {
        resolve("La promesa se cumplio")
    }
    else{
        reject("La promesa no se cumplio")
    }
})

console.log(solicitud)