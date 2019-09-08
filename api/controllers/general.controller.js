const { ipcMain } = require("electron");

module.exports = win => {
  ipcMain.on("msg", (_, message) => {
    console.log(message);
  });
};
