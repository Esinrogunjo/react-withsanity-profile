export default {
  name: "testimony",
  title: "Testimony",
  type: "document",
  fields: [
    {
      name: "avatar",
      title: "Avater",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
};
