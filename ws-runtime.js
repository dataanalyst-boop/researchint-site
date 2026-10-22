/* Intinya Workspace — runtime untuk web sendiri.
 * Login email + password (Supabase Auth), cek role akun, lalu menyalakan app (app.js).
 * Data, aturan akses, dan realtime ditangani Supabase; app.js hanya memanggil window.WS.
 */
(function () {
  'use strict';
  const cfg = window.WS_CONFIG || {};
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY || /xxxx/.test(cfg.SUPABASE_URL)) {
    document.addEventListener('DOMContentLoaded', () => showAuth('setup'));
    return;
  }
  if (!window.supabase || !window.supabase.createClient) {
    document.addEventListener('DOMContentLoaded', () => showAuth('nolib'));
    return;
  }
  const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  let session = null;

  async function logout() {
    try { await sb.auth.signOut(); } catch (_) { /* tetap keluar */ }
    location.hash = '';
    location.reload();
  }

  /* ---------------- layar login ---------------- */
  function showAuth(mode, msg) {
    const box = $('#auth'); const app = $('#app');
    if (app) app.hidden = true;
    box.hidden = false;
    const v = box.querySelector('.auth-body');
    const err = (t) => { const e = v.querySelector('.err'); if (e) e.textContent = t || ''; };
    const field = (label, type, id, attrs) => `<label class="af">${label}<input type="${type}" id="${id}" ${attrs || ''}></label>`;
    if (mode === 'setup') {
      v.innerHTML = '<h1>Workspace belum dikonfigurasi</h1><p class="asub">Isi <b>SUPABASE_URL</b> dan <b>SUPABASE_ANON_KEY</b> di file <code>config.js</code>, lalu muat ulang halaman. Lihat README bagian “Setup”.</p>';
      return;
    }
    if (mode === 'nolib') {
      v.innerHTML = '<h1>Tidak bisa terhubung</h1><p class="asub">Library Supabase gagal dimuat. Cek koneksi internet, lalu muat ulang halaman.</p><button class="abtn" type="button" onclick="location.reload()">Muat ulang</button>';
      return;
    }
    if (mode === 'login') {
      v.innerHTML = `<h1>Masuk</h1><p class="asub">Pakai email kantor dan password akun workspace kamu.</p>
        <form class="astack" id="fLogin">${field('Email', 'email', 'aEmail', 'required autocomplete="email"')}${field('Password', 'password', 'aPass', 'required autocomplete="current-password"')}
        <div class="err" role="alert"></div><button class="abtn" type="submit">Masuk</button></form>
        <div class="arow"><button class="alink" type="button" id="toSignup">Belum punya akun? Daftar</button><button class="alink" type="button" id="toReset">Lupa password</button></div>`;
      v.querySelector('#toSignup').onclick = () => showAuth('signup');
      v.querySelector('#toReset').onclick = () => showAuth('reset');
      v.querySelector('#fLogin').onsubmit = async (e) => {
        e.preventDefault(); err(''); const b = e.submitter; if (b) b.disabled = true;
        const { error } = await sb.auth.signInWithPassword({ email: v.querySelector('#aEmail').value.trim(), password: v.querySelector('#aPass').value });
        if (b) b.disabled = false;
        if (error) err(/invalid/i.test(error.message) ? 'Email atau password salah.' : /confirm/i.test(error.message) ? 'Email belum dikonfirmasi. Cek inbox untuk link konfirmasi.' : error.message);
      };
    } else if (mode === 'signup') {
      v.innerHTML = `<h1>Daftar akun</h1><p class="asub">Setelah daftar, Admin akan memberi role dan divisi sebelum kamu bisa memakai workspace.</p>
        <form class="astack" id="fSign">${field('Nama lengkap', 'text', 'sName', 'required autocomplete="name"')}${field('Email kantor', 'email', 'sEmail', 'required autocomplete="email"')}${field('Password (min. 8 karakter)', 'password', 'sPass', 'required minlength="8" autocomplete="new-password"')}
        <div class="err" role="alert"></div><button class="abtn" type="submit">Daftar</button></form>
        <button class="alink" type="button" id="toLogin">Sudah punya akun? Masuk</button>`;
      v.querySelector('#toLogin').onclick = () => showAuth('login');
      v.querySelector('#fSign').onsubmit = async (e) => {
        e.preventDefault(); err('');
        const { data, error } = await sb.auth.signUp({ email: v.querySelector('#sEmail').value.trim(), password: v.querySelector('#sPass').value,
          options: { data: { name: v.querySelector('#sName').value.trim() }, emailRedirectTo: location.origin + location.pathname } });
        if (error) { err(error.message); return; }
        if (!data.session) showAuth('login', 'Akun dibuat. Cek email untuk konfirmasi, lalu masuk.');
      };
    } else if (mode === 'reset') {
      v.innerHTML = `<h1>Lupa password</h1><p class="asub">Kami kirim link untuk membuat password baru ke email kamu.</p>
        <form class="astack" id="fReset">${field('Email', 'email', 'rEmail', 'required autocomplete="email"')}<div class="err" role="alert"></div><button class="abtn" type="submit">Kirim link</button></form>
        <button class="alink" type="button" id="toLogin">Kembali ke halaman masuk</button>`;
      v.querySelector('#toLogin').onclick = () => showAuth('login');
      v.querySelector('#fReset').onsubmit = async (e) => {
        e.preventDefault(); err('');
        const { error } = await sb.auth.resetPasswordForEmail(v.querySelector('#rEmail').value.trim(), { redirectTo: location.origin + location.pathname });
        if (error) { err(error.message); return; }
        showAuth('login', 'Link reset password sudah dikirim. Cek email kamu.');
      };
    } else if (mode === 'newpass') {
      v.innerHTML = `<h1>Buat password baru</h1><form class="astack" id="fNew">${field('Password baru (min. 8 karakter)', 'password', 'nPass', 'required minlength="8" autocomplete="new-password"')}<div class="err" role="alert"></div><button class="abtn" type="submit">Simpan password</button></form>`;
      v.querySelector('#fNew').onsubmit = async (e) => {
        e.preventDefault(); err('');
        const { error } = await sb.auth.updateUser({ password: v.querySelector('#nPass').value });
        if (error) { err(error.message); return; }
        location.hash = ''; location.reload();
      };
    } else if (mode === 'pending' || mode === 'off') {
      v.innerHTML = mode === 'pending'
        ? `<h1>Menunggu akses</h1><p class="asub">Akun <b>${esc(session && session.user.email)}</b> sudah terdaftar. Admin perlu memberi role dan divisi dulu. Hubungi Admin, lalu muat ulang halaman ini.</p>`
        : `<h1>Akun dinonaktifkan</h1><p class="asub">Akun <b>${esc(session && session.user.email)}</b> sudah dinonaktifkan Admin. Hubungi Admin kalau ini keliru.</p>`;
      v.innerHTML += '<div class="arow"><button class="abtn" type="button" id="reload">Muat ulang</button><button class="alink" type="button" id="out">Keluar</button></div>';
      v.querySelector('#reload').onclick = () => location.reload();
      v.querySelector('#out').onclick = logout;
    } else if (mode === 'error') {
      v.innerHTML = `<h1>Gagal memuat workspace</h1><p class="asub">${esc(msg)}</p><div class="arow"><button class="abtn" type="button" id="reload">Coba lagi</button><button class="alink" type="button" id="out">Keluar</button></div>`;
      v.querySelector('#reload').onclick = () => location.reload();
      v.querySelector('#out').onclick = logout;
      return;
    }
    if (msg) { const n = document.createElement('div'); n.className = 'anote'; n.textContent = msg; v.prepend(n); }
    const first = v.querySelector('input'); if (first) first.focus();
  }

  /* ---------------- nyalakan app ---------------- */
  let booted = false;
  async function startApp() {
    if (booted) return; booted = true;
    const uid = session.user.id;
    const { data: me, error } = await sb.from('ws_profiles').select('*').eq('id', uid).maybeSingle();
    if (error) { booted = false; showAuth('error', error.message); return; }
    if (!me || !me.role) { showAuth('pending'); return; }
    if (me.off) { showAuth('off'); return; }
    sb.from('ws_profiles').update({ last_seen: new Date().toISOString() }).eq('id', uid).then(() => {}, () => {});
    $('#auth').hidden = true; $('#app').hidden = false;
    window.WS = { sb, uid, email: session.user.email, logout };
    try {
      await window.WS_BOOT(window.WS);
    } catch (e) {
      console.error(e);
      showAuth('error', (e && e.message) || String(e));
    }
  }

  document.addEventListener('DOMContentLoaded', async () => {
    let recovery = /type=recovery/.test(location.hash);
    sb.auth.onAuthStateChange((event, s) => {
      session = s;
      if (event === 'PASSWORD_RECOVERY') { recovery = true; showAuth('newpass'); return; }
      if (event === 'SIGNED_OUT') { location.reload(); return; }
      if (s && !recovery) setTimeout(startApp, 0);
    });
    const { data } = await sb.auth.getSession();
    session = data.session;
    if (recovery) showAuth('newpass');
    else if (session) startApp();
    else showAuth('login');
  });
})();
