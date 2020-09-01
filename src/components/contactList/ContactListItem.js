import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./contactList.module.css";

function ContactListItem({ name, number, id, onRemoveContact }) {
  return (
    <li className={styles.contactListItem}>
      <div className={styles.contactWrapper}>
        <span>{name}:</span>
        <span>{number}</span>
      </div>
      <button
        type="button"
        onClick={() => {
          onRemoveContact(id);
        }}
        className={styles.btnDelete}
      >
        &#10060;
      </button>
    </li>
  );
}

const mapStateToProps = (state, { id }) => {
  return {
    contact: state.contacts.items.find((item) => item.id === id),
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onRemoveContact: (id) => {
//       dispatch(contactsActions.removeContact(id));
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
