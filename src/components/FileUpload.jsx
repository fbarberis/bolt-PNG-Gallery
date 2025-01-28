import React from 'react'

export default function FileUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    onUpload(files)
  }

  return (
    <div className="file-upload">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  )
}
