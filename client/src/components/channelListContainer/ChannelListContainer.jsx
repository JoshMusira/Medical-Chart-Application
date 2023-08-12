import React from 'react'
import '../channelListContainer/channelListContainer.css'
import { TeamChannelList, ChannelSearch, CompanyHeader, SideBar } from '../../exports/exports'

import { ChannelList, useChatContext } from 'stream-chat-react'

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listprops) => (
                        <TeamChannelList
                            {...listprops}
                            type="team"
                        />
                    )}
                />

            </div>
        </>
    )
}

export default ChannelListContainer