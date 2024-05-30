import { legacy_createStore as createStore} from "redux";


const reducer = (state, action) => {
    if (action.type === "increment") {
        return {count: state.count+1}
    }
    else if (action.type === "decrement") {
        return {count: state.count-1}
    }

    return {count: 0}
}

const Store = createStore(reducer); {/* @deprecated We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.*/}

export default Store