import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0 auto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  height: 60px;
  border: none;
  background: #ff8a00;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
