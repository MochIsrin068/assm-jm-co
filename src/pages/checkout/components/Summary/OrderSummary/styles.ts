import styled from "styled-components";

export const OrderSummaryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  width: fit-content;
  margin-top: 24px;
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

export const OrderId = styled.div`
  margin-top: 26px;
`;

export const OrderIdTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;

export const OrderIdDescription = styled.div`
  margin-top: 9px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.6;
`;

export const HomepageLink = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const BackIcon = styled.span`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  opacity: 0.6;
`;

export const HomepageLinkTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
`;
