import React, { useEffect, useRef } from "react";

import 'codemirror/mode/javascript/javascript';  // Import the language mode
import 'codemirror/theme/dracula.css'; 
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import CodeMirror from "codemirror";
import 'codemirror/lib/codemirror.css'

function Editor() {
    useEffect(() => {
        async function  init() {           
            CodeMirror.fromTextArea(
                document.getElementById('realtimeeditor'),
                {
                    mode: { name: "javascript", json: true },
                    theme: "dracula",
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );
            //editor.setSize(null,'100%')
        };
        init();
    }, []);

    return (
        <textarea  id="realtimeeditor"></textarea>
    );
};

export default Editor;

