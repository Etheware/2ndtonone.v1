
import React from "react";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  ButtonLink,
  Heading,
  BottomBox,
  BoxP,
  LinkBox
} from "./footerStyles";
  
const FooterBox = () => {
  return (
    <Box>
      <h1 style={{ color: "gray", 
        textAlign: "center", 
        marginBottom: "80px" }}>
        2nd To Everyone PT | San Farcos, CA
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.yelp.com"><FaAddressBook/> Our Address: 123 French Fry Dr Ste 69 & I San Farcos, CA 91100</FooterLink>
            <FooterLink href=""><MdPhoneIphone/>Phone Number:  (000)-123-4567</FooterLink>
            <FooterLink href="#"><MdEmail/>Email: solutions@etheware.com</FooterLink>
          </Column>
          <Column>
            <Heading>For You</Heading>
            <FooterLink id="resources">Resources</FooterLink>
            <FooterLink href="https://pteverywhere.com/">PT Everywhere</FooterLink>
            <FooterLink href="">Self-Schedule</FooterLink>
            <FooterLink href="https://twitter.com/">Register</FooterLink>
          </Column>
          <Column>
            <Heading>Find Us</Heading>
            <FooterLink href="https://www.instagram.com/ethewaresolutions/">Instagram</FooterLink>
            <FooterLink href="https://www.yelp.com">Yelp</FooterLink>
            <FooterLink href="https://www.instagram.com/ethewaresolutions/">Follow Dr. Gluteas Maximus on IG</FooterLink>
            <FooterLink href="https://www.instagram.com/ethewaresolutions/">Get Directions</FooterLink>
          </Column>
          <Column>
            <Heading>More Links</Heading>
            <FooterLink href="https://www.linkedin.com/in/etheware">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://crystal-signup.web.app/admin">
                <span style={{ marginLeft: "10px" }}>
                  Admin Page
                </span>
            </FooterLink>
            <FooterLink href="https://crystal-signup.web.app/">
                <span style={{ marginLeft: "10px" }}>
                Sign up for the Email list
                </span>
            </FooterLink>    
          </Column>        
        </Row>    
        <BottomBox>
          <LinkBox>
              <ButtonLink href="/insurance-policy">Why We Don't Accept Insurance</ButtonLink>     
            </LinkBox>
          <BoxP>
            <p>Interest-Based Copyright© 2023, etheware.com, and its affiliates.</p>
          </BoxP>
        </BottomBox>
      </Container>
    </Box>
  );
};
export default FooterBox;