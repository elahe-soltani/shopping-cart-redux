const addItem = product => {
    return {
        type: "ADD_ITEM" ,
        payload : product
    }
}

const removeItem = product => {
    return {
        type: "REMOVE_ITEM" ,
        payload : product
    }
}

const increase = product => {
    return {
        type: "INCREASE" ,
        payload : product
    }
}

const decrease = products => {
    return {
        type: "DECREASE" ,
        payload : products
    }
}

const cheackout = () => {
    return {
        type: "CHEACKOUT"
    }
}

const clear = () => {
    return {
        type: "CLEAR"
    }
}

export {addItem , removeItem , decrease , increase , cheackout , clear} ;