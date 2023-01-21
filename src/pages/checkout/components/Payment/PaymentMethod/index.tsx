import {
  PaymentMethodWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  PaymentList,
  PaymentItem,
  PaymentItemActive,
  PaymentItemTitle,
  PaymentItemValue,
  PaymentItemWallet,
  PaymentItemActiveWallet,
} from "./styles";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../../stores/useStoreCheckout";

const PaymentMethod = () => {
  const {
    isBankTransfer,
    isEWallet,
    isVirtualAccount,
    eWalletActive,
    bankTransferActive,
    virtualAccountActive,
  } = useStoreCheckout(
    (state) => ({
      isEWallet: state.isEWallet,
      isBankTransfer: state.isBankTransfer,
      isVirtualAccount: state.isVirtualAccount,
      eWalletActive: state.eWalletActive,
      bankTransferActive: state.bankTransferActive,
      virtualAccountActive: state.virtualAccountActive,
    }),
    shallow
  );

  return (
    <PaymentMethodWrapper>
      <TitleWrapper>
        <Title>Payment</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <PaymentList>
        {isEWallet ? (
          <PaymentItemActiveWallet onClick={eWalletActive}>
            <PaymentItemTitle>e-Wallet</PaymentItemTitle>
            <PaymentItemValue>1,500,000 left</PaymentItemValue>
          </PaymentItemActiveWallet>
        ) : (
          <PaymentItemWallet onClick={eWalletActive}>
            <PaymentItemTitle>e-Wallet</PaymentItemTitle>
            <PaymentItemValue>1,500,000 left</PaymentItemValue>
          </PaymentItemWallet>
        )}

        {isBankTransfer ? (
          <PaymentItemActive onClick={bankTransferActive}>
            <PaymentItemTitle>Bank Transfer</PaymentItemTitle>
          </PaymentItemActive>
        ) : (
          <PaymentItem onClick={bankTransferActive}>
            <PaymentItemTitle>Bank Transfer</PaymentItemTitle>
          </PaymentItem>
        )}

        {isVirtualAccount ? (
          <PaymentItemActive onClick={virtualAccountActive}>
            <PaymentItemTitle>Virtual Account</PaymentItemTitle>
          </PaymentItemActive>
        ) : (
          <PaymentItem onClick={virtualAccountActive}>
            <PaymentItemTitle>Virtual Account</PaymentItemTitle>
          </PaymentItem>
        )}
      </PaymentList>
    </PaymentMethodWrapper>
  );
};

export default PaymentMethod;
