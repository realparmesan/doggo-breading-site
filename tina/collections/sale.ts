import { Collection } from "tinacms";

const Sale: Collection = {
  name: "sale",
  label: "Dogs for Sale",
  path: "content/english/sale",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Dog's name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Main Picture",
      required: true,
    },
    {
      type: "datetime",
      label: "Birth date",
      name: "birth",
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
    {
      label: 'Categories',
      name: 'categories',
      type: "string",
      list: true
    },
  ],
};

export default Sale;
