import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const { handleSubmit, register } = useForm({
    mode: "onBlur"
  });

  // const [imageFile, setImageFile] = useState(null);

  // const handleChange = e => {
  //   e.persist(); // per ParmentierChristophe react-hook-form/issues/274
  //   // console.log("e: ", e);
  //   setImageFile(e.target.files[0]); // oops. Nothing is there..
  //   console.log(imageFile);
  // };

  const fileInput = React.createRef();

  const onSubmitFn = data => {
    // event.preventDefault();  // I believe react-hook-form handles this
    console.log(
      "onSubmitFn:",
      data,
      "  imageFile: ",
      fileInput.current.files[0].name
    );
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }

    fd.append(
      "image",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );
    axios
      .post("https://httpbin.org/post", fd, {
        onUploadProgress: ProgressEvent => {
          console.log(
            "Upload Progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        }
      })
      .then(res => {
        console.log("response from server: ", res);
      });
  };

  return (
    <>
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
    </>
  );
};

export default App;
