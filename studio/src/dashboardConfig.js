export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6085e7e1bc6c8475c91f412f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bott9x6e",
                  apiId: "3d2f57e8-6b0e-4bae-954d-8db311964518",
                },
                {
                  buildHookId: "6085e7e191ced46b3144d3e1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-y3k8jdk5",
                  apiId: "495467af-e169-41b4-b803-2f3b4b2de827",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/benfranzoso1/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-y3k8jdk5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
