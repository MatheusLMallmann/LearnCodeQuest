import './styles.css';
import { Link } from 'react-router-dom';

export const LayoutComponents = (props) => {
    return(
        <div className= "container" >
            <div className='container-content'>
                
                <div className='menu'>
                    <div><Link to="/bootcamp"><button className='bootcampBttn'>Bootcamp</button></Link></div>
                    <div><Link to="/historico"><button className='histBttn'>Histórico</button></Link></div>
                    <div><Link to="/loja"><button className='lojaBttn'>Loja</button></Link></div>
                </div>
                
                <div className='wrap-content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default LayoutComponents