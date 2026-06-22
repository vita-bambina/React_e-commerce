import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Signupmodal({ openSignup, handleCloseSignup }) {
  return (
    <Modal open={open} onClose={handleCloseSignup}>
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

          <TextField label="First name" fullWidth margin="normal" />

          <TextField label="Second name " fullWidth margin="normal" />

          <TextField label="Username" fullWidth margin="normal" />

          <TextField label="Email Address" fullWidth margin="normal" />

          <TextField label="Tel" fullWidth margin="normal" />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <hr />

          <Button variant="contained" fullWidth className="login-btn">
            Login
          </Button>
          <hr />

          <Button variant="outlined" fullWidth className="signup-btn">
            Create Account
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
export default Signupmodal;
