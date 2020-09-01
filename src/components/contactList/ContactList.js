import React from "react";
import styles from "./contactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";

function ContactList({ items = [] }) {
  return (
    <TransitionGroup className={styles.contactList} component="ul">
      {items.map((item) => (
        <CSSTransition
          key={item.id}
          id={item.id}
          timeout={500}
          classNames={styles}
          // unmountOnExit
        >
          <ContactListItem
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items.filter((item) =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
  };
};

export default connect(mapStateToProps)(ContactList);
