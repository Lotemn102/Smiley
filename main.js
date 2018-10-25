// Smiley is an offline Electron application for using emojis in Office
// applications, chat applications, website etc.

const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
	// Create the browser window.
    win = new BrowserWindow({
		width: 218,
		height: 370,
		icon: path.join(__dirname, 'assets/icon/happy64.png')
		})
	win.setMenu(null);
	win.setPosition(1055, 305);

	// Setting the tray icon.
	const {Tray, Menu} = require('electron')
	let trayIcon = new Tray(path.join(__dirname, 'assets/icon/happy64.png'));

	const trayMenuTemplate =
					[
					   { label: 'פתח חלון', click:  function(){
						   win.show();
					   } },
					   { label: 'יציאה', click:  function(){
						   app.isQuiting = true;
						   app.quit();
					   } }
					]

	let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
	trayIcon.setContextMenu(trayMenu);
	trayIcon.setToolTip("Smiley");

  win.loadFile('index.html');
}

app.on('ready', createWindow);
