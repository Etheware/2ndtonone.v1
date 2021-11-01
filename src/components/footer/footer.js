
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
        2nd to None PT | San Marcos, CA
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.yelp.com/map/2nd-to-none-physical-therapy-san-marcos-2"><FaAddressBook/> Our Address: 737 Windy Point Dr Ste H & I San Marcos, CA 92069</FooterLink>
            <FooterLink href=""><MdPhoneIphone/>Phone Number:  (760)-759-3494</FooterLink>
            <FooterLink href="#"><MdEmail/>Email: rick.chavez@2ndtononept.com</FooterLink>
          </Column>
          <Column>
            <Heading>For You</Heading>
            <FooterLink id="resources">Resources</FooterLink>
            <FooterLink href="https://pteverywhere.com/">PT Everywhere</FooterLink>
            <FooterLink href="">Self-Schedule</FooterLink>
            <FooterLink href="https://pteverywhere.com/PtE/s/2ndtonone/register">Register</FooterLink>
          </Column>
          <Column>
            <Heading>Find Us</Heading>
            <FooterLink href="https://www.instagram.com/2ndtononept/">Instagram</FooterLink>
            <FooterLink href="https://www.yelp.com/biz/2nd-to-none-physical-therapy-san-marcos-2">Yelp</FooterLink>
            <FooterLink href="https://www.instagram.com/rick_b_chavez/">Follow Dr. Rick on IG</FooterLink>
            <FooterLink href="https://www.yelp.com/map/2nd-to-none-physical-therapy-san-marcos-2">Get Directions</FooterLink>
          </Column>
          <Column>
            <Heading>More Links</Heading>
            <FooterLink href="https://www.linkedin.com/in/rick-b-chavez">
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
            <p>Interest-Based Copyright© 2022, 2ndtonone.com, and its affiliates.</p>
          </BoxP>
        </BottomBox>
      </Container>
    </Box>
  );
};
export default FooterBox;