Tauri build instructions

Prerequisites
- Node.js (v18+)
- npm
- Rust toolchain (install via https://rustup.rs)

Quick start
1. Install JS deps:
   npm install
2. Install Rust toolchain (if not already):
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   # On Windows, use the installer from https://rustup.rs
3. Start dev (opens a Tauri window and runs Vite dev server):
   npm run tauri:dev
4. Build installers:
   npm run tauri:build

Notes
- The project uses Vite dev server at http://localhost:5173 by default. If Vite uses a different port, update `src-tauri/tauri.conf.json`.
- If you get an error running `tauri` commands, ensure `@tauri-apps/cli` is installed (`npm i -D @tauri-apps/cli`) and Rust is installed with `cargo` in PATH.
