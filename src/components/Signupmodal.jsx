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

function Signupmodal({ openSignup, handleCloseSignup, handleOpenLogin }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    tel: "",
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
      const res = await fetch("http://localhost:4001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || "Failed to create account");
      }

      setSuccess(data.msg);

      setTimeout(() => {
        handleCloseSignup();
        handleOpenLogin();
      }, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={openSignup} onClose={handleCloseSignup}>
      <Box className="signup_modal">
        <Box className="signup_box">
          <IconButton className="close-btn" onClick={handleCloseSignup}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h4" className="login-title">
            Welcome Back
          </Typography>

          <Typography className="login-caricature">
            Login to continue shopping
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="First name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Second name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

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
              label="Tel"
              name="tel"
              value={formData.tel}
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
              variant="outlined"
              fullWidth
              className="signup-btn"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}

export default Signupmodal;