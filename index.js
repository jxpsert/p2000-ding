const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    resizable: true,
    title: "BRANDWEER PAGER P2000",
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
  });
  //win.webContents.openDevTools();
  win.loadFile("app/index.html");

};

app.whenReady().then(() => {
  createWindow();
});
