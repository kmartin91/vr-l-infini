import React from 'react';
import 'aframe';
import FBXLoad from '../loaders/fbxLoader';
import { Entity } from 'aframe-react';

const LoadModel = (modelLink: string, modelLinkMtl: string, modelLinkType: string) => {
  let model3d = null;
  switch(modelLinkType.toLowerCase()) {
    case 'fbx': /* todo use fbxLoader */ break;
    case 'obj': type='obj'; model3d = <div>
        <a-asset-item id="tree-obj" src={modelLink} />
        <a-asset-item id="tree-mtl" src={modelLinkMtl} />
      </div>; break;
    default: model3d = FBXLoad(modelLink); break;
  }

  return model3d;
}

const DefaultScene = ({ modelLink, modelLinkMtl, modelLinkType, floor, sky, debug, stats }: Object) => {
  // const model = LoadModel(modelLink, modelLinkType, modelLinkMtl);
  console.log(modelLink, modelLinkMtl);

  return (
    <a-scene stats={stats} inspector={debug ? "url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js" : ''}>
      <a-assets>
        <img id="groundTexture" src={floor}/>
        <img id="skyTexture" src={sky}/>
      </a-assets>

      { modelLinkType === 'fbx' &&
        <React.Fragment>
          { /* Todo */ }
        </React.Fragment>
      }

      { modelLinkType === 'obj' &&
        <React.Fragment>
          <a-assets timeout="10000">
            <a-asset-item id="tree-obj" src={modelLink} />
            <a-asset-item id="tree-mtl" src={modelLinkMtl} />
          </a-assets>

          <Entity
              obj-model="obj: #tree-obj; mtl: #tree-mtl"
              scale="0.02 0.02 0.02"
              position="0 0 0"
          />
        </React.Fragment>
      }


      <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
      <Entity primitive="a-sky" height="4096" radius="30" src="#skyTexture" theta-length="90" width="2048" />
    </a-scene>
  )
}

export default DefaultScene;
