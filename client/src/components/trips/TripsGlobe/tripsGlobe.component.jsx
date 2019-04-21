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
            alpha : true,
            fullscreenButton: false
        }

        // We need to do all this to get rid of the default black background
        this.viewer = new Cesium.Viewer('cesiumContainer', globeOptions );
        this.viewer.scene.skyBox.destroy();
        this.viewer.scene.skyBox = undefined;
        this.viewer.scene.sun.destroy();
        this.viewer.scene.sun = undefined;
        this.viewer.scene.skyAtmosphere.destroy();
        this.viewer.scene.skyAtmosphere = undefined;
        this.viewer.scene.backgroundColor = new Cesium.Color(255,255,255,0);
    }
    
    render() {
        return (
            <div id='cesiumContainer' className="trips-globe" />
        );
    }
}

export default withRouter(TripsGlobe);

