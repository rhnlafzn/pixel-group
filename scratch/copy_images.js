const fs = require('fs');
const path = require('path');

const src140 = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images\\extracted_img_140.jpg";
const dest140 = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\extracted_img_140.jpg";

const src152 = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images\\extracted_img_152.jpg";
const dest152 = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\extracted_img_152.jpg";

fs.copyFileSync(src140, dest140);
console.log("Copied 140 to public");

fs.copyFileSync(src152, dest152);
console.log("Copied 152 to public");
