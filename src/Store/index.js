import { createStore, combineReducers } from "redux";

// importando o reducer
import FruitsReducer from "./Modules/FruitsRedux/reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducers = combineReducers({ fruits: FruitsReducer });

// passando os reducers combinados para a store
const store = createStore(reducers);

export default store;