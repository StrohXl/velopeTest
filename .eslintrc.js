module.exports = {
  extends: ["next/core-web-vitals", "plugin:import/recommended"],
  rules: {
    "newline-before-return": "warn",
    "import/newline-after-import": [
      "warn",
      {
        count: 1,
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
          ["object", "unknown"],
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "~/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "type"],
        "newlines-between": "always-and-inside-groups",
      },
    ],
  },
};
