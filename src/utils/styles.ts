/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

export const styles = {
  columnFlex: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  columnFlexTight: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  rowFlex: css`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  `,
  rowFlexSpaceBetween: css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `,
  rowFlexTight: css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  `,
  sectionCard: css`
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  groupedCheckBoxes: css`
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  `
};
