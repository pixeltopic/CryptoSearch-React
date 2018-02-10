import React from "react";
// import { Image } from "react-bootstrap";

const UpdatePicture = (props) => {

    if (!props.pictureData) {
        return <div/>
    }
    return (
        <div>
            {/* <Image src={props.pictureData} responsive />; */}
            <img src={props.pictureData}/>
        </div>
    );
}

export default UpdatePicture;