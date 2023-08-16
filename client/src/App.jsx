//import { useState } from 'react'

import {Route,Routes} from "react-router-dom"
import {Link} from "react-router-dom";
import Welcome from './views/landingpage/welcome';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import Create from './views/create/create';



import './App.css'
//import {Provider} from "react-redux";

/*

          <Routes>
          <Route path="/welcome" element={Welcom} />
          <Route exact path="/home" element={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/create" component={Create} />
          </Routes>
*/

function App() {
  //const [count, setCount] = useState(0)

  return (

        <div className='App'>




        <Welcome/>

        <Link to={`/home`}><button className='btn-ingresar'>PLAY!!!</button></Link>
          <Routes>

          <Route exact path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          </Routes>


        </div>

  )
}

export default App
