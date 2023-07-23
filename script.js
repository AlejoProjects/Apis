//PUNTO 1
punto1 = () => {
    let response = fetch('https://pokeapi.co/api/v2/pokemon/1');
    response.then((value) => {
        return value.json();
    }).then((valueJson) => {
        let typer = valueJson.types;
        console.log("PUNTO 1");
        console.log("los tipos de el pokemon " + valueJson.name + " son:")
        for (k in typer) {
            console.log(typer[k].type.name);
        }

    }).catch((err) => {
        console.log("Ocurrió un error en el primer punto :(");
    });
};
//PUNTO 2 
punto2 = () =>{
const bookTitle = 'I, Robot'; // Título del libro que quieres consultar
fetch(`https://openlibrary.org/search.json?title=${bookTitle}`)
    .then(response => response.json())
    .then(data => {
        const book = data.docs[0]; // Obtenemos el primer resultado de la búsqueda
        const author = book.author_name[0]; // Obtenemos el primer autor del libro
        console.log("PUNTO 2");
        console.log("en el segundo punto, el autor de I robot es " + author);
    })
    .catch(error => console.error(error));
};
//PUNTO 3
punto3 = () => {
const Authors = 'Isaac Asimov'; // Título del libro que quieres consultar
fetch(`https://openlibrary.org/search.json?author=${Authors}`)
    .then(response => response.json())
    .then(data => {
        const books = data.docs.filter(doc => doc.type === 'work'); // Filtramos los resultados para obtener solo los libros
        console.log("PUNTO 3");
        console.log("para el autor " + Authors + " su lista de libros son.");
        for (i in books) {
            let p = document.createElement('p');
            let node = document.createTextNode(books[i].title);
            let libroDiv = document.querySelector('#listaLibros');
            p.appendChild(node);
            libroDiv.appendChild(p);
        }

    })
    .catch(error => console.error(error));
};
//PUNTO 4
punto4 = () => {
    setTimeout(() => {
fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
.then(response => response.json()).then(data => {
    const band = data.artists[0].strGenre;
    console.log("PUNTO 4");
    console.log("el genero de la banda coldplay es "+band);
}).catch(error => console.error(error));
    },5000);
}
punto5 = () => {
setTimeout(() => {
fetch('https://swapi.dev/api/people/1')
.then(response => response.json()).then(data => {
    let personajeDivi = document.querySelector('#listaPersonajes');
    let pName = document.createElement('p');
    let nodeName = document.createTextNode("personaje = "+data.name);
    pName.appendChild(nodeName);
    personajeDivi.appendChild(pName);
    const character = data.name;
    const movies = data.films;
    console.log("PUNTO5");
    console.log("Las peliculas y el personaje se encuentran en el html");
    for(i in movies){
        fetch(movies[i])
        .then(responses => responses.json()).then(data => {
            let personajeDiv = document.querySelector('#listaPersonajes');
            let p = document.createElement('p');
            let node = document.createTextNode(data.title);
            p.appendChild(node);
            personajeDiv.appendChild(p);
        }).catch(error => console.error(error));
    }
}).catch(error => console.error(error));
},6000);}

punto7  = () =>{
setTimeout(()=>{
let limit = 152;
console.log("PUNTO 7");
for (let i = 1; i < limit; i++) {
    let response = fetch('https://pokeapi.co/api/v2/pokemon/' + i);
    response.then((value) => {
        return value.json();
    }).then((valueJson) => {
        let abilities = [];
        let tiposs = [];
        let abilt = valueJson.abilities;
        let typer = valueJson.types;
        for (j in abilt) {
            abilities.push(abilt[j].ability.name);
        }
        for (k in typer) {
            tiposs.push(typer[k].type.name);
        }
        let miniContainer = {
            names: valueJson.name,
            habilidades: abilities,
            tipos: tiposs,
            height: valueJson.height,
            weight: valueJson.weight
        };
        let p = document.createElement('p');
        let node = document.createTextNode(i + ") " + miniContainer.names + ", abilities = " + miniContainer.habilidades + ", tipo = " + miniContainer.tipos + ", height = " + miniContainer.height + ", weight = " + miniContainer.weight);
        let pokeDiv = document.querySelector('#pokeDiv');
        p.appendChild(node);
        pokeDiv.appendChild(p);


    }).catch((err) => {
        console.error("Ocurrió un error :(");
    });
}
},6000);
};


punto1();
punto2();
punto3();
punto4();
punto5();
punto7();
