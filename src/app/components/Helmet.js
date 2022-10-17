import React, { useState, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scroll, useScroll } from '@react-three/drei'
import gsap, { Expo } from 'gsap';

export default function Helmet(props) {
    const gltf = useLoader(GLTFLoader, "./static/models/helmet/glTF/helmet.gltf");
    const ref = useRef();
    const data = useScroll();
    const [notScrollable, setScrollable] = useState(true);
    const root = document.querySelector('#root');
    const scrollDown = document.querySelector('.scrolldown');

    function callBackAnimation() {
        root.classList.add('_scroll');
        setScrollable(!notScrollable);
    }

    useEffect(() => {
        ref.current.position.set(0, -6, 7);
        ref.current.rotation.set(0.6, 0, 0);
        gsap.to(ref.current.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 2,
            ease: Expo.easeOut,
            onComplete: callBackAnimation
        })
        gsap.to(ref.current.rotation, {
            x: 0,
            y: 0,
            z: 0,
            duration: 2,
            ease: Expo.easeOut
        })
    }, [])

    useFrame(() => {
        if(notScrollable) return;
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

        a > 0.1 ? scrollDown.classList.add('_off') : scrollDown.classList.remove('_off')
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

