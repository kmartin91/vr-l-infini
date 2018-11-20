import React from 'react';
import DefaultScene from './shared/component/scenes/defaultScene';

const Main = () => (
  <DefaultScene
    modelLink="/models/obj/captur/captur-news2.obj"
    modelLinkMtl="/models/obj/captur/captur-news2.mtl"
    modelLinkType="obj"
    stats
    debug
    sky="https://cdn.aframe.io/a-painter/images/sky.jpg"
    floor="https://cdn.aframe.io/a-painter/images/floor.jpg"
  />
);

export default Main;
