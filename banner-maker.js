const Jimp = require('jimp');
const fs = require("fs");

async function bannerMaker(){
const image = await (await Jimp.read("bgimage.png")).resize(800,800);
// const title  = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
const title = await Jimp.loadFont("./fonts/Tangerine-Bold.ttf/Tangerine-Bold.ttf.fnt");
const heading = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
// const para = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
const para =await Jimp.loadFont("./fonts/Rowdies-Regular.ttf/Rowdies-Regular.ttf.fnt");
await image.print(title,200,20,"Dosa - Recipe");

await image.print(heading,100,100,"Ingredients");

await image.print(heading,500,100,"Instructions");
let ht = 150;
await image.print(para,60,ht,"-2 TbSpoon of sugar");
await image.print(para,400,ht,"-First Take sugar in a bowl");
ht+=50;
await image.print(para,60,ht,"-2 TbSpoon of sugar");
await image.print(para,400,ht,"-First Take sugar in a bowl");
ht+=50;
await image.print(para,60,ht,"-2 TbSpoon of sugar");
await image.print(para,400,ht,"-First Take sugar in a bowl");
ht+=50;
await image.print(para,60,ht,"-2 TbSpoon of sugar");
await image.print(para,400,ht,"-First Take sugar in a bowl");
ht+=50;





await image.writeAsync("test.png");

}



 bannerMaker();
async function textOverlay() {
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    const image = await Jimp.read('');
  
    await image.print(font, 200, 10, 'Hello World!');
    await image.writeAsync(`test.png`);
  }
  
//   textOverlay();
async function waterMark(waterMarkImage) {
    let  watermark = await Jimp.read(waterMarkImage);
    
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    watermark = watermark.resize(image.getWidth(),image.getHeight());
   watermark = await watermark
    image.composite(watermark,0,0, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 0.256
    })
    await image.writeAsync(`test-watermark.png`);
  }
//   waterMark('naniz.jpg');



