import { obtenerHeroesArr } from './js/await'

// const heroes = obtenerHeroesArr()

// console.table(heroes)

obtenerHeroesArr().then(console.table)
