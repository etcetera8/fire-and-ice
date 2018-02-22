export const addHouses = ( state=[], action ) => {
  switch(action.type) {
    case "ADD_HOUSES":
      return action.payload
    default:
      return state;
  }
}