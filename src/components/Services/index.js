import React from "react";
import Icon1 from "../../images/Icon1.png";
import Icon2 from "../../images/Icon1.png";
import Icon3 from "../../images/Icon1.png";
import {
  ServicesCard,
  ServicesContainer,
  ServicesP,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Gallery</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>OWEN ANJING</ServicesH2>
          <ServicesP>NGEREPOTIN</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>PEDANG SHADAM</ServicesH2>
          <ServicesP>sword and sandal</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>SI SHADAM</ServicesH2>
          <ServicesP>BIKIN PEDANG</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
