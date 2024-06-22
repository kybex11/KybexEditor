import MonacoEditor from '@monaco-editor/react';
import '../../styles/Editor.scss';
import React, {useEffect,useState} from 'react';

export default function Editor() {
  const [editorContent, setEditorContent] = useState(''); 

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        saveDocument();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const saveDocument = () => {
    
  }
  
  return (
    <>
    <div className="editor_">
      <MonacoEditor language="javascript" height="100vh" theme='vs-dark' value={editorContent} onChange={(newValue) => setEditorContent(newValue || '')} width="calc(100vw - 200px)"/>
    </div>
    
    </>
  );
}