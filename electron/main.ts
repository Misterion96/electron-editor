import {app, BrowserWindow, ipcMain} from "electron"
import * as fs from 'fs';
const path = require('path')
const url = require('url')
let win: BrowserWindow
function createWindow () {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
  })
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `../dist/electron-angular/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  win.webContents.openDevTools()
  win.webContents.setFrameRate(60)
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
