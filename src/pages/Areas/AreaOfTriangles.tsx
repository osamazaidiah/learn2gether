import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../../utils/inlineStyles";
import { Button, Typography } from "@mui/material";

import ColumnStack from "../../components/ColumnStack";
import RowStack from "../../components/RowStack";
import HiddenSolutionComponent from "../../components/HiddenSolutionComponent";
import { StepNavigator } from "../../components/StepNavigator";
import ImageViewer from "../../components/ImageViewer";

export const AreaOfTriangles: React.FC = () => {
  const numberOfSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ColumnStack>
      <Typography variant="h6" color="primary" fontWeight={600}>
        Triangles: Step {currentStep} of {numberOfSteps}
      </Typography>

      {/* Formulas */}
      {currentStep === 1 && (
        <div>
          <Typography>
            Two formulas for finding the area of a triangle are a must:
          </Typography>

          <RowStack>
            <ColumnStack>
              <ImageViewer
                maxWidth={200}
                imageDescription="Area of triangle: base and height"
              />
              <ImageViewer
                maxWidth={200}
                imageDescription="Area of triangle: two sides and an angle"
              />
            </ColumnStack>
            <ImageViewer imageDescription="triangle for areas" />
          </RowStack>
        </div>
      )}

      {/* Example 1 */}
      {currentStep === 2 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Example:
          </Typography>
          <ImageViewer imageDescription="Area of triangle: example1-image" />
          <ImageViewer imageDescription="Area of triangle: example1-problem" />
        </ColumnStack>
      )}

      {/* Exercises - Easy */}
      {currentStep === 3 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Exercises:
          </Typography>
          <ImageViewer
            minWidth={500}
            imageDescription="Area of triangle: exer01"
          />
          <HiddenSolutionComponent>
            <Typography>14.8 cm</Typography>
          </HiddenSolutionComponent>
        </ColumnStack>
      )}

      {/* Exercises - Medium */}
      {currentStep === 4 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Exercises:
          </Typography>
          <ImageViewer
            minWidth={500}
            imageDescription="Area of triangle: exer02"
          />
          <HiddenSolutionComponent>
            <Typography>Q5) 241.3 cm</Typography>
            <Typography>Q6) 346.4 cm</Typography>
          </HiddenSolutionComponent>
        </ColumnStack>
      )}

      {/* Exercises - Challenging */}
      {currentStep === 5 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Exercises:
          </Typography>
          <ImageViewer
            minWidth={500}
            imageDescription="Area of triangle: exer03"
          />
          <HiddenSolutionComponent>
            <Typography>Q1) 34 cm</Typography>
            <Typography>Q2) 8.26 cm</Typography>
          </HiddenSolutionComponent>
        </ColumnStack>
      )}

      <StepNavigator
        numberOfSteps={5}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        showNextAndPrev={true}
        style={{ width: "100%" }}
      />
    </ColumnStack>
  );
};
