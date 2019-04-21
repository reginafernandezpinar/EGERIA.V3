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
            animation: false
        }
        this.viewer = new Cesium.Viewer('cesiumContainer', globeOptions );
    }
    
    render() {
        return (
            <div id='cesiumContainer' className="trips-globe">
                
            </div>
        );
    }
}

export default withRouter(TripsGlobe);

