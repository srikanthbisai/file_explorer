import React from 'react'
import { useState } from 'react'
import explorer from './lib/FolderData';
import Folder from './components/Folder';

function App() {
 const [explorerData, setExplorerData] = useState(explorer);
 console.log(explorerData);
  return (
    <div>
      <Folder explorer={explorerData}/>
    </div>
  )
}

export default App
