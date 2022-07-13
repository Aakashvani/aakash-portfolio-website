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
      <a href="https://drive.google.com/drive/folders/1yRZLb_OF0D0uwrS_k0z-wVAOn7xJuHin?usp=sharing" target="_blank">
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
