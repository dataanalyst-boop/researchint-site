/* Intinya Workspace — app. Dibangun dari versi HTML (make_supa.py); data dari Supabase lewat window.WS. */
window.WS_BOOT=async function(WS){

const LOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAAYFBMVEX////+/////f////z//vz//fz//vj//fP9///7///8/v/8/vr4//74/f30/v7t/v/8+/j89u3w+fva8Pa7w8HqlEaBqL9fiqU8bI0rZ5Albp8kVnocY5QaVYAXSnEWPV4BAVYIAAAIDElEQVR42p2Yi3ajOgxFITbgJxiHAimP/P9f3iOZJMCkmc6lXe1agWykI1mSnWVZJku6Crrof2a8d85pZcuq8nW8XmPdNLUvyyoorXFHa4PvVDI7XPIBYYzMjfFGeW9C8Kq59uPYXxtwQlWVVtOlgMGjJ0yWXbLLJTf5RYKU5aYIoQSjrptrN9zGcRy6ax1jKEtbWkFXnuNl+RFi0hu0Ugb3lCngTFUFhnzzdSMQ/LKwtiIFpCLnjhx8wg4ng52XhAmu6frv53VLnhEIN0tpdF27dxij6DLae5lJ7+trP3zvrtttAAjftczJtTtjFIVF8iUQJYoTi5K+/j0M+INfgMgzChlCYrTTR20gvCCn4bXw0ZudKN8kCiFvCUogxKwQpSyMOQVcsMNV1QZSjkS5vRxBziDqQ+IkiaIzWdGGU7gflBIxbmrKlJesrmqtjwQa50QeWaLahlCcMIlTBspWeDA+X+xhYVvagAxq2LP5e5Mo1j7YszaWtDEJQow5idLiqvAG+UhFvAA/863vSOpT+umUNsn0pMo3RAld17Wt90XRtqHInavp9o3escDSeOAgsy2txNqRkCPLMtNTou2+vr7IHkhfQApvNL/nNs83lqjOjJKhpDzJkK+Us7p+BJme6BoXWsYkkHN4k7e+dhGeTZRGM0nk6DG8p8rwKmuDOy4fPI7bX+nqSGXktrIuBE1PTgs8mwnUOB/I3IyC/BJly9QYffXEMIgs9k77GDkjpgnO3SYKPp6VIeMg91uQSZQaDnhv95gv0ho6w7OIQDgGJY04i5zKGPK9RRlWKgM1Q56X1Q6TDLpAG61RD2FukmielxtrkJEoM7vDHxjUJmCAOmIIBP8dao60xiSJZrJngpgxe4iSSmVteWmhFBZnDDgFqohHUcN7PGfRQhjo1GVpAXEa1FRNqqq4XFAP5RtMhVqQFbz8CkPVhDwjTr9hkG7+AlutrSyKF3I6vMG0pTJcGlFScnBqLLRpemJuPYkSikJaa1NFVc/0O6iMjE2FCbmLWER3HaYbYygle24fyOsHBv+rdxgqfMJaIQWAEDFe+82pDUPalnSTFip1AErz7oyhZ3glU02o2gqYZV5emAbZX1mbXy4XnYo2kvzI2TCo5QgFV/a2RLiWZXlq01D9gCeIUpHKsrWyCAdQ9zQGFM2lTrwwyRqN20pQ6xXs3KMs7kBkjcCnOTUilBohjVCxn/YYhQamEAWhbUXdGc7luUicDQRMOHVbJX7EGPwR1NaTNbBtixlWw7GlGCdk7Nf3GJ06fZ5dqNTTAvPJsw4F9YRRHzDGKMZQfS2hOWoMe9a15myNtC8Mrj2GqjtLyI1HYgJBQ48+AiOOE43x4u8YFGphqacb7i792EdpTx1F7TAoGoTB6qUJyiWMUjbY3AYfqUdx8+0bVLljf5PyZwwPKMr6gKnAo4LV3OdQSpoT5yOGxw1r0E1YExtTs0xVVx3zRv7olFapBVqsHWr5qART6hm0YvLfY0hbIdD+Ubqv/XRftymlb7z+EPATxvBYW9o6QpRxXdeF2zYqZER3/ISZ+iZH/QWgYGu4OLm6G+53rN9lm5D6+k+MPGEuFxsUrUeHwRAcKVwc7+uyEoab2K2PZXlKPyniAHtT+i1HjMqRvYX0eGJalgcGEkf7BtP/BaN/j1l/xEjpgGHKMs/cHoGx/4wRZ8z0zxj5A8Z/wsxnDEdK1UfM/AajC0TqnjDTe4wBZtph8FA08o8J9keMzk+Y+X9hHHZnO8w8vzDafMAsnzDzHuP+GSMSZkPglzD+V5g8aZMxRu8xy3uM+gPjaHIsinBRCp0OJYcxD8rCjToaK6jvcvdVGlNgMIy5MwbzCU0CtNvF3gCTO1nFmNsLg4d8hmGB+pihPWCN3VnQVxSTO2NoBkSddREfh6wIQlxoPHmDkZgzjDI5mg6Gah8UV8cXZsUweY24BbcwSskn5nuHGbyUNGhhXAsxBCEdmhcYK2NQLmh8mzBaY8hHBT1gqEa8MKm+ikDbDBU7dgjS3LsMRJTbaQGMOghM3Tt1xGxlGts942JSBYw7JMloa8NDKazinUSt8ycmbWoYs05DNOkYw8basSgrWTINNOxjgKfpFoUOhXcFSDtvLtTt4rYTT5hpHSJ6KPzBBiSJwtaMXa2RT7ly1KPhGUD4Q3skuAbM9YlBwcB7B4pAgTH/SqKsLAoi48nADAm1TQxgrBQ0zNre63qPIUNXLE20IeVh+6YsbbDpHAWNBxjMU7TZGiYGrXyXyDsM8LCm5qOLB4REUXTKs2Gwo6asJK2pIq7k8NUdMPjWOuDV6KObKHdsfwChox6IjmWqfcAIHD3tWkd6Eb2ur08YWFOzKBPFmEQxgvZv4GB90SbcY6MR0JmipziSzuTBEbPS65/pBv1U2WJfVRjaOTqH1c4jWoFegL2N3gS8Dw3tlg5OTdOWbxDFZKSIkFjKdBbljucDOWbNlOMDVsYes673nSiZ5Kn39b3zYRnGBE6uMTYnDFvEouiMzsmy/M8v72saon8dWJvvgzZ0UVLVPt8O2z5hQhuLLNKRYf+05p4oEIWOyXL5Cwx2lG3ATO2ea+phCkRp6BAAtQYX6ugnDA32FvlI+9Fxh6HcxlYKBav9DQZ7MTIGK63ZzuzW5I9yEWNCZilt4dNfMJKOGCkhuYT04zgSpKtzr4zhk0xRCsZ81EbKnA4qkdfWp5MoCrKCJrlNB6LbqehnjCgI4+goUPAZW4d1iiodrUraPjD7SP0HP+c3ReTnpEwAAAAASUVORK5CYII=';
const TODAY=(()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')})();
const ST=[['TO DO','--s-todo'],['WORK IN PROGRESS','--s-wip'],['NOT YET','--s-not'],['KETENTUAN BY QMR','--s-qmr'],['HOLD','--s-hold'],['PLANNING','--s-plan'],['CANCEL','--s-cancel'],['DONE','--s-done']];
const ST_ALL=[...ST,['IN PROGRESS','--s-wip'],['REVIEW/UAT','--s-plan']];
const ST_IRND=['TO DO','IN PROGRESS','REVIEW/UAT','HOLD','DONE','CANCEL'];
const stc=s=>(ST_ALL.find(x=>x[0]===s)||ST_ALL[0])[1];
const SWC=['#2f6fd0','#1f7a4c','#b4690e','#7a5aa6','#c0392b','#0f7b8a','#a8458a','#4a7a8c','#d6336c','#5b6b2e'];
const stOf=sp=>sp==='irnd'?ST_IRND.map(x=>[x,stc(x)]):ST;
const TAHAP=['1. Analisa & Alur','2. Design / Mockup','3. Develop','4. Testing / UAT','5. Deploy / Go-Live','6. Dokumentasi / SOP','Lainnya'];
const JENIS=['Project Baru','Pengembangan Fitur','Perbaikan / Bug Fix','Maintenance / Support'];
const COS=['CSB','SFT','INT Group','Lainnya'];
const AREAS=['Membership','Website','Bundle Kiosk','ERP','HRIS','AI & Automation','Barcode & Inventory','Aplikasi Internal','Lainnya'];
const PR={urgent:['Urgent','--p-urg'],high:['High','--p-high'],normal:['Normal','--p-norm'],low:['Low','--p-low']};
const TAGC={membership:'--s-plan',kiosk:'--p-high',website:'--s-wip',backend:'--s-wip',frontend:'--s-plan',jaringan:'--s-qmr',hardware:'--p-high',bug:'--p-urg',dokumentasi:'--s-todo',infra:'--s-done',garansi:'--s-hold',pelanggan:'--s-wip',audit:'--s-qmr',promo:'--p-urg',keamanan:'--s-hold'};
const tagc=t=>TAGC[t]||'--s-not';
const U={};
const MAILDOM='ptintinyateknologi.com';
const ROLES0={};
const roleLbl=u=>u.role==='Member QMR'?'Member QMR (Audit)':u.role==='Member'&&u.head?'Head '+(DEPTN[u.dept]||''):u.role==='Member'?'Member ('+(DEPTN[u.dept]||'-')+')':u.role==='Guest'?'Guest ('+(DEPTN[u.dept]||'-')+')':u.role;
const fname=n=>{const p=n.split(' ');return p[0]==='Moh.'?(p[2]||p[1]):p[0]};
const ROLES=new Proxy({},{get:(o,k)=>U[k]?(ROLES0[k]||fname(U[k].n)+' · '+roleLbl(U[k])):undefined,ownKeys:()=>Object.keys(U).filter(k=>!U[k].off),getOwnPropertyDescriptor:(o,k)=>U[k]&&!U[k].off?{enumerable:true,configurable:true,value:ROLES0[k]||fname(U[k].n)+' · '+roleLbl(U[k])}:undefined});
const slug=n=>n.toLowerCase().replace(/^moh\.\s*/,'').replace(/[^a-z ]/g,'').trim().split(/\s+/).slice(0,2).join('.');
function seedUsers(){const ll=['2026-10-17','2026-10-16','2026-10-17','2026-10-14','2026-10-17','2026-10-15','2026-10-12','2026-10-16'];let i=0;
 Object.keys(U).forEach(k=>{const u=U[k];if(!u.email)u.email=slug(u.n)+'@'+MAILDOM;if(!u.created)u.created=TODAY;if(u.last===undefined)u.last='';if(!u.spaces)u.spaces=[];if(u.pwSet===undefined)u.pwSet=true})}
const ROLENOTE={
 admin:'Melihat semua space termasuk yang private dan space Meeting, mengelola user, space, dan integrasi Google.',
 hoirul:'Melihat dan mengedit Weekly dan Internal R&D. Ikut di space Meeting dan mengedit task miliknya. Di Monthly hanya berkomentar dan mengubah status task miliknya.',
 rina:'Tim audit. Membuat task Monthly semua brand, lalu memverifikasi bukti dan keterangan: sesuai, atau mencabut DONE kembali ke WORK IN PROGRESS. Bisa mengecek Weekly semua divisi, tapi tidak melihat space Internal tim.',
 budi:'Hanya masuk ke space yang di-share (Sales). Mengedit task miliknya; task orang lain hanya dikomentari dan diubah statusnya.'
};
const SP=[
 {id:'koord',n:'Notulen Koordinasi',k:'KOR',c:'#5b4fd6',meet:true},
 {id:'wall',n:'Weekly',k:'WKL',c:'#0b7fd1',meet:true},
 {id:'irnd',n:'Internal R&D',k:'TSK',c:'#2f6fd0',internal:true,dept:'rnd'}];
const spDef=id=>SP.find(s=>s.id===id);
let QN0=null;
let LISTS={irnd:[{id:'dr',n:'Data & Research'},{id:'sys',n:'System'},{id:'mid',n:'RnD X Midory'}],
 koord:[{id:'k02',n:'02. RND-BMA (DIGMAR+CC+DG)-Midory',depts:['rnd','sales']},{id:'k04',n:'04. FAC-PUR-WRH-PROJECT-SAL-SUPPORT',depts:['wh','sales','svc']},{id:'k08',n:'08. MIDORY-SUPPORT IT-RND-SAL-WRH',depts:['it','rnd','sales','wh']},{id:'k10',n:'10. PUR-SAL-WRH-ADMIN ORDER-CS',depts:['sales','wh','cs']}],
 wall:[{id:'wall',n:'All Dept'},{id:'wrnd',n:'RnD',depts:['rnd']},{id:'wsls',n:'Sales',depts:['sales'],shared:true},{id:'wwrh',n:'WRH',depts:['wh']}]};
const fdef=(sp,id)=>(LISTS[sp]||[]).find(l=>l.id===id);
const navSpace=()=>S.nav.startsWith('w:')?S.nav.slice(2):S.nav.startsWith('f:')?S.nav.split(':')[1]:'';
const navList=()=>S.nav.startsWith('f:')?S.nav.split(':')[2]:'';
const listName=(sp,id)=>((LISTS[sp]||[]).find(l=>l.id===id)||{n:''}).n;
function guessList(p,ks){const tx=(p.n+' '+ks.map(k=>(k.det||'')+' '+(k.ket||'')).join(' ')).toLowerCase();
 if(/midory/.test(tx))return'mid';if(/forecast|forecash|display|stamp|mysterious|survey|riset|prediksi/.test(tx))return'dr';return'sys'}
const BR={sft:{n:'Selfie Time',c:'#d6336c'},int:{n:'Intinya',c:'#0e6b62'},hns:{n:'HnS',c:'#e0262d'}};
const spName=id=>id==='monthly'?'Monthly '+TODAY.slice(0,4):(spDef(id)||{}).n;
const spLabel=t=>t.space==='monthly'?'Monthly '+(BR[t.brand]||{n:''}).n:spName(t.space);
const isMo=()=>S.nav.startsWith('m:');
const moBr=()=>S.nav.split(':')[1];
const moDp=()=>S.nav.split(':')[2]||'';
const moDepts=()=>{const u=me();return Object.keys(DEPTN).filter(d=>u.role==='Admin'||u.role==='Member QMR'||u.dept===d)};
const DEPTN={rnd:'RnD',it:'IT Support',svc:'Servis',cs:'CS',sales:'Sales',wh:'WRH'};
const AGENDA={irnd:'',koord:'Koordinasi lintas divisi: stok 11.11, alur klaim garansi, maintenance POS',wall:'Tindak lanjut semua divisi, dikelompokkan per tanggal weekly',rnd:'Integrasi marketplace, migrasi DB POS, kesiapan 11.11',it:'Jaringan lantai 2, CCTV cabang Nagoya Hill',svc:'Antrian servis, SLA garansi',cs:'Komplain garansi, FAQ',sales:'Tender PC sekolah, promo 11.11',wh:'Stock opname Batam Centre'};

/* ---------- data contoh ---------- */
const TRK={P:[],T:[]};
const SEQ={RND:140,ITS:60,SRV:300,CS:80,SLS:40,WRH:30,MON:20,KOR:10,WAD:200,PRJ:45,TSK:0};
function T(o){const sp=o.space==='monthly'?'MON':(spDef(o.space)||{k:'WKL'}).k;SEQ[sp]=SEQ[sp]||0;
 return Object.assign({id:'t'+Date.now().toString(36)+Math.random().toString(36).slice(2,7),key:o.space==='irnd'?(o.parent?'TSK-':'PRJ-')+String(++SEQ[o.parent?'TSK':'PRJ']).padStart(3,'0'):sp+'-'+(++SEQ[sp]),parent:'',tahap:'',fin:'',khusus:'',verif:null,mst:{},jenis:'',co:'',area:'',req:'',link:'',status:'TO DO',pri:'normal',tags:[],start:'',due:'',desc:'',inputan:'',creator:'hoirul',att:[],feed:[],subs:[],time:0,carry:'',meet:''},o)}
const S0=()=>[];
const I0=()=>[];
/* jadwal meeting (diatur QMR) */
const M0=()=>[];
const KEY='iw-web';
/* ---------- sinkronisasi Supabase ----------
 * Pengganti localStorage. Semua perubahan dikirim ke database (hanya kolom yang berubah),
 * perubahan orang lain masuk lewat realtime + sinkron ulang berkala.
 * Database yang memutuskan boleh/tidak; kalau ditolak, data dikembalikan ke versi server. */
const sb=WS.sb;
const SY={t:new Map(),m:new Map(),i:new Map(),u:new Map(),c:new Map()};
const sg=o=>JSON.stringify(o===undefined?null:o);
const cl=o=>JSON.parse(JSON.stringify(o));
let tasks=[],inbox=[],meets=[];
const relT=iso=>{if(!iso)return'';const s=(Date.now()-Date.parse(iso))/1000;if(s<120)return'Baru saja';if(s<3600)return Math.round(s/60)+' menit lalu';if(s<86400)return Math.round(s/3600)+' jam lalu';const d=new Date(iso);return d.getDate()+' '+['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()]};
const isNet=e=>!e||!e.code||/fetch|network|Failed to fetch|timeout/i.test(e.message||'');
function wsFail(e){const m=e&&e.message?e.message:'Gagal menyimpan ke server';
 try{if(isNet(e))toast('Koneksi ke server terputus. Perubahan dicoba lagi otomatis.');else toast(m)}catch(_){console.warn(m)}}
async function fetchAll(table,cols,order){const out=[];for(let f=0;;f+=1000){const {data,error}=await sb.from(table).select(cols).order(order||'id').range(f,f+999);if(error)throw error;out.push(...data);if(data.length<1000)break}return out}

/* pengguna */
const uSig=u=>sg({n:u.n,role:u.role||'',dept:u.dept||'',head:!!u.head,spaces:u.spaces||[],off:u.pending?false:!!u.off,c:u.c||''});
function applyProfile(r){const k=r.id,old=U[k];
 const u={n:r.name||r.email||'',email:r.email||'',role:r.role||'',dept:r.dept||undefined,head:!!r.head,spaces:r.spaces||[],c:r.color||'#4a7a8c',off:!!r.off||!r.role,pending:!r.role,created:(r.created_at||'').slice(0,10),last:(r.last_seen||'').slice(0,10),pwSet:true};
 if(old&&SY.u.has(k)&&uSig(old)!==SY.u.get(k))return false; // sedang diubah di layar ini
 U[k]=Object.assign(old||{},u);SY.u.set(k,uSig(U[k]));return true}
/* struktur */
const cfgNow=()=>({spaces:SP,lists:LISTS,brands:BR,depts:DEPTN});
function applyCfg(k,d){if(SY.c.has(k)&&sg(cfgNow()[k])!==SY.c.get(k))return false;
 if(k==='spaces')SP.splice(0,SP.length,...cl(d));
 else if(k==='lists')LISTS=cl(d);
 else{const o=k==='brands'?BR:DEPTN;Object.keys(o).forEach(x=>delete o[x]);Object.assign(o,cl(d))}
 SY.c.set(k,sg(d));return true}
/* task & meeting */
const COL={t:['ws_tasks',()=>tasks],m:['ws_meets',()=>meets]};
function applyDoc(kind,id,d,sent){const arr=COL[kind][1](),i=arr.findIndex(x=>x.id===id),prev=SY[kind].get(id);
 if(d==null){if(i>-1&&(prev===undefined||sg(arr[i])===prev))arr.splice(i,1);SY[kind].delete(id);return}
 const ss=sg(d);
 if(i>-1){const cur=sg(arr[i]);
  if(sent!==undefined?cur===sent:(prev===undefined||cur===prev)){const o=arr[i];Object.keys(o).forEach(k=>delete o[k]);Object.assign(o,cl(d))} // objek yang sama tetap dipakai (handler async masih memegang referensinya)
 }else arr.push(cl(d));
 SY[kind].set(id,ss)}
const inboxOf=r=>Object.assign(cl(r.data||{}),{id:r.id,u:WS.uid,t:relT(r.created_at)});
const stripI=i=>{const o=cl(i);delete o.t;delete o.id;return o};

async function wsLoad(){
 const [pr,cf,ts,ms,ib]=await Promise.all([fetchAll('ws_profiles','*'),fetchAll('ws_config','key,data','key'),fetchAll('ws_tasks','id,data'),fetchAll('ws_meets','id,data'),
  sb.from('ws_inbox').select('id,data,created_at').eq('user_id',WS.uid).order('created_at',{ascending:false}).limit(300)]);
 if(ib.error)throw ib.error;
 Object.keys(U).forEach(k=>delete U[k]);pr.forEach(applyProfile);
 cf.forEach(r=>applyCfg(r.key,r.data));
 tasks=ts.map(r=>{SY.t.set(r.id,sg(r.data));return cl(r.data)});
 meets=ms.map(r=>{SY.m.set(r.id,sg(r.data));return cl(r.data)});
 inbox=ib.data.map(r=>{SY.i.set(r.id,!!(r.data||{}).read);return inboxOf(r)});
 try{QN0=JSON.parse(localStorage.getItem('iw-qn-'+WS.uid)||'null')}catch(_){}
}

/* kirim perubahan */
let flushT=null,flushing=false,again=false,retryT=null;
function save(){clearTimeout(flushT);flushT=setTimeout(flush,300);try{localStorage.setItem('iw-qn-'+WS.uid,JSON.stringify(S.qn||null))}catch(_){}}
async function flush(){if(flushing){again=true;return}flushing=true;let changed=false;
 try{changed=await flushX()}catch(e){wsFail(e);clearTimeout(retryT);retryT=setTimeout(flush,8000)}
 flushing=false;if(changed)softRender();if(again){again=false;flush()}}
async function flushX(){let changed=false;
 // 1. struktur (folder dulu, karena task bisa merujuk folder baru)
 for(const [k,v] of Object.entries(cfgNow())){const s=sg(v);if(!SY.c.has(k)||SY.c.get(k)===s)continue;
  const {error}=await sb.from('ws_config').update({data:v}).eq('key',k);
  if(error){wsFail(error);if(isNet(error))throw error;const {data}=await sb.from('ws_config').select('key,data').eq('key',k).maybeSingle();SY.c.delete(k);if(data)applyCfg(k,data.data);changed=true}
  else SY.c.set(k,s)}
 // 2. pengguna (role, divisi, akses tambahan, nonaktif)
 for(const k of Object.keys(U)){const u=U[k],s=uSig(u);if(!SY.u.has(k)||SY.u.get(k)===s)continue;
  const row={name:u.n,role:u.role||null,dept:u.dept||null,head:!!u.head,spaces:u.spaces||[],off:u.pending?false:!!u.off,color:u.c||null};
  const {data,error}=await sb.from('ws_profiles').update(row).eq('id',k).select('*').maybeSingle();
  if(error||!data){if(error&&isNet(error))throw error;wsFail(error||{code:'x',message:'Perubahan pengguna tidak tersimpan'});const r=await sb.from('ws_profiles').select('*').eq('id',k).maybeSingle();SY.u.delete(k);if(r.data)applyProfile(r.data);changed=true}
  else{SY.u.delete(k);applyProfile(data)}}
 // 3. task & meeting
 for(const kind of ['t','m']){const [tb,get]=COL[kind];const arr=get();
  const news=arr.filter(x=>!SY[kind].has(x.id)).sort((a,b)=>(a.parent?1:0)-(b.parent?1:0));
  for(const x of news){const sent=sg(x);const {data,error}=await sb.from(tb).insert({id:x.id,data:x}).select('id,data').maybeSingle();
   if(error||!data){if(error&&isNet(error))throw error;wsFail(error||{code:'x',message:'Tidak tersimpan'});const i=arr.findIndex(y=>y.id===x.id);if(i>-1)arr.splice(i,1);if(S.open===x.id)S.open=null;changed=true;continue}
   applyDoc(kind,data.id,data.data,sent);changed=true}
  for(const x of [...arr]){const prev=SY[kind].get(x.id);if(prev===undefined)continue;const cur=sg(x);if(cur===prev)continue;
   const o=JSON.parse(prev),patch={};new Set([...Object.keys(o),...Object.keys(x)]).forEach(k=>{if(sg(x[k])!==sg(o[k]))patch[k]=x[k]===undefined?null:x[k]});
   const {data,error}=await sb.rpc('ws_patch',{p_table:tb,p_id:x.id,p_patch:patch});
   if(error){if(isNet(error))throw error;wsFail(error);const r=await sb.from(tb).select('id,data').eq('id',x.id).maybeSingle();SY[kind].delete(x.id);applyDoc(kind,x.id,r.data?r.data.data:null);changed=true}
   else{applyDoc(kind,x.id,data,cur);if(sg(data)!==cur)changed=true}}
  const ids=new Set(arr.map(x=>x.id));
  for(const id of [...SY[kind].keys()]){if(ids.has(id))continue;
   const {data,error}=await sb.from(tb).delete().eq('id',id).select('id');
   if(error&&isNet(error))throw error;
   if(error||!data||!data.length){wsFail(error||{code:'x',message:'Anda tidak bisa menghapus data ini'});const r=await sb.from(tb).select('id,data').eq('id',id).maybeSingle();SY[kind].delete(id);if(r.data)applyDoc(kind,id,r.data.data);changed=true}
   else SY[kind].delete(id)}}
 // 4. notifikasi: kirim ke penerima, tandai sudah dibaca
 for(const it of [...inbox]){
  if(!it.id)it.id='n'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
  if(!SY.i.has(it.id)){const to=it.u;if(!to||!U[to]){inbox.splice(inbox.indexOf(it),1);continue}
   const {error}=await sb.from('ws_inbox').insert({id:it.id,user_id:to,data:stripI(it)});
   if(error&&isNet(error))throw error;
   if(to!==WS.uid){const j=inbox.indexOf(it);if(j>-1)inbox.splice(j,1)}else SY.i.set(it.id,!!it.read);continue}
  if(SY.i.get(it.id)!==!!it.read){const {error}=await sb.from('ws_inbox').update({data:Object.assign(stripI(it),{read:!!it.read})}).eq('id',it.id);if(error&&isNet(error))throw error;SY.i.set(it.id,!!it.read)}}
 return changed}

/* terima perubahan */
const busy=()=>{const a=document.activeElement;return !!a&&a!==document.body&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&!!a.closest('#app,#layer')&&a.id!=='q'&&a.id!=='cq'};
let pendRender=false;
function softRender(){if(busy()){pendRender=true;return}pendRender=false;render()}
document.addEventListener('focusout',()=>setTimeout(()=>{if(pendRender&&!busy())softRender()},60));
const RQ={t:new Set(),m:new Set(),u:new Set(),c:new Set(),i:new Set()};let rqT=null;
function queueRemote(k,id){RQ[k].add(id);clearTimeout(rqT);rqT=setTimeout(pullQueued,250)}
async function pullQueued(){let ch=false,meChanged=false;
 try{
 for(const kind of ['t','m']){const ids=[...RQ[kind]];RQ[kind].clear();if(!ids.length)continue;
  const {data,error}=await sb.from(COL[kind][0]).select('id,data').in('id',ids);if(error)throw error;
  const got=new Map(data.map(r=>[r.id,r.data]));
  ids.forEach(id=>{if(!SY[kind].has(id)&&!got.has(id))return;applyDoc(kind,id,got.has(id)?got.get(id):null)});ch=true}
 {const ids=[...RQ.u];RQ.u.clear();if(ids.length){const {data,error}=await sb.from('ws_profiles').select('*').in('id',ids);if(error)throw error;
  data.forEach(r=>{const was=U[r.id]&&uSig(U[r.id]);applyProfile(r);if(r.id===WS.uid&&was!==uSig(U[r.id]))meChanged=true});ch=true}}
 {const ks=[...RQ.c];RQ.c.clear();if(ks.length){const {data,error}=await sb.from('ws_config').select('key,data').in('key',ks);if(error)throw error;data.forEach(r=>applyCfg(r.key,r.data));ch=true;meChanged=true}}
 {const ids=[...RQ.i];RQ.i.clear();if(ids.length){const {data,error}=await sb.from('ws_inbox').select('id,data,created_at').in('id',ids);if(error)throw error;
  data.forEach(r=>{if(SY.i.has(r.id))return;SY.i.set(r.id,!!(r.data||{}).read);inbox.unshift(inboxOf(r))});ch=true}}
 }catch(e){console.warn('sinkron',e)}
 const m=me();if(!m||m.off||!m.role){location.reload();return}
 if(meChanged)await fullSync();else if(ch)softRender()}
async function fullSync(){try{
 const [pr,cf,ts,ms]=await Promise.all([fetchAll('ws_profiles','*'),fetchAll('ws_config','key,data','key'),fetchAll('ws_tasks','id,data'),fetchAll('ws_meets','id,data')]);
 pr.forEach(applyProfile);cf.forEach(r=>applyCfg(r.key,r.data));
 for(const [kind,rows] of [['t',ts],['m',ms]]){const got=new Set(rows.map(r=>r.id));rows.forEach(r=>{if(sg(r.data)!==SY[kind].get(r.id))applyDoc(kind,r.id,r.data)});
  [...SY[kind].keys()].forEach(id=>{if(!got.has(id))applyDoc(kind,id,null)})}
 const ib=await sb.from('ws_inbox').select('id,data,created_at').eq('user_id',WS.uid).order('created_at',{ascending:false}).limit(300);
 if(!ib.error)ib.data.forEach(r=>{if(!SY.i.has(r.id)){SY.i.set(r.id,!!(r.data||{}).read);inbox.unshift(inboxOf(r))}});
 const m=me();if(!m||m.off||!m.role){location.reload();return}
 softRender()}catch(e){console.warn('sinkron ulang',e)}}
function wsLive(){
 const ch=sb.channel('ws-'+WS.uid);
 [['ws_tasks','t','id'],['ws_meets','m','id'],['ws_profiles','u','id'],['ws_config','c','key']].forEach(([tb,k,key])=>ch.on('postgres_changes',{event:'*',schema:'public',table:tb},p=>{const r=(p.new&&p.new[key])?p.new:p.old;if(r&&r[key])queueRemote(k,r[key])}));
 ch.on('postgres_changes',{event:'INSERT',schema:'public',table:'ws_inbox',filter:'user_id=eq.'+WS.uid},p=>{if(p.new&&p.new.id)queueRemote('i',p.new.id)});
 ch.subscribe();
 setInterval(fullSync,90000);
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')fullSync()});
 window.addEventListener('online',()=>{flush();fullSync()});
 window.addEventListener('beforeunload',e=>{if(flushing||flushT&&dirtyAny()){e.preventDefault();e.returnValue=''}});
}
const dirtyAny=()=>tasks.some(t=>sg(t)!==SY.t.get(t.id))||meets.some(m=>sg(m)!==SY.m.get(m.id));

await wsLoad();

const S={dm:TODAY.slice(0,7),me:WS.uid,view:'board',nav:'home',q:'',fa:'',fp:'',ft:'',mine:false,tab:'m',open:null,side:false,qa:null,ireadf:'all',shut:{},cm:TODAY.slice(0,7),ftab:'all',modal:null,newStatus:'TO DO',timer:null};
S.qn=QN0;
try{const p=JSON.parse(localStorage.getItem(KEY+'-ui')||'{}');if(p.view)S.view=p.view;if(p.theme)document.documentElement.dataset.theme=p.theme}catch(_){}
const saveUI=()=>{try{localStorage.setItem(KEY+'-ui',JSON.stringify({me:S.me,view:S.view,theme:document.documentElement.dataset.theme||''}))}catch(_){}};

/* ---------- util ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const MON=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const MONL=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const HARI=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const fmt=d=>{if(!d)return'';const[y,m,x]=d.split('-');return +x+' '+MON[m-1]};
const D=s=>new Date(s+'T00:00:00');
const days=d=>Math.round((D(TODAY)-D(d))/864e5);
const me=()=>U[S.me];
const done=t=>t.status==='DONE'||t.status==='CANCEL';
const late=t=>t.due&&!done(t)&&days(t.due)>0;
const dueTxt=t=>{if(!t.due)return'';const n=days(t.due);if(late(t))return n+' hari lalu';if(!done(t)&&n===0)return'Hari ini';if(!done(t)&&n===-1)return'Besok';return fmt(t.due)};
const ini=n=>n.split(' ').map(w=>w[0]).slice(0,2).join('').replace('.','');
const av=(u,s)=>u&&U[u]?`<span class="av" title="${esc(U[u].n)}" style="background:${U[u].c};${s?`width:${s}px;height:${s}px;font-size:${s/2.6}px`:''}">${ini(U[u].n)}</span>`:'';
const hm=m=>{m=Math.round(m);return m<60?m+'m':Math.floor(m/60)+'j '+(m%60?m%60+'m':'')};
const nowT=()=>'Hari ini '+new Date().toTimeString().slice(0,5);
const ppl=t=>[t.assignee,...(t.ikut||[])].filter((k,i,a)=>k&&U[k]&&a.indexOf(k)===i);
const isMine=(t,k)=>t.assignee===(k||S.me)||(t.ikut||[]).includes(k||S.me);
const avs=(t,n)=>{const p=ppl(t),m=n||4;return p.length?`<span class="avs" title="${esc(p.map(k=>U[k].n).join(', '))}">${p.slice(0,m).map(k=>av(k)).join('')}${p.length>m?`<span class="av more">+${p.length-m}</span>`:''}</span>`:''};
const pill=s=>`<span class="pill" style="--c:var(${stc(s)})"><i></i>${s}</span>`;
const flag=p=>`<span class="flag" style="--c:var(${PR[p][1]})">${I.flag}${PR[p][0]}</span>`;
const tagH=t=>`<span class="tag" style="--c:var(${tagc(t)})">${esc(t)}</span>`;
const I={
 lock:'<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>',
 cmt:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2.5 3h11v7.5h-6L4 13.5v-3H2.5z"/></svg>',
 clip:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 7.5l-4.2 4.2a2.4 2.4 0 01-3.4-3.4l5-5a1.6 1.6 0 012.3 2.3L6.8 10.5"/></svg>',
 inbox:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 9l2-6h8l2 6v4H2zM2 9h3.5l1 1.5h3L11 9h3"/></svg>',
 home:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2.5 7.5L8 3l5.5 4.5V13a1 1 0 01-1 1h-9a1 1 0 01-1-1z"/><path d="M6.5 14v-4h3v4"/></svg>',
 me:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="5.5" r="2.7"/><path d="M2.8 14c.6-2.8 2.7-4.2 5.2-4.2s4.6 1.4 5.2 4.2"/></svg>',
 cal:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="12" height="11" rx="2"/><path d="M2 7h12M5.5 1.5v3M10.5 1.5v3"/></svg>',
 board:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2.5" width="3.5" height="11" rx="1"/><rect x="6.5" y="2.5" width="3.5" height="7" rx="1"/><rect x="11" y="2.5" width="3" height="9" rx="1"/></svg>',
 list:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5.5 4h8M5.5 8h8M5.5 12h8"/><circle cx="2.7" cy="4" r=".8" fill="currentColor"/><circle cx="2.7" cy="8" r=".8" fill="currentColor"/><circle cx="2.7" cy="12" r=".8" fill="currentColor"/></svg>',
 search:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>',
 flag:'<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.5h1.5v13H3z"/><path d="M4.5 2h8l-2 3.5 2 3.5h-8z"/></svg>',
 car:'<svg class="car" width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 5.5h9L8 11z"/></svg>',
 play:'<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l10 6-10 6z"/></svg>',
 stop:'<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="3" width="10" height="10" rx="1.5"/></svg>',
 check:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="12" height="12" rx="3"/><path d="M5 8.2l2 2 4-4.4"/></svg>',
 sub:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 2.5v6.5a2 2 0 002 2h7"/><path d="M10.5 8.5L13 11l-2.5 2.5"/></svg>',
 chart:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2.5 13.5h11"/><rect x="3.5" y="8" width="2.2" height="5" rx=".5"/><rect x="7" y="4.5" width="2.2" height="8.5" rx=".5"/><rect x="10.5" y="6.5" width="2.2" height="6.5" rx=".5"/></svg>',
 folder:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 4.5a1 1 0 011-1h3.2l1.5 1.6H13a1 1 0 011 1v6.4a1 1 0 01-1 1H3a1 1 0 01-1-1z"/></svg>',
 note:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10.5 2.5l3 3L6 13H3v-3z"/><path d="M9 4l3 3"/></svg>',
 users:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="5.5" r="2.4"/><path d="M1.8 13.5c.5-2.4 2.2-3.6 4.2-3.6s3.7 1.2 4.2 3.6"/><path d="M10.5 3.4a2.3 2.3 0 010 4.3M12 9.9c1.2.4 2 1.6 2.3 3.6"/></svg>',
 plus:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v10M3 8h10"/></svg>'
};

/* ---------- izin ---------- */
function visFolder(sp,l,uu){const u=uu||me();const sd0=spDef(sp);if(sd0&&sd0.internal)return u.role==='Admin'||u.dept===sd0.dept||(u.spaces||[]).includes(sp)||(u.spaces||[]).includes(sp+':'+l.id);if((u.spaces||[]).includes(sp+':'+l.id))return true;
 if(!l.depts||!l.depts.length)return u.role!=='Guest';if(u.role==='Admin'||u.role==='Member QMR')return true;
 if(u.role==='Guest')return !!l.shared&&l.depts.includes(u.dept);return l.depts.includes(u.dept)}
function visSpace(sp,uu){const u=uu||me();if((u.spaces||[]).some(x=>x.startsWith(sp.id+':')))return true;
 if((u.spaces||[]).includes(sp.id))return true;
 if(sp.internal)return u.role==='Admin'||u.dept===sp.dept;
 if(u.role==='Admin'||u.role==='Member QMR')return true;
 if(sp.meet)return LISTS[sp.id]&&LISTS[sp.id].length?LISTS[sp.id].some(l=>visFolder(sp.id,l,u)):u.role!=='Guest';
 if(u.role==='Guest')return sp.shared&&sp.id===u.dept;
 return sp.id===u.dept}
function visTask(t){const u=me();if(isMine(t)||(t.share||[]).includes(S.me))return true;{const pt=t.parent&&tasks.find(x=>x.id===t.parent);if(pt&&(pt.share||[]).includes(S.me))return true}
 if(t.space==='monthly'){if(u.role==='Admin'||u.role==='Member QMR')return true;return t.dept===u.dept}
 if(!visSpace(spDef(t.space)))return false;
 if(t.list){const l=fdef(t.space,t.list);if(l&&!visFolder(t.space,l))return false}
 return true}
function canEdit(t){const u=me();
 if(u.role==='Admin')return true;
 if(t.space==='monthly')return u.role==='Member QMR';
 const sd=spDef(t.space);
 if(u.role==='Member QMR')return !(sd&&sd.internal);
 if(u.role==='Member'&&t.list&&t.space==='wall'){const l=fdef('wall',t.list);if(l&&l.depts&&l.depts.includes(u.dept))return true}
 if(u.role==='Member')return t.space===u.dept||(u.spaces||[]).includes(t.space)||!!(sd&&sd.internal&&sd.dept===u.dept)||!!(sd&&sd.meet&&(isMine(t)||t.creator===S.me));
 return isMine(t)||t.creator===S.me}
function canStatus(t){if(canEdit(t))return true;if(t.space==='monthly')return t.assignee===S.me;return true}
function canAdd(sp){const u=me();
 if(spDef(sp)&&spDef(sp).internal)return u.role==='Admin'||u.dept===spDef(sp).dept;
 if(spDef(sp)&&spDef(sp).meet)return u.role!=='Guest';
 if(sp==='monthly')return u.role==='Admin'||u.role==='Member QMR';
 if(u.role==='Admin'||u.role==='Member QMR')return true;
 return sp===u.dept||(u.role==='Member'&&(u.spaces||[]).includes(sp))}
const addSpaces=()=>[...SP.filter(s=>visSpace(s)&&canAdd(s.id)).map(s=>s.id),...(canAdd('monthly')?['monthly']:[])];

const tord=t=>{const n=parseInt(t.tahap,10);return isNaN(n)?9:n};
const bySeq=(a,b)=>tord(a)-tord(b)||(a.start||'9').localeCompare(b.start||'9');
const tn=t=>'"'+(t.title.length>42?t.title.slice(0,42)+'…':t.title)+'"';
function ico(t,sz){const sub=!!t.parent,c=`var(${stc(t.status)})`,dn=t.status==='DONE',z=sz||15;
 return sub?`<span class="tic tsub" title="Subtask · ${t.status}" style="--c:${c}"><svg width="${z}" height="${z}" viewBox="0 0 16 16" fill="none"><path d="M3 2.5v5.2a2 2 0 002 2h2.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".55"/><circle cx="11.3" cy="9.7" r="3.6" stroke="var(--c)" stroke-width="1.8" fill="${dn?'var(--c)':'none'}"/></svg></span>`
  :`<span class="tic ttask" title="Task · ${t.status}" style="--c:${c}"><svg width="${z}" height="${z}" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="3.2" stroke="var(--c)" stroke-width="1.8" fill="${dn?'var(--c)':'color-mix(in srgb,var(--c) 14%,transparent)'}"/>${dn?'<path d="M5.2 8.2l1.9 1.9 3.8-4.1" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>':'<path d="M5.5 6.5h5M5.5 9.5h3.2" stroke="var(--c)" stroke-width="1.5" stroke-linecap="round"/>'}</svg></span>`}
const kidsOf=t=>tasks.filter(x=>x.parent===t.id).sort(bySeq);
const parentOf=t=>t.parent?tasks.find(x=>x.id===t.parent):null;
const CM=TODAY.slice(0,7);
const VB={menunggu:['Menunggu verifikasi','--p-high'],ok:['Terverifikasi audit','--s-done'],tolak:['Dikembalikan audit','--danger']};
const verifH=t=>t.verif&&t.verif.st?`<span class="pill" style="--c:var(${VB[t.verif.st][1]})"><i></i>${VB[t.verif.st][0]}</span>`:'<span class="cnt">–</span>';
const isAudit=()=>me().role==='Member QMR'||me().role==='Admin';
const canNote=t=>canEdit(t)||isMine(t);
function addPhotos(t,files){[...files].slice(0,5).forEach(f=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const sc=Math.min(1,640/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=Math.round(im.width*sc);c.height=Math.round(im.height*sc);c.getContext('2d').drawImage(im,0,0,c.width,c.height);t.att.push({ty:'foto',n:f.name,src:c.toDataURL('image/jpeg',.72)});t.feed.push({k:'h',w:S.me,t:nowT(),f:'Bukti',a:'',b:'menambah bukti foto '+f.name});render()};im.onerror=()=>toast(f.name+' bukan gambar yang bisa dibaca');im.src=r.result};r.readAsDataURL(f)})}
function toast(m){const o=document.createElement('div');o.className='toast';o.setAttribute('role','status');o.textContent=m;document.body.appendChild(o);setTimeout(()=>o.remove(),2400)}
function hist(t,f,a,b){t.feed.push({k:'h',w:S.me,t:nowT(),f,a,b})}
function notify(u,t,tab,x){if(!u||u===S.me)return;inbox.unshift({u,tab,task:t.id,who:S.me,x,t:'Baru saja',n:1,read:false})}
function setStatus(t,s){if(t.status===s)return;if(!canStatus(t)){toast('Anda tidak punya izin mengubah status task ini');render();return}
 if(t.space==='irnd'&&!t.parent){
  if(s==='HOLD'||s==='CANCEL'){hist(t,'Status khusus',t.khusus,s);t.khusus=s;toast(tn(t)+' di-set '+s);render();return}
  if(!t.khusus){toast('Status project dihitung otomatis dari task-nya');render();return}
  hist(t,'Status khusus',t.khusus,'');t.khusus='';toast(tn(t)+' dilanjutkan, status kembali otomatis');render();return}
 if(t.space==='monthly'){
  if(t.verif&&t.verif.st==='ok'&&!isAudit()){toast('Sudah diverifikasi audit. Hanya tim audit yang bisa mengubah statusnya.');render();return}
  if(s==='DONE'&&(!t.desc.trim()||!t.att.length)){toast('Isi keterangan dan lampirkan bukti foto dulu sebelum DONE');render();return}
  t.mst[CM]=s;
  if(s==='DONE'){t.verif={st:'menunggu'};Object.keys(U).filter(k=>U[k].role==='Member QMR').forEach(k=>notify(k,t,'u','Menunggu verifikasi: keterangan dan bukti sudah dilampirkan'))}
  else if(t.status==='DONE')t.verif=null}
 hist(t,'Status',t.status,s);notify(t.assignee,t,'u','Status: '+t.status+' ke '+s);if(s==='DONE'&&!t.fin)t.fin=TODAY;if(s!=='DONE')t.fin='';t.status=s;const op=s==='DONE'?kidsOf(t).filter(k=>!done(k)).length:0;toast(op?tn(t)+' DONE, tapi '+op+' subtask masih terbuka':tn(t)+' dipindah ke '+s);render()}

/* ---------- berbagi (share) ---------- */
const seesTask=(k,t)=>{const p=S.me;S.me=k;let r=false;try{r=visTask(t)}finally{S.me=p}return r};
const canShareT=t=>me().role!=='Guest'&&(canEdit(t)||t.assignee===S.me);
const canShareF=(sp,l)=>me().role!=='Guest'&&!!l&&visFolder(sp,l)&&(me().role==='Admin'||canAdd(sp));
const fMembers=(sp,l)=>Object.keys(U).filter(k=>!U[k].off&&visFolder(sp,l,U[k])&&visSpace(spDef(sp),U[k]));
function fsRes(q){const [sp,lid]=S.fshare,l=fdef(sp,lid),mem=fMembers(sp,l);q=q.trim().toLowerCase();
 const r=Object.keys(U).filter(k=>!U[k].off&&!mem.includes(k)&&(!q||(U[k].n+' '+(U[k].email||'')).toLowerCase().includes(q))).slice(0,8);
 return r.map(k=>`<button type="button" class="sub krow" data-fsadd="${k}">${av(k,24)}<span class="kt">${esc(U[k].n)} <span class="cnt">· ${esc(DEPTN[U[k].dept]||U[k].role)}</span><small class="cnt" style="display:block">${esc(U[k].email||'')}</small></span><span class="btn ghost sm">Undang</span></button>`).join('')||`<div class="empty">Tidak ada akun dengan nama atau email "${esc(q)}". Akun baru dibuat Admin di Pengguna & akses.</div>`}
function fShareModal(){const [sp,lid]=S.fshare,l=fdef(sp,lid);if(!l)return'';const key=sp+':'+lid,mem=fMembers(sp,l),out=Object.keys(U).filter(k=>!U[k].off&&!mem.includes(k));
 const ex=k=>(U[k].spaces||[]).includes(key);
 return `<div class="mwrap" data-mclose><div class="modal" role="dialog" aria-modal="true" aria-label="Bagikan folder" style="width:min(560px,100%)">
 <div class="mh"><h2>Bagikan folder</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Selesai</button></div>
 <div class="mb"><div class="hint">${I.folder} ${esc(spDef(sp).n)} / <b>${esc(l.n)}</b>. Orang yang ditambahkan bisa melihat semua task di folder ini dan bisa di-assign ke task-nya.</div>
  <div class="srch" style="width:100%">${I.search}<input type="text" id="fs-q" placeholder="Cari nama atau email untuk diundang…" aria-label="Cari nama atau email" autocomplete="off"></div>
  <div class="subs" id="fs-res" hidden></div>
  <div><span class="lbl">Punya akses (${mem.length})</span><div class="subs" style="margin-top:6px">${mem.sort((a,b)=>ex(b)-ex(a)||U[a].n.localeCompare(U[b].n)).map(k=>`<div class="sub">${av(k,24)}<span class="kt">${esc(U[k].n)} <span class="cnt">· ${esc(DEPTN[U[k].dept]||U[k].role)}</span><small class="cnt" style="display:block">${esc(U[k].email||'')}</small></span>${ex(k)?`<span class="chip carry">Diundang</span><button type="button" class="rm" data-fsrm="${k}" aria-label="Cabut akses ${esc(U[k].n)}" title="Cabut akses">×</button>`:'<span class="cnt">otomatis</span>'}</div>`).join('')}</div></div>
  <div class="hint">"Otomatis" berasal dari role dan divisi. Yang diundang bisa dicabut kapan saja.</div></div></div></div>`}

/* ---------- sidebar ---------- */
const canFold=s=>{const u=me();return s.internal?(u.role==='Admin'||(u.head&&u.dept===s.dept)):(u.role==='Admin'||u.role==='Member QMR')};
function folderNav(s){const ls=(LISTS[s.id]||[]).filter(l=>visFolder(s.id,l));
 return (s.id==='wall'&&me().role!=='Guest'?`<button data-nav="jadwalw" class="sub-nav ${S.nav==='jadwalw'?'on':''}">${I.cal}<span class="t">Jadwal weekly</span>${jBadge(true)}</button>`:'')+ls.map(l=>`<button data-nav="f:${s.id}:${l.id}" class="sub-nav ${S.nav==='f:'+s.id+':'+l.id?'on':''}" title="${esc(l.n)}${l.depts&&l.depts.length?' · '+l.depts.map(d=>DEPTN[d]).join(', '):''}">${I.folder}<span class="t">${esc(l.n)}</span>${l.depts&&l.depts.length&&!l.shared?`<span class="flock">${I.lock}</span>`:''}<span class="cnt">${tasks.filter(t=>t.space===s.id&&t.list===l.id&&visTask(t)&&!done(t)).length}</span></button>`).join('')
  +(canFold(s)?`<button class="sub-nav addf" data-addf="${s.id}">${I.plus}<span class="t">Tambah folder</span></button>`:'')}
function sidebar(){
 const u=me(),unread=inbox.filter(i=>i.u===S.me&&!i.read).length;
 const mine=tasks.filter(t=>isMine(t)&&visTask(t)&&!done(t)).length;
 const nb=(k,ic,txt,extra)=>`<button data-nav="${k}" class="${S.nav===k?'on':''}">${ic}<span class="t">${txt}</span>${extra||''}</button>`;
 const dk=document.documentElement.dataset.theme;
 return `<aside class="side ${S.side?'open':''}" id="side" aria-label="Navigasi">
 <div class="brand"><span class="lg"><img src="${LOGO}" alt="Intinya Group"></span><div><b>Intinya Group</b><small>Workspace</small></div></div>
 <button class="find" data-cmd>${I.search}<span>Cari task…</span><kbd>Ctrl K</kbd></button>
 <nav class="nav">
  ${nb('home',I.home,'Beranda')}
  ${nb('dash',I.chart,'Dashboard')}
  ${nb('inbox',I.inbox,'Inbox',unread?`<span class="badge">${unread}</span>`:'')}
  ${nb('mine',I.me,'Tugas saya',`<span class="cnt">${mine}</span>`)}
  ${u.role==='Admin'?nb('users',I.users,'Pengguna & akses',`<span class="cnt">${Object.values(U).filter(x=>!x.off).length}</span>`):''}
  ${SP.some(s=>s.internal&&visSpace(s))||u.role==='Admin'?'<h6>Internal tim</h6>':''}
  ${SP.filter(s=>s.internal&&visSpace(s)).map(s=>nb('w:'+s.id,`<span class="sq" style="background:${s.c}">${I.lock}</span>`,esc(s.n),`<span class="cnt">${tasks.filter(t=>t.space===s.id&&visTask(t)&&!done(t)).length}</span>`)+folderNav(s)).join('')}
  ${u.role==='Admin'?`<button class="addf" data-addsp>${I.plus}<span class="t">Tambah internal tim</span></button>`:''}
  <h6>Bulanan</h6>
  ${Object.keys(BR).map(b=>{const on=isMo()&&moBr()===b,ds=moDepts();return `<button data-nav="m:${b}" class="${S.nav==='m:'+b?'on':''}"><span class="sq" style="background:${BR[b].c}">${BR[b].n[0]}</span><span class="t">Monthly · ${BR[b].n}</span>${ds.length>1?`<span class="mcar ${on?'open':''}">${I.car}</span>`:''}<span class="cnt">${tasks.filter(t=>t.space==='monthly'&&t.brand===b&&visTask(t)&&!done(t)).length}</span></button>`
   +(on&&ds.length>1?ds.map(d=>{const T0=tasks.filter(t=>t.space==='monthly'&&t.brand===b&&t.dept===d),w=T0.filter(t=>t.status==='DONE'&&t.verif&&t.verif.st==='menunggu').length;
     return `<button data-nav="m:${b}:${d}" class="sub-nav ${S.nav==='m:'+b+':'+d?'on':''}">${I.folder}<span class="t">${esc(DEPTN[d])}</span>${w&&canAdd('monthly')?`<span class="vdot" title="${w} menunggu verifikasi">${w}</span>`:''}<span class="cnt">${T0.filter(t=>!done(t)).length}</span></button>`}).join(''):'')}).join('')}
  ${u.role==='Admin'?`<button class="addf" data-addbr>${I.plus}<span class="t">Tambah brand</span></button>`:''}
  ${u.role!=='Guest'?nb('jadwal',I.cal,canSched()?'Jadwal meeting (QMR)':'Jadwal Monthly & Koordinasi',jBadge(false)):''}
  ${canAdd('monthly')?nb('qn',I.note,'Catat notulen (QMR)',S.qn&&S.qn.created.length?`<span class="cnt">${S.qn.created.length}</span>`:''):''}
  ${SP.some(s=>!s.internal&&visSpace(s))?'<h6>Meeting</h6>':''}
  ${SP.filter(s=>s.meet&&visSpace(s)).map(s=>nb('w:'+s.id,`<span class="sq" style="background:${s.c}">${s.k[0]}</span>`,esc(s.n),`<span class="cnt">${tasks.filter(t=>t.space===s.id&&visTask(t)&&!done(t)).length}</span>`)+folderNav(s)).join('')}
  
  ${SP.filter(s=>!s.meet&&!s.internal&&visSpace(s)).map(s=>nb('w:'+s.id,`<span class="sq" style="background:${s.c}">${s.k[0]}</span>`,esc(s.n),(u.role==='Admin'&&s.priv?I.lock:'')+`<span class="cnt">${tasks.filter(t=>t.space===s.id&&visTask(t)&&!done(t)).length}</span>`)).join('')}
 </nav>
 <div class="foot"><div class="who">${av(S.me,30)}<div style="min-width:0"><b>${esc(u.n)}</b><small>${esc(u.email)}</small></div></div>
  <div class="row"><button class="sbtn" data-themebtn>${dk==='dark'?'Mode terang':dk==='light'?'Mode gelap':'Ganti tema'}</button><button class="sbtn" data-logout>Keluar</button></div></div>
 </aside>`}

/* ---------- filter ---------- */
function fOK(t){
 if(S.q&&!(t.key+' '+t.title+' '+t.desc+' '+t.inputan+' '+t.tags.join(' ')).toLowerCase().includes(S.q.toLowerCase()))return false;
 if(S.fa&&!isMine(t,S.fa))return false;
 if(S.fp&&t.pri!==S.fp)return false;
 if(S.ft&&!t.tags.includes(S.ft))return false;
 if(S.mine&&!isMine(t))return false;
 if(S.finc&&t.assignee&&t.dept)return false;
 if(S.fv&&!(t.status==='DONE'&&t.verif&&t.verif.st==='menunggu'))return false;
 return true}
function scope(){
 if(isMo())return tasks.filter(t=>t.space==='monthly'&&t.brand===moBr()&&(!moDp()||t.dept===moDp())&&visTask(t));
 if(S.nav==='mine')return tasks.filter(t=>isMine(t)&&visTask(t));
 const sp=navSpace(),l=navList();return tasks.filter(t=>t.space===sp&&visTask(t)&&(!l||t.list===l))}

/* ---------- board ---------- */
function card(t){
 const sd=t.subs.filter(s=>s.d).length,nc=t.feed.filter(f=>f.k==='c').length;
 return `<div class="card ${late(t)?'od':''}" draggable="true" data-open="${t.id}" data-drag="${t.id}" tabindex="0" role="button" aria-label="${esc(t.title)}">
 <div class="hd">${S.nav==='mine'||t.dept?`<span class="chip">${t.space==='monthly'?(isMo()?'':BR[t.brand].n+' · ')+(DEPTN[t.dept]||'Belum ada divisi'):t.dept?(DEPTN[t.dept]||'Belum ada divisi'):spName(t.space)}</span>`:''}${t.tahap?`<span class="chip">${esc(t.tahap)}</span>`:''}<span class="sp"></span>${t.pri!=='normal'?flag(t.pri):''}</div>
 ${t.parent&&parentOf(t)?`<div class="pline">${I.sub}${esc(parentOf(t).title)}</div>`:''}
 <div class="ti">${ico(t)}<span>${esc(t.title)}</span></div>
 ${t.tags.length||t.carry?`<div class="chips">${t.carry?`<span class="chip carry">Dibawa dari ${t.carry}</span>`:''}${t.tags.map(tagH).join('')}</div>`:''}
 ${t.subs.length?`<div class="prog">${I.check}<span class="num">${sd}/${t.subs.length}</span><span class="bar"><i style="width:${sd/t.subs.length*100}%"></i></span></div>`:''}
 ${t.inputan&&hasIn(t.space)?`<div class="from">Dari ${esc(t.inputan)}</div>`:''}
 ${t.space==='monthly'&&((t.verif&&t.verif.st)||!t.assignee)?`<div class="chips">${t.verif&&t.verif.st?verifH(t):''}${!t.assignee?'<span class="chip warnc">Belum ada PIC</span>':''}</div>`:''}
 <div class="meta">${avs(t,3)}<span class="due ${late(t)?'late':''}">${dueTxt(t)}</span><span class="sp"></span>
  ${S.timer&&S.timer.id===t.id?`<span class="ic late">${I.play}rekam</span>`:''}
  ${kidsOf(t).length?`<span class="ic" title="Subtask selesai">${I.sub}${kidsOf(t).filter(done).length}/${kidsOf(t).length}</span>`:''}
  ${nc?`<span class="ic">${I.cmt}${nc}</span>`:''}${t.att.length?`<span class="ic">${I.clip}${t.att.length}</span>`:''}</div></div>`}
function board(ts,sp){
 const add=sp&&canAdd(sp);
 return `<div class="board">${(sp?stOf(sp):ST_ALL.filter(([s])=>ST.some(x=>x[0]===s)||ts.some(t=>t.status===s))).map(([s])=>{const c=ts.filter(t=>t.status===s);
 return `<section class="col" data-col="${s}" aria-label="${s}"><div class="colh">${pill(s)}<span class="cnt">${c.length}</span>${add?`<button class="add" data-qa="${s}" aria-label="Tambah task di ${s}">+</button>`:''}</div>
 ${c.map(card).join('')}${S.qa===s?`<form class="qa" id="qaf"><input type="text" id="qat" placeholder="Judul task, lalu Enter" aria-label="Judul task baru"><div class="chips"><button class="btn nv" style="padding:4px 10px">Tambah</button><button type="button" class="btn ghost" style="padding:4px 10px" data-qx>Batal</button></div></form>`:''}
 ${!c.length&&S.qa!==s?'<div class="empty">Kosong</div>':''}</section>`}).join('')}</div>`}

/* ---------- list ---------- */
const isMeet=()=>!!(spDef(navSpace())||{}).meet;
const isIr=()=>navSpace()==='irnd';
const grp=()=>{const g=S.lg||(isMo()?'bulan':isMeet()||isIr()?'parent':'status');return g==='bulan'&&!isMo()?'status':g};
function tree(ts){
 const mo=isMo(),mine=S.nav==='mine',ir=isIr();
 const ids=new Set(ts.map(t=>t.id));
 const tops=ts.filter(t=>!t.parent||!ids.has(t.parent)).sort((a,b)=>{const ka=a.start||a.due||'',kb=b.start||b.due||'';return ka<kb?1:ka>kb?-1:0});
 if(!tops.length)return '<div class="empty">Tidak ada task yang cocok dengan filter.</div>';
 const row=(t,lvl)=>{const k=ts.filter(x=>x.parent===t.id).sort(bySeq),sh=S.shut[t.id],nc=t.feed.filter(f=>f.k==='c').length;
  return `<tr data-open="${t.id}" class="${lvl?'kid':''} ${k.length?'par':''}"><td class="ti"><div class="tcell" style="padding-left:${lvl*28}px">${k.length?`<button class="tcar ${sh?'shut':''}" data-shut="${t.id}" aria-label="${sh?'Buka':'Lipat'} subtask" aria-expanded="${!sh}">${I.car}</button>`:'<span class="tcar"></span>'}${ico(t)}<span class="tt">${esc(t.title)}</span>${k.length?`<span class="ic cnt" title="Subtask selesai">${I.sub}${k.filter(done).length}/${k.length}</span>`:''}${nc?`<span class="ic cnt">${I.cmt}${nc}</span>`:''}${t.att.length?`<span class="ic cnt">${I.clip}${t.att.length}</span>`:''}</div></td>
  ${!ir&&!mine?`<td class="inp">${t.inputan?esc(t.inputan):'<span class="cnt">–</span>'}</td>`:''}${mine?`<td>${spLabel(t)}</td>`:''}<td>${t.assignee?`<span class="ic">${av(t.assignee)} ${esc((U[t.assignee]||{n:''}).n.split(' ')[0])}</span>`:t.parent&&!ir?'<span class="chip warnc">Belum ada PIC</span>':'<span class="cnt">–</span>'}</td><td>${t.pri!=='normal'?flag(t.pri):'<span class="cnt">–</span>'}</td>${ir?`<td class="cnt" style="font-size:12.5px">${esc(t.parent?t.tahap:t.area)}</td><td>${slaH(t)}</td>`:`<td><div class="chips">${t.tags.map(tagH).join('')}</div></td>`}
  <td class="num ${late(t)?'late':''}">${dueTxt(t)||'<span class="cnt">–</span>'}</td>
  <td><select data-rs="${t.id}" aria-label="Status ${esc(t.title)}" ${canStatus(t)?'':'disabled'}>${stOf(t.space).map(([x])=>`<option ${x===t.status?'selected':''}>${x}</option>`).join('')}</select></td></tr>`+(k.length&&!sh?k.map(c=>row(c,lvl+1)).join(''):'')};
 return `<div class="tw"><table><thead><tr><th><span class="tleg">${ico({status:'TO DO'},13)}${ir?'Project':'Task'}<span style="width:10px"></span>${ico({status:'TO DO',parent:1},13)}${ir?'Task':'Subtask'}</span></th>${!ir&&!mine?'<th>Inputan</th>':''}${mine?'<th>Space</th>':''}<th>${ir?'Owner / PIC':'Assignee'}</th><th>Priority</th>${ir?'<th>Tahap / area</th><th>SLA</th>':'<th>Tag</th>'}<th>Due</th><th>Status</th></tr></thead><tbody>${tops.map(t=>row(t,0)).join('')}</tbody></table></div>`}
const phC={};
function phSrc(a){if(a.src)return a.src;if(phC[a.n])return phC[a.n];let h=0;for(const ch of a.n)h=(h*31+ch.charCodeAt(0))>>>0;
 const c=document.createElement('canvas');c.width=640;c.height=420;const x=c.getContext('2d');const hue=h%360;
 x.fillStyle=`hsl(${hue},18%,92%)`;x.fillRect(0,0,640,420);x.fillStyle=`hsl(${hue},35%,38%)`;x.fillRect(0,0,640,46);
 x.fillStyle='#fff';x.font='600 18px sans-serif';x.fillText(a.n,18,30);
 for(let i=0;i<5;i++){x.fillStyle=`hsl(${hue},20%,${80-i*3}%)`;x.fillRect(24,70+i*62,592,46);x.fillStyle=`hsl(${(hue+40)%360},45%,52%)`;x.fillRect(36,84+i*62,60+((h>>>i)%380),18)}
 x.fillStyle='rgba(0,0,0,.45)';x.font='13px sans-serif';x.fillText('Contoh bukti foto',18,404);
 return phC[a.n]=c.toDataURL('image/jpeg',.8)}
const fotos=t=>t.att.filter(a=>a.ty==='foto');
function bukti(t){const fs=fotos(t),ot=t.att.filter(a=>a.ty!=='foto');return t.att.length?`<span class="thumbs">${fs.slice(0,3).map((a,i)=>`<button class="th" data-gal="${t.id}:${i}" title="Lihat ${esc(a.n)}" aria-label="Lihat foto ${esc(a.n)}"><img src="${phSrc(a)}" alt=""></button>`).join('')}${ot.slice(0,Math.max(0,3-fs.length)).map(a=>`<i title="${esc(a.n)}">${gi[a.ty][1]}</i>`).join('')}${t.att.length>3?`<small class="cnt">+${t.att.length-3}</small>`:''}</span>`:'<span class="cnt">belum ada</span>'}
function monthlyList(ts){
 const cols=[3,2,1,0].map(i=>{const d=new Date(+CM.slice(0,4),+CM.slice(5)-1-i,1);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')});
 const g={};ts.forEach(t=>{const k=(t.start||t.due||'').slice(0,7)||'—';(g[k]=g[k]||[]).push(t)});
 const keys=Object.keys(g).sort().reverse();
 if(!keys.length)return '<div class="empty">Tidak ada task yang cocok dengan filter.</div>';
 const mcell=(t,ym)=>{const sm=(t.start||'').slice(0,7);if(!sm||ym<sm)return '<span class="cnt">–</span>';const v=ym===CM?t.status:t.mst[ym];return v?pill(v):'<span class="cnt">–</span>'};
 return keys.map(k=>{const [y,m]=k.split('-');const lbl=m?MONL[m-1]+' '+y:'Tanpa tanggal',sh=S.shut['b'+k];
  return `<div class="grp"><button class="grph ${sh?'shut':''}" data-shut="b${k}" aria-expanded="${!sh}">${I.car}<span class="mchip">${lbl}</span><span class="cnt">${g[k].length} task</span></button>
  ${sh?'':`<div class="tw"><table class="mtab"><thead><tr><th>Task</th><th>Inputan</th><th>Divisi</th><th>Assignee</th><th>Start</th><th>Due</th>${cols.map(c=>`<th class="${c===CM?'curm':''}">${MON[+c.slice(5)-1]} ${c.slice(2,4)}</th>`).join('')}<th>Verifikasi</th><th>Keterangan</th><th>Bukti</th></tr></thead><tbody>
  ${g[k].map(t=>`<tr data-open="${t.id}"><td class="ti"><span class="tcell">${ico(t)}<span>${esc(t.title)}</span></span></td><td class="inp">${esc(t.inputan)||'<span class="cnt">–</span>'}</td><td>${(DEPTN[t.dept]||'Belum ada divisi')||''}</td><td>${t.assignee?`<span class="ic">${av(t.assignee)} ${esc(U[t.assignee].n.split(' ')[0])}</span>`:'<span class="chip warnc">Belum ada PIC</span>'}</td><td class="num">${fmt(t.start)}</td><td class="num ${late(t)?'late':''}">${dueTxt(t)||'–'}</td>${cols.map(c=>`<td class="${c===CM?'curm':''}">${mcell(t,c)}</td>`).join('')}<td>${verifH(t)}</td><td class="ket" title="${esc(t.desc)}">${esc(t.desc)||'<span class="cnt">–</span>'}</td><td>${bukti(t)}</td></tr>`).join('')}
  </tbody></table></div>`}</div>`}).join('')}
function moDash(all){
 const [y,m]=S.dm.split('-').map(Number),a=S.dm+'-01',b=S.dm+'-'+String(new Date(y,m,0).getDate()).padStart(2,'0'),br=BR[moBr()];
 const P=all.filter(t=>(t.start||t.due||'')<=b&&!(t.status==='DONE'&&t.fin&&t.fin<a));
 const isV=t=>t.status==='DONE'&&t.verif&&t.verif.st==='ok',isW=t=>t.status==='DONE'&&t.verif&&t.verif.st==='menunggu',isR=t=>t.verif&&t.verif.st==='tolak'&&t.status!=='DONE',isI=t=>!t.assignee||!t.dept;
 const dn=P.filter(t=>t.status==='DONE'),vf=P.filter(isV),wt=P.filter(isW),rj=P.filter(isR),od=P.filter(late),inc=P.filter(isI);
 const MSEL=`<select id="dmo" aria-label="Bulan">${MONL.map((n,i)=>`<option value="${i+1}" ${i+1===m?'selected':''}>${n}</option>`).join('')}</select><select id="dyr" aria-label="Tahun">${[+TODAY.slice(0,4)-1,+TODAY.slice(0,4),+TODAY.slice(0,4)+1].map(v=>`<option ${v===y?'selected':''}>${v}</option>`).join('')}</select>`;
 const tile=(l,v,c,cls,act)=>`<${act?`button data-mdf="${act}"`:'div'} class="tile ${cls||''}"><span class="lbl">${l}</span><b>${v}</b>${c?`<small>${c}</small>`:''}</${act?'button':'div'}>`;
 const ds=[...new Set(P.map(t=>t.dept||''))].sort((p,q)=>(DEPTN[p]||'zzz').localeCompare(DEPTN[q]||'zzz'));
 const bar=arr=>{const n=arr.length||1,seg=(k,c)=>k?`<i style="width:${k/n*100}%;background:var(${c})"></i>`:'';
  const v=arr.filter(isV).length,w=arr.filter(isW).length,o=arr.filter(t=>!isV(t)&&!isW(t)&&t.status!=='DONE').length;
  return `<div class="stack" style="height:10px" title="Terverifikasi ${v} · Menunggu ${w} · Belum DONE ${o}">${seg(v,'--s-done')}${seg(w,'--p-high')}${seg(arr.length-v-w-o,'--s-wip')}${seg(o,'--line2')}</div>`};
 const row=(t,extra)=>`<button class="trow" data-open="${t.id}">${ico(t)}<span class="x">${esc(t.title)}</span><span class="chip">${esc(DEPTN[t.dept]||'—')}</span>${t.assignee?av(t.assignee):'<span class="chip warnc">Belum ada PIC</span>'}${extra||''}</button>`;
 const panel=(title,arr,empty,ex)=>`<section class="panel"><h3>${title}<span class="cnt">${arr.length}</span></h3>${arr.slice(0,8).map(t=>row(t,ex&&ex(t))).join('')||`<div class="empty">${empty}</div>`}${arr.length>8?`<div class="hint">+${arr.length-8} lainnya di tab List</div>`:''}</section>`;
 return `<div class="dash">
 <div class="dhead"><h2>Dashboard Monthly ${esc(br.n)}${moDp()?' · '+esc(DEPTN[moDp()]):''}</h2><span class="sp"></span><span class="cnt">Periode</span>${MSEL}</div>
 <section><p class="sech">Ringkasan ${MONL[m-1]} ${y}</p><div class="tiles">
  ${tile('Task periode ini',P.length,'start sampai bulan ini, belum selesai sebelumnya')}${tile('DONE',dn.length,'ditandai selesai oleh PIC')}${tile('Terverifikasi audit',`${vf.length}<span class="tof">/${P.length}</span>`,'dihitung final untuk nilai departemen')}${tile('Menunggu verifikasi',wt.length,'antrian tim audit',wt.length?'warnt':'',canAdd('monthly')&&wt.length?'fv':'')}
  ${tile('Dikembalikan audit',rj.length,'DONE dicabut, kembali dikerjakan',rj.length?'alert':'')}${tile('Lewat due',od.length,'belum DONE melewati due',od.length?'alert':'')}${tile('Belum lengkap',inc.length,'belum ada PIC atau divisi',inc.length?'warnt':'',canAdd('monthly')&&inc.length?'finc':'')}${tile('Belum DONE',P.length-dn.length,'masih dikerjakan')}</div></section>
 <section><p class="sech">${moDp()?'Rekap divisi '+esc(DEPTN[moDp()]):'Rekap per divisi · urut nama · klik baris untuk buka folder divisi'}</p><div class="tw dtab"><table style="min-width:860px"><thead><tr><th>Divisi</th><th>Task</th><th>DONE</th><th>Terverifikasi</th><th style="width:22%">Progres verifikasi</th><th>Menunggu</th><th>Dikembalikan</th><th>Lewat due</th></tr></thead><tbody>
  ${ds.map(d=>{const A=P.filter(t=>(t.dept||'')===d);return `<tr ${d&&!moDp()?`data-nav="m:${moBr()}:${d}"`:'class="nohov"'}><td>${esc(DEPTN[d]||'Belum ada divisi')}</td><td class="num">${A.length}</td><td class="num">${A.filter(t=>t.status==='DONE').length}</td><td class="num"><b>${A.filter(isV).length}</b> <span class="cnt">/ ${A.length}</span></td><td>${bar(A)}</td><td class="num ${A.filter(isW).length?'warn':''}">${A.filter(isW).length}</td><td class="num ${A.filter(isR).length?'late':''}">${A.filter(isR).length}</td><td class="num ${A.filter(late).length?'late':''}">${A.filter(late).length}</td></tr>`}).join('')||'<tr><td colspan="8" class="empty">Belum ada task di periode ini.</td></tr>'}
  ${ds.length>1?`<tr class="tot nohov"><td>TOTAL</td><td class="num">${P.length}</td><td class="num">${dn.length}</td><td class="num"><b>${vf.length}</b> <span class="cnt">/ ${P.length}</span></td><td>${bar(P)}</td><td class="num">${wt.length}</td><td class="num">${rj.length}</td><td class="num">${od.length}</td></tr>`:''}</tbody></table></div>
  <div class="legend"><span><i class="dot" style="--c:var(--s-done)"></i>Terverifikasi</span><span><i class="dot" style="--c:var(--p-high)"></i>Menunggu verifikasi</span><span><i class="dot" style="--c:var(--line2)"></i>Belum DONE</span></div></section>
 <div class="grid2">
  ${panel('Antrian verifikasi',wt,'Tidak ada yang menunggu verifikasi.',t=>`<span class="num cnt" style="min-width:60px;text-align:right">${t.att.length} bukti</span>`)}
  ${panel('Dikembalikan audit',rj,'Tidak ada task yang dikembalikan.',t=>`<span class="hint" style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(t.verif.note||'')}">${esc(t.verif.note||'')}</span>`)}
  ${panel('Lewat due',od,'Tidak ada task terlambat.',t=>`<span class="num late" style="min-width:74px;text-align:right">${dueTxt(t)}</span>`)}
  ${panel('Belum lengkap',inc,'Semua task sudah punya PIC dan divisi.')}
 </div></div>`}
function rekap(all){
 const a=CM+'-01',b=CM+'-31';const inP=t=>(t.start||'')<=b&&!(t.status==='DONE'&&t.fin&&t.fin<a);
 const P=all.filter(inP);const ds=[...new Set(P.map(t=>t.dept))].sort((x,y)=>(DEPTN[x]||'').localeCompare(DEPTN[y]||''));
 if(!P.length)return '';
 const row=(lbl,arr)=>{const dn=arr.filter(t=>t.status==='DONE'),ok=arr.filter(t=>t.verif&&t.verif.st==='ok'&&t.status==='DONE'),wt=arr.filter(t=>t.status==='DONE'&&t.verif&&t.verif.st==='menunggu'),tl=arr.filter(t=>t.verif&&t.verif.st==='tolak');
  return `<td>${lbl}</td><td class="num">${arr.length}</td><td class="num">${dn.length}</td><td class="num"><b>${ok.length}</b> <span class="cnt">/ ${arr.length}</span></td><td class="num ${wt.length?'warn':''}">${wt.length}</td><td class="num ${tl.length?'late':''}">${tl.length}</td>`};
 return `<div class="rekap"><div class="rh"><b>Rekap verifikasi ${MONL[+CM.slice(5)-1]} ${CM.slice(0,4)}</b></div>
 <div class="tw"><table class="rtab"><thead><tr><th>Divisi</th><th>Task periode ini</th><th>DONE</th><th>Terverifikasi</th><th>Menunggu verifikasi</th><th>Dikembalikan audit</th></tr></thead><tbody>
 ${ds.map(d=>`<tr class="nohov">${row(DEPTN[d]||'Belum ada divisi',P.filter(t=>t.dept===d))}</tr>`).join('')}${ds.length>1?`<tr class="tot nohov">${row('TOTAL',P)}</tr>`:''}</tbody></table></div></div>`}
const WKO=['WORK IN PROGRESS','TO DO','NOT YET','PLANNING','KETENTUAN BY QMR','HOLD','DONE','CANCEL'];
const ILN='<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 4h10M3 8h10M3 12h6"/></svg>';
const IUS='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="5.5" r="2.5"/><path d="M3 13.5c.6-2.6 2.6-3.8 5-3.8s4.4 1.2 5 3.8"/><path d="M12.5 2v3M11 3.5h3" stroke-width="1.3"/></svg>';
function wkList(ts){
 const ids=new Set(ts.map(t=>t.id)),byId=id=>tasks.find(x=>x.id===id);
 const tops=[...new Set(ts.map(t=>{if(!t.parent)return t.id;let p=byId(t.parent);while(p&&p.parent&&visTask(byId(p.parent)||{}))p=byId(p.parent);return p&&visTask(p)?p.id:t.id}))].map(byId).filter(Boolean);
 if(!tops.length)return '<div class="empty">Tidak ada task yang cocok dengan filter.</div>';
 const dk=t=>t.meet||t.start||t.due||'9999';
 const show=t=>ids.has(t.id)||tasks.some(k=>k.parent===t.id&&show(k));
 const sp=navSpace(),addOK=canAdd(sp),lbl=sp==='koord'?'poin koordinasi':'poin weekly';
 const ph=(ic,l)=>`<span class="wph" title="${l}">${ic}</span>`;
 const row=(t,lvl)=>{const k=tasks.filter(x=>x.parent===t.id&&visTask(x)&&show(x)).sort(bySeq),sh=S.shut[t.id],nc=t.feed.filter(f=>f.k==='c').length,top=lvl===0&&!!t.meet;
  const nk=tasks.filter(x=>x.parent===t.id).length;
  return `<tr data-open="${t.id}" class="${lvl?'kid':''} ${top?'wpar':''}"><td class="ti"><div class="tcell" style="padding-left:${lvl*26}px">${k.length?`<button class="tcar ${sh?'shut':''}" data-shut="${t.id}" aria-label="${sh?'Buka':'Lipat'} ${esc(t.title)}" aria-expanded="${!sh}">${I.car}</button>`:'<span class="tcar"></span>'}${ico(t)}<span class="tt">${esc(t.title)}</span>${nk?`<span class="ic cnt" title="${nk} subtask">${I.sub}${nk}</span>`:''}${t.desc?`<span class="ic cnt" title="Ada deskripsi">${ILN}</span>`:''}${nc?`<span class="ic cnt">${I.cmt}${nc}</span>`:''}${t.att.length?`<span class="ic cnt" title="${t.att.length} lampiran">${I.clip}${t.att.length>1?t.att.length:''}</span>`:''}</div></td>
  <td>${top?ph(IUS,'Notulen'):(avs(t)||(t.parent?'<span class="chip warnc">Belum ada PIC</span>':ph(IUS,'Belum ada assignee')))}</td>
  <td class="num ${late(t)?'late':''}">${top?ph(I.cal,'Tanggal meeting '+fmt(t.meet)):(dueTxt(t)||ph(I.cal,'Belum ada due date'))}</td>
  <td>${t.pri!=='normal'?flag(t.pri):ph(I.flag,'Priority normal')}</td>
  <td><select data-rs="${t.id}" class="wst" style="--c:var(${stc(t.status)})" aria-label="Status ${esc(t.title)}" ${canStatus(t)?'':'disabled'}>${stOf(t.space).map(([x])=>`<option ${x===t.status?'selected':''}>${x}</option>`).join('')}</select></td></tr>`
  +(k.length&&!sh?k.map(c=>row(c,lvl+1)).join(''):'')
  +(top&&!sh&&addOK&&!S.q&&!S.fa&&!S.fp&&!S.ft&&!S.mine?`<tr class="wadd nohov"><td colspan="5"><form class="wadf" id="wka-${t.id}" style="padding-left:${(lvl+1)*26+20}px">${I.plus}<input type="text" placeholder="Tambah ${lbl}…" aria-label="Tambah ${lbl} ke ${esc(t.title)}"></form></td></tr>`:'')};
 const groups=WKO.map(st=>[st,tops.filter(t=>t.status===st).sort((a,b)=>dk(a)<dk(b)?-1:dk(a)>dk(b)?1:0)]).filter(g=>g[1].length);
 return groups.map(([st,g])=>`<div class="grp"><button class="grph ${S.shut['w'+st]?'shut':''}" data-shut="w${st}" aria-expanded="${!S.shut['w'+st]}">${I.car}${pill(st)}<span class="cnt">${g.length}</span></button>
 ${S.shut['w'+st]?'':`<div class="tw"><table class="wkt"><thead><tr><th>Nama</th><th style="width:150px">Assignee</th><th style="width:120px">Due date</th><th style="width:110px">Priority</th><th style="width:170px">Status</th></tr></thead><tbody>${g.map(t=>row(t,0)).join('')}</tbody></table></div>`}</div>`).join('')}
function list(ts){
 if(grp()==='bulan')return monthlyList(ts);
 if(grp()==='parent'&&isMeet())return wkList(ts);
 if(grp()==='parent')return tree(ts);
 const mo=isMo(),mine=S.nav==='mine';
 const groups=ST_ALL.map(([s])=>[s,ts.filter(t=>t.status===s)]).filter(g=>g[1].length);
 if(!groups.length)return '<div class="empty">Tidak ada task yang cocok dengan filter.</div>';
 return groups.map(([s,g])=>`<div class="grp"><button class="grph ${S.shut[s]?'shut':''}" data-shut="${s}" aria-expanded="${!S.shut[s]}">${I.car}${pill(s)}<span class="cnt">${g.length} task</span></button>
 ${S.shut[s]?'':`<div class="tw"><table><thead><tr><th>Task</th>${mo?'<th>Divisi</th><th>Inputan</th>':hasIn(navSpace())?'<th>Inputan</th>':''}${mine?'<th>Space</th>':''}<th>Assignee</th><th>Priority</th><th>Tag</th><th>Progres</th><th>Due</th><th>Status</th></tr></thead><tbody>
 ${g.map(t=>{const sd=t.subs.filter(x=>x.d).length;return `<tr data-open="${t.id}"><td class="ti"><span class="tcell">${ico(t)}<span>${esc(t.title)}</span></span>${t.parent&&parentOf(t)?`<div class="psub">${I.sub}${esc(parentOf(t).title)}</div>`:''}</td>${mo?`<td>${(DEPTN[t.dept]||'Belum ada divisi')}</td><td class="inp">${esc(t.inputan)||'<span class="cnt">–</span>'}</td>`:hasIn(navSpace())?`<td class="inp">${esc(t.inputan)||'<span class="cnt">–</span>'}</td>`:''}${mine?`<td>${spLabel(t)}</td>`:''}
 <td><span class="ic">${av(t.assignee)} ${esc((U[t.assignee]||{n:''}).n.split(' ')[0])}</span></td><td>${flag(t.pri)}</td><td><div class="chips">${t.tags.map(tagH).join('')}</div></td>
 <td class="num">${t.subs.length?sd+'/'+t.subs.length:'<span class="cnt">–</span>'}</td><td class="num ${late(t)?'late':''}">${dueTxt(t)}</td>
 <td><select data-rs="${t.id}" aria-label="Status ${esc(t.title)}" ${canStatus(t)?'':'disabled'}>${stOf(t.space).map(([x])=>`<option ${x===t.status?'selected':''}>${x}</option>`).join('')}</select></td></tr>`}).join('')}
 </tbody></table></div>`}</div>`).join('')}

/* ---------- kalender ---------- */
function calendar(ts){
 const [y,m]=S.cm.split('-').map(Number);const first=new Date(y,m-1,1);const off=(first.getDay()+6)%7;
 const start=new Date(y,m-1,1-off);const cells=[];
 for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);cells.push(d)}
 const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
 const nodue=ts.filter(t=>!t.due).length;
 return `<div class="calh"><button class="btn ghost" data-cm="-1" aria-label="Bulan sebelumnya">‹</button><h2>${MONL[m-1]} ${y}</h2><button class="btn ghost" data-cm="1" aria-label="Bulan berikutnya">›</button><button class="link" data-cm="0">Bulan ini</button><span class="sp"></span><span class="hint">Task ditempatkan pada due date${S.nav==='mine'?', meeting yang mengundang Anda ikut tampil':''}${nodue?` · ${nodue} task tanpa due date tidak tampil`:''}</span></div>
 <div class="calg">${['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map(d=>`<div class="dn">${d}</div>`).join('')}
 ${cells.map(d=>{const k=iso(d),it=ts.filter(t=>t.due===k),mm=S.nav==='mine'?meets.filter(m=>m.st!=='batal'&&m.date===k&&(m.inv||[]).includes(S.me)).sort(byDT):[];
  return `<div class="cell ${d.getMonth()!==m-1?'out':''} ${k===TODAY?'today':''}"><span class="d">${d.getDate()}</span>
  ${mm.map(m=>`<button class="ev mev" style="--c:${mColor(m)}" data-nav="${mNav(m)}" title="${esc(mTitle(m))} · ${mJam(m)}"><b style="font-size:11px">${m.time}</b><span>${esc(mTitle(m))}</span></button>`).join('')}
  ${it.slice(0,3).map(t=>`<button class="ev ${done(t)?'done':''}" data-open="${t.id}" style="--c:var(${stc(t.status)})" title="${esc(t.title)}">${ico(t,12)}<span>${esc(t.title)}</span></button>`).join('')}
  ${it.length>3?`<span class="more">+${it.length-3} lagi</span>`:''}</div>`}).join('')}</div>`}

/* ---------- beranda ---------- */
function overall(){
 const [y,m]=S.dm.split('-').map(Number);const a=S.dm+'-01',b=S.dm+'-'+String(new Date(y,m,0).getDate()).padStart(2,'0');
 const vis=tasks.filter(visTask),op=t=>!done(t),open=vis.filter(op),od=open.filter(late);
 const wk=open.filter(t=>t.due&&days(t.due)<=0&&days(t.due)>=-7);
 const doneM=t=>t.status==='DONE'&&(t.fin?t.fin>=a&&t.fin<=b:t.due&&t.due>=a&&t.due<=b);
 const tile=(l,v,c,cls,nav)=>`<${nav?`button data-nav="${nav}"`:'div'} class="tile ${cls||''}"><span class="lbl">${l}</span><b>${v}</b>${c?`<small>${c}</small>`:''}</${nav?'button':'div'}>`;
 const MSEL=`<select id="dmo" aria-label="Bulan">${MONL.map((n,i)=>`<option value="${i+1}" ${i+1===m?'selected':''}>${n}</option>`).join('')}</select><select id="dyr" aria-label="Tahun">${[+TODAY.slice(0,4)-1,+TODAY.slice(0,4),+TODAY.slice(0,4)+1].map(v=>`<option ${v===y?'selected':''}>${v}</option>`).join('')}</select>`;
 const stack=arr=>`<div class="stack" style="height:10px">${ST_ALL.map(([x,c])=>{const n=arr.filter(t=>t.status===x).length;return n?`<i style="width:${n/arr.length*100}%;background:var(${c})" title="${x}: ${n}"></i>`:''}).join('')}</div>`;
 // monthly verifikasi
 const mon=vis.filter(t=>t.space==='monthly');
 const inP=t=>(t.start||'')<=b&&!(t.status==='DONE'&&t.fin&&t.fin<a);
 const vrow=(lbl,arr,nav)=>{const P=arr.filter(inP),dn=P.filter(t=>t.status==='DONE'),ok=dn.filter(t=>t.verif&&t.verif.st==='ok'),wt=dn.filter(t=>t.verif&&t.verif.st==='menunggu'),tl=P.filter(t=>t.verif&&t.verif.st==='tolak');
  return `<tr ${nav?`data-nav="${nav}"`:'class="tot nohov"'}><td>${lbl}</td><td class="num">${P.length}</td><td class="num">${dn.length}</td><td class="num"><b>${ok.length}</b> <span class="cnt">/ ${P.length}</span></td><td class="num ${wt.length?'warn':''}">${wt.length}</td><td class="num ${tl.length?'late':''}">${tl.length}</td><td class="num ${P.filter(late).length?'late':''}">${P.filter(late).length}</td></tr>`};
 const brands=Object.keys(BR).filter(k=>mon.some(t=>t.brand===k));
 const depts=[...new Set(mon.map(t=>t.dept))].sort((p,q)=>(DEPTN[p]||'').localeCompare(DEPTN[q]||''));
 // per space
 const spaces=[...Object.keys(BR).map(k=>({nav:'m:'+k,n:'Monthly · '+BR[k].n,c:BR[k].c,g:'Bulanan',ts:mon.filter(t=>t.brand===k)})),
  ...SP.filter(visSpace).map(sp=>({nav:'w:'+sp.id,n:sp.n,c:sp.c,g:sp.internal?'Internal':sp.meet?'Meeting':'Weekly divisi',ts:vis.filter(t=>t.space===sp.id)}))].filter(x=>x.ts.length);
 // per orang
 const ppl=[...new Set(vis.map(t=>t.assignee).filter(Boolean))].sort((p,q)=>U[p].n.localeCompare(U[q].n));
 const meets=SP.filter(sp=>sp.meet&&visSpace(sp)).map(sp=>{const ps=vis.filter(t=>t.space===sp.id&&!t.parent).sort((p,q)=>(q.start||'').localeCompare(p.start||''));return {sp,last:ps[0],prev:ps.slice(1,3)}});
 const row=t=>`<button class="trow" data-open="${t.id}">${ico(t)}<span class="x">${esc(t.title)}</span><span class="chip">${esc(spLabel(t))}</span>${av(t.assignee)}<span class="num late" style="min-width:74px;text-align:right">${dueTxt(t)}</span></button>`;
 return `<div class="dash">
 <div class="dhead"><h2>Dashboard keseluruhan</h2><span class="cnt">${vis.length} task yang bisa Anda lihat di ${spaces.length} space</span><span class="sp"></span><span class="cnt">Periode</span>${MSEL}</div>
 <section><p class="sech">Kondisi hari ini · ${me().role==='Admin'?'semua space':'space & task yang bisa Anda lihat'}</p><div class="tiles">
  ${tile('Task terbuka',open.length,me().role==='Admin'?'di semua space':'yang bisa Anda lihat')}${tile('Lewat due date',od.length,'perlu ditindaklanjuti','alert')}${tile('Jatuh tempo 7 hari',wk.length,'sampai '+fmt(new Date(D(TODAY).getTime()+7*864e5).toISOString().slice(0,10)))}${tile('Selesai '+MONL[m-1],vis.filter(doneM).length,'status DONE pada periode')}
  ${tile('Monthly menunggu verifikasi',mon.filter(t=>t.status==='DONE'&&t.verif&&t.verif.st==='menunggu').length,'antrian tim audit')}${tile('Monthly dikembalikan audit',mon.filter(t=>t.verif&&t.verif.st==='tolak').length,'DONE yang dicabut','alert')}${tile('Project R&D open',vis.filter(t=>t.space==='irnd'&&!t.parent&&op(t)).length,'Internal R&D','', vis.some(t=>t.space==='irnd')?'w:irnd':'')}${tile('Tindak lanjut meeting open',vis.filter(t=>spDef(t.space)&&spDef(t.space).meet&&t.parent&&op(t)).length,'subtask dari notulen')}</div></section>
 ${mon.length?`<section><p class="sech">Verifikasi Monthly ${MONL[m-1]} ${y} · per brand</p><div class="tw dtab"><table style="min-width:700px"><thead><tr><th>Brand</th><th>Task periode ini</th><th>DONE</th><th>Terverifikasi</th><th>Menunggu verifikasi</th><th>Dikembalikan audit</th><th>Lewat due</th></tr></thead><tbody>
  ${brands.map(k=>vrow(`<span class="ic"><span class="sq" style="background:${BR[k].c}">${BR[k].n[0]}</span>${BR[k].n}</span>`,mon.filter(t=>t.brand===k),'m:'+k)).join('')}${vrow('TOTAL',mon)}</tbody></table></div>
  <div class="tw dtab"><table style="min-width:700px"><thead><tr><th>Divisi (semua brand)</th><th>Task periode ini</th><th>DONE</th><th>Terverifikasi</th><th>Menunggu verifikasi</th><th>Dikembalikan audit</th><th>Lewat due</th></tr></thead><tbody>
  ${depts.map(d=>vrow(DEPTN[d]||'Belum ada divisi',mon.filter(t=>t.dept===d))).join('').replace(/class="tot nohov"/g,'class="nohov"')}</tbody></table></div>
  <p class="hint">Bahan perhitungan nilai departemen. Yang dihitung final hanya DONE yang sudah terverifikasi audit.</p></section>`:''}
 <section><p class="sech">Status per space</p><div class="tw dtab"><table style="min-width:760px"><thead><tr><th>Space</th><th>Jenis</th><th style="width:34%">Sebaran status</th><th>Open</th><th>Lewat due</th><th>Selesai ${MON[m-1]}</th></tr></thead><tbody>
  ${spaces.map(x=>`<tr data-nav="${x.nav}"><td><span class="ic"><span class="sq" style="background:${x.c}">${x.n.replace('Monthly · ','')[0]}</span>${esc(x.n)}</span></td><td class="cnt">${x.g}</td><td>${stack(x.ts)}</td><td class="num">${x.ts.filter(op).length}</td><td class="num ${x.ts.filter(late).length?'late':''}">${x.ts.filter(late).length}</td><td class="num">${x.ts.filter(doneM).length}</td></tr>`).join('')}</tbody></table></div>
  <div class="legend">${ST_ALL.filter(([x])=>vis.some(t=>t.status===x)).map(([x,c])=>`<span><i class="dot" style="--c:var(${c})"></i>${x}</span>`).join('')}</div></section>
 <div class="grid2">
  <section class="panel"><h3>Lewat due date <span class="cnt">${od.length}</span></h3>${od.sort((p,q)=>p.due<q.due?-1:1).slice(0,10).map(row).join('')||'<div class="empty">Tidak ada task terlambat.</div>'}${od.length>10?`<div class="hint">+${od.length-10} lainnya. Buka space terkait untuk daftar lengkap.</div>`:''}</section>
  <section class="panel"><h3>Tindak lanjut meeting</h3>${meets.map(({sp,last,prev})=>{if(!last)return'';const ks=vis.filter(t=>t.parent===last.id);const dn=ks.filter(done).length;
   return `<button class="trow" data-open="${last.id}" style="flex-wrap:wrap"><span class="sq" style="background:${sp.c};width:18px;height:18px;border-radius:5px;display:inline-grid;place-items:center;color:#fff;font-size:10px;font-weight:800">${sp.k[0]}</span><span class="x">${esc(last.title)}</span><span class="num cnt">${dn}/${ks.length} selesai</span><span class="bar" style="flex:0 0 90px"><i style="width:${ks.length?dn/ks.length*100:0}%"></i></span></button>${prev.map(p=>{const kp=vis.filter(t=>t.parent===p.id);const op2=kp.filter(op).length;return op2?`<div class="hint" style="padding-left:34px">${esc(p.title)}: masih ${op2} subtask terbuka</div>`:''}).join('')}`}).join('')||'<div class="empty">Tidak ada space meeting.</div>'}</section>
 </div>
 <section><p class="sech">Beban kerja per orang · ${me().role==='Admin'?'semua space':'dari task yang bisa Anda lihat'}, urut nama</p><div class="tw dtab"><table style="min-width:760px"><thead><tr><th>Nama</th><th>Divisi</th><th style="width:30%">Task open per status</th><th>Open</th><th>Lewat due</th><th>Jatuh tempo 7 hari</th><th>Selesai ${MON[m-1]}</th><th>Monthly menunggu verifikasi</th></tr></thead><tbody>
  ${ppl.map(u=>{const pt=vis.filter(t=>t.assignee===u),po=pt.filter(op);return `<tr class="nohov"><td><span class="ic">${av(u)} ${esc(U[u].n)}</span></td><td class="cnt">${DEPTN[U[u].dept]||U[u].role}</td><td>${po.length?stack(po):'<span class="cnt">–</span>'}</td><td class="num">${po.length}</td><td class="num ${po.filter(late).length?'late':''}">${po.filter(late).length}</td><td class="num">${po.filter(t=>t.due&&days(t.due)<=0&&days(t.due)>=-7).length}</td><td class="num">${pt.filter(doneM).length}</td><td class="num">${pt.filter(t=>t.space==='monthly'&&t.status==='DONE'&&t.verif&&t.verif.st==='menunggu').length}</td></tr>`}).join('')}</tbody></table></div></section>
 </div>`}
/* ---------- notulen monthly cepat (QMR / audit) ---------- */
const eom=d=>{const [y,m]=d.split('-').map(Number);return d.slice(0,8)+String(new Date(y,m,0).getDate()).padStart(2,'0')};
const addDays=(d,n)=>new Date(D(d).getTime()+n*864e5).toISOString().slice(0,10);
const givers=()=>[...new Set(['Pak Hendra','Ibu Irena','Ibu Stevany',...tasks.map(t=>t.inputan).filter(Boolean)])];
const hasIn=sp=>sp==='monthly'||!!(spDef(sp)&&!spDef(sp).internal);
const KORT=d=>{const x=D(d);return 'KOORDINASI '+String(x.getDate()).padStart(2,'0')+' '+MONL[x.getMonth()].toUpperCase()+' '+x.getFullYear()};
function qnInit(b,kind){S.qn={kind:kind||(S.qn&&S.qn.kind)||'monthly',brand:b||(S.qn&&S.qn.brand)||'sft',date:TODAY,peserta:[],div:'',pic:'',inputan:'',due:eom(TODAY),pri:'normal',created:[],upd:[],t0:Date.now()}}
const qnPics=div=>Object.keys(U).filter(k=>U[k].dept===div&&!U[k].off);
function qnParse(txt){const q=S.qn,r={title:txt,pic:q.pic||'',div:q.div||''};
 r.title=r.title.replace(/#([\w&]+)/g,(m,w)=>{const k=Object.keys(DEPTN).find(k=>k===w.toLowerCase()||DEPTN[k].toLowerCase().startsWith(w.toLowerCase()));if(k){r.div=k;return''}return m});
 r.title=r.title.replace(/@([\w.]+)/g,(m,w)=>{const k=Object.keys(U).find(k=>(U[k].role==='Member'||U[k].role==='Guest'||(U[k].role==='Admin'&&U[k].dept))&&(k===w.toLowerCase()||U[k].n.toLowerCase().split(' ').some(p=>p.replace('.','').startsWith(w.toLowerCase()))));if(k){r.pic=k;if(U[k].dept)r.div=U[k].dept;return''}return m});
 r.title=r.title.replace(/\s+/g,' ').trim();if(r.pic&&U[r.pic].dept&&U[r.pic].dept!==r.div&&!/#/.test(txt))r.div=U[r.pic].dept;
 return r}
function qnText(){const q=S.qn,d=D(q.date);const L=[`${q.kind==='koord'?'Notulen Koordinasi':'Notulen Monthly '+BR[q.brand].n} — ${HARI[d.getDay()]}, ${d.getDate()} ${MONL[d.getMonth()]} ${d.getFullYear()}`];
 if(q.kind==='koord'&&q.fd)L.push('Grup: '+listName('koord',q.fd));
 const cr=q.created.map(id=>tasks.find(t=>t.id===id)).filter(Boolean);
 L.push('',`Task baru (${cr.length}):`);cr.forEach((t,i)=>L.push(`${i+1}. ${t.dept?'['+DEPTN[t.dept]+'] ':''}${t.title}${t.assignee?' — PIC '+U[t.assignee].n:''}${t.due?', due '+fmt(t.due):''}${t.inputan?', dari '+t.inputan:''}`));
 if(q.upd.length){L.push('',`Update task berjalan (${q.upd.length}):`);q.upd.forEach(u=>{const t=tasks.find(x=>x.id===u.id);if(t)L.push(`- ${t.title}: ${u.note?'catatan: '+u.note:u.from+' → '+u.to}`)})}
 return L.join('\n')}
function qnAdd(lines){const q=S.qn;let n=0;const pinp=$('#qin'),pdue=$('#qdue');if(pinp&&pinp.value.trim())q.inputan=pinp.value.trim();if(pdue&&pdue.value)q.due=pdue.value;
 lines.forEach(raw=>{raw=raw.replace(/^\s*(?:[-*•]|\d+[.)])\s*/,'').trim();if(!raw)return;const r=qnParse(raw);if(!r.title)return;
  let t;if(q.kind==='koord'){let p=tasks.find(x=>x.space==='koord'&&!x.parent&&x.meet===q.date&&x.list===q.fd);
   if(!p){p=T({space:'koord',list:q.fd,title:KORT(q.date),assignee:S.me,start:q.date,meet:q.date,creator:S.me});p.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'membuat notulen koordinasi'});tasks.push(p)}
   t=T({space:'koord',list:q.fd,parent:p.id,meet:q.date,dept:r.div,title:r.title,assignee:r.pic,inputan:q.inputan,start:q.date,due:q.due,pri:q.pri,creator:S.me})}
  else{t=T({space:'monthly',brand:q.brand,dept:r.div,title:r.title,assignee:r.pic,inputan:q.inputan,start:q.date,due:q.due,pri:q.pri,creator:S.me,mst:{}});t.mst[q.date.slice(0,7)]='TO DO'}
  t.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'dibuat dari notulen '+(q.kind==='koord'?'koordinasi ':'monthly ')+fmt(q.date)});tasks.push(t);q.created.push(t.id);n++;
  if(t.assignee)notify(t.assignee,t,'u','Task baru dari notulen '+(q.kind==='koord'?'koordinasi':'monthly'))});
 q.pic='';if(n>1)toast(n+' poin dicatat');S.qfocus=true;render()}
function qnPage(){
 if(!S.qn)qnInit();const q=S.qn,d=D(q.date);
 const cr=q.created.map(id=>tasks.find(t=>t.id===id)).filter(Boolean);
 const ko=q.kind==='koord';if(ko&&!fdef('koord',q.fd))q.fd=(LISTS.koord.find(l=>visFolder('koord',l))||{}).id;
 const run=ko?tasks.filter(t=>t.space==='koord'&&t.parent&&t.list===q.fd&&!done(t)&&!q.created.includes(t.id)):tasks.filter(t=>t.space==='monthly'&&t.brand===q.brand&&visTask(t)&&!q.created.includes(t.id)&&(!done(t)||(t.verif&&t.verif.st==='menunggu')));
 const gk=t=>ko?t.parent:t.dept,gl=k=>ko?((tasks.find(x=>x.id===k)||{title:''}).title):(DEPTN[k]||'Belum ada divisi');
 const depts=[...new Set(run.map(gk))].sort((a,b)=>ko?((tasks.find(x=>x.id===b)||{}).meet||'').localeCompare((tasks.find(x=>x.id===a)||{}).meet||''):gl(a).localeCompare(gl(b)));
 const gv=givers();
 const QS=['WORK IN PROGRESS','NOT YET','HOLD','KETENTUAN BY QMR','PLANNING'];
 const people=Object.keys(U).filter(k=>U[k].role!=='Guest');
 const inputs=[...new Set(tasks.filter(t=>t.space==='monthly'&&t.inputan).map(t=>t.inputan))];
 const picOpts=(div,cur)=>{const a=qnPics(div),b=Object.keys(U).filter(k=>!a.includes(k)&&!U[k].off&&U[k].role!=='Admin'&&U[k].role!=='Member QMR');return `<option value="" ${!cur?'selected':''}>— Belum ada PIC —</option>${a.length?`<optgroup label="${esc(DEPTN[div]||'')}">${a.map(k=>`<option value="${k}" ${k===cur?'selected':''}>${esc(U[k].n)}</option>`).join('')}</optgroup>`:''}<optgroup label="${a.length?'Lainnya':'Semua'}">${b.map(k=>`<option value="${k}" ${k===cur?'selected':''}>${esc(U[k].n)}</option>`).join('')}</optgroup>`};
 const inc=cr.filter(t=>!t.assignee||!t.dept).length;
 return `<main class="main"><div class="top"><button class="menu" data-menu aria-label="Buka menu">☰</button><div style="min-width:0"><div class="crumb">Tim audit (QMR)${q.meet&&meets.find(x=>x.id===q.meet)?' · '+esc(mTitle(meets.find(x=>x.id===q.meet)))+', '+fmtLong(q.date):''}</div><h1>Catat notulen ${ko?'koordinasi':'monthly'}</h1></div><span class="sp"></span>
  <span class="qtimer" id="qtimer" title="Lama meeting">${I.cal}<span>${Math.floor((Date.now()-q.t0)/6e4)} menit</span></span>
  <button class="btn ghost" data-qcopy>Salin ringkasan</button><button class="btn" data-qend>Selesai</button></div>
 <div class="content"><div class="qn">
 <section class="qhead">
  <div class="seg" role="group" aria-label="Jenis meeting"><button data-qkind="monthly" class="${!ko?'on':''}">${I.cal} Monthly</button><button data-qkind="koord" class="${ko?'on':''}">${I.note} Koordinasi</button></div>
  ${ko?'':`<div class="seg" role="group" aria-label="Brand">${Object.keys(BR).map(b=>`<button data-qbr="${b}" class="${q.brand===b?'on':''}"><span class="sq" style="background:${BR[b].c};width:14px;height:14px;font-size:8px">${BR[b].n[0]}</span> ${BR[b].n}</button>`).join('')}</div>`}
  <label class="qlab">Tanggal meeting <input type="date" id="qdate" value="${q.date}"></label>
  ${ko?`<label class="qlab">Grup koordinasi <select id="qfd">${(LISTS.koord||[]).filter(l=>visFolder('koord',l)).map(l=>`<option value="${l.id}" ${q.fd===l.id?'selected':''}>${esc(l.n)}</option>`).join('')}</select></label>`:''}
 </section>
 <div class="qgrid">
 <div class="qcol">
  <form class="qcard qcomp" id="qf" autocomplete="off">
   <div class="qcomp-h"><b>Catat cepat</b><span class="hint">Ketik poin hasil meeting, tekan Enter. Tempel beberapa baris sekaligus juga bisa.</span></div>
   <input class="qbig" id="qt" placeholder="Tulis poin hasil meeting lalu Enter…" aria-label="Poin hasil meeting">
   <div class="qprev" id="qprev"></div>
   <div class="qf"><span class="lbl">Divisi <span class="cnt" style="text-transform:none;letter-spacing:0;font-weight:500">opsional, terbawa ke poin berikutnya</span></span><div class="chips"><button type="button" class="pchip ${!q.div?'on':''}" data-qdiv="">Nanti saja</button>${Object.keys(DEPTN).map(k=>`<button type="button" class="pchip ${q.div===k?'on':''}" data-qdiv="${k}">${esc(DEPTN[k])}</button>`).join('')}</div></div>
   <div class="qf"><span class="lbl">Inputan · siapa yang kasih task <span class="cnt" style="text-transform:none;letter-spacing:0;font-weight:500">terbawa ke poin berikutnya</span></span><div class="chips"><button type="button" class="pchip ${!q.inputan?'on':''}" data-qgv="">Nanti saja</button>${gv.slice(0,7).map(v=>`<button type="button" class="pchip ${q.inputan===v?'on':''}" data-qgv="${esc(v)}">${esc(v)}</button>`).join('')}<input type="text" id="qin" list="qinl" value="${esc(gv.slice(0,7).includes(q.inputan)?'':q.inputan)}" placeholder="Nama lain…" aria-label="Inputan nama lain" class="qinx"><datalist id="qinl">${gv.map(v=>`<option value="${esc(v)}">`).join('')}</datalist></div></div>
   <details class="qmore" ${S.qmore?'open':''} id="qmore"><summary>Detail opsional: PIC, due, priority</summary>
    <div class="qfields">
     <div class="qrowf">
      <label class="qf"><span class="lbl">PIC (hanya untuk poin berikutnya)</span><select id="qpic">${picOpts(q.div,q.pic)}</select></label>
      <label class="qf"><span class="lbl">Due</span><input type="date" id="qdue" value="${q.due}"></label>
     </div>
     <div class="qf"><div class="chips"><button type="button" class="pchip ${q.due===eom(q.date)?'on':''}" data-qdue="eom">Akhir bulan</button><button type="button" class="pchip ${q.due===addDays(q.date,7)?'on':''}" data-qdue="7">+1 minggu</button><button type="button" class="pchip ${q.due===addDays(q.date,14)?'on':''}" data-qdue="14">+2 minggu</button>
      <span class="sp"></span>${Object.keys(PR).map(p=>`<button type="button" class="pchip ${q.pri===p?'on':''}" data-qpri="${p}" style="--c:var(${PR[p][1]})">${I.flag}${PR[p][0]}</button>`).join('')}</div></div>
    </div>
   </details>
   <div class="qact"><span class="hint">Opsional: ketik <b>@nama</b> untuk PIC atau <b>#divisi</b> untuk divisi</span><span class="sp"></span><button class="btn">Simpan</button></div>
  </form>
  <section class="qcard"><div class="qcomp-h"><b>Dicatat di meeting ini</b><span class="cnt">${cr.length} task</span>${inc?`<span class="chip warnc">${inc} belum lengkap</span><span class="hint">PIC dan divisi bisa dilengkapi di tabel ini setelah meeting</span>`:''}</div>
   ${cr.length?`<div class="tw"><table class="qtab"><thead><tr><th>#</th><th>Task</th><th>Inputan</th><th>Divisi</th><th>PIC</th><th>Due</th><th></th></tr></thead><tbody>
   ${cr.map((t,i)=>`<tr class="nohov"><td class="num cnt">${i+1}</td><td><input type="text" data-qe="${t.id}:title" value="${esc(t.title)}" aria-label="Judul"></td><td><input type="text" data-qe="${t.id}:inputan" value="${esc(t.inputan)}" list="qinl" placeholder="—" aria-label="Inputan" class="${t.inputan?'':'need'}" style="min-width:110px"></td>
    <td><select data-qe="${t.id}:dept" aria-label="Divisi" class="${t.dept?'':'need'}"><option value="" ${!t.dept?'selected':''}>— Belum ada —</option>${Object.keys(DEPTN).map(k=>`<option value="${k}" ${t.dept===k?'selected':''}>${esc(DEPTN[k])}</option>`).join('')}</select></td>
    <td><select data-qe="${t.id}:assignee" aria-label="PIC" class="${t.assignee?'':'need'}">${picOpts(t.dept,t.assignee)}</select></td>
    <td><input type="date" data-qe="${t.id}:due" value="${t.due}" aria-label="Due"></td>
    <td><button class="iconb" data-qdel="${t.id}" aria-label="Hapus task" title="Hapus">×</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Belum ada task. Ketik di kolom atas lalu tekan Enter.</div>'}
  </section>
 </div>
 <section class="qcard qrev"><div class="qcomp-h"><b>Review task berjalan · ${ko?'Koordinasi':BR[q.brand].n}</b><span class="cnt">${run.length} task</span></div>
  ${depts.map(dp=>`<div class="qdept">${esc(gl(dp))}</div>${run.filter(t=>gk(t)===dp).map(t=>{const u=q.upd.filter(x=>x.id===t.id);
   return `<div class="qitem ${u.length?'touched':''}"><div class="qi-h">${ico(t)}<button class="qi-t" data-open="${t.id}">${esc(t.title)}</button>${av(t.assignee,20)}<span class="num ${late(t)?'late':'cnt'}">${dueTxt(t)}</span></div>
   ${t.inputan?`<div class="hint">Dari ${esc(t.inputan)}</div>`:''}
   <div class="qi-s">${t.status==='DONE'?verifH(t):QS.map(x=>`<button class="pchip sm ${t.status===x?'on':''}" data-qs="${t.id}|${x}" style="--c:var(${stc(x)})">${x==='KETENTUAN BY QMR'?'QMR':x==='WORK IN PROGRESS'?'WIP':x.charAt(0)+x.slice(1).toLowerCase()}</button>`).join('')}</div>
   <form class="qnf" data-id="${t.id}"><input type="text" placeholder="Catatan meeting, Enter" aria-label="Catatan untuk ${esc(t.title)}"></form>
   ${u.filter(x=>x.note).map(x=>`<div class="hint">✓ ${esc(x.note)}</div>`).join('')}</div>`}).join('')}`).join('')||`<div class="empty">Tidak ada task berjalan ${ko?'di koordinasi':'untuk brand ini'}.</div>`}
 </section>
 </div></div></div></main>`}
/* ---------- jadwal meeting ---------- */
const canSched=()=>canAdd('monthly');
const wkFolders=()=>(LISTS.wall||[]).filter(l=>canSched()?visFolder('wall',l):(!!me().head&&!!l.depts&&l.depts.includes(me().dept)));
const canMake=()=>canSched()||(!!me().head&&!!me().dept);
const mCan=m=>canSched()||(m.kind==='weekly'&&!!me().head&&(m.wdept===me().dept||((fdef('wall',m.fd)||{}).depts||[]).includes(me().dept)));
const wkFolderOf=d=>(LISTS.wall||[]).find(l=>l.depts&&l.depts.length===1&&l.depts[0]===d);
const wkEnsure=d=>{let l=wkFolderOf(d);if(!l){l={id:'w'+d+Math.random().toString(36).slice(2,6),n:DEPTN[d],depts:[d]};(LISTS.wall=LISTS.wall||[]).push(l)}return l.id};
const monStart=()=>{const x=D(TODAY);const t=x.getDate()>=25?new Date(x.getFullYear(),x.getMonth()+1,1):x;return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')};
const dowDates=w=>{const [y,mo]=S.mmon.split('-').map(Number),n=new Date(y,mo,0).getDate(),o=[];for(let d=1;d<=n;d++){const k=S.mmon+'-'+String(d).padStart(2,'0');if(D(k).getDay()===w&&k>=TODAY)o.push(k)}return o};
function mDpk(){const [y,mo]=S.mmon.split('-').map(Number),n=new Date(y,mo,0).getDate(),off=(new Date(y,mo-1,1).getDay()+6)%7,sel=S.mdates||[];
 const cells=[];for(let i=0;i<off;i++)cells.push('<span></span>');
 for(let d=1;d<=n;d++){const k=S.mmon+'-'+String(d).padStart(2,'0');cells.push(`<button type="button" class="dpd ${sel.includes(k)?'on':''}" data-mdate="${k}" ${k<TODAY?'disabled':''} aria-pressed="${sel.includes(k)}" aria-label="${fmtLong(k)}">${d}</button>`)}
 const srt=[...sel].sort();
 return `<span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Tanggal weekly · pilih semua tanggal meeting bulan ini</span>
 <div class="dpk"><div class="dph"><button type="button" class="btn ghost sm" data-mmon="-1" aria-label="Bulan sebelumnya">‹</button><b>${MONL[mo-1]} ${y}</b><button type="button" class="btn ghost sm" data-mmon="1" aria-label="Bulan berikutnya">›</button><span class="sp"></span><span class="cnt">${srt.length} tanggal dipilih</span></div>
 <div class="chips">${[[1,'Senin'],[2,'Selasa'],[3,'Rabu'],[4,'Kamis'],[5,'Jumat']].map(([w,l])=>`<button type="button" class="pchip sm" data-mdow="${w}">Tiap ${l}</button>`).join('')}<button type="button" class="pchip sm" data-mdow="x">Kosongkan bulan ini</button></div>
 <div class="dpg">${['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map(d=>`<span class="dpn">${d}</span>`).join('')}${cells.join('')}</div>
 <div class="hint">${srt.length?srt.map(k=>{const x=D(k);return HARI[x.getDay()].slice(0,3)+' '+x.getDate()+' '+MON[x.getMonth()]}).join(' · '):'Klik tanggal di kalender, atau pakai tombol "Tiap Senin" dan seterusnya.'}</div></div>`}
const WKT=d=>{const x=D(d);return 'WEEKLY '+String(x.getDate()).padStart(2,'0')+' '+MONL[x.getMonth()].toUpperCase()+' '+x.getFullYear()};
const mTitle=m=>m.kind==='weekly'?'Weekly '+(m.fd?listName('wall',m.fd):(DEPTN[m.wdept]||'')):m.kind==='monthly'?'Monthly '+((BR[m.brand]||{n:''}).n)+(m.depts&&m.depts.length&&m.depts.length<Object.keys(DEPTN).length?' · '+m.depts.map(d=>DEPTN[d]).join(', '):''):'Koordinasi '+listName('koord',m.fd);
const mColor=m=>m.kind==='weekly'?'#0b7fd1':m.kind==='monthly'?(BR[m.brand]||{c:'#5b4fd6'}).c:'#5b4fd6';
const mDepts=m=>m.kind==='weekly'?(m.wdept?[m.wdept]:((fdef('wall',m.fd)||{}).depts||Object.keys(DEPTN))):m.kind==='koord'?((fdef('koord',m.fd)||{}).depts||[]):(m.depts&&m.depts.length?m.depts:Object.keys(DEPTN));
const mAllD=m=>m.kind==='monthly'&&m.depts&&m.depts.length&&m.depts.length<Object.keys(DEPTN).length;
const mVis=m=>{if((m.inv||[]).includes(S.me))return true;if(m.kind==='weekly'){const l=fdef('wall',m.fd);return !!l&&visFolder('wall',l)}if(m.kind==='koord'){const l=fdef('koord',m.fd);return !!l&&visFolder('koord',l)}if(me().role==='Admin'||me().role==='Member QMR')return true;return !!me().dept&&mDepts(m).includes(me().dept)};
const mTasks=m=>m.kind==='weekly'?tasks.filter(t=>t.space==='wall'&&t.parent&&t.list===m.fd&&!done(t)):m.kind==='koord'?tasks.filter(t=>t.space==='koord'&&t.parent&&t.list===m.fd&&!done(t)):tasks.filter(t=>t.space==='monthly'&&t.brand===m.brand&&(!m.depts||!m.depts.length||m.depts.includes(t.dept))&&visTask(t)&&!done(t));
const byDT=(a,b)=>(a.date+a.time).localeCompare(b.date+b.time);
const fmtLong=d=>{const x=D(d);return HARI[x.getDay()]+', '+x.getDate()+' '+MONL[x.getMonth()]+' '+x.getFullYear()};
const mJam=m=>(m.time||'')+(m.end?'–'+m.end:'');
function mState(m){if(m.st==='batal')return['Dibatalkan','--s-cancel'];if(m.st==='selesai')return['Selesai'+(m.n?' · '+m.n+' poin':''),'--s-done'];if(m.date<TODAY)return['Belum ada notulen','--p-high'];if(m.date===TODAY)return['Hari ini','--orange'];return['Terjadwal','--s-wip']}
const mClash=(x,id)=>meets.filter(m=>m.id!==id&&m.st!=='batal'&&m.date===x.date&&(m.time||'00:00')<(x.end||'23:59')&&(m.end||'23:59')>(x.time||'00:00'));
const mDue=w=>meets.filter(m=>m.st==='jadwal'&&m.date<TODAY&&mVis(m)&&mCan(m)&&(w==null||(m.kind==='weekly')===w));
const mNav=m=>m.kind==='weekly'?'jadwalw':'jadwal';
const mSoon=w=>meets.filter(m=>m.st==='jadwal'&&m.date>=TODAY&&dd(TODAY,m.date)<=7&&mVis(m)&&(m.kind==='weekly')===w).length;
const jBadge=w=>{const d=mDue(w).length;return d?`<span class="vdot" title="${d} meeting belum dicatat notulennya">${d}</span>`:`<span class="cnt">${mSoon(w)}</span>`};
function mInv(m){const ts=mTasks(m),od=ts.filter(late).length;
 return [`Undangan ${mTitle(m)}`,'',`Hari/tanggal : ${fmtLong(m.date)}`,`Waktu       : ${mJam(m)} WIB`,`Tempat      : ${m.place||'-'}`,`Divisi      : ${mDepts(m).map(d=>DEPTN[d]).join(', ')}`,
  ...(m.agenda?['','Agenda:',...m.agenda.split('\n').map(a=>a.trim()).filter(Boolean).map(a=>'- '+a.replace(/^[-•]\s*/,''))]:[]),
  '',`Task berjalan: ${ts.length}${od?` (${od} lewat due)`:''}. Mohon PIC menyiapkan update progres dan bukti sebelum meeting.`].join('\n')}
function mCard(m){const [sl,sc]=mState(m),ed=mCan(m)&&m.st==='jadwal',ts=mTasks(m),od=ts.filter(late).length,x=D(m.date);
 return `<div class="mcard ${m.st} ${m.st==='jadwal'&&m.date===TODAY?'today':''} ${m.st==='jadwal'&&m.date<TODAY?'due':''}">
 <div class="mdate"><small>${HARI[x.getDay()].slice(0,3)}</small><b>${x.getDate()}</b><small>${MON[x.getMonth()]}</small></div>
 <div class="mbody"><div class="mt"><span class="sq" style="background:${mColor(m)}">${m.kind==='monthly'?esc(((BR[m.brand]||{n:'M'}).n)[0]):m.kind==='weekly'?'W':'K'}</span><b>${esc(mTitle(m))}</b><span class="pill" style="--c:var(${sc})"><i></i>${sl}</span>${m.moved?`<span class="chip carry">Diundur dari ${fmt(m.moved)}</span>`:''}</div>
 <div class="mmeta"><span>${I.cal} ${mJam(m)||'Jam belum diisi'}</span><span>${esc(m.place||'Tempat belum diisi')}</span>${m.st==='jadwal'?`<span>${ts.length} task berjalan${od?` · <b class="late">${od} lewat due</b>`:''}</span>`:''}</div>
 <div class="chips">${mDepts(m).map(d=>`<span class="chip">${esc(DEPTN[d])}</span>`).join('')}</div>
 ${m.agenda?`<div class="magd">${esc(m.agenda)}</div>`:''}
 ${(m.inv||[]).length?`<div class="mguest"><span class="cnt">Diundang</span>${m.inv.slice(0,10).map(k=>av(k,20)).join('')}${m.inv.length>10?`<span class="cnt">+${m.inv.length-10}</span>`:''}${m.inv.includes(S.me)?'<span class="chip carry">Anda diundang</span>':''}</div>`:''}</div>
 <div class="mact">${ed?`<button class="btn sm" data-mstart="${m.id}">${I.note}Mulai notulen</button>`:''}${m.task&&tasks.some(t=>t.id===m.task)?`<button class="btn ghost sm" data-open="${m.task}">Buka notulen</button>`:''}<button class="btn ghost sm" data-minv="${m.id}">Salin undangan</button>${m.st==='jadwal'?`<button class="btn ghost sm" data-mcal="${m.id}">${I.cal}Ke kalender</button>`:''}${ed?`<button class="btn ghost sm" data-medit="${m.id}">Ubah</button><button class="btn ghost sm dang" data-mbatal="${m.id}">Batalkan</button>`:''}</div></div>`}
function mCal(vis){const [y,mo]=S.cm.split('-').map(Number);const first=new Date(y,mo-1,1);const off=(first.getDay()+6)%7;const start=new Date(y,mo-1,1-off);
 const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
 const cells=[];for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);cells.push(d)}
 return `<div class="calh"><button class="btn ghost" data-cm="-1" aria-label="Bulan sebelumnya">‹</button><h2>${MONL[mo-1]} ${y}</h2><button class="btn ghost" data-cm="1" aria-label="Bulan berikutnya">›</button><button class="link" data-cm="0">Bulan ini</button></div>
 <div class="calg">${['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map(d=>`<div class="dn">${d}</div>`).join('')}
 ${cells.map(d=>{const k=iso(d),it=vis.filter(m=>m.date===k&&m.st!=='batal').sort(byDT);
  return `<div class="cell ${d.getMonth()!==mo-1?'out':''} ${k===TODAY?'today':''}"><span class="d">${d.getDate()}</span>${it.map(m=>`<button class="ev mev ${m.st==='selesai'?'done':''}" style="--c:${mColor(m)}" data-mfocus="${m.id}" title="${esc(mTitle(m))} · ${mJam(m)}"><b style="font-size:11px">${m.time||''}</b><span>${esc(m.kind==='weekly'?'Weekly '+listName('wall',m.fd):m.kind==='monthly'?'Monthly '+((BR[m.brand]||{n:''}).n):'Koord '+listName('koord',m.fd).split(' ')[0].replace(/\.$/,''))}</span></button>`).join('')}</div>`}).join('')}</div>`}
function jadwalPage(w){
 const ed=w?canMake():canSched(),tab=S.jt||'list',vis=meets.filter(m=>mVis(m)&&(m.kind==='weekly')===!!w);
 const due=vis.filter(m=>m.st==='jadwal'&&m.date<TODAY).sort(byDT),up=vis.filter(m=>m.st==='jadwal'&&m.date>=TODAY).sort(byDT),hist=vis.filter(m=>m.st!=='jadwal').sort(byDT).reverse();
 const wk=up.filter(m=>dd(TODAY,m.date)<=7),later=up.filter(m=>dd(TODAY,m.date)>7);
 const sec=(t,arr,empty)=>`<div class="msec">${t}<span class="cnt">${arr.length}</span></div>${arr.map(mCard).join('')||(empty?`<div class="empty">${empty}</div>`:'')}`;
 return `<main class="main"><div class="top"><button class="menu" data-menu aria-label="Buka menu">☰</button><div style="min-width:0"><div class="crumb">${w?(canSched()?'Weekly · semua divisi':ed?'Weekly · divisi Anda, diatur Leader':'Weekly · divisi Anda'):(canSched()?'Bulanan & Meeting · diatur tim audit (QMR)':'Bulanan & Meeting · yang melibatkan divisi Anda')}</div><h1>${w?'Jadwal weekly':'Jadwal Monthly & Koordinasi'}</h1></div><span class="sp"></span>${ed?`<button class="btn" data-mnew="${w?'w':''}">${I.plus}Jadwal baru</button>`:''}</div>
 <div class="tabs" role="tablist">${[['list','Daftar',I.list],['cal','Kalender',I.cal],['hist','Riwayat',I.check]].map(([k,l,ic])=>`<button role="tab" aria-selected="${tab===k}" data-jt="${k}" class="${tab===k?'on':''}">${ic}${l}${k==='hist'?` <span class="cnt">${hist.length}</span>`:''}</button>`).join('')}</div>
 <div class="content">${tab==='cal'?mCal(vis):tab==='hist'?`<div class="mlist">${hist.map(mCard).join('')||'<div class="empty">Belum ada riwayat meeting.</div>'}</div>`
  :`<div class="mlist">${due.length?sec('Sudah lewat, notulen belum dicatat',due):''}${sec('7 hari ke depan',wk,(w?'Belum ada weekly dalam 7 hari ke depan.':'Tidak ada meeting dalam 7 hari ke depan.'))}${later.length?sec('Berikutnya',later):''}</div>`}</div></main>`}
const mDefInv=f=>{const ds=mDepts(f);return f.kind==='weekly'&&(f.wdept||((fdef('wall',f.fd)||{}).depts||[]).length)?Object.keys(U).filter(k=>!U[k].off&&U[k].role!=='Guest'&&ds.includes(U[k].dept)):mHeads(ds)};
const mHeads=ds=>Object.keys(U).filter(k=>U[k].head&&!U[k].off&&ds.includes(U[k].dept));
function mNotify(m,x,only){(only||m.inv||[]).forEach(u=>{if(!u||u===S.me||!U[u]||U[u].off)return;inbox.unshift({u,tab:'u',task:'',meet:m.id,who:S.me,x,t:'Baru saja',n:1,read:false})})}
function mPick(){const f=document.querySelector('#mf')?mForm():null,ds=f?mDepts(f):[],sel=S.minv||[];
 const cand=[...new Set([...Object.keys(U).filter(k=>!U[k].off&&U[k].role!=='Guest'&&ds.includes(U[k].dept)),...sel])].sort((a,b)=>(!!U[b].head-!!U[a].head)||U[a].n.localeCompare(U[b].n));
 return cand.map(k=>`<button type="button" class="pchip ${sel.includes(k)?'on':''}" data-minvu="${k}" aria-pressed="${sel.includes(k)}">${av(k,18)}${esc(U[k].n)}${U[k].head&&U[k].role!=='Admin'?' <small>Head '+esc(DEPTN[U[k].dept]||'')+'</small>':''}</button>`).join('')||'<span class="hint">Pilih grup atau brand dulu.</span>'}
const mT=(t,d)=>(t||d).replace(':','')+'00';
function gcalUrl(m,guests,rr){const d=m.date.replace(/-/g,'');
 const p=new URLSearchParams({action:'TEMPLATE',text:mTitle(m),dates:`${d}T${mT(m.time,'09:00')}/${d}T${mT(m.end||m.time,'10:00')}`,ctz:'Asia/Jakarta',details:mInv(m),location:m.place||''});
 if(guests&&(m.inv||[]).length)p.set('add',m.inv.map(k=>U[k]&&U[k].email).filter(Boolean).join(','));
 if(rr)p.set('recur','RRULE:'+rr);return 'https://calendar.google.com/calendar/render?'+p.toString()}
function outlookUrl(m,guests){const t=(x,d)=>m.date+'T'+(x||d)+':00+07:00';
 const p=new URLSearchParams({path:'/calendar/action/compose',rru:'addevent',subject:mTitle(m),startdt:t(m.time,'09:00'),enddt:t(m.end||m.time,'10:00'),body:mInv(m),location:m.place||''});
 if(guests&&(m.inv||[]).length)p.set('to',m.inv.map(k=>U[k]&&U[k].email).filter(Boolean).join(','));
 return 'https://outlook.office.com/calendar/0/deeplink/compose?'+p.toString()}
function mCalModal(){const m=meets.find(x=>x.id===S.mcal);if(!m)return'';const g=mCan(m),inv=m.inv||[],rr=S.mcalNew?m.rr:'',list=(S.mcalList&&S.mcalList[0]===m.id?S.mcalList:[m.id]).map(id=>meets.find(y=>y.id===id)).filter(Boolean);
 return `<div class="mwrap" data-mclose><div class="modal" role="dialog" aria-modal="true" aria-label="Masukkan ke kalender" style="width:min(560px,100%)">
 <div class="mh"><h2>${S.mcalNew?'Jadwal tersimpan':'Masukkan ke kalender'}</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Tutup</button></div>
 <div class="mb">${S.mcalNew&&inv.length?`<div class="hint">${inv.length} orang sudah mendapat notifikasi di Inbox workspace.</div>`:''}
  <div class="credbox"><div><span class="lbl">Meeting</span><b>${esc(mTitle(m))}</b></div>${list.length>1?`<div><span class="lbl">${list.length} tanggal · ${mJam(m)} WIB</span><div class="mcl">${list.map(x=>`<div class="mcr"><span>${fmtLong(x.date)}</span><span class="sp"></span><a class="btn ghost sm" href="${esc(gcalUrl(x,g,''))}" target="_blank" rel="noopener">Google</a><a class="btn ghost sm" href="${esc(outlookUrl(x,g))}" target="_blank" rel="noopener">Outlook</a></div>`).join('')}</div></div>`:`<div><span class="lbl">Waktu</span><b>${fmtLong(m.date)} · ${mJam(m)} WIB${rr?` <span class="cnt" style="font-weight:600">· berulang ${S.mcalNew}</span>`:''}</b></div>`}
  ${inv.length?`<div><span class="lbl">Diundang (${inv.length})</span><div class="chips" style="margin-top:4px">${inv.map(k=>`<span class="pchip sm">${av(k,16)}${esc(U[k]?U[k].n:k)}</span>`).join('')}</div></div>`:''}</div>
  <div class="hint">${g&&inv.length?'<b>Google Calendar</b>: halaman acara terbuka dengan semua email tamu sudah terisi'+(list.length>1?', satu per tanggal':'')+'. Klik <b>Simpan</b>, lalu pilih <b>Kirim</b> supaya undangan masuk ke kalender masing-masing.':'<b>Google Calendar</b>: menambahkan meeting ini ke kalender Anda sendiri.'} <b>Outlook</b>: sama, untuk yang memakai kalender Outlook / Microsoft 365.</div>
 </div>
 ${list.length>1?'':`<div class="mf"><a class="btn ghost" href="${esc(outlookUrl(m,g))}" target="_blank" rel="noopener">Buka di Outlook</a><a class="btn" href="${esc(gcalUrl(m,g,rr))}" target="_blank" rel="noopener">${I.cal} Buka di Google Calendar</a></div>`}</div></div>`}
function mModal(){const m=S.medit?meets.find(x=>x.id===S.medit):null,isNew=!m;
 const v=m||{kind:S.mmode==='w'?'weekly':'koord',wdept:me().head&&me().dept?me().dept:'rnd',brand:'sft',fd:((LISTS.koord||[]).find(l=>visFolder('koord',l))||{}).id,date:addDays(TODAY,1),time:'09:00',end:'10:30',place:'',agenda:''};if(isNew&&S.mdates==null){S.mmon=monStart();S.mdates=[]}const curWd=m&&m.kind==='weekly'?(m.fd==='wall'?'all':(((fdef('wall',m.fd)||{}).depts||[])[0]||'')):v.wdept;
 const places=[...new Set(['Ruang Meeting Lt. 2','Ruang Meeting Lt. 3','Google Meet','Zoom',...meets.map(x=>x.place).filter(Boolean)])];
 return `<div class="mwrap" data-mclose><form class="modal" id="mf" role="dialog" aria-modal="true" aria-label="${isNew?'Jadwal meeting baru':'Ubah jadwal meeting'}" autocomplete="off">
 <div class="mh"><h2>${isNew?'Jadwal meeting baru':'Ubah jadwal meeting'}</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Batal</button></div>
 <div class="mb">
  <div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Jenis meeting</span>
   <div class="rolepick">${[['koord','Koordinasi','Lintas divisi, per grup'],['monthly','Monthly','Per brand, pilih divisinya'],['weekly','Weekly','Per divisi, bisa diatur Leader']].filter(o=>S.mmode==='w'?o[0]==='weekly':o[0]!=='weekly').map(o=>`<label class="ropt"><input type="radio" name="m-k" value="${o[0]}" ${v.kind===o[0]?'checked':''} ${isNew?'':'disabled'}><span><b>${o[1]}</b><small>${o[2]}</small></span></label>`).join('')}</div></div>
  <div class="fld" id="m-fdw" ${v.kind==='koord'?'':'hidden'}><label for="m-fd">Grup koordinasi</label><select id="m-fd">${(LISTS.koord||[]).filter(l=>visFolder('koord',l)).map(l=>`<option value="${l.id}" ${v.fd===l.id?'selected':''}>${esc(l.n)}</option>`).join('')}</select></div>
  <div class="fld" id="m-wfw" ${v.kind==='weekly'?'':'hidden'}><label for="m-wd">Weekly divisi</label>${canSched()?`<select id="m-wd" ${isNew?'':'disabled'}><option value="all" ${curWd==='all'?'selected':''}>All Dept</option>${Object.keys(DEPTN).map(d=>`<option value="${d}" ${curWd===d?'selected':''}>${esc(DEPTN[d])}</option>`).join('')}</select>`:`<input type="hidden" id="m-wd" value="${esc(me().dept||'')}"><div class="ro"><b>${esc(DEPTN[me().dept]||'')}</b> <span class="cnt">· divisi Anda</span></div>`}</div>
  <div class="fld" id="m-brw" ${v.kind==='monthly'?'':'hidden'}><label for="m-br">Brand</label><select id="m-br">${Object.keys(BR).map(b=>`<option value="${b}" ${v.brand===b?'selected':''}>${esc(BR[b].n)}</option>`).join('')}</select></div>
  <div class="fld" id="m-dpw" ${v.kind==='monthly'?'':'hidden'}><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Divisi yang ikut</span>
   <div class="spgrid">${Object.keys(DEPTN).map(d=>`<label class="ckrow"><input type="checkbox" data-mdpc="${d}" ${!v.depts||!v.depts.length||v.depts.includes(d)?'checked':''}> ${esc(DEPTN[d])}</label>`).join('')}</div>
   <div class="hint">Centang semua untuk Monthly lengkap, atau pilih divisi tertentu kalau meeting dibagi per sesi.</div></div>
  ${isNew?`<div class="fld" id="m-dpk" ${v.kind==='weekly'?'':'hidden'}>${mDpk()}</div>`:''}
  <div class="f2"><div class="fld" id="m-dtw" ${isNew&&v.kind==='weekly'?'hidden':''}><label for="m-dt">Tanggal</label><input type="date" id="m-dt" value="${v.date}"></div>
   <div class="f2"><div class="fld"><label for="m-t1">Mulai</label><input type="time" id="m-t1" value="${v.time}"></div><div class="fld"><label for="m-t2">Selesai</label><input type="time" id="m-t2" value="${v.end}"></div></div></div>
  <div class="fld"><label for="m-pl">Tempat atau link</label><input type="text" id="m-pl" list="m-pls" value="${esc(v.place)}" placeholder="mis. Ruang Meeting Lt. 2 atau link Google Meet"><datalist id="m-pls">${places.map(x=>`<option value="${esc(x)}">`).join('')}</datalist></div>
  <div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Undang Leader / PIC</span>
   <div class="minv" id="m-invw">${mPickInit(v)}</div>
   <select id="m-add" aria-label="Tambah orang lain"><option value="">+ Tambah orang lain…</option>${Object.keys(U).filter(k=>!U[k].off&&U[k].role!=='Guest').map(k=>`<option value="${k}">${esc(U[k].n)} · ${esc(DEPTN[U[k].dept]||U[k].role)}</option>`).join('')}</select>
   <div class="hint">Head divisi yang terlibat otomatis terpilih. Klik nama untuk menambah atau menghapus.</div></div>
  <div class="fld"><label for="m-ag">Agenda <span class="cnt">satu poin per baris</span></label><textarea id="m-ag" placeholder="mis. Update stok promo 11.11">${esc(v.agenda)}</textarea></div>
  ${isNew?`<div class="fld" id="m-rpw" ${v.kind==='weekly'?'hidden':''}><label for="m-rp">Ulangi</label><select id="m-rp"><option value="0">Tidak diulang</option><option value="7:4">Tiap minggu, 4 kali</option><option value="14:3">Tiap 2 minggu, 3 kali</option><option value="m:3">Tiap bulan, 3 kali</option><option value="m:6">Tiap bulan, 6 kali</option></select></div>`:''}
  <div class="mclash" id="mclash" role="status">${mClashTxt(v,m&&m.id)}</div>
 </div><div class="mf"><button class="btn">${isNew?'Simpan jadwal':'Simpan perubahan'}</button></div></form></div>`}
function mPickInit(v){if(S.minv==null)S.minv=v.inv?[...v.inv]:mDefInv(v);const f0=S.minv;const ds=mDepts(v),sel=f0;
 const cand=[...new Set([...Object.keys(U).filter(k=>!U[k].off&&U[k].role!=='Guest'&&ds.includes(U[k].dept)),...sel])].sort((a,b)=>(!!U[b].head-!!U[a].head)||U[a].n.localeCompare(U[b].n));
 return cand.map(k=>`<button type="button" class="pchip ${sel.includes(k)?'on':''}" data-minvu="${k}" aria-pressed="${sel.includes(k)}">${av(k,18)}${esc(U[k].n)}${U[k].head&&U[k].role!=='Admin'?' <small>Head '+esc(DEPTN[U[k].dept]||'')+'</small>':''}</button>`).join('')}
function mClashTxt(x,id){const ds=x.dates&&x.dates.length?x.dates:[x.date];const c=ds.flatMap(d=>mClash(Object.assign({},x,{date:d}),id));return c.length?'Bentrok dengan '+c.map(m=>mTitle(m)+' '+fmt(m.date)+' ('+mJam(m)+')').join(', ')+'. Tetap bisa disimpan.':''}
const addMonths=(d,n)=>{const x=D(d);const t=new Date(x.getFullYear(),x.getMonth()+n,1);const last=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();t.setDate(Math.min(x.getDate(),last));return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0')};
function mForm(){const k=(document.querySelector('input[name="m-k"]:checked')||{}).value||'koord';const dp=[...document.querySelectorAll('[data-mdpc]')].filter(c=>c.checked).map(c=>c.dataset.mdpc);return {kind:k,depts:k==='monthly'&&dp.length<Object.keys(DEPTN).length?dp:[],fd:k==='koord'?$('#m-fd').value:k==='weekly'?($('#m-wd').value==='all'?'wall':((wkFolderOf($('#m-wd').value)||{}).id||'')):'',wdept:k==='weekly'&&$('#m-wd').value!=='all'?$('#m-wd').value:'',dates:k==='weekly'&&!S.medit?[...(S.mdates||[])].sort():null,brand:k==='monthly'?$('#m-br').value:'',date:$('#m-dt').value,time:$('#m-t1').value,end:$('#m-t2').value,place:$('#m-pl').value.trim(),agenda:$('#m-ag').value.trim()}}
function mStart(id){const m=meets.find(x=>x.id===id);if(!m)return;
 if(m.kind==='weekly'){let p=tasks.find(x=>x.space==='wall'&&!x.parent&&x.list===m.fd&&x.meet===m.date);
  if(!p){p=T({space:'wall',list:m.fd,title:WKT(m.date),status:'WORK IN PROGRESS',assignee:S.me,start:m.date,meet:m.date,creator:S.me});p.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'membuat notulen weekly dari jadwal'});tasks.push(p)}
  m.st='selesai';m.task=p.id;go('f:wall:'+m.fd);S.open=p.id;toast('Tambahkan poin hasil weekly sebagai subtask');render();return}
 if(S.qn&&S.qn.created.length&&S.qn.meet!==id){toast('Selesaikan dulu notulen yang sedang berjalan');go('qn');return}
 if(!S.qn||S.qn.meet!==id){qnInit(m.kind==='monthly'?m.brand:undefined,m.kind);S.qn.date=m.date;S.qn.due=eom(m.date);S.qn.meet=id;if(m.kind==='koord')S.qn.fd=m.fd;if(m.kind==='monthly'&&m.depts&&m.depts.length===1){S.qn.div=m.depts[0];S.qn.pic=''}}
 go('qn')}

/* ---------- admin: pengguna & akses ---------- */
const ROLEOPT=[['Admin','Admin','Kelola semua space, user, dan pengaturan'],['Member','Member','Bekerja di space divisinya sendiri'],['Member QMR','Member QMR (Audit)','Buat dan verifikasi task Monthly semua brand'],['Guest','Guest','Hanya space yang di-share ke divisinya']];
function accessOf(u){const xs=u.spaces||[],b=Object.assign({},u,{spaces:[]}),out=[];
 SP.forEach(s=>{if(!visSpace(s,u))return;const fl=(LISTS[s.id]||[]).filter(l=>l.depts&&l.depts.length);
  if(s.meet&&fl.length){(LISTS[s.id]||[]).forEach(l=>{if(visFolder(s.id,l,u))out.push({n:(s.id==='wall'?'Weekly ':'')+(s.id==='koord'?l.n.split(' ')[0]+' Koordinasi':l.n),extra:xs.includes(s.id+':'+l.id)&&!visFolder(s.id,l,b)})})}
  else out.push({n:s.n,extra:xs.includes(s.id)&&!visSpace(s,b)})});
 const mo=u.role==='Admin'||u.role==='Member QMR'?'Monthly semua divisi':u.dept?'Monthly divisi '+DEPTN[u.dept]:'';
 return {mo,list:out}}
function genPw(){const c='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';const a=new Uint32Array(10);crypto.getRandomValues(a);let p='';a.forEach((v,i)=>{p+=c[v%c.length];if(i===4)p+='-'});return p}
function usersPage(){
 const q=(S.uq||'').toLowerCase(),rf=S.urf||'',sf=S.usf||'';
 const ks=Object.keys(U).filter(k=>{const u=U[k];if(q&&!(u.n+' '+u.email).toLowerCase().includes(q))return false;if(rf&&u.role!==rf)return false;if(sf==='on'&&u.off)return false;if(sf==='off'&&!u.off)return false;if(sf==='new'&&!u.pending)return false;if(sf==='off'&&u.pending)return false;return true}).sort((a,b)=>(!!U[b].pending-!!U[a].pending)||(!!U[a].off-!!U[b].off)||U[a].n.localeCompare(U[b].n));
 const all=Object.values(U),act=all.filter(u=>!u.off);
 const tile=(l,v,c)=>`<div class="tile"><span class="lbl">${l}</span><b>${v}</b>${c?`<small>${c}</small>`:''}</div>`;
 return `<main class="main"><div class="top"><button class="menu" data-menu aria-label="Buka menu">☰</button><div style="min-width:0"><div class="crumb">Admin</div><h1>Pengguna &amp; akses</h1></div><span class="sp"></span><span class="hint" style="max-width:340px;text-align:right">Orang baru klik <b>Daftar</b> di halaman masuk, lalu muncul di sini sebagai <b>Menunggu akses</b>.</span></div>
 <div class="content"><div class="dash">
  <div class="tiles">${tile('Pengguna aktif',act.length)}${tile('Admin',act.filter(u=>u.role==='Admin').length)}${tile('Menunggu akses',all.filter(u=>u.pending).length,'sudah daftar, belum diberi role')}${tile('Nonaktif',all.filter(u=>u.off&&!u.pending).length,'tidak bisa masuk')}</div>
  <div class="tb" style="padding:0"><div class="srch">${I.search}<input type="text" id="uq" placeholder="Cari nama atau email…" aria-label="Cari pengguna" value="${esc(S.uq||'')}"></div>
   <select id="urf" aria-label="Role"><option value="">Semua role</option>${ROLEOPT.map(r=>`<option value="${r[0]}" ${rf===r[0]?'selected':''}>${r[1]}</option>`).join('')}</select>
   <select id="usf" aria-label="Status"><option value="">Semua status</option><option value="on" ${sf==='on'?'selected':''}>Aktif</option><option value="new" ${sf==='new'?'selected':''}>Menunggu akses</option><option value="off" ${sf==='off'?'selected':''}>Nonaktif</option></select>
   <span class="sp"></span><span class="cnt">${ks.length} dari ${all.length} pengguna</span></div>
  <div class="tw dtab"><table class="utab"><thead><tr><th>Pengguna</th><th>Role</th><th>Divisi</th><th>Akses</th><th>Status</th><th>Login terakhir</th><th></th></tr></thead><tbody>
  ${ks.map(k=>{const u=U[k],a=accessOf(u);return `<tr class="nohov ${u.off?'uoff':''}"><td><div class="ucell">${av(k,30)}<div style="min-width:0"><b>${esc(u.n)}${k===S.me?' <span class="cnt" style="font-weight:500">(Anda)</span>':''}</b><small>${esc(u.email)}</small></div></div></td>
   <td>${u.pending?'<span class="cnt">—</span>':`<span class="rbadge r-${u.role.replace(/ /g,'')}">${esc(u.role==='Member QMR'?'QMR / Audit':u.role)}</span>`}${u.head&&u.role!=='Admin'?'<span class="chip" style="margin-left:4px">Head</span>':''}</td>
   <td>${esc(DEPTN[u.dept]||'—')}</td>
   <td><div class="chips">${a.mo?`<span class="chip">${esc(a.mo)}</span>`:''}${a.list.slice(0,4).map(x=>`<span class="chip ${x.extra?'carry':''}" ${x.extra?'title="Akses tambahan dari Admin"':''}>${esc(x.n)}${x.extra?' +':''}</span>`).join('')}${a.list.length>4?`<span class="cnt">+${a.list.length-4}</span>`:''}</div></td>
   <td>${u.pending?'<span class="pill" style="--c:var(--p-high)"><i></i>Menunggu akses</span>':u.off?'<span class="pill" style="--c:var(--s-cancel)"><i></i>Nonaktif</span>':false?'':'<span class="pill" style="--c:var(--s-done)"><i></i>Aktif</span>'}</td>
   <td class="num cnt">${u.last?fmt(u.last):'Belum pernah'}</td>
   <td><div class="uact">${u.pending?`<button class="btn sm" data-uedit="${k}">Beri akses</button>`:`<button class="btn ghost sm" data-uedit="${k}">Edit</button>`}${k===S.me||u.pending?'':u.off?`<button class="btn ghost sm" data-uon="${k}">Aktifkan</button>`:`<button class="btn ghost sm dang" data-uoff="${k}">Nonaktifkan</button>`}</div></td></tr>`}).join('')||'<tr><td colspan="7" class="empty">Tidak ada pengguna yang cocok.</td></tr>'}
  </tbody></table></div>
  <p class="hint">Pengguna yang dinonaktifkan tidak bisa login, tapi riwayat task dan komentarnya tetap tersimpan. Yang lupa password bisa klik <b>Lupa password</b> di halaman masuk.</p>
 </div></div></main>`}
const accItems=()=>{const a=[];SP.forEach(s=>{const fl=(LISTS[s.id]||[]).filter(l=>l.depts&&l.depts.length);if(s.meet&&fl.length)fl.forEach(l=>a.push([s.id+':'+l.id,(s.id==='wall'?'Weekly · ':'Koordinasi · ')+l.n]));else a.push([s.id,s.n])});return a};
const accDef=(id,u)=>{if(id.includes(':')){const [sp,l]=id.split(':');return visFolder(sp,fdef(sp,l),u)}return visSpace(spDef(id),u)};
function userModal(){
 const k=S.uedit,u=k?U[k]:{n:'',email:'',role:'Member',dept:'rnd',head:false,spaces:[]},isNew=false;
 const defSp=s=>visSpace(s,Object.assign({},u,{spaces:[]}));
 return `<div class="mwrap" data-mclose><form class="modal" id="uf" role="dialog" aria-modal="true" aria-label="${isNew?'Tambah pengguna':'Edit pengguna'}" autocomplete="off">
 <div class="mh"><h2>${u.pending?'Beri akses':'Edit pengguna'}</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Batal</button></div>
 <div class="mb">
  <div class="f2"><div class="fld"><label for="u-n">Nama lengkap</label><input type="text" id="u-n" value="${esc(u.n)}" required></div>
   <div class="fld"><label for="u-e">Email login</label><input type="text" id="u-e" value="${esc(u.email)}" readonly title="Email mengikuti akun yang didaftarkan"></div></div>
  <div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Role</span><div class="rolepick">${ROLEOPT.map(r=>`<label class="ropt"><input type="radio" name="u-r" value="${r[0]}" ${u.role===r[0]?'checked':''} ${k===S.me?'disabled':''}><span><b>${r[1]}</b><small>${r[2]}</small></span></label>`).join('')}</div>${k===S.me?'<div class="hint">Role akun Anda sendiri tidak bisa diubah dari sini.</div>':''}</div>
  <div class="f2" id="u-dw"><div class="fld"><label for="u-d">Divisi</label><select id="u-d"><option value="">— Tidak ada —</option>${Object.keys(DEPTN).map(d=>`<option value="${d}" ${u.dept===d?'selected':''}>${esc(DEPTN[d])}</option>`).join('')}</select></div>
   <label class="fld" id="u-hw" style="justify-content:flex-end" ${u.role!=='Member'?'hidden':''}><span class="ckrow"><input type="checkbox" id="u-h" ${u.head?'checked':''}> Head divisi <small class="cnt">(bisa tambah folder internal)</small></span></label></div>
  <div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Akses space</span>
   <div class="spgrid">${accItems().map(([id,n])=>{const d=accDef(id,Object.assign({},u,{spaces:[]}));return `<label class="ckrow ${d?'auto':''}"><input type="checkbox" data-usp="${id}" ${d||(u.spaces||[]).includes(id)?'checked':''} ${d?'disabled':''}> ${esc(n)}${d?' <small class="cnt">otomatis</small>':''}</label>`}).join('')}</div>
   <div class="hint">"Otomatis" mengikuti role dan divisi. Centang lainnya untuk memberi akses tambahan.</div></div>
  ${isNew?`<div class="fld pwbox"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Password awal</span>
   <label class="ckrow"><input type="radio" name="u-pm" value="auto" checked> Buat password sementara otomatis</label>
   <label class="ckrow"><input type="radio" name="u-pm" value="manual"> Tentukan sendiri</label>
   <input type="text" id="u-pw" placeholder="Minimal 8 karakter, kombinasi huruf dan angka" hidden autocomplete="new-password">
   <label class="ckrow"><input type="checkbox" id="u-mc" checked> Wajib ganti password saat login pertama</label></div>`:''}
  <div class="uerr late" id="uerr" role="alert"></div>
 </div>
 <div class="mf"><button class="btn">${u.pending?'Beri akses':'Simpan perubahan'}</button></div></form></div>`}
function updSp(){const rr=document.querySelector('input[name="u-r"]:checked'),role=rr?rr.value:'Member',dept=$('#u-d').value;const tu={role,dept:dept||undefined,spaces:[]};
 document.querySelectorAll('[data-usp]').forEach(c=>{const d=accDef(c.dataset.usp,tu),lab=c.parentElement;
  if(d){if(!c.disabled)c.dataset.man=c.checked?1:'';c.checked=true;c.disabled=true}else if(c.disabled){c.disabled=false;c.checked=!!c.dataset.man}
  lab.classList.toggle('auto',d);let sm=lab.querySelector('small');if(d&&!sm){sm=document.createElement('small');sm.className='cnt';sm.textContent=' otomatis';lab.appendChild(sm)}if(!d&&sm)sm.remove()})}
function credModal(){const c=S.cred;const txt=`Akun Intinya Workspace\nNama: ${c.name}\nEmail: ${c.email}\nPassword ${c.mc?'sementara':''}: ${c.pw}${c.mc?'\nSilakan ganti password setelah login pertama.':''}`;
 return `<div class="mwrap"><div class="modal" role="dialog" aria-modal="true" aria-label="Detail login"><div class="mh"><h2>${c.reset?'Password direset':'Akun dibuat'}</h2></div>
 <div class="mb"><div class="hint">Kirim detail ini ke ${esc(c.name)} lewat jalur pribadi. Password <b>hanya tampil sekali</b> dan tidak bisa dilihat lagi setelah jendela ini ditutup.</div>
 <div class="credbox"><div><span class="lbl">Email</span><b>${esc(c.email)}</b></div><div><span class="lbl">Password ${c.mc?'sementara':''}</span><b class="mono" style="font-size:16px">${esc(c.pw)}</b></div></div>
 <textarea id="credtxt" readonly hidden>${esc(txt)}</textarea></div>
 <div class="mf"><button class="btn ghost" data-ccopy>Salin detail login</button><button class="btn" data-mx>Selesai</button></div></div></div>`}
function home(){
 const vis=tasks.filter(visTask),open=vis.filter(t=>!done(t)),od=open.filter(late);
 const wk=open.filter(t=>t.due&&days(t.due)<=0&&days(t.due)>=-7).sort((a,b)=>a.due<b.due?-1:1);
 const doneM=vis.filter(t=>t.status==='DONE'&&t.due&&t.due.slice(0,7)===TODAY.slice(0,7)).length;
 const mineOpen=open.filter(t=>isMine(t));
 const h=new Date().getHours(),sal=h<11?'Selamat pagi':h<15?'Selamat siang':h<18?'Selamat sore':'Selamat malam';
 const d=D(TODAY);
 const people=[...new Set(open.map(t=>t.assignee))].filter(Boolean).sort((a,b)=>U[a].n.localeCompare(U[b].n));
 const maxP=Math.max(1,...people.map(p=>open.filter(t=>t.assignee===p).length));
 const acts=[];vis.forEach(t=>t.feed.forEach(f=>acts.push({t,f})));const rec=acts.slice(-6).reverse();
 const row=t=>`<button class="trow" data-open="${t.id}">${ico(t)}<span class="x">${esc(t.title)}</span>${av(t.assignee)}<span class="num ${late(t)?'late':'cnt'}" style="min-width:74px;text-align:right">${dueTxt(t)}</span></button>`;
 return `<div class="home">
 <div class="hello"><h2>${sal}, ${esc(fname(me().n))}</h2><p>${HARI[d.getDay()]}, ${d.getDate()} ${MONL[d.getMonth()]} ${d.getFullYear()} · ${mineOpen.length} task terbuka atas nama Anda</p></div>
 <div class="tiles">
  <button class="tile" data-nav="mine"><span class="lbl">Tugas saya</span><b>${mineOpen.length}</b><small>${mineOpen.filter(late).length} lewat due date</small></button>
  <div class="tile alert"><span class="lbl">Lewat due date</span><b>${od.length}</b><small>dari ${open.length} task terbuka</small></div>
  <div class="tile"><span class="lbl">Jatuh tempo 7 hari</span><b>${wk.length}</b><small>sampai ${fmt(new Date(d.getTime()+7*864e5).toISOString().slice(0,10))}</small></div>
  <div class="tile"><span class="lbl">Selesai bulan ini</span><b>${doneM}</b><small>status DONE, due ${MONL[d.getMonth()]}</small></div>
 </div>
 <div class="panel"><h3>Sebaran status <span class="cnt">${vis.length} task yang bisa Anda lihat</span></h3>
  <div class="stack" role="img" aria-label="Sebaran status">${ST_ALL.map(([s,c])=>{const n=vis.filter(t=>t.status===s).length;return n?`<i style="width:${n/vis.length*100}%;background:var(${c})" title="${s}: ${n}"></i>`:''}).join('')}</div>
  <div class="legend">${ST_ALL.filter(([x])=>vis.some(t=>t.status===x)).map(([s,c])=>`<span><i class="dot" style="--c:var(${c})"></i>${s} <b>${vis.filter(t=>t.status===s).length}</b></span>`).join('')}</div></div>
 <div class="grid2">
  ${me().role!=='Guest'?`<div class="panel"><h3>Meeting berikutnya<span class="cnt">${meets.filter(m=>m.st==='jadwal'&&m.date>=TODAY&&mVis(m)).length}</span><span class="sp"></span><button class="link" data-nav="jadwal">Lihat jadwal</button></h3>${meets.filter(m=>m.st==='jadwal'&&m.date>=TODAY&&mVis(m)).sort(byDT).slice(0,5).map(m=>`<button class="trow" data-nav="${mNav(m)}"><span class="sq" style="background:${mColor(m)};width:18px;height:18px;border-radius:5px;display:inline-grid;place-items:center;color:#fff;font-size:10px;font-weight:800">${m.kind==='monthly'?esc(((BR[m.brand]||{n:'M'}).n)[0]):m.kind==='weekly'?'W':'K'}</span><span class="x">${esc(mTitle(m))}</span>${(m.inv||[]).includes(S.me)?'<span class="chip carry">Diundang</span>':''}<span class="num cnt" style="text-align:right">${m.date===TODAY?'Hari ini':HARI[D(m.date).getDay()].slice(0,3)+', '+fmt(m.date)} · ${m.time}</span></button>`).join('')||'<div class="empty">Belum ada meeting terjadwal.</div>'}</div>`:''}
  <div class="panel"><h3><span class="late">Lewat due date</span><span class="cnt">${od.length}</span></h3>${od.sort((a,b)=>a.due<b.due?-1:1).map(row).join('')||'<div class="empty">Tidak ada task yang terlambat.</div>'}</div>
  <div class="panel"><h3>Jatuh tempo minggu ini<span class="cnt">${wk.length}</span></h3>${wk.map(row).join('')||'<div class="empty">Tidak ada due date dalam 7 hari.</div>'}</div>
  <div class="panel"><h3>Beban kerja tim <span class="cnt">task terbuka per orang, urut nama</span></h3>
   ${people.map(p=>{const pt=open.filter(t=>t.assignee===p);return `<div class="wl"><div class="who">${av(p)}<span>${esc(U[p].n)}</span></div><div class="stack" style="height:10px;width:${pt.length/maxP*100}%">${ST_ALL.map(([s,c])=>{const n=pt.filter(t=>t.status===s).length;return n?`<i style="width:${n/pt.length*100}%;background:var(${c})" title="${s}: ${n}"></i>`:''}).join('')}</div><span class="num cnt">${pt.length}${pt.filter(late).length?` <span class="late">· ${pt.filter(late).length}</span>`:''}</span></div>`}).join('')||'<div class="empty">Belum ada task terbuka.</div>'}
   <div class="hint">Angka merah = jumlah task terlambat.</div></div>
  <div class="panel"><h3>Aktivitas terbaru</h3>${rec.map(({t,f})=>`<button class="trow" data-open="${t.id}" style="align-items:flex-start">${av(f.w)}<div style="min-width:0;flex:1"><div class="act"><span><b>${esc(U[f.w].n)}</b> ${f.k==='c'?'berkomentar di':f.a===''?esc(f.b):'mengubah '+esc(f.f)+' di'} <b>${esc(t.title)}</b></span></div><small class="cnt">${esc(spLabel(t))} · ${f.t}</small></div></button>`).join('')||'<div class="empty">Belum ada aktivitas.</div>'}</div>
 </div></div>`}

/* ---------- inbox ---------- */
function inboxView(){
 const rows=inbox.filter(i=>i.u===S.me&&i.tab===S.tab&&(S.ireadf==='all'||(S.ireadf==='un'&&!i.read)||(S.ireadf==='rd'&&i.read)));
 const un=tb=>inbox.filter(i=>i.u===S.me&&i.tab===tb&&!i.read).length;
 return `<div class="tabs"><button data-tab="m" class="${S.tab==='m'?'on':''}">Mention <span class="cnt">${un('m')}</span></button><button data-tab="u" class="${S.tab==='u'?'on':''}">Update tugas <span class="cnt">${un('u')}</span></button></div>
 <div class="tb"><select id="ireadf" aria-label="Filter"><option value="all" ${S.ireadf==='all'?'selected':''}>Semua</option><option value="un" ${S.ireadf==='un'?'selected':''}>Belum dibaca</option><option value="rd" ${S.ireadf==='rd'?'selected':''}>Sudah dibaca</option></select>
 <span class="sp"></span><button class="btn ghost" data-readall>Tandai semua dibaca</button><button class="btn ghost" data-clear>Bersihkan yang sudah dibaca</button></div>
 <div class="content"><div class="inbox">${rows.map(i=>{if(i.meet){const m=meets.find(x=>x.id===i.meet);if(!m)return'';return `<button class="irow ${i.read?'':'unread'}" data-inb="${inbox.indexOf(i)}">${av(i.who,30)}<div class="tx"><b>${esc(mTitle(m))}</b><span>${esc((U[i.who]||{n:''}).n)} · ${esc(i.x)}</span><br><small>Jadwal meeting · ${i.t}</small></div></button>`}
  const t=tasks.find(x=>x.id===i.task);if(!t)return'';
  return `<button class="irow ${i.read?'':'unread'}" data-inb="${inbox.indexOf(i)}">${av(i.who,30)}<div class="tx"><b>${esc(t.title)}${i.n>1?`<span class="grpn">${i.n} pembaruan</span>`:''}</b><span>${esc(U[i.who].n)} · ${esc(i.x)}</span><br><small>${spLabel(t)} · ${i.t}</small></div></button>`}).join('')||'<div class="empty" style="padding:40px 0">Inbox kosong. Hanya mention dan perkembangan tugas Anda yang masuk ke sini.</div>'}</div></div>`}

/* ---------- main ---------- */
function main(){
 const top=(crumb,h1,right)=>`<div class="top"><button class="menu" data-menu aria-label="Buka menu">☰</button><div style="min-width:0"><div class="crumb">${crumb}</div><h1>${h1}</h1></div><span class="sp"></span>${right||''}</div>`;
 const newBtn=`<button class="btn" data-new ${addSpaces().length?'':'disabled title="Anda tidak bisa membuat task"'}>${I.plus}Task baru</button>`;
 if(S.nav==='users')return me().role==='Admin'?usersPage():'';
 if(S.nav==='qn')return canAdd('monthly')?qnPage():'';
 if(S.nav==='jadwal'||S.nav==='jadwalw')return me().role!=='Guest'?jadwalPage(S.nav==='jadwalw'):'';
 if(S.nav==='dash')return `<main class="main">${top('Intinya Group','Dashboard keseluruhan',newBtn)}<div class="content">${overall()}</div></main>`;
 if(S.nav==='home')return `<main class="main">${top('Intinya Group','Beranda',newBtn)}<div class="content">${home()}</div></main>`;
 if(S.nav==='inbox')return `<main class="main">${top('Notifikasi','Inbox')}${inboxView()}</main>`;
 const mo=isMo(),mine=S.nav==='mine',sp=mo?'monthly':mine?null:navSpace(),sdef=sp&&spDef(sp);
 const vw=S.view==='dash'&&sp!=='irnd'&&!mo?'board':S.view;
 const all=scope(),ts=all.filter(fOK),od=all.filter(late).length;
 const people=[...new Set(all.map(t=>t.assignee))].filter(Boolean);const tags=[...new Set(all.flatMap(t=>t.tags))].sort();
 const crumb=mo?(me().role==='Admin'||me().role==='Member QMR'?'Bulanan '+TODAY.slice(0,4)+' · lintas divisi, dikelola QMR':'Bulanan '+TODAY.slice(0,4)+' · hanya divisi '+DEPTN[me().dept]):mine?'Semua space yang bisa Anda lihat':sdef.internal?I.lock+' Internal tim · hanya anggota '+DEPTN[sdef.dept]+' dan Admin':sdef.meet?(navList()&&fdef(sp,navList())&&fdef(sp,navList()).depts?I.lock+' Meeting · hanya divisi terlibat, Admin, dan QMR':'Meeting · semua divisi kecuali Guest'):'Weekly · '+(sdef.priv?I.lock+' Private':'Di-share ke Guest');
 const h1=(mo?'Monthly '+BR[moBr()].n+(moDp()?` <span class="cnt" style="font-weight:600">/</span> ${esc(DEPTN[moDp()])}`:''):mine?'Tugas saya':esc(sdef.n)+(navList()?` <span class="cnt" style="font-weight:600">/</span> ${esc(listName(sp,navList()))}`:''))+(od?` <span class="late" style="font-size:13px;font-weight:700">· ${od} lewat due</span>`:'');
 const filt=S.q||S.fa||S.fp||S.ft||S.mine||S.fv||S.finc;
 return `<main class="main">${top(crumb,h1,(navList()&&fdef(sp,navList())&&canShareF(sp,fdef(sp,navList()))?`<button class="btn ghost" data-fshare>${I.users}Bagikan</button> `:'')+((mo||sp==='koord')&&canAdd('monthly')?`<button class="btn ghost" data-qnb="${mo?moBr():'koord'}">${I.note}Catat notulen</button> `:'')+newBtn)}
 <div class="tabs" role="tablist">${[...(sp==='irnd'||mo?[['dash','Dashboard',I.chart]]:[]),['board','Board',I.board],['list','List',I.list],['cal','Kalender',I.cal]].map(([k,l,ic])=>`<button role="tab" aria-selected="${vw===k}" data-view="${k}" class="${vw===k?'on':''}">${ic}${l}</button>`).join('')}</div>
 <div class="tb" ${vw==='dash'?'hidden':''}><div class="srch">${I.search}<input type="text" id="q" placeholder="Cari judul atau tag…" aria-label="Cari task" value="${esc(S.q)}"></div>
  ${mine?'':`<select id="fa" aria-label="Assignee"><option value="">Semua assignee</option>${people.map(p=>`<option value="${p}" ${S.fa===p?'selected':''}>${esc(U[p].n)}</option>`).join('')}</select>`}
  <select id="fp" aria-label="Priority"><option value="">Semua priority</option>${Object.keys(PR).map(p=>`<option value="${p}" ${S.fp===p?'selected':''}>${PR[p][0]}</option>`).join('')}</select>
  <select id="ft" aria-label="Tag"><option value="">Semua tag</option>${tags.map(t=>`<option ${S.ft===t?'selected':''}>${esc(t)}</option>`).join('')}</select>
  ${mine?'':`<button class="tog ${S.mine?'on':''}" data-mine aria-pressed="${S.mine}">Hanya saya</button>`}
  ${mo&&canAdd('monthly')&&all.some(t=>!t.assignee||!t.dept)?`<button class="tog ${S.finc?'on':''}" data-finc aria-pressed="${!!S.finc}">Belum lengkap <span class="cnt">${all.filter(t=>!t.assignee||!t.dept).length}</span></button>`:''}
  ${mo?`<button class="tog ${S.fv?'on':''}" data-fv aria-pressed="${!!S.fv}">Perlu verifikasi <span class="cnt">${all.filter(t=>t.status==='DONE'&&t.verif&&t.verif.st==='menunggu').length}</span></button>`:''}
  ${vw==='list'?`<div class="seg" role="group" aria-label="Kelompokkan">${mo?`<button data-lg="bulan" class="${grp()==='bulan'?'on':''}">Per bulan</button>`:''}<button data-lg="status" class="${grp()==='status'?'on':''}">Per status</button><button data-lg="parent" class="${grp()==='parent'?'on':''}">${isMeet()?(sp==='koord'?'Per koordinasi':'Per weekly'):'Per parent task'}</button></div>`:''}
  ${filt?'<button class="link" data-clr>Hapus filter</button>':''}<span class="sp"></span><span class="cnt">${ts.length} dari ${all.length} task</span></div>
 

 <div class="content">${vw==='dash'?(mo?moDash(all):dash()):vw==='board'?board(ts,sp):vw==='list'?list(ts):calendar(ts)}</div></main>`}

/* ---------- dashboard internal (mengikuti Tracker Project Sistem R&D) ---------- */
const SLAC={'On Track':'--s-done','At Risk':'--p-high','Overdue':'--danger','No Due Date':'--s-not','Selesai Tepat Waktu':'--s-done','Selesai Terlambat':'--s-qmr','Selesai (No Due)':'--s-not','Cancelled':'--s-cancel'};
function sla(t){if(t.status==='CANCEL')return'Cancelled';if(t.status==='DONE')return(!t.due||!t.fin)?'Selesai (No Due)':t.fin<=t.due?'Selesai Tepat Waktu':'Selesai Terlambat';if(!t.due)return'No Due Date';const n=days(t.due);return n>0?'Overdue':-n<=7?'At Risk':'On Track'}
const slaH=t=>{const x=typeof t==='string'?t:sla(t);return `<span class="pill" style="--c:var(${SLAC[x]})"><i></i>${x}</span>`};
const dd=(a,b)=>Math.round((D(b)-D(a))/864e5);
const telat=t=>!t.due?0:t.status==='DONE'?(t.fin&&t.fin>t.due?dd(t.due,t.fin):0):t.status==='CANCEL'?0:Math.max(0,days(t.due));
const opts=(a,v)=>(v&&!a.includes(v)?[v,...a]:a).map(x=>`<option ${x===v?'selected':''}>${esc(x)}</option>`).join('');
const PO={urgent:0,high:1,normal:2,low:3};
function dash(){
 const [y,m]=S.dm.split('-').map(Number);
 const rng=(yy,mm)=>{const a=yy+'-'+String(mm).padStart(2,'0');return [a+'-01',a+'-'+String(new Date(yy,mm,0).getDate()).padStart(2,'0')]};
 const [ms,me2]=rng(y,m);const inR=(d,a,b)=>d&&d>=a&&d<=b;const inM=d=>inR(d,ms,me2);
 const L=navList(),P=tasks.filter(t=>t.space==='irnd'&&!t.parent&&(!L||t.list===L)&&visTask(t)),K=tasks.filter(t=>t.space==='irnd'&&t.parent&&(!L||t.list===L)&&visTask(t));
 const op=t=>!done(t);const kOf=p=>K.filter(k=>k.parent===p.id);
 const avg=a=>a.length?(a.reduce((u,v)=>u+v,0)/a.length).toFixed(1)+' hr':'–';
 const rate=a=>{const tp=a.filter(t=>sla(t)==='Selesai Tepat Waktu').length,tl=a.filter(t=>sla(t)==='Selesai Terlambat').length;return tp+tl?Math.round(tp/(tp+tl)*100)+'%':'–'};
 const lead=p=>p.fin&&p.start?dd(p.start,p.fin):null;
 const aktif=(p,a,b)=>kOf(p).some(k=>k.start&&k.start<=b)&&(op(p)||(p.fin&&p.fin>=a));
 const kAktif=(k,a,b)=>k.start&&k.start<=b&&(op(k)||(k.fin&&k.fin>=a));
 const pOpen=P.filter(op),pFinM=P.filter(p=>p.status==='DONE'&&inM(p.fin)),kFinM=K.filter(k=>k.status==='DONE'&&inM(k.fin));
 const tile=(l,v,c,cls)=>`<div class="tile ${cls||''}"><span class="lbl">${l}</span><b>${v}</b>${c?`<small>${c}</small>`:''}</div>`;
 const MSEL=`<select id="dmo" aria-label="Bulan">${MONL.map((n,i)=>`<option value="${i+1}" ${i+1===m?'selected':''}>${n}</option>`).join('')}</select><select id="dyr" aria-label="Tahun">${[+TODAY.slice(0,4)-1,+TODAY.slice(0,4),+TODAY.slice(0,4)+1].map(v=>`<option ${v===y?'selected':''}>${v}</option>`).join('')}</select>`;
 // PIC
 const pics=[...new Set([...K.map(k=>k.assignee),...P.map(p=>p.assignee)].filter(Boolean))].sort((a,b)=>U[a].n.localeCompare(U[b].n));
 const picRow=u=>{const ku=K.filter(k=>k.assignee===u);return [P.filter(p=>p.assignee===u&&op(p)).length,new Set(ku.filter(k=>{const p=tasks.find(x=>x.id===k.parent);return p&&op(p)}).map(k=>k.parent)).size,ku.filter(op).length,ku.filter(k=>op(k)&&sla(k)==='Overdue').length,ku.filter(k=>op(k)&&sla(k)==='At Risk').length,ku.filter(k=>k.status==='HOLD').length,ku.filter(k=>kAktif(k,ms,me2)).length,ku.filter(k=>k.status==='DONE'&&inM(k.fin)).length]};
 const rows=pics.map(u=>[u,picRow(u)]);const tot=rows.reduce((a,[,r])=>a.map((v,i)=>v+r[i]),[0,0,0,0,0,0,0,0]);
 // tabel project & task open
 const pList=pOpen.slice().sort((a,b)=>(PO[a.pri]-PO[b.pri])||((a.due||'9999')<(b.due||'9999')?-1:1));
 const kList=K.filter(op).sort((a,b)=>{const ka=(a.status==='HOLD'?2e5:0)+(a.due?D(a.due)/864e5:1e5),kb=(b.status==='HOLD'?2e5:0)+(b.due?D(b.due)/864e5:1e5);return ka-kb});
 // tren
 const tr=MONL.map((n,i)=>{const [a,b]=rng(y,i+1);const fin=P.filter(p=>p.status==='DONE'&&inR(p.fin,a,b));return {n:MON[i],masuk:P.filter(p=>inR(p.start,a,b)).length,aktif:P.filter(p=>aktif(p,a,b)).length,sel:fin.length,tp:fin.filter(p=>sla(p)==='Selesai Tepat Waktu').length,tl:fin.filter(p=>sla(p)==='Selesai Terlambat').length,ks:K.filter(k=>k.status==='DONE'&&inR(k.fin,a,b)).length,lt:avg(fin.map(lead).filter(v=>v!=null))}});
 const mx=Math.max(1,...tr.map(r=>Math.max(r.masuk,r.sel)));
 // komposisi
 const cnt=(arr,f,labels)=>{const c={};arr.forEach(x=>{const k=f(x)||'(kosong)';c[k]=(c[k]||0)+1});return (labels||Object.keys(c).sort((a,b)=>c[b]-c[a])).filter(k=>c[k]).map(k=>[k,c[k]])};
 const comp=(title,data,colorOf)=>{const tt=data.reduce((a,[,v])=>a+v,0)||1;return `<div class="panel"><h3>${title}</h3>${data.map(([k,v])=>`<div class="crow"><span>${esc(k)}</span><span class="b"><i style="width:${v/tt*100}%;background:var(${colorOf?colorOf(k):'--navy'})"></i></span><b class="num">${v}</b><span class="num cnt">${Math.round(v/tt*100)}%</span></div>`).join('')||'<div class="empty">Belum ada data.</div>'}</div>`};
 const stLabel=p=>!kOf(p).length&&!p.khusus?'BELUM ADA TASK':p.status;
 const areas=[...new Set(P.map(p=>p.area||'(kosong)'))].sort();
 const qc=[['Project tanpa task',P.filter(p=>!kOf(p).length).length],['Nama project dobel',P.length-new Set(P.map(p=>p.title.trim().toLowerCase())).size],['Project tanpa Tgl Request',P.filter(p=>!p.start).length],['Project open tanpa Due',pOpen.filter(p=>!p.due).length],['Task tanpa PIC',K.filter(k=>!k.assignee).length],['Task open tanpa Due',K.filter(k=>op(k)&&!k.due).length],['Task In Progress/Review tanpa Tgl Mulai',K.filter(k=>['IN PROGRESS','REVIEW/UAT'].includes(k.status)&&!k.start).length],['Task Done tanpa Tgl Selesai',K.filter(k=>k.status==='DONE'&&!k.fin).length],['Task dengan Tgl Selesai sebelum Tgl Mulai',K.filter(k=>k.fin&&k.start&&k.fin<k.start).length],['Task hasil migrasi ClickUp (belum dipecah)',K.filter(k=>/migrasi clickup/i.test(k.title)).length]];
 const pname=u=>U[u]?esc(U[u].n):'<span class="late">Tanpa PIC</span>';
 return `<div class="dash">
 <div class="dhead"><h2>Dashboard ${navList()?esc(listName('irnd',navList())):'Project R&amp;D'}</h2><span class="sp"></span><span class="cnt">Periode</span>${MSEL}<span class="cnt num">${fmt(ms)} – ${fmt(me2)} ${y}</span></div>
 <section><p class="sech">Ringkasan project · semua data, kondisi hari ini</p><div class="tiles">
  ${tile('Total project',P.length)}${tile('Belum selesai (open)',pOpen.length)}${tile('Selesai (done)',P.filter(p=>p.status==='DONE').length)}${tile('Overdue',pOpen.filter(p=>sla(p)==='Overdue').length,'','alert')}
  ${tile('At risk',pOpen.filter(p=>sla(p)==='At Risk').length,'due ≤ 7 hari')}${tile('Hold',P.filter(p=>p.status==='HOLD').length)}${tile('On-time rate',rate(P),'project selesai dengan tgl selesai')}${tile('Avg lead time',avg(P.map(lead).filter(v=>v!=null)),'tgl request → selesai')}</div></section>
 <section><p class="sech">Ringkasan project bulan ${MONL[m-1]} ${y}</p><div class="tiles">
  ${tile('Project masuk',P.filter(p=>inM(p.start)).length)}${tile('Project aktif',P.filter(p=>aktif(p,ms,me2)).length)}${tile('Project selesai',pFinM.length)}${tile('Selesai tepat waktu',pFinM.filter(p=>sla(p)==='Selesai Tepat Waktu').length)}
  ${tile('Selesai terlambat',pFinM.filter(p=>sla(p)==='Selesai Terlambat').length)}${tile('On-time rate bulan ini',rate(pFinM))}${tile('Avg lead time',avg(pFinM.map(lead).filter(v=>v!=null)))}${tile('Due bulan ini, belum selesai',pOpen.filter(p=>inM(p.due)).length,'','alert')}</div></section>
 <section><p class="sech">Ringkasan task</p><div class="tiles">
  ${tile('Total task',K.length)}${tile('Task open',K.filter(op).length)}${tile('Task overdue',K.filter(k=>op(k)&&sla(k)==='Overdue').length,'','alert')}${tile('Task at risk',K.filter(k=>op(k)&&sla(k)==='At Risk').length)}
  ${tile('Task selesai bulan ini',kFinM.length)}${tile('On-time task bulan ini',rate(kFinM))}${tile('Avg durasi task selesai',avg(kFinM.filter(k=>k.start).map(k=>dd(k.start,k.fin))))}${tile('Task tanpa PIC',K.filter(k=>!k.assignee).length,'',K.some(k=>!k.assignee)?'alert':'')}</div></section>
 <section><p class="sech">Kinerja per PIC · berbasis task, urut nama</p><div class="tw dtab"><table><thead><tr><th>PIC</th><th>Owner project (open)</th><th>Project terlibat (open)</th><th>Task open</th><th>Task overdue</th><th>Task at risk</th><th>Task hold</th><th>Task aktif (${MON[m-1]})</th><th>Task selesai (${MON[m-1]})</th></tr></thead><tbody>
  ${rows.map(([u,r])=>`<tr class="nohov"><td><span class="ic">${av(u)} ${esc(U[u].n)}</span></td>${r.map((v,i)=>`<td class="num ${(i===3&&v)?'late':''}">${v}</td>`).join('')}</tr>`).join('')}
  <tr class="tot nohov"><td>TOTAL</td>${tot.map((v,i)=>`<td class="num">${i===1?'—':v}</td>`).join('')}</tr></tbody></table></div>
  <p class="hint">Project terlibat = jumlah project open yang orang tersebut punya minimal 1 task. Project kolaborasi terhitung di tiap PIC, jadi TOTAL tidak dijumlahkan.</p></section>
 <section><p class="sech">Project belum selesai · urut priority, lalu due</p><div class="tw dtab"><table><thead><tr><th>#</th><th>Nama project</th><th>Owner</th><th>Company</th><th>Jenis</th><th>Status</th><th>Priority</th><th>Due</th><th>Progress task</th><th>SLA</th></tr></thead><tbody>
  ${pList.map((p,i)=>{const ks=kOf(p).filter(k=>k.status!=='CANCEL'),dn=ks.filter(k=>k.status==='DONE').length;return `<tr data-open="${p.id}"><td class="num cnt">${i+1}</td><td class="ti"><span class="tcell">${ico(p)}<span>${esc(p.title)}</span></span></td><td>${pname(p.assignee)}</td><td>${esc(p.co)}</td><td class="cnt">${esc(p.jenis)}</td><td>${pill(stLabel(p))}</td><td>${flag(p.pri)}</td><td class="num ${late(p)?'late':''}">${p.due?fmt(p.due)+(telat(p)?` <small>+${telat(p)} hr</small>`:''):'–'}</td><td><div class="pbar"><span class="bar"><i style="width:${ks.length?dn/ks.length*100:0}%"></i></span><span class="num cnt">${dn}/${ks.length}</span></div></td><td>${slaH(p)}</td></tr>`}).join('')||'<tr><td colspan="10" class="empty">Semua project selesai.</td></tr>'}</tbody></table></div></section>
 <section><p class="sech">Task belum selesai · urut due terdekat / terlambat, hold di akhir</p><div class="tw dtab"><table><thead><tr><th>#</th><th>Project</th><th>Tahap</th><th>Detail task</th><th>PIC</th><th>Status</th><th>Mulai</th><th>Due</th><th>Hari telat</th></tr></thead><tbody>
  ${kList.map((k,i)=>{const p=tasks.find(x=>x.id===k.parent);return `<tr data-open="${k.id}"><td class="num cnt">${i+1}</td><td>${esc(p?p.title:'')}</td><td class="cnt">${esc(k.tahap)}</td><td class="ti"><span class="tcell">${ico(k)}<span>${esc(k.title)}</span></span></td><td>${pname(k.assignee)}</td><td>${pill(k.status)}</td><td class="num">${fmt(k.start)||'–'}</td><td class="num">${fmt(k.due)||'–'}</td><td class="num ${telat(k)?'late':'cnt'}">${telat(k)||'–'}</td></tr>`}).join('')}</tbody></table></div></section>
 <section><p class="sech">Tren per bulan · ${y}</p><div class="grid2">
  <div class="panel"><h3>Project masuk vs selesai</h3><div class="tren" role="img" aria-label="Project masuk dan selesai per bulan">${tr.map(r=>`<div class="m"><div class="bs"><i style="height:${r.masuk/mx*100}%;background:var(--navy)" title="${r.n}: ${r.masuk} masuk"></i><i style="height:${r.sel/mx*100}%;background:var(--orange)" title="${r.n}: ${r.sel} selesai"></i></div><small>${r.n}</small></div>`).join('')}</div>
   <div class="legend"><span><i class="dot" style="--c:var(--navy)"></i>Masuk</span><span><i class="dot" style="--c:var(--orange)"></i>Selesai</span><span>Skala maks ${mx}</span></div></div>
  <div class="tw dtab"><table style="min-width:520px"><thead><tr><th>Bulan</th><th>Masuk</th><th>Aktif</th><th>Selesai</th><th>Tepat</th><th>Terlambat</th><th>Task selesai</th><th>Avg lead</th></tr></thead><tbody>
  ${tr.map((r,i)=>`<tr class="nohov ${i+1===m?'cur':''}"><td>${r.n}</td><td class="num">${r.masuk}</td><td class="num">${r.aktif}</td><td class="num">${r.sel}</td><td class="num">${r.tp}</td><td class="num">${r.tl}</td><td class="num">${r.ks}</td><td class="num cnt">${r.lt}</td></tr>`).join('')}
  <tr class="tot nohov"><td>TOTAL</td><td class="num">${tr.reduce((a,r)=>a+r.masuk,0)}</td><td class="num">—</td><td class="num">${tr.reduce((a,r)=>a+r.sel,0)}</td><td class="num">${tr.reduce((a,r)=>a+r.tp,0)}</td><td class="num">${tr.reduce((a,r)=>a+r.tl,0)}</td><td class="num">${tr.reduce((a,r)=>a+r.ks,0)}</td><td></td></tr></tbody></table></div></div>
  <p class="hint">Project aktif = sudah ada task yang mulai sampai akhir bulan itu, dan belum selesai sebelum bulan itu.</p></section>
 <section><p class="sech">Komposisi project · semua data</p><div class="comp">
  ${comp('Status project',cnt(P,stLabel,[...ST_IRND,'BELUM ADA TASK']),k=>k==='BELUM ADA TASK'?'--danger':stc(k))}
  ${comp('Jenis',cnt(P,p=>p.jenis))}
  ${comp('Priority',cnt(P,p=>PR[p.pri][0],['Urgent','High','Normal','Low']),k=>PR[k.toLowerCase()][1])}
  ${comp('Produk / area',cnt(P,p=>p.area))}
  ${comp('Status SLA project',cnt(P,sla,Object.keys(SLAC)),k=>SLAC[k])}
  <div class="panel"><h3>Area · open vs overdue</h3><div class="crow hd"><span class="cnt">Area</span><span></span><b class="cnt">Open</b><span class="cnt">Over</span></div>${areas.map(a=>{const pa=pOpen.filter(p=>(p.area||'(kosong)')===a);return pa.length?`<div class="crow"><span>${esc(a)}</span><span class="b"><i style="width:${pa.length/pOpen.length*100}%;background:var(--navy)"></i></span><b class="num">${pa.length}</b><span class="num ${pa.filter(p=>sla(p)==='Overdue').length?'late':'cnt'}">${pa.filter(p=>sla(p)==='Overdue').length}</span></div>`:''}).join('')}</div>
 </div></section>
 <section><p class="sech">Cek kualitas data · harus 0 semua agar dashboard akurat</p><div class="panel qcs">${qc.map(([l,v])=>`<div class="qc"><span>${l}</span><b class="num ${v?'bad':'ok'}">${v?v:'0 ✓'}</b></div>`).join('')}</div></section>
 </div>`}

/* ---------- drawer detail ---------- */
const gi={sheet:['#1e8e3e','S','Google Sheets'],doc:['#1a73e8','D','Google Docs'],slide:['#e3a008','P','Google Slides'],foto:['#7a5aa6','IMG','Foto'],file:['#66789e','F','Berkas']};
function gtxt(x){let s=esc(x).replace(/@([A-Z][\w.]*(?: [A-Z][\w.]*){0,2})/g,'<span class="mention">@$1</span>');
 return s.replace(/https?:\/\/docs\.google\.com\/(spreadsheets|document|presentation)\/\S*/g,(m,k)=>{const ty=k==='spreadsheets'?'sheet':k==='document'?'doc':'slide';return `<a class="gcard" href="${m}" target="_blank" rel="noopener" style="margin:4px 0"><span class="gi" style="background:${gi[ty][0]}">${gi[ty][1]}</span><span class="gt"><b>Berkas ${gi[ty][2]}</b><small>docs.google.com</small></span></a>`})}
function drawer(){
 const t=tasks.find(x=>x.id===S.open);if(!t)return'';
 const ed=canEdit(t),stt=canStatus(t),mo=t.space==='monthly',dis=ed?'':'disabled';
 const sd=t.subs.filter(s=>s.d).length,ks=kidsOf(t);
 const run=S.timer&&S.timer.id===t.id;
 const fs=t.feed.filter(f=>S.ftab==='all'||f.k==='c');
 const feed=fs.map(f=>f.k==='c'?
  `<div class="fe">${av(f.w,28)}<div class="bd"><span class="who">${esc(U[f.w].n)}</span><span class="tm">${f.t}</span><div class="tx">${gtxt(f.x)}</div></div></div>`:
  `<div class="fe h"><span class="hl"><i></i></span><div class="bd"><b>${esc(U[f.w].n)}</b> ${f.a===''?esc(f.b):`mengubah ${esc(f.f)}: <s>${esc(f.a||'kosong')}</s> → <b>${esc(f.b||'kosong')}</b>`}<span class="tm">${f.t}</span></div></div>`).join('');
 const assignees=Object.keys(U).filter(k=>!U[k].off||k===t.assignee);
 return `<div class="scrim" data-close></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="Detail task">
 <div class="dh"><span class="chip">${spLabel(t)}${t.dept?' · '+(DEPTN[t.dept]||'Belum ada divisi'):''}</span>${t.carry?`<span class="chip carry">Dibawa dari ${t.carry}</span>`:''}${late(t)?'<span class="chip" style="background:var(--danger-soft);color:var(--danger)">Terlambat '+days(t.due)+' hari</span>':''}<span class="sp"></span><button class="btn ghost" data-close aria-label="Tutup">Tutup</button></div>
 <div class="dbody"><div class="dl">
  ${parentOf(t)?`<div><button class="plink" data-open="${parentOf(t).id}">${I.sub}Subtask dari <b>${esc(parentOf(t).title)}</b></button></div>`:''}
  <div><input class="ttl" id="f-title" value="${esc(t.title)}" ${dis} aria-label="Judul task">
  ${!ed?`<div class="hint">${mo?(t.assignee===S.me?'Detail task diatur QMR. Anda mengisi keterangan, bukti foto, dan status.':'Hanya QMR yang bisa mengedit task Monthly. Anda bisa berkomentar.'):'Task ini bukan milik Anda. Anda bisa berkomentar dan mengubah status.'}</div>`:''}</div>
  ${mo?`<div class="vbox"><div class="vh"><span class="sec" style="margin:0">Verifikasi audit · ${MONL[+CM.slice(5)-1]}</span>${verifH(t)}</div>
   ${t.verif&&t.verif.st==='ok'?`<div class="hint">Diverifikasi ${esc((U[t.verif.by]||{n:''}).n)} · ${fmt(t.verif.at)}. Status terkunci untuk assignee.</div>`:''}
   ${t.verif&&t.verif.st==='tolak'?`<div class="hint late">Dikembalikan ${esc((U[t.verif.by]||{n:''}).n)} · ${fmt(t.verif.at)}: ${esc(t.verif.note)}</div>`:''}
   ${t.status!=='DONE'?`<div class="hint">Isi keterangan dan lampirkan bukti foto, lalu ubah status ke DONE. Tim audit akan mengecek kesesuaiannya.</div>`:''}
   ${isAudit()&&t.status==='DONE'?(S.vrej===t.id?`<form id="vtf" class="vrej"><textarea id="vtr" placeholder="Alasan tidak sesuai (wajib), mis. bukti foto belum menunjukkan hasil akhir" aria-label="Alasan pencabutan"></textarea><div class="chips"><button class="btn danger">Cabut DONE → WORK IN PROGRESS</button><button type="button" class="btn ghost" data-vx>Batal</button></div></form>`
    :`<div class="chips">${t.verif&&t.verif.st==='ok'?'':`<button class="btn nv" data-vok>Sesuai, verifikasi</button>`}<button class="btn ghost" data-vrej>${t.verif&&t.verif.st==='ok'?'Cabut verifikasi dan DONE…':'Tidak sesuai…'}</button></div>`):''}
  </div>`:''}
  ${t.space==='irnd'&&!t.parent?'<div class="hint">Status project dihitung otomatis dari task-nya (aturan sama dengan tracker). Pilih HOLD atau CANCEL untuk status khusus.</div>':''}
  <div class="fg">
   <label for="f-status">Status</label><select id="f-status" ${stt?'':'disabled'}>${stOf(t.space).map(([s])=>`<option ${t.status===s?'selected':''}>${s}</option>`).join('')}</select>
   <label for="f-as" ${t.space==='irnd'&&!t.parent?'title="Penanggung jawab project. Status tiap task diatur PIC masing-masing."':''}>${t.space==='irnd'?(t.parent?'PIC':'Owner (PJ)'):'Assignee'}</label><select id="f-as" ${dis}><option value="">— Belum ada —</option>${assignees.map(k=>`<option value="${k}" ${t.assignee===k?'selected':''}>${esc(U[k].n)}</option>`).join('')}</select>
   ${(spDef(t.space)||{}).meet&&t.parent?`<span class="k">Ikut mengerjakan</span><div class="tagin">${(t.ikut||[]).filter(k=>U[k]).map(k=>`<span class="pchip sm">${av(k,16)}${esc(U[k].n)}${dis?'':`<button type="button" class="rm" data-unikut="${k}" aria-label="Hapus ${esc(U[k].n)}" style="background:none;border:0;padding:0 0 0 4px;color:inherit">×</button>`}</span>`).join('')}${dis?((t.ikut||[]).length?'':'<span class="cnt">-</span>'):`<select id="f-ikut" style="width:auto"><option value="">+ Tambah orang…</option>${Object.keys(U).filter(k=>!U[k].off&&U[k].role!=='Guest'&&k!==t.assignee&&!(t.ikut||[]).includes(k)).map(k=>`<option value="${k}">${esc(U[k].n)} · ${esc(DEPTN[U[k].dept]||U[k].role)}</option>`).join('')}</select>`}</div>`:''}
   ${t.space!=='monthly'?`<span class="k">Dibagikan ke</span><div class="tagin">${(t.share||[]).map(k=>`<span class="pchip sm">${av(k,16)}${esc((U[k]||{n:k}).n)}${canShareT(t)?`<button type="button" class="rm" data-unshare="${k}" aria-label="Hapus ${esc((U[k]||{n:k}).n)}" style="background:none;border:0;padding:0 0 0 4px;color:inherit">×</button>`:''}</span>`).join('')}${canShareT(t)?`<select id="f-share" style="width:auto"><option value="">+ Bagikan ke…</option>${Object.keys(U).filter(k=>!U[k].off&&!(t.share||[]).includes(k)&&!seesTask(k,t)).map(k=>`<option value="${k}">${esc(U[k].n)} · ${esc(DEPTN[U[k].dept]||U[k].role)}</option>`).join('')}</select>`:(t.share||[]).length?'':'<span class="cnt">-</span>'}</div>`:''}
   <label for="f-pr">Priority</label><select id="f-pr" ${dis}>${Object.keys(PR).map(p=>`<option value="${p}" ${t.pri===p?'selected':''}>${PR[p][0]}</option>`).join('')}</select>
   ${LISTS[t.space]&&t.space!=='irnd'&&!t.parent?`<label for="f-list">Folder</label><select id="f-list" ${dis}>${LISTS[t.space].filter(l=>visFolder(t.space,l)).map(l=>`<option value="${l.id}" ${t.list===l.id?'selected':''}>${esc(l.n)}</option>`).join('')}</select>`:''}
   ${hasIn(t.space)&&!(spDef(t.space)&&spDef(t.space).meet&&!t.parent)?`<label for="f-in">Inputan</label><input type="text" id="f-in" list="ginl" value="${esc(t.inputan)}" placeholder="Siapa yang kasih task" ${dis}><datalist id="ginl">${givers().map(v=>`<option value="${esc(v)}">`).join('')}</datalist>`:''}
   ${mo?`<span class="k">Bulan</span><div class="ro">${t.due?MONL[+t.due.split('-')[1]-1]+' (otomatis dari due date)':'-'}</div>`:''}
   <label for="f-st">${t.space==='irnd'?(t.parent?'Tgl mulai':'Tgl request'):'Start date'}</label><input type="date" id="f-st" value="${t.start}" ${dis}>
   <label for="f-du">Due date</label><input type="date" id="f-du" value="${t.due}" ${dis}>
   ${t.space==='irnd'?(t.parent?`<label for="f-tahap">Tahap</label><select id="f-tahap" ${dis}>${opts(TAHAP,t.tahap)}</select><label for="f-fin">Tgl selesai</label><input type="date" id="f-fin" value="${t.fin}" ${dis}>`
    :`<label for="f-list">Folder</label><select id="f-list" ${dis}>${(LISTS.irnd||[]).map(l=>`<option value="${l.id}" ${t.list===l.id?'selected':''}>${esc(l.n)}</option>`).join('')}</select><label for="f-jenis">Jenis</label><select id="f-jenis" ${dis}>${opts(JENIS,t.jenis)}</select><label for="f-co">Company</label><select id="f-co" ${dis}>${opts(COS,t.co)}</select><label for="f-area">Produk / area</label><select id="f-area" ${dis}>${opts(AREAS,t.area)}</select><label for="f-req">Requestor</label><input type="text" id="f-req" value="${esc(t.req)}" ${dis}>`)
    +`<span class="k">Status SLA</span><div class="ro">${slaH(t)}${telat(t)?` <span class="late">· telat ${telat(t)} hari</span>`:''}${!t.parent&&t.fin?` <span class="cnt">· selesai ${fmt(t.fin)}</span>`:''}</div>`:''}
   <span class="k">Tag</span><div class="tagin">${t.tags.map(g=>`<span class="tag" style="--c:var(${tagc(g)})">${esc(g)}${ed?`<button data-untag="${esc(g)}" aria-label="Hapus tag ${esc(g)}">×</button>`:''}</span>`).join('')}${ed?`<input type="text" id="f-tag" placeholder="+ tag, Enter" aria-label="Tambah tag" list="taglist"><datalist id="taglist">${Object.keys(TAGC).map(x=>`<option value="${x}">`).join('')}</datalist>`:t.tags.length?'':'<span class="cnt">-</span>'}</div>
   <span class="k">Waktu kerja</span><div class="timer"><span class="num" id="tclock">${hm(t.time+(run?(Date.now()-S.timer.at)/6e4:0))}</span>${isMine(t)||ed?`<button class="tbtn ${run?'run':''}" data-timer>${run?I.stop+'Stop':I.play+'Mulai'}</button>`:''}<span class="hint">${run?'Sedang merekam waktu':'Total tercatat'}</span></div>
  </div>
  <div><p class="sec">${mo?'Keterangan':'Deskripsi'}</p><textarea id="f-desc" ${mo&&canNote(t)?'':dis} placeholder="${ed?'Tambahkan konteks, langkah, atau kriteria selesai…':'Tidak ada deskripsi'}">${esc(t.desc)}</textarea></div>
  ${(!t.parent&&!mo)||ks.length?`<div><p class="sec">${t.space==='irnd'?'Task':'Subtask'} <span class="cnt" style="letter-spacing:0">${ks.filter(done).length}/${ks.length}</span>${ks.length?`<span class="bar" style="max-width:160px"><i style="width:${ks.filter(done).length/ks.length*100}%"></i></span>`:''}</p>
   ${ks.length?`<div class="subs">${ks.map(k=>`<button class="sub krow" data-open="${k.id}">${ico(k)}<span class="kt">${esc(k.title)}${k.tahap?`<small class="cnt" style="display:block">${esc(k.tahap)}</small>`:''}</span>${av(k.assignee)}<span class="num ${late(k)?'late':'cnt'}" style="min-width:70px;text-align:right">${dueTxt(k)}</span></button>`).join('')}</div>`:'<div class="hint">Belum ada subtask. Pecah task ini jadi pekerjaan dengan PIC, status, dan due date sendiri.</div>'}
   ${!t.parent&&canAdd(t.space)?`<form class="addsub" id="kidf"><input type="text" id="kidt" placeholder="${t.space==='irnd'?'Tambah task untuk project ini…':'Tambah subtask…'}" aria-label="Subtask baru"><button class="btn ghost">Tambah</button></form>`:''}</div>`:''}
  ${mo&&!t.subs.length?'':`<div><p class="sec">Checklist <span class="cnt" style="letter-spacing:0">${sd}/${t.subs.length}</span>${t.subs.length?`<span class="bar" style="max-width:160px"><i style="width:${sd/t.subs.length*100}%"></i></span>`:''}</p>
   ${t.subs.length?`<div class="subs">${t.subs.map((s,i)=>`<label class="sub ${s.d?'dn':''}"><input type="checkbox" data-sub="${i}" ${s.d?'checked':''} ${stt?'':'disabled'}><span class="kt">${esc(s.t)}</span>${ed?`<button type="button" class="rm" data-rmsub="${i}" aria-label="Hapus item checklist">×</button>`:''}</label>`).join('')}</div>`:''}
   ${ed?`<form class="addsub" id="subf"><input type="text" id="subt" placeholder="Tambah item checklist…" aria-label="Item checklist baru"><button class="btn ghost">Tambah</button></form>`:''}</div>`}
  <div><p class="sec">Bukti follow up</p><div class="att">
   ${t.att.map(a=>a.ty==='foto'?`<a class="gcard" href="#" data-gal="${t.id}:${fotos(t).indexOf(a)}"><img class="thumb" src="${phSrc(a)}" alt=""><span class="gt"><b>${esc(a.n)}</b><small>Foto bukti · klik untuk perbesar</small></span></a>`:`<a class="gcard" href="#" onclick="return false"><span class="gi" style="background:${gi[a.ty][0]}">${gi[a.ty][1]}</span><span class="gt"><b>${esc(a.n)}</b><small>${gi[a.ty][2]}</small></span></a>`).join('')||'<div class="hint">Belum ada lampiran. Tempel link Google Docs/Sheets di komentar untuk melampirkan.</div>'}
   ${canNote(t)?`<label class="btn ghost upl">${I.plus}Tambah foto bukti<input type="file" id="f-up" accept="image/*" multiple hidden></label>`:''}
   <div class="hint">Foto dikecilkan otomatis. Hak akses link Google mengikuti pengaturan Google Drive.</div></div></div>
 </div>
 <div class="dr"><div class="ftabs"><button data-ftab="all" class="${S.ftab==='all'?'on':''}">Semua aktivitas</button><button data-ftab="c" class="${S.ftab==='c'?'on':''}">Komentar</button></div>
  <div class="feed" id="feed">${feed||'<div class="empty">Belum ada komentar atau perubahan.</div>'}</div>
  <form class="compose" id="cf"><div id="msug"></div><textarea id="ctext" placeholder="Tulis komentar. Ketik @ untuk mention, tempel link Google Docs/Sheets." aria-label="Komentar"></textarea>
  <div class="row"><span class="hint">Ctrl+Enter untuk kirim</span><span class="sp"></span><button class="btn nv">Kirim</button></div></form></div></div></aside>`}

/* ---------- modal task baru & command palette ---------- */
const paOpts=sp=>`<option value="">${sp==='irnd'?'— Buat sebagai project baru —':'Tidak, task biasa'}</option>`+tasks.filter(t=>t.space===sp&&!t.parent&&visTask(t)&&!done(t)).sort((a,b)=>(b.start||b.due||'').localeCompare(a.start||a.due||'')).map(t=>`<option value="${t.id}">${esc(t.title)}</option>`).join('');
function modal(){
 if(S.modal==='new'){const sps=addSpaces();const cur=navSpace()&&sps.includes(navSpace())?navSpace():isMo()&&sps.includes('monthly')?'monthly':sps[0];
  return `<div class="mwrap" data-mclose><form class="modal" id="nf" role="dialog" aria-modal="true" aria-label="Task baru">
  <div class="mh"><h2>Task baru</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Batal</button></div>
  <div class="mb"><input class="bigin" id="n-title" placeholder="Judul task" aria-label="Judul task" required>
   <div class="fld"><label for="n-pa" id="n-pal">${cur==='irnd'?'Project (kosongkan untuk membuat project baru)':'Jadikan subtask dari (opsional)'}</label><select id="n-pa">${paOpts(cur)}</select></div>
   <div class="f2">
    <div class="fld"><label for="n-sp">Space</label><select id="n-sp">${sps.map(s=>`<option value="${s}" ${s===cur?'selected':''}>${spName(s)}</option>`).join('')}</select></div>
    <div class="fld"><label for="n-st">Status</label><select id="n-st">${stOf(cur).map(([s])=>`<option ${s===S.newStatus?'selected':''}>${s}</option>`).join('')}</select></div>
    <div class="fld"><label for="n-as">Assignee</label><select id="n-as">${Object.keys(U).map(k=>`<option value="${k}" ${k===S.me?'selected':''}>${esc(U[k].n)}</option>`).join('')}</select></div>
    <div class="fld"><label for="n-pr">Priority</label><select id="n-pr">${Object.keys(PR).map(p=>`<option value="${p}" ${p==='normal'?'selected':''}>${PR[p][0]}</option>`).join('')}</select></div>
    <div class="fld"><label for="n-du">Due date</label><input type="date" id="n-du"></div>
    <div class="fld"><label for="n-tg">Tag (pisahkan koma)</label><input type="text" id="n-tg" placeholder="backend, bug"></div>
   </div>
 <div class="fld" id="n-fdw" ${LISTS[cur]&&cur!=='irnd'?'':'hidden'}><label for="n-fd">Folder</label><select id="n-fd">${(LISTS[cur]||[]).filter(l=>visFolder(cur,l)).map(l=>`<option value="${l.id}" ${navList()===l.id?'selected':''}>${esc(l.n)}</option>`).join('')}</select></div>
 <div class="fld" id="n-inw" ${hasIn(cur)&&cur!=='monthly'?'':'hidden'}><label for="n-in2">Inputan (siapa yang kasih task)</label><input type="text" id="n-in2" list="ginl2" placeholder="mis. Pak Hendra"><datalist id="ginl2">${givers().map(v=>`<option value="${esc(v)}">`).join('')}</datalist></div>
   <div class="fld" id="n-mo" ${cur==='monthly'?'':'hidden'}><div class="fld"><label for="n-br">Brand</label><select id="n-br">${Object.keys(BR).map(b=>`<option value="${b}" ${isMo()&&moBr()===b?'selected':''}>${BR[b].n}</option>`).join('')}</select></div><div class="f2"><div class="fld"><label for="n-dp">Divisi</label><select id="n-dp">${Object.keys(DEPTN).map(k=>`<option value="${k}" ${moDp()===k?'selected':''}>${DEPTN[k]}</option>`).join('')}</select></div><div class="fld"><label for="n-in">Inputan</label><input type="text" id="n-in" placeholder="mis. Pak Hendra"></div></div></div>
   <div class="fld" id="n-ir" ${cur==='irnd'?'':'hidden'}><div class="f2"><div class="fld"><label for="n-th">Tahap (untuk task)</label><select id="n-th">${opts(TAHAP,'1. Analisa & Alur')}</select></div><div class="fld"><label for="n-ar">Produk / area (untuk project)</label><select id="n-ar">${opts(AREAS,'')}</select></div><div class="fld"><label for="n-co">Company (untuk project)</label><select id="n-co">${opts(COS,'SFT')}</select></div><div class="fld"><label for="n-je">Jenis (untuk project)</label><select id="n-je">${opts(JENIS,'Pengembangan Fitur')}</select></div></div></div>
   <div class="fld"><label for="n-ds">Deskripsi</label><textarea id="n-ds" placeholder="Konteks dan kriteria selesai"></textarea></div>
  </div><div class="mf"><span class="hint" style="margin-right:auto;align-self:center">Tekan N di mana saja untuk membuka form ini</span><button class="btn">Buat task</button></div></form></div>`}
 if(S.modal&&S.modal.startsWith('fold')){const sp=spDef(S.addf)||{};return `<div class="mwrap" data-mclose><form class="modal" id="addfold" role="dialog" aria-modal="true" aria-label="Folder baru" autocomplete="off" style="width:min(520px,100%)">
  <div class="mh"><h2>Folder baru · ${esc(sp.n||'')}</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Batal</button></div>
  <div class="mb"><div class="fld"><label for="foldn">Nama folder</label><input type="text" id="foldn" placeholder="${sp.id==='koord'?'mis. 12. SAL-WRH-CS':sp.id==='wall'?'mis. IT Support':'mis. Form RnD'}"></div>
  ${sp.internal?'':`<div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Divisi yang terlibat</span><div class="spgrid">${Object.keys(DEPTN).map(d=>`<label class="ckrow"><input type="checkbox" data-fdp="${d}"> ${esc(DEPTN[d])}</label>`).join('')}</div>
   <div class="hint">Hanya anggota divisi yang dicentang (plus Admin dan QMR) yang bisa melihat folder ini. Kosongkan untuk semua divisi.</div>
   <label class="ckrow"><input type="checkbox" id="fshr"> Boleh dilihat Guest dari divisi tersebut</label></div>`}
  </div><div class="mf"><button class="btn">Buat folder</button></div></form></div>`}
 if(S.modal&&S.modal.startsWith('user'))return userModal();
 if(S.modal&&S.modal.startsWith('fshare'))return fShareModal();
 if(S.modal&&S.modal.startsWith('addsp')){const used=SP.filter(x=>x.internal).map(x=>x.dept);
  return `<div class="mwrap" data-mclose><form class="modal" id="spf" role="dialog" aria-modal="true" aria-label="Internal tim baru" autocomplete="off" style="width:min(540px,100%)">
  <div class="mh"><h2>Internal tim baru</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Batal</button></div>
  <div class="mb"><div class="hint">Space khusus satu divisi. Hanya anggota divisi itu dan Admin yang bisa melihat, dan bisa dibagikan per folder.</div>
   <div class="fld"><label for="sp-d">Divisi pemilik</label><select id="sp-d">${Object.keys(DEPTN).filter(d=>!used.includes(d)).map(d=>`<option value="${d}">${esc(DEPTN[d])}</option>`).join('')}<option value="__new">+ Divisi baru…</option></select></div>
   <div class="fld" id="sp-nw" hidden><label for="sp-nd">Nama divisi baru</label><input type="text" id="sp-nd" placeholder="mis. Finance, HRD, Marketing"><div class="hint">Divisi baru juga muncul di pilihan divisi pengguna, Monthly, dan Weekly.</div></div>
   <div class="fld"><label for="sp-n">Nama space</label><input type="text" id="sp-n" placeholder="mis. Internal IT Support"></div>
   <div class="fld"><label for="sp-f">Folder awal <span class="cnt">pisahkan dengan koma, boleh dikosongkan</span></label><input type="text" id="sp-f" placeholder="mis. Project, Maintenance, SOP"></div>
   <div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Warna</span><div class="chips">${SWC.map((c,i)=>`<label class="pchip" style="--c:${c}"><input type="radio" name="sp-c" value="${c}" ${i===0?'checked':''} style="accent-color:${c}"><span class="dot" style="--c:${c};width:18px;height:18px"></span></label>`).join('')}</div></div>
  </div><div class="mf"><button class="btn">Buat space</button></div></form></div>`}
 if(S.modal&&S.modal.startsWith('addbr'))return `<div class="mwrap" data-mclose><form class="modal" id="brf" role="dialog" aria-modal="true" aria-label="Brand baru" autocomplete="off" style="width:min(480px,100%)">
  <div class="mh"><h2>Brand Monthly baru</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Batal</button></div>
  <div class="mb"><div class="fld"><label for="br-n">Nama brand</label><input type="text" id="br-n" placeholder="mis. Casebang"></div>
   <div class="fld"><span class="lbl" style="font-size:12px;text-transform:none;letter-spacing:0;color:var(--muted);font-weight:600">Warna</span><div class="chips">${SWC.map((c,i)=>`<label class="pchip" style="--c:${c}"><input type="radio" name="br-c" value="${c}" ${i===3?'checked':''} style="accent-color:${c}"><span class="dot" style="--c:${c};width:18px;height:18px"></span></label>`).join('')}</div></div>
   <div class="hint">Brand baru langsung muncul di Monthly (dengan folder per divisi), Catat notulen QMR, Jadwal meeting, dan Dashboard.</div></div>
  <div class="mf"><button class="btn">Tambah brand</button></div></form></div>`;
 if(S.modal&&S.modal.startsWith('msched'))return mModal();
 if(S.modal&&S.modal.startsWith('mcal'))return mCalModal();
 if(S.modal&&S.modal.startsWith('cred'))return credModal();
 if(S.modal&&S.modal.startsWith('img')){const t=tasks.find(x=>x.id===S.gal.id),fs=t?fotos(t):[],a=fs[S.gal.i];if(!a)return'';
  return `<div class="mwrap lbw" data-mclose><figure class="lbf" role="dialog" aria-modal="true" aria-label="Bukti foto"><img class="lb" src="${phSrc(a)}" alt="${esc(a.n)}">
  <figcaption><div style="min-width:0"><b>${esc(a.n)}</b><small>${esc(t.title)}</small></div><span class="sp"></span>
  ${fs.length>1?`<button class="btn ghost" data-gp aria-label="Foto sebelumnya">‹</button><span class="num cnt">${S.gal.i+1}/${fs.length}</span><button class="btn ghost" data-gn aria-label="Foto berikutnya">›</button>`:''}<button class="btn ghost" data-mx>Tutup</button></figcaption></figure></div>`}
 if(S.modal&&S.modal.startsWith('qtxt'))return `<div class="mwrap" data-mclose><div class="modal" role="dialog" aria-modal="true" aria-label="Ringkasan notulen"><div class="mh"><h2>${S.qinv?'Undangan meeting':S.qendm?'Notulen selesai':'Ringkasan notulen'}</h2><span class="sp"></span><button type="button" class="btn ghost" data-mx>Tutup</button></div>
  <div class="mb"><div class="hint">Sudah disalin ke clipboard. Kalau belum, pilih semua teks di bawah lalu salin manual. Bisa langsung ditempel ke WhatsApp${S.qinv?' grup divisi terkait':''}.</div><textarea id="qtxt" readonly style="min-height:260px;font-family:var(--mono);font-size:12.5px">${esc(S.qtxt)}</textarea></div>
  ${S.qendm?`<div class="mf"><span class="hint" style="margin-right:auto;align-self:center">Task sudah tersimpan di ${S.qn.kind==='koord'?'Notulen Koordinasi':'Monthly '+BR[S.qn.brand].n}${S.qn.meet?'. Jadwal meeting ditandai selesai':''}.</span><button class="btn" data-qnew>Mulai notulen baru</button></div>`:''}</div></div>`;
 if(S.modal==='cmd')return `<div class="mwrap" data-mclose><div class="modal pal" role="dialog" aria-modal="true" aria-label="Cari"><div class="pin">${I.search}<input type="text" id="cq" placeholder="Cari task atau perintah…" aria-label="Cari" autocomplete="off"><kbd>Esc</kbd></div><div class="pres" id="pres"></div></div></div>`;
 return ''}
let palSel=0,palItems=[];
function palRender(){
 const q=($('#cq')||{value:''}).value.toLowerCase().trim();
 const acts=[['Buat task baru',()=>{S.modal='new';render();setTimeout(()=>$('#n-title')&&$('#n-title').focus())}],['Buka Beranda',()=>go('home')],['Buka Inbox',()=>go('inbox')],['Buka Tugas saya',()=>go('mine')],['Ganti tema terang/gelap',toggleTheme]].filter(a=>!q||a[0].toLowerCase().includes(q));
 const ts=tasks.filter(t=>visTask(t)&&(!q||t.title.toLowerCase().includes(q))).slice(0,8);
 palItems=[...ts.map(t=>()=>{S.modal=null;S.open=t.id;render()}),...acts.map(a=>()=>{S.modal=null;a[1]()})];
 if(palSel>=palItems.length)palSel=0;
 let i=0;
 $('#pres').innerHTML=(ts.length?'<h6>Task</h6>'+ts.map(t=>`<button data-pi="${i}" class="${i++===palSel?'on':''}">${ico(t)}<span class="x">${esc(t.title)}</span>${av(t.assignee)}</button>`).join(''):'')+
  (acts.length?'<h6>Perintah</h6>'+acts.map(a=>`<button data-pi="${i}" class="${i++===palSel?'on':''}">${I.plus}<span class="x">${a[0]}</span></button>`).join(''):'')+(!palItems.length?'<div class="empty">Tidak ada hasil.</div>':'');
 const on=$('#pres .on');on&&on.scrollIntoView({block:'nearest'})}

function go(n){S.finc=false;if(n==='qn'&&!S.qn)qnInit(isMo()?moBr():'sft');S.lg=null;S.fv=false;S.vrej=null;S.addf=null;if(n==='w:irnd'||n.startsWith('f:irnd'))S.view='dash';else if(n.startsWith('f:')||n.startsWith('w:'))S.view=S.view==='dash'?'list':S.view;if(n.startsWith('m:')&&n!==S.nav)S.view=(!S.nav.startsWith('m:')||S.view==='dash')?'dash':S.view;S.nav=n;S.side=false;S.fa=S.fp=S.ft=S.q='';S.mine=false;S.qa=null;S.open=null;S.modal=null;if(n==='qn')S.qfocus=true;render()}
function toggleTheme(){const r=document.documentElement;const cur=r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');r.dataset.theme=cur==='dark'?'light':'dark';saveUI();render()}

function syncProj(){tasks.forEach(p=>{if(p.space!=='irnd'||p.parent)return;const ks=kidsOf(p).filter(k=>k.status!=='CANCEL');let st;
 if(p.khusus)st=p.khusus;else if(!ks.length)st='TO DO';else if(ks.every(k=>k.status==='DONE'))st='DONE';else if(ks.every(k=>k.status==='DONE'||k.status==='REVIEW/UAT'))st='REVIEW/UAT';else if(ks.some(k=>['IN PROGRESS','REVIEW/UAT','DONE'].includes(k.status)))st='IN PROGRESS';else st='TO DO';
 p.status=st;p.fin=st==='DONE'?(ks.map(k=>k.fin).filter(Boolean).sort().pop()||''):''})}
function recover(err){try{console.error(err)}catch(_){}
 $('#app').innerHTML=`<div style="grid-column:1/-1;padding:48px 24px;display:flex;justify-content:center"><div class="panel" style="max-width:520px"><h3>Tampilan gagal dimuat</h3><p class="cnt" style="font-size:13.5px;margin:0">Muat ulang halaman. Kalau masih terjadi, kirim screenshot pesan di bawah ke tim R&amp;D.</p><div class="chips"><button class="btn" data-fixreset>Muat ulang</button></div><small class="cnt">${esc(String(err&&err.message||err))}</small></div></div>`;
 const b=document.querySelector('[data-fixreset]');if(b)b.onclick=()=>location.reload()}
function render(){try{renderX()}catch(e){recover(e)}}
function renderX(){syncProj();
 const fe=document.activeElement&&document.activeElement.id;
 const fs=$('#feed'),keep=fs&&S._feedFor===S.open?null:true;
 const ct=$('#ctext'),draft=ct?ct.value:'';
 $('#app').innerHTML=sidebar()+main();
 $('#layer').innerHTML=drawer();
 const prevModal=$('#ov').dataset.m;
 if(prevModal!==(S.modal||'')){$('#ov').innerHTML=modal();$('#ov').dataset.m=S.modal||'';if(S.modal==='cmd'){palSel=0;palRender();$('#cq').focus()}if(S.modal==='new')$('#n-title').focus()}
 const f=$('#feed');if(f)f.scrollTop=f.scrollHeight;S._feedFor=S.open;
 const c2=$('#ctext');if(c2&&draft)c2.value=draft;
 if(fe==='q'){const q=$('#q');if(q){q.focus();q.setSelectionRange(q.value.length,q.value.length)}}
 if(fe==='f-tag'){const q=$('#f-tag');q&&q.focus()}
 if(S.qfocus||fe==='qt'){S.qfocus=false;const q=$('#qt');q&&q.focus()}
 if(fe==='kidt'){const q=$('#kidt');q&&q.focus()}
 if(fe==='subt'){const q=$('#subt');q&&q.focus()}
 if(S.qa){const a=$('#qat');a&&a.focus()}
 save();saveUI();
}

/* ---------- timer ---------- */
setInterval(()=>{const qt=$('#qtimer span');if(qt&&S.qn)qt.textContent=Math.floor((Date.now()-S.qn.t0)/6e4)+' menit'},15000);
setInterval(()=>{if(!S.timer)return;const el=$('#tclock');const t=tasks.find(x=>x.id===S.timer.id);if(el&&t&&S.open===t.id)el.textContent=hm(t.time+(Date.now()-S.timer.at)/6e4)},1000);
function stopTimer(){if(!S.timer)return;const t=tasks.find(x=>x.id===S.timer.id);const m=Math.max(1,Math.round((Date.now()-S.timer.at)/6e4));if(t){t.time+=m;hist(t,'Waktu kerja','','+'+hm(m)+' tercatat');t.feed[t.feed.length-1].a='';t.feed[t.feed.length-1].b='mencatat waktu kerja '+hm(m)}S.timer=null;toast('Waktu kerja '+hm(m)+' tercatat')}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
 const g=s=>e.target.closest(s);let x;
 if(x=g('[data-pi]')){palItems[+x.dataset.pi]();return}
 if(g('[data-mx]')||(e.target.dataset&&e.target.dataset.mclose!==undefined)){S.modal=null;render();return}
 if(g('[data-cmd]')){S.modal='cmd';S.side=false;render();return}
 if(g('[data-new]')){S.newStatus='TO DO';S.modal='new';render();return}
 if(x=g('[data-nav]')){go(x.dataset.nav);return}
 if(x=g('[data-qnb]')){const v=x.dataset.qnb,kd=v==='koord'?'koord':'monthly';if(!S.qn||(!S.qn.created.length&&(S.qn.kind!==kd||(kd==='monthly'&&S.qn.brand!==v))))qnInit(kd==='monthly'?v:undefined,kd);if(kd==='koord'&&navList()&&!S.qn.created.length)S.qn.fd=navList();if(kd==='monthly'&&moDp()&&!S.qn.created.length){S.qn.div=moDp();S.qn.pic=''}go('qn');return}
 if(x=g('[data-qbr]')){S.qn.brand=x.dataset.qbr;render();return}
 if(x=g('[data-qkind]')){const k=x.dataset.qkind;if(k===S.qn.kind)return;if(S.qn.created.length){toast('Klik Selesai dulu untuk menutup notulen ini');return}S.qn.kind=k;render();$('#qt').focus();return}
 if(x=g('[data-qgv]')){S.qn.inputan=x.dataset.qgv;render();$('#qt').focus();return}
 if(x=g('[data-qdiv]')){S.qn.div=x.dataset.qdiv;if(S.qn.pic&&U[S.qn.pic].dept!==S.qn.div)S.qn.pic='';render();$('#qt').focus();return}
 if(x=g('[data-qdue]')){const v=x.dataset.qdue;S.qn.due=v==='eom'?eom(S.qn.date):addDays(S.qn.date,+v);render();$('#qt').focus();return}
 if(x=g('[data-qpri]')){S.qn.pri=x.dataset.qpri;render();$('#qt').focus();return}
 if(x=g('[data-qpes]')){const u=x.dataset.qpes,a=S.qn.peserta;a.includes(u)?a.splice(a.indexOf(u),1):a.push(u);render();return}
 if(x=g('[data-qs]')){const [id,st]=x.dataset.qs.split('|'),t=tasks.find(t=>t.id===id),from=t.status;if(from===st)return;setStatus(t,st);if(t.status===st)S.qn.upd.push({id,from,to:st});render();return}
 if(x=g('[data-qdel]')){const id=x.dataset.qdel,i=tasks.findIndex(t=>t.id===id);if(i>-1)tasks.splice(i,1);S.qn.created=S.qn.created.filter(z=>z!==id);toast('Task dihapus dari notulen');render();return}
 if(g('[data-qcopy]')||g('[data-qend]')){S.qinv=false;const txt=qnText(),end=!!g('[data-qend]');if(end&&S.qn.meet){const mm=meets.find(x=>x.id===S.qn.meet);if(mm){mm.st='selesai';mm.n=S.qn.created.length}}S.qtxt=txt;S.qendm=end;S.modal='qtxt'+Date.now();render();try{navigator.clipboard.writeText(txt).then(()=>toast('Ringkasan disalin'),()=>{})}catch(_){}return}
 if(g('[data-qnew]')){qnInit(S.qn.brand,S.qn.kind);S.modal=null;toast('Notulen baru dimulai');render();return}
 if(x=g('[data-minvu]')){const k=x.dataset.minvu,a=S.minv||(S.minv=[]);a.includes(k)?a.splice(a.indexOf(k),1):a.push(k);S.minvT=true;$('#m-invw').innerHTML=mPick();return}
 if(x=g('[data-mcal]')){S.mcalList=null;S.mcal=x.dataset.mcal;S.mcalNew='';S.modal='mcal'+Date.now();render();return}
 if(x=g('[data-mdate]')){const k=x.dataset.mdate,a=S.mdates;a.includes(k)?a.splice(a.indexOf(k),1):a.push(k);$('#m-dpk').innerHTML=mDpk();$('#mclash').textContent=mClashTxt(mForm(),S.medit);return}
 if(x=g('[data-mmon]')){let [y,mo]=S.mmon.split('-').map(Number);mo+=+x.dataset.mmon;if(mo<1){mo=12;y--}if(mo>12){mo=1;y++}S.mmon=y+'-'+String(mo).padStart(2,'0');$('#m-dpk').innerHTML=mDpk();return}
 if(x=g('[data-mdow]')){const w=x.dataset.mdow;if(w==='x')S.mdates=S.mdates.filter(k=>!k.startsWith(S.mmon));else{const ds=dowDates(+w),all=ds.every(k=>S.mdates.includes(k));S.mdates=all?S.mdates.filter(k=>!ds.includes(k)):[...new Set([...S.mdates,...ds])]}$('#m-dpk').innerHTML=mDpk();$('#mclash').textContent=mClashTxt(mForm(),S.medit);return}
 if(x=g('[data-mnew]')){S.mmode=x.dataset.mnew;S.mdates=null;S.mcalList=null;S.minv=null;S.minvT=false;S.medit=null;S.modal='msched'+Date.now();render();return}
 if(x=g('[data-medit]')){S.mmode=(meets.find(y=>y.id===x.dataset.medit)||{}).kind==='weekly'?'w':'';S.minv=null;S.minvT=false;S.medit=x.dataset.medit;S.modal='msched'+Date.now();render();return}
 if(x=g('[data-mstart]')){mStart(x.dataset.mstart);return}
 if(x=g('[data-minv]')){const m=meets.find(y=>y.id===x.dataset.minv);const t=mInv(m);S.qtxt=t;S.qendm=false;S.qinv=true;S.modal='qtxt'+Date.now();render();try{navigator.clipboard.writeText(t).then(()=>toast('Undangan disalin'),()=>{})}catch(_){}return}
 if(x=g('[data-mbatal]')){if(!x.dataset.sure){x.dataset.sure=1;x.textContent='Yakin? Klik lagi';setTimeout(()=>{if(x.isConnected){delete x.dataset.sure;x.textContent='Batalkan'}},3000);return}
  const m=meets.find(y=>y.id===x.dataset.mbatal);m.st='batal';mNotify(m,'Meeting '+fmt(m.date)+' dibatalkan');toast(mTitle(m)+' '+fmt(m.date)+' dibatalkan');render();return}
 if(x=g('[data-jt]')){S.jt=x.dataset.jt;render();return}
 if(x=g('[data-mfocus]')){const m=meets.find(y=>y.id===x.dataset.mfocus);S.jt=m&&m.st!=='jadwal'?'hist':'list';render();return}
 if(false&&g('[data-unew]')){S.uedit=null;S.modal='user'+Date.now();render();setTimeout(()=>{updSp();const a=$('#u-n');a&&a.focus()});return}
 if(x=g('[data-uedit]')){S.uedit=x.dataset.uedit;S.modal='user'+Date.now();render();setTimeout(updSp);return}
 if(false&&(x=g('[data-ureset]'))){if(!x.dataset.sure){x.dataset.sure=1;x.textContent='Klik lagi untuk reset';setTimeout(()=>{if(x.isConnected){delete x.dataset.sure;x.textContent='Reset password'}},3000);return}
  const k=x.dataset.ureset,pw=genPw();Object.assign(U[k],{pwSet:true,mustChange:true,pwAt:TODAY});S.cred={name:U[k].n,email:U[k].email,pw,mc:true,reset:true};S.modal='cred'+Date.now();render();return}
 if(x=g('[data-uoff]')){const k=x.dataset.uoff;if(U[k].role==='Admin'&&Object.values(U).filter(u=>u.role==='Admin'&&!u.off).length<2){toast('Minimal harus ada satu Admin aktif');return}
  if(!x.dataset.sure){x.dataset.sure=1;x.textContent='Yakin? Klik lagi';setTimeout(()=>{if(x.isConnected){delete x.dataset.sure;x.textContent='Nonaktifkan'}},3000);return}
  U[k].off=true;toast(U[k].n+' dinonaktifkan');render();return}
 if(x=g('[data-uon]')){U[x.dataset.uon].off=false;toast(U[x.dataset.uon].n+' diaktifkan kembali');render();return}
 if(g('[data-ccopy]')){const t=$('#credtxt').value;try{navigator.clipboard.writeText(t).then(()=>toast('Detail login disalin'),()=>{const a=$('#credtxt');a.hidden=false;a.select();toast('Salin manual teks yang terpilih')})}catch(_){const a=$('#credtxt');a.hidden=false;a.select()}return}
 if(g('[data-addsp]')){S.side=false;S.modal='addsp'+Date.now();render();setTimeout(()=>{const d=$('#sp-d');if(d&&d.value!=='__new')$('#sp-n').value='Internal '+DEPTN[d.value]});return}
 if(g('[data-addbr]')){S.side=false;S.modal='addbr'+Date.now();render();setTimeout(()=>{const a=$('#br-n');a&&a.focus()});return}
 if(x=g('[data-addf]')){S.addf=x.dataset.addf;S.side=false;S.modal='fold'+Date.now();render();setTimeout(()=>{const a=$('#foldn');a&&a.focus()});return}
 if(g('[data-menu]')){S.side=!S.side;render();return}
 if(g('[data-themebtn]')){toggleTheme();return}
 if(g('[data-logout]')){WS.logout();return}
 if(false&&g('[data-reset]')){if(x=g('[data-reset]'),x.dataset.sure){try{localStorage.removeItem(KEY)}catch(_){}tasks=S0();inbox=I0(tasks);meets=M0();S.open=null;S.timer=null;toast('Semua data dihapus');render()}else{x.dataset.sure=1;x.textContent='Klik lagi untuk reset';setTimeout(()=>{if(x.isConnected){delete x.dataset.sure;x.textContent='Hapus semua data'}},3000)}return}
 if(x=g('[data-lg]')){S.lg=x.dataset.lg;render();return}
 if(x=g('[data-view]')){S.view=x.dataset.view;render();return}
 if(x=g('[data-tab]')){S.tab=x.dataset.tab;render();return}
 if(x=g('[data-ftab]')){S.ftab=x.dataset.ftab;render();return}
 if(x=g('[data-cm]')){const d=+x.dataset.cm;if(!d)S.cm=TODAY.slice(0,7);else{let[y,m]=S.cm.split('-').map(Number);m+=d;if(m<1){m=12;y--}if(m>12){m=1;y++}S.cm=y+'-'+String(m).padStart(2,'0')}render();return}
 if(g('[data-mine]')){S.mine=!S.mine;render();return}
 if(x=g('[data-mdf]')){const k=x.dataset.mdf;S.view='list';S.lg='status';if(k==='fv')S.fv=true;else S.finc=true;render();return}
 if(g('[data-finc]')){S.finc=!S.finc;render();return}
 if(g('[data-clr]')){S.q=S.fa=S.fp=S.ft='';S.mine=false;S.fv=false;S.finc=false;render();return}
 if(g('[data-fv]')){S.fv=!S.fv;render();return}
 if(g('[data-vok]')){const t=tasks.find(t=>t.id===S.open);t.verif={st:'ok',by:S.me,at:TODAY};t.feed.push({k:'h',w:S.me,t:nowT(),f:'Verifikasi',a:'',b:'memverifikasi: hasil sesuai bukti'});notify(t.assignee,t,'u','Diverifikasi audit: sesuai');toast(tn(t)+' terverifikasi');render();return}
 if(g('[data-vrej]')){S.vrej=S.open;render();setTimeout(()=>{const a=$('#vtr');a&&a.focus()});return}
 if(g('[data-vx]')){S.vrej=null;render();return}
 if(x=g('[data-gal]')){e.preventDefault();e.stopPropagation();const [id,i]=x.dataset.gal.split(':');S.gal={id,i:+i};S.modal='img'+Date.now();render();return}
 if(g('[data-gp]')||g('[data-gn]')){const t=tasks.find(x=>x.id===S.gal.id),n=fotos(t).length;S.gal.i=(S.gal.i+(g('[data-gn]')?1:n-1))%n;S.modal='img'+Date.now();render();return}
 if(x=g('[data-shut]')){S.shut[x.dataset.shut]=!S.shut[x.dataset.shut];render();return}
 if(x=g('[data-qa]')){S.qa=x.dataset.qa;render();return}
 if(g('[data-qx]')){S.qa=null;render();return}
 if(g('[data-readall]')){inbox.filter(i=>i.u===S.me&&i.tab===S.tab).forEach(i=>i.read=true);render();return}
 if(g('[data-clear]')){for(let i=inbox.length-1;i>=0;i--)if(inbox[i].u===S.me&&inbox[i].tab===S.tab&&inbox[i].read)inbox.splice(i,1);render();return}
 if(x=g('[data-inb]')){const i=inbox[+x.dataset.inb];i.read=true;if(i.meet){S.jt='list';const mm=meets.find(y=>y.id===i.meet);go(mm?mNav(mm):'jadwal');return}const t=tasks.find(t=>t.id===i.task);
  if(t&&visTask(t))S.open=t.id;else toast('Anda tidak punya akses ke task ini');render();return}
 if(x=g('[data-copy]')){const k=x.dataset.copy;try{navigator.clipboard.writeText(k).then(()=>toast(k+' disalin'),()=>toast('Kode: '+k))}catch(_){toast('Kode: '+k)}return}
 if(g('[data-timer]')){const t=tasks.find(t=>t.id===S.open);if(S.timer&&S.timer.id===t.id)stopTimer();else{if(S.timer)stopTimer();S.timer={id:t.id,at:Date.now()};toast('Mulai merekam waktu di '+tn(t))}render();return}
 if(x=g('[data-unikut]')){const t=tasks.find(t=>t.id===S.open),k=x.dataset.unikut;t.ikut=(t.ikut||[]).filter(y=>y!==k);hist(t,'Ikut mengerjakan',U[k]?U[k].n:k,'');render();return}
 if(x=g('[data-unshare]')){const t=tasks.find(t=>t.id===S.open),k=x.dataset.unshare;t.share=(t.share||[]).filter(y=>y!==k);hist(t,'Dibagikan',U[k]?U[k].n:k,'');render();return}
 if(g('[data-fshare]')){S.fshare=[navSpace(),navList()];S.modal='fshare'+Date.now();render();setTimeout(()=>{const q=$('#fs-q');q&&q.focus()});return}
 if(x=g('[data-fsadd]')){const k=x.dataset.fsadd,key=S.fshare.join(':');U[k].spaces=[...new Set([...(U[k].spaces||[]),key])];toast(U[k].n+' sekarang bisa melihat folder ini');S.modal='fshare'+Date.now();render();setTimeout(()=>{const q=$('#fs-q');q&&q.focus()});return}
 if(x=g('[data-fsrm]')){const k=x.dataset.fsrm,key=S.fshare.join(':');U[k].spaces=(U[k].spaces||[]).filter(y=>y!==key);toast('Akses '+U[k].n+' dicabut');S.modal='fshare'+Date.now();render();return}
 if(x=g('[data-untag]')){const t=tasks.find(t=>t.id===S.open);t.tags=t.tags.filter(y=>y!==x.dataset.untag);hist(t,'Tag',x.dataset.untag,'');render();return}
 if(x=g('[data-rmsub]')){e.preventDefault();const t=tasks.find(t=>t.id===S.open);const s=t.subs.splice(+x.dataset.rmsub,1)[0];hist(t,'Subtask',s.t,'');render();return}
 if(x=g('[data-ms]')){const ta=$('#ctext');ta.value=ta.value.replace(/@(\w*)$/,'@'+U[x.dataset.ms].n+' ');$('#msug').innerHTML='';ta.focus();return}
 if(g('select,input,textarea,label'))return;
 if(x=g('[data-open]')){S.open=x.dataset.open;S.ftab='all';render();return}
 if(g('[data-close]')){S.open=null;render();return}
});
document.addEventListener('keydown',e=>{
 const tg=e.target,typing=/INPUT|TEXTAREA|SELECT/.test(tg.tagName);
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();S.modal=S.modal==='cmd'?null:'cmd';render();return}
 if(S.modal&&S.modal.startsWith('img')&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){const n=fotos(tasks.find(x=>x.id===S.gal.id)).length;S.gal.i=(S.gal.i+(e.key==='ArrowRight'?1:n-1))%n;S.modal='img'+Date.now();render();return}
 if(e.key==='Escape'){if(S.modal){S.modal=null;render()}else if(S.qa){S.qa=null;render()}else if(S.open){S.open=null;render()}else if(S.side){S.side=false;render()}return}
 if(S.modal==='cmd'&&tg.id==='cq'){if(e.key==='ArrowDown'){e.preventDefault();palSel=Math.min(palItems.length-1,palSel+1);palRender()}if(e.key==='ArrowUp'){e.preventDefault();palSel=Math.max(0,palSel-1);palRender()}if(e.key==='Enter'&&palItems[palSel]){e.preventDefault();palItems[palSel]()}return}
 if(tg.id==='ctext'&&e.key==='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();$('#cf').requestSubmit();return}
 if(tg.id==='f-tag'&&e.key==='Enter'){e.preventDefault();const v=tg.value.trim().toLowerCase();const t=tasks.find(t=>t.id===S.open);if(v&&!t.tags.includes(v)){t.tags.push(v);hist(t,'Tag','',v)}tg.value='';render();return}
 if(!typing&&!S.modal&&!S.open&&e.key.toLowerCase()==='n'&&!e.ctrlKey&&!e.metaKey&&addSpaces().length){e.preventDefault();S.newStatus='TO DO';S.modal='new';render();return}
 if(e.key==='Enter'&&tg.dataset&&tg.dataset.open){S.open=tg.dataset.open;render()}
});
document.addEventListener('paste',e=>{if(e.target.id!=='qt')return;const tx=(e.clipboardData||window.clipboardData).getData('text');if(!/\n/.test(tx))return;e.preventDefault();const ls=tx.split(/\r?\n/).filter(x=>x.trim());if(ls.length)qnAdd(ls)});
document.addEventListener('toggle',e=>{if(e.target.id==='qmore')S.qmore=e.target.open},true);
document.addEventListener('input',e=>{
 if(e.target.id==='q'){S.q=e.target.value;render();return}
 if(e.target.id==='uq'){S.uq=e.target.value;render();const a=$('#uq');a.focus();a.setSelectionRange(a.value.length,a.value.length);return}
 if(e.target.id==='cq'){palSel=0;palRender();return}
 if(e.target.id==='sp-nd'){$('#sp-n').value=e.target.value.trim()?'Internal '+e.target.value.trim():'';return}
 if(e.target.id==='fs-q'){const r=$('#fs-res');r.hidden=!e.target.value.trim();r.innerHTML=fsRes(e.target.value);return}
 if(e.target.id==='qt'){const r=qnParse(e.target.value),pv=$('#qprev');if(pv)pv.innerHTML=/[@#]/.test(e.target.value)?`<span class="chip">${esc(DEPTN[r.div]||'Divisi nanti')}</span><span class="ic">${r.pic?av(r.pic,18)+' '+esc(U[r.pic].n):'<span class="cnt">PIC nanti</span>'}</span>`:'';return}
 if(e.target.id==='ctext'){const m=e.target.value.match(/@(\w*)$/);const box=$('#msug');
  if(!m){box.innerHTML='';return}const q=m[1].toLowerCase();const t=tasks.find(t=>t.id===S.open);
  const us=Object.keys(U).filter(k=>U[k].n.toLowerCase().replace('moh. ','').includes(q)||U[k].n.toLowerCase().startsWith(q)).slice(0,6);
  box.innerHTML=us.length?`<div class="msug">${us.map(k=>`<button type="button" data-ms="${k}">${av(k)}${esc(U[k].n)}${k===t.assignee?' <span class="cnt">assignee</span>':''}</button>`).join('')}</div>`:''}
});
document.addEventListener('change',e=>{const i=e.target.id,v=e.target.value;
 if(i==='sp-d'){$('#sp-nw').hidden=v!=='__new';const n=$('#sp-n');if(v==='__new'){n.value='';$('#sp-nd').focus()}else n.value='Internal '+DEPTN[v];return}
 if(i==='fs-add'&&v){const key=S.fshare.join(':');U[v].spaces=[...new Set([...(U[v].spaces||[]),key])];toast(U[v].n+' sekarang bisa melihat folder ini');S.modal='fshare'+Date.now();render();return}
 if(e.target.name==='m-k'){$('#m-fdw').hidden=v!=='koord';$('#m-brw').hidden=v!=='monthly';$('#m-dpw').hidden=v!=='monthly';$('#m-wfw').hidden=v!=='weekly';if($('#m-dpk'))$('#m-dpk').hidden=v!=='weekly';$('#m-dtw').hidden=v==='weekly'&&!S.medit;if($('#m-rpw'))$('#m-rpw').hidden=v==='weekly'}
 if(e.target.closest&&e.target.closest('#mf')){const c=$('#mclash');if(c)c.textContent=mClashTxt(mForm(),S.medit);
  if(i==='m-add'&&v){if(!S.minv.includes(v))S.minv.push(v);S.minvT=true;e.target.value='';$('#m-invw').innerHTML=mPick();return}
  if(e.target.name==='m-k'||i==='m-fd'||i==='m-wd'||i==='m-br'||e.target.dataset.mdpc){if(!S.minvT)S.minv=mDefInv(mForm());$('#m-invw').innerHTML=mPick()}return}
 if(i==='role'){if(S.timer)stopTimer();S.me=v;S.open=null;S.qa=null;S.fa=S.fp=S.ft='';S.mine=false;
  const ok=(S.nav==='qn'&&canAdd('monthly'))||((S.nav==='jadwal'||S.nav==='jadwalw')&&me().role!=='Guest')||(S.nav==='users'&&me().role==='Admin')||['home','inbox','mine'].includes(S.nav)||isMo()||SP.some(s=>navSpace()===s.id&&visSpace(s));if(!ok)S.nav='home';render();return}
 if(i==='fa'){S.fa=v;render();return}if(i==='fp'){S.fp=v;render();return}if(i==='ft'){S.ft=v;render();return}
 if(i==='ireadf'){S.ireadf=v;render();return}
 if(i==='urf'){S.urf=v;render();return}if(i==='usf'){S.usf=v;render();return}
 if(e.target.name==='u-pm'){$('#u-pw').hidden=v!=='manual';if(v==='manual')$('#u-pw').focus();return}
 if(e.target.name==='u-r'){$('#u-hw').hidden=v!=='Member';updSp();return}
 if(i==='u-d'){updSp();return}
 if(i==='qdate'&&S.qn){const wasEom=S.qn.due===eom(S.qn.date);S.qn.date=v||TODAY;if(wasEom)S.qn.due=eom(S.qn.date);render();return}
 if(i==='qpic'&&S.qn){S.qn.pic=v;return}
 if(i==='qfd'&&S.qn){if(S.qn.created.length){toast('Klik Selesai dulu untuk pindah grup');e.target.value=S.qn.fd;return}S.qn.fd=v;render();return}
 if(i==='qin'&&S.qn){S.qn.inputan=v.trim();render();$('#qt').focus();return}
 if(i==='qdue'&&S.qn){S.qn.due=v;render();return}
 if(e.target.dataset.qe){const [id,f]=e.target.dataset.qe.split(':'),t=tasks.find(x=>x.id===id);if(!t)return;const old=t[f];t[f]=f==='title'?(v.trim()||old):v;
  hist(t,f==='dept'?'Divisi':f==='assignee'?'PIC':f==='due'?'Due date':'Judul',f==='assignee'?(U[old]||{n:''}).n:old,f==='assignee'?(U[t[f]]||{n:''}).n:t[f]);render();return}
 if(i==='dmo'){S.dm=S.dm.slice(0,4)+'-'+String(v).padStart(2,'0');render();return}
 if(i==='dyr'){S.dm=v+S.dm.slice(4);render();return}
 if(i==='n-sp'){$('#n-mo').hidden=v!=='monthly';$('#n-fdw').hidden=!(LISTS[v]&&v!=='irnd');$('#n-fd').innerHTML=(LISTS[v]||[]).filter(l=>visFolder(v,l)).map(l=>`<option value="${l.id}">${esc(l.n)}</option>`).join('');$('#n-inw').hidden=!(hasIn(v)&&v!=='monthly');$('#n-ir').hidden=v!=='irnd';$('#n-pal').textContent=v==='irnd'?'Project (kosongkan untuk membuat project baru)':'Jadikan subtask dari (opsional)';$('#n-pa').innerHTML=paOpts(v);$('#n-st').innerHTML=stOf(v).map(([x])=>`<option>${x}</option>`).join('');return}
 if(e.target.dataset.rs){const t=tasks.find(t=>t.id===e.target.dataset.rs);setStatus(t,v);return}
 const t=tasks.find(t=>t.id===S.open);if(!t)return;
 if(i==='f-up'){addPhotos(t,e.target.files);return}
 if(i==='f-ikut'&&v){t.ikut=[...new Set([...(t.ikut||[]),v])];hist(t,'Ikut mengerjakan','',U[v].n);notify(v,t,'u','Anda ditambahkan ke task ini');toast(U[v].n+' ditambahkan');render();return}
 if(i==='f-share'&&v){t.share=[...new Set([...(t.share||[]),v])];hist(t,'Dibagikan','',U[v].n);notify(v,t,'u','Membagikan task ini ke Anda');toast('Task dibagikan ke '+U[v].n);render();return}
 if(e.target.dataset.sub!==undefined){const s=t.subs[+e.target.dataset.sub];s.d=e.target.checked?1:0;hist(t,'Subtask','',(s.d?'selesai: ':'dibuka lagi: ')+s.t);t.feed[t.feed.length-1].a='';t.feed[t.feed.length-1].b=(s.d?'mencentang checklist "':'membuka lagi checklist "')+s.t+'"';render();return}
 const set=(k,l,val,f2)=>{if(t[k]===val)return;hist(t,l,f2?f2(t[k]):t[k],f2?f2(val):val);t[k]=val;render()};
 if(i==='f-status')setStatus(t,v);
 else if(i==='f-title')set('title','Judul',v.trim()||t.title);
 else if(i==='f-as'){if(v&&t.space!=='monthly'&&!seesTask(v,t)){t.share=[...new Set([...(t.share||[]),v])];toast(U[v].n+' belum punya akses ke folder ini, task otomatis dibagikan ke dia')}notify(v,t,'u','Task di-assign ke Anda');set('assignee','Assignee',v,k=>U[k]?U[k].n:'kosong')}
 else if(i==='f-pr')set('pri','Priority',v,p=>PR[p][0]);
 else if(i==='f-in')set('inputan','Inputan',v);
 else if(i==='f-st')set('start','Start date',v,fmt);
 else if(i==='f-du')set('due','Due date',v,fmt);
 else if(i==='f-desc')set('desc',t.space==='monthly'?'Keterangan':'Deskripsi',v,x=>x?'(diubah)':'');
 else if(i==='f-list'){const nm=x=>listName(t.space,x);kidsOf(t).forEach(k=>k.list=v);set('list','Folder',v,nm)}
 else if(i==='f-tahap')set('tahap','Tahap',v);
 else if(i==='f-fin')set('fin','Tgl selesai',v,fmt);
 else if(i==='f-jenis')set('jenis','Jenis',v);
 else if(i==='f-co')set('co','Company',v);
 else if(i==='f-area')set('area','Produk / area',v);
 else if(i==='f-req')set('req','Requestor',v);
});
document.addEventListener('submit',e=>{e.preventDefault();const id=e.target.id;
 if(id==='qf'){const raw=$('#qt').value.trim();if(!raw){$('#qt').focus();return}qnAdd([raw]);return}
 if(e.target.classList.contains('qnf')){const inp=e.target.querySelector('input'),v=inp.value.trim();if(!v)return;const t=tasks.find(x=>x.id===e.target.dataset.id);
  t.feed.push({k:'c',w:S.me,t:nowT(),x:'Catatan meeting '+fmt(S.qn.date)+': '+v});S.qn.upd.push({id:t.id,note:v});notify(t.assignee,t,'u','Catatan meeting: '+v.slice(0,40));render();
  const nx=document.querySelector(`.qnf[data-id="${t.id}"] input`);nx&&nx.focus();return}
 if(id==='uf'){const err=m=>{$('#uerr').textContent=m};const k=S.uedit,n=$('#u-n').value.trim(),em=$('#u-e').value.trim().toLowerCase();
  const rr=document.querySelector('input[name="u-r"]:checked'),role=rr?rr.value:(k?U[k].role:'Member'),dept=$('#u-d').value,head=$('#u-h').checked&&role==='Member';
  if(n.length<2)return err('Isi nama lengkap.');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))return err('Format email belum benar, contoh: nama@'+MAILDOM);
  if(Object.keys(U).some(x=>x!==k&&U[x].email.toLowerCase()===em))return err('Email ini sudah dipakai pengguna lain.');
  if(!role)return err('Pilih role.');if((role==='Member'||role==='Guest')&&!dept)return err('Pilih divisi untuk role '+role+'.');
  const spaces=[...document.querySelectorAll('[data-usp]')].filter(c=>c.checked&&!c.disabled).map(c=>c.dataset.usp);
  if(k){if(U[k].role==='Admin'&&role!=='Admin'&&Object.values(U).filter(u=>u.role==='Admin'&&!u.off).length<2)return err('Minimal harus ada satu Admin aktif.');
   const wasP=U[k].pending;Object.assign(U[k],{n,email:em,role,dept:dept||undefined,head,spaces,pending:false,off:wasP?false:U[k].off});S.modal=null;toast(wasP?n+' sekarang bisa masuk ke workspace':'Perubahan '+n+' disimpan');render();return}
  const pm=(document.querySelector('input[name="u-pm"]:checked')||{}).value,mc=$('#u-mc').checked;let pw;
  if(pm==='manual'){pw=$('#u-pw').value;if(pw.length<8||!/[A-Za-z]/.test(pw)||!/\d/.test(pw))return err('Password minimal 8 karakter dan berisi huruf serta angka.')}else pw=genPw();
  const id='u'+Date.now().toString(36),cols=['#2f6fd0','#1f7a4c','#b4690e','#7a5aa6','#c0392b','#0f7b8a','#a8458a','#4a7a8c'];
  U[id]={n,email:em,role,dept:dept||undefined,head,spaces,c:cols[Object.keys(U).length%cols.length],created:TODAY,last:'',pwSet:true,mustChange:mc};
  S.cred={name:n,email:em,pw,mc};S.modal='cred'+Date.now();render();return}
 if(id==='mf'){const f=mForm();if(!f.date&&!(f.dates&&f.dates.length)){if(f.kind==='weekly'&&!S.medit){toast('Pilih minimal satu tanggal weekly');return}$('#m-dt').focus();return}if(f.kind==='monthly'&&!document.querySelector('[data-mdpc]:checked')){toast('Pilih minimal satu divisi');return}if(f.kind==='koord'&&!f.fd){toast('Pilih grup koordinasi');return}if(f.kind==='weekly'&&!f.fd&&!f.wdept){toast('Pilih weekly divisi');return}if(!mCan(f)){toast('Anda hanya bisa mengatur Weekly divisi Anda');return}
  if(f.time&&f.end&&f.end<=f.time){toast('Jam selesai harus setelah jam mulai');$('#m-t2').focus();return}
  const inv=[...(S.minv||[])];
  if(S.medit){const m=meets.find(x=>x.id===S.medit),moved=m.date!==f.date||m.time!==f.time||m.end!==f.end,old=m.inv||[];if(m.date!==f.date&&!m.moved)m.moved=m.date;Object.assign(m,{date:f.date,time:f.time,end:f.end,place:f.place,agenda:f.agenda,inv,depts:f.depts});
   const baru=inv.filter(k=>!old.includes(k));mNotify(m,'Undangan meeting '+fmtLong(m.date)+', '+mJam(m),baru);if(moved)mNotify(m,'Jadwal diubah ke '+fmtLong(m.date)+', '+mJam(m),inv.filter(k=>old.includes(k)));
   S.medit=null;S.mcal=m.id;S.mcalNew=moved||baru.length?'':'';S.modal=moved||baru.length?'mcal'+Date.now():null;toast('Jadwal diperbarui'+(moved?'. Perbarui juga di Google Calendar':''));render();return}
  if(f.kind==='weekly'){const fd=f.fd||wkEnsure(f.wdept);
   const made=f.dates.map(d=>{const m=Object.assign({id:'m'+Math.random().toString(36).slice(2,9),st:'jadwal',by:S.me,n:0,moved:'',rr:''},f,{fd,date:d,inv:[...inv]});delete m.dates;delete m.wdept;meets.push(m);return m});
   mNotify(made[0],'Jadwal '+mTitle(made[0])+' '+MONL[+made[0].date.slice(5,7)-1]+': '+made.map(m=>D(m.date).getDate()).join(', ')+' · '+mJam(made[0]));
   S.jt='list';S.mcal=made[0].id;S.mcalList=made.map(m=>m.id);S.mcalNew=made.length>1?made.length+' tanggal':' ';S.modal='mcal'+Date.now();toast(made.length+' jadwal '+mTitle(made[0])+' dibuat');render();return}
  S.mcalList=null;
  const rp=($('#m-rp')||{value:'0'}).value,[st,nn]=rp.split(':'),dates=[f.date];
  for(let k=1;k<(+nn||1);k++)dates.push(st==='m'?addMonths(f.date,k):addDays(f.date,+st*k));
  const rr=nn?(st==='m'?'FREQ=MONTHLY;COUNT='+nn:'FREQ=WEEKLY;'+(+st===14?'INTERVAL=2;':'')+'COUNT='+nn):'',made=[];
  dates.forEach(d=>{const m=Object.assign({id:'m'+Math.random().toString(36).slice(2,9),st:'jadwal',by:S.me,n:0,moved:'',rr},f,{date:d,inv:[...inv]});meets.push(m);made.push(m)});
  mNotify(made[0],'Undangan meeting '+fmtLong(made[0].date)+', '+mJam(made[0])+(made.length>1?' (berulang '+made.length+' kali)':''));
  S.jt='list';S.mcal=made[0].id;S.mcalNew=made.length>1?made.length+' kali':' ';S.modal='mcal'+Date.now();render();return}
 if(id==='spf'){let d=$('#sp-d').value;const nm=$('#sp-n').value.trim(),c=(document.querySelector('input[name="sp-c"]:checked')||{}).value||SWC[0];
  if(d==='__new'){const nd=$('#sp-nd').value.trim();if(!nd){toast('Isi nama divisi baru');$('#sp-nd').focus();return}
   if(Object.values(DEPTN).some(x=>x.toLowerCase()===nd.toLowerCase())){toast('Divisi "'+nd+'" sudah ada');return}
   d=nd.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,12)||('d'+Date.now().toString(36));while(DEPTN[d])d+='x';DEPTN[d]=nd}
  if(!nm){toast('Isi nama space');$('#sp-n').focus();return}
  const id='i'+d+Math.random().toString(36).slice(2,5);SP.push({id,n:nm,k:'INT',c,internal:true,dept:d});
  const fs=$('#sp-f').value.split(',').map(x=>x.trim()).filter(Boolean);LISTS[id]=(fs.length?fs:['Umum']).map((n,j)=>({id:'l'+Date.now().toString(36)+j,n}));
  S.modal=null;toast(nm+' dibuat. Tambahkan anggota divisi '+DEPTN[d]+' lewat Pengguna & akses');go('w:'+id);return}
 if(id==='brf'){const nm=$('#br-n').value.trim(),c=(document.querySelector('input[name="br-c"]:checked')||{}).value||SWC[3];if(!nm){$('#br-n').focus();return}
  if(Object.values(BR).some(b=>b.n.toLowerCase()===nm.toLowerCase())){toast('Brand "'+nm+'" sudah ada');return}
  let k=nm.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,10)||('b'+Date.now().toString(36));while(BR[k])k+='x';BR[k]={n:nm,c};
  S.modal=null;toast('Brand '+nm+' ditambahkan');go('m:'+k);return}
 if(id==='addfold'){const v=$('#foldn').value.trim(),sp=S.addf;if(!v){$('#foldn').focus();return}
  if((LISTS[sp]||[]).some(l=>l.n.toLowerCase()===v.toLowerCase())){toast('Folder "'+v+'" sudah ada');return}
  const depts=[...document.querySelectorAll('[data-fdp]')].filter(c=>c.checked).map(c=>c.dataset.fdp);
  const l={id:'l'+Date.now().toString(36),n:v};if(depts.length)l.depts=depts;if(depts.length&&$('#fshr')&&$('#fshr').checked)l.shared=true;
  (LISTS[sp]=LISTS[sp]||[]).push(l);S.addf=null;S.modal=null;toast('Folder "'+v+'" ditambahkan');go('f:'+sp+':'+l.id);return}
 if(id==='qaf'){const v=$('#qat').value.trim();if(!v)return;const sp=navSpace()||'monthly';
  const t=T({space:sp,list:LISTS[sp]?(navList()||(sp==='irnd'?'sys':(LISTS[sp].find(l=>visFolder(sp,l))||{}).id)):undefined,brand:sp==='monthly'?moBr():undefined,dept:sp==='monthly'?(moDp()||undefined):undefined,title:v,status:S.qa,assignee:S.me,creator:S.me,meet:TODAY});
  t.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'membuat task'});tasks.push(t);toast(tn(t)+' dibuat di '+S.qa);render();return}
 if(id==='nf'){const v=$('#n-title').value.trim();if(!v){$('#n-title').focus();return}const sp=$('#n-sp').value;
  const pa=$('#n-pa').value,pt=pa&&tasks.find(x=>x.id===pa);
  const t=T({space:sp,list:LISTS[sp]?(pt?pt.list:($('#n-fd')&&!$('#n-fd').closest('[hidden]')?$('#n-fd').value:(navList()||(sp==='irnd'?'sys':(LISTS[sp].find(l=>visFolder(sp,l))||{}).id)))):undefined,parent:pa,title:v,status:$('#n-st').value,assignee:$('#n-as').value,pri:$('#n-pr').value,due:$('#n-du').value,start:TODAY,
   tags:$('#n-tg').value.split(',').map(x=>x.trim().toLowerCase()).filter(Boolean),desc:$('#n-ds').value.trim(),creator:S.me,meet:TODAY,
   brand:sp==='monthly'?(pt?pt.brand:$('#n-br').value):undefined,tahap:sp==='irnd'&&pa?$('#n-th').value:'',area:sp==='irnd'&&!pa?$('#n-ar').value:'',co:sp==='irnd'&&!pa?$('#n-co').value:'',jenis:sp==='irnd'&&!pa?$('#n-je').value:'',dept:sp==='monthly'?(pt?pt.dept:$('#n-dp').value):undefined,inputan:sp==='monthly'?$('#n-in').value.trim():hasIn(sp)?$('#n-in2').value.trim():''});
  t.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'membuat task'});tasks.push(t);notify(t.assignee,t,'u','Task di-assign ke Anda');
  S.modal=null;S.open=t.id;toast(tn(t)+' dibuat');render();return}
 if(id==='vtf'){const v=$('#vtr').value.trim();if(!v){toast('Isi alasan pencabutan dulu');$('#vtr').focus();return}const t=tasks.find(t=>t.id===S.open);
  t.feed.push({k:'c',w:S.me,t:nowT(),x:'Status DONE dicabut: '+v});t.feed.push({k:'h',w:S.me,t:nowT(),f:'Status',a:'DONE',b:'WORK IN PROGRESS'});
  t.status='WORK IN PROGRESS';t.fin='';t.mst[CM]='WORK IN PROGRESS';t.verif={st:'tolak',by:S.me,at:TODAY,note:v};S.vrej=null;
  notify(t.assignee,t,'u','Status DONE dicabut audit: '+v.slice(0,50));toast(tn(t)+' dikembalikan ke WORK IN PROGRESS');render();return}
 if(id.startsWith('wka-')){const inp=e.target.querySelector('input'),v=inp.value.trim();if(!v)return;const p=tasks.find(t=>t.id===id.slice(4));if(!p)return;
  const k=T({space:p.space,list:p.list,parent:p.id,title:v,assignee:me().role==='Admin'||me().role==='Member QMR'?'':S.me,creator:S.me,meet:p.meet});
  k.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'membuat poin dari '+p.key});tasks.push(k);p.feed.push({k:'h',w:S.me,t:nowT(),f:'Subtask',a:'',b:'menambah poin "'+v+'"'});
  toast('Poin ditambahkan. Klik untuk atur PIC dan due date');render();setTimeout(()=>{const f=document.getElementById(id);f&&f.querySelector('input').focus()});return}
 if(id==='kidf'){const v=$('#kidt').value.trim();if(!v)return;const p=tasks.find(t=>t.id===S.open);
  const k=T({space:p.space,list:p.list,parent:p.id,tahap:p.space==='irnd'?'Lainnya':'',pri:p.pri,brand:p.brand,dept:p.dept,inputan:p.inputan,title:v,assignee:me().dept?S.me:(p.assignee||S.me),creator:S.me,meet:p.meet});
  k.feed.push({k:'h',w:S.me,t:nowT(),f:'Task',a:'',b:'membuat subtask dari '+p.key});tasks.push(k);
  p.feed.push({k:'h',w:S.me,t:nowT(),f:'Subtask',a:'',b:'menambah subtask "'+v+'"'});toast(tn(k)+' ditambahkan sebagai subtask');render();return}
 if(id==='subf'){const v=$('#subt').value.trim();if(!v)return;const t=tasks.find(t=>t.id===S.open);t.subs.push({t:v,d:0});hist(t,'Subtask','','');t.feed[t.feed.length-1].b='menambah checklist "'+v+'"';render();return}
 if(id==='cf'){const v=$('#ctext').value.trim();if(!v)return;const t=tasks.find(t=>t.id===S.open);
  t.feed.push({k:'c',w:S.me,t:nowT(),x:v});$('#ctext').value='';
  Object.keys(U).forEach(k=>{if(v.includes('@'+U[k].n))notify(k,t,'m','menyebut Anda: "'+v.replace(/@[A-Z][\w.]*(?: [A-Z][\w.]*){0,2}/g,'').trim().slice(0,50)+'"')});
  if(t.assignee!==S.me&&!v.includes('@'+(U[t.assignee]||{}).n))notify(t.assignee,t,'u','Komentar baru: "'+v.slice(0,40)+'"');
  const m=v.match(/https?:\/\/docs\.google\.com\/(spreadsheets|document|presentation)\/\S*/);
  if(m)t.att.push({ty:m[1]==='spreadsheets'?'sheet':m[1]==='document'?'doc':'slide',n:'Berkas Google dari komentar'});
  render()}
});
/* drag antar kolom */
let dragId=null;
document.addEventListener('dragstart',e=>{const c=e.target.closest&&e.target.closest('[data-drag]');if(c){dragId=c.dataset.drag;e.dataTransfer.effectAllowed='move';try{e.dataTransfer.setData('text/plain',dragId)}catch(_){}}});
document.addEventListener('dragover',e=>{const c=e.target.closest&&e.target.closest('[data-col]');if(c&&dragId){e.preventDefault();document.querySelectorAll('.col.over').forEach(x=>x!==c&&x.classList.remove('over'));c.classList.add('over')}});
document.addEventListener('dragend',()=>{dragId=null;document.querySelectorAll('.col.over').forEach(x=>x.classList.remove('over'))});
document.addEventListener('drop',e=>{const c=e.target.closest&&e.target.closest('[data-col]');if(!c||!dragId)return;e.preventDefault();
 const t=tasks.find(t=>t.id===dragId);dragId=null;setStatus(t,c.dataset.col);render()});
render();
wsLive();
};
