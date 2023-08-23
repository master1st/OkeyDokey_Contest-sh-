// CameraModule.js
import { NativeModules } from 'react-native';

const CameraModule = NativeModules.CameraModule;

export const startCamera = () => {
  if (CameraModule && CameraModule.startCamera) {
    CameraModule.startCamera();
  }
};

export const stopCamera = () => {
  if (CameraModule && CameraModule.stopCamera) {
    CameraModule.stopCamera();
  }
};

export default {
  startCamera,
  stopCamera,
};
