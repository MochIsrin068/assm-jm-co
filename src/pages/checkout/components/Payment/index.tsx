import SummaryPayment from "./SummaryPayment";
import Shipment from "./Shipment";
import PaymentMethod from "./PaymentMethod";

import {
  PaymentWrapper,
  BackTitle,
  LeftIcon,
  ContentWrapper,
  Content,
  Back,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../stores/useStoreCheckout";
import { CHECKOUT_BACK_DELIVERY } from "../../../../constants";
import Steps from "../../../../components/Steps";

const Payment = () => {
  const { updateCheckoutData, checkoutData } = useStoreCheckout(
    (state) => ({
      updateCheckoutData: state.updateCheckoutData,
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const backToDelivery = () => {
    updateCheckoutData(CHECKOUT_BACK_DELIVERY);
  };

  return (
    <PaymentWrapper>
      <Steps currentStep={2} />

      <Back onClick={backToDelivery}>
        <LeftIcon>
          <ArrowBackIcon />
        </LeftIcon>
        <BackTitle>Back to delivery</BackTitle>
      </Back>

      <ContentWrapper>
        <Content>
          <Shipment shipmentData={checkoutData.shipmentData} />
          <PaymentMethod />
        </Content>
        <SummaryPayment />
      </ContentWrapper>
    </PaymentWrapper>
  );
};

export default Payment;
