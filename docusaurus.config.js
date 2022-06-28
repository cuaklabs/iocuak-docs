// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IoCuak",
  tagline: "The simple IoC container",
  url: "http://cuaklabs.github.io",
  baseUrl: "/iocuak-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cuaklabs",
  projectName: "iocuak-docs",
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "IoCuak",
        logo: {
          alt: "IoCuak docs",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "tutorial/introduction",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "docsVersionDropdown",
            label: "Versions",
            position: "right",
          },
          {
            href: "https://github.com/cuaklabs/cuaktask/tree/master/packages/iocuak",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cuaklabs/cuaktask/tree/master/packages/iocuak",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IoCuak docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
