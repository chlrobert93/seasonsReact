Seasons

## IDE

Recomendamos el uso de Visual Studio Code, ya que prettier se aplicará automáticamente al guardar. La configuración se puede encontrar en `.vscode / settings.json`

## Empezando

En el directorio del proyecto, puede ejecutar:

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Las páginas se han movido al `src / pages`

## Descripción

Proyecto estaciones es mostrar si es invierno o verano usando la geolocalización y dependiendo del mes y el hemisferio.

Hemisferio norte.

0    1    2    |3    4    5    6    7    8    |9    10    11
Jun  Feb  Mar  |Apr  May  Jun  Jul  Aug  Sep  |Oct  Nov   Dec
    Invierno   |            Verano            |  Invierno

Hemisferio Sur.

0    1    2    |3    4    5    6    7    8    |9    10    11
Jun  Feb  Mar  |Apr  May  Jun  Jul  Aug  Sep  |Oct  Nov   Dec
    Verano     |           Invierno           |   Verano