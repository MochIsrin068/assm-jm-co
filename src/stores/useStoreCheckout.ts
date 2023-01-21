/* eslint-disable @typescript-eslint/no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";

import {
  CHECKOUT_REQUEST,
  CHECKOUT_DELIVERY_SUCCESS,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_FINISH_SUCCESS,
  CHECKOUT_BACK_DELIVERY,
  CHECKOUT_SHIPPING_FEE,
  CHECKOUT_DROPSHIPPING_FEE,
} from "../constants";

const initialStateCheckout = {
  isLoading: false,
  errorMessage: null,
  message: "",
  isError: false,
  checkoutStep: "delivery",
  summary: {
    id: "go-send",
    shipmentName: "Go-SEND",
    cost: 15000,
    estimate: "today",
  },
  dropShippingFee: 0,
  shipmentData: [
    {
      id: "go-send",
      shipmentName: "Go-SEND",
      cost: 15000,
      estimate: "today",
    },
    {
      id: "jne",
      shipmentName: "JNE",
      cost: 9000,
      estimate: "2 days",
    },
    {
      id: "p-courier",
      shipmentName: "Personal Courier",
      cost: 29000,
      estimate: "1 day",
    },
  ],
  order: "",
};

const initialStateUserData = {
  isLoading: false,
  errorMessage: null,
  message: "",
  isError: false,
  userData: {
    firstName: "Muh.",
    lastName: "Isrim",
    balance: "1500000",

    email: "",
    phoneNumber: "",
    address: "",
    dropShipperName: "",
    dropShipperNumber: "",
  },
};

const useStoreCheckout = create(
  persist(
    (set: any, get: any) => ({
      isEWallet: false,
      isBankTransfer: false,
      isVirtualAccount: false,

      eWalletActive: () => {
        set((state: any) => ({
          isEWallet: true,
          isBankTransfer: false,
          isVirtualAccount: false,
        }));
      },

      bankTransferActive: () => {
        set((state: any) => ({
          isEWallet: false,
          isBankTransfer: true,
          isVirtualAccount: false,
        }));
      },

      virtualAccountActive: () => {
        set((state: any) => ({
          isEWallet: false,
          isBankTransfer: false,
          isVirtualAccount: true,
        }));
      },

      checkoutData: initialStateCheckout,
      updateCheckoutData: (actionType: any, payload?: any) => {
        console.log("data store", initialStateCheckout, actionType, payload);
        let data = {};
        switch (actionType) {
          case CHECKOUT_REQUEST:
            data = {
              ...initialStateCheckout,
              isLoading: true,
              errorMessage: null,
              isError: false,
            };
            break;

          case CHECKOUT_DELIVERY_SUCCESS:
            data = {
              ...initialStateCheckout,
              isLoading: false,
              checkoutStep: "payment",
              dropShippingFee: payload,
            };
            break;

          case CHECKOUT_PAYMENT_SUCCESS:
            data = {
              ...initialStateCheckout,
              isLoading: false,
              checkoutStep: "finish",
              order: payload?.orderId,
              dropShippingFee: payload?.data?.dropShippingFee || "",
              summary: payload?.data?.summery || initialStateCheckout.summary,
            };
            break;

          case CHECKOUT_FINISH_SUCCESS:
            data = {
              ...initialStateCheckout,
              isLoading: false,
              checkoutStep: "delivery",
              summary: {},
              dropShippingFee: "",
            };
            break;

          case CHECKOUT_BACK_DELIVERY:
            data = {
              ...initialStateCheckout,
              isLoading: false,
              checkoutStep: "delivery",
            };
            break;

          case CHECKOUT_DROPSHIPPING_FEE:
            data = {
              ...initialStateCheckout,
              isLoading: false,
              dropShippingFee: payload,
            };
            break;

          case CHECKOUT_SHIPPING_FEE:
            data = {
              ...initialStateCheckout,
              summary: payload?.data,
              checkoutStep: "payment",
              dropShippingFee: payload?.dropShippingFee,
            };
            break;
          default:
            data = initialStateCheckout;
            break;
        }

        set((state: any) => ({ checkoutData: data }));
      },
      userData: initialStateUserData,
    }),
    { name: "checkout-data" }
  )
);

export default useStoreCheckout;
