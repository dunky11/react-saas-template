# React SaaS Template
Remains of a SaaS business I once tried to build. Now transformed into a template for building an SaaS/admin application using React + Material-UI.

## Getting Started

### Prerequisites

#### Node.js

* Linux:

   ```
   sudo apt install nodejs
   ```

* Windows or macOS:

   https://nodejs.org/en/

### Installing

1. Clone the repository

   ```
   git clone https://github.com/dunky11/react-saas-template
   cd react-saas-template
   ```
2. Install dependencies, this can take a minute

   ```
   npm install
   ```
3. Start the local server

   ```
   npm start
   ```

Your browser should now open and show the app. Otherwise open http://localhost:3000/ in your browser. Editing files will automatically refresh the page.

## Build With

* [Create-React-App](https://github.com/facebook/create-react-app) - Used to bootstrap the development
* [Material-UI](https://github.com/mui-org/material-ui) - Material Design components
* [React-Router](https://github.com/ReactTraining/react-router) - Routing of the app
* [Pace](https://github.com/HubSpot/pace) - Loading bar at the top
* [Emoji-Mart](https://github.com/missive/emoji-mart) - Picker for the emojis
* [React-Dropzone](https://github.com/react-dropzone/react-dropzone) - File drop component for uploads
* [Recharts](https://github.com/recharts/recharts) - Charting library I used for the statistics
* [Aos](https://github.com/michalsnik/aos) - Animations based on viewport
* [React-Cropper](https://github.com/roadmanfong/react-cropper) - Cropper for the image uploads

## Things im currently working on

- [ ] Transitioning from global jss to Material-UIs Box component
- [ ] Improving the reusability of components
- [ ] Adding a "update balance" dialog
- [ ] Improving the look of the Footer
- [ ] .css files -> jss

## Deployment

If you are happy with the state of your website you can run:

```
npm run build
```

It will create a build folder with your compiled project. After that copy its content into your webroot and you are ready to go.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/dunky11/react-saas-template/blob/master/LICENSE) file for details
