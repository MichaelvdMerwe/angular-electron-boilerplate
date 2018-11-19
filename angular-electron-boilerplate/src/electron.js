const { app, BrowserWindow } = require('electron');

const url = require('url');
const path = require('path');

let win;

function createWindow() {
	win = new BrowserWindow({ width: 1000, height: 800 });

	win.loadURL(
		url.format({
			pathname: path.join(__dirname, '/../dist/angular-electron-boilerplate/index.html'),
			protocol: "file:",
			slashes: true
		})
	)

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

// the activate even is needed for macOS applications, as it behaves a little bit differently
app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.