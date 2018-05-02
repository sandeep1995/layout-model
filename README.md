# Layout Model
The *brain* of [Layout](https://github.com/ud-ud/layout)

`layout-model` helps creating layouts which ensures proper utilization of left over space of participant components of the layout.

## Installation

```bash
npm install layout-model
```

## Add to your project

ES6

```javascript
import { LayoutModel } from 'layout-model'
```

Commonjs

```javascript
const { LayoutModel } = require('layout-model');
```

## Usage

Let's create a very familier two column layout with equal width distribution. But we also want the right column to be `preferred`. That means any waste space by the left column will be redistributed to the right column.

`LayoutModel` constructor accepts two argument ( `dimension` and `layoutDefinition` )

```javascript
let dimension = {
  width: 600,
  height: 600
}
```

```javascript
let layoutDefinition = {
  cut: 'v', // dividing the entire layout vertically (we need two columns)
  ratioWeight: 1,
  host: null, // no host component as it is basically a container
  lanes: [
    {
      cut: null,
      ratioWeight: 1,
      host: yourComponentInstance1, // host component
      lanes: []
    },
    {
      cut: null, 
      ratioWeight: 1,
      preferred: true,
      host: yourComponentInstance2,
      lanes: []
    }
  ]
};
```

Create an instance of `LayoutModel`

```javascript
 let layoutModel = new LayoutModel(dimension, layoutDefinition);
```

To compute the allocated dimension and position for the host component

```javascript
layoutModel.negotiate();
```

Communicate back the dimension and position to the host component

```javascript
layoutModel.broadcast();
```

To get the Node tree of the layout

```javascript
layoutModel.tree();
```