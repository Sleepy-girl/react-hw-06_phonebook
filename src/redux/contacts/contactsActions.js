import constantsTypes from "./constantsTypes";
import { v4 as uuidv4 } from "uuid";

const addToContacts = (contact) => ({
  type: constantsTypes.ADD,
  payload: { ...contact, id: uuidv4() },
});

const removeContact = (id) => ({
  type: constantsTypes.REMOVE,
  payload: {
    id,
  },
});

const getFilterValue = (filter) => ({
  type: constantsTypes.FILTER_VALUE,
  payload: {
    filter,
  },
});

const toggleAlert = () => ({
  type: constantsTypes.EXIST_CONTACT,
});

export default {
  addToContacts,
  removeContact,
  getFilterValue,
  toggleAlert,
};
