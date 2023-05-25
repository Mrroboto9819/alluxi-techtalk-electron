const { contextBridge, ipcRenderer } = require("electron")
const { IPC_ACTIONS } = require("../settings/IPCActions")
const { SEND_NOTIFICATION, CREATE_WINDOW } = IPC_ACTIONS.Window

contextBridge.exposeInMainWorld("ipcAPI", {
  sendNotification: (txt, title) => ipcRenderer.send(SEND_NOTIFICATION, txt, title),
  createWindow: (x, y) => ipcRenderer.send(CREATE_WINDOW, x, y),
})