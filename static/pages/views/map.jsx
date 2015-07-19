 /** @jsx React.DOM */
    
var Map = React.createClass({
    render: function () {
        var map_style = {width: "100%", height: "400px"}
        return (
            <div role="tabpanel" className="tabs-panel fade in active" id="mapTab">
                <div className="map" data-lat={this.props.info.lat} data-lon={this.props.info.lon} id='map' style={map_style}>
                    
                </div>
            </div>
        );
    }
});

module.exports = Map;