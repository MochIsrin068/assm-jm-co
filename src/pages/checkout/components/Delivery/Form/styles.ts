import styled from "styled-components";

export const FormDelivery = styled.div`
  margin-top: 36px;
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormLeft = styled.div``;

export const FormRight = styled.div``;

export const FormWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border: 1px solid #cccccc;
  padding: 20px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  font-weight: 300;
  color: #000000;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  border: 1px solid #cccccc;
  padding: 20px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  font-weight: 300;
  color: #000000;
`;

export const FormTextAreaCount = styled.p`
  margin-top: 10px;
  color: #1bd97b;
  font-size: 14px;
  font-weight: 500;
`;
