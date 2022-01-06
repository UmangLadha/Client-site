import React from "react";
import "../App.css";

function Contact() {
    return (
        <div> 
            <footer className="footer">
                <h1>CONTACT</h1>
                <div className="cards">
                    <div className="card">
                        <p>49,shankar colony</p>
                        <p>jaipur, Rajasthan,302039</p>
                        <span>_____</span>
                        <p>Tel: 7597226305</p>
                        <p>Email: umangladha02@gmail.com</p>
                        <ul className="list-non-bullet" >
                            <li className="list-inline"><a className="toplinks" href="http//:#"><i className="fa fa instagram">I</i></a></li>
                            <li className="list-inline"><a className="toplinks" href="http//:#"><i className="fa fa facebook">F</i></a></li>
                            <li className="list-inline"><a className="toplinks" href="http//:#"><i className="fa fa gmail">G</i></a></li>
                        </ul>

                    </div>

                    <div className="card">
                        <p>Opening hours</p>
                        <span>_____</span>
                        <p>Mon-Fri: 9AM-8PM</p>
                        <p>Saturday: 9AM-7PM</p>
                        <p>Sunday: 10AM-6PM</p>
                    </div>

                </div>
            </footer>
        </div>
    )
}
export default Contact;