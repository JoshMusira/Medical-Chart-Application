import React from 'react'
import '../channelListContainer/channelListContainer.css'
import { ChannelSearch, CompanyHeader, SideBar } from '../../exports/exports'

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
            </div>
        </>
    )
}

export default ChannelListContainer