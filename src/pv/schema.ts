import type { EtatSurface, Form, Participant, PartieCourante, Points, PV, Releves } from "./types";

export const AVATAR_COLORS = ["#D32F2F", "#1565C0", "#2E7D32", "#6A1B9A", "#E65100", "#00695C"];

export const CURRENT_USER = {
  name: "Jean Dupont",
  role: "Conducteur de Travaux",
  email: "j.dupont@smac-sa.com",
  agence: "Agence Nantes",
};

export const AGENCES: string[] = [
  "Alsace - Bourgogne - Franche Comté",
  "Aquitaine",
  "Auralp",
  "Auvergne Rhône-Alpes - Enveloppe",
  "Bretagne",
  "Centre-Maine",
  "Gennevilliers",
  "Haut de France",
  "IDF Enveloppe",
  "IDF Etanchéité",
  "Industries",
  "Limousin Berry",
  "Lorraine - Champagne-Ardennes",
  "Normandie",
  "Occitanie",
  "Océan Indien",
  "PACA",
  "Paris",
  "Pays de Loire",
  "Poitou-Charentes",
  "SIEGE SMAC",
];

export const ETABLISSEMENTS: string[] = [
  "SMAC AIX EN PROVENCE",
  "SMAC AMIENS",
  "SMAC ANGERS",
  "SMAC ANGOULEME",
  "SMAC ANNECY",
  "SMAC Antony",
  "SMAC BAYONNE",
  "SMAC BESANCON",
  "SMAC BIOT",
  "SMAC BLOIS",
  "SMAC BORDEAUX",
  "SMAC BOURGES",
  "SMAC BREST",
  "SMAC BRIVE",
  "SMAC CHALONS SUR SAONE",
  "SMAC CHATEAUROUX",
  "SMAC CHERBOURG",
  "SMAC CLERMONT FERRAND",
  "SMAC DIJON",
  "SMAC DUNKERQUE",
  "SMAC GENNEVILLIERS",
  "SMAC GRENOBLE",
  "SMAC LA ROCHE SUR YON",
  "SMAC LA ROCHELLE",
  "SMAC LE HAVRE",
  "SMAC LE MANS",
  "SMAC LIMOGES",
  "SMAC LORIENT",
  "SMAC MAYOTTE",
  "SMAC METZ",
  "SMAC MONTPELLIER",
  "SMAC MULHOUSE",
  "SMAC NANCY",
  "SMAC NANTES",
  "SMAC NORD",
  "SMAC Normandie Caen",
  "SMAC Normandie Rouen",
  "SMAC OCEAN INDIEN",
  "SMAC ORLEANS",
  "SMAC PARIS",
  "SMAC PAU",
  "SMAC PERPIGNAN",
  "SMAC PIERRELATTE",
  "SMAC POITIERS",
  "SMAC Paris Nord 2.",
  "SMAC REIMS",
  "SMAC RENNES",
  "SMAC SAINT ETIENNE",
  "SMAC SAINT NAZAIRE",
  "SMAC SAINT PRIEST",
  "SMAC SIEGE",
  "SMAC STRASBOURG",
  "SMAC TOULOUSE",
  "SMAC TOURS",
  "SMAC TROYES",
  "SMAC VAULX EN VELIN",
  "SMAC YFFINIAC",
  "USINE LIMOGES",
  "USINE RENNES",
  "USINE SAINT PIERRE DES CORPS",
  "USINE VENISSIEUX",
];

export const INITIAL_FORM: Form = {
  agence: "",
  etablissement: "",
  chantier: "",
  zone: "",
  date: "",
  responsable: "",
};

export const INITIAL_ETAT_SURFACE: EtatSurface = {
  trous: "SO",
  reg1: "SO",   reg1Photos: [],  reg1Comment: "",
  prop1: "SO",  prop1Photos: [], prop1Comment: "",
  troudebranche: "SO",   troudebranchePhotos: [],  troudebrancheComment: "",
  prop2: "SO",  prop2Photos: [], prop2Comment: "",
};

export const INITIAL_PARTIE_COURANTE: PartieCourante = {
  planeite: "SO",
  tolerance: "SO",
  niveau: "SO",
  arase: "SO",
};

export const INITIAL_RELEVES: Releves = {
  
  entraxe_vertical: "SO",
  entraxe_horizontal: "SO",
  nu_facade: "SO",
  traitement: "SO",
  aplomb: "SO",
};

export const INITIAL_POINTS: Points = {

  reservations: "SO",
  joints: "SO",
  observations: "",
};

export const INITIAL_PARTICIPANT: Omit<Participant, "id"> = {
  nom: "",
  titre: "",
  signed: false,
  sigDataUrl: null,
  reception: "OUI",
  miseEnConformite: "",
  email: "",
  autoEmail: false,
};

export const INITIAL_PARTICIPANTS: Participant[] = [
  { id: 1, ...INITIAL_PARTICIPANT },
];

export const SURFACE_FIELDS: [string, string][] = [
  ["trous", "Trous de banches rebouchés"],
  ["reg1", "Régularité du support "],
  ["prop1", "Propreté du support "],
  
];

export const PARTIE_COURANTE_FIELDS: [string, string][] = [
  ["planeite", "Planéité du support"],
  ["tolerance", "Tolérance gros-oeuvre"],
  ["niveau", "Niveau départ"],
  ["arase", "Arase haute/acrotère"],
];

export const RELEVES_FIELDS: [string, string][] = [
  
  ["entraxe_vertical", "Entraxe vertical"],
  ["entraxe_horizontal", "entraxe horizontale"],
  ["nu_facade", "Nu de façade"],
  ["traitement", "Traitement étancheité"],
  ["aplomb", "Aplomb"],
];

export const POINT_FIELDS: [string, string][] = [
  ["reservations", "Réservations en façade"],
  ["joints", "Joints de dilatation"],
];

export const SAMPLE_PVS: PV[] = [];
