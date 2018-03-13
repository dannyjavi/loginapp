// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDsnKjeZts3nx823x8DgeoIGDP-TXFAxwU",
    authDomain: "citas-de-fisioterapia.firebaseapp.com",
    databaseURL: "https://citas-de-fisioterapia.firebaseio.com",
    projectId: "citas-de-fisioterapia",
    storageBucket: "citas-de-fisioterapia.appspot.com",
    messagingSenderId: "659024355164"
  }
};
