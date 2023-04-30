import React from 'react';

function Button(props: any) {
    const { onClick, children } = props;
    const testClick = () => {
        console.log("Hello World !!");
        if(onClick) onClick();
    }

    return (
        <button onClick={testClick}>
            {children}
        </button>
    );
}

export default Button;
