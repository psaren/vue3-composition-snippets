const fs = require('fs');
const path = require('path');
const main = filepath => {

  let code = fs.readFileSync(filepath, { encoding: 'utf-8' });

  code = code.replace(new RegExp('  ', 'g'), '\t');

  const body = code.split('\n');

  const filename = path.basename(filepath).split('.').shift();


  const snippets = {
    [`${filename}`]: {
      "prefix": "",
      "body": body
    }
  }
  console.log(`snippets`, JSON.stringify(snippets, null, 2))
}

main(path.join(__dirname, './template/defineAsyncComponent.js'));