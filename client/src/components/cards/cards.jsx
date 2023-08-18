import { useEffect, useState } from "react";
import Card from "../card/card";
import "./cards.styles.css";

import { useDispatch, useSelector } from "react-redux";
import {getByName, getVgs, orderVgs} from "../../redux/actions";

function Cards({allVgs}) {

  console.log(allVgs.length);

  const dispatch = useDispatch();
  //const allVgs = useSelector((state) => state.allVgs);
  //console.log(allVgs);

  const vgsList=allVgs

  const [page, setPage] = useState(1);
  const limit = 15;
  
  const indexOfLast = page * limit;
  const indexOfFirst = indexOfLast - limit;
  const lastPage = Math.ceil(vgsList.length / limit);

  
  let current = vgsList.slice(
    indexOfFirst,
    indexOfLast
  );


const previousPage = () =>{
  if((page - 1) > 0){
    setPage(page - 1)
  
  }
  
}

const nextPage = () =>{
  if((page + 1) < (lastPage + 1))
  setPage(page + 1)
}

useEffect(() => {
  dispatch(getVgs());
}, [dispatch]);

  return (

    <div>

        <div className="pagination">
            <div >
                        <button onClick={previousPage} >BACK</button>
            </div>
            <div>
                        <p className="text" type="text" > {page}  </p>
            </div>
            <div>
                        <button  onClick={nextPage}>NEXT</button>
            </div>
        </div>
      
      <div className="card-list">
        {current?.map((vg) => (
            <Card 
                key={vg.id}
                id={vg.id} 
                name={vg.name} 
                image={vg.image} 
                genres={vg.genres}
                rating={vg.rating}	
            />
        ))}
      </div>

    </div>

  );
}

export default Cards;
