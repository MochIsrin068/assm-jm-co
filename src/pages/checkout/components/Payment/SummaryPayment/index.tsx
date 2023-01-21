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

import Button from "../../../../../components/Button";
import { currencyFormatter } from "../../../../../helpers";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../../stores/useStoreCheckout";

import useCheckout from "../../../../../hooks/useCheckout";

const SummaryPayment = () => {
  const { checkoutData, isBankTransfer, isEWallet, isVirtualAccount } =
    useStoreCheckout(
      (state) => ({
        checkoutData: state.checkoutData,
        isEWallet: state.isEWallet,
        isBankTransfer: state.isBankTransfer,
        isVirtualAccount: state.isVirtualAccount,
      }),
      shallow
    );

  const { addPayment } = useCheckout();

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

      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>500,000</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>
            {currencyFormatter(checkoutData.dropShippingFee)}
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
            {currencyFormatter(totalPayment)}
          </TotalPaymentValue>
        </TotalPayment>

        <Button
          title={`Payment with ${
            (isEWallet && "e-Wallet") ||
            (isBankTransfer && "Bank Transfer") ||
            (isVirtualAccount && "Virtual Account")
          }`}
          onClick={() => addPayment({summery: checkoutData.summary, dropShippingFee: checkoutData.dropShippingFee})}
          disabled={!checkoutData.summary.hasOwnProperty("id")}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryPayment;
