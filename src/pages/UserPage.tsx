import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../utils/inlineStyles";
import { Button, Typography } from "@mui/material";

import ColumnStack from "../components/ColumnStack";
import { TopicPage } from "./TopicPage";
import { AreasTopicPage } from "../pages/Areas/AreasTopicPage";

export const UserPage: React.FC = () => {
  const numberOfSteps = 10;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ColumnStack>
      <AreasTopicPage />
    </ColumnStack>
  );
};
