import styled from "styled-components";

export const FinishWrapper = styled.div`
  position: relative;
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
  margin-top: -40px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
