import React, { useState } from "react";

import {
  ShipmentWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  ShipmentList,
  ShipmentItem,
  ShipmentItemTitle,
  ShipmentItemValue,
} from "./styles";

import shallow from "zustand/shallow";
import useStoreCheckout from "../../../../../stores/useStoreCheckout";
import { CHECKOUT_SHIPPING_FEE } from "../../../../../constants";

import { currencyFormatter } from "../../../../../helpers";

type TPropsShipment = {
  shipmentData: any;
};

const Shipment = ({ shipmentData }: TPropsShipment) => {
  const { updateCheckoutData, checkoutData } = useStoreCheckout(
    (state) => ({
      updateCheckoutData: state.updateCheckoutData,
      checkoutData: state.checkoutData,
    }),
    shallow
  );

  const [active, setActive] = useState(checkoutData.summary.id);

  const shipmentActive = (data: any) => {
    updateCheckoutData(CHECKOUT_SHIPPING_FEE, {
      data: data,
      dropShippingFee: checkoutData.dropShippingFee,
    });
    setActive(data?.id);
  };

  return (
    <ShipmentWrapper>
      <TitleWrapper>
        <Title>Shipment</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <ShipmentList>
        {shipmentData.map((data: any, i: number) => (
          <ShipmentItem
            key={data.id}
            active={active === data.id}
            onClick={() => shipmentActive(data)}
          >
            <ShipmentItemTitle>{data.shipmentName}</ShipmentItemTitle>
            <ShipmentItemValue>
              {currencyFormatter(data.cost)}
            </ShipmentItemValue>
          </ShipmentItem>
        ))}
      </ShipmentList>
    </ShipmentWrapper>
  );
};

export default Shipment;
