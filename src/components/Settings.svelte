<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  // load preferences
  let font = localStorage.getItem('ia:font') || 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';
  let spellcheck = localStorage.getItem('ia:spellcheck') === 'true';
  let lang = localStorage.getItem('ia:lang') || 'en';
  // font size in pixels (default larger than before)
  let fontSize: number = parseInt(localStorage.getItem('ia:fontSize') || '20', 10);

  function save() {
    localStorage.setItem('ia:font', font);
    localStorage.setItem('ia:spellcheck', spellcheck ? 'true' : 'false');
    localStorage.setItem('ia:lang', lang);
  localStorage.setItem('ia:fontSize', String(fontSize));
    dispatch('update', { font, spellcheck, lang });
    dispatch('close');
  }

  function cancel() {
    dispatch('close');
  }
</script>

<style>
  .settings { color: var(--text-color); }
  .row { display:flex; gap:8px; align-items:center; margin-bottom:10px; }
  label { min-width:120px; font-size:14px; }
  .settings select,
  .settings input[type="number"],
  .settings input[type="range"] {
    background: var(--editor-bg);
    color: var(--text-color);
    border: 1px solid var(--border-muted);
    padding: 6px 8px;
    border-radius: 6px;
    box-sizing: border-box;
  }
  .settings input[type="range"] { width: 100%; accent-color: var(--heading-color); }
  .settings input[type="checkbox"] { width: 18px; height: 18px; accent-color: var(--heading-color); }
  .settings .controls { display:flex; gap:8px; justify-content:flex-end; margin-top:12px; }
  .settings button { background: var(--topbar-bg); color: var(--topbar-ink); border: 1px solid var(--border-muted); padding: 8px 10px; border-radius:6px; }
  .settings button:hover { background: var(--icon-hover-bg); }
</style>

<div class="settings">
  <h3>Settings</h3>
  <div class="row">
  <label for="settings-font">Editor font</label>
  <select id="settings-font" bind:value={font} style="flex:1">
      <option value='Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'>Inter (system)</option>
      <option value='Georgia, serif'>Georgia (serif)</option>
      <option value='Menlo, Monaco, "Courier New", monospace'>Monospace</option>
    </select>
  </div>
  <div class="row">
  <label for="settings-spellcheck">Spellcheck</label>
  <input id="settings-spellcheck" aria-describedby="spellcheck-desc" type="checkbox" bind:checked={spellcheck} />
  </div>
  <div class="row">
  <label for="settings-lang">Language</label>
  <select id="settings-lang" bind:value={lang} style="flex:1">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
  <div class="row">
  <label for="settings-fontsize">Editor font size</label>
  <div style="display:flex;gap:8px;flex:1;align-items:center;">
    <input id="settings-fontsize" type="range" min="12" max="28" bind:value={fontSize} />
    <input type="number" min="12" max="40" bind:value={fontSize} style="width:64px;padding:6px;border-radius:6px;border:1px solid var(--border-muted);" />
  </div>
  </div>
  <div class="controls">
    <button on:click={cancel}>Cancel</button>
    <button on:click={() => { save(); dispatch('update', { font, spellcheck, lang, fontSize }); }}>Save</button>
  </div>
</div>
