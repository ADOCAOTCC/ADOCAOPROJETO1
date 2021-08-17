import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
             
                <li>
                    <Link to="/Conteudo01/">Inicial</Link>
                </li>
                <li>
                    <Link to="/Conteudo02">Sobre nós</Link>
                </li>
                 <li>
                    <Link to="/Conteudo03">Contato</Link>
                </li>
            </ul>
        </nav>

    </aside>
)
export default Menu