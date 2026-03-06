import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
config({ path: path.join(__dirname, '.env') });

const app = express();
const router = express.Router();

// Debug: Check if env variables are loaded
console.log("Current directory:", __dirname);
console.log("Looking for .env at:", path.join(__dirname, '.env'));
console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_MAIL:", process.env.SMTP_MAIL);
console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "✓ Loaded" : "✗ Not loaded");
console.log("PORT:", process.env.PORT);

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://full-stack-web-gym.netlify.app",
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to send email
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "ashok926251@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    
    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Use the router
app.use(router);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});


// main things 
// https://gym-full-stack-project.vercel.app/

// 