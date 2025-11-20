import { useState } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>

      <button className="control-button" onClick={toggleAnimation}>
        {isAnimating ? 'Stop Dancing' : 'Start Dancing'}
      </button>
    </div>
  )
}

export default DancingCat
