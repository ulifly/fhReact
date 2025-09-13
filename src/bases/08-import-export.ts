import { heroes, type Hero } from "./data/heroes.data";



const getHerobyId = (id: number) : Hero  => {
    const hero = heroes.find((hero) => {
        return hero.id === id
    } )
    
    if (!hero) throw new Error(`no existe el heroe con  ${id}`)
    return hero
}


console.log(getHerobyId(5));