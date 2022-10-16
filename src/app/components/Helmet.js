import React, { Suspense, useRef, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Html, Environment, Scroll, ScrollControls, Float, UseScroll, PerspectiveCamera, OrbitControls, useScroll } from '@react-three/drei'
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import * as THREE from 'three'

function Model(props) {
    const gltf = useLoader(GLTFLoader, "../static/models/helmet/glTF/helmet.gltf");
    const $mesh = useRef();
    const data = useScroll();

    useEffect(() => {
        // gsap.to($mesh.current.position, {
        //     x: 0,
        //     y: 5,
        //     z: -3.3,
        //     duration: 3.5,
        //     ease: Power2.easeInOut
        // })

        // gsap.to($mesh.current.rotation, {
        //     x: -Math.PI * 0.12,
        //     duration: 2.5,
        //     ease: Power2.easeInOut
        // })

    }, [])

    useFrame(() => {
        const a = data.range(0, 1)
        if (a < 0.848) {
            $mesh.current.position.y = -a * 18.6;
            $mesh.current.rotation.x = Math.sin($mesh.current.position.z * 0.199);
            $mesh.current.rotation.y = Math.sin($mesh.current.position.y * 0.35 * -a);
            $mesh.current.position.z = Math.sin($mesh.current.position.y * 0.78);
        } else {
            $mesh.current.position.y = $mesh.current.position.y;
            $mesh.current.position.z = $mesh.current.position.z;
            $mesh.current.rotation.y = $mesh.current.rotation.y;
        }
    });

    return (
        <>
            <Scroll>
                <mesh ref={$mesh}>
                    <primitive object={gltf.scene} {...props} />
                </mesh>
            </Scroll>
        </>
    );
}

export default function Helmet(props) {
    return (
        <Suspense fallback={null}>
            <Model {...props} />
        </Suspense>
    )
}
