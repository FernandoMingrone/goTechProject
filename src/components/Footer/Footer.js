import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import {FooterContainer,
        FooterSubscription,
        FooterSubHeading,
        FooterSubText,
        Form,
        FormInput,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        FooterLinkTittle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcon,
        WebsiteRights,
        SocialIcons,
        SocialIconLink } from "./Footer.elements";
import { Button } from "../../globalStyles"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive memebership to receive the latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsuscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTittle>About Us</FooterLinkTittle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terns if Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                    <FooterLinkTittle>Contact Us</FooterLinkTittle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terns if Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                    <FooterLinkTittle>Videos</FooterLinkTittle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terns if Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                    <FooterLinkTittle>Social Media</FooterLinkTittle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terns if Services</FooterLink>
                    </FooterLinksItems> 
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon>
                            goTech
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights>goTech © 2021 </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer