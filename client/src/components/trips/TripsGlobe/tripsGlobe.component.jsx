import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cesium from 'cesium';

// Import global resources

/*
    Info about how to install Resium can be found here https://resium.darwineducation.com/installation
    We are also using Craco Cesium, more info here https://github.com/darwin-education/craco-cesium
*/
class TripsGlobe extends Component {
    constructor(props) {
        super(props);
        this.createMarkers = this.createMarkers.bind(this);
        this.markersCreated = false;
    }

    componentDidMount() {
        // More info about options here https://cesiumjs.org/Cesium/Build/Documentation/Viewer.html
        const globeOptions = {
            homeButton: false,
            timeline: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            navigationHelpButton: false,
            animation: false,
            targetFrameRate: 24,
            alpha: true,
            fullscreenButton: false
        }

        Cesium.InfoBoxViewModel.defaultSanitizer = function (rawHtml) { return rawHtml; };

        // We need to do all this to get rid of the default black background
        this.viewer = new Cesium.Viewer('cesiumContainer', globeOptions);
        const { scene } = this.viewer;
        scene.skyBox.destroy();
        scene.skyBox = undefined;
        scene.sun.destroy();
        scene.sun = undefined;
        scene.skyAtmosphere.destroy();
        scene.skyAtmosphere = undefined;
        scene.backgroundColor = new Cesium.Color(255, 255, 255, 0);

        // Interaction with entities from the globe (markers)
        let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction((movement) => {
            let pickedObject = scene.pick(movement.position);
            if (Cesium.defined(pickedObject)) {
                // Dispatch action to select trackpoint
                this.props.setSelectedTrackpoint(pickedObject.id.name);

            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

    componentWillUnmount() {
        this.props.setSelectedTrackpoint({});
    }

    componentDidUpdate(prevProps) {        
        if ((prevProps.trackpoints.length === 0 && this.props.trackpoints.length !== 0) ||
            (!this.markersCreated && this.props.trackpoints.length !== 0)) {
            this.createMarkers();
        }
    }

    createMarkers() {
        const { trackpoints } = this.props;
        trackpoints.forEach(trackpoint => {
            let marker = this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(trackpoint.lon, trackpoint.lat),
                point: {
                    pixelSize: 10,
                    color: Cesium.Color.YELLOW
                },
                name: trackpoint.id
            });
        });
        this.markersCreated = true;
    }

    render() {
        const { selectedTrackpoint } = this.props;
        return (
            <div className="trips-globe">
                <div id='cesiumContainer' className="trips-globe">
                </div>
                {selectedTrackpoint &&
                    <div
                        className="selected-trackpoint-container"
                        onClick={() => this.props.history.push(`/trip/${selectedTrackpoint.trip_id}`)}
                    >
                        <h5>{selectedTrackpoint.name}</h5>
                        <div className="description-container">
                            <p>{selectedTrackpoint.description}</p>
                        </div>
                        <div className="image-container">
                            <img src={selectedTrackpoint.photo} />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(TripsGlobe);

