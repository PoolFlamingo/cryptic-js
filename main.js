const { app, BrowserWindow, globalShortcut } = require("electron");
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
        //icon:
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
