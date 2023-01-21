import {
  StepCheckout,
  StepItem,
  StepNumber,
  StepTitle,
  RightIcon,
} from "./styles";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type TPropsSteps = {
  currentStep: number;
};

export default function Steps({ currentStep }: TPropsSteps) {
  return (
    <StepCheckout>
      <StepItem>
        <StepNumber active>1</StepNumber>
        <StepTitle active>Delivery</StepTitle>
      </StepItem>
      <RightIcon>
        <ArrowForwardIosIcon />
      </RightIcon>
      <StepItem>
        <StepNumber active={currentStep >= 2}>2</StepNumber>
        <StepTitle active={currentStep >= 2}>Payment</StepTitle>
      </StepItem>
      <RightIcon>
        <ArrowForwardIosIcon />
      </RightIcon>
      <StepItem>
        <StepNumber active={currentStep === 3}>3</StepNumber>
        <StepTitle active={currentStep === 3}>Finish</StepTitle>
      </StepItem>
    </StepCheckout>
  );
}
