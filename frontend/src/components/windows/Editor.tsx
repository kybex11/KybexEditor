import { useState } from "react";
import "../../styles/Editor.scss";

export default function Editor() {
  const [code, setCode] = useState();

  return (
    <>
    <textarea name="code" id="code_field" title="Enter your code here">
      test
    </textarea>
    </>
  );
};
