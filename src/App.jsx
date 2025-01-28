import { useEffect, useState } from 'react'
import { useStore } from './store'
import Gallery from './components/Gallery'
import MetadataPanel from './components/MetadataPanel'
import Filters from './components/Filters'
import FileUpload from './components/FileUpload'
import exifr from 'exifr'
import './App.css'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const { images, loadImages } = useStore()

  const handleUpload = async (files) => {
    const uploadedImages = await Promise.all(files.map(async (file) => {
      const metadata = await extractMetadata(file)
      return {
        path: file.name,
        thumbnail: URL.createObjectURL(file),
        metadata
      }
    }))
    loadImages(uploadedImages)
  }

  const extractMetadata = async (file) => {
    try {
      const metadata = await exifr.parse(file)
      return {
        prompt: metadata?.parameters?.prompt || 'No prompt found',
        steps: metadata?.parameters?.steps || 'Unknown',
        sampler: metadata?.parameters?.sampler || 'Unknown',
        seed: metadata?.parameters?.seed || 'Unknown',
        model: metadata?.parameters?.model || 'Unknown',
        cfgScale: metadata?.parameters?.cfgScale || 'Unknown'
      }
    } catch (error) {
      console.error('Error extracting metadata:', error)
      return {
        prompt: 'Metadata extraction failed',
        steps: 'Unknown',
        sampler: 'Unknown',
        seed: 'Unknown',
        model: 'Unknown',
        cfgScale: 'Unknown'
      }
    }
  }

  return (
    <div className="app-container">
      <FileUpload onUpload={handleUpload} />
      <Filters />
      <div className="main-content">
        <Gallery images={images} onSelect={setSelectedImage} />
        <MetadataPanel image={selectedImage} />
      </div>
    </div>
  )
}
