import FBXLoader from 'three-fbx-loader';

const FBXLoad = (modelLink) => {
  const loader = new FBXLoader();

  let model3D = null;
  loader.load(modelLink, (object3D) => {
    model3D = object3D;
  })

  return model3D;
}

export default FBXLoad;
