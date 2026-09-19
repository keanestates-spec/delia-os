# Hotel NEXUS orchestrator — portable across Railway/Fly/Render/a plain VPS.
# Not tested (no Docker available in the session that wrote this) — review before deploying.

FROM node:20-slim

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY . .

# index.js (the MCP server) talks over stdio, which doesn't suit a typical "run and
# leave it" host process by itself — most hosts expect a long-running process with a
# health-checkable port. night-shift.js is the one that genuinely just needs to stay
# alive on a schedule. Run night-shift as the container's main process; index.js (MCP
# server) is meant to be spawned by whatever connects to it (Ruflo/Claude Code), not
# run standalone as "the app."
CMD ["node", "night-shift.js"]
