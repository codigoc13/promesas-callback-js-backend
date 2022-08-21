import './styles.css'
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas'

const heroeId1 = 'spider'
const heroeId2 = 'iron'
const heroeId3 = 'capi'

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)
  })
  .catch((err) => {
    alert(err)
  })
  .finally(() => {
    console.log('Se terminó el Promise.all')
  })

console.log('Fin de programa')
