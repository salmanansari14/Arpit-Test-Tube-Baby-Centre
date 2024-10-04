import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "aos/dist/aos.css";
import "../Style/Style.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://i.postimg.cc/5yY2VhNg/VANDANAREVIEW.png",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 4",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 5",
  },
];

const GoogleReview = () => {
  return (
    <div className="w-full px-32 py-3 bg-red-50 mx-auto">
      <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-ad2e5e08-1de5-4fde-8a64-b8282d48abb7" data-elfsight-app-lazy></div>
      </div>
      <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-600351c2-8ab0-4b23-8acf-fd491a40022f" data-elfsight-app-lazy></div>
      </div>

      <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-28ba9dd6-7b92-4ca4-a0f0-1ab3553f6130" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};
export default GoogleReview;

{/* <div className="sk-ww-google-reviews bg-blue-300"
  data-embed-id="25436027"></div> */}