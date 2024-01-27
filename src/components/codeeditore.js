// components/CodeEditor.js

import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code, onChange }) => {
  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark" // You can choose a different theme
      value={code}
      options={options}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
