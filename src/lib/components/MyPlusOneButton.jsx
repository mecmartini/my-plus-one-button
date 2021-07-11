import React from 'react';
import { useState } from 'react';

const MyPlusOneButton = (props) => {

    const [num, setNum] = useState(1);

    const handleClick = (e) => {
        setNum(num + 1);
    }

    return (
        <>
            <h1>{num}</h1>
            <button className="btn btn-success" onClick={handleClick}>Plus One</button>
        </>
    )
}

export default MyPlusOneButton;
