import { useState } from 'react'
import './OpinionCard.css'

function OpinionCard({ nombre, fecha, opinion, initialLikes = 0, initialDislikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [userVote, setUserVote] = useState(null) // 'like', 'dislike', o null

  const handleLike = () => {
    if (userVote === 'like') {
      setLikes(likes - 1)
      setUserVote(null)
    } else {
      if (userVote === 'dislike') {
        setDislikes(dislikes - 1)
      }
      setLikes(likes + 1)
      setUserVote('like')
    }
  }

  const handleDislike = () => {
    if (userVote === 'dislike') {
      setDislikes(dislikes - 1)
      setUserVote(null)
    } else {
      if (userVote === 'like') {
        setLikes(likes - 1)
      }
      setDislikes(dislikes + 1)
      setUserVote('dislike')
    }
  }

  return (
    <div className="opinion-card">
      <div className="opinion-header">
        <h3 className="opinion-nombre">{nombre}</h3>
        <p className="opinion-fecha">{fecha}</p>
      </div>
      
      <p className="opinion-texto">{opinion}</p>
      
      <div className="opinion-botones">
        <button 
          className={`btn-voto ${userVote === 'like' ? 'activo' : ''}`}
          onClick={handleLike}
        >
          👍 {likes}
        </button>
        <button 
          className={`btn-voto ${userVote === 'dislike' ? 'activo' : ''}`}
          onClick={handleDislike}
        >
          👎 {dislikes}
        </button>
      </div>
    </div>
  )
}

export default OpinionCard
