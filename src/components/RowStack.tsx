import React from "react";
import { styles } from "../utils/inlineStyles";

const RowStack: React.FC = ({ children }) => {
  return (
    <div style={{ ...styles.rowFlex, width: "100%", flexWrap: "wrap" }}>
      {children}
    </div>
  );
};

export default RowStack;
