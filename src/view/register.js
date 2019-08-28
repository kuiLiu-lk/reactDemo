import React from 'react';
import { Link } from "react-router-dom";

class register extends React.Component {
    render() {
        return (
            <div>
                <h1>注册</h1>
                <Link to="/" replace >回到登录</Link>
            </div>
        )
    }
}

export default register;