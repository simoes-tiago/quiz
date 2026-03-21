const fs = require('fs').promises;
const path = require('path');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const questionsDir = path.join(process.cwd(), 'questions');
    const files = await fs.readdir(questionsDir);
    
    const groups = [];
    for (const file of files) {
      const filePath = path.join(questionsDir, file);
      const stats = await fs.stat(filePath);
      if (stats.isFile()) {
        const content = await fs.readFile(filePath, 'utf-8');
        const lines = content.split('\n').filter(line => line.trim());
        const questionCount = lines.filter(line => line.match(/^\d+\./)).length;
        
        groups.push({
          id: file.replace(/\.[^/.]+$/, ""),
          filename: file,
          questionCount: questionCount
        });
      }
    }
    
    res.json(groups);
  } catch (error) {
    console.error("Error listing quiz groups:", error);
    res.status(500).json({ error: "Failed to list quiz groups" });
  }
};
