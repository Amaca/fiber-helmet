
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Lights from './Lights.js';
import Background from './Background.js';
import Helmet from '../components/Helmet.js';
import Content from '../components/Content.js';
import PostProcessing from '../effects/PostProcessing.js';


export default function Scene() {

    return (
        <Canvas dpr={[1, 2]} >
            <PerspectiveCamera position={[0, 0, 2.5]}>
                <Lights />
                {/* <Helmet
                    anim={animable} 
                    scale={1}
                    position={[0, -5, -0.5]}
                    rotation={[Math.PI * 0.15, 0, 0]}
                /> */}
                <Background />
                <ScrollControls damping={5} pages={3.5} distance={1}>
                    <Helmet
                        scale={1}
                        position={[0, 0, -3]}
                        rotation={[0, 0, 0]}
                    />
                    <Scroll html style={{ width: '100%' }}>
                        <Content/>
                    </Scroll>
                </ScrollControls>
            </PerspectiveCamera>
            {/* <PostProcessing/> */}
        </Canvas>
    )
}

