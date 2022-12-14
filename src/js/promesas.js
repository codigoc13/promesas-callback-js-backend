const heroes = {
  capi: {
    nombre: 'Capitan América',
    poder: 'Aguantar inyecciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reacción alérgica a la picadura de araña',
  },
}

export const buscarHeroe = (heroId) => {
  const heroe = heroes[heroId]

  return new Promise((resolve, reject) => {
    if (heroe) {
      setTimeout(() => {
        resolve(heroe)
      }, 1000)
    } else {
      reject(`No existe un héroe con el id ${heroId}`)
    }
  })
}

export const buscarHeroeAsync = async (heroId) => {
  const heroe = heroes[heroId]

  if (heroe) {
    return heroe
  } else {
    // throw Error(`No existe un héroe con el id ${heroId}`)
    throw `No existe un héroe con el id ${heroId}`
  }
}

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa lenta'), 2000)
})

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa media'), 1500)
})

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa rápida'), 1000)
})

export { promesaLenta, promesaMedia, promesaRapida }
