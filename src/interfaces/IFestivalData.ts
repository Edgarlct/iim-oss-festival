export interface IFestivalData {
  datasetid: string;
  recordid: string;
  fields: {
    dept_sk: number;
    coordonnees_insee: [number, number];
    mois_indicatif_en_chiffre_y_compris_double_mois: number;
    date_de_fin_ancien: string;
    nom_departement: string;
    departement: string;
    mois_habituel_de_debut: string;
    code_postal: string;
    complement_domaine: string;
    domaine: string;
    libelle_commune_pour_calcul_cp_insee: string;
    date_debut_ancien: string;
    code_insee: string;
    region: string;
    commune_principale: string;
    site_web: string;
    nom_de_la_manifestation: string;
    ndeg_identification: string;
    check_edition: number;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  record_timestamp: string;
}
