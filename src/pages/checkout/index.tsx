import Delivery from "./components/Delivery";
import Payment from "./components/Payment";
import Summary from "./components/Summary";
import { CheckoutLayoutWrapper } from "./styles";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../stores/useStoreCheckout";

export default function CheckoutPage() {
  // store
  const { checkoutData } = useStoreCheckout(
    (state) => ({
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const checkoutStep = checkoutData.checkoutStep;

  return (
    <main className="container">
      <CheckoutLayoutWrapper>
        {checkoutStep === "delivery" ? (
          <Delivery />
        ) : checkoutStep === "payment" ? (
          <Payment />
        ) : (
          <Summary />
        )}
      </CheckoutLayoutWrapper>
    </main>
  );
}
