import useCheckout from "../../../../../hooks/useCheckout";

import {
  SummaryWrapper,
  Title,
  TotalProduct,
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

type TPropsSummery = {
  isCheckedDropshipper: boolean;
};

const SummaryDelivery = ({ isCheckedDropshipper }: TPropsSummery) => {
  const { addDeliveryDetails } = useCheckout();
  const { checkoutData } = useStoreCheckout(
    (state) => ({
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const costOfGood = 500000;
  const totalPayment = costOfGood + checkoutData.dropShippingFee;

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{currencyFormatter(500000)}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>
            {currencyFormatter(checkoutData.dropShippingFee)}
          </TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>
            {" "}
            {currencyFormatter(totalPayment)}
          </TotalPaymentValue>
        </TotalPayment>
        <Button
          title="Continue to Payment"
          onClick={() => addDeliveryDetails(isCheckedDropshipper)}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryDelivery;
