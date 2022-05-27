import { ADDCART } from "./action";

const initState = {
  id: "",
  title: "",
  price: ""
};
// export const reducer = ({ state = initState, {type, data} }) => {
//   switch (type) {
//     case ADDCART:
//       return {...state, data};
//     default:
//       return state;
//   }
// };