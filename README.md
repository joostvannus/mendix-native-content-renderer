## Mendix Native Content Renderer

Do you want to render custom content in your Mendix Native app? Maybe have some HTML or Markdown you want to render? You can with this widget!

The widget will allow you to render HTML, Markdown and JSON in your Mendix Native app. It uses the following libraries to do so:

- [react-native-render-html](https://www.npmjs.com/package/react-native-json-tree) (6.3.4) - [Official website](https://meliorence.github.io/react-native-render-html/)
  - Renders HTML in your React Native app
- [marked](https://www.npmjs.com/package/react-native-json-tree) (4.0.12) - [Official website](https://marked.js.org/)
  - Converts Markdown to HTML, then renders the HTML using the previous package
  - Supports almost all [GFM and Commonmark](https://github.com/markedjs/marked/discussions/1202#discussioncomment-1907552)
- [react-native-json-tree](https://www.npmjs.com/package/react-native-json-tree) (1.3.0)
  - Renders a JSON tree in your application

## Features

- Render HTML
- Render Markdown
- Render JSON
## Usage

### Data

- Select your Source, this should be a String, containing HTML/Markdown/JSON
- Select your Type, this is a number
  - 0 = HTML
  - 1 = Markdown
  - 2 = JSON
  - If it does not recognize the number, it will revert to `HTML`

### Link handling

> Only applies to HTML/Markdown

- Upon clicking a link, you can let the widget decide what to do:
  - If you select an Action, that will be used by the widget when you click any hyperlink
  - If you do not select an Action, it will let the system handle it (e.g. open a link in a browser)
- Link Attribute can be used (preferably in a non-persistent Entity) to pass the link to your nanoflow. That way you have total control over what you do with any link

### JSON

- The JSON tree has different themes. Right now we can't set this through normal theming, hence the option to select it here. Included themes can be found [here](https://github.com/reduxjs/redux-devtools/tree/75322b15ee7ba03fddf10ac3399881e302848874/src/react/themes)

## Styling


## Issues, suggestions and feature requests

TBD

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

## License

Apache-2
