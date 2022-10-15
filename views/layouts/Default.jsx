const React = require('react');

class Default extends React.Component {
    render(){
        const {log, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                <nav>
                    <a href="/logs">Go To Logs Home</a>
                    <a href="/logs/new">Shall We Create A Log Captain?</a>
                    { log? <a href={`/logs/${log._id}/edit`}> Edit {log.date} </a> : ''}
                    { log? <a href={`/logs/${log._id}`}> Show {log.date} </a> : ''}
                </nav>
                    <h1>
                        {title}
                    </h1>

                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default