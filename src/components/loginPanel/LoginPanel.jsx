import Input from "../UI/input/Input";
import React, { useState } from "react";
import classes from "./LoginPanel.module.css";
import Button from "../UI/button/Button";
import gettingDataOfUsers from "../../API/userData";

function LoginPanel() {
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    try {
      const response = await gettingDataOfUsers();
      if (response.status === 200) {
        const users = response.data.users;
        const user = users.find((profile) => {
          return profile.email === email && profile.password === password;
        });
        if (user) {
          alert(`Welcome back ${user.username}`);
        } else {
          alert("User not found");
        }
      } else {
        alert("Server error:", response.message);
      }
    } catch (error) {
      alert("Network error:", error);
    }
  };

  const handleCancle = (event) => {
    event.preventDefault();
    setLogin("");
    setPassword("");
  };

  return (
    <div className={classes.loginPanel}>
      <div className={classes.loginInscription}>Login</div>
      <div className={classes.loginPanelInput}>
        <Input
          label="Email"
          placeholder="email@example.com"
          onChange={handleLoginChange}
          value={email}
        />
        <Input
          label="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div className={classes.loginPanelButtons}>
        <Button secondary={true} onClick={handleCancle}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Login</Button>
      </div>
    </div>
  );
}

export default LoginPanel;
