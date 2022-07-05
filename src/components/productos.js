/*import botinesFuture from './assets/img1/botines-future.jpg'
import botinesStrike from './assets/img1/botines-strike.jpg'
import camisetaBoca from './assets/img1/camiseta-boca.jpg'
import camisetaRiver from './assets/img1/camiseta-river.jpg'
import cascoRugby from './assets/img1/casco-rugby.jpg'
import mancuerna2kg from './assets/img1/mancuerna2kg.jpg'
import pelotaBasquet from './assets/img1/pelota-basquet.jpg'
import pelotaWilson from './assets/img1/pelota-wilson.jpg'
import raquetaTenis from './assets/img1/raqueta-tenis.jpg'
import setProteccion from './assets/img1/set-proteccion.jpg'

const productos= [
    {
    id:1,
    name:'BOTINES DE FUTBOL PUMA FUTURE',
    price:20000,
    descripcion:'Juega como un auténtico profesional con este modelo elegante a la par que ágil con un diseño sin cordones para mayor comodidad, la marca PUMA destacada y modernas combinaciones de color que destacan con estilo.',
    image: botinesFuture,
    categoryId: 'botines',
    },
    {
    id:2,
    name:'BOTINES DE FUTBOL NIÑO KAPPA STRIKE',
    price:7000,
    descripcion:'Los mas chicos van a estar listos para gritar goles con los nuevos botines de futbol KAPPA Strike TF.',
    image: botinesStrike,
    categoryId: 'botines',
    },
    {
    id:3,
    name:'CAMISETA BOCA CAMPEÓN',
    price:23220,
    descripcion:'La camiseta Oficial Authentic de Boca Campeón ya esta disponible, hacé tu pedido ahora y asegurate de tener la tuya para festejar junto al equipo.',
    image: camisetaBoca,
    categoryId: 'camisetas',
    },
    {
    id:4,
    name:'CAMISETA RIVER OFICIAL',
    price:9999,
    descripcion:'Camiseta local River Plate. Demostra tu amor por el club con esta camiseta de local. Desde su reincorporación a su camiseta de local en 1932, la banda roja del River Plate se ha convertido en símbolo de su éxito global.',
    image: camisetaRiver,
    categoryId: 'camisetas',
    },
    {
    id:5,
    name:'CASCO DE RUGBY ARGENTINA',
    price:10560,
    descripcion:'Relleno de espuma de célula cerrada.Construcción ergonómica del flujo de aire con sistema de cierre de encaje expansible.',
    image: cascoRugby,
    categoryId: 'otros',
    },
    {
    id:6,
    name:'MANCUERNA 2KG',
    price:3230,
    descripcion:'Posee goma en los extremos, recubriéndolos.',
    image: mancuerna2kg,
    categoryId: 'otros',
    },
    {
    id:7,
    name:'PELOTA DE BASQUET SPALDING',
    price:8520,
    descripcion:'Diseñada solamente para uso en interiores.Es 12% más grande que la pelota de regulación para mejorar la precisión de tiro.',
    image: pelotaBasquet,
    categoryId: 'pelotas',
    },
    {
    id:8,
    name:'PELOTA DE VOLEY WILSON',
    price:9449,
    descripcion:'El ganador del premio de la crítica "Best Inanimate" por la película de la 20th Century Fox "Náufrago".Esta versión réplica del balón de vóleibol real utilizado en la película es el verdadero amigo de cualquier jugador de vóleibol.',
    image: pelotaWilson,
    categoryId: 'pelotas',
    },
    {
    id:9,
    name:'RAQUETA DE TENIS BABOOLAT EVOKE',
    price:13550,
    descripcion:'La raqueta BABOLAT Evoke está diseñada para jugadores amateurs y de recreación, que buscan raquetas ligeras y fáciles de maniobrar, pero sin perder calidad y con un diseño atractivo.',
    image:raquetaTenis,
    categoryId: 'otros',
    },
    {
    id:10,
    name:'SET DE PROTECCION PARA NIÑOS',
    price:2035,
    descripcion:'Los mas chicos van a estar listos para gritar goles con los nuevos botines de futbol KAPPA Strike TF.',
    image: setProteccion,
    categoryId: 'otros',
    }
]
export const traerProducto = (time, id) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos.find(prod => prod.id === id));
        }, time)
    })
}

export const productosCategorias = (time, categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos.filter(prod => prod.categoryId === categoryId));
        }, time)
    })
}

export default productos*/