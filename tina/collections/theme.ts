import { Collection } from "tinacms";

const Theme: Collection = {
  name: "theme",
  label: "(Meta) Theme Configuration",
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
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "body",
                  label: "body",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "border",
                  label: "border",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "theme_light",
                  label: "Theme's light colour",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "theme_dark",
                  label: "Theme's Dark colour",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
              ]
            },
            {
              type: "object",
              name: "text_color",
              label: "Text Colours",
              required: true,
              fields: [
                {
                  type: "string",
                  name: "default",
                  label: "default",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "dark",
                  label: "dark",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "light",
                  label: "light",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                }
              ]
            },
          ]
        },
        {
          type: "object",
          name: "darkmode",
          label: "Darkmode Theme",
          required: true,
          fields: [
            {
              type: "object",
              name: "theme_color",
              label: "Darkmode Colours",
              required: true,
              fields: [
                {
                  type: "string",
                  name: "primary",
                  label: "primary",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "body",
                  label: "body",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "border",
                  label: "border",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "theme_light",
                  label: "Theme's light colour",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "theme_dark",
                  label: "Theme's dark colour",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
              ]
            },
            {
              type: "object",
              name: "text_color",
              label: "Text Colours",
              required: true,
              fields: [
                {
                  type: "string",
                  name: "default",
                  label: "default",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "dark",
                  label: "dark",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                },
                {
                  type: "string",
                  name: "light",
                  label: "light",
                  required: true,
                  ui: {
                    component: 'color',
                  }
                }
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
