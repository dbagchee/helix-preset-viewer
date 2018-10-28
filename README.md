# helix-preset-viewer
A web-based viewer for Helix presets.

https://dbagchee.github.io/helix-preset-viewer/

**Note:** This is very much a work in progress. Currently this tool has the following limitations:
* Doesn't render inputs, outputs, splits, or merges (yet).
* Some missing model data (mostly amps and cabs at this point) - you will see an asterisk (*) next to items that are not mapped at the moment (though you can still view the blocks parameters and probably figure out which one it is in the meantime).
* Some of the parameter data is a little raw (true/false instead of on/off, number formatting, etc).
* Could be other bugs!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
