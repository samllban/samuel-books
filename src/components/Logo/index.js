import logo from '../../img/logo.svg';
import './styles.css';


function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p>
                <strong>Samuel Books</strong>
            </p>
        </div>
    );
}

export default Logo;
