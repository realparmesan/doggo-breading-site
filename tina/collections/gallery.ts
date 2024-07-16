import { Collection } from "tinacms";

const Gallery: Collection = {
  name: "gallery",
  label: "Gallery",
  path: "content/english/gallery",
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
    {
      type: "object",
      name: "gallery",
      label: "Gallery",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
  ],
};

export default Gallery;
