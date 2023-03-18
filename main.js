const { app, BrowserWindow, globalShortcut, ipcMain } = require("electron");
const path = require("path");

const isDev=process.env.NODE_ENV!=="production";

function CreateMainWindow()
{
    const mainWindow=new BrowserWindow({
        title: "Electon App",
        width: 1280,
        height: 800,
        minWidth: 400,
        minHeight: 400,
        icon: "./res/img/icons/criptic-icon.png",
        frame:false,
        transparent:true,
        webPreferences:{
            contextIsolation:true,
            nodeIntegration:true,
            preload: path.join(__dirname, "./src/js/misc/preload.js")
        },
        autoHideMenuBar: true
    });
    mainWindow.removeMenu();

    if(isDev)
        mainWindow.webContents.openDevTools();

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
    return mainWindow;
}

app.whenReady().then(()=>{
    var mainWindow=CreateMainWindow();
    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length===0)
        {
            mainWindow=CreateMainWindow();
        }
    });

    ipcMain.on('min-window', () => {
        BrowserWindow.getFocusedWindow().minimize();
    });
    ipcMain.on('close-window', () => {
        BrowserWindow.getFocusedWindow().close();
    });
    ipcMain.on('max-window', () => {
        const currentWindow=BrowserWindow.getFocusedWindow();
        if(currentWindow.isMaximized())
            currentWindow.unmaximize();
        else
            currentWindow.maximize();
    });

    if(isDev)
        globalShortcut.register('F12', ()=>{
            if(mainWindow.webContents.isDevToolsOpened())
                mainWindow.webContents.closeDevTools();
            else
                mainWindow.webContents.openDevTools();
        });
});

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin')
        app.quit();
});
