module.exports = ({ env }) => ({
  //...
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::page.page"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::page.page": ["MyField"],
      },
      blockedAuthorProps: ["name", "email"],
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {
        enabled: true,
      }
    },
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
        "strapi_transfer_token_permissions",
        "admin_roles_permissions",
        "admin_roles",
      ],
    },
  },
  //...
});
