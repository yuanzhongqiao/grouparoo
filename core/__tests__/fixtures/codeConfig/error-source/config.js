module.exports = async function getConfig() {
  return [
    {
      id: "setting_cluster_name", // this is actually ignored
      class: "Setting",
      pluginName: "core",
      key: "cluster-name",
      value: "Test Cluster",
    },

    {
      id: "data_warehouse", // id -> `data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
      },
    },

    {
      id: "users_table", // id -> `data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appId -> `data_warehouse`
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
      bootstrappedProperty: {},
    },
  ];
};
