const Header = ({ user }) => {
    console.log(user.profile_key);
    return (
        <>
            <p>Edvora</p>
            <div>
                <span>{user.name}</span>
                {user.profile_key && <img src={user.profile_key} alt='user' />}
            </div>
        </>
    );
}

export default Header;