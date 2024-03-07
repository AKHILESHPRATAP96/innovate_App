
import wix from "../assets/brand images/wix.png";
import shopify from "../assets/brand images/shopify.png";
import paypal from "../assets/brand images/paypal.png";
import microsoft from "../assets/brand images/microsoft.png";
import mailchimp from "../assets/brand images/mailchimp.png";
import invision from "../assets/brand images/invision.png";
import intercom from "../assets/brand images/intercom.png";
import google from "../assets/brand images/google.png";
import evenote from "../assets/brand images/evernote.png";
import disney from "../assets/brand images/disney.png";
import { Box, Checkbox, Container, Grid, Typography } from '@mui/material';

export const Details = [
  {
    Brand: "Wix",
    Description: "Developed personalized fitness app for iOS and Android platforms.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: wix,
    Categories: ["Fitness", "Technology"],
    Tags: "Digital transformations, Health & Wellness, Mobile Apps",
    NextMeeting: "In 30 minutes"
  },
  {
    Brand: "Shopify",
    Description: "Launched new line of running shoes with advanced cushioning technology.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: shopify,
    Categories: ["Fashion", "Technology"],
    Tags: "Athletic wear, Footwear, Running",
    NextMeeting: "Tomorrow at 10:00 AM"
  },
  {
    Brand: "Paypal",
    Description: "Released latest version of iOS with enhanced privacy features.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: paypal,
    Categories: ["Technology"],
    Tags: "iOS, Privacy, Software Update",
    NextMeeting: "Today at 3:00 PM"
  },
  {
    Brand: "Microsoft",
    Description: "Unveiled new electric SUV with longer battery life and advanced autopilot.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: microsoft,
    Categories: ["Automotive", "Technology"],
    Tags: "Electric Vehicles, SUV, Autopilot",
    NextMeeting: "Next week"
  },
  {
    Brand: "Mailchimp",
    Description: "Announced partnership with NASA to explore space using AI and machine learning.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: mailchimp,
    Categories: ["Technology"],
    Tags: "AI, Machine Learning, Space Exploration",
    NextMeeting: "Next month"
  },
  {
    Brand: "Invasion",
    Description: "Expanded drone delivery service to more regions for faster shipping.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: invision,
    Categories: ["E-commerce", "Technology"],
    Tags: "Drone Delivery, Shipping, Logistics",
    NextMeeting: "Next week"
  },
  {
    Brand: "Intercom",
    Description: "Introduced new features in Office 365 suite for better collaboration and productivity.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: intercom,
    Categories: ["Technology"],
    Tags: "Office 365, Collaboration Tools, Productivity",
    NextMeeting: "Today at 2:30 PM"
  },
  {
    Brand: "google",
    Description: "Launched social VR platform for immersive virtual experiences.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: google,
    Categories: ["Social Media", "Technology"],
    Tags: "VR, Virtual Reality, Social Networking",
    NextMeeting: "In 1 hour"
  },
  {
    Brand: "Evenote",
    Description: "Released new original series with high viewer ratings and positive reviews.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/151`,
      `https://picsum.photos/seed/${Math.random()}/152`
    ],
    BrandImage: evenote,
    Categories: ["Entertainment"],
    Tags: "Original Series, Streaming, Content",
    NextMeeting: "Tomorrow at 11:00 AM"
  },
  {
    Brand: "Disney",
    Description: "Expanded ride-sharing service to more cities for convenient transportation options.",
    Members: [
      `https://picsum.photos/seed/${Math.random()}/150`,
      `https://picsum.photos/seed/${Math.random()}/150`
    ],
    BrandImage: disney,
    Categories: ["Transportation"],
    Tags: "Ride-sharing, Transportation, Convenience",
    NextMeeting: "Next week"
  }
];