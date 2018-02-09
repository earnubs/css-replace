# css-replace 

```
Usage: index.js --from type:value --to type:value <file>

Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  -w, --write   Write changes                                          [boolean]
  -R, --remove  Remove --from selector rather than replace             [boolean]
  -s, --scss    Parse CSS as SCSS                                      [boolean]
  --from                                                              [required]
  --to                                                                [required]
```

Types are `id`, `tag` and `class`.

# Usage example with ripgrep (https://github.com/BurntSushi/ripgrep)

```
rg button -l | xargs -I % ./index.js -s --from 'tag:button' --to 'class:button' %
```
