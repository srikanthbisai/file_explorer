import React, { useState } from "react";
import explorer from "../lib/FolderData";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  if (explorer.isFolder) {
    return (
      <>
        <div
          style={{
            backgroundColor: "slategrey",
            color: "wheat",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
          }}
        >
          <span className="folder" onClick={() => setExpand(!expand)}>
            📁 {explorer.name}
          </span>
          <div style={{ gap: "10px", display: "flex" }}>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
          </div>
        </div>

        <div
          style={{
            display: expand ? "block" : "none",
            marginLeft: "25px",
            gap: "29px",
          }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input className="inputContainer_input" 
              autoFocus
              type="text"
              onBlur={()=> setShowInput({...showInput, visible:false})} 
              />
            </div>
          )}

          {explorer.items.map((exp, i) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <span
        className="file"
        style={{
          color: "wheat",
          backgroundColor: "slategrey",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "300px",
          padding: "10px",
        }}
      >
        📄 {explorer.name}
      </span>
    );
  }
}

export default Folder;
