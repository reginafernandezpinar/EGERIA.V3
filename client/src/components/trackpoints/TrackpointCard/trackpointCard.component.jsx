import React from "react";


// Presentational Component

const TrackpointCard = (props) => {
    const { trackpoint } = props;
    return (
        <div className="card">
            <div className="card-img-top"
                style={{ "background-image": `url(${trackpoint.photo})` }}>
            </div>
            <div className="card-body">
                <h5>{trackpoint.name}</h5>
                <div className="card-text overflow-hidden">
                    {trackpoint.description}
                </div>
            </div>
        </div>
    );
};

export default TrackpointCard;