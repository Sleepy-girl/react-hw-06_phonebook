import { combineReducers } from "redux";
import constantsTypes from "./constantsTypes";

const itemsReduser = (state = [], action) => {
  switch (action.type) {
    case constantsTypes.ADD:
      return [...state, action.payload];

    case constantsTypes.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReduser = (state = "", action) => {
  switch (action.type) {
    case constantsTypes.FILTER_VALUE:
      return action.payload.filter;

    default:
      return state;
  }
};

const alertReducer = (state = false, action) => {
  switch (action.type) {
    case constantsTypes.EXIST_CONTACT:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReduser,
  filter: filterReduser,
  alert: alertReducer,
});

// componentDidMount() {
//   console.log("Contact componentDidMount");

//   const persistedContacts = localStorage.getItem("contacts");
//   if (persistedContacts) {
//     this.setState({
//       contacts: JSON.parse(persistedContacts),
//     });
//   }
// }
// componentDidUpdate(prevProps, prevState) {
//   console.log("Contact componentDidUpdate"); // вызывается каждый раз при смене состояния state
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

// addToContacts = (objectContact) => {
//   this.state.contacts.find((contact) => contact.name === objectContact.name)
//     ? this.setState((prevState) => ({ alert: true }))
//     : this.setState((prevState) => {
//         return {
//           contacts: [...prevState.contacts, objectContact],
//         };
//       });
// };

// closeAlert = () => {
//   this.setState((prevState) => ({ alert: !prevState.alert }));
// };

// getFilterValue = (e) => {
//   this.setState({ filter: e.target.value });
// };

// removeContact = (id) => {
//   this.setState((prevState) => {
//     return {
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     };
//   });
// };
