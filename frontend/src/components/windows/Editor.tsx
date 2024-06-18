import MonacoEditor from '@monaco-editor/react';

export default function Editor() {
  return (
    <>
    <div className="editor_">
      <MonacoEditor language="javascript" height="100vh" width="calc(100vw - 200px)"/>
    </div>
    
    </>
  );
}