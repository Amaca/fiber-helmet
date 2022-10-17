import React from 'react';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Noise as NoisePost } from '@react-three/postprocessing';

export default function PostProcessing() {
    return (
        <>
            <EffectComposer multisampling={1}>
                <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.2} intensity={1} />
                <NoisePost opacity={0.022} />
                <Vignette eskil={false} offset={0.1} darkness={0.7} />
            </EffectComposer>
        </>
    )
}