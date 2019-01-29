# Aus Package.json

Dependency entfernen

    "@angular/material": "^7.2.2",

# Aus angular.json

Unter architect -> styles den Eintrag entfernen

    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

Unter tests -> styles

    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

#index.html

Unter head die beiden Einträge
  
  ```
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```
  
  löschen
