import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Sai Kiran <br />
          And I'm a junior web developer
        </SectionTitle>
        <SectionText>
          Currently looking for internship & part time job opportunities.
        </SectionText>
        <Button onClick={props.handleClick}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;