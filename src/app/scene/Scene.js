
import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls, PerspectiveCamera, OrbitControls } from '@react-three/drei'

import Lights from './Lights.js';
import Background from './Background.js';
import Helmet from '../components/Helmet.js';
import Content from '../components/Content.js';
import Loading from '../components/Loading.js';
import PostProcessing from '../effects/PostProcessing.js';

export default function Scene() {

    return (
        <Canvas dpr={[1, 2]} >
            <PerspectiveCamera position={[0, 0, 2.5]}>
                <Lights />
                <Background />
                <ScrollControls damping={5} pages={3.5} distance={1}>
                    <Suspense fallback={<Loading />}>
                        <Helmet 
                            scale={1}
                            position={[0, 0, -3]}
                            rotation={[0, 0, 0]}
                        />    
                    </Suspense>
                    <Scroll html style={{ width: '100%' }}>
                        <Content/>
                    </Scroll>
                </ScrollControls>
            </PerspectiveCamera>
            <PostProcessing/>
            {/* <OrbitControls/> */}
        </Canvas>
    )
}

