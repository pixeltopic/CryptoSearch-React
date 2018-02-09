import React from "react";

const UpdatePicture = (props) => {

    if (!props.pictureData) {
        return <div/>
    }
    return (
        <div>
            <img src={props.pictureData} alt="Coin Logo" className="coinlogo"/>
        </div>
    );
}

export default UpdatePicture;