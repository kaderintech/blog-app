import React from "react";
import "./manga.css"

const Manga = () => {
  return (
      <div className="manga-reads">
          <h5>Manga reads</h5>
          <div className="manga-posts">
              <div className="manga-post">
                  <img src="/manga1.svg" alt="" />
                  <div className="manga-desc">
                      <h5>Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Non culpa corporis
                          et molestias atque molestiae maxime
                          similique dolore?
                      </h5>
                      <p>21 March 2021</p>
                  </div>
              </div>
              <div className="manga-post">
                  <img src="/manga2.svg" alt="" />
                  <div className="manga-desc">
                      <h5>Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Non culpa corporis
                          et molestias atque molestiae maxime
                          similique dolore?
                      </h5>
                      <p>21 March 2021</p>
                  </div>
              </div>
              <div className="manga-post">
                  <img src="/manga3.svg" alt="" />
                  <div className="manga-desc">
                      <h5>Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Non culpa corporis
                          et molestias atque molestiae maxime
                          similique dolore?
                      </h5>
                      <p>21 March 2021</p>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Manga;
