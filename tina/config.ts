import { defineConfig } from "tinacms";
import Sale from "./collections/sale";
import AboutUs from "./collections/about-us";
import Homepage from "./collections/homepage";
import References from "./collections/references";
import Gallery from "./collections/gallery";
import Theme from "./collections/theme";


export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [Homepage, References, Sale, Gallery, AboutUs, Theme],
  },
});
