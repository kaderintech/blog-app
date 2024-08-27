import React from 'react';
import './CategoryContent.css';
import Image from 'next/image';
import Manga from '../manga/Manga';

const CategoryContent = ({ image, title, description }) => {
    return (
        <div className="category-section wrapper">
            <div className="category-content-wrapper">
                <div className="cat-main">
                    <Image width="601" height="290" src="/main-img.svg" className="cat-main-img" />
                    <div className="main-post-desc">
                        <span className="main-cat-post-date" >1 Month Ago </span>
                        <h5>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</h5>
                        <p>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                        <div>
                            <button>View Post
                                <div className="btnLine"></div>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className="cat-suggestions">
                    <div className="cat-suggest">
                        <img src="/suggest1.svg" alt="" />
                        <div className="cat-suggest-desc">
                            <h5>Akame Ga Kill: Season finale</h5>
                            <p>21 March 2021</p>
                        </div>
                    </div>
                    <div className="cat-suggest">
                        <img src="/suggest2.svg" alt="" />
                        <div className="cat-suggest-desc">
                            <h5>Akame Ga Kill: Season finale</h5>
                            <p>21 March 2021</p>
                        </div>
                    </div>
                    <div className="cat-suggest">
                        <img src="/suggest3.svg" alt="" />
                        <div className="cat-suggest-desc">
                            <h5>Akame Ga Kill: Season finale</h5>
                            <p>21 March 2021</p>
                        </div>
                    </div>
                    <div className="cat-suggest">
                        <img src="/suggest4.svg" alt="" />
                        <div className="cat-suggest-desc">
                            <h5>Akame Ga Kill: Season finale</h5>
                            <p>21 March 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryContent;
