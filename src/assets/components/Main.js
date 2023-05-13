import Data from './Data';
import Followers from './Followers'



const Main = () => {
    return (
        <main>
            <Followers />
            <h2 className='overview-header'>Overview - Today</h2>
            <Data />
        </main>
    )
}

export default Main;

