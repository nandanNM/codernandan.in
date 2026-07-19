import React from "react";

import { USER } from "@/data/user";

import { Panel, PanelHeader, PanelTitle } from "../panel";
import { PanelTitleCopy } from "../panel-title-copy";
import { CardSwipe } from "./card-swipe";

export function Gallery() {
  return (
    <Panel id="gallery">
      <PanelHeader>
        <PanelTitle>
          <a href="#gallery">Gallery</a>
          <PanelTitleCopy id="gallery" />
        </PanelTitle>
      </PanelHeader>

      <div className="max-w-[400px] p-4">
        <CardSwipe
          images={USER.galleryImages}
          autoplayDelay={2000}
          slideShadows={false}
        />
      </div>
    </Panel>
  );
}
