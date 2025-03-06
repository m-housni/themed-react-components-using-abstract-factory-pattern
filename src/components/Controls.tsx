import React from 'react';
import ThemedButton from './Button/ThemedButton';


const Controls: React.FC = () => {
    return (
        <>
            <ThemedButton label="Btn 1" onClick={() => alert("Button 1 Clicked")} />
            <ThemedButton label="Btn 2" onClick={() => alert("Button 2 Clicked")} />
        </>
    );
};

export default Controls;