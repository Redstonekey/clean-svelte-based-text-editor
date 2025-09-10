# Clean Svelte based Text Editor with simple markup
This is a minimal Svelte + Vite scaffold for the IA Editor UI prototype.

Quick start (PowerShell):

```powershell
npm install
npm run dev
```

Notes:
- This is a web dev scaffold. For a native desktop app wrap with Tauri later (recommended) or use Electron.
- File persistence currently uses localStorage. We'll swap to real filesystem when integrating Tauri.
- The editor uses a mirrored highlight layer so markup markers (like `**`, `#`, `-`) remain visible while styled.
