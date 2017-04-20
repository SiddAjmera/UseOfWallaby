# UnitTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# For the use of Wallaby.js

**To get wallaby.js working** after you have generated your project with `angular-cli`, you'll need to do the following:
- Add the [wallaby.js config file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/wallaby.js) to the project.
- Add the [wallaby.js test bootstrap file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/src/wallabyTest.ts) to the project.
- Exclude the [`src/wallabyTest.ts` file in the `tsconfig.json`](https://github.com/wallabyjs/ngCliWebpackSample/blob/6a93f682161aaee2e07abceb5f83436db4c97608/src/tsconfig.json#L22) as it may affect [Angular 2 AOT compilation](https://github.com/angular/angular/issues/13624#issuecomment-281919940).
- Run `npm install wallaby-webpack angular2-template-loader electron --save-dev`.

Note that the sample is [using Chrome/Electron test runner](https://wallabyjs.com/docs/integration/electron.html), and not the wallaby.js default PhantomJs test runner. You may use PhantomJs runner if you like, to do that you may just [remove the `env` setting](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/wallaby.js#L49). In this case, you will not need to `npm i electron`, however will need to uncomment [core-js polyfills](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L22) and [`Intl` polyfill](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L68), so that PhantomJs may work.
