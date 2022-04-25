import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There! <br></br>I am Aakash Kumar <br></br>
      </SectionTitle>
      <SectionText>
        I am an aspiring Full Stack Developer <br></br> based in India.
      </SectionText>

      {/*<--- button for resume download link ---> */}
      <a href="https://drive.google.com/file/d/1B_8uUNznB-X6E7Hd84IvuZlSkZlcUVKC/view?usp=sharing" target="_blank">
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
