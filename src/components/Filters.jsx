import React, { useState } from 'react'
import { useStore } from '../store'

export default function Filters() {
  const [filterValues, setFilterValues] = useState({})
  const { setFilters } = useStore()

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilterValues(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    setFilters(filterValues)
  }

  return (
    <div className="filters">
      <input
        type="text"
        name="prompt"
        placeholder="Search prompt..."
        onChange={handleFilterChange}
      />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  )
}
