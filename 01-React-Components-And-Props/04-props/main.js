import ReactDOM from 'react-dom'
import React from 'react'
import Numeric from './Numeric'

ReactDOM.render(<Numeric incrementText="inc" decrementText="dec" value={4} />,
                document.getElementById('root'))
