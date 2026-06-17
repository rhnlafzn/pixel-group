const fs = require('fs');
const path = require('path');

const srcDir = "C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\1df06fab-829e-4f70-b5f8-70e6e8122148";
const destServicesDir = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\images\\services";
const destAboutDir = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\images\\about";

// Ensure destination directories exist
if (!fs.existsSync(destServicesDir)) {
  fs.mkdirSync(destServicesDir, { recursive: true });
}
if (!fs.existsSync(destAboutDir)) {
  fs.mkdirSync(destAboutDir, { recursive: true });
}

const mappings = [
  // Services page
  { src: "production_1_1781699725881.png", dest: path.join(destServicesDir, "production_1.png") },
  { src: "production_2_1781714420821.png", dest: path.join(destServicesDir, "production_2.png") },
  { src: "production_3_1781714477063.png", dest: path.join(destServicesDir, "production_3.png") },
  
  { src: "specialist_1_1781714510062.png", dest: path.join(destServicesDir, "specialist_1.png") },
  { src: "specialist_2_1781714538475.png", dest: path.join(destServicesDir, "specialist_2.png") },
  { src: "specialist_3_1781714581646.png", dest: path.join(destServicesDir, "specialist_3.png") },
  
  { src: "consultation_meeting_1781698413780.png", dest: path.join(destServicesDir, "consultation_1.png") },
  { src: "consultation_2_1781714631195.png", dest: path.join(destServicesDir, "consultation_2.png") },
  { src: "consultation_3_1781714665800.png", dest: path.join(destServicesDir, "consultation_3.png") },
  
  { src: "research_analytics_1781698432785.png", dest: path.join(destServicesDir, "research_1.png") },
  { src: "research_2_1781714697313.png", dest: path.join(destServicesDir, "research_2.png") },
  { src: "research_3_1781714753506.png", dest: path.join(destServicesDir, "research_3.png") },
  
  // About / Why Us page
  { src: "whyus_1_1781714827170.png", dest: path.join(destAboutDir, "whyus_1.png") },
  { src: "whyus_2_1781714888284.png", dest: path.join(destAboutDir, "whyus_2.png") },
  { src: "whyus_3_1781714936766.png", dest: path.join(destAboutDir, "whyus_3.png") },
  { src: "whyus_4_1781714975634.png", dest: path.join(destAboutDir, "whyus_4.png") },
  { src: "whyus_5_1781715037188.png", dest: path.join(destAboutDir, "whyus_5.png") },
  
  // Vision & Mission
  { src: "vision_1781715149600.png", dest: path.join(destAboutDir, "vision.png") },
  { src: "mission_1_1781715249013.png", dest: path.join(destAboutDir, "mission_1.png") }
];

for (const m of mappings) {
  const fullSrcPath = path.join(srcDir, m.src);
  if (fs.existsSync(fullSrcPath)) {
    fs.copyFileSync(fullSrcPath, m.dest);
    console.log(`Successfully copied ${m.src} -> ${path.basename(m.dest)}`);
  } else {
    console.warn(`Source file not found: ${fullSrcPath}`);
  }
}
console.log("Image copying process completed.");
