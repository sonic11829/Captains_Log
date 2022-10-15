const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <Default title="Logs Index">
                <ul>
                    {
                        logs.map((log) => {
                            const {date, input, shipIsReady} = log
                            return (
                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>
                                    {date}</a> {input}
                                    
                                     <br/>
                                    {
                                        shipIsReady? 
                                        'The Ship is ready Captain!':
                                        'The Ship is to damaged to leave Captain!'
                                    }
                                    <br/>
                                    <form method='POST' action={`/logs/${log._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${input} ${date}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index