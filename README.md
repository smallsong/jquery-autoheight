jquery-autoheight
=================

A small jQuery plugin which helps you to make each floated elements same height.

It gathers each child element and determines the heighet one, and applies that height to each other smaller element on the row.

This plugin has only one Parameter, "childrens" parameter.

So an example of that could be 

```javascript $("div.columns").autoheight({childrens:"div.child"}); ``` which defines the childrens Selector.

```HTML 
<div class="columns"> 
  <div class="child"></div> 
  <div class="child"></div> 
  <div class="child"></div>
</div> 
```

You can check it's behaviour at this <a target="_blank" href="http://jsfiddle.net/burimshala/ecVFK/2/">fiddle</a>.
