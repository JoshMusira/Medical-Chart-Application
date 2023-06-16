
import './App.css'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import ChannelContainer from './components/channelContainer'
import ChannelListContainer from './components/channelListContainer'

const apikey = 'sjfxze9b8c24'

//making an instance of stream-chat
const client = StreamChat.getInstance(apikey);

function App() {

  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light' >
        <ChannelListContainer />
        <ChannelContainer />

      </Chat>

    </div>
  )
}

export default App
