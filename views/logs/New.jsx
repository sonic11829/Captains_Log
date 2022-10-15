const React = require('react')
const Default = require('../layouts/Default.jsx');

class New extends React.Component {
    render(){
        return (
            <Default title="Ready To Create A New Log Captain">
            <form method="POST" action="/logs">
                Date: <input type="text" name="date" placeholder='Date Log Was Created'></input><br/>
                Log: <input type="text" name="input" placeholder='Insert Log Here'></input><br/>
                Ship Is Ready: <input type="checkbox" name="shipIsReady"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New