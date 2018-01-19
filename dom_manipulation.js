export default class DOM {
  constructor(){
  }

  createImageElement(icon){
    const image = document.createElement('img')
    image.src = icon
    return image
  }

}