import React, { useState } from 'react';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // JSX

    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
export default ContactForm;