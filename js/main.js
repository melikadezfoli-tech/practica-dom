/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img')
/* Acceder al elemento del DOM para crear los artículos de viajes */
const cajaCardsViajes = document.querySelector('#recomendados .flexContainer')
 /*var fragment = documento.createDocumentFragment();


/* Acceder al elemento del DOM para crear añadir los options */
const opcionesdest = document.querySelector('#destinos .container');

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner uno'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner uno'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner uno'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner uno'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner uno'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner uno'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner uno'
    },
];
const arrayViajes = [
    {
        id:1,
        src:'assets/viajes/viajes-1.jpg',
        alt :'viaje 1'
    },
    {
        id:2,
        src:'assets/viajes/viajes-2.jpg',
        alt :'viaje 2'
    },
    {
        id:3,
        src:'assets/viajes/viajes-3.jpg',
        alt :'viaje 3'
    }
];
const arrayDestinos = [
    {
        id:1,
        src:'assets/viajes/viajes-1.jpg',
        alt :'viaje 1'
    },
    {
        id:2,
        src:'assets/viajes/viajes-2.jpg',
        alt :'viaje 2'
    },
    {
        id:3,
        src:'assets/viajes/viajes-3.jpg',
        alt :'viaje 3'
    }
];


/* EVENTOS */

/* FUNCIONES */
/*const aleatorio = (indice) => {
    const indice = '0' ;
    console.log(Math.floor(Math.random(indice))) ;
    }*/



function aleatorio(){
  console.log (Math.floor(Math.random() * arrayBanners.length));
}

function pintarBanner() 
    {
        const indice = (aleatorio()
        {

            (Math.floor(Math.random() * arrayBanners.length));
        }) => pintarBanner(aleatorio);***********

    const elemento = arrayBanners[0];

    // console.log(elemento.alt)
    // console.log(elemento.src)
    imagenBanner.setAttribute('src', elemento.src);
    imagenBanner.alt = elemento.alt;
    // console.log(imagenBanner)
}

const pintarCards =()=>{
    /* recorrer los elementos del array*/
   
    arrayViajes.forEach(element => {
        const articleCaja = document.createElement("article");
        const divCaja =  document.createElement("div");
        const imgViaje1 =  document.createElement("img");
        imgViaje1.src='assets/viajes/viajes-1.jpg';
        imgViaje1.alt='viaje 1';
        const titulo1 =  document.createElement("h3");
        titulo.textContent=`Viaje 1`;
        const parrafo1 =  document.createElement("p");
        parrafo.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`

        const imgViaje2 =  document.createElement("img");
        imgViaje2.src='assets/viajes/viajes-2.jpg';
        imgViaje2.alt='viaje 2';
        const titulo2 =  document.createElement("h3");
        titulo.textContent=`Viaje 2`;
        const parrafo2 =  document.createElement("p");
        parrafo.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
        
        const imgViaje3 =  document.createElement("img");
        imgViaje3.src='assets/viajes/viajes-2.jpg';
        imgViaje3.alt='viaje 3';
        const titulo3 =  document.createElement("h3");
        titulo.textContent=`Viaje 3`;
        const parrafo3 =  document.createElement("p");
        parrafo.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
        
        divCaja.append(imgViaje1, imgViaje2,imgViaje3);
        articleCaja.append(divCaja,titulo1,titulo2,titulo3,parrafo1,parrafo2,parrafo3)


        fragment.append(articleCaja);        
    });
   
    cajaCardsViajes.append(fragment);

    /* por cada elemento crear:/*
    /* un article   */
    /* un div   */
    /* una imgen asignando sus atributos   */
    /* un h3 asignar su valor   */
    /* un p asignar su valor   */

    /* meter la imagen en el div */
    /* meter el div en el artigle */
    /* meter el h3 y el p en el article */

    /* añadir el artícle al fragmento */
    /* dejo de recorrer el array */

    /* añadir el fragmento al div flexContainer */

}


const pintarDestinos = {

}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
pintarCards()
// pintarCards()
pintarDestinos()
console.log(aleatorio)