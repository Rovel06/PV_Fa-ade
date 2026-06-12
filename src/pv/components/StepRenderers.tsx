import { AGENCES, ETABLISSEMENTS, SURFACE_FIELDS, PARTIE_COURANTE_FIELDS, RELEVES_FIELDS, POINT_FIELDS } from "../schema";
import ToggleGroup from "./ToggleGroup";
import { I } from "../icons";
import type { EtatSurface, Form, PartieCourante, Points, Releves, Reserve } from "../types";

export const renderStep1 = (
  form: Form,
  setForm: React.Dispatch<React.SetStateAction<Form>>,
  reserves: Reserve[],
  onOpenAddRes: () => void,
  renderReserveCard: (reserve: Reserve, index: number, onEdit: (reserve: Reserve) => void, onDelete: (id: number) => void) => React.ReactNode,
  onDeleteRes: (id: number) => void,
  onEditRes: (reserve: Reserve) => void,
  onViewReserves: () => void,
): React.ReactElement => (
  <div className="cnt fade-in">
    <div className="hint-box">
      <div className="hint-ico"><I.Doc /></div>
      <div className="hint-text">Veuillez renseigner les informations d'identification du chantier pour débuter le PV de réception.</div>
    </div>

    <div className="field-wrap">
      <label className="lbl">Agence</label>
      <div className="select-wrap">
        <select className="sel" value={form.agence} onChange={(event) => setForm((current) => ({ ...current, agence: event.target.value }))}>
          <option value="">Sélectionner une agence</option>
          {AGENCES.map((agency) => <option key={agency}>{agency}</option>)}
        </select>
        <span className="sel-arrow">▾</span>
      </div>
    </div>

    <div className="field-wrap">
      <label className="lbl">Établissement</label>
      <div className="select-wrap">
        <select className="sel" value={form.etablissement} onChange={(event) => setForm((current) => ({ ...current, etablissement: event.target.value }))}>
          <option value="">Sélectionner l'établissement</option>
          {ETABLISSEMENTS.map((establishment) => <option key={establishment}>{establishment}</option>)}
        </select>
        <span className="sel-arrow">▾</span>
      </div>
    </div>

    <div className="field-wrap">
      <label className="lbl">Chantier</label>
      <input className="inp" placeholder="Nom du projet ou référence client" value={form.chantier} onChange={(event) => setForm((current) => ({ ...current, chantier: event.target.value }))} autoComplete="off" />
    </div>

    <div className="field-wrap">
      <label className="lbl">Zone / Bâtiment</label>
      <input className="inp" placeholder="Ex: Bâtiment B - Toiture" value={form.zone} onChange={(event) => setForm((current) => ({ ...current, zone: event.target.value }))} autoComplete="off" />
    </div>

    <div className="field-wrap">
      <label className="lbl">Date d'inspection</label>
      <input className="inp" type="date" value={form.date} onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))} />
    </div>

    <div className="field-wrap">
      <label className="lbl">Responsable Chantier</label>
      <input className="inp" placeholder="Nom du conducteur de travaux" value={form.responsable} onChange={(event) => setForm((current) => ({ ...current, responsable: event.target.value }))} autoComplete="off" />
    </div>

    <div style={{ background: "#f3f4f6", borderRadius: 16, padding: 18, border: "1.5px solid #f0ece8", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
        <div style={{ width: 42, height: 42, background: "#D32F2F", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", flexShrink: 0 }}><I.Doc /></div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "#1a1a1a" }}>Gestion des Réserves</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2, lineHeight: 1.4 }}>Ajoutez les détails et actions à mener sur vos réserves</div>
        </div>
      </div>

      {reserves.length === 0 ? (
        <button className="btn-red btn-full" onClick={onOpenAddRes}>+ Ajouter une réserve</button>
      ) : (
        <button onClick={onViewReserves} style={{ width: "100%", padding: "12px", background: "white", color: "#D32F2F", border: "1.5px solid #D32F2F", borderRadius: 999, fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
          + Voir les réserves ({reserves.length})
        </button>
      )}
    </div>

    <div style={{ height: 8 }} />
  </div>
);

export const renderStep2 = (
  etatSurface: EtatSurface,
  setEtatSurface: React.Dispatch<React.SetStateAction<EtatSurface>>,
): React.ReactElement => (
  <div className="cnt fade-in">
    <div className="sec">
      <div className="sec-hdr">
        <div style={{ fontSize: 20 }}>▦</div>
        <div className="sec-title">Etat de Surface</div>
      </div>
      {SURFACE_FIELDS.map(([key, label], index) => (
        <div key={key}>
          <ToggleGroup
            label={label}
            value={etatSurface[key] as string}
            onChange={(value) => setEtatSurface((current) => ({ ...current, [key]: value }))}
          />
          {index < SURFACE_FIELDS.length - 1 && <div className="sec-divider" />}
        </div>
      ))}
    </div>
    <div style={{ height: 8 }} />
  </div>
);

export const renderStep3 = (
  partieCourante: PartieCourante,
  setPartieCourante: React.Dispatch<React.SetStateAction<PartieCourante>>,
): React.ReactElement => (
  <div className="cnt fade-in">
    <div className="sec">
      <div className="sec-hdr">
        <div style={{ fontSize: 20 }}>▤</div>
        <div className="sec-title">Partie Courante</div>
      </div>
      {PARTIE_COURANTE_FIELDS.map(([key, label], index) => (
        <div key={key}>
          <ToggleGroup label={label} value={partieCourante[key]} onChange={(value) => setPartieCourante((current) => ({ ...current, [key]: value }))} />
          {index < PARTIE_COURANTE_FIELDS.length - 1 && <div className="sec-divider" />}
        </div>
      ))}
    </div>
    <div style={{ height: 8 }} />
  </div>
);

export const renderStep4 = (
  releves: Releves,
  setReleves: React.Dispatch<React.SetStateAction<Releves>>,
): React.ReactElement => (
  <div className="cnt fade-in">
    <div className="sec">
      <div className="sec-hdr">
        <div style={{ fontSize: 20, color: "#D32F2F" }}>◎</div>
        <div className="sec-title">CHASSIS</div>
      </div>
      {RELEVES_FIELDS.map(([key, label], index) => (
        <div key={key}>
          <ToggleGroup label={label} value={releves[key]} onChange={(value) => setReleves((current) => ({ ...current, [key]: value }))} />
          {index < RELEVES_FIELDS.length - 1 && <div className="sec-divider" />}
        </div>
      ))}
    </div>
    <div style={{ height: 8 }} />
  </div>
);

export const renderStep5 = (
  points: Points,
  setPoints: React.Dispatch<React.SetStateAction<Points>>,
): React.ReactElement => (
  <div className="cnt fade-in">
    <div className="sec">
      <div className="sec-hdr">
        <div style={{ fontSize: 18 }}>⊹</div>
        <div className="sec-title">Points Singuliers</div>
      </div>
      {POINT_FIELDS.map(([key, label], index) => (
        <div key={key}>
          <ToggleGroup label={label} value={points[key]} onChange={(value) => setPoints((current) => ({ ...current, [key]: value }))} />
          {index < POINT_FIELDS.length - 1 && <div className="sec-divider" />}
        </div>
      ))}
      <div className="sec-divider" />
      <div style={{ padding: "0 0 4px" }}>
        <div className="sec-title" style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#1a1a1a", marginBottom: 12 }}>
          Autres Écarts & Observations
        </div>
        <textarea className="inp" placeholder="Précisez ici toute observation complémentaire..." value={points.observations} onChange={(event) => setPoints((current) => ({ ...current, observations: event.target.value }))} />
      </div>
    </div>
    <div style={{ height: 8 }} />
  </div>
);
