import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: process.env.GIT_BRANCH || "master",

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  // Configure custom port for development
  server: {
    port: 9001, // Using port 9001 instead of 9000
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "docs",
        label: "Documentation Pages",
        path: "src/content/docs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "string",
            name: "template",
            label: "Template",
            options: [
              {
                value: "doc",
                label: "Doc",
              },
              {
                value: "splash",
                label: "Splash",
              },
            ],
            required: false,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
              },
              {
                type: "object",
                name: "image",
                label: "Hero Image",
                fields: [
                  {
                    type: "image",
                    name: "file",
                    label: "Image File",
                  },
                ],
              },
              {
                type: "object",
                name: "actions",
                label: "Hero Actions",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Button Link",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Button Icon",
                  },
                  {
                    type: "string",
                    name: "variant",
                    label: "Button Variant",
                    options: ["primary", "secondary", "minimal"],
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
          {
            type: "object",
            name: "cards",
            label: "Cards de inicio",
            list: true,
            fields: [
              { type: "image", name: "image", label: "Imagen", required: true },
              { type: "string", name: "title", label: "Título", required: true },
              { type: "string", name: "link", label: "Enlace" },
              {
                type: "string",
                name: "linkText",
                label: "Texto del enlace",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
