import React, { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./contactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // this.dublicate() && this.props.onAlert();

    // this.props.onAddContact({ ...this.state });
    // // const { name, number } = this.state;
    // // this.props.onSubmit({ id: uuidv4(), name, number });
    // this.reset();

    // this.dublicate() &&
    //   setTimeout(() => {
    //     this.props.onAlert();
    //   }, 1000);

    if (this.dublicate()) {
      this.props.onAlert();
      setTimeout(() => {
        this.props.onAlert();
      }, 4000);
    } else {
      this.props.onAddContact({ ...this.state });
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  dublicate = () => {
    return this.props.items.some(
      (item) => item.name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Number:
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.btnAddContant}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
  };
};
const mapDispatchToProps = {
  onAddContact: contactsActions.addToContacts,
  onAlert: contactsActions.toggleAlert,
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddContact: (contact) => {
//       dispatch(contactsActions.addToContacts(contact));
//     },
//   };
// };

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
