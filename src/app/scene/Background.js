import * as THREE from 'three'
import React from 'react';
import { useControls } from 'leva'
import { Environment } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Noise } from 'lamina';

export default function Background() {

    const props = useControls({
        baseColor: '#000000',
        baseAlpha: { value: 1.0, min: 0, max: 1, step: 0.1 },
        depthAlpha: { value: 0.4, min: 0, max: 1, step: 0.1 },
        depthColorA: '#70708d',
        depthColorB: '#29292e',
        depthOrigin: [0, 23, 87],
        noiseScale: { value: 0.4, min: 0, max: 1, step: 0.1 },
    })

    return (
        <>
            <Environment background resolution={512} >
                <mesh scale={100}>
                    <sphereGeometry args={[1, 512, 512]} />
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
                            mode="softlight" />
                    </LayerMaterial>
                </mesh>
            </Environment>
        </>
    )
}
