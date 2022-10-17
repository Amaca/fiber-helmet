import React, { useState, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scroll, useScroll } from '@react-three/drei'
import gsap, { Power2 } from 'gsap';

export default function Helmet(props) {
    const gltf = useLoader(GLTFLoader, "./static/models/helmet/glTF/helmet.gltf");
    const ref = useRef();
    const data = useScroll();
    const [notScrollable, setScrollable] = useState(true);

    function callBackAnimation() {
        setScrollable(!notScrollable)
    }

    useEffect(() => {
        // gsap.to(ref.current.position, {
        //     x: 0,
        //     y: 5,
        //     z: -2,
        //     duration: 1.5,
        //     ease: Power2.easeInOut,
        //     onComplete: callBackAnimation
        // })

        // gsap.to(ref.current.rotation, {
        //     x: 0,
        //     duration: 1.5,
        //     ease: Power2.easeInOut
        // })
    }, [])

    useFrame(() => {
        //if(notScrollable) return;
        const a = data.range(0, 1)
        if (a < 0.848) {
            ref.current.position.y = -a * 18.6;
            ref.current.rotation.x = Math.sin(ref.current.position.z * 0.199);
            ref.current.rotation.y = Math.sin(ref.current.position.y * 0.35 * -a);
            ref.current.position.z = Math.sin(ref.current.position.y * 0.79);
        } else {
            ref.current.position.y = ref.current.position.y;
            ref.current.position.z = ref.current.position.z;
            ref.current.rotation.y = ref.current.rotation.y;
        }
    });

    return (
        <>
            <Scroll>
                <mesh ref={ref}>
                    <primitive object={gltf.scene} {...props} />
                </mesh>
            </Scroll>
        </>
    );
}

