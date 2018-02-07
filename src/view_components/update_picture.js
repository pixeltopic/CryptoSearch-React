import React from "react";

const UpdatePicture = (props) => {

    if (!props.pictureData) {
        return <div/>
    }
    return (
        <div>
            <img src={props.pictureData} alt="Coin Logo" class="coinlogo"/>
        </div>
    );
}

export default UpdatePicture;