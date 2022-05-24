import { Button, Divider, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ColumnStack from "../components/ColumnStack";
import { styles } from "../utils/inlineStyles";

type Props = {
  numberOfSteps: number;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  titles?: string[];
  showNextAndPrev?: boolean;
};

export const TopicSelector = ({
  numberOfSteps,
  currentStep,
  setCurrentStep,
  titles = []
}: Props) => {
  const stepsArray: unknown[] = new Array(numberOfSteps).fill(null);

  return (
    <ColumnStack style={{ gap: "0px" }}>
      <div
        style={{
          ...styles.rowFlexSpaceBetween,
          width: "100%",
          flexWrap: "wrap",
          borderBlockEnd: "1px solid darkgray"
        }}
      >
        {stepsArray.map((item, index) => (
          <Button
            key={"step" + index}
            variant="text"
            color={index + 1 === currentStep ? "primary" : "inherit"}
            style={{
              flex: 1,
              minWidth: "50px"
            }}
            onClick={() => setCurrentStep(index + 1)}
          >
            {titles[index] ? titles[index] : index + 1}
          </Button>
        ))}
      </div>
    </ColumnStack>
  );
};
