'use strict'
const images = [
  {
    src: 'images/mountains1.jpg',
    title: 'Ifen Panorama',
    description: 'The Hoher Ifen (also Hochifen) is a 2,230 metre (according to German survey: 2,229 m) high mountain in the Allgäu Alps, west of the Kleinwalsertal valley. In winter it forms the backdrop for a small ski area. It lies on the border between Germany and Austria. The summit is the highest point on the gently, tilted Ifen plateau.'
  },
  {
    src: 'images/mountains2.jpg',
    title: 'Ifen Panorama',
    description: 'Northeast of the Ifen plateau is the Gottesacker plateau, a karst landscape which has been designated a nature reserve and which has numerous caves and rare mountain plants. The most important caves are the Hölloch im Mahdtal and the Schneckenloch Cave near Schönenbach. On the eastern slopes of the massif a Stone Age dwelling site was discovered on the mountain pasture of Schneiderkürenalpe at a height of about 1,500 m.'
  },
  {
    src: 'images/mountains3.jpg',
    title: 'Ifen Panorama',
    description: 'On the southern side of the mountain an undisturbed wildlife area has been declared by the Bregenz district commission at the instigation of the Walser Hunting Club (Walser Jägerschaft), that has restricted the usual Austrian freedom of passage in accordance with § 33 of the Forestry Act.'
  },
  {
    src: 'images/mountains4.jpg',
    title: 'Ifen Panorama',
    description: 'Mountaineering clubs, in particular the German Alpine Club, the Austrian Alpine Club and Allgäu Climbing Group (IG Klettern Allgäu) have criticised the regulation by the Bregenz district commission, because, within its boundaries, on the southern edge of the plateau and at Bärenköpfe is one of the best sport climbing areas in the Alps. The south faces are called the Céüse of the Allgäu, a comparison to the most famous climbing area in Europe.'
  },
  {
    src: 'images/mountains5.jpg',
    title: 'Ifen Panorama',
    description: 'At the beginning of the 1970s the first ski lifts appeared on the Ifen, from which today\'s company, the Ifen-Bergbahn-Gesellschaft, emerged. For a long time it was mostly owned by Ruth Merckle, the wife of the pharmaceutical businessman Adolf Merckle. By taking over the Merckle family\'s 82% share and the 18% share of the family of Kleinwalsertal tourism pioneer, Alfons Herz.'
  },
  {
    src: 'images/mountains6.jpg',
    title: 'Ifen Panorama',
    description: 'The Kleinwalsertaler Bergbahn AG plans to build a link lift to the Walmendinger Horn The expansion plans were sharply criticised by several associations because they were viewed as damaging to the environment and would promote mass tourism. The Austrian Alpine Club section in the Kleinwalsertal criticised the plans as follows: The construction of this lift cannot be done in harmony with nature as we would wish to remind those launching such an initiative!'
  }
]

const fillFooter = (imagelist) => {
  const footer = document.querySelector('.footer');
  imagelist.forEach(e => {
    const img = document.createElement('img');
    img.setAttribute('src', e.src);
    img.setAttribute('class', 'deactive');
    footer.appendChild(img);
  })
}

const addMainImg = (imageList, index) => {
  const mainImg = document.querySelector('.main-image');
  mainImg.setAttribute('src', imageList[index].src);
  const title = document.querySelector('.imageTitle');
  title.textContent = imageList[index].title;
  const description = document.querySelector('.description');
  description.textContent = imageList[index].description;
}

const toggleThumbnails = () => {
  const buttons = document.querySelectorAll('.footer img');
  const mainImg = document.querySelector('.main-image');
  buttons.forEach((e, i) => {
    if (e.getAttribute('src') === mainImg.getAttribute('src')) {
      e.setAttribute('class', 'active');
    } else {
      e.setAttribute('class', 'deactive');
    }
  })
}

function gallery(imageList) {
  let counter = 0;
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');

  fillFooter(imageList);
  addMainImg(imageList, counter);
  toggleThumbnails();
  
  right.onclick = () => {
    if (counter === imageList.length - 1) {
      counter = -1;
    }
    counter++;
    addMainImg(imageList, counter);
    toggleThumbnails();
  }

  left.onclick = () => {
    if (counter === 0) {
      counter = imageList.length;
    }
    counter--;
    addMainImg(imageList, counter);
    toggleThumbnails();
  }

  const buttons = document.querySelectorAll('.footer img');
  buttons.forEach((e, i) => {
    e.onclick = () => {
      addMainImg(imageList, i);
      toggleThumbnails();
      counter = i;
    }
  })

}
gallery(images);
