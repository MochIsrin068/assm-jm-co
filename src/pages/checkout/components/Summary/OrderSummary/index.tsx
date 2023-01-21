import React from "react";

import {
  OrderSummaryWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  OrderId,
  OrderIdTitle,
  OrderIdDescription,
  HomepageLink,
  BackIcon,
  HomepageLinkTitle,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../../stores/useStoreCheckout";

import useCheckout from "../../../../../hooks/useCheckout";

const OrderSummary = () => {
  const { checkoutData } = useStoreCheckout(
    (state) => ({
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const { finishCheckout } = useCheckout();

  return (
    <OrderSummaryWrapper>
      <TitleWrapper>
        <Title>Thank you</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <OrderId>
        <OrderIdTitle>Order ID : {checkoutData.order}</OrderIdTitle>
        <OrderIdDescription>
          Your order will be delivered today with{" "}
          {checkoutData.summary.shipmentName}
        </OrderIdDescription>
      </OrderId>

      <HomepageLink onClick={finishCheckout}>
        <BackIcon>
          <ArrowBackIcon />
        </BackIcon>
        <HomepageLinkTitle>Go to homepage</HomepageLinkTitle>
      </HomepageLink>
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
