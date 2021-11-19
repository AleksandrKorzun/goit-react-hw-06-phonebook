import { createAction, nanoid } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// const ADDITEMS = "items/addItems";
// const DELETEITEMS = "items/deleteItems";
// const SETFILTER = "items/setFilter";

// export {ADDITEMS, DELETEITEMS, SETFILTER};

// export const addItemsActionCreator = (payload) => ({
//     type: ADDITEMS,
//     payload: {...payload, id: uuidv4()}
// })
export const addItemsActionCreator = createAction("items/addItems", (item) => ({
    payload: {...item, id: nanoid()}
}));

// export const deleteItemActionCreator = (payload) => ({ type: DELETEITEMS, payload });
export const deleteItemActionCreator = createAction("items/deleteItems");
// export const setFilterActionCreator = (payload) => ({type: SETFILTER, payload});
export const setFilterActionCreator = createAction("items/setFilter");

// export default {addItemsActionCreator, deleteItemActionCreator, setFilterActionCreator};