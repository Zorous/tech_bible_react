import React from "react";
import { Navbar } from "../layouts";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "../assets/styles/Tools.scss";
import { Link } from "react-router-dom";

function Tools() {
  const [tools, setTools] = useState();
  const [FollowIcon, setFollowIcon] = useState(false);

  //getting all the tools
  const dbRef = collection(db, "Tools");
  onSnapshot(dbRef, (docsSnap) => {
    const ToolsArray = [];
    docsSnap.forEach((doc) => {
      // console.log(doc.data());
      ToolsArray.push(doc.data());
    });
    console.log(ToolsArray);
    setTools(ToolsArray);
  });

  return (
    <div className="home-page-SPw">
      <Navbar />
      <div className="tools-wrapper">
        <div className="tools-section-ngu">
          <section id="focus" className="focus-section dark-mode">
            <div className="container-lg py-5">
              <div className="container px-0">
                <div className="row"></div>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
{tools?.map(tool=>(<div className="col">
                  <div className="card shadow-sm h-100">
                    <div className="card-image">
                      <img
                        src={tool.Icon}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="image-overlay"></div>
                    </div>

                    <div className="card-body">
                      <h3 className="card-title">
                        {tool.Name}
                      </h3>
                      <div className="text-left my-2">
                        <div className="sub-cat text-truncate">
                          <span className="badge rounded-pill bg-category text-uppercase">
                            topic
                          </span>{" "}
                        </div>
                      </div>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer. This is a longer card with supporting
                        text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                    <div className="card-footer py-3">
                      <div className="card-footer__info">
                        <span>01/04/2021</span>
                        <span className="read-more">
                          <a
                            className="text-uppercase read-more-2"
                            href="www.google.com"
                          >
                            Read more{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>))}
                

              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Tools;
