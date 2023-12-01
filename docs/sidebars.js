/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars are explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guidesSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "intro/introduction" },
      collapsible: true,
      collapsed: true,
      items: ["intro/quickstart", "intro/how-jan-works"],
    },
    {
      type: "category",
      label: "Installation",
      link: { type: "doc", id: "install/overview" },
      collapsible: true,
      collapsed: true,
      items: [
        "install/windows",
        "install/mac",
        "install/linux",
        "install/from-source",
      ],
    },
    {
      type: "category",
      label: "Using Jan",
      collapsible: true,
      collapsed: true,
      items: ["docs/models", "docs/server"],
    },
  ],

  developerSidebar: [
    "docs/extensions",
    "docs/assistants",
    "docs/themes",
    "docs/tools",
    "docs/modules",
  ],

  specsSidebar: [
    {
      type: "category",
      label: "Overview",
      collapsible: true,
      collapsed: false,
      items: ["specs/architecture", "specs/file-based", "specs/user-interface"],
    },
    {
      type: "category",
      label: "Product Specs",
      collapsible: true,
      collapsed: false,
      items: [
        "specs/product/chat",
        "specs/product/hub",
        "specs/product/system-monitor",
        "specs/product/settings",
      ],
    },

    {
      type: "category",
      label: "Engineering Specs",
      collapsible: true,
      collapsed: false,
      items: [
        "specs/engineering/chats",
        "specs/engineering/models",
        "specs/engineering/engine",
        "specs/engineering/threads",
        "specs/engineering/messages",
        "specs/engineering/assistants",
        // "specs/engineering/files",
        // "specs/engineering/jan",
        // "specs/engineering/fine-tuning",
        // "specs/engineering/settings",
        // "specs/engineering/prompts",
      ],
    },
  ],

  communitySidebar: [
    "community/community",
    {
      type: "category",
      label: "Events",
      collapsible: true,
      collapsed: true,
      items: [
        "events/nvidia-llm-day-nov-23",
        {
          type: "doc",
          label: "Oct 23: HCMC Hacker House",
          id: "events/hcmc-oct23",
        },
      ],
    },
  ],

  aboutSidebar: [
    {
      type: "doc",
      label: "About Jan",
      id: "about/about",
    },
    {
      type: "link",
      label: "Careers",
      href: "https://janai.bamboohr.com/careers",
    },
    {
      type: "category",
      label: "Company Handbook",
      collapsible: true,
      collapsed: true,
      // link: { type: "doc", id: "handbook/handbook" },
      items: [
        {
          type: "doc",
          label: "Engineering",
          id: "handbook/engineering/engineering",
        },
      ],
    },
  ],
};

module.exports = sidebars;
