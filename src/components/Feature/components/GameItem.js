import '../../../assets/scss/home/gameItem.scss'

const GameItem = ({
  image,
  headingText,
  developerName,
  description,
  gener,
  developmentStatus,
  platform,
}) => {
  return (
    <div className="game__container">
      <div className="image__contaner">
        <img src={image} alt="game image" />
      </div>
    </div>
  )
}

export default GameItem
