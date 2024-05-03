import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export function Page3() {
  const [count, setCount] = useState(0)
  
  let admin : string = "";
  
  if (count > 4){
    admin = "É um bom começo."
  }
  if (count > 9){
    admin = "Apenas relaxe."
  }
  if (count > 19){
    admin = "Acalma-se"
  }
  if (count > 29){
    admin = "Sinta a tranquilidade no ar"
  }
  if (count > 39){
    admin = "Concentre-se"
  }
  if (count > 49){
    admin = "Mais calmo?"
  }
  if (count > 59){
    admin = "tranquilo?"
  }
  if (count > 69){
    admin = "Tá bem calmo né pessoa?"
  }
  if (count > 79){
    admin = "Quer ir longe em."
  }
  if (count > 89){
    admin = "Ainda vai continuar?"
  }
  if (count > 99){
    admin = "Não está na hora de dar thau não?"
  }
  if (count > 149){
    admin = "Por que aínda está aqui?"
  }
  if (count > 299){
    admin = "OH POHA, PORQUE AINDA ESÁ AQUI!"
  }
  if (count > 499){
    admin = "Desisto de você, DESGRAAAAAAAAAAAAAÇA!!"
  }
  if (count > 699){
    admin = "TUA! VIDA! É! TRISTE!!!"
  }
  if (count > 999){
    admin = "VAI TOMAR NO MEIO DO SEU TOBA!!!!"
  }
  


  return (
    <>

    <p>"Tédiosamente Tediado"</p>
    <p>"Para por passar o tempo"</p>

    <p id='tree'>{admin}</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contidão is {count}
        </button>
        <br />
        <button onClick={() => setCount((count) => count = 0)}>
          Resertary
        </button>
      </div>

    <Link to='/Page1'>
      <button>GitHub</button>
    </Link>
    <Link to='/Page2'>
      <button>Pág 2</button>
    </Link>
    <Link to='/'>
      <button>Pesquisação</button>
    </Link>
    </>
  )
}

