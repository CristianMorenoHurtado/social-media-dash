import facebookLogo from '../images/icon-facebook.svg'
import twitterLogo from '../images/icon-twitter.svg'
import instagramLogo from '../images/icon-instagram.svg'
import youtubeLogo from '../images/icon-youtube.svg'
import upArrow from '../images/icon-up.svg'
import downArrow from '../images/icon-down.svg'

const Followers= ({color, randomNum, randomSmallNum}) => {
    return (
        <div className="dashboard">
            <div className='social-box-wrapper'>
                <div className='social-box-top-color-fb'></div>
                <div className='social-box'>
                    <div className='social-wrapper'>
                        <img className='social-media-logo' src={facebookLogo} alt='Facebook Logo' />
                        <span className='social-handle'>@nathanf</span>
                    </div>
                    <div className='followers' >
                        <h1 className='current-followers'>{randomNum()}</h1>
                        <p className='followers-para'>FOLLOWERS</p>
                    </div>
                    <div className='followers-today'>
                        <img className='up-arrow' src={color ? upArrow : downArrow} alt='up-arrow'/>
                        <span
                            style={{ color: color ? 'green' : 'red'}}>{randomSmallNum()} Today
                        </span>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper'>
                <div className='social-box-top-color-twtr'></div>
                <div className='social-box'>
                    <div className='social-wrapper'>
                        <img className='social-media-logo' src={twitterLogo} alt='Twitter Logo'  />
                        <span className='social-handle'>@nathanf</span>
                    </div>
                    <div className='followers' >
                        <h1 className='current-followers'>{randomNum()}</h1>
                        <p className='followers-para'>FOLLOWERS</p>
                    </div>
                    <div className='followers-today'>
                    <img className='up-arrow' src={color ? downArrow : upArrow} alt='up-arrow'/>
                        <span
                            style={{ color: color ? 'red' : 'green'}}>{randomSmallNum()} Today
                        </span>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper'>
                <div className='social-box-top-color-insta'></div>
                <div className='social-box'>
                    <div className='social-wrapper'>
                        <img className='social-media-logo' src={instagramLogo} alt='Instagram Logo' />
                        <span className='social-handle'>@realnathanf</span>
                    </div>
                    <div className='followers' >
                        <h1 className='current-followers'>{randomNum()}</h1>
                        <p className='followers-para'>FOLLOWERS</p>
                    </div>
                    <div className='followers-today'>
                    <img className='up-arrow' src={color ? upArrow : downArrow} alt='up-arrow'/>
                        <span
                            style={{ color: color ? 'green' : 'red'}}>{randomSmallNum()} Today
                        </span>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper'>
                <div className='social-box-top-color-yt'></div>
                <div className='social-box'>
                    <div className='social-wrapper'>
                        <img className='social-media-logo' src={youtubeLogo} alt='YouTube Logo'/>
                        <span className='social-handle'>@Nathan F.</span>
                    </div>
                    <div className='followers' >
                        <h1 className='current-followers'>{randomNum()}</h1>
                        <p className='followers-para'>FOLLOWERS</p>
                    </div>
                    <div className='followers-today'>
                    <img className='up-arrow' src={color ? downArrow : upArrow} alt='up-arrow'/>
                        <span
                            style={{ color: color ? 'red' : 'green'}}>{randomSmallNum()} Today
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Followers;