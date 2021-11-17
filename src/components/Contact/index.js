import React from "react"
import { validateEmail } from '../../utils/helpers'
import { useState } from 'react'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email:'', message:'' })
    const { name, email, message } = formState

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }      
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(formState)
    }

    return (
    <section>
        <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"><b>Name:</b></label> <br></br>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="email"><b>Email Address:</b></label> <br></br>
                <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message"><b>Message:</b></label> <br></br>
                <textarea name="message" rows="7" cols="75" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    </section>
    )
}

export default Contact