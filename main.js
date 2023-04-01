const { app, BrowserWindow, globalShortcut, ipcMain } = require("electron");
const path = require("path");
const os=require("os");

const isDev = process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false;

function CreateMainWindow()
{
    const mainWindow=new BrowserWindow({
        title: "Electon App",
        width: 1280,
        height: 800,
        minWidth: 400,
        minHeight: 400,
        icon: "./res/img/icons/cryptic-icon.ico",
        frame:false,
        transparent:true,
        webPreferences:{
            contextIsolation:true,
            nodeIntegration:false,
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

    ipcMain.on("App.Initialize", (event)=>{
        //Convertir esto en funciones separadas para obtenerlos paths.
        event.returnValue = {
            app: {
                platform: os.platform(),
                projectPath: app.getAppPath(),
                paths:{
                    appData: app.getPath("appData"),
                    crashDumps: app.getPath("crashDumps"),
                    desktop: app.getPath("desktop"),
                    documents: app.getPath("documents"),
                    downloads: app.getPath("downloads"),
                    exe: app.getPath("exe"),
                    home: app.getPath("home"),
                    logs: app.getPath("logs"),
                    module: app.getPath("module"),
                    music: app.getPath("music"),
                    pictures: app.getPath("pictures"),
                    recent: app.getPath("recent"),
                    sessionData: app.getPath("sessionData"),
                    temp: app.getPath("temp"),
                    userData: app.getPath("userData"),
                    videos: app.getPath("videos")
                }
            }
        }
    });

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
