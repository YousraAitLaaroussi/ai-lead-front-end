
## 1 — Temp Client (visitor)

|#|Page|Purpose / Key Components|
|---|---|---|
|1|**Landing / Home**|Hero pitch, benefits, CTA buttons (“Try now”, “See plans”).|
|2|**Pricing / Plans**|Plan cards, feature comparison, “Select plan” buttons.|
|3|**Register / Sign up**|Email + password (or OAuth), optional phone verification.|
|4|**Checkout – Select Plan**|Selected plan summary, coupon field, “Next: payment”.|
|5|**Checkout – Payment**|Card / PayPal fields, billing address.|
|6|**Checkout – Confirmation**|Receipt, onboarding link, “Go to dashboard”.|
|7|**Legal Pages**|Terms, Privacy (footer links, one template covers all roles).|

> **Temp‑client journey**: `Home → Pricing → Register → Checkout‑Select → Checkout‑Payment → Confirmation → (auto‑login) → Client Dashboard`

---

## 2 — Client (subscriber)

|#|Page|Purpose / Key Components|
|---|---|---|
|1|**Client Dashboard**|KPIs (calls today, qualified leads, conversion rate), quick links.|
|2|**Leads List**|Table + filters; bulk upload, export CSV.|
|3|**Lead Details**|Call history, audio playback, transcript, intent tags.|
|4|**Call Logs**|Chronological list (date, duration, status, recording link).|
|5|**Campaigns**|Create / edit campaign, assign leads, view performance.|
|6|**AI Intents**|Sample utterances, retrain button, accuracy stats.|
|7|**Billing & Plan**|Current plan, usage quota, upgrade / cancel.|
|8|**Profile / Settings**|Company info, API keys, SIP credentials.|
|9|**Support / Help**|Docs, ticket form, chatbot.|

> **Client journey after purchase**: `Dashboard → (Leads | Campaigns | Calls | Billing)`

---

## 3 — Super Admin

|#|Page|Purpose / Key Components|
|---|---|---|
|1|**Admin Dashboard**|Global KPIs (total clients, daily calls, revenue).|
|2|**Clients Management**|List, search, view client profile, suspend / upgrade.|
|3|**Client Detail**|Usage metrics, billing history, impersonate login.|
|4|**Plans & Pricing**|CRUD plans, set limits, feature toggles.|
|5|**System Logs**|Errors, call queue status, webhook failures.|
|6|**Global Call Monitor**|Live calls across all clients, barge‑in / hang‑up.|
|7|**Model & Service Settings**|Whisper / Piper versions, GPT key pool.|
|8|**User Management (Admins)**|Add / remove internal admins, roles & permissions.|
|9|**Analytics / Reports**|Monthly revenue, churn, usage heatmaps.|

> **Super‑admin tools** focus on **multi‑tenant oversight** and day‑to‑day ops.

---

### Quick count

- **Temp Client**: **7 pages**
    
- **Client**: **9 pages**
    
- **Super Admin**: **9 pages**  
    **Total unique templates** (some reused, e.g. legal): **≈20**
    

That’s a solid starter scope for Stitch AI; you can always merge or split later.

---

## 📋 Ready‑to‑paste Stitch AI prompt

```markdown
Create a responsive SaaS web application UI for an AI-Powered Phone Lead Qualification System. The platform supports three user roles: Temp Client (unauthenticated), Client (subscriber), and Super Admin (internal staff). The UI must follow a clean, modern design with a sidebar layout for authenticated areas and full mobile responsiveness.


### 1. Temp Client (Visitor) Pages
These pages are for unauthenticated users exploring the service:

- Home / Landing Page:
  - Hero section with CTA
  - Service overview
  - Benefits
  - Testimonials

- Pricing Page:
  - Feature comparison table for multiple plans
  - Call-to-action buttons

- Register / Sign Up Page:
  - Form with email, password fields
  - Optional phone verification

- Checkout Flow:
  - Step 1: Select Plan
  - Step 2: Enter Payment Info
  - Step 3: Confirmation page with receipt & onboarding link

- Legal Pages:
  - Terms of Service
  - Privacy Policy

### 2. Client Pages (Authenticated Users After Purchase)
These pages allow the client to manage their lead qualification AI campaigns:

- Dashboard:
  - KPIs: total leads, qualified leads, conversion rate
  - Daily performance chart

- Leads List:
  - Search, filter, sort
  - Status tags
  - Bulk upload

- Lead Details Page:
  - Call history
  - Audio player
  - Transcript
  - Detected intents

- Call Logs:
  - Date, time, duration, status, links to recordings

- Campaign Management:
  - Create/edit campaigns
  - Assign leads
  - View campaign performance

- AI Intents Training:
  - List intents per campaign
  - Add sample utterances
  - Retrain button

- Billing & Plan Management:
  - Current plan
  - Usage statistics
  - Upgrade / cancel options

- Profile / Settings Page:
  - Company name
  - API keys
  - SIP settings

- Support Page:
  - Contact form or helpdesk widget
  - Quick help / FAQ

### 3. Super Admin Pages
These pages allow the internal team to manage clients, monitor activity, and adjust configurations:

- Admin Dashboard:
  - Global stats: total clients, call volume, system status

- Clients Management:
  - List view with filters
  - Actions: suspend, upgrade, impersonate

- Client Profile Page:
  - Usage details
  - Billing history

- Plans & Pricing Management:
  - Create/edit/delete plans
  - Configure plan limits/features

- Global Call Monitor:
  - Live view of ongoing calls
  - Barge-in / terminate options

- System Logs:
  - Call failures
  - Webhook issues
  - Model errors

- AI Service Settings:
  - Whisper/Piper versions
  - GPT API key pool

- Internal User Management:
  - Admin roles
  - Add/edit/remove internal users

- Reports & Analytics:
  - Revenue dashboard
  - Usage heatmaps
  - Client growth trends

### Design Instructions:
- Use a modern layout with sidebar navigation for authenticated views.
- Prioritize clarity and white space.
- Apply a Moroccan color scheme (deep blue, white, light neutrals).
- Support both dark and light themes.
- Ensure layout responsiveness for both desktop and mobile.

Deliver high-fidelity UI mockups for each listed page.

```

