const getGalleryContainer = document.getElementById("gallery");
  
const changeImagesFigure = gallery => {
    const image =gallery.getElementsByTagName('img');
    //console.log(image)
    const arrayImg = Array.from (image);
    //console.log(arrayImg);
    arrayImg.forEach(function (img) {
        const imaAlt = img.getAttribute('alt');
        const imaSrc = img.getAttribute('src');
        let fiugureT = `<figure><img src=${imaSrc}></img><figcaption>${imaAlt}</figcaption></figure>`;
        img.outerHTML = fiugureT;
        
    });
  
}
changeImagesFigure(getGalleryContainer);