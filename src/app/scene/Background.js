import * as THREE from 'three'
import React from 'react';
import { useControls } from 'leva'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Noise as NoisePost } from '@react-three/postprocessing';
import { Environment } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Noise } from 'lamina';

export default function Background() {

    const props = useControls({
        baseColor: '#1a1a1a',
        baseAlpha: { value: 1.0, min: 0, max: 1, step: 0.1 },
        depthAlpha: { value: 0.4, min: 0, max: 1, step: 0.1 },
        depthColorA: '#ababcb',
        depthColorB: '#202024',
        depthOrigin: [0, 23, 87],
        noiseScale: { value: 0.4, min: 0, max: 1, step: 0.1 },
    })

    return (
        <>
            <Environment background resolution={64} >
                <mesh scale={100}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <LayerMaterial side={THREE.BackSide}>
                        <Base
                            color={props.baseColor}
                            alpha={props.baseAlpha}
                            mode="normal" />
                        <Depth
                            colorA={props.depthColorA}
                            colorB={props.depthColorB}
                            alpha={props.depthAlpha}
                            mode="normal"
                            near={0}
                            far={300}
                            origin={props.depthOrigin}
                        />
                        <Noise
                            mapping="local"
                            type="cell"
                            scale={props.noiseScale}
                            mode="multiply" />
                    </LayerMaterial>
                </mesh>
            </Environment>
        </>
    )
}
