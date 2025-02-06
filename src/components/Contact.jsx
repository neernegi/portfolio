import React, { useState, useEffect } from "react";
import contactbg from "/assets/message.svg";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import "../styles/contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Auto-close result message after 3 seconds
  useEffect(() => {
    let timeoutId;
    if (result) {
      timeoutId = setTimeout(() => {
        setResult("");
      }, 3000);
    }
    // Cleanup function to clear timeout if component unmounts or result changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [result]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setIsSubmitting(true);

    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    setFormErrors({});
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a href="tel:+919058527467">
                <AddIcCallIcon className="social-icon" sx={{ fontSize: 37 }} />
                9058527467
              </a>
            </div>
          </div>
          <img src={contactbg} alt="Contact background" className="footerbg" />
        </div>
        <div className="contact">
          <h1>Say Hi</h1>
          <form onSubmit={onSubmit} className="contact-input">
            <TextField
              id="name"
              name="name"
              label="Name*"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              className="text-input"
              error={!!formErrors.name}
              helperText={formErrors.name}
              sx={{
                width: "32rem",
                "& .MuiInputBase-input": { color: "white" },
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
              id="email"
              name="email"
              label="Email*"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              className="text-input"
              error={!!formErrors.email}
              helperText={formErrors.email}
              sx={{
                width: "32rem",
                "& .MuiInputBase-input": { color: "white" },
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
              id="message"
              name="message"
              label="Message*"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="text-input"
              error={!!formErrors.message}
              helperText={formErrors.message}
              sx={{
                width: "32rem",
                "& .MuiInputBase-input": { color: "white" },
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
              type="submit"
              variant="outlined"
              sx={{
                width: "8rem",
                color: "#c6ff00",
                border: "1px solid #c6ff00",
              }}
              endIcon={<SendIcon sx={{ fill: "#c6ff00" }} />}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </form>
          {result && <p className="form-result">{result}</p>}
        </div>
      </div>
    </footer>
  );
}

export default Contact;
