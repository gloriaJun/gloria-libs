// codepen for test: https://codepen.io/gloriaJun/pen/RwGYZEw
// https://ysyapr91.tistory.com/3
interface IResizeImageOptions {
  file: File;
  maxSize: number;
}

function imagetoBlob(
  image: HTMLImageElement,
  width: number,
  height: number,
  type = 'image/jpeg',
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    if (!context) {
      throw 'Image can not convert to Blob';
    }

    context.drawImage(image, 0, 0, width, height);
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject('Image can not convert to Blob');
      }
    }, type);
  });
}

/**
 * Image file resize and convert to Blob
 * @param param0
 */
export function resizeImageToBlob({
  file,
  maxSize,
}: IResizeImageOptions): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // read file
    reader.readAsDataURL(file);

    reader.onload = function name(readerEvent) {
      try {
        const image = new Image();

        const target = readerEvent.target?.result;
        if (!target || typeof target != 'string') {
          return reject('Can not read the fijle');
        }

        image.src = target;

        image.onload = () => {
          let width = image.width;
          let height = image.height;

          if (width > maxSize || height > maxSize) {
            if (width > height) {
              height = height * (maxSize / width);
              width = maxSize;
            } else {
              width = width * (maxSize / height);
              height = maxSize;
            }
          }

          return resolve(imagetoBlob(image, width, height, file.type));
        };

        image.onerror = reject;
      } catch (e) {
        return reject(e);
      }
    };
  });
}
