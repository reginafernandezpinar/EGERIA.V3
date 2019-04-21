import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toastr } from "react-redux-toastr";
import Cesium from "cesium";

// Import global resources

/*
    Info about how to install Resium can be found here https://resium.darwineducation.com/installation
    We are also using Craco Cesium, more info here https://github.com/darwin-education/craco-cesium
*/
class TripsGlobe extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.createMarkers = this.createMarkers.bind(this);
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
        handler.setInputAction(function (movement) {
            var pickedObject = scene.pick(movement.position);
            if (Cesium.defined(pickedObject)) {
                console.log('click object', pickedObject.id.name);
                
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

    componentDidUpdate(prevProps) {
        console.log('prevProps', prevProps, 'this.props', this.props);

        if (prevProps.trackpoints.length === 0 && this.props.trackpoints.length !== 0) {
            this.createMarkers();
        }
    }

    createMarkers() {
        const { trackpoints } = this.props;
        // let billboards = this.viewer.scene.primitives.add(new Cesium.BillboardCollection());
        trackpoints.forEach(trackpoint => {

            let marker = this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(trackpoint.lon, trackpoint.lat),
                point: {
                    pixelSize: 20
                },
                name: trackpoint.id,
                billboard: {
                    image: trackpoint.photo,
                    width: 60,
                    height: 40
                }
            });
            // billboards.add({
            //     position: Cesium.Cartesian3.fromDegrees(trackpoint.lon, trackpoint.lat),
            //     distance: 10,
            //     image: trackpoint.photo,
            //     width: 60,
            //     height: 40
            // });

        });
    }

    render() {
        return (
            <div id='cesiumContainer' className="trips-globe" />
        );
    }
}

export default withRouter(TripsGlobe);

