import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="">Story</FooterLink>
              <FooterLink to="">Story</FooterLink>
              <FooterLink to="">Story</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Artist</FooterLinkTitle>
              <FooterLink to="">Sadam</FooterLink>
              <FooterLink to="">Sadam</FooterLink>
              <FooterLink to="">Sadam</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="" onClick={toggleHome}>
              EIEN
            </SocialLogo>
            <WebsiteRights>
              EIEN {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="" target="_blank" aria-label="Instagram">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
