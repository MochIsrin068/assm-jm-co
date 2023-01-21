import React, { useState } from "react";
import Steps from "../../../../components/Steps";

import {
  DeliveryDetailsWrapper,
  HeadingDelivery,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  CheckboxDropshipper,
  DropshipperTitle,
  Back,
  BackTitle,
  LeftIcon,
  ContentWrapper,
  Content,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Form from "./Form";
import Summary from "./Summery";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../stores/useStoreCheckout";
import { CHECKOUT_DROPSHIPPING_FEE } from "../../../../constants";

export default function Delivery() {
  const { updateCheckoutData, checkoutData } = useStoreCheckout(
    (state) => ({
      updateCheckoutData: state.updateCheckoutData,
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const [checked, setChecked] = useState(
    checkoutData.dropShippingFee ? true : false
  );
  const handleChange = () => {
    setChecked(!checked);

    if (!checked) {
      updateCheckoutData(CHECKOUT_DROPSHIPPING_FEE, 5900);
    } else {
      updateCheckoutData(CHECKOUT_DROPSHIPPING_FEE, 0);
    }
  };

  return (
    <DeliveryDetailsWrapper>
      {/* Steps */}
      <Steps currentStep={1} />

      <Back>
        <LeftIcon>
          <ArrowBackIcon />
        </LeftIcon>
        <BackTitle>Back to cart</BackTitle>
      </Back>

      <ContentWrapper>
        <Content>
          <HeadingDelivery>
            <TitleWrapper>
              <Title>Delivery details</Title>
              <TitleBorderBottom />
            </TitleWrapper>
            <CheckboxDropshipper>
              <div className="checkbox bounce">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={checked}
                />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </div>
              <DropshipperTitle>Send as dropshipper</DropshipperTitle>
            </CheckboxDropshipper>
          </HeadingDelivery>
          <Form />
        </Content>
        <Summary isCheckedDropshipper={checked}/>
      </ContentWrapper>
    </DeliveryDetailsWrapper>
  );
}
