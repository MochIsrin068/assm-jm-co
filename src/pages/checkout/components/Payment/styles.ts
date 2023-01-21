import styled from "styled-components";

export const PaymentWrapper = styled.div`
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
