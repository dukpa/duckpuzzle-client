#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

let component = process.argv.slice(2)[0];
let filePath = process.argv.slice(2)[1] || '';

if (!component) {
  console.error('Component name is required');
  process.exit();
}

//build the directory
if (filePath) {
  filePath.split('/').reduce((allDirs, dir) => {
    let filePath = allDirs[allDirs.length - 1];
    let newPath = filePath ? `${filePath}/${dir}` : dir;
    return [
      ...allDirs,
      newPath
    ]
  }, []).forEach((dir) => {
    dir = `src/components/${dir}`;
    console.log(dir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
}

//create the files
let componentLower = component.toLowerCase();
let basePath = `src/components/${filePath}/${componentLower}`;
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}
fs.writeFileSync(`${basePath}/index.js`, buildIndexContext(componentLower), {flag: 'w+'});
fs.writeFileSync(`${basePath}/${componentLower}.js`, buildViewContent(component), {flag: 'w+'});
fs.writeFileSync(`${basePath}/${componentLower}.hook.js`, buildHookContent(component), {flag: 'w+'});

function buildIndexContext(name) {
  return `export {default} from './${name}';`;
}

function buildViewContent(component) {
  let hook = `use${component}`;
  let content = `import React from 'react';\n\n`;
  content += `import ${hook} from './${component.toLowerCase()}.hook';\n\n`;
  content += `export default function ${component}(props) {
    const {} = ${hook}();
    return (
      <div>I am the ${component}</div>
    )
  }`;
  return content;
}

function buildHookContent(component) {
  let hook = `use${component}`;
  return `export default function ${hook}() {
    return {};
  }`;
}