import './styles.css'
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas'

const heroeId1 = 'spider'
const heroeId2 = 'iron'
const heroeId3 = 'capi'

// buscarHeroe(heroeId1, (err, heroe1) => {
//   if (err) {
//     return console.error(err)
//   }
//   buscarHeroe(heroeId2, (err, heroe2) => {
//     if (err) {
//       return console.error(err)
//     }
//     buscarHeroe(heroeId3, (err, heroe3) => {
//       if (err) {
//         return console.error(err)
//       }
//       console.log(
//         `Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión`
//       )
//     })
//   })
// })

// buscarHeroe(heroeId1).then((heroe1) => {
//   // console.log(`Enviando a ${heroe.nombre} a la misión`)
//   buscarHeroe(heroeId2).then((heroe2) => {
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)
//   })
// })

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(
  ([heroe1, heroe2]) => {
    // console.log('Promise.all', heroes)
    // console.log(
    //   `Enviando a ${heroes[0].nombre} y ${heroes[1].nombre} a la misión`
    // )
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)
  }
)

console.log('Fin de programa')
