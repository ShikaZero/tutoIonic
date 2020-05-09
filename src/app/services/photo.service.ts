import {Injectable} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await  Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

}

interface Photo {
  filePath: string;
  webviewPath: string;
  base64?: string;
}
