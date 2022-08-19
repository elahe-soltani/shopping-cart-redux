import React, {useReducer , createContext} from 'react';


const initialState={
    selectItems :[],
    itemCounter:0,
    total:0,
    checkout:false
}

const sumItems = item => {
    const itemCounter = item.reduce((total , product) => total + product.quantity , 0);
    const total = item.reduce ((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return {itemCounter , total}
}
const cartReducer = ( state , action) => {
    console.log(state)
    switch(action.type) {
        case "ADD_ITEM" :
            if(!state.selectItems.find(item => item.id === action.payload.id)){
                state.selectItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return {
                ...state ,
                selectItems:[...state.selectItems],
                ...sumItems(state.selectItems),
                checkout:false
            }
            case 'REMOVE_ITEM' :
                const newSelectItems = state.selectItems.filter(item => item.id !== action.payload.id);
                return {
                    ...state,
                    selectItems : [...newSelectItems],
                    ...sumItems(newSelectItems),
                    
                }
            case 'INCREASE' :
                  const indexI=state.selectItems.findIndex(item => item.id === action.payload.id);
                  state.selectItems[indexI].quantity++;
                  return {
                      ...state,
                      ...sumItems(state.selectItems)
                  }
            case 'DECREASE' :
                  const indexD=state.selectItems.findIndex(item => item.id === action.payload.id);
                  state.selectItems[indexD].quantity--;
                  return {
                      ...state,
                      ...sumItems(state.selectItems)
                    } 
            case 'CHECKOUT' :
                return {
                    selectItems :[],
                    itemCounter:0,
                    total:0,
                    checkout:true
                } 
            case 'CLEAR' :
                return {
                    selectItems :[],
                    itemCounter:0,
                    total:0,
                    checkout:false
                }    
            default :
                return state;             
    }
}
export const cartContext=createContext();
const CartContextProvider = ({children}) => {
    const [state , dispatch] = useReducer (cartReducer , initialState);
    return (
        <cartContext.Provider value={{state , dispatch}}>
               {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;