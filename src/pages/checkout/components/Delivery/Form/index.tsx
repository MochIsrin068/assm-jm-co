import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormDelivery,
  Form,
  FormLeft,
  FormRight,
  FormWrapper,
  FormInput,
  FormTextarea,
  FormTextAreaCount,
} from "./styles";

const FormDeliveryDetails = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const initialValue = {
    deliveryAddress: "",
  };

  const [formValue, setFormValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <FormDelivery>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLeft>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "*Please enter valid email",
                },
              })}
            />
          </FormWrapper>

          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: {
                  value: /^0\d{9,12}/g,
                  message: "*Please enter valid phone number",
                },
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
              <p>Max length exceeded</p>
            )}
          </FormWrapper>

          <FormWrapper>
            <FormTextarea
              autoComplete="off"
              placeholder="Delivery Address"
              maxLength={120}
              name="deliveryAddress"
              onChange={handleChange}
              value={formValue.deliveryAddress}
            />
            <FormTextAreaCount>
              {120 - formValue.deliveryAddress.length} Characters Left
            </FormTextAreaCount>
          </FormWrapper>
        </FormLeft>
        <FormRight>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="text"
              placeholder="Dropshipper name"
              {...register("dropshipperName")}
            />
          </FormWrapper>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="text"
              placeholder="Dropshipper phone number"
              {...register("dropshipperPhoneNumber")}
            />
          </FormWrapper>
        </FormRight>
      </Form>
    </FormDelivery>
  );
};

export default FormDeliveryDetails;
