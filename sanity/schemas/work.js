export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "brandName",
      title: "BrandName",
      type: "string",
    },
    {
      name: "brandAbout",
      title: "About",
      type: "string",
    },
    {
      name: "brandAvatar",
      title: "BrandAvatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
