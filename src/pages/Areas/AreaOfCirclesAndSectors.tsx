import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../../utils/inlineStyles";
import { Button, Typography } from "@mui/material";

import ColumnStack from "../../components/ColumnStack";
import RowStack from "../../components/RowStack";
import HiddenSolutionComponent from "../../components/HiddenSolutionComponent";
import { StepNavigator } from "../../components/StepNavigator";
import ImageViewer from "../../components/ImageViewer";

export const AreaOfCirclesAndSectors: React.FC = () => {
  const numberOfSteps = 8;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ColumnStack>
      <Typography variant="h6" color="primary" fontWeight={600}>
        Circles and Sectors: Step {currentStep} of {numberOfSteps}
      </Typography>

      {/* Formulas */}
      {currentStep === 1 && (
        <ColumnStack style={{ alignItems: "flex-start" }}>
          <Typography>
            There are two central formulas to remember for circles:
          </Typography>

          <ImageViewer imageDescription="Circles:eq1" />
          <Typography>
            Remember that for circles the perimeter is called a circumference.
          </Typography>

          <ImageViewer imageDescription="Circles:part01" />
        </ColumnStack>
      )}

      {/* Example 1 */}
      {currentStep === 2 && (
        <ColumnStack>
          <ImageViewer imageDescription="Circles:part02" />
        </ColumnStack>
      )}

      {/* Exercises - Easy */}
      {currentStep === 3 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Exercise: Find the area and circumference of a circle with diameter
            10 cm.
          </Typography>

          <HiddenSolutionComponent>
            <ImageViewer imageDescription="Circles:part03" />
          </HiddenSolutionComponent>
        </ColumnStack>
      )}

      {/* Sectors 1 */}
      {currentStep === 4 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Sectors or Pizza Slices 🍕
          </Typography>
          <ImageViewer imageDescription="Circles:part04" />
          <Typography>
            * Taking a part of a circle leads us to sectors (like slices of
            pizza). 🍕 <br />* The most important thing to know about a sector
            is the angle it covers which can be given in degrees of radians.{" "}
            <br />* The larger the angle the sector takes the larger its ratio
            from the entire circle. <br />* We will need to find out three
            things about a sector: its area, its arc length, or its perimeter.{" "}
            <br />* The area of a sector is how much pizza is on it. <br />* The
            arc length of a sector is length of the crust. <br />* The perimeter
            is the arc length plus two radii.
          </Typography>
        </ColumnStack>
      )}

      {/* Sectors 2 */}
      {currentStep === 5 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Sectors or Pizza Slices 🍕
          </Typography>
          <ImageViewer imageDescription="Circles:eq2" />
          <ImageViewer imageDescription="Circles:part05" />
        </ColumnStack>
      )}

      {/* Sectors 3 */}
      {currentStep === 6 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Sectors or Pizza Slices 🍕
          </Typography>
          <Typography>
            Find the area, arc length and the perimeter of a sector with radius
            4cm and an angle of 90 degrees.
          </Typography>
          <HiddenSolutionComponent>
            <ImageViewer imageDescription="Circles:part06" />
          </HiddenSolutionComponent>
        </ColumnStack>
      )}

      {/* Sectors 4 */}
      {currentStep === 7 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Composites of Sectors and Other Shapes
          </Typography>
          <ImageViewer imageDescription="Circles:part07" />
        </ColumnStack>
      )}

      {/* Sectors 5 */}
      {currentStep === 8 && (
        <ColumnStack>
          <Typography variant="h6" style={{ alignSelf: "flex-start" }}>
            Composites of Sectors and Other Shapes
          </Typography>
          <Typography>
            Exit exercise: Find the area and perimeter of the following shapes.
          </Typography>
          <ImageViewer imageDescription="Circles:part08" />
          <ImageViewer imageDescription="Circles:part09" />
          <ImageViewer imageDescription="Circles:part10" />
          <HiddenSolutionComponent>
            <ImageViewer imageDescription="Circles:part11-answers" />
          </HiddenSolutionComponent>
        </ColumnStack>
      )}

      <StepNavigator
        numberOfSteps={numberOfSteps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        showNextAndPrev={true}
        style={{ width: "100%" }}
      />
    </ColumnStack>
  );
};
