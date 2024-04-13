import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, selectImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails

  const onClickSelectImage = () => {
    selectImage(id)
  }

  const buttonMode = isActive ? 'active-mode' : 'normal-mode'

  return (
    <li>
      <button  type="button" onClick={onClickSelectImage}>
        <img  key={id} className={buttonMode} src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
