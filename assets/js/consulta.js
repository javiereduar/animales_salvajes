// La variable "url" no se ve desde el mundo exterior
const url = 'assets/data/animales.json'

export const get_animal = async function () {
  let datos = await fetch('assets/data/animales.json')
  datos = await datos.json()
  return datos.animales
}