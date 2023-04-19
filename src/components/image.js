import React from "react";
import ImgsViewer from "react-images-viewer";


function Image() {

    const images = [
        "/ASSETS/1.png",
        "/ASSETS/2.png",
        "/ASSETS/3.png",
        "/ASSETS/4.png"
    ];

    return (
        <ImgsViewer
            imgs={[
                { src: "/ASSETS/1.png" },
                { src: "/ASSETS/2.png" },
            ]}
            currImg={this.state.currImg}
            isOpen={this.state.viewerIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.closeViewer}
        />
    );
};
export default Image;