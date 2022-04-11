import './Header.css';

const Header = ({ user }) => {
    return (
        <div className='container'>
            <h1>Edvora</h1>
            <div>
                <h2>{user.name}</h2>
                {user.profile_key && <img src={user.profile_key} alt='user' />}     {/* conditional rendering */}     
            </div>
        </div>
    );
}

export default Header;