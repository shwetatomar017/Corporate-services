# JQuery Simple Menu Plugin

Simple Menu Plugin is a utility for quickly building a menu of the site

```js
$('.simple-menu').simpleMenu({
  stickyMenu: true,
  slidingLine: true
})
```

[jqueryscript.net's guide](http://www.jqueryscript.net/menu/Responsive-Sticky-Navigation-Plugin-jQuery-Simple-Menu.html)

## Install

```
npm install jquery-simple-menu
```


## Examples
![Alt Text](https://github.com/ikloster03/jquery-simple-menu/raw/master/images/example.gif)


[jquery-simple-menu example](https://ikloster03.github.io/jquery-simple-menu/)


## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
menuSpeedAnimate | int | 600 | speed animation of the menu
pageNavigationSpeedAnimate | int | 1500 | speed animation of the page's navigation 
btnClassMenu | string | 'btn-menu' | css class of the menu's button
stickyMenu | boolean | false | use / don't use sticky menu
stickyMenuClassName | string | 'fixed' | css class of the sticky menu
slidingLine | boolean | false | use / don't use sliding line
slidingLineClassName | string | 'sliding-line' |  css class of the sliding line
slidingLineClassNameActive | string | 'active' | css class of the active sliding line
slidingLineColor | string | '#ffffff' | color of the sliding line
slidingLineHeight | string | '3px' | height of the sliding line
slidingLineSpeedAnimate | int | 200 | speed animation of the sliding line
winMobWidth | int | 500 | width of the Mobile window
trackedClassName | string | 'tracked' | css class of the waypoint tracked

## Browser Support

- Chrome
- Firefox
- Opera
- Safari
- IE

## Framework Support

- JQuery 1.8+
- Waypoints 4.0+


## Dependencies

> sliding line is implemented using [waypoints](https://github.com/imakewebthings/waypoints)


## TODO

- [x] with gulp
- [x] with eslint
- [x] add Framework Support
- [ ] add Browser Support
- [ ] with webpack
- [x] no waypoints version
- [ ] no framework version


## Contact me

- Site: [ikloster03.github.io](https://ikloster03.github.io)
- E-mail: <ikloster@yandex.ru>
- Telegram channel: [t.me/ikloster03](https://t.me/ikloster03)


## License

Copyright (c) 2017 Monastyrev Ivan <ikloster@yandex.ru>. Licensed under the [MIT license](https://github.com/ikloster03/jquery-simple-menu/blob/master/LICENSE).
