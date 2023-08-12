import { useState } from 'react'
import './channelsearch.css'
import { AiOutlineSearch } from 'react-icons/ai'

const ChannelSearch = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const getChannels = async (text) => {
        try {
            // TODO: Fetch data
        } catch (error) {
            setQuery("")

        }
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true)
        setQuery(event.target.value);
        getChannels(event.target.value)
    }
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
                    value={query}
                    onChange={onSearch}

                />
            </div>

        </div>
    )
}

export default ChannelSearch