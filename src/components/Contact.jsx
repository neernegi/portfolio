import React from "react";
import { logos } from "../libs/logos";
import link from "/assets/icons/linkdn.png";
import contactbg from "/assets/message.svg";
import EmailIcon from '@mui/icons-material/Email';
import "../styles/contact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Contact() {
  return (
    <footer>
      <div className="footer">
        <div className="links-footer">
          <div>
            <h1>Connect with me</h1>
            <div className="social-links">
              <a
                href="https://github.com/neernegi"
                target="_blank"
                rel="noopener noreferrer"
              >
               <GitHubIcon className="social-icon" sx={{ fontSize: 37 }} />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-negi-a07008228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="social-icon" sx={{ fontSize: 37 }} />
                Linkedin
              </a>
              <a href="mailto:neerajnegi3443@gmail.com">
                <EmailIcon className="social-icon" sx={{ fontSize: 37 }} />
                neerajnegi3443@gmail.com
              </a>
            </div>
          </div>
          <img src={contactbg} alt="" className="footerbg" />
        </div>
        <div className="contact">
          <h1>Say Hi</h1>
          <div className="contact-input">
            <TextField
              id="outlined-basic"
              label="Name*"
              variant="outlined"
              className="text-input"
              sx={{
                input: { color: "white" },
                width: "32rem",
                label: { color: "white" }, // Default label color
                "& .MuiInputLabel-root": { color: "white" }, // Default label color
                "& .MuiInputLabel-root.Mui-focused": { color: "#c6ff00" }, // Focused label color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" }, // Default border color
                  "&:hover fieldset": { border: "2px solid white" }, // Hover border color
                  "&.Mui-focused fieldset": { borderColor: "#c6ff00" }, // Focus border color
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email*"
              variant="outlined"
              className="text-input"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                width: "32rem",
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#c6ff00" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { border: "2px solid white" },
                  "&.Mui-focused fieldset": { borderColor: "#c6ff00" },
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Message*"
              variant="outlined"
              multiline
              rows={4}
              className="text-input"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                width: "32rem",
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#c6ff00" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { border: "2px solid white" },
                  "&.Mui-focused fieldset": { borderColor: "#c6ff00" },
                },
              }}
            />
            <Button
              variant="outlined"
              sx={{
                width: "6rem",
                color: "#c6ff00",
                border: "1px solid #c6ff00",
              }}
              endIcon={<SendIcon sx={{ fill: "#c6ff00" }} />}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
