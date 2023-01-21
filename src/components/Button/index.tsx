import React from "react";

import { Button } from "./styles";

type TPropsButton = {
  title: string;
  onClick: any;
  disabled?: boolean;
};

export default function ButtonComponent({
  title,
  onClick,
  disabled,
}: TPropsButton) {
  return <Button onClick={!disabled ? onClick : () => {}}>{title}</Button>;
}
