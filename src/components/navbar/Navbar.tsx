import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/ToatsAlerta'

function Navbar() {
  const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuario vazou com sucesso!', 'info')
        navigate('/login')
    }

    let navbarComponent
 
  if(usuario.token !== "") {
    navbarComponent = (
     <div className='w-full bg-black text-white flex justify-center py-4'>
     <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Blogerson</div>

          <div className="flex gap-4">
            <Link to='/home' className="hover:underline cursor-pointer">Home</Link>
            <Link to='/temas' className="hover:underline cursor-pointer">Temas</Link>
            <Link to='/cadastrarTema' className="hover:underline cursor-pointer">Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='/' onClick={logout} className="hover:underline cursor-pointer">Sair</Link>
          </div>
        </div>
      </div>
  )
}

return (
  <>
    {navbarComponent}
  </>
)
}

export default Navbar;