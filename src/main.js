import React from 'react';
import DefaultScene from './shared/component/scenes/defaultScene';

const Main = () => (
  <DefaultScene
    modelLink="/models/obj/model.obj"
    modelLinkMtl="/models/obj/model.mtl"
    modelLinkType="obj"
    stats
    debug
    sky="https://cdn.aframe.io/a-painter/images/sky.jpg"
    floor="https://cdn.aframe.io/a-painter/images/floor.jpg"
  />
);

export default Main;
