import styled from "styled-components";

export const DeliveryDetailsWrapper = styled.div`
  position: relative;
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  padding-top: 30px;
  cursor: pointer;
`;

export const LeftIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const BackTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const HeadingDelivery = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
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
  margin-top: -40px;
`;

export const CheckboxDropshipper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

export const DropshipperInput = styled.input`
  margin-right: 10px;
`;

export const DropshipperTitle = styled.label`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
