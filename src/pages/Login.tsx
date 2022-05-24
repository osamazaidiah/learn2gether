import { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../utils/inlineStyles";
import { Button, TextField, Typography } from "@mui/material";

const username = "xena";
const password = "xenaisthebest1";

export const Login: React.FC = ({
  setLoggedIn
}: {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ ...styles.columnFlex, width: "90%" }}>
        <TextField
          fullWidth
          onFocus={() => setError(false)}
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value.toLowerCase())}
          label="Enter username:"
          error={error}
        />
        <TextField
          fullWidth
          onFocus={() => setError(false)}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          type="password"
          label="Enter password:"
          error={error}
          helperText={error && "Incorrect username or password"}
        />
        <Button
          onClick={() => {
            if (usernameInput === username && passwordInput === password) {
              setLoggedIn(true);
            } else {
              setError(true);
            }
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
};
