import {Link} from 'react-router-dom'
import './App.css'


function App() {
  
  return (
    <>
    <h1>Pesquisação</h1>
   <Link to='Page1'>
    <button>GitHub</button>
    </Link>
    <Link to='Page2'>
      <button>Pág 2</button>
    </Link>
    <Link to='Page3'>
      <button>Tédio</button>
    </Link>
    </>
  )
}

export default App
