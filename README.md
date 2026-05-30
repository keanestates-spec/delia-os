# DELIA-OS

A personal operating system dashboard — dark cyberpunk aesthetic, zero dependencies, fully offline. Everything runs in a single browser tab and persists to `localStorage`.

## Stack

Pure HTML · CSS · Vanilla JS · Web Speech API · Canvas API · Open-Meteo (weather) · Nominatim (reverse geocoding)

---

## Modules

### System
| Module | Description |
|---|---|
| **Boot Sequence** | Full-screen animated startup with AI voice greeting via Web Speech API |
| **System Time** | Live clock, date, real-time weather via location (Open-Meteo, no API key) |
| **Tasks** | To-do list with completion tracking and localStorage persistence |
| **Agenda** | Mini calendar with per-day event logging |
| **Launchpad** | Bookmark grid with favicon auto-fetch |

### Business
| Module | Description |
|---|---|
| **Business Metrics** | Revenue logger (€), 6-month bar chart, KPI cards (this month, all-time, avg, YTD) |
| **SAVA NEXUS** | CRM deal pipeline with 6 stages (Prospect → Won/Lost), funnel visualisation, pipeline value |
| **Peptide Garage** | Inventory management with stock alerts, order pipeline, one-click status advance |
| **Airbnb / STR** | Property + booking tracker, occupancy rate, revenue-by-property bar chart |
| **Course & Product Delivery** | Course cards with milestone checklists, progress bars, student/revenue stats |

### Personal
| Module | Description |
|---|---|
| **Wellness Tracker** | Sleep (bedtime/wake/quality), energy (1–5), mood emoji picker, 7-day overview chart, streak |
| **Daily Journal** | Morning (3 intentions, 3 gratitudes, word of day, free write) + Evening (wins, challenges, lessons, reflection) with day navigation and streak counter |
| **Relationship Check-ins** | People tracker with check-in frequency, urgency colour coding (green/amber/red), check-in log |
| **Future Self Visualiser** | 1yr / 5yr / 10yr visions across 6 life areas + affirmations, countdown to target year |
| **Innovation Idea Vault** | Idea capture with custom tags, status pipeline (Raw → Launched), potential scoring, search + filter |

### Creative
| Module | Description |
|---|---|
| **Mind Map** | Interactive canvas mind map — drag nodes, double-click to rename, radial auto-layout, per-day maps |
| **Idea Capture** | Daily idea list with emoji tags, per-day navigation, one-click promote to mind map |

---

## Usage

Open `index.html` in any modern browser. No server, no build step, no API keys required.

```bash
open index.html
```

All data is stored in `localStorage` under the `deliaos_` prefix. To reset any module, clear the relevant key from DevTools → Application → Local Storage.

---

## Voice Greeting

Plays on every page load using the Web Speech API. Selects the best available voice (priority: Google UK English Female, Samantha, Karen). Click **SKIP** or anywhere after the final line to dismiss.

---

## File Structure

```
delia-os/
├── index.html   — structure and all module markup
├── style.css    — cyberpunk theme, all module styles
└── app.js       — all logic (boot, widgets, modules)
```
