import React, { Component, useState } from "react";
import { ReactCodeJar, useCodeJar } from "react-codejar";

const highlight = (editor: HTMLElement) => {
    let code = editor.textContent;
    if (code) {
        code = code.replace(/\((\w+?)(\b)/g, '(<font color="#8a2be2">$1</font>$2');
        editor.innerHTML = code;
    }
};

export default function Editor() {
  const [code, setCode] = useState('(format t "lisp example")');

  return (
    <ReactCodeJar
      code={code} // Initial code value
      onUpdate={setCode} // Update the text
      highlight={highlight} // Highlight function, receive the editor
      lineNumbers={true} // Show line numbers
      style={{ height: '400px', width: '100%' }} // Add style prop
    />
  );
};
