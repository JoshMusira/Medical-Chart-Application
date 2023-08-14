
import './App.css'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { Auth, ChannelContainer, ChannelListContainer } from './exports/exports'

const apikey = 'sjfxze9b8c24'

//making an instance of stream-chat
const client = StreamChat.getInstance(apikey);

function App() {
  let authToken = false

  if (!authToken) return <Auth />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>

    </div>
  )
}

export default App
