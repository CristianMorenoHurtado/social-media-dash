import Data from './Data';
import Followers from './Followers'



const Main = ({color, randomNum, randomSmallNum}) => {
    return (
        <main>
            <Followers color={color} randomNum={randomNum} randomSmallNum={randomSmallNum} />
            <h2 data-testid="overview" className='overview-header'>Overview - Today</h2>
            <Data color={color} randomNum={randomNum} randomSmallNum={randomSmallNum} />
        </main>
    )
}

export default Main;

