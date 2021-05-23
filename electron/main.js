"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require('path');
var url = require('url');
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1280,
        height: 720
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "../dist/electron-angular/index.html"),
        protocol: "file:",
        slashes: true
    }));
    win.webContents.openDevTools();
    win.webContents.setFrameRate(60);
}
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
