// CameraModule.java
package com.okeydokeycontest;

import android.Manifest;
import android.content.pm.PackageManager;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.graphics.SurfaceTexture; // Import SurfaceTexture
import android.content.Context; // Import Context
import android.util.Size;
import android.view.Surface;
import android.app.Activity; // Add this import
import android.content.Context; // Add this import
import androidx.core.app.ActivityCompat;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.PermissionListener;

public class CameraModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    private CameraDevice cameraDevice;

    public CameraModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CameraModule";
    }

    @ReactMethod
    public void requestCameraPermission(final Callback callback) {
        Activity activity = getCurrentActivity();
    if (activity != null) {
        PermissionListener listener = new PermissionListener() {
            @Override
            public boolean onRequestPermissionsResult(
                int requestCode,
                String[] permissions,
                int[] grantResults
            ) {
                if (requestCode == 123) {
                    boolean granted =
                        grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED;
                    callback.invoke(null, granted); // Modify this line
                    return true;
                }
                return false;
            }
        };
        ActivityCompat.requestPermissions(
            activity,
            new String[]{Manifest.permission.CAMERA},
            123
        );
    }
    }
    @ReactMethod
    public void startCameraStream() {
        try {
            CameraManager cameraManager = (CameraManager) reactContext.getSystemService(Context.CAMERA_SERVICE);
            String[] cameraIds = cameraManager.getCameraIdList();
            if (cameraIds.length > 0) {
                String cameraId = cameraIds[0];
                CameraCharacteristics characteristics = cameraManager.getCameraCharacteristics(cameraId);
                Size[] outputSizes = characteristics.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP)
                        .getOutputSizes(SurfaceTexture.class);

                if (outputSizes != null && outputSizes.length > 0) {
                    Size previewSize = outputSizes[0];
                    cameraManager.openCamera(cameraId, new CameraDevice.StateCallback() {
                        @Override
                        public void onOpened(CameraDevice camera) {
                            cameraDevice = camera;
                            // Implement camera capture logic using CameraDevice and CaptureSession
                        }

                        @Override
                        public void onDisconnected(CameraDevice camera) {
                            cameraDevice.close();
                            cameraDevice = null;
                        }

                        @Override
                        public void onError(CameraDevice camera, int error) {
                            cameraDevice.close();
                            cameraDevice = null;
                        }
                    }, null);
                }
            }
        } catch (CameraAccessException e) {
            e.printStackTrace();
        }
    }
}