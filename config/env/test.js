"use strict";
module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  port: 1338,
  cmds: {
    showInstanceInfo: {
      mainCmd: "/bin/echo \"Server show <instanceId> from <projectId>\""
    },
    getInstanceList: {
      mainCmd: "/bin/echo \"[{\\\"Networks\\\" :\\\"<ipAddress>\\\", \\\"Project ID\\\": \\\"Test Project\\\", \\\"ID\\\": \\\"Test Instance <ipAddress>\\\"}]\""
    }
  },
  idField: "ID",
  ipField: "Networks",
  projectIdField: "Project ID",
  authorization: "Basic ",
  instanceDelim: "\n",
  stripTable: false,
  debugHttp: false,
  freshdesk: {
    protocol: "https://",
    hostname: "dhdnectartest.freshdesk.com",
    username: "",
    pw: "X",
    noteApiMethod: "POST",
    noteApiPath: "/helpdesk/tickets/<ticketId>/conversations/note.json",
    isNotePrivate: true,
    updateNote: false,
  },
  apiVersion: "1.0.0",
  error: {
    noAuth: {
      code: 403,
      msg: "You are not permitted to perform this action."
    },
    noParam: {
      code: 400,
      msg: "Missing parameters."
    },
  }
};
