import { Collection } from "tinacms";

const Fostering: Collection = {
  name: "fostering",
  label: "Fostering Page",
  path: "content/english/fostering",
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
      type: "string",
      label: "Short description",
      name: "description",
      required: true,
      ui: {
        component: "textarea",
      },
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

export default Fostering;
