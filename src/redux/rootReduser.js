import { combineReducers } from "redux";
import contactsReducer from "./contacts/contactsReduser";

const rootReducer = combineReducers({
    contacts: contactsReducer,
})
export default rootReducer;