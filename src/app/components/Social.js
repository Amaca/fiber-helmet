import React from 'react'

export default function Social() {

    return (
        <div className="social">
            <div className="social-content">
                <span>FIND ME</span>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/amacuzza/" target="_blank" title="instagram">
                            <img src="./static/svg/instagram.svg"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/carletti.m/" target="_blank" title="facebook">
                        <img src="./static/svg/facebook.svg"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Amaca" target="_blank" title="twitter">
                        <img src="./static/svg/twitter.svg"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Amaca" target="_blank" title="github">
                        <img src="./static/svg/github.svg"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}