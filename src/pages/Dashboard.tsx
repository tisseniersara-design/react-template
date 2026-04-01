import { IconDashboard } from "@/assets/icons"
import { Card } from "@/components/ui/card"
import iconArrow from "@/assets/icons/Flèche 45°.svg"
import monogrammeViolet from "@/assets/monogramme-violet.svg"

// ─── Bouton flèche ────────────────────────────────────────────────────────────
function ArrowButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        border: "none",
        backgroundColor: "var(--color-background)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <img src={iconArrow} style={{ width: 23, height: 32 }} alt="voir" />
    </button>
  )
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
export function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>

      {/* ── Titre de la page ─────────────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <IconDashboard width={40} height={40} style={{ color: "var(--color-foreground)" }} />
        <h1
          className="text-2xl lg:text-5xl font-bold"
          style={{ color: "var(--color-foreground)", margin: 0 }}
        >
          Mon tableau de bord
        </h1>
      </div>

      {/* ── Grille responsive : 1 col mobile, 2 tablette, 3 desktop ─────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* ── Mon Habitat ──────────────────────────────────────────────────────── */}
        <Card className="p-4 md:p-6 flex flex-col gap-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-foreground)" }}>Mon Habitat</span>
            <ArrowButton />
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "var(--color-foreground)" }}>T3</span>
            <div style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Surface : <strong>65 m²</strong></span>
              <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Nombre de pièces : <strong>7</strong></span>
              <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Nombre d'habitants : <strong>3</strong></span>
            </div>
          </div>
        </Card>

        {/* ── Mes Equipements ──────────────────────────────────────────────────── */}
        <Card className="p-4 md:p-6 flex flex-col gap-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-foreground)" }}>Mes Equipements</span>
            <ArrowButton />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Equipements ménagers : <strong>5</strong></span>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Equipements high tech : <strong>10</strong></span>
          </div>
        </Card>

        {/* ── Mon Suivi Energétique + Mes Ecogestes (span 2 lignes desktop) ───── */}
        <Card className="lg:row-span-2 p-4 md:p-6 flex flex-col gap-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-foreground)" }}>Mon Suivi Energétique</span>
            <ArrowButton />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Nombre de relevés : <strong>3</strong></span>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Dernier relevé : <strong>25/08/2025</strong></span>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Prochain relevé à partir du : <strong>25/08/2025</strong></span>
          </div>

          {/* Bloc Ecogestes imbriqué avec monogramme décoratif */}
          <Card
            className="p-4 md:p-6 flex flex-col gap-4"
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--color-background)",
              marginTop: 16,
            }}
          >
            {/* Monogramme décoratif en filigrane */}
            <img
              src={monogrammeViolet}
              style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, opacity: 0.5 }}
              alt=""
            />
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-foreground)" }}>Mes Ecogestes</span>
            <p style={{ fontSize: 14, color: "var(--color-foreground)", margin: 0, opacity: 0.7 }}>
              Grâce aux fiches Eco-gestes, vous pourrez découvrir une liste de gestes utiles au quotidien
              pour adopter une consommation responsable et réduire votre facture d'énergie
            </p>
            <span style={{ fontSize: 14, color: "var(--color-foreground)", cursor: "pointer" }}>En savoir plus →</span>
          </Card>
        </Card>

        {/* ── Mon Compte ───────────────────────────────────────────────────────── */}
        <Card className="p-4 md:p-6 flex flex-col gap-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-foreground)" }}>Mon Compte</span>
            <ArrowButton />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Michel DURAND</span>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Logement : <strong>A001</strong></span>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Mon CIL : <strong>xx / xx / xxxxx</strong></span>
            <span style={{ fontSize: 14, color: "var(--color-foreground)" }}>Mon Suivi énergétique : <strong>Illimité</strong></span>
          </div>
        </Card>

        {/* ── Mon CIL ──────────────────────────────────────────────────────────── */}
        <Card className="p-4 md:p-6 flex flex-col gap-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-foreground)" }}>Mon CIL</span>
            <ArrowButton />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", borderBottom: "1px solid var(--color-border)", paddingBottom: 8 }}>
              Mes documents CIL
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", borderBottom: "1px solid var(--color-border)", paddingBottom: 8 }}>
              Mes documents complémentaires
            </span>
          </div>
        </Card>

      </div>
    </div>
  )
}