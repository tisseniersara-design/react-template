import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ─── Imports des icônes SVG ───────────────────────────────────────────────────
// Syntaxe vite-plugin-svgr : le ?react transforme le SVG en composant React
import IconHabitat     from "@/assets/icons/Home.svg?react"
import IconChauffage   from "@/assets/icons/Radiateur.svg?react"
import IconEau         from "@/assets/icons/Eau.svg?react"
import IconCuisson     from "@/assets/icons/Cuisson.svg?react"
import IconSolaire     from "@/assets/icons/Sun.svg?react"
import IconVentilation from "@/assets/icons/Air.svg?react"
import IconDoor        from "@/assets/icons/Door.svg?react"
import IconSdb         from "@/assets/icons/Sdb.svg?react"
import IconToilettes   from "@/assets/icons/Toilettes.svg?react"
import IconChambre     from "@/assets/icons/Chambre.svg?react"
import IconSalon       from "@/assets/icons/Salon.svg?react"
import IconCuisine     from "@/assets/icons/Cuisine.svg?react"
import IconEquipements from "@/assets/icons/Équipements.svg?react"
import IconMoins       from "@/assets/icons/Moins.svg?react"

// ─── Types ────────────────────────────────────────────────────────────────────
type IconComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

// ─── Données Tab 1 — Chauffages (non modifiables) ────────────────────────────
const chauffages: { label: string; valeur: string; Icon: IconComponent }[] = [
  { label: "Chauffage Séjour",               valeur: "Chaudière gaz individuelle (condensation)",          Icon: IconChauffage },
  { label: "Chauffage Salle(s) de bain",     valeur: "Chaudière gaz individuelle (condensation)",          Icon: IconChauffage },
  { label: "Chauffage Chambre principale",   valeur: "Chaudière gaz individuelle (condensation)",          Icon: IconChauffage },
  { label: "Chauffage Chambres secondaires", valeur: "Chaudière gaz individuelle (condensation)",          Icon: IconChauffage },
  { label: "Production d'eau chaude",        valeur: "Chaudière gaz individuelle (condensation)",          Icon: IconEau },
  { label: "Ventilation",                    valeur: "Ventilation Hygroréglable B",                        Icon: IconVentilation },
  { label: "Mode de cuisson",                valeur: "Electrique",                                         Icon: IconCuisson },
  { label: "Solaire",                        valeur: "Installation solaire thermique pour le chauffage",   Icon: IconSolaire },
]

// ─── Données Tab 2 — Pièces du logement ──────────────────────────────────────
const pieces: { label: string; Icon: IconComponent }[] = [
  { label: "Entrée",         Icon: IconDoor },
  { label: "Salle de bain",  Icon: IconSdb },
  { label: "WC indépendant", Icon: IconToilettes },
  { label: "Chambre",        Icon: IconChambre },
  { label: "Séjour",         Icon: IconSalon },
  { label: "Cuisine",        Icon: IconCuisine },
]

// ─── Données Tab 3 — Équipements ─────────────────────────────────────────────
const equipementsMenagers = [
  "Réfrigérateur", "Réfrigérateur congélateur", "Hotte aspirante",
  "Four", "Plaque de cuisson à induction", "Plaque de cuisson électrique vitrocéramique",
  "Plaque de cuisson électrique fonte", "Cafetière", "Four micro-ondes",
  "Lave-vaisselle", "Grille-pain", "Bouilloire",
  "Congélateur", "Réfrigérateur américain", "Friteuse électrique",
  "Mixeur - Robot", "Mini Four", "Aspirateur",
  "Lave-linge", "Fer à repasser", "Sèche-linge",
  "Porte automatique de garage", "Spa - Balnéo", "Aquarium",
  "Pompe électrique de piscine", "Adoucisseur d'eau électrique",
]

const equipementsHighTech = [
  "TV LED", "TV LCD", "TV Tube Catodique",
  "HiFi", "Box Internet", "Ordinateur",
  "Imprimante", "Téléphone fixe", "Console de jeux",
  "Décodeur Canal +", "Démodulateur parabole", "Répondeur téléphonique",
  "Téléphone répondeur", "Téléphone sans-fil", "Cadre photo numérique",
  "Lit ou siège électrique", "Machine à glaces",
]

// ─── Composant : icône dans un carré arrondi ──────────────────────────────────
function IconBox({ Icon }: { Icon: IconComponent }) {
  return (
    <div style={{
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: "var(--color-muted)",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Icon width={20} height={20} style={{ color: "var(--color-foreground)" }} />
    </div>
  )
}

// ─── Composant : Select quantité 0–5 ─────────────────────────────────────────
function SelectQuantite({ defaultValue = "1" }: { defaultValue?: string }) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger style={{ width: 80 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {[0, 1, 2, 3, 4, 5].map(n => (
          <SelectItem key={n} value={String(n)}>{n}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

// ─── Page Mon Habitat ─────────────────────────────────────────────────────────
export function Habitat() {
  const [menagersCollapsed, setMenagersCollapsed] = useState(false)
  const [highTechCollapsed, setHighTechCollapsed] = useState(false)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

        {/* ── Titre ──────────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <IconHabitat className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: "var(--color-foreground)", alignSelf: "center" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <h1
            className="text-2xl lg:text-5xl font-bold"
            style={{ color: "var(--color-foreground)", margin: 0 }}
            >
            Mon Habitat
            </h1>
            <p style={{ fontSize: 14, color: "var(--color-foreground)", margin: 0 }}>
            Carre Jolimont
            </p>
        </div>
        </div>

      {/* ── Tabs ───────────────────────────────────────────────────────────── */}
      <Tabs defaultValue="informations">

        {/* TabsList — soulignement vert lime sur l'onglet actif */}
        <TabsList>
          {[
            { value: "informations", label: "Informations de bases" },
            { value: "logement",     label: "Mon logement" },
            { value: "equipements",  label: "Mes équipements" },
          ].map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                text-foreground/40 font-normal
                data-[state=active]:text-foreground
                data-[state=active]:font-semibold
                data-[state=active]:border-b-2
                data-[state=active]:border-primary
                data-[state=active]:shadow-none
                bg-transparent
                data-[state=active]:bg-transparent
              "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ════════════════════════════════════════════════════════════════
            TAB 1 — Informations de bases
        ════════════════════════════════════════════════════════════════ */}
        <TabsContent value="informations">
          <Card className="p-4 md:p-6 flex flex-col gap-8 rounded-tl-none rounded-tr-none">

            {/* Informations générales */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-foreground)", margin: 0 }}>
                Informations générales
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Type de logement
                  </label>
                  <Select defaultValue="T3">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["T1","T2","T3","T4","T5"].map(v => (
                        <SelectItem key={v} value={v}>{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Surface de l'habitat (m²)
                  </label>
                  <input
                    type="text"
                    defaultValue="65"
                    style={{
                      padding: "10px 16px",
                      borderRadius: 8,
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-card)",
                      color: "var(--color-foreground)",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Situation du logement
                  </label>
                  <Select defaultValue="collectif-intermediaire">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collectif-intermediaire">Collectif Intermédiaire</SelectItem>
                      <SelectItem value="collectif-bas">Collectif Bas</SelectItem>
                      <SelectItem value="collectif-haut">Collectif Haut</SelectItem>
                      <SelectItem value="individuel">Individuel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Nombre de personnes
                  </label>
                  <Select defaultValue="3">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6].map(n => (
                        <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Vos Informations Techniques */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-foreground)", margin: 0 }}>
                Vos Informations Techniques
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Confort de chauffage
                  </label>
                  <Select defaultValue="classique">
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classique">Classique (20°C)</SelectItem>
                      <SelectItem value="econome">Econome (19°C)</SelectItem>
                      <SelectItem value="confort">Confort (21°C)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Confort d'eau chaude
                  </label>
                  <Select defaultValue="classique">
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classique">Classique</SelectItem>
                      <SelectItem value="econome">Econome</SelectItem>
                      <SelectItem value="confort">Confort</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                    Tarif électrique heures creuses ?
                  </label>
                  <Select defaultValue="oui">
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oui">Oui</SelectItem>
                      <SelectItem value="non">Non</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cards chauffage — non modifiables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chauffages.map((item, i) => (
                  <Card key={i} className="p-4 flex flex-row gap-3 items-center border border-border">
                    <IconBox Icon={item.Icon} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 12, color: "var(--color-foreground)", opacity: 0.6 }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>
                        {item.valeur}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button>Enregistrer</Button>
            </div>

          </Card>
        </TabsContent>

        {/* ════════════════════════════════════════════════════════════════
            TAB 2 — Mon logement
        ════════════════════════════════════════════════════════════════ */}
        <TabsContent value="logement">
          <Card className="p-4 md:p-6 flex flex-col gap-8 rounded-tl-none rounded-tr-none">

            <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-foreground)", margin: 0 }}>
              Mon Logement
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pieces.map((piece) => (
                <Card key={piece.label} className="p-4 flex flex-row items-center justify-between">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <IconBox Icon={piece.Icon} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-foreground)" }}>
                      {piece.label}
                    </span>
                  </div>
                  <SelectQuantite defaultValue="1" />
                </Card>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button>Enregistrer</Button>
            </div>

          </Card>
        </TabsContent>

        {/* ════════════════════════════════════════════════════════════════
            TAB 3 — Mes équipements
        ════════════════════════════════════════════════════════════════ */}
        <TabsContent value="equipements">
          <div style={{ display: "flex", flexDirection: "column", gap: 16,}}>

            {/* Section Ménagers */}
            <Card className="p-4 md:p-6 flex flex-col gap-8 rounded-tl-none rounded-tr-none">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-foreground)", margin: 0 }}>
                  Mes Équipements Ménagers
                </h2>
                <button
                  onClick={() => setMenagersCollapsed(!menagersCollapsed)}
                  style={{
                    width: 32, height: 32, borderRadius: "50%",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <IconMoins width={16} height={16} style={{ color: "var(--color-foreground)" }} />
                </button>
              </div>

              {!menagersCollapsed && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {equipementsMenagers.map((label) => (
                    <Card key={label} className="p-4 flex flex-row items-center justify-between">
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <IconBox Icon={IconEquipements} />
                        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-foreground)" }}>
                          {label}
                        </span>
                      </div>
                      <SelectQuantite defaultValue="1" />
                    </Card>
                  ))}
                </div>
              )}
            </Card>

            {/* Section High-Tech */}
            <Card className="p-4 md:p-6 flex flex-col gap-4">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-foreground)", margin: 0 }}>
                  Mes Équipements High-Tech
                </h2>
                <button
                  onClick={() => setHighTechCollapsed(!highTechCollapsed)}
                  style={{
                    width: 32, height: 32, borderRadius: "50%",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <IconMoins width={16} height={16} style={{ color: "var(--color-foreground)" }} />
                </button>
              </div>

              {!highTechCollapsed && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {equipementsHighTech.map((label) => (
                    <Card key={label} className="p-4 flex flex-row items-center justify-between">
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <IconBox Icon={IconEquipements} />
                        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-foreground)" }}>
                          {label}
                        </span>
                      </div>
                      <SelectQuantite defaultValue="1" />
                    </Card>
                  ))}
                </div>
              )}
            </Card>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button>Enregistrer</Button>
            </div>

          </div>
        </TabsContent>

      </Tabs>
    </div>
  )
}