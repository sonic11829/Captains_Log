const React = require('react');
const Default = require('../layouts/Default.jsx');

class Show extends React.Component {
    render () {
        const {date, input, shipIsReady, _id} =this.props.log
        const capInput = input[0].toUpperCase() + input.substring(1)
        return (
            <Default title={`${date}`} log={this.props.log}>
                <p> {date}, {capInput}. {shipIsReady? 'The Ship is ready Captain!': 'The Ship is to damaged to leave Captain!'} </p>
            </Default>
        );
    }
}

module.exports = Show;