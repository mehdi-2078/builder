import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'web.zypod.com',
  appName: 'zypod-sandbox',
  webDir: 'public',
  server: {
      url: 'https://kidzy-zypod-pwa.sandpod.ir',
      cleartext: true
    }
plugins: {
    Camera: {
      iosUseScreenshots: false, // Determines whether to use screenshots instead of the camera on iOS (useful for simulators)
      iosSaveToGallery: true,   // Saves captured photos to the gallery on iOS
      androidSaveToGallery: true, // Saves captured photos to the gallery on Android
      presentationStyle: 'fullscreen', // Opens the camera in fullscreen mode
      allowEditing: true // Prevents photo editing after capture
    }
}
};


export default config;

