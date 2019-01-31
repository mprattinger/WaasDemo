# Aus Package.json

Dependency entfernen

    "@angular/material": "^7.2.2",

# Aus angular.json

Unter architect -> styles den Eintrag entfernen

    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

Unter tests -> styles

    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

# index.html

Unter head die beiden Einträge
  
  ```
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```
  
  löschen

# rmn.component.html

Aus der Form alle mat elemente entfernen

```
<mat-card>
        <mat-form-field class="rmnr-input">
          <input formControlName="rmnr" matInput placeholder="Rückmeldenummer" />
          <mat-error *ngIf="rmnrForm.controls['rmnr'].invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
        <br />
        <button type="submit" mat-raised-button color="primary" align="right" [disabled]="!rmnrForm.valid">
          Anmelden
        </button>
      </mat-card>
```

# base.module.ts

Die MatImports aus imports[] entfernen

```
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
```

Den Komponenten-Import auch rausnehmen

```
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';
```

# main.component.html

Die Mat tags entfernen 

```
<mat-card class="startup-card">
```

ich habe sie vorerst durch divs ersetzt
