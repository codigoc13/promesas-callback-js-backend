import './styles.css'

import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'

// promesaLenta.then((resp) => console.log(resp))
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)

// El Promise.race nos permite ejecutar las promesas en conjunto y obtener el mensaje de la promesa que se resuelve más rápido.

Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log)
