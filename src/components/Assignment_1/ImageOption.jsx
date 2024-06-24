import "bootstrap/dist/css/bootstrap.min.css";

import "../Assignment_1/ImageOption.module.css";
import ImageList from "./ImageList";

function ImageOption() {

  return (
    <>
      <center>
        <h3>Select the correct Picture</h3>
        <h1>
          <i>Q: Which one is not a fruit ?</i>
        </h1>
      </center>
      <ImageList
       
      ></ImageList>
    </>
  );
}

export default ImageOption;
