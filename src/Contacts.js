import React, {Component} from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            name: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div id={'contact-form'} className={styles.contacts}>
                <Fade bottom>
                    <div className={styles.container}>
                        {/*<span className={styles.blockTitle}>Contacts</span>*/}
                        <div className={styles.headerTitle}>
                            <h2 className={styles.headerTitle}>Contact me</h2>
                            <div className={styles.line}></div>
                        </div>
                        {/*<form className={styles.formWrapper}>*/}
                        {/*    <input name="name" className={styles.formArea} onChange={this.handleChange}*/}
                        {/*           placeholder="Name" type="text" value={this.state.name}></input>*/}
                        {/*    <input name="email" className={styles.formArea} onChange={this.handleChange}*/}
                        {/*           placeholder="e-mail" type="email" value={this.state.email}></input>*/}
                        {/*    <textarea name="message" className={styles.messageArea} onChange={this.handleChange}*/}
                        {/*              placeholder="Type your message" value={this.state.message}></textarea>*/}
                        {/*    <button className={styles.btnSubmit} type="submit" onClick={this.handleSubmit}>Send</button>*/}
                        {/*</form>*/}
                        <form className={styles.formWrapper}>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   className={styles.formArea}
                                   onChange={this.handleChange}
                                   placeholder={'Name'}
                                   required
                                   value={this.state.name}/>
                            <input type="email"
                                   id="email"
                                   name="email"
                                   className={styles.formArea}
                                   onChange={this.handleChange}
                                   aria-describedby="emailHelp"
                                   placeholder={'E-mail'}
                                   required
                                   value={this.state.email}/>
                            <textarea
                                id="test-mailing"
                                name="message"
                                className={styles.messageArea}
                                onChange={this.handleChange}
                                placeholder="Type your message"
                                required
                                value={this.state.message}
                            />

                            <button className={styles.btnSubmit} type="button" value="Submit" onClick={this.handleSubmit}>Send</button>
                            {/*<input type="button" value="Submit" className={styles.btnSubmit}*/}
                            {/*       onClick={this.handleSubmit}/>*/}
                        </form>
                    </div>
                </Fade>
            </div>
        );
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // this.setState({feedback: event.target.value,
        // name: event.target.value,
        // email: event.target.value})
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        const templateId = 'template_H9he4tAF';

        this.sendMessage(templateId, {
            message_html: this.state.message,
            from_name: this.state.name,
            reply_to: this.state.email
        })
    }

    sendMessage(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!');
            this.resetForm();
        })
        // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
}

export default Contacts;
