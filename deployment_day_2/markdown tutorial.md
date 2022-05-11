# Some markdown tips

## Paste image

You can find this plugin from within VSCode to help you automatically import and display images to Markdown:

- Copy your image content to clip board `Ctrl + C` or `Cmd + C`
- `Ctrl + Shift + P` on Window -> select `Markdown Paste`
- `Cmd + Shift + P` on Mac -> select `Markdown Paste`

![](markdown%20paste%20plugin.png)

## Generate table

Generate your table in [here](https://www.tablesgenerator.com/markdown_tables)

Then just copy here.

![](markdown%20table%20generator.png)

This is the result

| Case A | I do this |
| ------ | --------- |
| Case B | I do that |

## Code formating

Inline code formatting `print("hello world")`

Multiple lines code formatting

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import json

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

```jsx
import React, { useState } from "react";

// Teaches about onClick action + useState
function UseStateExample() {
  const [count, setCount] = useState(999);

  function handleAddCount(e) {
    console.log(e);
    alert("This will popup a dialog");
    setCount(count + 1);
  }

  function handleClearCount(e) {
    console.log(e);
    setCount(0);
  }

  return (
    <>
      <div>current count: {count}</div>
      <button onClick={handleAddCount}>Add 1</button>
      <button onClick={handleClearCount}>Clear</button>
    </>
  );
}

export default UseStateExample;
```

## Quickly generate folder structure summary

Install `tree` command

Show highest level folders and files:
```sh
> tree -L 1
```

Results:
```
.
├── README.md
├── build
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src

4 directories, 3 files
```

To go into even more details -> use higher value for `-L`