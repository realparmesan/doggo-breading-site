import { Collection } from "tinacms";

const Params: Collection = {
  name: "params",
  label: "(Meta) Images",
  path: "config/_default",
  match: {
    include: "params*",
  } ,
  format: "toml",
  fields: [
    {
      type: "image",
      name: "favicon",
      label: "Logo without Text (Image in Tab)",
      required: true,
    },
    {
      type: "image",
      name: "logo",
      label: "Logo with Text (Image in Nav Bar)",
      required: true,
    },
    {
      type: "image",
      name: "logo_darkmode",
      label: "Logo with Text (Darkmode)",
      required: true,
    }
  ]
}

export default Params;
