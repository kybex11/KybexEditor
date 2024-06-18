import MonacoEditor from '@monaco-editor/react';
import '../../styles/Editor.scss';

export default function Editor() {
  return (
    <>
    <div className="editor_">
      <MonacoEditor language="javascript" height="100vh" theme='vs-dark' width="calc(100vw - 200px)"/>
    </div>
    
    </>
  );
}