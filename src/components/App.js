import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
// import { object } from "prop-types";
import styles from "./app.module.css";
import { CSSTransition } from "react-transition-group";
import AlertError from "./alertError/AlertError";
import { connect } from "react-redux";

function App({ alert }) {
  // getFilteredData = (e) => {
  // const { filter, contacts } = this.state;
  // return filter
  //   ? contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : contacts;
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTitleWithAlert}>
        <CSSTransition
          classNames={styles}
          in={true}
          appear={true}
          timeout={500}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        {alert && <AlertError />}
      </div>
      <ContactForm />
      {/* {contacts.length > 0 ? (
        <div>
          {contacts.length > 1 && ( */}
      <Filter />
      {/* )} */}

      <ContactList />
      {/* </div>
      ) : (
        <h2 className={styles.titleEmpty}>
          Your phonebook is empty, please add your first contact
        </h2>
      )} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    alert: state.contacts.alert,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //
//   };
// };

export default connect(mapStateToProps)(App);
