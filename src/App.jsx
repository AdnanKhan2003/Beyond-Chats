import InboxPage from './pages/InboxPage/InboxPage'

import { useState } from 'react'

import styles from './App.module.css'
import UserChatPage from './pages/UserChatPage/UserChatPage'
import AiChatPage from './pages/AiChatPage/AiChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <InboxPage />
      <UserChatPage />
      <AiChatPage />
    </div>
  )
}

export default App
