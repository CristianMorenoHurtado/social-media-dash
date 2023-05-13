let contrastToggle = false;

function toggleDarkMode() {
    contrastToggle = !contrastToggle
    contrastToggle ?    document.body.classList += ' dark-theme' :
                        document.body.classList.remove('dark-theme');
}


function randomNum() {
    let num = Math.floor(Math.random() * 20000) * 10
    return num.toString().length >= 4 ? num.toLocaleString('en-US') : num
}

const Nav = () => {
    return (
            <nav>
                <div>
                    <h1 className="nav-header">Social Media Dashboard</h1>
                    <h3 className="nav-subheader">Total Followers: {randomNum()}</h3>
                </div>
                <div className="dark-button-wrapper" onClick={toggleDarkMode}>
                    <h5 className="dark-mode-header">Dark mode</h5>
                    <div className="dark-mode-button">
                        <div className="dark-mode-slider"></div>
                    </div>
                </div>
            </nav>
    )
}

export default Nav;