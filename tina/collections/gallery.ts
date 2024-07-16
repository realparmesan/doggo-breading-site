import { Collection } from "tinacms";

const Gallery: Collection = {
  name: "gallery",
  label: "Gallery",
  path: "content/english/sections",
  match: {
    include: "*gallery*",
  },
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
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
    {
      type: "object",
      name: "images",
      label: "Gallery",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name}  ( ${item?.breed} ) `}
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "boolean",
          name: "draft",
          label: "Draft",
          required: true,
        },
        {
          type: "string",
          name: "breed",
          label: "Breed",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Description",
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
