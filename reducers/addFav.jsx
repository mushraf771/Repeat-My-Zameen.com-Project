const initialState = false;
const AddFav = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE": return state = true ;
        case "REMOVE_FAVORITE": return state = false;
        default: return state;
    }
}; export default AddFav;