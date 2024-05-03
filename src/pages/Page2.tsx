import React from 'react'
import {Link} from 'react-router-dom'

export function Page2() {
  return (
    <>
    <Link to='/Page1'>
      <button>GitHub</button>
    </Link>
    <Link to='/'>
      <button>Pesquisação</button>
    </Link>
    <Link to='/Page3'>
      <button>Tédio</button>
    </Link>
    </>
  )
}
