import { useState } from "react"
import logoIcon from "@/assets/logo-icon.svg"
import logoName from "@/assets/logo-name.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login } from "@/lib/auth"
import { useNavigate } from "react-router-dom"

// ─── SVG Google ───────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
    </svg>
  )
}

// ─── Séparateur ───────────────────────────────────────────────────────────────
function Separator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
      <div style={{ flex: 1, height: 1, backgroundColor: "var(--color-border)" }} />
      <span style={{ fontSize: 12, color: "var(--color-foreground)", opacity: 0.4 }}>ou</span>
      <div style={{ flex: 1, height: 1, backgroundColor: "var(--color-border)" }} />
    </div>
  )
}

// ─── Page Login ───────────────────────────────────────────────────────────────
export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* ── Colonne gauche — image ─────────────────────────────────────────── */}
      <div className="hidden lg:flex" style={{
        flex: 1,
        backgroundImage: "url('/src/assets/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 24,
        margin: 16,
      }} />

      {/* ── Colonne droite ────────────────────────────────────────────────── */}
      <div style={{
        width: "40%",
        minWidth: 320,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        padding: "48px 40px",
        backgroundColor: "var(--color-card)",
      }}>

        {/* Logo full — en haut */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <img src={logoIcon} width={32} height={32} alt="Logo" />
          <img src={logoName} height={19} alt="Econaute" />
        </div>

        {/* Spacer haut — pousse le formulaire au centre */}
        <div style={{ flex: 1 }} />

        {/* Formulaire centré */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>

          {/* Titre */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--color-foreground)", margin: 0 }}>
              Bienvenue
            </h1>
            <p style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.5, margin: 0 }}>
              Connectez-vous pour accéder à votre espace
            </p>
          </div>

          {/* Bouton SSO Google */}
          <Button
            variant="outline"
            style={{ width: "100%", height: 48, gap: 12, fontSize: 14 }}
            onClick={() => console.log("Google login")}
          >
            <GoogleIcon />
            Continuer avec Google
          </Button>

          {/* Séparateur */}
          <Separator />

          {/* Champs email + password */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                Email
              </label>
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 14, color: "var(--color-foreground)", opacity: 0.7 }}>
                Mot de passe
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              style={{
                width: "100%",
                height: 48,
                backgroundColor: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
                fontSize: 14,
                fontWeight: 600,
              }}
              onClick={() => {
                login()
                navigate("/")
              }}
            >
              Se connecter
            </Button>
          </div>

        </div>

        {/* Spacer bas */}
        <div style={{ flex: 1 }} />

      </div>
    </div>
  )
}