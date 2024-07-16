import { Collection } from "tinacms";

const AboutUs: Collection = {
  name: "contact",
  label: "About and Contact Page",
  path: "content/english/contact",
  ui:{
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      isTitle: true,
      required: true,
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default AboutUs;
