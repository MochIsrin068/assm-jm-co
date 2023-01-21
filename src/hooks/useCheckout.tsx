import {
  CHECKOUT_REQUEST,
  CHECKOUT_DELIVERY_SUCCESS,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_FINISH_SUCCESS,
} from "../constants";

import shallow from "zustand/shallow";
import useStoreCheckout from "../stores/useStoreCheckout";

export default function useCheckout() {
  const { updateCheckoutData } = useStoreCheckout(
    (state) => ({
      checkoutData: state.checkoutData,
      updateCheckoutData: state.updateCheckoutData,
    }),
    shallow
  );

  const addDeliveryDetails = (isCheckedDropshipper: boolean) => {
    try {
      const data = isCheckedDropshipper ? 5900 : 0;
      updateCheckoutData(CHECKOUT_REQUEST);
      updateCheckoutData(CHECKOUT_DELIVERY_SUCCESS, data);
    } catch (e) {
      console.log(e);
    }
  };

  const addPayment = (data: any) => {
    const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    const orderId = [...Array(5)]
      .map((_) => charset[Math.floor(Math.random() * charset.length)])
      .join("")
      .toUpperCase();

    try {
      updateCheckoutData(CHECKOUT_REQUEST);
      updateCheckoutData(CHECKOUT_PAYMENT_SUCCESS, { orderId, data });
    } catch (e) {
      console.log(e);
    }
  };

  const finishCheckout = () => {
    try {
      updateCheckoutData(CHECKOUT_REQUEST);
      updateCheckoutData(CHECKOUT_FINISH_SUCCESS);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    addDeliveryDetails,
    addPayment,
    finishCheckout,
  };
}
