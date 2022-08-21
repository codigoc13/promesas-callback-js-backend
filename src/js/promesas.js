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

  /* const promesa = new Promise()
  return promesa */

  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe)
    } else {
      reject(`No existe un héroe con el id ${heroId}`)
    }
  })
}
