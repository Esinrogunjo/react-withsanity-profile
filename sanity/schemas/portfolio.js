export default {
  name: "portfolio",
  title: "Portfolio",
  type: "image",
  fields: [
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
  ],
};
