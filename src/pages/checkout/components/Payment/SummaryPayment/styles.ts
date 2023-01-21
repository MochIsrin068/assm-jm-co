import styled from "styled-components";

export const SummaryWrapper = styled.div`
  padding: 30px 0 20px 20px;
  border-left: 2px solid #fffae6;

  @media only screen and (max-width: 600px) {
    border: none;
    padding: 30px 0 20px 0;
  }
`;

export const Title = styled.h2`
    font-size:24px
    font-weight:700;
    color:#FF8A00
`;

export const TotalProduct = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #000;
  padding-bottom: 21px;
`;

export const TotalProductBottom = styled.div`
  border-bottom: 1px solid #d8d8d8;
  width: 80px;
`;

export const DeliveryEstimation = styled.div`
  margin-top: 21px;
`;

export const Label = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.94px;
`;

export const Estimation = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.36px;
  color: #1bd97b;
`;

export const TotalDelivery = styled.div`
  margin-top: 92px;
`;

export const TotalDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TotalTitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.94px;
`;

export const TotalValue = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16.94px;
`;

export const TotalPayment = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalPaymentTitle = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.26px;
  color: #ff8a00;
`;

export const TotalPaymentValue = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.26px;
  color: #ff8a00;
`;
