import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Tech Multi Solution API" });
});

app.get("/api/services", (req, res) => {
  res.json({
    services: [
      {
        id: 1,
        title: "Website Development",
        description:
          "Professional website development with modern technologies",
        icon: "🌐",
        features: [
          "Responsive Design",
          "SEO Optimized",
          "Fast Performance",
          "Custom Solutions",
        ],
      },
      {
        id: 2,
        title: "Application Development",
        description:
          "Custom mobile and web applications for your business needs",
        icon: "📱",
        features: ["Cross-platform", "User-friendly", "Scalable", "Secure"],
      },
      {
        id: 3,
        title: "Photography Services",
        description:
          "Professional photography for events, products, and portraits",
        icon: "📷",
        features: [
          "Event Coverage",
          "Product Photography",
          "Portrait Sessions",
          "Photo Editing",
        ],
      },
      {
        id: 4,
        title: "Videography Services",
        description:
          "Professional video production for commercials, events, and content",
        icon: "🎬",
        features: [
          "Event Videography",
          "Commercial Videos",
          "Content Creation",
          "Video Editing",
        ],
      },
    ],
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message, service } = req.body;

  // Here you would typically save to a database or send an email
  console.log("Contact form submission:", { name, email, message, service });

  res.json({
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
