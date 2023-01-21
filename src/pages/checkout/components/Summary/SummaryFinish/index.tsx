import { currencyFormatter } from "../../../../../helpers";

import {
  SummaryWrapper,
  Title,
  TotalProduct,
  TotalProductBottom,
  DeliveryEstimation,
  Label,
  Estimation,
  TotalDelivery,
  TotalDetail,
  TotalTitle,
  TotalValue,
  TotalPayment,
  TotalPaymentTitle,
  TotalPaymentValue,
} from "./styles";
import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../../stores/useStoreCheckout";

const SummaryFinish = () => {
  const { checkoutData } = useStoreCheckout(
    (state) => ({
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const costOfGood = 500000;

  const totalPayment =
    costOfGood +
    Number(checkoutData.dropShippingFee) +
    Number(checkoutData.summary.cost);

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalProductBottom />

      <DeliveryEstimation>
        <Label>Delivery estimation</Label>
        <Estimation>
          {checkoutData.summary.hasOwnProperty("cost")
            ? `
          ${checkoutData.summary.estimate} by ${checkoutData.summary.shipmentName}
          `
            : "Please Choose Shipment!"}
        </Estimation>
      </DeliveryEstimation>

      <DeliveryEstimation>
        <Label>Payment method</Label>
        <Estimation>Bank Transfer</Estimation>
      </DeliveryEstimation>

      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{currencyFormatter(500000)}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>
            <TotalValue>
              {currencyFormatter(checkoutData.dropShippingFee)}
            </TotalValue>
          </TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>
            <b>{checkoutData.summary.shipmentName}</b> shipment
          </TotalTitle>
          <TotalValue>
            {checkoutData.summary.hasOwnProperty("cost")
              ? currencyFormatter(checkoutData.summary.cost)
              : 0}
          </TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>
            {checkoutData.summary.hasOwnProperty("cost")
              ? currencyFormatter(totalPayment)
              : currencyFormatter(costOfGood) +
                currencyFormatter(checkoutData.dropShippingFee)}
          </TotalPaymentValue>
        </TotalPayment>
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryFinish;
