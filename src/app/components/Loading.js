import React from 'react'
import { useProgress, Html } from '@react-three/drei'

export default function Loading() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    if(loaded) {
        const main = document.querySelector('#root');
        main.classList.add('_loaded');
    }
    return <></>
}