const React = require('react')
const Default = require('../layouts/Default.jsx');

class Edit extends React.Component {
    render(){
        const {date, _id, input, shipIsReady} = this.props.log
        return (
            <Default title={`${date} Edit Page`} log={this.props.log}>
                <form method='POST' action={`/logs/${_id}?_method=PUT`}>
                    Date: <input type="text" name="date" defaultValue={date}></input><br/>
                    Log: <input type="text" name="input" defaultValue={input}></input><br/>
                    Ship Is Ready: <input type="checkbox" name="shipIsReady" defaultChecked={shipIsReady}></input><br/>
                    <input type="submit" value="Edit Log"></input>
                </form>
            </Default>
        )
    }
}

module.exports = Edit