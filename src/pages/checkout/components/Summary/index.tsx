import SummaryFinish from "./SummaryFinish";
import OrderSummary from "./OrderSummary";

import { FinishWrapper, Content } from "./styles";

import Steps from "../../../../components/Steps";

const Summary = () => {
  return (
    <FinishWrapper>
      <Steps currentStep={3} />

      <Content>
        <OrderSummary></OrderSummary>
        <SummaryFinish />
      </Content>
    </FinishWrapper>
  );
};

export default Summary;
