import React from 'react'

export default function Gallery({ images, onSelect }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.path} className="thumbnail" onClick={() => onSelect(image)}>
          <img src={image.thumbnail} alt={image.metadata.prompt} />
        </div>
      ))}
    </div>
  )
}
