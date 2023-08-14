import {GET_VGS, GET_BY_NAME,GET_DETAIL,ORDER,FILTERBYORIGIN,FILTERBYGENRE} from "../actions";

let initialState = {allVgs: [], vgsCopy: [], genres: [], detail:[]};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_VGS:
      return {
        ...state,
        allVgs: action.payload,
        vgsCopy: action.payload,
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
          if (action.payload === "A") {
              filter=state.allVgs.filter(element=>{
                if (element.org==="api"){
                  return true
                }
              })

          } else if (action.payload === "B")  {
            filter=state.allVgs.filter(element=>{
              if (!Number(element.id)){
                 return true
              }
            })
          }
      

            return {
              ...state,
              allVgs: filter,
            };  


            case FILTERBYGENRE:

            let filterGenre=[]

            switch (action.payload) {
              case 'D':
                let isIn=false
                let filterG=state.allVgs.filter(element=>{
                    element.genres.forEach(genre => {
                      if(genre.name==="Action"){
                        isIn=true
                        return true
                      }
                    });
                    if(isIn){
                      filterGenre.push(element)
                    }
                })
                break;
            }
              return {
                ...state,
                allVgs: filterGenre,
              }; 

    default:
      return {
        ...state
      };
  }
}

export default rootReducer;
