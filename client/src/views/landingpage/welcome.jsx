import "./welcome.styles.css"
import {Link} from "react-router-dom";
import './welcome'
import fondo from '../../assets/img/fondo.jpeg'



function Welcome() {

  
    return (
      <div className='main'>
  
        <h1>VIDEOGAMES</h1>
        <div>
          <img src={fondo} alt=''/>
        </div>
        <Link to={`/home`}><button className='btn-ingresar'>PLAY!!!</button></Link>

      </div>
    )
  }
  
  export default Welcome