const { app, BrowserWindow } = require('electron');

const url = require('url');
const path = require('path');

let win;

function createWindow() {
	//const { session } = require('electron');
	// session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	// 	callback({
	// 		responseHeaders: {
	// 			...details.responseHeaders,
	// 			'Content-Security-Policy': ['default-src \'none\'']
	// 		}
	// 	})
	// })	more information on electron security available on https://electronjs.org/docs/tutorial/security 
	//trying to set the session content security policy so the warning goes away in dev mode, currently it seems like there are some issues with how this works. Will read up more and figure out a workaround

	win = new BrowserWindow({ width: 1000, height: 800 });

	installExtension(ANGULARJS_BATARANG)
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log('An error occurred: ', err));
	//currently causing the application to break on reload
	//there is an issue with the cookies, still need to find a fix for it

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