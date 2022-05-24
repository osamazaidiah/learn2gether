import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../utils/inlineStyles";

import ColumnStack from "../components/ColumnStack";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { Button, Typography } from "@mui/material";

type Props = {
  numberOfSteps: number;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  titles?: string[];
  showNextAndPrev?: boolean;
};

export const StepNavigator = ({
  numberOfSteps,
  currentStep,
  setCurrentStep,
  titles = [],
  showNextAndPrev = false
}: Props) => {
  const stepsArray: unknown[] = new Array(numberOfSteps).fill(null);
  return (
    <div style={{ ...styles.columnFlexTight, width: "100%" }}>
      <div
        style={{
          ...styles.rowFlexSpaceBetween,
          width: "100%",
          flexWrap: "wrap"
        }}
      >
        {stepsArray.map((item, index) => (
          <Button
            disableElevation
            key={"step" + index}
            variant="contained"
            color={index + 1 <= currentStep ? "primary" : "inherit"}
            style={{
              flex: 1,
              minWidth: "50px"
            }}
            onClick={() => setCurrentStep(index + 1)}
          >
            <Typography variant="subtitle2" fontSize={12} fontWeight={600}>
              {titles[index] ? titles[index] : index + 1}
            </Typography>
          </Button>
        ))}
      </div>

      {showNextAndPrev && (
        <div
          style={{
            ...styles.rowFlexSpaceBetween,
            width: "100%"
          }}
        >
          <Button
            variant="contained"
            disabled={currentStep <= 1}
            style={{
              maxWidth: "100px"
            }}
            onClick={() => setCurrentStep((pre) => (pre > 1 ? pre - 1 : pre))}
          >
            <Typography variant="subtitle2" fontSize={11} fontWeight={500}>
              Previous
            </Typography>
          </Button>
          <Button
            variant="contained"
            disabled={currentStep >= numberOfSteps}
            style={{
              maxWidth: "100px"
            }}
            onClick={() =>
              setCurrentStep((pre) => (pre < numberOfSteps ? pre + 1 : pre))
            }
          >
            <Typography variant="subtitle2" fontSize={11} fontWeight={600}>
              Next
            </Typography>
          </Button>
        </div>
      )}
    </div>
  );
};
