import { Collection } from "tinacms";

const Theme: Collection = {
  name: "theme",
  label: "Theme Configuration",
  path: "data",
  match: {
    include: "theme*",
  } ,
  format: "json",
  fields: [
    {
      type: "object",
      name: "colors",
      label: "Colours",
      required: true,
      fields: [
        {
          type: "object",
          name: "default",
          label: "Default Theme",
          required: true,
          fields: [
            {
              type: "object",
              name: "theme_color",
              label: "Default Colours",
              required: true,
              fields: [
                {
                  type: "string",
                  name: "primary",
                  label: "primary",
                  required: true,
                },
                {
                  type: "string",
                  name: "body",
                  label: "body",
                  required: true,
                },
                {
                  type: "string",
                  name: "border",
                  label: "border",
                  required: true,
                },
                {
                  type: "string",
                  name: "theme_light",
                  label: "Light theme colour",
                  required: true,
                },
                {
                  type: "string",
                  name: "theme_dark",
                  label: "Dark theme colour",
                  required: true,
                },
              ]
            },
          ]
        },
      ],
    },
    {
      type: "object",
      name: "fonts",
      label: "Fonts",
      required: true,
      fields: [
        {
          type: "object",
          name: "font_family",
          label: "Font Family",
          required: true,
          fields: [
            {
              type: "string",
              name: "primary",
              label: "Primary Font",
              required: true,
            },
            {
              type: "string",
              name: "primary_type",
              label: "Primary Font Type",
              required: true,
            },
            {
              type: "string",
              name: "secondary",
              label: "secondary Font",
              required: true,
            },
            {
              type: "string",
              name: "secondary_type",
              label: "secondary Font Type",
              required: true,
            },
          ]
        },
        {
          type: "object",
          name: "font_size",
          label: "Font Size",
          required: true,
          fields: [
            {
              type: "string",
              name: "base",
              label: "Base",
              required: true,
            },
            {
              type: "string",
              name: "scale",
              label: "Scale",
              required: true,
            },
          ]
        },
      ],
    },
  ]
}

export default Theme;
