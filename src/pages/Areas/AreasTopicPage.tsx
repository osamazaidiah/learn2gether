import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../../utils/inlineStyles";
import { Button, Typography } from "@mui/material";

import ColumnStack from "../../components/ColumnStack";
import RowStack from "../../components/RowStack";
import HiddenSolutionComponent from "../../components/HiddenSolutionComponent";
import { StepNavigator } from "../../components/StepNavigator";
import { AreaOfTriangles } from "./AreaOfTriangles";
import { AreaOfCirclesAndSectors } from "./AreaOfCirclesAndSectors";
import { TopicSelector } from "../../components/TopicSelector";
import ImageViewer from "../../components/ImageViewer";

export const AreasTopicPage: React.FC = () => {
  const topicsArray = ["1 Circles and Sectors", "2 Areas of Triangles"];
  const numberOfSteps = topicsArray.length;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ColumnStack>
      <Typography variant="h5" color="primary">
        Areas of 2D Shapes: {numberOfSteps} Topics
      </Typography>

      <TopicSelector
        numberOfSteps={numberOfSteps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        titles={topicsArray}
      />

      {currentStep === 1 && <AreaOfCirclesAndSectors />}

      {currentStep === 2 && <AreaOfTriangles />}
    </ColumnStack>
  );
};
