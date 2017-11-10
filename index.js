const fs = require('fs');
const postcss = require('postcss');
const parser = require('postcss-selector-parser');
const processor = parser();

const SOURCE = 'source.css';
const RESULT = 'result.css';

const cleaner = postcss.plugin('postcss-cleaner', () => {
  return (root, result) => {
    // we want to grab all the selectors, then parse then and search for things
    // ie. select from css where type = tag and value = button
    processor.ast(root.nodes[1].selector).then((res) => {
      res.walkTags((s) => {
        console.log(s);
      })
    });
    /**
      processor.processSync(root.nodes[1].selector)
    ));
     **/
    result.root = postcss.root();
  };
});

fs.readFile(SOURCE, (err, css) => {
  postcss([cleaner])
    .process(css, { from: SOURCE, to: RESULT })
    .then(result => {
      fs.writeFile(RESULT, result.css, (err) => {
        if (err) throw err;
      });
    });
});
