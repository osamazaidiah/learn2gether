import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

import ColumnStack from "../components/ColumnStack";

const HiddenSolutionComponent: React.FC = ({ children }) => {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <ColumnStack>
      <Button
        variant="contained"
        onClick={() => setShowSolution((pre) => !pre)}
      >
        Show solution
      </Button>
      {showSolution && children}
    </ColumnStack>
  );
};

export default HiddenSolutionComponent;
