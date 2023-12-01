import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts = [], addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const isDuplicate = contacts.some((contact) => contact.name === name);
    setDuplicate(isDuplicate);
  }, [name, contacts]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone} setDuplicate={setDuplicate} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts}/>
      </section>
    </div>
  );
};

// src/containers/contactsPage/ContactsPage.js