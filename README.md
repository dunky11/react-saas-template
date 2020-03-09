# React SaaS Template
Remains of a SaaS business I once tried to build. Now transformed into a template for building an SaaS/admin application using React + Material-UI.

[**Check out the demo**](https://reactsaastemplate.com)

![Node.js CI](https://github.com/dunky11/react-saas-template/workflows/Node.js%20CI/badge.svg)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dunky11/react-saas-template)](https://dependabot.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[<img src="/.github/gifs/showcase.gif">](https://reactsaastemplate.com "Go to demo website")


## Getting Started

### Prerequisites

#### Node.js 12+ (versions below could work, but are not tested)

* Linux:

   ```
   sudo apt install nodejs npm
   ```

* Windows or macOS:

   https://nodejs.org/en/

### Installing

1. Clone the repository

   ```
   git clone https://github.com/dunky11/react-saas-template
   ```
2. Install dependencies, this can take a minute

   ```
   cd react-saas-template
   npm install
   ```
3. Start the local server

   ```
   npm start
   ```

Your browser should now open and show the app. Otherwise open http://localhost:3000/ in your browser. Editing files will automatically refresh the page.

### What to do next?

If you are new to React, you should watch a [basic React tutorial](https://www.youtube.com/results?search_query=react+tutorial) first.

If you already know React, then most of the information you need is in the [Material-UI documentation](https://material-ui.com/getting-started/usage/).

You can go into [src/theme.js](/src/theme.js) and change the primary and secondary color codes at the top of the script to the values you like and some magic will happen.

## Deployment

If you are happy with the state of your website you can run:

```
npm run build 
```

It will create a folder named build with your compiled project inside. After that copy its content into your webroot and you are ready to go.

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
* [React-Stripe-js](https://github.com/stripe/react-stripe-js) - Stripes payment elements

## Things im currently working on

- [ ] Improving the encapsulation of components
- [ ] smoothScrollTop() sometimes stops scrolling top when components with big height are still rendering
- [ ] When a Dialog is opened there is a margin on the right side of the viewport (could be that this is not fixable without shaking the viewport on dialog open)
- [ ] shadeColor() throws errors on certain color codes
- [ ] Adding iDEAL, FBX and PaymentRequestButton to avaible payment methods

## Contribute
Show your support by ⭐ the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/dunky11/react-saas-template/blob/master/LICENSE) file for details.
