import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin,AiOutlineArrowUp } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <Link href="/">
          <span style={{color: "#FFAB91", fontSize:"1.6rem"}}><AiOutlineArrowUp/>Home</span>
        </Link>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>+918210015931</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>tech.aku17@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with ❣️ by Aakash Kumar</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Aakashvani" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/aakashvani17/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
