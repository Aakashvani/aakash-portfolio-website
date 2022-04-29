import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

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
  MadeBy,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <Link href="/">
            <span style={{ color: "#FFAB91", fontSize: "1.6rem" }}>
              <AiOutlineArrowUp />
              Home
            </span>
          </Link>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>+918210015931</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>tech.aku17@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <CompanyContainer>
        <Link href="/">
          <span style={{ color: "#FFAB91", fontSize: "1.6rem" }}>
            <AiOutlineArrowUp />
            Home
          </span>
        </Link>
      </CompanyContainer>

      <br />

      <CompanyContainer>
        <LinkTitle>Call</LinkTitle>
        <LinkItem>+918210015931</LinkItem>
      </CompanyContainer>

      <CompanyContainer>
        <LinkTitle>Email</LinkTitle>
        <LinkItem>tech.aku17@gmail.com</LinkItem>
      </CompanyContainer>

      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Aakashvani" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/aakashvani17/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>

        <CompanyContainer>
          <Slogan>Made with ❣️ by Aakash Kumar</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <MadeBy>Made with ❣️ by Aakash Kumar</MadeBy>
    </FooterWrapper>
  );
};

export default Footer;
