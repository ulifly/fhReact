import { heroes, type Hero, Owner } from "./data/heroes.data";



const getHerobyId = (id: number) : Hero  => {
    const hero = heroes.find((hero) => {
        return hero.id === id
    } )
    
    if (!hero) throw new Error(`no existe el heroe con  ${id}`)
    return hero
}


console.log(getHerobyId(5));

// Tarea
/* getHeroesByOwner => Hero[]
filtrar los heroes por su owner  
@param owner el owner por el cual queremos filtrar (DC o Marvel)
@return array con los heroes del owner
*/

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )
    return heroesByOwner
}
