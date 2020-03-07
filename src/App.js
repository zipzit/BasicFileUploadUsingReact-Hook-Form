// CSS from:
// https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css

// Input for File format from https://mdbootstrap.com/docs/jquery/forms/file-input/

// https://reactjs.org/docs/uncontrolled-components.html

import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [displayWords, setDisplayWords] = useState("Choose Multiple Files");

  const onChangeFn = e => {
    e.persist;
    console.log(e.target.value); // just shows the first file selected...
    console.log(e.target.files.length);
    setDisplayWords(e.target.files.length + " file(s) selected...");
  };

  return (
    <div>
      <div className="AppClass">
        <h1>Bootstrap Form</h1>
        <h2>Select multiple files - simple styling example</h2>
      </div>
      <p>&nbsp;</p>

      <form>
        <div className="input-group col-md-12">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload
            </span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              multiple
              onChange={e => onChangeFn(e)}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {displayWords}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
