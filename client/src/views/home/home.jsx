import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getByName, getVgs, orderVgs,filteredById,filteredByGenre} from "../../redux/actions";

import Navbar from "../../components/navbar/navbar";
import Cards from "../../components/cards/cards";

import "./home.styles.css";

function Home() {

  
  const dispatch = useDispatch();
  const allVgs = useSelector((state) => state.allVgs);
  //console.log(allVgs);
  const [searchString, setSearchString] = useState("");
  const [booleano, setBooleano] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  //* Filtro con el backend

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderVgs(event.target.value));
    setBooleano(!booleano); // Se actualiza el componente!
  }

  function handleFilteredByGenre(event) {
    event.preventDefault();
    dispatch(filteredByGenre(event.target.value));

  }

  function handleFilteredById(event) {
    event.preventDefault();
    dispatch(filteredById(event.target.value));
    setBooleano(!booleano); // Se actualiza el componente!
  }



  useEffect(() => {
    dispatch(getVgs());
  }, [dispatch]);

    

return (
    <div className="home">

        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} handleOrder={handleOrder} 
        handleFilteredById={handleFilteredById} handleFilteredByGenre={handleFilteredByGenre}/>
        <Cards allVgs={allVgs} />

    </div>
  );
}

export default Home;
