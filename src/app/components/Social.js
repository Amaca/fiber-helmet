import React from 'react'

export default function Social() {

    return (
        <div className="social">
            <div className="social-content">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/amacuzza/" target="_blank" title="instagram">
                            <svg class="ico"><use xlink:href="#ico-instagram"></use></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/carletti.m/" target="_blank" title="facebook">
                            <svg class="ico"><use xlink:href="#ico-facebook"></use></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Amaca" target="_blank" title="twitter">
                            <svg class="ico"><use xlink:href="#ico-twitter"></use></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Amaca" target="_blank" title="github">
                            <svg class="ico"><use xlink:href="#ico-github"></use></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}