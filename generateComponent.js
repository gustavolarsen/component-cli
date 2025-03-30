#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtém argumentos da linha de comando
const args = process.argv;
if (args.length < 3) {
  console.error(
    "Por favor, forneça o nome do componente. Exemplo: node generateComponent.js MeuComponente"
  );
  process.exit(1);
}

const componentName = args[2];
const className = componentName.toLowerCase();

// Caminhos das pastas
const componentsDir = path.join(__dirname, "src/components");
const componentDir = path.join(componentsDir, componentName);
const componentFile = path.join(componentDir, `${componentName}.jsx`);
const styleFile = path.join(componentDir, `${componentName}.module.css`);

try {
  // Garante que a pasta components existe
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir);
  }

  // Garante que a pasta do componente existe
  if (fs.existsSync(componentDir)) {
    console.error("A pasta do componente já existe!");
    process.exit(1);
  }
  fs.mkdirSync(componentDir);

  // Código base do componente JSX
  const componentTemplate = `
import styles from './${componentName}.module.css';

const ${componentName} = () => {
  return (
    <div className={styles.${className}}>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

  // Código base do CSS
  const styleTemplate = `
.${className} {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
`;

  // Cria os arquivos
  fs.writeFileSync(componentFile, componentTemplate.trim(), "utf8");
  fs.writeFileSync(styleFile, styleTemplate.trim(), "utf8");

  console.log(`✅ Componente "${componentName}" criado com sucesso!`);
  process.exit(0);
} catch (error) {
  console.error("❌ Erro ao criar o componente:", error);
  process.exit(1);
}
