import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardButton({ uuid, displayName, recommendations }) {
  const navigate = useNavigate()
  const rec = recommendations || []
  const handleClick = () => {
    navigate('/home', { state: { rec, uuid, displayName } })
  }

  return (
    <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700" onClick={handleClick}>
      Dashboard
    </button>
  )
}
