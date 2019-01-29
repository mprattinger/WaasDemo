# NG shortcuts

Wenn man zu jedem Kommando ein *-d* hinzugibt, dann erhält man eine Vorschau was bei diesem Befehl erzeugt werden würde:

```
C:\dev\js\waas\ng-test [master +4 ~4 -0 !]> ng g class nav/models -d
CREATE src/app/nav/models.spec.ts (154 bytes)
CREATE src/app/nav/models.ts (24 bytes)

NOTE: The "dryRun" flag means no changes were made.
```

## Component

ng g c *Component Name* oder
ng generate component *Component Name*

## Model

ng g class *Class Name* oder
ng generate class *Class Name*

## Service

ng g s *Service Name* oder
ng generate service *Service Name*
