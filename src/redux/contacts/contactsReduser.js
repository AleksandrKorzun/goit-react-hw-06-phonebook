import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addItemsActionCreator, deleteItemActionCreator, setFilterActionCreator} from "./contactsActions";

const itemsReducer= createReducer([], {
    [addItemsActionCreator]: (state, action) => [...state, action.payload],
    [deleteItemActionCreator]: (state, action) => state.filter(contact => contact.id !== action.payload),
})

const filterReducer = createReducer("", {
    [setFilterActionCreator]: (_, action) => action.payload,
  });

  const contactsReduser = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
  });

  export default contactsReduser;



// const itemsReduser = (state = [], action) => {
//     switch (action.type) {
//         case ADDITEMS:
//             return [...state, action.payload];
//         case DELETEITEMS:
//             return state.filter(contact => contact.id !== action.payload);
//         default:
//             return state;
//     }
// }

// const filterReduser = (state = "", action) => {
//     switch (action.type) {
//         case SETFILTER:
//             return action.payload;
//         default:
//             return state;
//     }
// }

// const contactsReduser = combineReducers({
//     items: itemsReduser,
//     filter: filterReduser,
// })
// export default contactsReduser;