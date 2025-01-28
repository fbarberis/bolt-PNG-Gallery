const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = 3001

// Enable CORS for frontend access
app.use(cors())

// Serve files from the HDD folder
const hddFolder = 'F:/Outputs'
app.use('/files', express.static(hddFolder))

// API endpoint to list files
app.get('/api/files', (req, res) => {
  const fs = require('fs')
  fs.readdir(hddFolder, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' })
    }
    res.json(files)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
