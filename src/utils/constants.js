export const logo = "https://res.cloudinary.com/dejxspajc/image/upload/v1710416783/logo_ntrdkp.png";
export const bg ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";
  export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];

  export const OPENAI_KEY = "AIzaSyDep0cYzLrOzfuuOgU27nje06wkvK_CFxs"