// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAvezTWEcUbBwflrTIQU1OKpoRIIEcvfTA",
    authDomain: "bednartd-image-uploads.firebaseapp.com",
    databaseURL: "https://bednartd-image-uploads.firebaseio.com",
    projectId: "bednartd-image-uploads",
    storageBucket: "bednartd-image-uploads.appspot.com",
    messagingSenderId: "290280833601"
  },
};
