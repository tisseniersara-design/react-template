import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { IconCompte } from "@/assets/icons"

// ─── Page Mon Compte ──────────────────────────────────────────────────────────
export function Compte() {
  const [prenom, setPrenom] = useState("Thierry")
  const [nom, setNom] = useState("VAYSSIERE")
  const [email, setEmail] = useState("thierry@econaute.fr")
  const [telephone, setTelephone] = useState("")
  const [photo, setPhoto] = useState<string | null>(null)

  // ─── Initiales pour l'avatar par défaut ───────────────────────────────────
  const initiales = `${prenom[0] ?? ""}${nom[0] ?? ""}`.toUpperCase()

  // ─── Gestion upload photo ─────────────────────────────────────────────────
  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPhoto(url)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

      {/* ── Titre ──────────────────────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <IconCompte className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: "var(--color-foreground)", alignSelf: "center" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <h1
            className="text-2xl lg:text-5xl font-bold"
            style={{ color: "var(--color-foreground)", margin: 0 }}
          >
            Mon Compte
          </h1>
        </div>
      </div>

      <Card className="p-6 flex flex-col gap-8">

        {/* ── Photo de profil ──────────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>

          {/* Avatar */}
          <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "var(--color-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}>
            {photo
              ? <img src={photo} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Photo de profil" />
              : <span style={{ fontSize: 24, fontWeight: 700, color: "var(--color-foreground)" }}>{initiales}</span>
            }
          </div>

          {/* Bouton upload */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              htmlFor="photo-upload"
              style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: 8,
                border: "1px solid var(--color-border)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--color-foreground)",
                backgroundColor: "var(--color-card)",
              }}
            >
              Changer la photo
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />
            <p style={{ fontSize: 12, color: "var(--color-foreground)", opacity: 0.5, margin: 0 }}>
              JPG, PNG. Max 2MB.
            </p>
          </div>

        </div>

        {/* ── Champs ───────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
              Prénom
            </label>
            <Input
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Votre prénom"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
              Nom
            </label>
            <Input
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Votre nom"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
              Téléphone
            </label>
            <Input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="+33 6 00 00 00 00"
            />
          </div>

        </div>

        {/* ── Bouton Enregistrer ───────────────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              fontWeight: 600,
            }}
            onClick={() => console.log("Enregistrer", { prenom, nom, email, telephone })}
          >
            Enregistrer
          </Button>
        </div>

      </Card>
    </div>
  )
}