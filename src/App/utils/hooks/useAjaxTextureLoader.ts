import { useEffect, useState } from 'react';
import { Cache, FileLoader, Texture, TextureLoader } from 'three';

const useAjaxTextureLoader: (url: string) => [Texture, boolean, number] = (url) => {
  const [texture, setTexture] = useState<Texture>();
  const [isLoaded, toggleIsLoaded] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!texture && !isLoaded) {
      AjaxTextureLoader().load(url, (loadedTexture: Texture) => {
        setTexture(loadedTexture);
        toggleIsLoaded(true);
      }, (progress: ProgressEvent) => {
        const { loaded, total } = progress;
        const progressResult: number = Math.round(loaded / total * 100);

        setProgress(progressResult);
      }, (error: ErrorEvent) => console.log(error));
    }
  }, [url, texture]);

  return [texture as Texture, isLoaded, progress];
};

function AjaxTextureLoader(): TextureLoader & {
  load: (url: string, onLoad: () => void, onProgress: () => void, onError: (event: ErrorEvent) => void) => void;
} {
  const cache = Cache;

  // Turn on shared caching for FileLoader, ImageLoader and TextureLoader
  cache.enabled = true;

  const textureLoader = new TextureLoader();
  const fileLoader = new FileLoader();

  fileLoader.setResponseType('blob');

  function load(url: string, onLoad: () => void, onProgress: () => void, onError: (event: ErrorEvent) => void) {
    fileLoader.load(url, (file: string | ArrayBuffer) => {
      if (file instanceof Blob) {
        cacheImage(file);
      } else {
        loadImageAsTexture();
      }
    }, onProgress, onError);

    function cacheImage(blob: any) {
      // ObjectURLs should be released as soon as is safe, to free memory
      const reader: FileReader = new FileReader();

      reader.readAsDataURL(blob);

      reader.onloadend = () => {
        const base64data: string | ArrayBuffer = reader.result as string | ArrayBuffer;
        
        const objUrl = base64data;
        const image = document.createElement('img') as HTMLImageElement;

        image.onload = () => {
          cache.add(url, image);
          document.body.removeChild(image);
          loadImageAsTexture();
        };

        (image as any).src = objUrl;
        image.style.visibility = 'hidden';
        document.body.appendChild(image);
      };
    }

    function loadImageAsTexture() {
      textureLoader.load(url, onLoad, () => {}, onError);
    }
  }

  return Object.assign({}, textureLoader, { load });
}

export default useAjaxTextureLoader;
