var React = require('react');

// ver1
//var WeatherMessage = React.createClass({
//    render: function (){
//        var {temp, location} = this.props;
//
//        return(
//            <p>Temperatura w {location} to: {temp} C</p>
//        );
//    }
//});

//ver2
//var WeatherMessage = (props) => {
//    var {temp, location} = props;
//
//    return(
//        <p>Temperatura w {location} to: {temp} C</p>
//    );
//};

//ver3
var WeatherMessage = ({temp, location}) => {
    return(
        <p>Temperatura w {location} to: {temp} C</p>
    );
};

module.exports = WeatherMessage;