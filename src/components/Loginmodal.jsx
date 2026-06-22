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
  return (
    <Modal open={open} onClose={handleClose}>
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

          <TextField label="Email Address" fullWidth margin="normal" />

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

          <Button
            variant="outlined"
            fullWidth
            className="signup-btn"
            id="Create Account"
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("Signup clicked");
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

{
  /* <div class="password_input">
            <p>Password</p>
            <input
              type="text"
              placeholder="Enter Your password"
              class="password_placeholder"
            />
          </div>
          <h6 id="login_btn">Login</h6>
          <p id="forgot_pswrd">Forgot Password?</p>
          <p class="divider">or</p>
          <div class="google">
            <p>Sign up</p>
          </div>
          <p>Continue as guest</p>
        </div>
      </div> */
}

export default Loginmodal;
