mousemove-shadow (jQuery plugin)
================================

The plugin adds a shadow to objects while moving the mouse cursor. The "light source" is your cursor.
You may set from one to several shadows on objects.

![test](https://github.com/Seg-mel/mousemove-shadow/blob/master/images/test.png)

### Installing

1. Download shadow.js file
2. Move this file to your static directory
3. Add next string to html `<script type="text/javascript" src="js/shadow.js" %}"></script>` after jQuery library

### Using

- Simple text shadow: 
``` javascript
$('.text-selector').shadow('text-shadow', [{'width': 10, 'color': '#ffffff'}]);
```
- Simple box shadow:
``` javascript
$('.block-selector').shadow('box-shadow', [{'width': 10, 'color': 'rgb(0, 93, 154)'}]);
```
- Double text shadow:
``` javascript
$('.text-selector').shadow('text-shadow', [
    {'width': 7.5, 'color': 'rgb(106, 86, 191)'},
    {'width': 15, 'color': 'rgb(0, 93, 154)'}
]);
```

### API Reference

- First argument is shadow type (string): `text-shadow` or `box-shadow`
- Second argument is shadow settings (object): `{"width": <decimal>, "color": <css color as string>}`
  For example: `{'width': 15, 'color': 'rgb(0, 93, 154)'}`<br>
  **width** - max width of shadow in your browser window<br>
  **color** - css color
