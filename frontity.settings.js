const settings = {
  "name": "enzos-great-adventure",
  "state": {
    "frontity": {
      "url": "https://admin.enzosgreatadventure.com",
      "title": "Enzo's Great Adventure",
      "description": "To honor his 10th birthday, little Enzo will embark on an adventure of a lifetime."
    },
    "source": {
      gfAuth: {
        key: "ck_14d0e0ff97f86ff86f47a74c2c76dc739431cac7",
        secret: "cs_7733c4e37dd387bff293cf657903a30d1d0c396e",
      }
    }
  },
  "packages": [
    {
      "name": "frontity-chakra-theme",
      "state": {
        "theme": {
          // The logo can be a text or an image url
          logo: "Enzo's Great Adventure",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: false,
          // the top-level navigation labels and links
          "menu": [
            ["Home", "/"],
            ["Our Story", "/about"],
            ["The Great Adventure", "/category/the-great-adventure"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#e9f5f2",
              100: "#d4dcd9",
              200: "#bbc3be",
              300: "#a1aba5",
              400: "#87938b",
              500: "#6d7972",
              600: "#555f58",
              700: "#323c34",
              800: "#232924",
              900: "#272727",
            },
            accent: {
              50: "#ede4d3",
              100: "#fbe3b2",
              200: "#f6d086",
              300: "#f1be58",
              400: "#eca419",
              500: "#d49212",
              600: "#a5710b",
              700: "#775105",
              800: "#483100",
              900: "#1d0f00",
            },
          },
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://admin.enzosgreatadventure.com"
        }
      }
    },
    {
      "name": "@frontity/google-analytics",
      "state": {
        googleAnalytics: {
          trackingId: "G-S7BZ6H803V",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/wp-comments",
    "@aamodtgroup/frontity-gravity-forms"
  ]
};

export default settings;
