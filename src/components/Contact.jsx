import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FloatingLabel, Form, Button, Spinner } from 'react-bootstrap';
import './Contact.css';

function Contact() {
    
    const [buttonState, setButtonState] = useState('Idle');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setButtonState('Sending...');
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current, {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
        )
        .then(
            () => {
                console.log('Email sent successfully');
                setButtonState('Sent!');
                setTimeout(() => setButtonState("Idle"), 5000);
            },
            (error) => {
                console.log(error.text);
                setButtonState("Idle");
            }

        )
    }

    const getButtonText = () => {
        switch (buttonState) {
            case 'Idle':
                return 'Send';
            case 'Sending...':
                return (
                    <>
                        Sending...
                        <Spinner animation="border" role="status" size="sm" className='ms-2'/>
                    </>
                )
            case 'Sent!':
                return 'Sent!';
            default:
                return 'Send';
        }
    }


    return (
        <section id='contact' className='contact'>
            <h3>Contact Me</h3>
            <Form ref={form} onSubmit={sendEmail}>
                <FloatingLabel controlId="floatingName" label="Name" className='floating-label'>
                    <Form.Control type="text" name="user_name" placeholder="Name" required/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email Address" className='floating-label'>
                    <Form.Control type="email" name="user_email" placeholder="Email" required/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingMessage" label="Message" className='floating-label'>
                    <Form.Control as="textarea" name="message" placeholder="Message" rows={6} required/>
                </FloatingLabel>
                <Button type="submit" className='contact-btn' disabled={buttonState !== 'Idle'}>{getButtonText()}</Button>


            </Form>     
        </section>
    )
}

export default Contact;