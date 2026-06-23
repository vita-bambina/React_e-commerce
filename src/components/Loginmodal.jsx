import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Loginmodal({ openLogin, handleClose, handleOpenSignup }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || "Failed to login");
      }

      setSuccess(data.msg || "Login successful");

      // If your backend returns a token, store it for authenticated requests
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={openLogin} onClose={handleClose}>
      <Box className="login-modal">
        <Box className="inner_login_modal">
          <IconButton className="close-btn" onClick={handleClose}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h4" className="login-title">
            Welcome Back
          </Typography>

          <Typography className="login-subtitle">
            Login to continue shopping
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            {error && (
              <Typography color="error" fontSize={14}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography color="green" fontSize={14}>
                {success}
              </Typography>
            )}

            <hr />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <hr />

          <Button
            variant="outlined"
            fullWidth
            className="signup-btn"
            id="Create Account"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClose();
              handleOpenSignup();
            }}
          >
            Create Account
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Loginmodal;
