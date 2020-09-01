import React from "react";
import styles from "./filter.module.css";
import stylesFromForm from "../contactForm/contactForm.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

function Filter({ getFilterValue, filter }) {
  return (
    <div className={styles.wrapperFilter}>
      <label className={stylesFromForm.label}>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          onChange={(e) => {
            getFilterValue(e.target.value);
          }}
          value={filter}
          className={stylesFromForm.input}
        />
      </label>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state: state.contacts.filter };
};
const mapDispatchToProps = {
  getFilterValue: contactsActions.getFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
