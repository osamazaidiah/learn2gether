import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../utils/inlineStyles";
import { Button, Typography } from "@mui/material";

import ColumnStack from "../components/ColumnStack";
import RowStack from "../components/RowStack";
import HiddenSolutionComponent from "../components/HiddenSolutionComponent";
import { StepNavigator } from "../components/StepNavigator";
import ImageViewer from "../components/ImageViewer";

export const TopicPage: React.FC = () => {
  const numberOfSteps = 10;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ColumnStack>
      <Typography variant="h4" color="primary">
        Length, area and volume
      </Typography>

      <StepNavigator
        numberOfSteps={10}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      {/* Formulas */}
      {currentStep === 1 && (
        <div>
          <Typography variant="h6">Triangles: Areas</Typography>
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
          <ImageViewer imageDescription="Area of triangle: example1-image" />
          <ImageViewer imageDescription="Area of triangle: example1-problem" />
        </ColumnStack>
      )}

      {/* Exercises - Easy */}
      {currentStep === 3 && (
        <ColumnStack>
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
    </ColumnStack>
  );
};
