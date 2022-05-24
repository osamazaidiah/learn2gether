import { styles } from "../utils/inlineStyles";
import { appName } from "../utils/consts";
import { Link } from "react-router-dom";
import { Chip, Typography } from "@mui/material";

function Logo({ loggedIn = false }: { loggedIn?: boolean }): JSX.Element {
  return (
    <div
      style={{
        ...styles.rowFlexSpaceBetween,
        textDecoration: "none",
        padding: "4px 0px"
      }}
    >
      <Link style={styles.rowFlexTight} to="/">
        <Typography
          variant="h1"
          fontSize={14}
          fontWeight={600}
          color="primary"
          style={{
            textDecoration: "none"
          }}
        >
          {appName}
        </Typography>
        <Chip
          label="BETA"
          color="info"
          style={{ height: "15px", fontSize: "0.5rem" }}
        />
      </Link>
      {loggedIn && <Typography fontSize={12}>Hello, Xena! 😊</Typography>}
    </div>
  );
}

export default Logo;
