# a-table.js
simple table generator

[![CircleCI](https://circleci.com/gh/appleple/a-table.js.svg?style=shield)](https://circleci.com/gh/appleple/a-table.js)

## Install

### npm
`npm install a-table`

### standalone
```html
<script src="./build/a-table.min.js"></script>
```

## Usage
```html
<script>
  var table = new aTable('.table', {
    lang:'ja',
    mark:{
      btn:{
        group:'acms-admin-btn-group acms-admin-btn-group-inline',
        item:'acms-admin-btn',
        itemActive:'acms-admin-btn acms-admin-btn-active'
      }
    },
    selector:{
      option:[
        {label:'赤',value:'red'},
        {label:'青',value:'blue'},
        {label:'黄色',value:'yellow'}
      ]
    }
  });
  table.afterRendered =
  table.afterEntered = function(){
    document.querySelector('.test').innerText = this.getTable();
    document.querySelector('.markdown').innerText = this.getMarkdown();
  }
  table.afterRendered();
</script>
```

## Licence
[MIT](https://github.com/appleple/a-table.js/blob/master/LICENSE)
