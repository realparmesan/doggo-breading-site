import { Collection } from "tinacms";

const References: Collection = {
  name: "references",
  label: "References (Homepage)",
  path: "content/english/sections",
  match: {
    include: "*testimonial*",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "boolean",
      name: "enable",
      label: "Enable?",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
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
      type: "object",
      name: "testimonials",
      label: "Testimonials",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "string",
          name: "designation",
          label: "Designation",
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar",
        },
        {
          type: "string",
          label: "Content",
          name: "content",
          required: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
};

export default References;
