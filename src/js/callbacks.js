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

// callback retorna un heroe
export const buscarHeroe = (heroId, callback) => {
  const heroe = heroes[heroId]

  callback(heroe)
}

console.log('Fin de programa')
