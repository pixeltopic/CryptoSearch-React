import React from "react";
import { Thumbnail } from "react-bootstrap";

const UpdatePicture = (props) => {

    if (!props.pictureData) {
        return <div/>
    }
    return (
        <div>
            {/* <Image src={props.pictureData} responsive />; */}
            <Thumbnail href="#" alt="CoinLogo" src={props.pictureData} />
            {/* <img src={props.pictureData} alt="CoinLogo"/> */}
        </div>
    );
}

export default UpdatePicture;