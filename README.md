## Overview

[Chart.js](http://www.chartjs.org/) plugin that that fixes legend top padding.

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **2.7.0** or later.

## Usage
```ts
import ChartPaddingTop from 'chartjs-plugin-padding-top'

// ...

Chart.plugins.register(ChartPaddingTop);
Chart['paddingTop'] = 20;
```

## License

`chartjs-plugin-padding-top` is available under the [MIT license](LICENSE.md).
