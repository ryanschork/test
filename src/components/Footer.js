import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        {/* <img src={logo} alt="Logo" /> */}
                        <h1 className="Logo">Ryan Schork</h1>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            {/* <a href=""><img src={navIcon3} /></a> */}
                        </div>
                        <p>Copyright 2024. All Rights Reserved by Ryan Schork.</p>
                        <p>Email: schorktr@vcu.edu</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}