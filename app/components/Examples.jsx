var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few examples location to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Warszawa'>Warszawa</Link>
                </li>
                <li>
                    <Link to='/?location=Lublin'>Lublin</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;