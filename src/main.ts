import './style.css'

// import './bases/01-const-let'
// import './bases/02-template-string'
// import './bases/03-object-literal'
// import './bases/04-arrays'
// import './bases/05-functions'
// import './bases/06-obj-destructuring'
// import './bases/07-array-des'
// import './bases/08-import-export'
// import { getHeroesByOwner } from './bases/08-import-export'
// import { Owner } from './bases/data/heroes.data'
// import './bases/09-promises';
// import './bases/10-fetch-Api';
import './bases/11-async-await';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>
  </div>
`

// console.log(getHeroesByOwner(Owner.DC));