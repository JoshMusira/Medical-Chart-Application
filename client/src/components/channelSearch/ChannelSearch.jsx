import './channelsearch.css'
import { AiOutlineSearch } from 'react-icons/ai'
const ChannelSearch = () => {
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <AiOutlineSearch />
                </div>
                <input
                    className='channel-search__input__text'
                    placeholder='Search...'
                    type="text"
                />
            </div>

        </div>
    )
}

export default ChannelSearch