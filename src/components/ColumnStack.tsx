import React from "react";
import { styles } from "../utils/inlineStyles";

const ColumnStack: React.FC = ({ children }) => {
  return (
    <div
      style={{
        ...styles.columnFlex,
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {children}
    </div>
  );
};

export default ColumnStack;
