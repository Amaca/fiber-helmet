import React from 'react';

export default function Lights() {
    return (
        <>
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -5]} />
            <ambientLight intensity={0.4} />
        </>
    )
}