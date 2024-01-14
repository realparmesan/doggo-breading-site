import { Collection } from "tinacms";

const Homepage: Collection = {
  name: "homepage",
  label: "Homepage",
  path: "content/english",
  match: {
    include: "*index*",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "object",
      name: "banner",
      label: "Banner",
      required: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "object",
          name: "button",
          label: "Button",
          required: true,
          fields: [
            {
              type: "boolean",
              name: "enabled",
              label: "Enabled?",
            },
            {
              type: "string",
              name: "label",
              label: "Label",
            },
            {
              type: "string",
              name: "link",
              label: "Link",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "features",
      label: "Features",
      required: true,
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          list: true,
          name: "bulletpoints",
          label: "Bulletpoints",
        },
        {
          type: "object",
          name: "button",
          label: "Button",
          required: true,
          fields: [
            {
              type: "boolean",
              name: "enabled",
              label: "Enabled?",
            },
            {
              type: "string",
              name: "label",
              label: "Label",
            },
            {
              type: "string",
              name: "link",
              label: "Link",
            },
          ],
        },
      ],
    }
  ],
};

export default Homepage;
