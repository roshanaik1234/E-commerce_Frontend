import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColor = ["", "#e24b4a", "#EF9F27", "#1D9E75", "#0f6e56"];
  const strength = passwordStrength();

  const passwordsMatch = form.confirm && form.password === form.confirm;

const handleSubmit = async (e) => {
  e.preventDefault();

//   const userData = {
//     name: "Roshan Naik",
//     email: "rn123@gmail.com",
//     contact: "1234567890",
//   };

//   try {
//     const response = await fetch("http://localhost:3000/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const result = await response.json();
//     console.log(result);
//    setLoading(true);
//   setTimeout(() => setLoading(false), 1800);
//   alert("heloo")
//   } catch (error) {
//     console.error(error);
//   }
 setLoading(true);
try {
  const response = await fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.message); // Email already exists
    return;
  }

  alert("User added successfully");
} catch (error) {
  console.error(error);
}finally{
   setTimeout(() => setLoading(false), 1800);
}
};

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Brand */}
        <div style={styles.brand}>
          <div style={styles.logoMark}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2L19.66 17H2.34L11 2Z" fill="#1a1a2e" />
            </svg>
          </div>
          <span style={styles.brandName}>Vertex</span>
        </div>

        {/* Heading */}
        <div style={styles.headingBlock}>
          <h1 style={styles.heading}>Create your account</h1>
          <p style={styles.subheading}>Start your free workspace today — no card required</p>
        </div>

        {/* Social */}
        <div style={styles.socialRow}>
          <button style={styles.socialBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button style={styles.socialBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>

        {/* Divider */}
        <div style={styles.divider}>
          <span style={styles.dividerLine} />
          <span style={styles.dividerText}>or sign up with email</span>
          <span style={styles.dividerLine} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Full Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="name">Full name</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
              </svg>
              <input id="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} style={styles.input} />
            </div>
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="email">Email address</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} style={styles.input} />
            </div>
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                style={{ ...styles.input, paddingRight: "44px" }}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.eyeBtn} aria-label="Toggle password">
                {showPassword
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.94 10.94 0 0112 19c-5 0-9.27-3.11-11-7.5a10.95 10.95 0 012.95-4.45M9.9 4.24A10.94 10.94 0 0112 4c5 0 9.27 3.11 11 7.5a10.93 10.93 0 01-1.66 2.84M3 3l18 18" /></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                }
              </button>
            </div>
            {/* Strength meter */}
            {form.password && (
              <div style={styles.strengthWrap}>
                <div style={styles.strengthBars}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{ ...styles.strengthBar, background: i <= strength ? strengthColor[strength] : "#e8e7f0" }} />
                  ))}
                </div>
                <span style={{ ...styles.strengthText, color: strengthColor[strength] }}>{strengthLabel[strength]}</span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="confirm">Confirm password</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 12l2 2 4-4" /><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              <input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                value={form.confirm}
                onChange={handleChange}
                style={{ ...styles.input, paddingRight: "44px", borderColor: form.confirm ? (passwordsMatch ? "#1D9E75" : "#e24b4a") : undefined }}
              />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={styles.eyeBtn} aria-label="Toggle confirm password">
                {showConfirm
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.94 10.94 0 0112 19c-5 0-9.27-3.11-11-7.5a10.95 10.95 0 012.95-4.45M9.9 4.24A10.94 10.94 0 0112 4c5 0 9.27 3.11 11 7.5a10.93 10.93 0 01-1.66 2.84M3 3l18 18" /></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                }
              </button>
            </div>
            {form.confirm && (
              <p style={{ fontSize: "12px", margin: "4px 0 0", color: passwordsMatch ? "#1D9E75" : "#e24b4a" }}>
                {passwordsMatch ? "✓ Passwords match" : "✗ Passwords don't match"}
              </p>
            )}
          </div>

          {/* Terms */}
          <div style={styles.checkRow}>
            <input type="checkbox" id="terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={styles.checkbox} />
            <label htmlFor="terms" style={styles.checkLabel}>
              I agree to the{" "}
              <a href="#" style={styles.link}>Terms of Service</a>
              {" "}and{" "}
              <a href="#" style={styles.link}>Privacy Policy</a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{ ...styles.submitBtn, opacity: (!agreed || loading) ? 0.65 : 1, cursor: (!agreed || loading) ? "not-allowed" : "pointer" }}
            disabled={!agreed || loading}
          >
            {loading ? <span style={styles.spinner} /> : "Create account"}
          </button>
        </form>

        {/* Sign in */}
        <p style={styles.signinText}>
          Already have an account?{" "}
          <a href="#" style={styles.link}>Sign in</a>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; }
        input:focus { outline: none; border-color: #6c63ff !important; box-shadow: 0 0 0 3px rgba(108,99,255,0.12) !important; }
        button:hover { opacity: 0.88; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0effe 0%, #faf9ff 60%, #e8f4fd 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', sans-serif",
    padding: "24px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "40px 40px 32px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 4px 6px rgba(108,99,255,0.06), 0 24px 48px rgba(108,99,255,0.10)",
    animation: "fadeUp 0.5s ease both",
  },
  brand: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" },
  logoMark: {
    width: "36px", height: "36px", background: "#6c63ff", borderRadius: "10px",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  brandName: { fontFamily: "'DM Serif Display', serif", fontSize: "20px", color: "#1a1a2e", letterSpacing: "-0.3px" },
  headingBlock: { marginBottom: "24px" },
  heading: { fontSize: "24px", fontWeight: "600", color: "#1a1a2e", margin: "0 0 6px", letterSpacing: "-0.5px" },
  subheading: { fontSize: "14px", color: "#7b7a8e", margin: 0 },
  socialRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "18px" },
  socialBtn: {
    height: "44px", background: "#fafafa", border: "1.5px solid #e8e7f0", borderRadius: "12px",
    fontSize: "13px", fontWeight: "500", color: "#3d3c50", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
    fontFamily: "'DM Sans', sans-serif",
  },
  divider: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" },
  dividerLine: { flex: 1, height: "1px", background: "#ebebf0" },
  dividerText: { fontSize: "12px", color: "#b0afc0", whiteSpace: "nowrap" },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  fieldGroup: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "13px", fontWeight: "500", color: "#3d3c50" },
  inputWrapper: { position: "relative" },
  inputIcon: { position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#b0afc0", pointerEvents: "none" },
  input: {
    width: "100%", height: "46px", padding: "0 14px 0 42px",
    fontSize: "14px", color: "#1a1a2e", background: "#fafafa",
    border: "1.5px solid #e8e7f0", borderRadius: "12px",
    transition: "border-color 0.15s, box-shadow 0.15s",
    fontFamily: "'DM Sans', sans-serif",
  },
  eyeBtn: {
    position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
    background: "none", border: "none", cursor: "pointer", color: "#b0afc0",
    padding: "4px", display: "flex", alignItems: "center",
  },
  strengthWrap: { display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" },
  strengthBars: { display: "flex", gap: "4px", flex: 1 },
  strengthBar: { height: "4px", flex: 1, borderRadius: "2px", transition: "background 0.3s" },
  strengthText: { fontSize: "11px", fontWeight: "500", minWidth: "34px", textAlign: "right", transition: "color 0.3s" },
  checkRow: { display: "flex", alignItems: "flex-start", gap: "8px" },
  checkbox: { width: "16px", height: "16px", accentColor: "#6c63ff", cursor: "pointer", marginTop: "2px", flexShrink: 0 },
  checkLabel: { fontSize: "13px", color: "#7b7a8e", lineHeight: "1.5" },
  link: { color: "#6c63ff", fontWeight: "500", textDecoration: "none" },
  submitBtn: {
    height: "48px", background: "#6c63ff", color: "#ffffff", border: "none",
    borderRadius: "12px", fontSize: "15px", fontWeight: "600", cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif", marginTop: "4px",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "opacity 0.15s",
  },
  spinner: {
    width: "18px", height: "18px", border: "2.5px solid rgba(255,255,255,0.35)",
    borderTop: "2.5px solid #fff", borderRadius: "50%",
    display: "inline-block", animation: "spin 0.75s linear infinite",
  },
  signinText: { textAlign: "center", fontSize: "13px", color: "#7b7a8e", margin: "18px 0 0" },
};

export default SignUp;