# iim-oss-festival
This library return the list of festivals in france.

# Install
```
npm i edgar-iim-festival
```

# Local Development
Linter
```
npm run lint
```

Test
```
npm run test
```

Start
```
npm run start
```

# Usage
```js
const festival = require('edgar-iim-festival');

festival.getFestivals({
    month: 01,
    department: 75,
}).then((festivals) => {
  console.log(festivals);
});
```

# Parameters can be used each parameter is optional
```json
{
  "month": "number",
  "department": "number",
  "rows": "number",
  "start": "number",
  "postalCode": "string"
}
```

# Response
```json
[
  {
    "datasetid": "string",
    "recordid": "string",
    "fields": {
      "dept_sk": "number",
      "coordonnees_insee": ["number", "number"],
      "mois_indicatif_en_chiffre_y_compris_double_mois": "number",
      "date_de_fin_ancien": "string",
      "nom_departement": "string",
      "departement": "string",
      "mois_habituel_de_debut": "string",
      "code_postal": "string",
      "complement_domaine": "string",
      "domaine": "string",
      "libelle_commune_pour_calcul_cp_insee": "string",
      "date_debut_ancien": "string",
      "code_insee": "string",
      "region": "string",
      "commune_principale": "string",
      "site_web": "string",
      "nom_de_la_manifestation": "string",
      "ndeg_identification": "string",
      "check_edition": "number"
    },
    "geometry": {
      "type": "string",
      "coordinates": ["number", "number"]
    },
    "record_timestamp": "string"
  }
]
```



