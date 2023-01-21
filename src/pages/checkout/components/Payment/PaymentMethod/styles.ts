import styled from "styled-components";

export const PaymentMethodWrapper = styled.div`
  position: relative;
  margin-top: 60px;
`;

export const TitleWrapper = styled.div`
  width: fit-content;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  font-family: "Montserrat" serif;
  line-height: 44px;
  color: #ff8a00;
`;

export const TitleBorderBottom = styled.div`
  border-bottom: 8px solid #eeeeee;
  margin-top: -35px;
  width: 300px;
`;

export const PaymentList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PaymentItem = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  border: 1px solid #cccccc;
  padding: 11px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const PaymentItemActive = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  background: rgba(27, 217, 123, 0.1);
  border: 2px solid #1bd97b;
  padding: 11px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const PaymentItemWallet = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  border: 1px solid #cccccc;
  padding: 11px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const PaymentItemActiveWallet = styled.div`
  width: 180px;
  background: rgba(27, 217, 123, 0.1);
  border: 2px solid #1bd97b;
  padding: 11px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const PaymentItemTitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 15.73px;
`;

export const PaymentItemValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
`;
