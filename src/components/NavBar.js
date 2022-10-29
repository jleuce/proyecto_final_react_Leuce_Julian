import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

function NavBar() {
  const {user,deslogin} = useContext(UserContext);

  return (
    <div className='autonav'>
      <div className="navbar bg-base-100">
          <a className="btn btn-ghost normal-case text-xl autotext">Ecomerce JL</a>
          <Link to='/' className="btn btn-outline autobtn"> Home </Link>
          <Link to='/pedidos' className='btn btn-outline autobtn'> Ver tus pedidos</Link>
          <a className="btn btn-ghost normal-case text-xl autotext">Usuario: {user==null?"Invitado":user}</a>
          {user==null?<Link to='/login' className='btn btn-outline autobtn'>Login</Link>:<button className='btn btn-outline' onClick={deslogin}>Deslogear</button>}
      </div>
    </div>
  )
}

export default NavBar