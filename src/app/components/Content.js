import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

export default function Content() {
    const section1 = useRef()
    const section2 = useRef()
    const scrolldown = useRef()
    const scrollData = useScroll();

    useEffect(() => {
        // gsap.to('#text2', {
        //     x: 100,
        //     duration: 5,
        //     scrollTrigger: {
        //         trigger: "#text2",
        //         markers: true,
        //         start: "top center",
        //         end: "bottom top",
        //     }
        // });
        // gsap.to(scrolldown.current, {
        //     x: 0,
        //     y: -20,
        //     duration: 0.8
        // })
    }, []);

    useFrame(() => {
       
    });

    return (
        <div className="wrapper">
            <section className="section _hero" ></section>
            <section className="section _main _left">
                <div className="content" id="text-main" ref={section2}>
                     consectetur adipisicing elit. Error, quaerat! Corrupti sit at id mollitia, dicta, rerum
                </div>
            </section>
            <section className="section _more _right">
                <div className="content" id="text-more" ref={section2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quaerat! Corrupti sit at id mollitia, dicta, rerum
                </div>
            </section>
            <footer className="footer">
                <div className="content" id="text-footer" ref={section2}>
                    FOOTER
                </div>
            </footer>
        </div>
    )
}