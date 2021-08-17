import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'

import Conteudo01 from '../../views/contents/Conteudo01'
import Conteudo02 from '../../views/contents/Conteudo02'
import Conteudo03 from '../../views/contents/Conteudo03.jsx'

const Content = props => (
    <main className="Content">
        <Switch>
         
            <Route path="/Conteudo01/">
                <Conteudo01 />
            </Route>
            <Route path="/Conteudo02">
                <Conteudo02 />
            </Route>
              <Route path="/Conteudo03/">
                <Conteudo03/>
            </Route>
          
        </Switch>
    </main>
)
export default Content