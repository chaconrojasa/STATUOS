// ------------------------------------------------------------------------------CREACION DEL SERVER

const express = require('express');
const session = require('express-session');
const path = require('path');
const pageRouter = require('./routes/pages');
const appServer = express();
// for body parser. to collect data that sent from the client.
appServer.use(express.urlencoded( { extended : false}));


// Serve static files. CSS, Images, JS files ... etc
appServer.use(express.static(path.join(__dirname, 'views')));


// Template engine. 
appServer.set('views', path.join(__dirname, 'views'));
appServer.engine('ejs', require('ejs').renderFile);
appServer.set('view engine', 'ejs');

// session
appServer.use(session({
    secret:'youtube_video',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));

// Routers
appServer.use('/', pageRouter);

// Errors => page not found 404
appServer.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})

// Handling errors (send them to the client)
appServer.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

// Setting up the server
appServer.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

module.exports = appServer;

// ------------------------------------------------------------------------------RENDER EN ELECTRON

// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
      nodeIntegration: true
    }
  })
  // and load the index.html of the app.
  mainWindow.loadURL('http:///localhost:3000/')
  mainWindow.removeMenu()




  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

