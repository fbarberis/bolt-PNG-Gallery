import React from 'react'

export default function MetadataPanel({ image }) {
  if (!image) return null

  return (
    <div className="metadata-panel">
      <h3>Generation Parameters</h3>
      <div className="metadata-grid">
        {Object.entries(image.metadata).map(([key, value]) => (
          <div key={key} className="metadata-item">
            <strong>{key}:</strong> <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
