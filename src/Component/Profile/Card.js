import Couverture from './Couverture';
import ProfilPhoto from './ProfilPhoto';
import FullName from './FullName';
import Address from './Address';

const CardStyle = {
  display : 'flex',
  flexDirection : 'column',
  margin : 'auto 30%',
  backgroundColor: 'rgb(240, 242, 245)',
  boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)'
}

const Card = () => {
    return (
        <div style={CardStyle}>
            <Couverture/>
            <ProfilPhoto/>
            <br/><br/>
            <FullName/>
            <Address/>
        </div>
    )
}

export default Card;