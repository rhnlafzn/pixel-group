const fs = require('fs');
const path = require('path');

const srcConsultation = "C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\1df06fab-829e-4f70-b5f8-70e6e8122148\\consultation_meeting_1781698413780.png";
const srcResearch = "C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\1df06fab-829e-4f70-b5f8-70e6e8122148\\research_analytics_1781698432785.png";

const destDir = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\images\\services";
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(srcConsultation, path.join(destDir, "consultation.png"));
console.log("Copied consultation image to public");

fs.copyFileSync(srcResearch, path.join(destDir, "research.png"));
console.log("Copied research image to public");
