import '../styles/Upper.scss';
import React from 'react';
import { useState } from 'react';
import UpperFile from './upper/UpperFile';
import Settings from './windows/Settings';

export default function Upper() {
  const [openFile, setOpenFile] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const handleClickFile = () => {
    setOpenFile(!openFile);
  };

  const handleClickSettings = () => {
    setOpenSettings(!openSettings);
  }
  return (
    <>
      <button onClick={handleClickFile}>File</button>
      { openFile && <UpperFile/>}
      <button onClick={handleClickSettings}>Settings</button>
      { openSettings && <Settings/>}
    </>
  )
}
