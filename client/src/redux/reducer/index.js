import {NEW_VG,GET_VGS,GET_GENRES, GET_BY_NAME,GET_DETAIL,ORDER,FILTERBYORIGIN,FILTERBYGENRE} from "../actions";

let initialState = {allVgs: [], vgsCopy: [], genres: [], detail:[]};

function rootReducer(state = initialState, action) {
  switch (action.type) {




    case GET_VGS:
      return {
        ...state,
        allVgs: action.payload,
        vgsCopy: action.payload,
      };

      case GET_GENRES:
        return {
          ...state,
          genres: action.payload,
          //vgsCopy: action.payload,
        };

        case NEW_VG:
          return {
            ...state,
            allVgs: [...state.allVgs, action.payload], // Agrega el nuevo videojuego al estado
          };    

    case GET_BY_NAME:
      return {
        ...state,
        allVgs: action.payload,
      };

      case GET_DETAIL:
        return {
          ...state,
            detail: action.payload,
        };  

        case ORDER:
          // [{id: 8},{id: 6},{id: 4},1,7]
          //    a.id    b.id
    
          let copy = state.allVgs.sort((a, b) => {
            if (action.payload === "A") {
              // ordenar de menor a mayor el rating
              if (a.rating > b.rating) return 1;
              if (a.rating < b.rating) return -1;
              return 0; // Si son iguales, no los muevo de posición.
            } else if (action.payload === "D")  {
              // ordenar de mayor a menor el rating
              if (a.rating > b.rating) return -1;
              if (b.rating > a.rating) return 1;
              return 0; // Si son iguales, no los muevo de posición.
            }
            if (action.payload === "X") {
              // ordenar de la A -> Z
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0; // Si son iguales, no los muevo de posición.
            } else if (action.payload === "Y")  {
              // ordenar de la Z -> A
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0; // Si son iguales, no los muevo de posición.
            }
          });
          return {
            ...state,
            allVgs: copy,
          };  

          case FILTERBYORIGIN:

          let filter=[]

          if (action.payload === "BDD")  {
            filter=state.allVgs.filter(element=>{
              if (!Number(element.id)){
                 return true
              }
            })
          }


          if (action.payload === "API") {
              filter=state.allVgs.filter(element=>{
                if (element.org==="api"){
                  return true
                }
              })

          } 
      

            return {
              ...state,
              allVgs: action.payload==="default"?state.allVgs:filter,
            };  


            case FILTERBYGENRE:


            let filtergames=[]
            let filtergs=state.allVgs

           /* console.log("entre al filtro");
            console.log(state.allVgs);*/

            if (action.payload==="default"){
              return {
                ...state,
                allVgs:state.vgsCopy
              }
            }
           
            filtergames=state.allVgs.filter(vg=>{

              if(vg.genres){
                const genre=vg.genres.map(
                  vg=>vg.name
                )
              return genre.includes(action.payload)  
              }})

            console.log(filtergames);
            return{

              ...state,
              allVgs:filtergames

            }


    default:
      return {
        ...state
      };
  }
}

export default rootReducer;
