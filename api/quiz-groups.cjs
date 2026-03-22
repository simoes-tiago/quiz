const fs = require('fs').promises;
const path = require('path');

exports.handler = async function(event, context) {
  // Apenas permitir GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // No Netlify, com included_files, a pasta questions fica na raiz do projeto
    // O process.cwd() no Netlify aponta para a raiz da tarefa/projeto
    const questionsDir = path.join(process.cwd(), 'questions');
    
    console.log('Procurando questões em:', questionsDir);
    
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
          id: file,
          filename: file,
          questionCount: questionCount
        });
      }
    }
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groups),
    };
  } catch (error) {
    console.error("Erro ao listar grupos:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to list quiz groups", details: error.message }),
    };
  }
};
