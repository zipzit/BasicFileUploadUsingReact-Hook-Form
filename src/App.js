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
      <form onSubmit={handleSubmit(onSubmitFn)}>
        <div>
          <label htmlFor="avatar">Select a Photo</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            multiple
            ref={fileInput}
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            name="firstName"
            id="firstName"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
