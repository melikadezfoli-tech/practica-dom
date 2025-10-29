/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img') //con querySelector aplica al primer elemento //
/* Acceder al elemento del DOM para crear los artículos de viajes */
const cajaCardsViajes = document.querySelector('#recomendados .flexContainer')//importante ser específicos y no ser generalista, si pusieramos sólo .flexContainer y metieran una foto ya no aplicaría//
 /*var fragment = documento.createDocumentFragment();


/* Acceder al elemento del DOM para crear añadir los options */
const opcionesDest = document.querySelector('#destinos select');
console.log(opcionesDest,'opcionesDest');
const urlBase = "assets";//todo lo que se reutilice hay qiue meter en variables, se crea la variable con la raíz de la capreta porque puede cambiar//
const fragment = document.createDocumentFragment();

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
        src:`${urlBase}/viajes/viajes-1.jpg`,
        alt :'viaje 1',
        titulo:'' ,
        descripcion: '',//añadir más propiedades//
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
        ciudad:'Burgos',
        value: 'v18'
    },
    {
        id:2,
        ciudad:'Pamplona',
        value: 'v19'
    },
    {
        id:3,
        ciudad:'Soria',
        value: 'v20'
    },

        
];


/* EVENTOS */

/* FUNCIONES */

const aleatorio = (array) =>
{
  const indice = Math.floor(Math.random() * array.length);
    return indice;
}

const pintarBanner = (array) =>
    {

               
        const indice = aleatorio (array);
        const elemento = arrayBanners[indice];

        imagenBanner.src = elemento.src;
        imagenBanner.alt = elemento.src;

        
    }
       

    // console.log(elemento.alt)
    // console.log(elemento.src)
    /*cambiarImagen.setAttribute('src', elemento.src);
    imagenBanner.alt = elemento.alt;
    // console.log(imagenBanner)*/


const pintarCards =()=>{
    /* recorrer los elementos del array*/
   
    arrayViajes.forEach((element) => {
        const articleCaja = document.createElement("article");
        const divCaja =  document.createElement("div");
        const imgViaje1 =  document.createElement("img");
        imgViaje1.src = element.src;
        imgViaje1.alt= element.alt;
        const titulo1 =  document.createElement("h3");
        titulo1.textContent=`Viaje 1`;
        const parrafo1 =  document.createElement("p");
        parrafo1.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
       
        //con newarticle es más visual//
        divCaja.append(imgViaje1);
        articleCaja.append(divCaja,titulo1,parrafo1)


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


const pintarDestinos = () => {
    arrayDestinos.forEach((element)=>{
       const opcion = document.createElement('option');
       opcion.value = element.value;
       opcion.text = element.ciudad;

       fragment.append(opcion)
    }) 

    opcionesDest.append(fragment)
}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
pintarCards()
// pintarCards()
pintarDestinos()
console.log(aleatorio)