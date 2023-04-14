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
        <Button onClick={() => { window.location.href = "https://drive.google.com/file/d/1J-ujodnWIm2686XLjAQ9fKvjyd-kwP0U/view?usp=share_link"; } }>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
