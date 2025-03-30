#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Obtém o diretório onde o comando foi executado
const projectRoot = process.cwd();

// Obtém argumentos da linha de comando
const args = process.argv;
if (args.length < 3) {
  console.error(
    "Por favor, forneça o nome do componente. Exemplo: component-cli MeuComponente"
  );
  process.exit(1);
}

const componentName = args[2];
const className = componentName.toLowerCase();

// Caminhos das pastas dentro do projeto do usuário
const componentsDir = path.join(projectRoot, "src/components");
const componentDir = path.join(componentsDir, componentName);
const componentFile = path.join(componentDir, `${componentName}.jsx`);
const styleFile = path.join(componentDir, `${componentName}.module.css`);

try {
  // Garante que a pasta components existe no projeto do usuário
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  // Garante que a pasta do componente não exista antes de criá-la
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

  // Cria os arquivos no projeto do usuário
  fs.writeFileSync(componentFile, componentTemplate.trim(), "utf8");
  fs.writeFileSync(styleFile, styleTemplate.trim(), "utf8");

  console.log(
    `✅ Componente "${componentName}" criado com sucesso em ${componentDir}`
  );
  process.exit(0);
} catch (error) {
  console.error("❌ Erro ao criar o componente:", error);
  process.exit(1);
}
