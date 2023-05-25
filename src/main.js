const { app, BrowserWindow, Notification, ipcMain } = require('electron')
const path = require('path')
const { IPC_ACTIONS } = require("./settings/IPCActions")
const { SEND_NOTIFICATION, CREATE_WINDOW } = IPC_ACTIONS.Window


const createWindow = () => {
	const win = new BrowserWindow({
		width: 1920,
		height: 1080,
		frame: true,
		webPreferences: {
			preload: path.join(__dirname, 'preloads/preload.js'),
			nodeIntegration: true,
			contextIsolation: true,
		}
	})

	win.webContents.openDevTools()

	win.loadFile('./public/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})


/* 
	## Functionalities
*/
ipcMain.on(SEND_NOTIFICATION, (e, txt, title) => {
	new Notification({ title: title, body: txt }).show()
})

ipcMain.on(CREATE_WINDOW, (e, x, y) => {
	const win = new BrowserWindow({
		width: x,
		height: y
	})
	win.loadFile('./public/newWindow.html')
})