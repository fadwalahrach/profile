import photo from './photo.PNG'

const photoStyle = {
    borderRadius : '50%',
    position : 'absolute',
    marginTop : '50px',
    marginLeft : '20px'
}
const ProfilPhoto = () => {
    return (
        <img src={photo} alt="" width="200" height="200" style={photoStyle}/>
    )
}

export default ProfilPhoto;