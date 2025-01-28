import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  scanDirectory: (path) => ipcRenderer.invoke('scan-directory', path),
  getImageMetadata: (path) => ipcRenderer.invoke('get-image-metadata', path),
  exportData: (data, format) => ipcRenderer.invoke('export-data', data, format)
})
