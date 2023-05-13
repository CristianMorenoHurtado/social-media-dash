import facebookLogo from '../images/icon-facebook.svg'
import twitterLogo from '../images/icon-twitter.svg'
import instagramLogo from '../images/icon-instagram.svg'
import youtubeLogo from '../images/icon-youtube.svg'
import upArrow from '../images/icon-up.svg'
import downArrow from '../images/icon-down.svg'

const Data = () => {
    function randomNum() {
        return Math.floor(Math.random() * 1000)
    }

    function randomSmallNum() {
        return Math.floor(Math.random() * 1000)
    }

    let color = 0;
    randomSmallNum() % 2 ? color = 1 : color = 0;
    return (
        <div className="dashboard">
            <div className='social-box-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Page Views</span>
                        <img className='social-media-logo' src={facebookLogo} alt='Facebook Logo' />
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Likes</span>
                        <img className='social-media-logo' src={facebookLogo} alt='Facebook Logo' />
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Likes</span>
                        <img className='social-media-logo' src={instagramLogo} alt='Instagram Logo' />
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Profile Views</span>
                        <img className='social-media-logo' src={instagramLogo} alt='Instagram Logo' />
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper overview-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Retweets</span>
                        <img className='social-media-logo' src={twitterLogo} alt='Twitter Logo'  />
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper overview-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Likes</span>
                        <img className='social-media-logo' src={twitterLogo} alt='Twitter Logo'  />
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper overview-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Likes</span>
                        <img className='social-media-logo' src={youtubeLogo} alt='YouTube Logo'/>
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-box-wrapper overview-wrapper'>
                <div className='social-box social-box-overview'>
                    <div className='social-wrapper-overview'>
                        <span className='social-handle'>Total Views</span>
                        <img className='social-media-logo' src={youtubeLogo} alt='YouTube Logo'/>
                    </div>
                    <div className='followers-overview' >
                        <h1 className='daily-followers'>{randomNum()}</h1>
                        <div className='overciew-percent'>
                            <img className='up-arrow' src={color === 1 ? upArrow : downArrow} alt='up-arrow'/>
                            <span
                                style={{ color: color === 1 ? 'green' : 'red'}}>{randomSmallNum()}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;