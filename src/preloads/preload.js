const { contextBridge, ipcRenderer } = require("electron") // Inter-Process Communication
const { IPC_ACTIONS } = require("../settings/IPCActions")
const { SEND_NOTIFICATION, CREATE_WINDOW } = IPC_ACTIONS.Window

contextBridge.exposeInMainWorld("ipcAPI", {
  sendNotification: (txt, title) => ipcRenderer.send(SEND_NOTIFICATION, txt, title),
  createWindow: (x, y) => ipcRenderer.send(CREATE_WINDOW, x, y),
  /* 
    ## Other Ways of communicate with the back -> https://www.electronjs.org/docs/latest/api/ipc-renderer
  */
  // ipcRenderer.sendSync()
  // ipcRenderer.on()
  // ipcRenderer.invoke()
  // ipcRenderer.once()
})