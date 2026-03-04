function S(id,v){const e=document.getElementById(id);if(e)e.style.display=v;}
</script>
<style>
/* ════════════════════════════════════════════════
   RESET
════════════════════════════════════════════════ */
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html{height:100%;scroll-behavior:smooth;}
body{min-height:100%;overflow-x:hidden;-webkit-font-smoothing:antialiased;background:var(--ink);color:var(--paper);}
::-webkit-scrollbar{width:3px;height:3px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--rule2);}

/* ════════════════════════════════════════════════
   DESIGN TOKENS — DARK
════════════════════════════════════════════════ */
[data-theme="dark"]{
  --ink:        #080808;
  --ink2:       #0d0d0d;
  --ink3:       #111111;
  --ink4:       #161616;
  --ink5:       #1c1c1c;
  --rule1:      #1e1e1e;
  --rule2:      #282828;
  --rule3:      #333333;
  --paper:      #e8e2d8;
  --paper2:     #9a9285;
  --paper3:     #5a5450;
  --amber:      #e8a020;
  --amber2:     #c07810;
  --amber-dim:  rgba(232,160,32,.1);
  --amber-line: rgba(232,160,32,.2);
  --red:        #c84040;
  --red-dim:    rgba(200,64,64,.1);
  --green:      #3a8c60;
  --green-dim:  rgba(58,140,96,.1);
  --blue:       #4878c0;
  --blue-dim:   rgba(72,120,192,.1);
  --glow:       0 0 40px rgba(232,160,32,.06);
  --shadow:     0 20px 60px rgba(0,0,0,.9);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono:  'IBM Plex Mono', 'Courier New', monospace;
  --font-sans:  'IBM Plex Sans', system-ui, sans-serif;
}
[data-theme="light"]{
  --ink:        #f5f0e8;
  --ink2:       #ede8dc;
  --ink3:       #e5dfd0;
  --ink4:       #dcd5c4;
  --ink5:       #d0c8b4;
  --rule1:      #d8d0bc;
  --rule2:      #c8bea8;
  --rule3:      #b8ac94;
  --paper:      #1a1510;
  --paper2:     #4a4035;
  --paper3:     #8a7d6a;
  --amber:      #a06010;
  --amber2:     #805008;
  --amber-dim:  rgba(160,96,16,.08);
  --amber-line: rgba(160,96,16,.2);
  --red:        #a03030;
  --red-dim:    rgba(160,48,48,.08);
  --green:      #2a6c40;
  --green-dim:  rgba(42,108,64,.08);
  --blue:       #3060a8;
  --blue-dim:   rgba(48,96,168,.08);
  --glow:       0 0 40px rgba(160,96,16,.04);
  --shadow:     0 20px 60px rgba(0,0,0,.15);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono:  'IBM Plex Mono', 'Courier New', monospace;
  --font-sans:  'IBM Plex Sans', system-ui, sans-serif;
}

/* ════════════════════════════════════════════════
   SCREENS
════════════════════════════════════════════════ */
#sc-land{display:flex;flex-direction:column;min-height:100dvh;background:var(--ink);color:var(--paper);}
#sc-auth{display:none;min-height:100dvh;align-items:center;justify-content:center;background:var(--ink);padding:20px;}
#sc-app{display:none;height:100%;height:100dvh;flex-direction:column;overflow:hidden;background:var(--ink);}

/* ════════════════════════════════════════════════
   LANDING — NAV
════════════════════════════════════════════════ */
.ln{position:sticky;top:0;z-index:100;height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:rgba(8,8,8,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--rule1);}
.ln-logo{display:flex;align-items:center;gap:14px;text-decoration:none;}
.ln-logo-mark{width:28px;height:28px;border:1px solid var(--amber);display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:10px;font-weight:700;color:var(--amber);letter-spacing:.05em;}
.ln-logo-text{font-family:var(--font-serif);font-size:15px;font-weight:700;color:var(--paper);letter-spacing:.02em;}
.ln-logo-text span{color:var(--amber);}
.ln-links{display:flex;gap:32px;}
.ln-link{font-family:var(--font-mono);font-size:11px;font-weight:400;color:var(--paper3);letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:color .2s;cursor:pointer;background:none;border:none;}
.ln-link:hover{color:var(--paper);}
.ln-actions{display:flex;gap:10px;align-items:center;}
.ln-ham{display:none;flex-direction:column;gap:4px;cursor:pointer;padding:8px;background:none;border:none;}
.ln-ham span{width:18px;height:1px;background:var(--paper2);display:block;}
.ln-mob{display:none;position:fixed;top:56px;left:0;right:0;z-index:99;background:var(--ink2);border-bottom:1px solid var(--rule1);padding:16px;flex-direction:column;gap:1px;}
.ln-mob.open{display:flex;}
.ln-mob a,.ln-mob button{display:block;width:100%;padding:12px 14px;font-family:var(--font-mono);font-size:11px;font-weight:400;color:var(--paper2);letter-spacing:.08em;text-transform:uppercase;text-decoration:none;background:none;border:none;text-align:left;cursor:pointer;transition:color .15s;}
.ln-mob a:hover,.ln-mob button:hover{color:var(--paper);}
.ln-mob-sep{height:1px;background:var(--rule1);margin:10px 0;}

/* ════════════════════════════════════════════════
   LANDING — HERO
════════════════════════════════════════════════ */
.lh{position:relative;min-height:calc(100dvh - 56px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 48px 60px;text-align:center;overflow:hidden;}
.lh-scanlines{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.008) 2px,rgba(255,255,255,.008) 4px);pointer-events:none;}
.lh-cross{position:absolute;width:100%;height:100%;pointer-events:none;}
.lh-cross::before{content:"";position:absolute;left:50%;top:0;bottom:0;width:1px;background:linear-gradient(180deg,transparent,rgba(232,160,32,.04),transparent);}
.lh-cross::after{content:"";position:absolute;top:50%;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(232,160,32,.04),transparent);}
.lh-ticker{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 8px;border:1px solid var(--rule2);margin-bottom:36px;font-family:var(--font-mono);font-size:10px;font-weight:500;color:var(--paper3);letter-spacing:.1em;text-transform:uppercase;animation:fadeIn .6s ease both;}
.lh-ticker-dot{width:5px;height:5px;background:var(--amber);animation:blk 1.4s step-end infinite;}
@keyframes blk{0%,100%{opacity:1}50%{opacity:0}}
.lh-h1{font-family:var(--font-serif);font-size:clamp(52px,8vw,112px);font-weight:900;line-height:.88;letter-spacing:-.02em;margin-bottom:28px;animation:fadeIn .6s .06s ease both;}
.lh-h1-em{display:block;font-style:italic;color:var(--amber);}
.lh-rule{width:60px;height:1px;background:var(--amber);margin:0 auto 28px;animation:fadeIn .6s .12s ease both;}
.lh-lead{font-family:var(--font-sans);font-size:16px;font-weight:300;color:var(--paper2);max-width:440px;line-height:1.75;margin:0 auto 42px;animation:fadeIn .6s .18s ease both;letter-spacing:.01em;}
.lh-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:40px;animation:fadeIn .6s .24s ease both;}
.lh-footnote{font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.08em;text-transform:uppercase;animation:fadeIn .6s .3s ease both;}
.lh-footnote span{color:var(--paper2);}
@keyframes fadeIn{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:translateY(0);}}

/* ════════════════════════════════════════════════
   LANDING — DATA STRIP
════════════════════════════════════════════════ */
.l-strip{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--rule1);border-bottom:1px solid var(--rule1);}
.l-strip-item{padding:22px 32px;border-right:1px solid var(--rule1);display:flex;flex-direction:column;gap:4px;}
.l-strip-item:last-child{border-right:none;}
.l-strip-n{font-family:var(--font-mono);font-size:22px;font-weight:700;color:var(--amber);}
.l-strip-l{font-family:var(--font-mono);font-size:9px;font-weight:400;color:var(--paper3);letter-spacing:.1em;text-transform:uppercase;}

/* ════════════════════════════════════════════════
   LANDING — FEATURES
════════════════════════════════════════════════ */
.l-sect{max-width:1120px;margin:0 auto;padding:80px 48px;}
.l-sect-eyebrow{font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--amber);margin-bottom:14px;display:flex;align-items:center;gap:10px;}
.l-sect-eyebrow::after{content:"";flex:0 0 40px;height:1px;background:var(--amber);}
.l-sect-h{font-family:var(--font-serif);font-size:clamp(32px,5vw,54px);font-weight:900;line-height:.95;letter-spacing:-.02em;margin-bottom:12px;}
.l-sect-h em{font-style:italic;color:var(--amber);}
.l-sect-sub{font-family:var(--font-sans);font-size:15px;font-weight:300;color:var(--paper2);max-width:480px;line-height:1.7;margin-bottom:52px;}
.l-feats{display:grid;grid-template-columns:repeat(3,1fr);}
.l-feat{padding:28px 24px;border-top:1px solid var(--rule1);border-right:1px solid var(--rule1);transition:background .2s;}
.l-feat:hover{background:var(--ink2);}
.l-feat:nth-child(3n){border-right:none;}
.l-feat-num{font-family:var(--font-mono);font-size:10px;color:var(--amber);font-weight:700;letter-spacing:.1em;margin-bottom:14px;}
.l-feat-title{font-family:var(--font-serif);font-size:16px;font-weight:700;margin-bottom:8px;}
.l-feat-desc{font-family:var(--font-sans);font-size:13px;font-weight:300;color:var(--paper2);line-height:1.65;}

/* ════════════════════════════════════════════════
   LANDING — PRICING
════════════════════════════════════════════════ */
.l-plans{display:grid;grid-template-columns:1fr 1fr;max-width:680px;margin:0 auto;border:1px solid var(--rule1);}
.l-plan{padding:36px 32px;border-right:1px solid var(--rule1);}
.l-plan:last-child{border-right:none;}
.l-plan-flag{font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--amber);margin-bottom:14px;}
.l-plan-name{font-family:var(--font-serif);font-size:18px;font-weight:700;margin-bottom:4px;}
.l-plan-price{font-family:var(--font-mono);font-size:34px;font-weight:700;color:var(--amber);line-height:1;}
.l-plan-price span{font-size:13px;color:var(--paper3);font-weight:400;}
.l-plan-cycle{font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.05em;margin-top:4px;margin-bottom:20px;}
.l-plan-rule{height:1px;background:var(--rule1);margin-bottom:18px;}
.l-plan-feats{display:flex;flex-direction:column;gap:9px;margin-bottom:24px;}
.l-plan-feat{font-family:var(--font-mono);font-size:11px;color:var(--paper2);display:flex;align-items:center;gap:8px;}
.l-plan-feat::before{content:"→";color:var(--amber);flex-shrink:0;}
.l-footer{border-top:1px solid var(--rule1);padding:24px 48px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
.l-footer-copy{font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.05em;}
.l-footer-links{display:flex;gap:24px;}
.l-footer-link{font-family:var(--font-mono);font-size:10px;color:var(--paper3);text-decoration:none;letter-spacing:.05em;transition:color .15s;}
.l-footer-link:hover{color:var(--paper2);}

/* ════════════════════════════════════════════════
   AUTH
════════════════════════════════════════════════ */
.au-wrap{width:100%;max-width:380px;}
.au-back{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.08em;text-transform:uppercase;cursor:pointer;margin-bottom:28px;background:none;border:none;transition:color .15s;}
.au-back:hover{color:var(--paper2);}
.au-card{border:1px solid var(--rule2);padding:36px;background:var(--ink2);}
.au-logo{display:flex;align-items:center;gap:12px;margin-bottom:28px;}
.au-logo-mark{width:30px;height:30px;border:1px solid var(--amber);display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:10px;font-weight:700;color:var(--amber);}
.au-logo-text{font-family:var(--font-serif);font-size:16px;font-weight:700;color:var(--paper);}
.au-logo-text span{color:var(--amber);font-style:italic;}
.au-tabs{display:flex;border-bottom:1px solid var(--rule1);margin-bottom:24px;gap:0;}
.au-tab{flex:1;padding:10px;font-family:var(--font-mono);font-size:10px;font-weight:500;color:var(--paper3);letter-spacing:.08em;text-transform:uppercase;cursor:pointer;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all .15s;}
.au-tab.on{color:var(--amber);border-bottom-color:var(--amber);}
.au-form{display:flex;flex-direction:column;gap:10px;}
.au-or{display:flex;align-items:center;gap:12px;font-family:var(--font-mono);font-size:9px;color:var(--paper3);letter-spacing:.1em;text-transform:uppercase;margin:4px 0;}
.au-or::before,.au-or::after{content:"";flex:1;height:1px;background:var(--rule1);}
.au-err{border:1px solid var(--red);background:var(--red-dim);color:var(--red);padding:10px 12px;font-family:var(--font-mono);font-size:11px;display:none;margin-top:4px;}
.au-foot{margin-top:18px;text-align:center;font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.04em;}
.au-foot a{color:var(--amber);cursor:pointer;text-decoration:none;}

/* ════════════════════════════════════════════════
   APP — TOPBAR
════════════════════════════════════════════════ */
.at{flex-shrink:0;height:48px;display:flex;align-items:center;padding:0 16px;gap:12px;background:var(--ink);border-bottom:1px solid var(--rule1);z-index:100;}
.at-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;}
.at-logo-mark{width:24px;height:24px;border:1px solid var(--amber);display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:9px;font-weight:700;color:var(--amber);}
.at-logo-text{font-family:var(--font-serif);font-size:13px;font-weight:700;color:var(--paper);}
.at-logo-text em{color:var(--amber);font-style:italic;}
.at-stats{display:flex;align-items:center;gap:1px;margin:0 auto;}
.ats{display:flex;align-items:center;gap:10px;padding:0 14px;border-right:1px solid var(--rule1);height:28px;}
.ats:last-child{border-right:none;}
.ats-l{font-family:var(--font-mono);font-size:9px;color:var(--paper3);letter-spacing:.08em;text-transform:uppercase;}
.ats-v{font-family:var(--font-mono);font-size:12px;font-weight:600;}
.ats-v.up{color:var(--amber);}
.ats-v.dn{color:var(--red);}
.at-right{display:flex;align-items:center;gap:8px;}
.sync{width:6px;height:6px;border-radius:50%;background:var(--green);transition:background .3s;}
.sync.saving{background:var(--amber);animation:sdp .6s infinite;}
.sync.err{background:var(--red);}
@keyframes sdp{0%,100%{opacity:1}50%{opacity:.15}}
.at-user{display:flex;align-items:center;gap:8px;padding:4px 10px 4px 4px;border:1px solid var(--rule1);font-family:var(--font-mono);font-size:11px;color:var(--paper2);}
.at-avatar{width:22px;height:22px;border:1px solid var(--rule2);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:var(--amber);background:var(--amber-dim);}
.at-avatar img{width:22px;height:22px;object-fit:cover;display:none;}
.at-btn{height:28px;padding:0 10px;font-family:var(--font-mono);font-size:9px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;background:none;border:1px solid var(--rule2);color:var(--paper3);transition:all .15s;}
.at-btn:hover{border-color:var(--rule3);color:var(--paper2);}
.at-btn.primary{border-color:var(--amber);color:var(--amber);}
.at-btn.primary:hover{background:var(--amber-dim);}

/* ════════════════════════════════════════════════
   APP — BODY
════════════════════════════════════════════════ */
.ab{flex:1;display:flex;min-height:0;overflow:hidden;position:relative;}

/* ════════════════════════════════════════════════
   SIDEBAR
════════════════════════════════════════════════ */
.sb{width:180px;flex-shrink:0;display:flex;flex-direction:column;background:var(--ink);border-right:1px solid var(--rule1);overflow-y:auto;padding:8px 0;}
.sb-label{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--paper3);padding:12px 16px 6px;}
.sb-item{display:flex;align-items:center;gap:10px;width:100%;padding:8px 16px;font-family:var(--font-mono);font-size:11px;font-weight:400;color:var(--paper3);letter-spacing:.03em;cursor:pointer;transition:all .15s;background:none;border:none;text-align:left;border-left:2px solid transparent;}
.sb-item:hover{color:var(--paper2);background:var(--ink2);}
.sb-item.on{color:var(--amber);border-left-color:var(--amber);background:var(--amber-dim);}
.sb-item-ico{font-size:12px;width:14px;flex-shrink:0;opacity:.7;}
.sb-rule{height:1px;background:var(--rule1);margin:8px 16px;}
.sb-foot{margin-top:auto;padding:8px 0 calc(8px + env(safe-area-inset-bottom));}

/* ════════════════════════════════════════════════
   MAIN
════════════════════════════════════════════════ */
.mc{position:absolute;top:0;left:180px;right:0;bottom:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;background:var(--ink);}
.pg{display:none;padding:24px;}
.pg.on{display:block;}

/* ════════════════════════════════════════════════
   PAGE HEADER
════════════════════════════════════════════════ */
.ph{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid var(--rule1);flex-wrap:wrap;gap:12px;}
.ph-left{}
.ph-eyebrow{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--paper3);margin-bottom:4px;}
.ph-title{font-family:var(--font-serif);font-size:24px;font-weight:900;letter-spacing:-.02em;line-height:1;}
.ph-title em{font-style:italic;color:var(--amber);}
.ph-right{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}

/* ════════════════════════════════════════════════
   KPI STRIPS
════════════════════════════════════════════════ */
.kpi-strip{display:grid;gap:0;margin-bottom:24px;border:1px solid var(--rule1);}
.kpi-strip.k4{grid-template-columns:repeat(4,1fr);}
.kpi-strip.k3{grid-template-columns:repeat(3,1fr);}
.kpi-strip.k2{grid-template-columns:repeat(2,1fr);}
.kpi{padding:16px 18px;border-right:1px solid var(--rule1);position:relative;}
.kpi:last-child{border-right:none;}
.kpi-label{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--paper3);margin-bottom:6px;}
.kpi-val{font-family:var(--font-mono);font-size:20px;font-weight:700;line-height:1;}
.kpi-val.up{color:var(--amber);}
.kpi-val.dn{color:var(--red);}
.kpi-val.nt{color:var(--paper);}
.kpi-val.bl{color:var(--blue);}
.kpi-sub{font-family:var(--font-mono);font-size:9px;color:var(--paper3);margin-top:4px;letter-spacing:.04em;}

/* ════════════════════════════════════════════════
   PANEL (card equivalent)
════════════════════════════════════════════════ */
.panel{border:1px solid var(--rule1);background:var(--ink);margin-bottom:16px;}
.panel-head{display:flex;align-items:center;justify-content:space-between;padding:12px 18px;border-bottom:1px solid var(--rule1);flex-wrap:wrap;gap:8px;}
.panel-title{font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--paper2);}
.panel-body{padding:16px 18px;}
.panel-body.np{padding:0;}

/* ════════════════════════════════════════════════
   CALENDAR
════════════════════════════════════════════════ */
.cal-nav{display:flex;align-items:center;gap:10px;}
.cal-btn{width:26px;height:26px;display:flex;align-items:center;justify-content:center;border:1px solid var(--rule2);cursor:pointer;font-size:13px;color:var(--paper3);background:none;transition:all .15s;}
.cal-btn:hover{border-color:var(--rule3);color:var(--paper2);}
.cal-month{font-family:var(--font-serif);font-size:18px;font-weight:700;min-width:200px;letter-spacing:-.01em;}
.streak-tag{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border:1px solid var(--rule2);font-family:var(--font-mono);font-size:9px;letter-spacing:.04em;color:var(--paper3);}
.streak-tag.win{border-color:var(--amber-line);color:var(--amber);}
.streak-tag.loss{border-color:rgba(200,64,64,.3);color:var(--red);}
.cal-dow{display:grid;grid-template-columns:repeat(7,1fr);border-bottom:1px solid var(--rule1);}
.cal-dow div{padding:8px 0;text-align:center;font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--paper3);}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--rule1);padding:1px;}
.cal-cell{background:var(--ink);min-height:74px;padding:7px 8px 5px;cursor:pointer;transition:background .15s;display:flex;flex-direction:column;gap:2px;position:relative;}
.cal-cell:hover{background:var(--ink3);}
.cal-cell.empty{background:var(--ink2);cursor:default;pointer-events:none;}
.cal-cell.today::after{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--amber);}
.cal-cell.win-day{background:rgba(58,140,96,.04);}
.cal-cell.loss-day{background:rgba(200,64,64,.04);}
.cc-num{font-family:var(--font-mono);font-size:10px;color:var(--paper3);font-weight:500;}
.cc-pnl{font-family:var(--font-mono);font-size:11px;font-weight:700;letter-spacing:.02em;}
.cc-pnl.up{color:var(--amber);}
.cc-pnl.dn{color:var(--red);}
.cc-t{font-family:var(--font-mono);font-size:9px;color:var(--paper3);}
.cc-note{font-family:var(--font-sans);font-size:9px;color:var(--paper3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.cc-bar{height:2px;margin-top:auto;}
.cc-bar.up{background:var(--amber);}
.cc-bar.dn{background:var(--red);}
.cc-emo{font-size:11px;margin-top:auto;line-height:1;}

/* ════════════════════════════════════════════════
   CHARTS
════════════════════════════════════════════════ */
.ch-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.ch-full{grid-column:span 2;}

/* ════════════════════════════════════════════════
   JOURNAL — NEW
════════════════════════════════════════════════ */
.j-bar{display:flex;align-items:center;gap:8px;margin-bottom:18px;flex-wrap:wrap;}
.j-search-wrap{position:relative;flex:1;min-width:200px;}
.j-search-wrap input{padding-left:32px;font-family:var(--font-mono);font-size:12px;}
.j-search-ico{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--paper3);pointer-events:none;}
.j-filt-wrap{display:flex;gap:1px;border:1px solid var(--rule2);}
.j-filt{padding:7px 14px;font-family:var(--font-mono);font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--paper3);cursor:pointer;background:none;border:none;border-right:1px solid var(--rule2);transition:all .15s;}
.j-filt:last-child{border-right:none;}
.j-filt:hover{color:var(--paper2);background:var(--ink3);}
.j-filt.on{background:var(--amber-dim);color:var(--amber);}
.j-list{display:flex;flex-direction:column;gap:1px;background:var(--rule1);}
.j-row{background:var(--ink);cursor:pointer;transition:background .15s;}
.j-row:hover{background:var(--ink3);}
.j-row-top{display:flex;align-items:center;padding:12px 18px;gap:16px;border-bottom:1px solid var(--rule1);}
.j-row-date{flex:1;}
.j-date-main{font-family:var(--font-serif);font-size:13px;font-weight:700;}
.j-date-sub{font-family:var(--font-mono);font-size:9px;color:var(--paper3);letter-spacing:.04em;margin-top:1px;}
.j-wr{font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.06em;padding:3px 7px;border:1px solid var(--rule2);color:var(--paper3);}
.j-wr.win{border-color:var(--amber-line);color:var(--amber);}
.j-wr.loss{border-color:rgba(200,64,64,.3);color:var(--red);}
.j-pnl{font-family:var(--font-mono);font-size:15px;font-weight:700;}
.j-pnl.up{color:var(--amber);}
.j-pnl.dn{color:var(--red);}
.j-edit-btn{flex-shrink:0;}
.j-row-body{padding:10px 18px 14px;display:flex;flex-direction:column;gap:8px;}
.j-trades{display:flex;flex-wrap:wrap;gap:4px;}
.j-trade{display:flex;align-items:center;gap:5px;padding:3px 8px;border:1px solid var(--rule2);font-family:var(--font-mono);font-size:10px;}
.j-trade.up{border-color:var(--amber-line);color:var(--amber);}
.j-trade.dn{border-color:rgba(200,64,64,.25);color:var(--red);}
.j-trade-sym{font-weight:700;}
.j-trade-pnl{}
.j-notes{font-family:var(--font-sans);font-size:12px;font-weight:300;color:var(--paper2);line-height:1.6;}
.j-tags{display:flex;flex-wrap:wrap;gap:4px;}
.j-tag{font-family:var(--font-mono);font-size:9px;padding:2px 7px;border:1px solid var(--rule2);color:var(--paper3);letter-spacing:.04em;}
.j-tag.emo{border-color:var(--amber-line);color:var(--amber);}

/* ════════════════════════════════════════════════
   MARKETS
════════════════════════════════════════════════ */
.tick-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--rule1);margin-bottom:16px;}
.tick{background:var(--ink);padding:12px 14px;cursor:pointer;transition:background .15s;position:relative;overflow:hidden;}
.tick:hover{background:var(--ink3);}
.tick-sym{font-family:var(--font-mono);font-size:10px;font-weight:700;color:var(--paper2);letter-spacing:.06em;margin-bottom:2px;}
.tick-price{font-family:var(--font-mono);font-size:14px;font-weight:700;margin-bottom:1px;}
.tick-chg{font-family:var(--font-mono);font-size:10px;font-weight:600;}
.tick-chg.up{color:var(--amber);}
.tick-chg.dn{color:var(--red);}
.tick-line{position:absolute;bottom:0;left:0;height:2px;transition:width .7s;}
.tick-line.up{background:var(--amber);}
.tick-line.dn{background:var(--red);}
.mkt-cols{display:grid;grid-template-columns:1fr 250px;gap:16px;}
.news-filt{display:flex;gap:1px;}
.news-filt-btn{padding:5px 11px;font-family:var(--font-mono);font-size:9px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--paper3);background:none;border:1px solid var(--rule2);border-right:none;cursor:pointer;transition:all .15s;}
.news-filt-btn:last-child{border-right:1px solid var(--rule2);}
.news-filt-btn:hover{color:var(--paper2);}
.news-filt-btn.on{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-line);}
.news-item{display:block;padding:14px 18px;border-bottom:1px solid var(--rule1);text-decoration:none;transition:background .15s;}
.news-item:last-child{border-bottom:none;}
.news-item:hover{background:var(--ink3);}
.ni-top{display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;}
.ni-src{font-family:var(--font-mono);font-size:9px;font-weight:700;color:var(--paper3);letter-spacing:.06em;text-transform:uppercase;}
.ni-sent{font-family:var(--font-mono);font-size:8px;font-weight:700;padding:2px 5px;letter-spacing:.06em;text-transform:uppercase;}
.ni-sent.bull{background:var(--green-dim);color:var(--green);}
.ni-sent.bear{background:var(--red-dim);color:var(--red);}
.ni-sent.neu{background:var(--ink3);color:var(--paper3);}
.ni-time{font-family:var(--font-mono);font-size:9px;color:var(--paper3);margin-left:auto;}
.ni-hl{font-family:var(--font-serif);font-size:13px;font-weight:700;line-height:1.4;margin-bottom:4px;color:var(--paper);}
.ni-sum{font-family:var(--font-sans);font-size:11px;font-weight:300;color:var(--paper2);line-height:1.5;}
.ni-tags{display:flex;gap:4px;margin-top:7px;flex-wrap:wrap;}
.ni-tag{font-family:var(--font-mono);font-size:8px;padding:1px 5px;border:1px solid var(--rule2);color:var(--paper3);letter-spacing:.04em;}
.econ-item{display:flex;align-items:center;gap:7px;padding:8px 18px;border-bottom:1px solid var(--rule1);}
.econ-item:last-child{border-bottom:none;}
.econ-time{font-family:var(--font-mono);font-size:9px;color:var(--paper3);min-width:32px;}
.econ-dot{width:5px;height:5px;flex-shrink:0;}
.econ-dot.h{background:var(--red);}
.econ-dot.m{background:var(--amber);}
.econ-dot.l{background:var(--green);}
.econ-name{font-family:var(--font-mono);font-size:11px;flex:1;font-weight:500;}
.econ-country{font-family:var(--font-mono);font-size:8px;color:var(--paper3);}
.econ-num{font-family:var(--font-mono);font-size:10px;min-width:36px;text-align:right;color:var(--paper3);}
.econ-num.beat{color:var(--amber);}
.econ-num.miss{color:var(--red);}
.wl-item{display:flex;align-items:center;gap:8px;padding:8px 18px;border-bottom:1px solid var(--rule1);cursor:pointer;transition:background .15s;}
.wl-item:last-child{border-bottom:none;}
.wl-item:hover{background:var(--ink3);}
.wl-sym{font-family:var(--font-mono);font-size:12px;font-weight:700;}
.wl-chg{font-family:var(--font-mono);font-size:11px;margin-left:auto;}
.wl-chg.up{color:var(--amber);}
.wl-chg.dn{color:var(--red);}
.sg-track{height:4px;display:flex;overflow:hidden;margin:10px 0 5px;}
.sg-bull{background:var(--amber);}
.sg-bear{background:var(--red);}
.sg-labels{display:flex;justify-content:space-between;}
.sg-blbl{font-family:var(--font-mono);font-size:9px;font-weight:700;color:var(--amber);}
.sg-rlbl{font-family:var(--font-mono);font-size:9px;font-weight:700;color:var(--red);}
.sg-detail-row{display:flex;flex-direction:column;gap:10px;margin-top:14px;}

/* ════════════════════════════════════════════════
   FIRMS
════════════════════════════════════════════════ */
.firm-item{border:1px solid var(--rule1);margin-bottom:10px;transition:border-color .15s;}
.firm-item:hover{border-color:var(--rule2);}
.firm-head{display:flex;align-items:flex-start;justify-content:space-between;padding:16px 18px;border-bottom:1px solid var(--rule1);flex-wrap:wrap;gap:8px;}
.firm-name{font-family:var(--font-serif);font-size:15px;font-weight:700;}
.firm-note{font-family:var(--font-mono);font-size:10px;color:var(--paper3);margin-top:3px;letter-spacing:.02em;}
.firm-right{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.phase{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 8px;border:1px solid var(--rule2);color:var(--paper3);}
.phase.challenge{border-color:var(--amber-line);color:var(--amber);}
.phase.verification{border-color:rgba(72,120,192,.3);color:var(--blue);}
.phase.funded{border-color:rgba(58,140,96,.3);color:var(--green);}
.phase.failed{border-color:rgba(200,64,64,.3);color:var(--red);}
.firm-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule1);}
.firm-stat{background:var(--ink);padding:11px 16px;}
.firm-stat-l{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--paper3);margin-bottom:4px;}
.firm-stat-v{font-family:var(--font-mono);font-size:13px;font-weight:700;}
.prog-wrap{padding:12px 18px;}
.prog-label{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:9px;color:var(--paper3);letter-spacing:.04em;margin-bottom:6px;}
.prog-track{height:3px;background:var(--ink4);}
.prog-fill{height:100%;background:var(--amber);transition:width .4s;}

/* ════════════════════════════════════════════════
   SUMMARY
════════════════════════════════════════════════ */
.wk-sect{margin-bottom:18px;}
.wk-lbl{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--paper3);margin-bottom:7px;}
.wk-row{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--rule1);}
.wk-cell{background:var(--ink);padding:8px 10px;min-height:50px;}
.wk-cell.has{cursor:pointer;transition:background .15s;}
.wk-cell.has:hover{background:var(--ink3);}
.wk-day{font-family:var(--font-mono);font-size:8px;color:var(--paper3);letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;}
.wk-pnl{font-family:var(--font-mono);font-size:11px;font-weight:700;}
.wk-pnl.up{color:var(--amber);}
.wk-pnl.dn{color:var(--red);}
.wk-pnl.em{color:var(--paper3);}
.wk-cnt{font-family:var(--font-mono);font-size:8px;color:var(--paper3);margin-top:2px;}
table{width:100%;border-collapse:collapse;}
th{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--paper3);padding:9px 14px;text-align:left;border-bottom:2px solid var(--rule1);}
td{font-family:var(--font-mono);font-size:11px;padding:9px 14px;border-bottom:1px solid var(--rule1);color:var(--paper2);}
tr:hover td{background:var(--ink3);}
tr:last-child td{border-bottom:none;}

/* ════════════════════════════════════════════════
   FINANCE
════════════════════════════════════════════════ */
.fin-cols{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.fin-add{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;align-items:flex-end;margin-bottom:12px;}
.fin-entry{display:flex;align-items:center;gap:8px;padding:8px 14px;border-bottom:1px solid var(--rule1);}
.fin-entry:last-child{border-bottom:none;}
.fin-entry-name{font-family:var(--font-mono);font-size:12px;font-weight:600;flex:1;}
.fin-entry-desc{font-family:var(--font-mono);font-size:9px;color:var(--paper3);}
.fin-entry-date{font-family:var(--font-mono);font-size:9px;color:var(--paper3);}
.fin-entry-amt{font-family:var(--font-mono);font-size:12px;font-weight:700;flex-shrink:0;}
.fin-entry-amt.up{color:var(--amber);}
.fin-entry-amt.dn{color:var(--red);}

/* ════════════════════════════════════════════════
   PAYMENT
════════════════════════════════════════════════ */
.pay-layout{display:grid;grid-template-columns:1fr 300px;gap:24px;align-items:start;}
.plan-opt{padding:16px 18px;border:1px solid var(--rule1);cursor:pointer;transition:all .18s;margin-bottom:8px;}
.plan-opt.sel{border-color:var(--amber);background:var(--amber-dim);}
.plan-opt-top{display:flex;align-items:center;justify-content:space-between;}
.plan-opt-name{font-family:var(--font-serif);font-size:14px;font-weight:700;}
.plan-opt-price{font-family:var(--font-mono);font-size:16px;font-weight:700;color:var(--amber);}
.plan-opt-desc{font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.03em;margin-top:3px;}
.wallets{display:flex;gap:8px;margin-bottom:18px;}
.wallet{flex:1;padding:10px;border:1px solid var(--rule2);cursor:pointer;text-align:center;font-family:var(--font-mono);font-size:10px;font-weight:500;letter-spacing:.04em;transition:all .15s;display:flex;align-items:center;justify-content:center;gap:6px;}
.wallet:hover{border-color:var(--rule3);}
.wallet.sel{border-color:var(--amber);background:var(--amber-dim);color:var(--amber);}
.card-vis{background:linear-gradient(135deg,#0f0f14,#1a1228);border:1px solid var(--rule2);padding:20px;margin-bottom:16px;height:136px;position:relative;overflow:hidden;}
.cv-glow{position:absolute;right:-20px;bottom:-20px;width:130px;height:130px;background:radial-gradient(circle,rgba(232,160,32,.08),transparent);}
.cv-chip{width:26px;height:18px;border:1px solid rgba(232,160,32,.4);background:linear-gradient(135deg,rgba(232,160,32,.15),rgba(232,160,32,.05));}
.cv-num{font-family:var(--font-mono);font-size:13px;letter-spacing:.14em;margin-top:18px;color:rgba(232,228,218,.85);}
.cv-row{display:flex;justify-content:space-between;margin-top:12px;}
.cv-name,.cv-exp{font-family:var(--font-mono);font-size:10px;color:rgba(232,228,218,.5);letter-spacing:.05em;}
.cf{display:flex;flex-direction:column;gap:10px;}
.cf-row{display:grid;grid-template-columns:1fr 1fr;gap:9px;}
.order-sum{border:1px solid var(--rule1);}
.os-head{padding:14px 18px;border-bottom:1px solid var(--rule1);font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--paper2);}
.os-body{padding:16px 18px;}
.os-row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--rule1);font-family:var(--font-mono);font-size:11px;color:var(--paper2);}
.os-row:last-child{border-bottom:none;}
.os-row.total{font-weight:700;font-size:13px;border-top:1px solid var(--rule2);padding-top:10px;margin-top:3px;color:var(--paper);}
.os-feats{margin:14px 0;padding:14px;background:var(--ink3);border:1px solid var(--rule1);}
.os-feat{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);margin-bottom:7px;letter-spacing:.02em;}
.os-feat:last-child{margin-bottom:0;}
.os-feat::before{content:"→";color:var(--amber);}
.pay-ok{text-align:center;padding:36px 0;}
.pay-ok-ico{font-size:40px;margin-bottom:14px;}
.pay-ok-title{font-family:var(--font-serif);font-size:26px;font-weight:900;color:var(--amber);margin-bottom:6px;}
.pay-ok-sub{font-family:var(--font-sans);font-size:14px;font-weight:300;color:var(--paper2);}

/* ════════════════════════════════════════════════
   MODALS
════════════════════════════════════════════════ */
.ov{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);z-index:500;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .2s;padding:16px;}
.ov.open{opacity:1;pointer-events:all;}
.modal{background:var(--ink2);border:1px solid var(--rule2);width:100%;max-width:480px;max-height:92dvh;overflow-y:auto;padding:0;box-shadow:var(--shadow);transform:translateY(8px);transition:transform .22s cubic-bezier(.4,0,.2,1);}
.ov.open .modal{transform:translateY(0);}
.modal-head{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--rule1);}
.modal-title{font-family:var(--font-serif);font-size:16px;font-weight:700;}
.modal-x{width:26px;height:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--paper3);font-size:16px;transition:all .15s;border:1px solid transparent;background:none;}
.modal-x:hover{border-color:var(--rule2);color:var(--paper2);}
.modal-body{padding:18px 20px;}
.modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:9px;}
.modal-full{margin-bottom:9px;}
.modal-foot{display:flex;gap:8px;justify-content:flex-end;padding:14px 20px;border-top:1px solid var(--rule1);}
.trade-add-row{display:grid;grid-template-columns:1fr auto 1fr;gap:7px;align-items:flex-end;margin-bottom:8px;}
.trades-list{margin:8px 0;}
.trade-row{display:flex;align-items:center;gap:8px;padding:7px 12px;border:1px solid var(--rule1);margin-bottom:2px;background:var(--ink);}
.tr-sym{font-family:var(--font-mono);font-size:12px;font-weight:700;min-width:42px;}
.tr-side{font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.06em;padding:2px 6px;border:1px solid var(--rule2);color:var(--paper3);}
.tr-side.long{border-color:rgba(72,120,192,.3);color:var(--blue);}
.tr-side.short{border-color:rgba(200,64,64,.3);color:var(--red);}
.tr-pnl{font-family:var(--font-mono);font-size:12px;font-weight:700;margin-left:auto;}
.tr-pnl.up{color:var(--amber);}
.tr-pnl.dn{color:var(--red);}
.te-total{display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid var(--rule1);font-family:var(--font-mono);font-size:12px;font-weight:700;margin-top:2px;}

/* ════════════════════════════════════════════════
   BOTTOM NAV
════════════════════════════════════════════════ */
.bnav{display:none;position:fixed;bottom:0;left:0;right:0;z-index:200;background:var(--ink);border-top:1px solid var(--rule1);justify-content:space-around;padding:4px 0 calc(4px + env(safe-area-inset-bottom));}
.bn{display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 8px;cursor:pointer;font-family:var(--font-mono);font-size:8px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--paper3);touch-action:manipulation;border:none;background:none;min-width:44px;transition:color .15s;border-top:2px solid transparent;}
.bn.on{color:var(--amber);border-top-color:var(--amber);}
.bn-ico{font-size:15px;margin-bottom:1px;}

/* ════════════════════════════════════════════════
   BUTTONS
════════════════════════════════════════════════ */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-mono);font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;border:1px solid var(--rule2);background:none;color:var(--paper3);padding:7px 14px;transition:all .18s;white-space:nowrap;touch-action:manipulation;}
.btn:hover{border-color:var(--rule3);color:var(--paper2);}
.btn-amber{background:var(--amber);border-color:var(--amber);color:#000;}
.btn-amber:hover{background:var(--amber2);border-color:var(--amber2);box-shadow:0 4px 20px rgba(232,160,32,.25);}
.btn-ghost{background:transparent;border-color:var(--rule2);color:var(--paper3);}
.btn-ghost:hover{color:var(--paper2);border-color:var(--rule3);}
.btn-danger{background:var(--red-dim);border-color:rgba(200,64,64,.3);color:var(--red);}
.btn-danger:hover{background:rgba(200,64,64,.15);}
.btn-sm{padding:5px 10px;font-size:9px;}
.btn-xs{padding:3px 7px;font-size:8px;}
.btn-full{width:100%;justify-content:center;padding:10px 14px;}
.btn-google{background:#fff;border-color:#dadce0;color:#3c4043;font-family:"IBM Plex Sans",system-ui,sans-serif;letter-spacing:.01em;}
.btn-google:hover{background:#f8f9fa;border-color:#dadce0;}

/* ════════════════════════════════════════════════
   FORMS
════════════════════════════════════════════════ */
input,select,textarea{font-family:var(--font-mono);background:var(--ink);color:var(--paper);border:1px solid var(--rule2);padding:8px 11px;font-size:12px;width:100%;outline:none;transition:border-color .15s,box-shadow .15s;border-radius:0;}
input:focus,select:focus,textarea:focus{border-color:var(--amber);box-shadow:0 0 0 2px var(--amber-dim);}
input::placeholder,textarea::placeholder{color:var(--paper3);}
select option{background:var(--ink2);}
textarea{resize:vertical;min-height:64px;}
.fl{font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--paper3);display:block;margin-bottom:5px;}
.field{margin-bottom:9px;}

/* ════════════════════════════════════════════════
   UTILITIES
════════════════════════════════════════════════ */
.row{display:flex;align-items:center;gap:8px;}
.row-b{display:flex;align-items:center;justify-content:space-between;gap:8px;}
.empty-state{text-align:center;padding:52px 20px;}
.es-ico{font-size:28px;margin-bottom:10px;opacity:.4;}
.es-text{font-family:var(--font-mono);font-size:11px;color:var(--paper3);letter-spacing:.04em;line-height:1.7;}
.rm-btn{width:20px;height:20px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--paper3);font-size:13px;transition:all .15s;border:1px solid transparent;background:none;flex-shrink:0;}
.rm-btn:hover{border-color:rgba(200,64,64,.3);color:var(--red);}

/* ════════════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════════════ */
@media(max-width:960px){
  .at-stats{display:none;}
  .sb{display:none;}
  .mc{left:0;}
  .bnav{display:flex;}
  .mc{padding-bottom:calc(58px + env(safe-area-inset-bottom));}
  .kpi-strip.k4{grid-template-columns:1fr 1fr;}
  .kpi-strip.k3{grid-template-columns:1fr 1fr;}
  .ch-grid{grid-template-columns:1fr;}
  .ch-full{grid-column:span 1;}
  .mkt-cols{grid-template-columns:1fr;}
  .pay-layout{grid-template-columns:1fr;}
  .fin-cols{grid-template-columns:1fr;}
  .wk-row{grid-template-columns:repeat(3,1fr);}
  .tick-strip{grid-template-columns:repeat(2,1fr);}
  .l-strip{grid-template-columns:1fr 1fr;}
  .l-feats{grid-template-columns:1fr 1fr;}
  .l-plans{grid-template-columns:1fr;}
  .l-plan{border-right:none;border-bottom:1px solid var(--rule1);}
  .l-plan:last-child{border-bottom:none;}
}
@media(max-width:600px){
  .ov{align-items:flex-end;padding:0;}
  .modal{max-width:100%;border-left:none;border-right:none;border-bottom:none;}
  .ln{padding:0 16px;}
  .lh{padding:60px 24px 40px;}
  .l-sect{padding:56px 24px;}
  .at{padding:0 10px;height:44px;}
  .at-logo-text{display:none;}
  .at-user .uname{display:none;}
}
@media(max-width:480px){
  .kpi-strip.k4,.kpi-strip.k3,.kpi-strip.k2{grid-template-columns:1fr 1fr;}
  .wk-row{grid-template-columns:repeat(2,1fr);}
  .cal-cell{min-height:58px;}
  .cc-t{display:none;}
  .pg{padding:12px;}
  .l-feats{grid-template-columns:1fr;}
  .l-feat:nth-child(3n){border-right:1px solid var(--rule1);}
  .l-feat{border-right:none;}
  .firm-stats{grid-template-columns:1fr 1fr;}
  .fin-add{grid-template-columns:1fr 1fr;}
  .cf-row{grid-template-columns:1fr;}
  .modal-grid{grid-template-columns:1fr;}
  .trade-add-row{grid-template-columns:1fr 1fr;}
}
@media(max-height:500px) and (orientation:landscape){
  .mc{padding-bottom:52px;}
  .modal{max-height:96dvh;}
}

/* ════════════════════════════════════════════════
   PLANNER + STATS
════════════════════════════════════════════════ */
.pl-layout{display:grid;grid-template-columns:1fr 340px;gap:16px;align-items:start;}
.pl-left{}
.pl-right{}
.bias-btns{display:flex;gap:6px;flex-wrap:wrap;}
.bias-btn{font-family:var(--font-mono);font-size:10px;font-weight:600;letter-spacing:.05em;padding:7px 13px;border:1px solid var(--rule2);background:none;color:var(--paper3);cursor:pointer;transition:all .15s;}
.bias-btn:hover{border-color:var(--rule3);color:var(--paper2);}
.chk-item{display:flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-mono);font-size:11px;color:var(--paper2);}
.chk-item input{width:14px;height:14px;accent-color:var(--amber);flex-shrink:0;cursor:pointer;}
.chk-item:has(input:checked) span{color:var(--paper);text-decoration:line-through;opacity:.6;}
@media(max-width:960px){.pl-layout{grid-template-columns:1fr;}}
</style>
</head>
<body>

<!-- ══════════════════════════════════════
     LANDING
══════════════════════════════════════ -->
<div id="sc-land">

  <nav class="ln">
    <a class="ln-logo" href="#">
      <div class="ln-logo-mark">TD</div>
      <span class="ln-logo-text">Trade<span>Desk</span></span>
    </a>
    <div class="ln-links" id="ln-links">
      <a href="features.html" class="ln-link">Features</a>
      <a href="pricing.html" class="ln-link">Pricing</a>
      <button class="ln-link" onclick="showAuth('in')">Sign In</button>
    </div>
    <div class="ln-actions">
      <button class="btn btn-ghost btn-sm" onclick="showAuth('in')">Sign In</button>
      <button class="btn btn-amber btn-sm" onclick="showAuth('up')">Get Access</button>
      <button class="ln-ham" id="ln-ham" onclick="toggleMobileNav()"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <div class="ln-mob" id="ln-mob">
    <a href="features.html">Features</a>
    <a href="pricing.html">Pricing</a>
    <button onclick="showAuth('in')">Sign In</button>
    <div class="ln-mob-sep"></div>
    <button class="btn btn-amber btn-full" onclick="showAuth('up')">Get Access →</button>
  </div>

  <section class="lh">
    <div class="lh-scanlines"></div>
    <div class="lh-cross"></div>
    <div class="lh-ticker"><span class="lh-ticker-dot"></span>Professional Trading Journal — Est. 2024</div>
    <h1 class="lh-h1">Know Your<br>Numbers.<br><em class="lh-h1-em">Keep Your Account.</em></h1>
    <div class="lh-rule"></div>
    <p class="lh-lead">The trading journal built for serious prop traders. Track P&L, protect your drawdown limits, analyze your edge, and compound what works.</p>
    <div class="lh-btns">
      <button class="btn btn-amber" onclick="showAuth('up')" style="padding:10px 28px;font-size:11px;letter-spacing:.08em;">Start Free Trial →</button>
      <button class="btn btn-ghost" onclick="startDemo()" style="padding:10px 22px;font-size:11px;letter-spacing:.06em;">Try Demo Mode</button>
    </div>
    <div class="lh-footnote"><span>No credit card required</span> · <span>7-day free trial</span> · <span>Cancel anytime</span></div>
  </section>

  <div class="l-strip">
    <div class="l-strip-item"><div class="l-strip-n">$2.4M</div><div class="l-strip-l">P&L Tracked</div></div>
    <div class="l-strip-item"><div class="l-strip-n">500+</div><div class="l-strip-l">Active Traders</div></div>
    <div class="l-strip-item"><div class="l-strip-n">12</div><div class="l-strip-l">Broker Formats</div></div>
    <div class="l-strip-item"><div class="l-strip-n">4.9★</div><div class="l-strip-l">Avg Rating</div></div>
  </div>

  <div class="l-sect">
    <div class="l-sect-eyebrow">Platform Features</div>
    <h2 class="l-sect-h">Every tool a funded<br>trader <em>actually</em> needs.</h2>
    <p class="l-sect-sub">Built by traders, for traders. No bloat. No noise. Just the data that keeps you funded.</p>
    <div class="l-feats">
      <div class="l-feat"><div class="l-feat-num">01</div><div class="l-feat-title">Trade Calendar</div><div class="l-feat-desc">Daily P&L heatmap, win streaks, emotions and setups logged per day. See patterns instantly.</div></div>
      <div class="l-feat"><div class="l-feat-num">02</div><div class="l-feat-title">Deep Analytics</div><div class="l-feat-desc">Cumulative curves, win rate, profit factor, symbol breakdowns, and emotion-performance correlation.</div></div>
      <div class="l-feat"><div class="l-feat-num">03</div><div class="l-feat-title">Market Hub</div><div class="l-feat-desc">Live futures prices, economic calendar, curated news, sentiment gauge, custom watchlist.</div></div>
      <div class="l-feat"><div class="l-feat-num">04</div><div class="l-feat-title">Trade Journal</div><div class="l-feat-desc">Searchable log of every day. Filter by wins, losses, symbols, or tags. Find your edge.</div></div>
      <div class="l-feat"><div class="l-feat-num">05</div><div class="l-feat-title">Prop Firm Tracker</div><div class="l-feat-desc">Multiple accounts, daily loss limits, max drawdown rules, payout targets and phase tracking.</div></div>
      <div class="l-feat"><div class="l-feat-num">06</div><div class="l-feat-title">Finance Manager</div><div class="l-feat-desc">Log payouts and expenses per firm. Track net income and all-time financial performance.</div></div>
      <div class="l-feat"><div class="l-feat-num">07</div><div class="l-feat-title">Cloud Sync</div><div class="l-feat-desc">Syncs securely across all devices via Google Firebase. Your data, always available.</div></div>
      <div class="l-feat"><div class="l-feat-num">08</div><div class="l-feat-title">CSV Import</div><div class="l-feat-desc">Import from TopstepX, Apex, FTMO, MyFundedFutures, and 12+ broker formats.</div></div>
      <div class="l-feat"><div class="l-feat-num">09</div><div class="l-feat-title">Private & Secure</div><div class="l-feat-desc">Your data is encrypted and never sold. Firebase enterprise-grade security.</div></div>
    </div>
  </div>

  <div class="l-sect" style="padding-top:0;">
    <div class="l-sect-eyebrow">Pricing</div>
    <h2 class="l-sect-h">Simple pricing.<br><em>Everything</em> included.</h2>
    <div class="l-plans">
      <div class="l-plan" onclick="showAuth('up')">
        <div class="l-plan-name">Monthly</div>
        <div class="l-plan-price">$10<span>/mo</span></div>
        <div class="l-plan-cycle">Billed monthly · cancel anytime</div>
        <div class="l-plan-rule"></div>
        <div class="l-plan-feats">
          <div class="l-plan-feat">All features included</div>
          <div class="l-plan-feat">Unlimited trade entries</div>
          <div class="l-plan-feat">Cloud sync across devices</div>
          <div class="l-plan-feat">CSV import (12+ brokers)</div>
        </div>
        <button class="btn btn-ghost btn-full">Get Started</button>
      </div>
      <div class="l-plan" style="border-left:none;" onclick="showAuth('up')">
        <div class="l-plan-flag">Best Value — Save 17%</div>
        <div class="l-plan-name">Annual</div>
        <div class="l-plan-price">$100<span>/yr</span></div>
        <div class="l-plan-cycle">$8.33/month · 2 months free</div>
        <div class="l-plan-rule"></div>
        <div class="l-plan-feats">
          <div class="l-plan-feat">Everything in Monthly</div>
          <div class="l-plan-feat">Priority support</div>
          <div class="l-plan-feat">Early feature access</div>
          <div class="l-plan-feat">Annual receipt for taxes</div>
        </div>
        <button class="btn btn-amber btn-full">Get Started →</button>
      </div>
    </div>
  </div>

  <footer class="l-footer">
    <div class="l-footer-copy">© 2025 TradeDesk Pro. All rights reserved.</div>
    <div class="l-footer-links">
      <a href="features.html" class="l-footer-link">Features</a>
      <a href="pricing.html" class="l-footer-link">Pricing</a>
      <a href="#" class="l-footer-link" onclick="showAuth('in');return false;">Sign In</a>
    </div>
  </footer>
</div>

<!-- ══════════════════════════════════════
     AUTH
══════════════════════════════════════ -->
<div id="sc-auth">
  <div class="au-wrap">
    <button class="au-back" onclick="goLanding()">← Back</button>
    <div class="au-card">
      <div class="au-logo">
        <div class="au-logo-mark">TD</div>
        <div class="au-logo-text">Trade<span>Desk</span></div>
      </div>
      <div class="au-tabs">
        <button class="au-tab on" onclick="authTab('in',this)">Sign In</button>
        <button class="au-tab" onclick="authTab('up',this)">Sign Up</button>
      </div>
      <div id="form-in" class="au-form">
        <button class="btn btn-google btn-full" onclick="doGoogle()"><svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg> Continue with Google</button>
        <div class="au-or">or</div>
        <div class="field"><label class="fl">Email Address</label><input id="si-em" type="email" placeholder="you@email.com"></div>
        <div class="field"><label class="fl">Password</label><input id="si-pw" type="password" placeholder="••••••••"></div>
        <button class="btn btn-amber btn-full" id="si-btn" onclick="doSignIn()">Sign In →</button>
      </div>
      <div id="form-up" class="au-form" style="display:none">
        <button class="btn btn-google btn-full" onclick="doGoogle()"><svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg> Continue with Google</button>
        <div class="au-or">or</div>
        <div class="field"><label class="fl">Full Name</label><input id="su-nm" type="text" placeholder="Your name"></div>
        <div class="field"><label class="fl">Email Address</label><input id="su-em" type="email" placeholder="you@email.com"></div>
        <div class="field"><label class="fl">Password</label><input id="su-pw" type="password" placeholder="6+ characters"></div>
        <button class="btn btn-amber btn-full" id="su-btn" onclick="doSignUp()">Create Account →</button>
      </div>
      <div class="au-err" id="auth-err"></div>
      <div class="au-foot">By continuing you agree to our <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a></div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     APP
══════════════════════════════════════ -->
<div id="sc-app">

  <!-- TOPBAR -->
  <div class="at">
    <a class="at-logo" href="#">
      <div class="at-logo-mark">TD</div>
      <span class="at-logo-text">Trade<em>Desk</em></span>
    </a>
    <div class="at-stats">
      <div class="ats"><span class="ats-l">Month P&L</span><span class="ats-v up" id="tb-pnl">$0.00</span></div>
      <div class="ats"><span class="ats-l">Payouts</span><span class="ats-v up" id="tb-pay">$0.00</span></div>
      <div class="ats"><span class="ats-l">Net</span><span class="ats-v up" id="tb-net">$0.00</span></div>
    </div>
    <div class="at-right">
      <div class="sync" id="sdot"></div>
      <div class="at-user">
        <div class="at-avatar" id="uinit-wrap">
          <img id="uavatar" src="" alt="">
          <span id="uinit">TD</span>
        </div>
        <span class="uname" id="uname">—</span>
      </div>
      <button class="at-btn" id="theme-btn" onclick="toggleTheme()">☀</button>
      <button class="at-btn" onclick="doSignOut()">Sign Out</button>
    </div>
  </div>

  <!-- BODY -->
  <div class="ab">

    <!-- SIDEBAR -->
    <nav class="sb">
      <div class="sb-label">Trading</div>
      <button class="sb-item on" id="ni-cal" onclick="goTab('cal')"><span class="sb-item-ico">📅</span>Calendar</button>
      <button class="sb-item" id="ni-charts" onclick="goTab('charts')"><span class="sb-item-ico">📊</span>Analytics</button>
      <button class="sb-item" id="ni-journal" onclick="goTab('journal')"><span class="sb-item-ico">📓</span>Journal</button>
      <button class="sb-item" id="ni-firms" onclick="goTab('firms')"><span class="sb-item-ico">🏢</span>Prop Firms</button>
      <div class="sb-rule"></div>
      <div class="sb-label">Insights</div>
      <button class="sb-item" id="ni-markets" onclick="goTab('markets')"><span class="sb-item-ico">🎯</span>Planner</button>
      <button class="sb-item" id="ni-sum" onclick="goTab('sum')"><span class="sb-item-ico">📆</span>Summary</button>
      <button class="sb-item" id="ni-fin" onclick="goTab('fin')"><span class="sb-item-ico">💵</span>Finance</button>
      <div class="sb-foot">
        <div class="sb-rule"></div>
        <button class="sb-item" id="ni-upgrade" onclick="goTab('upgrade')" style="color:var(--amber);border-left-color:var(--amber);"><span class="sb-item-ico">⚡</span>Upgrade to Pro</button>
        <button class="sb-item" onclick="doSignOut()" style="color:var(--paper3);"><span class="sb-item-ico">🚪</span>Sign Out</button>
      </div>
    </nav>

    <!-- MAIN -->
    <main class="mc">

      <!-- ── CALENDAR ── -->
      <div class="pg on" id="pg-cal">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Trading Calendar</div>
            <div class="ph-title">P&L <em>Overview</em></div>
          </div>
          <div class="ph-right">
            <button class="btn btn-ghost btn-sm" onclick="exportCSV()">⬇ Export CSV</button>
            <label class="btn btn-ghost btn-sm" style="cursor:pointer">⬆ Import CSV<input type="file" accept=".csv" style="display:none" onchange="importCSV(event)"></label>
          </div>
        </div>
        <div class="kpi-strip k4" style="margin-bottom:16px;">
          <div class="kpi"><div class="kpi-label">Trading Days</div><div class="kpi-val nt" id="s-days">0</div></div>
          <div class="kpi"><div class="kpi-label">Win Rate</div><div class="kpi-val up" id="s-wr">—</div></div>
          <div class="kpi"><div class="kpi-label">Best Day</div><div class="kpi-val up" id="s-best">—</div></div>
          <div class="kpi"><div class="kpi-label">Worst Day</div><div class="kpi-val dn" id="s-worst">—</div></div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <div class="cal-nav">
              <button class="cal-btn" onclick="chMonth(-1)">‹</button>
              <span class="cal-month" id="cal-label"></span>
              <button class="cal-btn" onclick="chMonth(1)">›</button>
              <div id="streak-el"></div>
            </div>
          </div>
          <div class="cal-dow">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div class="cal-grid" id="cal-cells"></div>
        </div>
      </div>

      <!-- ── ANALYTICS ── -->
      <div class="pg" id="pg-charts">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Performance Analytics</div>
            <div class="ph-title">Data <em>Insights</em></div>
          </div>
          <div class="ph-right">
            <select id="charts-period" onchange="renderCharts()" style="width:auto;font-size:10px;padding:6px 10px;letter-spacing:.04em;">
              <option value="month">This Month</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </div>
        <div class="kpi-strip k4" style="margin-bottom:14px;">
          <div class="kpi"><div class="kpi-label">Total P&L</div><div class="kpi-val up" id="ch-tot">—</div><div class="kpi-sub" id="ch-tot-sub"></div></div>
          <div class="kpi"><div class="kpi-label">Win Rate</div><div class="kpi-val bl" id="ch-wr">—</div><div class="kpi-sub" id="ch-wr-sub"></div></div>
          <div class="kpi"><div class="kpi-label">Avg Win Day</div><div class="kpi-val up" id="ch-aw">—</div><div class="kpi-sub" id="ch-al"></div></div>
          <div class="kpi"><div class="kpi-label">Profit Factor</div><div class="kpi-val bl" id="ch-pf">—</div><div class="kpi-sub" id="ch-pf-sub"></div></div>
        </div>
        <div class="kpi-strip k4" style="margin-bottom:16px;">
          <div class="kpi"><div class="kpi-label">Best Day</div><div class="kpi-val up" id="ch-best">—</div></div>
          <div class="kpi"><div class="kpi-label">Worst Day</div><div class="kpi-val dn" id="ch-worst">—</div></div>
          <div class="kpi"><div class="kpi-label">Total Trades</div><div class="kpi-val nt" id="ch-trades">—</div></div>
          <div class="kpi"><div class="kpi-label">Avg Per Day</div><div class="kpi-val nt" id="ch-avg">—</div></div>
        </div>
        <div class="ch-grid">
          <div class="panel ch-full">
            <div class="panel-head"><span class="panel-title">Cumulative P&L</span></div>
            <div class="panel-body"><div style="height:200px;"><canvas id="chart-cum"></canvas></div></div>
          </div>
          <div class="panel">
            <div class="panel-head"><span class="panel-title">Daily P&L</span></div>
            <div class="panel-body"><div style="height:180px;"><canvas id="chart-daily"></canvas></div></div>
          </div>
          <div class="panel">
            <div class="panel-head"><span class="panel-title">Win / Loss Ratio</span></div>
            <div class="panel-body"><div style="height:180px;"><canvas id="chart-wl"></canvas></div></div>
          </div>
          <div class="panel">
            <div class="panel-head"><span class="panel-title">P&L by Symbol</span></div>
            <div class="panel-body"><div style="height:180px;"><canvas id="chart-sym"></canvas></div></div>
          </div>
          <div class="panel">
            <div class="panel-head"><span class="panel-title">P&L by Emotion</span></div>
            <div class="panel-body"><div style="height:180px;"><canvas id="chart-emo"></canvas></div></div>
          </div>
        </div>
      </div>

      <!-- ── JOURNAL ── -->
      <div class="pg" id="pg-journal">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Trade Journal</div>
            <div class="ph-title">Daily <em>Logs</em></div>
          </div>
          <button class="btn btn-amber btn-sm" onclick="goTab('cal')">+ Log Trade</button>
        </div>
        <div class="j-bar">
          <div class="j-search-wrap">
            <span class="j-search-ico">🔍</span>
            <input id="j-search" type="text" placeholder="Search symbol, notes, tags..." oninput="renderJournal()">
          </div>
          <div class="j-filt-wrap">
            <button class="j-filt on" id="jf-all" onclick="setJF('all',this)">All</button>
            <button class="j-filt" id="jf-win" onclick="setJF('win',this)">Wins</button>
            <button class="j-filt" id="jf-loss" onclick="setJF('loss',this)">Losses</button>
          </div>
        </div>
        <div class="j-list" id="journal-list"></div>
      </div>

      <!-- ── MARKETS ── -->
      <!-- ── PLANNER + STATS ── -->
      <div class="pg" id="pg-markets">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Trade Planner &amp; Stats</div>
            <div class="ph-title">Plan. <em>Execute. Review.</em></div>
          </div>
          <div class="ph-right">
            <span id="pl-date-lbl" style="font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.04em;"></span>
            <button class="btn btn-amber btn-sm" onclick="savePlan()">Save Plan</button>
          </div>
        </div>
        <div class="pl-layout">
          <div class="pl-left">
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Session Bias</span></div>
              <div class="panel-body">
                <div class="bias-btns" id="bias-btns">
                  <button class="bias-btn" data-v="strong-bull" onclick="setBias(this)">&#x2B06;&#x2B06; Strong Bull</button>
                  <button class="bias-btn" data-v="bull" onclick="setBias(this)">&#x2B06; Bullish</button>
                  <button class="bias-btn" data-v="neutral" onclick="setBias(this)">&#x2014; Neutral</button>
                  <button class="bias-btn" data-v="bear" onclick="setBias(this)">&#x2B07; Bearish</button>
                  <button class="bias-btn" data-v="strong-bear" onclick="setBias(this)">&#x2B07;&#x2B07; Strong Bear</button>
                </div>
              </div>
            </div>
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head">
                <span class="panel-title">Key Levels</span>
                <button class="btn btn-ghost btn-xs" onclick="toggleLevelAdd()">+ Add</button>
              </div>
              <div id="levels-list"></div>
              <div id="levels-add" style="display:none;padding:10px 18px;border-top:1px solid var(--rule1);">
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:7px;align-items:flex-end;">
                  <div><label class="fl">Symbol</label><input id="lv-sym" placeholder="NQ, ES..." style="font-size:11px;"></div>
                  <div><label class="fl">Price</label><input id="lv-price" type="number" placeholder="19850" style="font-size:11px;"></div>
                  <div><label class="fl">Type</label>
                    <select id="lv-type" style="font-size:11px;">
                      <option value="support">Support</option>
                      <option value="resistance">Resistance</option>
                      <option value="target">Target</option>
                      <option value="stop">Stop</option>
                      <option value="pivot">Pivot</option>
                    </select>
                  </div>
                  <div><label class="fl">&nbsp;</label><button class="btn btn-amber btn-sm" onclick="confirmAddLevel()">Add</button></div>
                </div>
              </div>
            </div>
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Game Plan</span><span style="font-family:var(--font-mono);font-size:9px;color:var(--paper3);">Pre-session</span></div>
              <div class="panel-body">
                <textarea id="pl-gameplan" rows="4" placeholder="What is the setup today? Key catalysts, macro backdrop, your edge..." style="width:100%;resize:vertical;font-size:12px;line-height:1.6;"></textarea>
              </div>
            </div>
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Pre-Session Checklist</span><span id="check-score" style="font-family:var(--font-mono);font-size:10px;color:var(--amber);">0 / 6</span></div>
              <div class="panel-body" style="display:flex;flex-direction:column;gap:10px;" id="pl-checklist">
                <label class="chk-item"><input type="checkbox" onchange="updateCheckScore()"><span>Reviewed yesterday's trades</span></label>
                <label class="chk-item"><input type="checkbox" onchange="updateCheckScore()"><span>Checked economic calendar</span></label>
                <label class="chk-item"><input type="checkbox" onchange="updateCheckScore()"><span>Identified key levels</span></label>
                <label class="chk-item"><input type="checkbox" onchange="updateCheckScore()"><span>Set max loss for today</span></label>
                <label class="chk-item"><input type="checkbox" onchange="updateCheckScore()"><span>Written game plan</span></label>
                <label class="chk-item"><input type="checkbox" onchange="updateCheckScore()"><span>Mentally prepared</span></label>
              </div>
            </div>
            <div class="panel">
              <div class="panel-head"><span class="panel-title">Post-Session Review</span><span style="font-family:var(--font-mono);font-size:9px;color:var(--paper3);">End of day</span></div>
              <div class="panel-body">
                <div style="margin-bottom:9px;"><label class="fl">What went well?</label><textarea id="pl-good" rows="2" placeholder="Stuck to plan, read the tape correctly..." style="width:100%;resize:vertical;font-size:12px;"></textarea></div>
                <div style="margin-bottom:9px;"><label class="fl">What to improve?</label><textarea id="pl-improve" rows="2" placeholder="Exited too early, chased entries..." style="width:100%;resize:vertical;font-size:12px;"></textarea></div>
                <div><label class="fl">Tomorrow's focus</label><input id="pl-tomorrow" placeholder="One thing to focus on tomorrow..." style="font-size:12px;width:100%;"></div>
              </div>
            </div>
          </div>
          <div class="pl-right">
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Trading Grade</span><span style="font-family:var(--font-mono);font-size:9px;color:var(--paper3);">All time</span></div>
              <div class="panel-body" style="text-align:center;padding:20px 18px;">
                <div id="grade-letter" style="font-family:var(--font-serif);font-size:72px;font-weight:900;line-height:1;color:var(--amber);letter-spacing:-.04em;">&#x2014;</div>
                <div id="grade-label" style="font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.08em;text-transform:uppercase;margin-top:6px;">No data yet</div>
                <div id="grade-score" style="font-family:var(--font-mono);font-size:11px;color:var(--paper2);margin-top:6px;"></div>
              </div>
            </div>
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Streaks</span></div>
              <div id="streaks-body" style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--rule1);"></div>
            </div>
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Milestones</span></div>
              <div id="milestones-list"></div>
            </div>
            <div class="panel" style="margin-bottom:12px;">
              <div class="panel-head"><span class="panel-title">Personal Records</span></div>
              <div id="records-list"></div>
            </div>
            <div class="panel">
              <div class="panel-head"><span class="panel-title">30-Day Heatmap</span></div>
              <div class="panel-body">
                <div id="mini-heatmap" style="display:grid;grid-template-columns:repeat(10,1fr);gap:3px;"></div>
                <div style="display:flex;gap:16px;margin-top:10px;font-family:var(--font-mono);font-size:9px;color:var(--paper3);">
                  <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;background:var(--amber);display:inline-block;"></span>Win</span>
                  <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;background:var(--red);display:inline-block;"></span>Loss</span>
                  <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;background:var(--ink4);display:inline-block;"></span>No trade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <!-- ── FIRMS ── -->
      <div class="pg" id="pg-firms">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Prop Firm Tracker</div>
            <div class="ph-title">Funded <em>Accounts</em></div>
          </div>
          <button class="btn btn-amber btn-sm" onclick="openFirmModal()">+ Add Account</button>
        </div>
        <div id="firms-list"></div>
      </div>

      <!-- ── SUMMARY ── -->
      <div class="pg" id="pg-sum">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Monthly Summary</div>
            <div class="ph-title">Period <em>Review</em></div>
          </div>
          <div class="ph-right">
            <select id="sum-yr" onchange="renderSum()" style="width:88px;font-size:11px;padding:6px 9px;"></select>
            <select id="sum-mo" onchange="renderSum()" style="width:124px;font-size:11px;padding:6px 9px;"></select>
          </div>
        </div>
        <div class="kpi-strip k4" id="sum-stats" style="margin-bottom:18px;"></div>
        <div id="sum-weeks" style="margin-bottom:18px;"></div>
        <div class="panel">
          <div class="panel-head"><span class="panel-title">Daily Breakdown</span></div>
          <div style="overflow-x:auto;">
            <table>
              <thead><tr><th>Date</th><th>P&L</th><th>Trades</th><th>Symbols</th><th>Setup</th><th>Notes</th></tr></thead>
              <tbody id="sum-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ── FINANCE ── -->
      <div class="pg" id="pg-fin">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Finance Manager</div>
            <div class="ph-title">Income &amp; <em>Expenses</em></div>
          </div>
        </div>
        <div class="kpi-strip k3" style="margin-bottom:18px;">
          <div class="kpi"><div class="kpi-label">Month P&L</div><div class="kpi-val up" id="fin-s-pnl">$0.00</div></div>
          <div class="kpi"><div class="kpi-label">Payouts</div><div class="kpi-val up" id="fin-s-pay">$0.00</div></div>
          <div class="kpi"><div class="kpi-label">Expenses</div><div class="kpi-val dn" id="fin-s-exp">$0.00</div></div>
          <div class="kpi"><div class="kpi-label">Net Income</div><div class="kpi-val nt" id="fin-s-net">$0.00</div></div>
          <div class="kpi"><div class="kpi-label">All-Time Payouts</div><div class="kpi-val up" id="fin-all-pay">$0.00</div></div>
          <div class="kpi"><div class="kpi-label">All-Time Net</div><div class="kpi-val nt" id="fin-all-net">$0.00</div></div>
        </div>
        <div class="fin-cols">
          <div class="panel">
            <div class="panel-head"><span class="panel-title">Payouts</span><span id="fin-pay-tot" style="font-family:var(--font-mono);font-size:12px;font-weight:700;color:var(--amber);">$0.00</span></div>
            <div class="panel-body">
              <div class="fin-add">
                <div><label class="fl">Firm</label><input id="p-firm" placeholder="Firm name" style="font-size:11px;"></div>
                <div><label class="fl">Amount</label><input id="p-amt" type="number" placeholder="0.00" style="font-size:11px;"></div>
                <div><label class="fl">Date</label><input id="p-date" placeholder="MM/DD" style="font-size:11px;"></div>
                <div><label class="fl">&nbsp;</label><button class="btn btn-amber" onclick="addPayout()" style="height:34px;padding:0 12px;">Add</button></div>
              </div>
              <div id="payout-list"></div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head"><span class="panel-title">Expenses</span><span id="fin-exp-tot" style="font-family:var(--font-mono);font-size:12px;font-weight:700;color:var(--red);">$0.00</span></div>
            <div class="panel-body">
              <div class="fin-add">
                <div><label class="fl">Firm</label><input id="e-firm" placeholder="Firm name" style="font-size:11px;"></div>
                <div><label class="fl">Amount</label><input id="e-amt" type="number" placeholder="0.00" style="font-size:11px;"></div>
                <div><label class="fl">Date</label><input id="e-date" placeholder="MM/DD" style="font-size:11px;"></div>
                <div><label class="fl">&nbsp;</label><button class="btn btn-danger" onclick="addExpense()" style="height:34px;padding:0 12px;">Add</button></div>
              </div>
              <div style="margin-bottom:8px;"><input id="e-desc" placeholder="Description..." style="font-size:11px;"></div>
              <div id="expense-list"></div>
            </div>
          </div>
        </div>
        <div style="padding:10px 14px;border:1px solid var(--rule1);font-family:var(--font-mono);font-size:10px;color:var(--paper3);letter-spacing:.04em;margin-top:4px;">
          All-time expenses: <span id="fin-all-exp" style="color:var(--amber);font-weight:700;">$0.00</span>
        </div>
      </div>

      <!-- ── UPGRADE ── -->
      <div class="pg" id="pg-upgrade">
        <div class="ph">
          <div class="ph-left">
            <div class="ph-eyebrow">Subscription</div>
            <div class="ph-title">Upgrade to <em>Pro</em></div>
          </div>
        </div>
        <div class="pay-layout">
          <div>
            <div class="plan-opt sel" id="plan-monthly" onclick="selectPlan('monthly')">
              <div class="plan-opt-top"><span class="plan-opt-name">Monthly</span><span class="plan-opt-price">$10/mo</span></div>
              <div class="plan-opt-desc">Billed monthly · cancel anytime</div>
            </div>
            <div class="plan-opt" id="plan-annual" onclick="selectPlan('annual')">
              <div class="plan-opt-top"><span class="plan-opt-name">Annual <span style="font-family:var(--font-mono);font-size:8px;background:var(--amber);color:#000;padding:2px 5px;letter-spacing:.06em;font-weight:700;margin-left:6px;">SAVE 17%</span></span><span class="plan-opt-price">$100/yr</span></div>
              <div class="plan-opt-desc">$8.33/month · 2 months free</div>
            </div>
            <div class="field"><label class="fl" style="margin-bottom:8px;">Payment Method</label>
              <div class="wallets">
                <div class="wallet" id="pay-apple" onclick="selectWallet('apple')"><span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:15px;line-height:1;vertical-align:middle;"></span>&thinsp;Apple Pay</div>
                <div class="wallet" id="pay-google" onclick="selectWallet('google')"><span style="font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:-.01em;"><span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span></span><span style="font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:400;"> Pay</span></div>
              </div>
            </div>
            <div class="card-vis">
              <div class="cv-glow"></div>
              <div class="cv-chip"></div>
              <div class="cv-num" id="cv-num">•••• •••• •••• ••••</div>
              <div class="cv-row"><span class="cv-name" id="cv-name">YOUR NAME</span><span class="cv-exp" id="cv-exp">MM/YY</span></div>
            </div>
            <div class="cf">
              <div><label class="fl">Cardholder Name</label><input id="cf-name" placeholder="John Doe" oninput="updateCard()"></div>
              <div><label class="fl">Card Number</label><input id="cf-num" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNum(this);updateCard()"></div>
              <div class="cf-row">
                <div><label class="fl">Expiry</label><input id="cf-exp" placeholder="MM/YY" maxlength="5" oninput="formatExp(this);updateCard()"></div>
                <div><label class="fl">CVV</label><input id="cf-cvv" placeholder="123" maxlength="4"></div>
              </div>
              <button class="btn btn-amber btn-full" id="pay-btn" onclick="processPay()" style="padding:11px;font-size:11px;letter-spacing:.08em;">
                <span id="pay-btn-text">Subscribe Now — $10/mo</span>
              </button>
            </div>
            <div id="pay-ok-wrap" class="pay-ok" style="display:none">
              <div class="pay-ok-ico">✓</div>
              <div class="pay-ok-title">You're Pro.</div>
              <div class="pay-ok-sub">Full access activated. Welcome to the desk.</div>
              <button class="btn btn-amber" style="margin-top:20px;" onclick="goTab('cal')">Go to Dashboard →</button>
            </div>
          </div>
          <div>
            <div class="order-sum">
              <div class="os-head">Order Summary</div>
              <div class="os-body">
                <div class="os-row"><span id="os-plan-name">TradeDesk Pro — Monthly</span></div>
                <div class="os-row"><span id="os-sub-label">Monthly subscription</span><span id="os-sub-price">$10.00</span></div>
                <div class="os-row total"><span>Total</span><span id="os-total">$10.00</span></div>
                <div id="os-plan-cycle" style="font-family:var(--font-mono);font-size:9px;color:var(--paper3);margin-top:8px;letter-spacing:.03em;">Billed monthly · renews each month</div>
                <div class="os-feats">
                  <div class="os-feat">Unlimited trade entries</div>
                  <div class="os-feat">Cloud sync across all devices</div>
                  <div class="os-feat">All analytics &amp; charts</div>
                  <div class="os-feat">CSV import from 12+ brokers</div>
                  <div class="os-feat">Prop firm tracker</div>
                  <div class="os-feat">Market hub &amp; news feed</div>
                  <div class="os-feat">Priority support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>

  <!-- BOTTOM NAV -->
  <nav class="bnav">
    <button class="bn on" id="bn-cal" onclick="goTab('cal')"><div class="bn-ico">📅</div>Cal</button>
    <button class="bn" id="bn-charts" onclick="goTab('charts')"><div class="bn-ico">📊</div>Charts</button>
    <button class="bn" id="bn-journal" onclick="goTab('journal')"><div class="bn-ico">📓</div>Journal</button>
    <button class="bn" id="bn-markets" onclick="goTab('markets')"><div class="bn-ico">🎯</div>Planner</button>
    <button class="bn" id="bn-firms" onclick="goTab('firms')"><div class="bn-ico">🏢</div>Firms</button>
    <button class="bn" id="bn-sum" onclick="goTab('sum')"><div class="bn-ico">📆</div>Summary</button>
    <button class="bn" id="bn-fin" onclick="goTab('fin')"><div class="bn-ico">💵</div>Finance</button>
    <button class="bn" id="bn-upgrade" onclick="goTab('upgrade')"><div class="bn-ico">⚡</div>Pro</button>
  </nav>

</div>

<!-- TRADE MODAL -->
<div class="ov" id="trade-ov" onclick="closeTM(event)">
  <div class="modal">
    <div class="modal-head">
      <span class="modal-title" id="tm-lbl">Log Trade</span>
      <button class="modal-x" onclick="closeTM()">×</button>
    </div>
    <div class="modal-body">
      <label class="fl" style="margin-bottom:6px;">Add Trade Entry</label>
      <div class="trade-add-row">
        <div><input id="tm-sym" placeholder="Symbol (ES, NQ…)" style="font-size:12px;" onkeydown="if(event.key==='Enter')addTE()"></div>
        <div><select id="tm-side" style="font-size:11px;width:78px;"><option value="long">Long</option><option value="short">Short</option></select></div>
        <div><input id="tm-pnl" type="number" placeholder="P&L ($)" style="font-size:12px;" onkeydown="if(event.key==='Enter')addTE()"></div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="addTE()" style="margin-bottom:12px;">+ Add Entry</button>
      <div class="trades-list" id="tm-entries"></div>
      <div class="modal-grid" style="margin-top:12px;">
        <div><label class="fl">Emotion</label>
          <select id="tm-emo">
            <option value="">— None —</option>
            <option value="calm">😌 Calm</option>
            <option value="confident">💪 Confident</option>
            <option value="anxious">😰 Anxious</option>
            <option value="fomo">😤 FOMO</option>
            <option value="revenge">😡 Revenge</option>
            <option value="patient">🧘 Patient</option>
          </select>
        </div>
        <div><label class="fl">Setup / Strategy</label><input id="tm-setup" placeholder="e.g. Breakout, VWAP…"></div>
      </div>
      <div class="modal-full"><label class="fl">Tags</label><input id="tm-tags" placeholder="tag1, tag2, tag3"></div>
      <div class="modal-full"><label class="fl">Notes</label><textarea id="tm-notes" rows="3" placeholder="What happened? Key lessons? Market context…"></textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-danger btn-sm" onclick="clearDay()">Clear Day</button>
      <button class="btn btn-ghost btn-sm" onclick="closeTM()">Cancel</button>
      <button class="btn btn-amber" onclick="saveDay()">Save →</button>
    </div>
  </div>
</div>

<!-- FIRM MODAL -->
<div class="ov" id="firm-ov" onclick="closeFM(event)">
  <div class="modal">
    <div class="modal-head">
      <span class="modal-title" id="fm-title">Add Account</span>
      <button class="modal-x" onclick="closeFM()">×</button>
    </div>
    <div class="modal-body">
      <div class="modal-grid">
        <div><label class="fl">Firm Name</label><input id="fm-name" placeholder="Apex, FTMO…"></div>
        <div><label class="fl">Account Size</label><input id="fm-size" type="number" placeholder="50000"></div>
        <div><label class="fl">Current Balance</label><input id="fm-bal" type="number" placeholder="50000"></div>
        <div><label class="fl">Phase</label>
          <select id="fm-phase">
            <option value="challenge">Challenge</option>
            <option value="verification">Verification</option>
            <option value="funded">Funded</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div><label class="fl">Profit Target</label><input id="fm-tgt" type="number" placeholder="3000"></div>
        <div><label class="fl">Daily Loss Limit</label><input id="fm-dl" type="number" placeholder="1000"></div>
      </div>
      <div class="modal-full"><label class="fl">Max Drawdown</label><input id="fm-dd" type="number" placeholder="2500"></div>
      <div class="modal-full"><label class="fl">Notes</label><textarea id="fm-notes" rows="2" placeholder="Account notes…"></textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost btn-sm" onclick="closeFM()">Cancel</button>
      <button class="btn btn-amber" onclick="saveFirm()">Save →</button>
    </div>
  </div>
</div>

<script>
/* ═══════════════════════════════════
   THEME
═══════════════════════════════════ */
(function(){
  const t=localStorage.getItem('td-theme')||'dark';
  document.documentElement.setAttribute('data-theme',t);
})();
function toggleTheme(){
  const h=document.documentElement,d=h.getAttribute('data-theme')==='dark';
  h.setAttribute('data-theme',d?'light':'dark');
  const b=document.getElementById('theme-btn');if(b)b.textContent=d?'☾':'☀';
  localStorage.setItem('td-theme',d?'light':'dark');
  if(Object.keys(chartInst).length)renderCharts();
}

/* ═══════════════════════════════════
   CONSTANTS & STATE
═══════════════════════════════════ */
const MO=['January','February','March','April','May','June','July','August','September','October','November','December'];
const MS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DS=['Mon','Tue','Wed','Thu','Fri'];
let now=new Date(),vy=now.getFullYear(),vm=now.getMonth();
let editDate=null,tempTrades=[],editFirmId=null,chartInst={},jFilter='all';

/* ═══════════════════════════════════
   DATA HELPERS
═══════════════════════════════════ */
const D=()=>JSON.parse(localStorage.getItem('tdp1')||'{}');
function SD(d){
  localStorage.setItem('tdp1',JSON.stringify(d));
  setSyncDot('saving');
  if(window.cloudSave)window.cloudSave(d);else setSyncDot('err');
}
function setSyncDot(s){
  const e=document.getElementById('sdot');if(!e)return;
  e.className='sync'+(s==='saving'?' saving':s==='err'?' err':'');
  if(s==='ok')setTimeout(()=>e.className='sync',2000);
}
function mk(y,m){return`${y}-${m}`;}
function dk(y,m,d){return`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;}
function tod(){return`${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')}`;}
function $f(n){return`$${Math.abs(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;}
function emoE(e){return{calm:'😌',confident:'💪',anxious:'😰',fomo:'😤',revenge:'😡',patient:'🧘'}[e]||'';}
function dayPnl(dd){return(dd?.trades||[]).reduce((s,t)=>s+t.pnl,0);}

/* ═══════════════════════════════════
   LANDING / MOBILE NAV
═══════════════════════════════════ */
function toggleMobileNav(){document.getElementById('ln-mob').classList.toggle('open');}
function goLanding(){
  document.getElementById('sc-land').style.display='flex';
  document.getElementById('sc-auth').style.display='none';
  document.getElementById('sc-app').style.display='none';
}

/* ═══════════════════════════════════
   AUTH
═══════════════════════════════════ */
function authTab(t,el){
  document.querySelectorAll('.au-tab').forEach(e=>e.classList.remove('on'));
  if(el)el.classList.add('on');
  document.getElementById('form-in').style.display=t==='in'?'flex':'none';
  document.getElementById('form-up').style.display=t==='up'?'flex':'none';
  document.getElementById('auth-err').style.display='none';
}
async function doGoogle(){
  if(!window._fb){demoMode();return;}
  try{await window._fb.signInWithPopup(window._auth,window._fb.gp);}
  catch(e){showErr(e.message||'Google sign-in failed.');}
}
async function doSignIn(){
  if(!window._fb){demoMode();return;}
  const em=document.getElementById('si-em').value,pw=document.getElementById('si-pw').value;
  if(!em||!pw){showErr('Please fill in all fields.');return;}
  try{document.getElementById('si-btn').disabled=true;await window._fb.signInWithEmailAndPassword(window._auth,em,pw);}
  catch(e){showErr(fErr(e.code));document.getElementById('si-btn').disabled=false;}
}
async function doSignUp(){
  if(!window._fb){demoMode();return;}
  const n=document.getElementById('su-nm').value.trim(),em=document.getElementById('su-em').value,pw=document.getElementById('su-pw').value;
  if(!n||!em||!pw){showErr('Please fill in all fields.');return;}
  try{
    document.getElementById('su-btn').disabled=true;
    const c=await window._fb.createUserWithEmailAndPassword(window._auth,em,pw);
    await window._fb.updateProfile(c.user,{displayName:n});
  }catch(e){showErr(fErr(e.code));document.getElementById('su-btn').disabled=false;}
}
async function doSignOut(){
  if(window._auth&&window._fb)await window._fb.signOut(window._auth);
  else goLanding();
}
function showAuth(tab){
  document.getElementById('sc-land').style.display='none';
  document.getElementById('sc-auth').style.display='flex';
  document.getElementById('sc-app').style.display='none';
  document.querySelectorAll('.au-tab').forEach((el,i)=>{el.classList.toggle('on',(tab==='in'&&i===0)||(tab==='up'&&i===1));});
  document.getElementById('form-in').style.display=tab==='in'?'flex':'none';
  document.getElementById('form-up').style.display=tab==='up'?'flex':'none';
  document.getElementById('auth-err').style.display='none';
}
function startDemo(){demoMode();}
function demoMode(){
  window._user=null;
  document.getElementById('sc-land').style.display='none';
  document.getElementById('sc-auth').style.display='none';
  document.getElementById('sc-app').style.display='flex';
  document.getElementById('uname').textContent='Demo';
  setSyncDot('err');
  boot();
}
function showErr(m){const e=document.getElementById('auth-err');e.textContent=m;e.style.display='block';}
function fErr(c){return{'auth/user-not-found':'No account found.','auth/wrong-password':'Wrong password.','auth/invalid-credential':'Invalid email or password.','auth/email-already-in-use':'Email already in use.','auth/weak-password':'Password must be 6+ chars.','auth/invalid-email':'Invalid email.'}[c]||'Something went wrong.';}

/* ═══════════════════════════════════
   BOOT
═══════════════════════════════════ */
window.boot=function(){
  if(window._user){
    const nm=window._user.displayName||window._user.email||'';
    document.getElementById('uname').textContent=nm.split(' ')[0]||nm;
    const init=nm.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2)||'TD';
    document.getElementById('uinit').textContent=init;
    if(window._user.photoURL){
      const av=document.getElementById('uavatar');av.src=window._user.photoURL;av.style.display='block';
      document.getElementById('uinit').style.display='none';
    }
  }
  const theme=localStorage.getItem('td-theme')||'dark';
  const tb=document.getElementById('theme-btn');if(tb)tb.textContent=theme==='light'?'☾':'☀';
  initSumSelects();renderCal();renderFin();
};

/* ═══════════════════════════════════
   TABS
═══════════════════════════════════ */
function goTab(n){
  document.querySelectorAll('.sb-item,.bn').forEach(e=>e.classList.remove('on'));
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  const ni=document.getElementById(`ni-${n}`);if(ni)ni.classList.add('on');
  const bn=document.getElementById(`bn-${n}`);if(bn)bn.classList.add('on');
  const pg=document.getElementById(`pg-${n}`);if(pg)pg.classList.add('on');
  document.querySelector('.mc')?.scrollTo(0,0);
  if(n==='charts')renderCharts();
  if(n==='journal')renderJournal();
  if(n==='firms')renderFirms();
  if(n==='sum')renderSum();
  if(n==='fin')renderFin();
  if(n==='markets')initPlanner();
}

/* ═══════════════════════════════════
   MARKET HUB
═══════════════════════════════════ */
function mhOpen(){const inp=document.getElementById('mh-sym');if(!inp)return;const s=inp.value.trim().toUpperCase();if(!s)return;window.open('https://www.tradingview.com/chart/?symbol='+encodeURIComponent(s),'_blank');inp.value='';}

/* ═══════════════════════════════════
   CALENDAR
═══════════════════════════════════ */
function renderCal(){
  const data=D();
  document.getElementById('cal-label').textContent=`${MO[vm]} ${vy}`;
  calcStreak();
  const cells=document.getElementById('cal-cells');cells.innerHTML='';
  const fd=new Date(vy,vm,1).getDay(),dim=new Date(vy,vm+1,0).getDate();
  for(let i=0;i<fd;i++){const e=document.createElement('div');e.className='cal-cell empty';cells.appendChild(e);}
  for(let d=1;d<=dim;d++){
    const key=dk(vy,vm,d),dd=data.days?.[key];
    const isT=(d===now.getDate()&&vm===now.getMonth()&&vy===now.getFullYear());
    let cls='cal-cell';if(isT)cls+=' today';
    if(dd){const p=dayPnl(dd);cls+=p>=0?' win-day':' loss-day';}
    const cell=document.createElement('div');cell.className=cls;cell.onclick=()=>openTM(key,d);
    const dn=document.createElement('div');dn.className='cc-num';dn.textContent=d;cell.appendChild(dn);
    if(dd){
      const p=dayPnl(dd),cls2=p>=0?'up':'dn';
      const pe=document.createElement('div');pe.className=`cc-pnl ${cls2}`;pe.textContent=(p>=0?'+':'')+`$${Math.abs(p).toFixed(0)}`;cell.appendChild(pe);
      const te=document.createElement('div');te.className='cc-t';te.textContent=`${dd.trades?.length||0}t`;cell.appendChild(te);
      if(dd.notes){const ne=document.createElement('div');ne.className='cc-note';ne.textContent=dd.notes;cell.appendChild(ne);}
      const bar=document.createElement('div');bar.className=`cc-bar ${cls2}`;cell.appendChild(bar);
      if(dd.emotion){const em=document.createElement('div');em.className='cc-emo';em.textContent=emoE(dd.emotion);cell.appendChild(em);}
    }
    cells.appendChild(cell);
  }
  updateTop();updateCalStats();
}
function chMonth(dir){vm+=dir;if(vm>11){vm=0;vy++;}if(vm<0){vm=11;vy--;}renderCal();}
function updateCalStats(){
  const data=D(),pfx=`${vy}-${String(vm+1).padStart(2,'0')}-`;
  const keys=Object.keys(data.days||{}).filter(k=>k.startsWith(pfx));
  let wins=0,losses=0,best=null,worst=null;
  keys.forEach(k=>{const p=dayPnl(data.days[k]);if(p>0)wins++;else losses++;if(best===null||p>best)best=p;if(worst===null||p<worst)worst=p;});
  const wr=keys.length?Math.round(wins/keys.length*100):null;
  document.getElementById('s-days').textContent=keys.length;
  document.getElementById('s-wr').textContent=wr!==null?wr+'%':'—';
  document.getElementById('s-best').textContent=best!==null?'+$'+best.toFixed(2):'—';
  document.getElementById('s-worst').textContent=worst!==null?'−$'+Math.abs(worst).toFixed(2):'—';
}
function calcStreak(){
  const data=D(),allK=Object.keys(data.days||{}).sort();
  const el=document.getElementById('streak-el');if(!el)return;
  if(!allK.length){el.innerHTML='';return;}
  const lp=dayPnl(data.days[allK.at(-1)]);const isW=lp>0;let n=1;
  for(let i=allK.length-2;i>=0;i--){const p=dayPnl(data.days[allK[i]]);if((p>0)===isW)n++;else break;}
  el.innerHTML=`<span class="streak-tag ${isW?'win':'loss'}">🔥 ${n}-Day ${isW?'Win':'Loss'} Streak</span>`;
}
function updateTop(){
  const data=D(),pfx=`${vy}-${String(vm+1).padStart(2,'0')}-`;
  let pnl=0;Object.keys(data.days||{}).filter(k=>k.startsWith(pfx)).forEach(k=>{pnl+=dayPnl(data.days[k]);});
  const mk_=mk(vy,vm);
  const pays=(data.payouts||[]).filter(p=>p.month===mk_).reduce((s,p)=>s+p.amount,0);
  const exps=(data.expenses||[]).filter(e=>e.month===mk_).reduce((s,e)=>s+e.amount,0);
  const net=pnl+pays-exps;
  const pe=document.getElementById('tb-pnl');pe.textContent=(pnl>=0?'+':'')+'$'+Math.abs(pnl).toFixed(2);pe.className='ats-v '+(pnl>=0?'up':'dn');
  document.getElementById('tb-pay').textContent=$f(pays);
  const ne=document.getElementById('tb-net');ne.textContent=(net>=0?'+':'')+'$'+Math.abs(net).toFixed(2);ne.className='ats-v '+(net>=0?'up':'dn');
}

/* ═══════════════════════════════════
   TRADE MODAL
═══════════════════════════════════ */
function openTM(key,day){
  editDate=key;tempTrades=[];
  const dd=D().days?.[key];
  document.getElementById('tm-lbl').textContent=`${MO[vm]} ${day}, ${vy}`;
  ['tm-sym','tm-pnl'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('tm-emo').value=dd?.emotion||'';
  document.getElementById('tm-setup').value=dd?.setup||'';
  document.getElementById('tm-notes').value=dd?.notes||'';
  document.getElementById('tm-tags').value=(dd?.tags||[]).join(', ');
  if(dd?.trades)tempTrades=[...dd.trades];
  renderTMEntries();
  document.getElementById('trade-ov').classList.add('open');
  setTimeout(()=>document.getElementById('tm-sym').focus(),80);
}
function closeTM(e){if(!e||e.target===document.getElementById('trade-ov')){document.getElementById('trade-ov').classList.remove('open');editDate=null;tempTrades=[];}}
function addTE(){
  const sym=document.getElementById('tm-sym').value.trim().toUpperCase();
  const pnl=parseFloat(document.getElementById('tm-pnl').value);
  const side=document.getElementById('tm-side').value;
  if(!sym||isNaN(pnl))return;
  tempTrades.push({id:Date.now(),symbol:sym,pnl,side});
  document.getElementById('tm-sym').value='';document.getElementById('tm-pnl').value='';
  document.getElementById('tm-sym').focus();renderTMEntries();
}
function renderTMEntries(){
  const c=document.getElementById('tm-entries');c.innerHTML='';
  if(!tempTrades.length)return;
  tempTrades.forEach(t=>{
    const row=document.createElement('div');row.className='trade-row';
    row.innerHTML=`<span class="tr-sym">${t.symbol}</span><span class="tr-side ${t.side}">${t.side.toUpperCase()}</span><span class="tr-pnl ${t.pnl>=0?'up':'dn'}">${t.pnl>=0?'+':''}$${Math.abs(t.pnl).toFixed(2)}</span><button class="rm-btn" onclick="rmTE(${t.id})">×</button>`;
    c.appendChild(row);
  });
  const tot=tempTrades.reduce((s,t)=>s+t.pnl,0);
  const td=document.createElement('div');td.className='te-total';
  td.innerHTML=`<span style="color:var(--paper3);font-size:10px;letter-spacing:.06em;text-transform:uppercase;">Total</span><span style="color:${tot>=0?'var(--amber)':'var(--red)'}">${tot>=0?'+':''}$${Math.abs(tot).toFixed(2)}</span>`;
  c.appendChild(td);
}
function rmTE(id){tempTrades=tempTrades.filter(t=>t.id!==id);renderTMEntries();}
function saveDay(){
  if(!editDate)return;
  const data=D();if(!data.days)data.days={};
  const notes=document.getElementById('tm-notes').value.trim();
  const emotion=document.getElementById('tm-emo').value;
  const setup=document.getElementById('tm-setup').value.trim();
  const tags=document.getElementById('tm-tags').value.split(',').map(t=>t.trim()).filter(Boolean);
  if(tempTrades.length||notes||emotion||setup)data.days[editDate]={trades:tempTrades,notes,emotion,setup,tags};
  else delete data.days[editDate];
  SD(data);closeTM();renderCal();
}
function clearDay(){if(!editDate)return;const data=D();if(data.days)delete data.days[editDate];SD(data);closeTM();renderCal();}

/* ═══════════════════════════════════
   ANALYTICS
═══════════════════════════════════ */
function destroyC(id){if(chartInst[id]){chartInst[id].destroy();delete chartInst[id];}}
function getMonthDays(){const data=D(),pfx=`${vy}-${String(vm+1).padStart(2,'0')}-`;return Object.keys(data.days||{}).filter(k=>k.startsWith(pfx)).sort().map(k=>({date:k,pnl:dayPnl(data.days[k]),trades:data.days[k].trades||[],emotion:data.days[k].emotion||''}));}
function getAllDays(){const data=D();return Object.keys(data.days||{}).sort().map(k=>({date:k,pnl:dayPnl(data.days[k]),trades:data.days[k].trades||[],emotion:data.days[k].emotion||''}));}
function cOpts(dark){
  const gc=dark?'rgba(255,255,255,.04)':'rgba(0,0,0,.04)';
  const tc=dark?'#5a5450':'#8a7d6a';
  return{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:dark?'#111111':'#ede8dc',borderColor:dark?'#282828':'#c8bea8',borderWidth:1,titleColor:tc,bodyColor:dark?'#e8e2d8':'#1a1510',bodyFont:{family:'IBM Plex Mono',size:11},padding:10}},scales:{x:{grid:{color:gc},ticks:{color:tc,font:{family:'IBM Plex Mono',size:9},maxRotation:0,maxTicksLimit:8}},y:{grid:{color:gc},ticks:{color:tc,font:{family:'IBM Plex Mono',size:9}}}}};
}
function renderCharts(){
  const period=document.getElementById('charts-period')?.value||'month';
  const days=period==='all'?getAllDays():getMonthDays();
  const wins=days.filter(d=>d.pnl>0),losses=days.filter(d=>d.pnl<0);
  const tot=days.reduce((s,d)=>s+d.pnl,0);
  const aw=wins.length?wins.reduce((s,d)=>s+d.pnl,0)/wins.length:0;
  const al=losses.length?losses.reduce((s,d)=>s+d.pnl,0)/losses.length:0;
  const tw=wins.reduce((s,d)=>s+d.pnl,0),tl=Math.abs(losses.reduce((s,d)=>s+d.pnl,0));
  const pf=tl>0?tw/tl:tw>0?Infinity:0;
  const best=days.length?Math.max(...days.map(d=>d.pnl)):0;
  const worst=days.length?Math.min(...days.map(d=>d.pnl)):0;
  const totalTrades=days.reduce((s,d)=>s+d.trades.length,0);
  const wr=days.length?Math.round(wins.length/days.length*100):0;
  const setV=(id,v,cls)=>{const e=document.getElementById(id);if(e){e.textContent=v;if(cls)e.className='kpi-val '+cls;}};
  const setSub=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  setV('ch-tot',(tot>=0?'+':'')+'$'+Math.abs(tot).toFixed(2),tot>=0?'up':'dn');
  setSub('ch-tot-sub',`${days.length} trading days`);
  setV('ch-wr',wr+'%','bl');
  setSub('ch-wr-sub',`${wins.length}W / ${losses.length}L`);
  setV('ch-aw','$'+aw.toFixed(2),'up');
  setSub('ch-al','Avg Loss: −$'+Math.abs(al).toFixed(2));
  setV('ch-pf',pf===Infinity?'∞':pf.toFixed(2),'bl');
  setSub('ch-pf-sub',pf>2?'Excellent':pf>1.5?'Good':pf>1?'Marginal':'Negative');
  setV('ch-best',best>0?'+$'+best.toFixed(2):'—','up');
  setV('ch-worst',worst<0?'−$'+Math.abs(worst).toFixed(2):'—','dn');
  setV('ch-trades',totalTrades,'nt');
  setV('ch-avg',days.length?'$'+(tot/days.length).toFixed(2):'—',tot/Math.max(days.length,1)>=0?'up':'dn');
  const dark=document.documentElement.getAttribute('data-theme')!=='light';
  const CO=cOpts(dark);
  const labels=days.map(d=>d.date.slice(5));
  let cum=0;const cumD=days.map(d=>{cum+=d.pnl;return parseFloat(cum.toFixed(2));});
  destroyC('cum');
  if(document.getElementById('chart-cum'))
    chartInst['cum']=new Chart(document.getElementById('chart-cum'),{type:'line',data:{labels,datasets:[{data:cumD,borderColor:'#e8a020',backgroundColor:(ctx)=>{const g=ctx.chart.ctx.createLinearGradient(0,0,0,200);g.addColorStop(0,'rgba(232,160,32,.12)');g.addColorStop(1,'rgba(232,160,32,.0)');return g;},borderWidth:1.5,pointRadius:2,pointBackgroundColor:'#e8a020',pointBorderColor:dark?'#080808':'#f5f0e8',pointBorderWidth:1.5,fill:true,tension:.35}]},options:CO});
  destroyC('daily');
  if(document.getElementById('chart-daily'))
    chartInst['daily']=new Chart(document.getElementById('chart-daily'),{type:'bar',data:{labels,datasets:[{data:days.map(d=>d.pnl),backgroundColor:days.map(d=>d.pnl>=0?'rgba(232,160,32,.7)':'rgba(200,64,64,.7)'),borderRadius:0,borderSkipped:false}]},options:CO});
  destroyC('wl');
  const dopts={responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:dark?'#5a5450':'#8a7d6a',font:{family:'IBM Plex Mono',size:9},padding:14,boxWidth:10}},tooltip:{backgroundColor:dark?'#111111':'#ede8dc',borderColor:dark?'#282828':'#c8bea8',borderWidth:1,bodyColor:dark?'#e8e2d8':'#1a1510',bodyFont:{family:'IBM Plex Mono',size:11}}}};
  if(document.getElementById('chart-wl'))
    chartInst['wl']=new Chart(document.getElementById('chart-wl'),{type:'doughnut',data:{labels:['Win Days','Loss Days'],datasets:[{data:[wins.length||0,losses.length||0],backgroundColor:['rgba(232,160,32,.8)','rgba(200,64,64,.8)'],borderWidth:0,hoverOffset:4}]},options:dopts});
  const sm={};days.forEach(d=>d.trades.forEach(t=>{sm[t.symbol]=(sm[t.symbol]||0)+t.pnl;}));
  destroyC('sym');
  if(document.getElementById('chart-sym'))
    chartInst['sym']=new Chart(document.getElementById('chart-sym'),{type:'bar',data:{labels:Object.keys(sm),datasets:[{data:Object.values(sm).map(v=>parseFloat(v.toFixed(2))),backgroundColor:Object.values(sm).map(v=>v>=0?'rgba(232,160,32,.7)':'rgba(200,64,64,.7)'),borderRadius:0}]},options:{...CO,indexAxis:'y'}});
  const em={};days.forEach(d=>{if(d.emotion){if(!em[d.emotion])em[d.emotion]={cnt:0,pnl:0};em[d.emotion].cnt++;em[d.emotion].pnl+=d.pnl;}});
  const emL=Object.keys(em).map(k=>({calm:'Calm',confident:'Confident',anxious:'Anxious',fomo:'FOMO',revenge:'Revenge',patient:'Patient'})[k]||k);
  destroyC('emo');
  if(document.getElementById('chart-emo'))
    chartInst['emo']=new Chart(document.getElementById('chart-emo'),{type:'bar',data:{labels:emL,datasets:[{label:'Avg P&L',data:Object.values(em).map(v=>parseFloat((v.pnl/v.cnt).toFixed(2))),backgroundColor:Object.values(em).map(v=>(v.pnl/v.cnt)>=0?'rgba(232,160,32,.7)':'rgba(200,64,64,.7)'),borderRadius:0}]},options:CO});
}
/* ═══════════════════════════════════
   TRADE PLANNER + STATS
═══════════════════════════════════ */

const PLAN_KEY = 'tdp_plan_';

function planKey(){
  const n = new Date();
  return PLAN_KEY + n.getFullYear() + '-' + String(n.getMonth()+1).padStart(2,'0') + '-' + String(n.getDate()).padStart(2,'0');
}

function initPlanner(){
  // Date label
  const dl = document.getElementById('pl-date-lbl');
  if(dl) dl.textContent = new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});

  // Load saved plan for today
  const saved = JSON.parse(localStorage.getItem(planKey()) || '{}');
  const g = (id) => document.getElementById(id);

  if(g('pl-gameplan'))  g('pl-gameplan').value  = saved.gameplan  || '';
  if(g('pl-good'))      g('pl-good').value       = saved.good      || '';
  if(g('pl-improve'))   g('pl-improve').value    = saved.improve   || '';
  if(g('pl-tomorrow'))  g('pl-tomorrow').value   = saved.tomorrow  || '';

  // Bias
  if(saved.bias) setBiasVal(saved.bias);

  // Checklist
  const checks = saved.checks || [];
  const boxes = document.querySelectorAll('#pl-checklist input[type=checkbox]');
  boxes.forEach((b,i) => { b.checked = checks[i] || false; });
  updateCheckScore();

  // Levels
  renderLevels(saved.levels || []);

  // Stats side
  renderGrade();
  renderStreaks();
  renderMilestones();
  renderRecords();
  renderMiniHeatmap();
}

function savePlan(){
  const g = (id) => document.getElementById(id);
  const boxes = document.querySelectorAll('#pl-checklist input[type=checkbox]');
  const saved = JSON.parse(localStorage.getItem(planKey()) || '{}');
  const plan = {
    gameplan:  g('pl-gameplan')?.value || '',
    good:      g('pl-good')?.value     || '',
    improve:   g('pl-improve')?.value  || '',
    tomorrow:  g('pl-tomorrow')?.value || '',
    bias:      saved.bias || '',
    checks:    [...boxes].map(b => b.checked),
    levels:    saved.levels || [],
  };
  localStorage.setItem(planKey(), JSON.stringify(plan));
  // Flash the save button
  const btn = document.querySelector('[onclick="savePlan()"]');
  if(btn){ const orig = btn.textContent; btn.textContent = 'Saved ✓'; btn.style.background='var(--green)'; btn.style.borderColor='var(--green)'; setTimeout(()=>{ btn.textContent=orig; btn.style.background=''; btn.style.borderColor=''; },1600); }
}

/* ── Bias ── */
function setBias(el){
  const v = el.dataset.v;
  const saved = JSON.parse(localStorage.getItem(planKey()) || '{}');
  saved.bias = v;
  localStorage.setItem(planKey(), JSON.stringify(saved));
  setBiasVal(v);
}
function setBiasVal(v){
  document.querySelectorAll('.bias-btn').forEach(b => {
    const isActive = b.dataset.v === v;
    b.style.background = isActive ? 'var(--amber)' : '';
    b.style.color = isActive ? '#000' : '';
    b.style.borderColor = isActive ? 'var(--amber)' : '';
  });
}

/* ── Checklist ── */
function updateCheckScore(){
  const boxes = document.querySelectorAll('#pl-checklist input[type=checkbox]');
  const done = [...boxes].filter(b=>b.checked).length;
  const el = document.getElementById('check-score');
  if(el) el.textContent = done + ' / ' + boxes.length;
}

/* ── Key Levels ── */
function toggleLevelAdd(){
  const el = document.getElementById('levels-add');
  if(el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
function confirmAddLevel(){
  const sym   = (document.getElementById('lv-sym')?.value||'').trim().toUpperCase();
  const price = parseFloat(document.getElementById('lv-price')?.value||'');
  const type  = document.getElementById('lv-type')?.value || 'support';
  if(!sym || isNaN(price)) return;
  const saved = JSON.parse(localStorage.getItem(planKey()) || '{}');
  if(!saved.levels) saved.levels = [];
  saved.levels.push({ id: Date.now(), sym, price, type });
  localStorage.setItem(planKey(), JSON.stringify(saved));
  ['lv-sym','lv-price'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('levels-add').style.display = 'none';
  renderLevels(saved.levels);
}
function deleteLevel(id){
  const saved = JSON.parse(localStorage.getItem(planKey()) || '{}');
  saved.levels = (saved.levels||[]).filter(l => l.id !== id);
  localStorage.setItem(planKey(), JSON.stringify(saved));
  renderLevels(saved.levels);
}
function renderLevels(levels){
  const c = document.getElementById('levels-list'); if(!c) return;
  if(!levels.length){
    c.innerHTML = '<div style="padding:10px 18px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);">No levels set. Click + Add above.</div>';
    return;
  }
  const colorMap = { support:'var(--green)', resistance:'var(--red)', target:'var(--amber)', stop:'var(--red)', pivot:'var(--blue)' };
  c.innerHTML = levels.map(l => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 18px;border-bottom:1px solid var(--rule1);">
      <span style="font-family:var(--font-mono);font-size:11px;font-weight:700;min-width:34px;">${l.sym}</span>
      <span style="font-family:var(--font-mono);font-size:12px;font-weight:700;flex:1;">${l.price.toLocaleString()}</span>
      <span style="font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border:1px solid;color:${colorMap[l.type]||'var(--paper3)'};border-color:${colorMap[l.type]||'var(--rule2)'};">${l.type}</span>
      <button class="rm-btn" onclick="deleteLevel(${l.id})">×</button>
    </div>`).join('');
}

/* ── Grade ── */
function renderGrade(){
  const data = D();
  const days = Object.keys(data.days||{});
  if(!days.length){
    document.getElementById('grade-letter').textContent = '—';
    document.getElementById('grade-label').textContent  = 'No data yet';
    document.getElementById('grade-score').textContent  = '';
    return;
  }
  const allPnl  = days.map(k => dayPnl(data.days[k]));
  const wins    = allPnl.filter(p => p > 0);
  const losses  = allPnl.filter(p => p < 0);
  const wr      = wins.length / allPnl.length;
  const avgW    = wins.length   ? wins.reduce((s,p)=>s+p,0)/wins.length : 0;
  const avgL    = losses.length ? Math.abs(losses.reduce((s,p)=>s+p,0)/losses.length) : 1;
  const rr      = avgL > 0 ? avgW / avgL : 0;
  const totPnl  = allPnl.reduce((s,p)=>s+p,0);
  // Score 0-100
  let score = 0;
  score += Math.min(40, wr * 60);              // win rate (max 40pts at 67%+)
  score += Math.min(25, rr * 12.5);            // reward:risk (max 25pts at 2R+)
  score += totPnl > 0 ? Math.min(25, totPnl/200) : Math.max(-15, totPnl/500); // P&L contribution
  score += days.length >= 20 ? 10 : days.length/2; // consistency bonus
  score = Math.max(0, Math.min(100, score));

  const grades = [
    { min:90, letter:'A+', label:'Elite Trader' },
    { min:80, letter:'A',  label:'Excellent' },
    { min:70, letter:'B+', label:'Very Good' },
    { min:60, letter:'B',  label:'Good' },
    { min:50, letter:'C+', label:'Developing' },
    { min:40, letter:'C',  label:'Needs Work' },
    { min:0,  letter:'D',  label:'Keep Grinding' },
  ];
  const g = grades.find(g => score >= g.min);
  const colors = { 'A+':'var(--amber)', 'A':'var(--amber)', 'B+':'var(--green)', 'B':'var(--green)', 'C+':'var(--blue)', 'C':'var(--blue)', 'D':'var(--red)' };

  const gl = document.getElementById('grade-letter');
  const gb = document.getElementById('grade-label');
  const gs = document.getElementById('grade-score');
  if(gl){ gl.textContent = g.letter; gl.style.color = colors[g.letter] || 'var(--amber)'; }
  if(gb){ gb.textContent = g.label; }
  if(gs){ gs.textContent = `${score.toFixed(0)}/100 · ${Math.round(wr*100)}% WR · ${rr.toFixed(2)}R avg · ${days.length} days`; }
}

/* ── Streaks ── */
function renderStreaks(){
  const data = D();
  const keys = Object.keys(data.days||{}).sort();
  if(!keys.length){
    document.getElementById('streaks-body').innerHTML = '<div style="grid-column:span 2;padding:14px 18px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);">No trades yet.</div>';
    return;
  }
  // Current streak
  let curStreak = 0, curType = null;
  for(let i = keys.length-1; i >= 0; i--){
    const p = dayPnl(data.days[keys[i]]);
    const t = p >= 0 ? 'win' : 'loss';
    if(curType === null) curType = t;
    if(t === curType) curStreak++;
    else break;
  }
  // Best win streak
  let bestWin = 0, cur = 0;
  keys.forEach(k => { if(dayPnl(data.days[k])>0){cur++;bestWin=Math.max(bestWin,cur);}else cur=0; });
  // Best loss streak
  let bestLoss = 0; cur = 0;
  keys.forEach(k => { if(dayPnl(data.days[k])<0){cur++;bestLoss=Math.max(bestLoss,cur);}else cur=0; });
  // Total wins/losses
  const wins = keys.filter(k => dayPnl(data.days[k]) > 0).length;
  const losses = keys.length - wins;

  const items = [
    { label:'Current', val: curStreak + (curType==='win'?' W':' L'), color: curType==='win'?'var(--amber)':'var(--red)' },
    { label:'Best Win Streak', val: bestWin+'W', color:'var(--amber)' },
    { label:'Win Days', val: wins, color:'var(--amber)' },
    { label:'Loss Days', val: losses, color:'var(--red)' },
  ];
  document.getElementById('streaks-body').innerHTML = items.map(s => `
    <div style="background:var(--ink);padding:12px 16px;">
      <div style="font-family:var(--font-mono);font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--paper3);margin-bottom:5px;">${s.label}</div>
      <div style="font-family:var(--font-mono);font-size:18px;font-weight:700;color:${s.color};">${s.val}</div>
    </div>`).join('');
}

/* ── Milestones ── */
function renderMilestones(){
  const data = D();
  const keys  = Object.keys(data.days||{}).sort();
  const allPnl = keys.map(k => dayPnl(data.days[k]));
  const totPnl = allPnl.reduce((s,p)=>s+p,0);
  const wins   = allPnl.filter(p=>p>0).length;
  const trades = keys.reduce((s,k)=>s+(data.days[k].trades||[]).length,0);

  const milestones = [
    { icon:'🏆', label:'First Win Day',          done: wins >= 1,    desc:'Log your first profitable day' },
    { icon:'📅', label:'5 Trading Days',          done: keys.length >= 5,   desc: keys.length + ' / 5 days logged' },
    { icon:'💰', label:'$500 Total P&L',          done: totPnl >= 500,  desc: '$' + Math.max(0,totPnl).toFixed(0) + ' / $500' },
    { icon:'🔥', label:'3-Day Win Streak',        done: (() => { let s=0; for(let i=keys.length-1;i>=0;i--){if(dayPnl(data.days[keys[i]])>0)s++;else break;} return s>=3; })(), desc:'3 green days in a row' },
    { icon:'📈', label:'$1,000 Total P&L',        done: totPnl >= 1000, desc: '$' + Math.max(0,totPnl).toFixed(0) + ' / $1,000' },
    { icon:'🎯', label:'20 Trade Days',           done: keys.length >= 20,  desc: keys.length + ' / 20 days' },
    { icon:'⚡', label:'50 Trades Logged',        done: trades >= 50,   desc: trades + ' / 50 trades' },
    { icon:'💎', label:'$5,000 Total P&L',        done: totPnl >= 5000, desc: '$' + Math.max(0,totPnl).toFixed(0) + ' / $5,000' },
    { icon:'🧠', label:'60%+ Win Rate (20+ days)',done: keys.length>=20 && (wins/keys.length)>=0.6, desc: Math.round(wins/Math.max(keys.length,1)*100) + '% WR' },
    { icon:'👑', label:'A Grade Trader',          done: (() => { const w=wins/Math.max(keys.length,1); return w>=0.6&&totPnl>=2000; })(), desc: 'Achieve A-grade performance' },
  ];

  const c = document.getElementById('milestones-list');
  c.innerHTML = milestones.map(m => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 18px;border-bottom:1px solid var(--rule1);opacity:${m.done?1:.45};">
      <span style="font-size:16px;flex-shrink:0;">${m.icon}</span>
      <div style="flex:1;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:${m.done?700:400};color:${m.done?'var(--paper)':'var(--paper2)'};">${m.label}</div>
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--paper3);margin-top:2px;">${m.desc}</div>
      </div>
      ${m.done ? '<span style="font-family:var(--font-mono);font-size:10px;color:var(--amber);font-weight:700;">&#x2713;</span>' : ''}
    </div>`).join('');
}

/* ── Records ── */
function renderRecords(){
  const data = D();
  const keys = Object.keys(data.days||{}).sort();
  if(!keys.length){
    document.getElementById('records-list').innerHTML = '<div style="padding:14px 18px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);">No data yet.</div>';
    return;
  }
  const pnls = keys.map(k => ({ date:k, pnl:dayPnl(data.days[k]) }));
  const best  = pnls.reduce((a,b) => b.pnl>a.pnl?b:a);
  const worst = pnls.reduce((a,b) => b.pnl<a.pnl?b:a);
  const allTrades = keys.flatMap(k => data.days[k].trades||[]);
  const bestTrade  = allTrades.length ? allTrades.reduce((a,b) => b.pnl>a.pnl?b:a) : null;
  const worstTrade = allTrades.length ? allTrades.reduce((a,b) => b.pnl<a.pnl?b:a) : null;

  const rows = [
    { label:'Best Day',   val: '+$'+best.pnl.toFixed(2),  sub: best.date,  color:'var(--amber)' },
    { label:'Worst Day',  val: '-$'+Math.abs(worst.pnl).toFixed(2), sub: worst.date, color:'var(--red)' },
    { label:'Best Trade', val: bestTrade  ? '+$'+bestTrade.pnl.toFixed(2)  : '—', sub: bestTrade?.symbol||'', color:'var(--amber)' },
    { label:'Worst Trade',val: worstTrade ? '-$'+Math.abs(worstTrade.pnl).toFixed(2) : '—', sub: worstTrade?.symbol||'', color:'var(--red)' },
  ];
  document.getElementById('records-list').innerHTML = rows.map(r => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 18px;border-bottom:1px solid var(--rule1);">
      <div>
        <div style="font-family:var(--font-mono);font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--paper3);">${r.label}</div>
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--paper3);margin-top:2px;">${r.sub}</div>
      </div>
      <div style="font-family:var(--font-mono);font-size:13px;font-weight:700;color:${r.color};">${r.val}</div>
    </div>`).join('');
}

/* ── 30-Day Mini Heatmap ── */
function renderMiniHeatmap(){
  const data = D();
  const c = document.getElementById('mini-heatmap'); if(!c) return;
  const cells = [];
  for(let i = 29; i >= 0; i--){
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
    const dd = data.days?.[key];
    const p  = dd ? dayPnl(dd) : null;
    const isT = i === 0;
    let bg = 'var(--ink4)';
    if(p !== null) bg = p >= 0 ? 'var(--amber)' : 'var(--red)';
    const opacity = p !== null ? (Math.min(1, 0.4 + Math.abs(p)/500)) : 0.3;
    cells.push(`<div title="${key}${p!==null?' · '+(p>=0?'+':'')+'$'+Math.abs(p).toFixed(0):''}" style="aspect-ratio:1;background:${bg};opacity:${opacity};${isT?'outline:1px solid var(--paper2);outline-offset:1px;':''}cursor:${dd?'pointer':'default'};" onclick="${dd?`openByKey('${key}')`:''}" ></div>`);
  }
  c.innerHTML = cells.join('');
}


/* ═══════════════════════════════════
   PAYMENT
═══════════════════════════════════ */
let selPlan='monthly',selWallet=null;
function selectPlan(plan){
  selPlan=plan;
  ['monthly','annual'].forEach(p=>{const el=document.getElementById(`plan-${p}`);if(el)el.classList.toggle('sel',p===plan);});
  const PR={monthly:{label:'Monthly subscription',price:'$10.00',total:'$10.00',name:'TradeDesk Pro — Monthly',cycle:'Billed monthly · renews each month'},annual:{label:'Annual subscription',price:'$100.00',total:'$100.00',name:'TradeDesk Pro — Annual',cycle:'Billed yearly · save $20 vs monthly'}};
  const p=PR[plan];
  ['os-sub-label','os-sub-price','os-total','os-plan-name','os-plan-cycle'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=[p.label,p.price,p.total,p.name,p.cycle][i];});
  const btn=document.getElementById('pay-btn-text');if(btn)btn.textContent=plan==='monthly'?'Subscribe Now — $10/mo':'Subscribe Now — $100/yr';
}
function selectWallet(type){selWallet=selWallet===type?null:type;['apple','google'].forEach(w=>{const el=document.getElementById(`pay-${w}`);if(el)el.classList.toggle('sel',w===selWallet);});}
function updateCard(){
  const name=document.getElementById('cf-name')?.value||'',num=document.getElementById('cf-num')?.value||'',exp=document.getElementById('cf-exp')?.value||'';
  const cn=document.getElementById('cv-name');if(cn)cn.textContent=name.toUpperCase()||'YOUR NAME';
  const cnum=document.getElementById('cv-num');if(cnum)cnum.textContent=num?num.padEnd(19,'•').replace(/(.{4})/g,'$1 ').trim():'•••• •••• •••• ••••';
  const ce=document.getElementById('cv-exp');if(ce)ce.textContent=exp||'MM/YY';
}
function formatCardNum(inp){let v=inp.value.replace(/\D/g,'').substring(0,16);inp.value=v.replace(/(.{4})/g,'$1 ').trim();}
function formatExp(inp){let v=inp.value.replace(/\D/g,'').substring(0,4);if(v.length>=3)v=v.substring(0,2)+'/'+v.substring(2);inp.value=v;}
function processPay(){
  if(selWallet){runPay(`Processing ${selWallet==='apple'?'Apple':'Google'} Pay…`);return;}
  const num=document.getElementById('cf-num')?.value.replace(/\s/g,'')||'';
  const exp=document.getElementById('cf-exp')?.value||'';
  const cvv=document.getElementById('cf-cvv')?.value||'';
  const name=document.getElementById('cf-name')?.value||'';
  if(!name||num.length<16||!exp.match(/^\d{2}\/\d{2}$/)||cvv.length<3){alert('Please fill in all payment details.');return;}
  runPay('Processing…');
}
function runPay(msg){
  const btn=document.getElementById('pay-btn'),txt=document.getElementById('pay-btn-text');
  if(!btn||!txt)return;btn.disabled=true;txt.textContent=msg;
  setTimeout(()=>{
    const ok=document.getElementById('pay-ok-wrap');if(ok)ok.style.display='block';
    btn.disabled=false;txt.textContent='Subscribe Now';
  },2200);
}

/* ═══════════════════════════════════
   JOURNAL
═══════════════════════════════════ */
function setJF(f,el){
  jFilter=f;
  document.querySelectorAll('.j-filt').forEach(b=>b.classList.remove('on'));
  if(el)el.classList.add('on');
  renderJournal();
}
function renderJournal(){
  const data=D(),search=document.getElementById('j-search').value.toLowerCase();
  const c=document.getElementById('journal-list');c.innerHTML='';
  const keys=Object.keys(data.days||{}).sort().reverse();let cnt=0;
  keys.forEach(key=>{
    const dd=data.days[key];if(!dd)return;
    const p=dayPnl(dd);
    if(jFilter==='win'&&p<=0)return;
    if(jFilter==='loss'&&p>=0)return;
    const txt=`${key} ${dd.notes||''} ${(dd.tags||[]).join(' ')} ${(dd.trades||[]).map(t=>t.symbol).join(' ')}`.toLowerCase();
    if(search&&!txt.includes(search))return;
    cnt++;
    const pts=key.split('-');
    const dateObj=new Date(parseInt(pts[0]),parseInt(pts[1])-1,parseInt(pts[2]));
    const dayName=dateObj.toLocaleDateString('en-US',{weekday:'long'});
    const dateStr=`${MS[parseInt(pts[1])-1]} ${parseInt(pts[2])}, ${pts[0]}`;
    const trades=dd.trades||[];
    const wins=trades.filter(t=>t.pnl>0).length;
    const wr=trades.length?Math.round(wins/trades.length*100):null;
    const el=document.createElement('div');el.className='j-row';
    const tradeChips=trades.map(t=>`<div class="j-trade ${t.pnl>=0?'up':'dn'}"><span class="j-trade-sym">${t.symbol}</span><span class="j-trade-pnl">${t.pnl>=0?'+':''}$${Math.abs(t.pnl).toFixed(0)}</span></div>`).join('');
    const metaTags=[];
    if(dd.emotion)metaTags.push(`<span class="j-tag emo">${emoE(dd.emotion)} ${dd.emotion}</span>`);
    if(dd.setup)metaTags.push(`<span class="j-tag">setup: ${dd.setup}</span>`);
    (dd.tags||[]).forEach(t=>metaTags.push(`<span class="j-tag">${t}</span>`));
    el.innerHTML=`
      <div class="j-row-top">
        <div class="j-row-date">
          <div class="j-date-main">${dayName}</div>
          <div class="j-date-sub">${dateStr} · ${trades.length} trade${trades.length!==1?'s':''}</div>
        </div>
        ${wr!==null?`<span class="j-wr ${p>=0?'win':'loss'}">${wr}% WR</span>`:''}
        <span class="j-pnl ${p>=0?'up':'dn'}">${p>=0?'+':''}$${Math.abs(p).toFixed(2)}</span>
        <button class="btn btn-ghost btn-xs j-edit-btn" onclick="event.stopPropagation();openByKey('${key}')">Edit</button>
      </div>
      ${trades.length||dd.notes||metaTags.length?`
      <div class="j-row-body">
        ${trades.length?`<div class="j-trades">${tradeChips}</div>`:''}
        ${dd.notes?`<div class="j-notes">${dd.notes}</div>`:''}
        ${metaTags.length?`<div class="j-tags">${metaTags.join('')}</div>`:''}
      </div>`:''}
    `;
    el.onclick=e=>{if(!e.target.closest('button'))openByKey(key);};
    c.appendChild(el);
  });
  if(!cnt)c.innerHTML=`<div class="empty-state"><div class="es-ico">📓</div><div class="es-text">No journal entries yet.<br>Click any calendar day to start logging.</div></div>`;
}
function openByKey(key){const p=key.split('-');vy=parseInt(p[0]);vm=parseInt(p[1])-1;openTM(key,parseInt(p[2]));}

/* ═══════════════════════════════════
   FIRMS
═══════════════════════════════════ */
function openFirmModal(id=null){
  editFirmId=id;
  document.getElementById('fm-title').textContent=id?'Edit Account':'Add Account';
  if(id){
    const f=(D().firms||[]).find(f=>f.id===id)||{};
    document.getElementById('fm-name').value=f.name||'';document.getElementById('fm-size').value=f.size||'';
    document.getElementById('fm-bal').value=f.balance||'';document.getElementById('fm-phase').value=f.phase||'challenge';
    document.getElementById('fm-tgt').value=f.target||'';document.getElementById('fm-dl').value=f.dailyLoss||'';
    document.getElementById('fm-dd').value=f.maxDD||'';document.getElementById('fm-notes').value=f.notes||'';
  } else {
    ['fm-name','fm-size','fm-bal','fm-tgt','fm-dl','fm-dd','fm-notes'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('fm-phase').value='challenge';
  }
  document.getElementById('firm-ov').classList.add('open');
}
function closeFM(e){if(!e||e.target===document.getElementById('firm-ov')){document.getElementById('firm-ov').classList.remove('open');editFirmId=null;}}
function saveFirm(){
  const data=D();if(!data.firms)data.firms=[];
  const f={id:editFirmId||Date.now(),name:document.getElementById('fm-name').value.trim(),size:parseFloat(document.getElementById('fm-size').value)||0,balance:parseFloat(document.getElementById('fm-bal').value)||0,phase:document.getElementById('fm-phase').value,target:parseFloat(document.getElementById('fm-tgt').value)||0,dailyLoss:parseFloat(document.getElementById('fm-dl').value)||0,maxDD:parseFloat(document.getElementById('fm-dd').value)||0,notes:document.getElementById('fm-notes').value.trim()};
  if(!f.name)return;
  if(editFirmId){const i=data.firms.findIndex(x=>x.id===editFirmId);if(i>=0)data.firms[i]=f;else data.firms.push(f);}else data.firms.push(f);
  SD(data);closeFM();renderFirms();
}
function deleteFirm(id){if(!confirm('Delete this account?'))return;const data=D();data.firms=(data.firms||[]).filter(f=>f.id!==id);SD(data);renderFirms();}
function renderFirms(){
  const data=D(),c=document.getElementById('firms-list');c.innerHTML='';
  const firms=data.firms||[];
  if(!firms.length){c.innerHTML=`<div class="empty-state"><div class="es-ico">🏢</div><div class="es-text">No prop firm accounts yet.<br>Add your funded accounts to track rules and progress.</div></div>`;return;}
  firms.forEach(f=>{
    const pnl=f.balance-f.size,prog=f.size&&f.target?Math.min(100,Math.max(0,(f.balance-f.size)/f.target*100)):0;
    const phCls={challenge:'challenge',verification:'verification',funded:'funded',failed:'failed'}[f.phase]||'challenge';
    const el=document.createElement('div');el.className='firm-item';
    el.innerHTML=`
      <div class="firm-head">
        <div><div class="firm-name">${f.name}</div>${f.notes?`<div class="firm-note">${f.notes}</div>`:''}</div>
        <div class="firm-right">
          <span class="phase ${phCls}">${f.phase.toUpperCase()}</span>
          <button class="btn btn-ghost btn-xs" onclick="openFirmModal(${f.id})">Edit</button>
          <button class="btn btn-danger btn-xs" onclick="deleteFirm(${f.id})">Delete</button>
        </div>
      </div>
      <div class="firm-stats">
        <div class="firm-stat"><div class="firm-stat-l">Account Size</div><div class="firm-stat-v">$${f.size.toLocaleString()}</div></div>
        <div class="firm-stat"><div class="firm-stat-l">Balance</div><div class="firm-stat-v" style="color:${f.balance>=f.size?'var(--amber)':'var(--red)'}">$${f.balance.toLocaleString()}</div></div>
        <div class="firm-stat"><div class="firm-stat-l">P&L</div><div class="firm-stat-v" style="color:${pnl>=0?'var(--amber)':'var(--red)'}">${pnl>=0?'+':''}$${Math.abs(pnl).toLocaleString()}</div></div>
        <div class="firm-stat"><div class="firm-stat-l">Profit Target</div><div class="firm-stat-v">$${f.target.toLocaleString()}</div></div>
        <div class="firm-stat"><div class="firm-stat-l">Daily Limit</div><div class="firm-stat-v" style="color:var(--red)">−$${f.dailyLoss.toLocaleString()}</div></div>
        <div class="firm-stat"><div class="firm-stat-l">Max Drawdown</div><div class="firm-stat-v" style="color:var(--red)">−$${f.maxDD.toLocaleString()}</div></div>
      </div>
      ${f.target?`<div class="prog-wrap"><div class="prog-label"><span>Profit Progress</span><span>${prog.toFixed(1)}%</span></div><div class="prog-track"><div class="prog-fill" style="width:${prog}%"></div></div></div>`:''}
    `;
    c.appendChild(el);
  });
}

/* ═══════════════════════════════════
   SUMMARY
═══════════════════════════════════ */
function initSumSelects(){
  const ys=document.getElementById('sum-yr'),ms=document.getElementById('sum-mo');
  if(!ys||!ms)return;
  ys.innerHTML='';for(let y=now.getFullYear()-2;y<=now.getFullYear()+1;y++){const o=document.createElement('option');o.value=y;o.textContent=y;if(y===vy)o.selected=true;ys.appendChild(o);}
  ms.innerHTML='';MO.forEach((m,i)=>{const o=document.createElement('option');o.value=i;o.textContent=m;if(i===vm)o.selected=true;ms.appendChild(o);});
}
function renderSum(){
  const sy=parseInt(document.getElementById('sum-yr').value),sm_=parseInt(document.getElementById('sum-mo').value);
  const data=D(),pfx=`${sy}-${String(sm_+1).padStart(2,'0')}-`;
  const keys=Object.keys(data.days||{}).filter(k=>k.startsWith(pfx)).sort();
  let tp=0,wins=0,losses=0,tt=0;
  keys.forEach(k=>{const p=dayPnl(data.days[k]);tp+=p;if(p>0)wins++;else losses++;tt+=(data.days[k].trades||[]).length;});
  document.getElementById('sum-stats').innerHTML=`
    <div class="kpi"><div class="kpi-label">Total P&L</div><div class="kpi-val ${tp>=0?'up':'dn'}">${tp>=0?'+':''}$${Math.abs(tp).toFixed(2)}</div></div>
    <div class="kpi"><div class="kpi-label">Win Days</div><div class="kpi-val up">${wins}</div></div>
    <div class="kpi"><div class="kpi-label">Loss Days</div><div class="kpi-val dn">${losses}</div></div>
    <div class="kpi"><div class="kpi-label">Total Trades</div><div class="kpi-val nt">${tt}</div></div>
  `;
  const we=document.getElementById('sum-weeks');we.innerHTML='';
  const dim=new Date(sy,sm_+1,0).getDate();
  for(let ws=1;ws<=dim;ws+=7){
    const wd=document.createElement('div');wd.className='wk-sect';
    wd.innerHTML=`<div class="wk-lbl">${MS[sm_]} ${ws} — ${MS[sm_]} ${Math.min(ws+4,dim)}</div>`;
    const gr=document.createElement('div');gr.className='wk-row';
    for(let di=0;di<5;di++){
      const d=ws+di,k=`${sy}-${String(sm_+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const dd=data.days?.[k],p=dd?dayPnl(dd):null;
      const cell=document.createElement('div');cell.className='wk-cell'+(dd?' has':'');
      if(dd)cell.onclick=()=>openByKey(k);
      cell.innerHTML=`<div class="wk-day">${DS[di]} ${d<=dim?d:''}</div>${d>dim?'<div class="wk-pnl em">—</div>':`<div class="wk-pnl ${p===null?'em':p>=0?'up':'dn'}">${p===null?'—':(p>=0?'+':'')+'$'+Math.abs(p).toFixed(0)}</div>${dd?`<div class="wk-cnt">${dd.trades?.length||0} trades</div>`:''}`}`;
      gr.appendChild(cell);
    }
    wd.appendChild(gr);we.appendChild(wd);if(ws+7>dim)break;
  }
  const tb=document.getElementById('sum-tbody');tb.innerHTML='';
  if(!keys.length){tb.innerHTML='<tr><td colspan="6" style="padding:24px;text-align:center;color:var(--paper3);font-family:var(--font-mono);font-size:11px;">No trades this period</td></tr>';return;}
  keys.slice().reverse().forEach(k=>{
    const dd=data.days[k],p=dayPnl(dd),syms=[...new Set((dd.trades||[]).map(t=>t.symbol))].join(', ');
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${k}</td><td style="color:${p>=0?'var(--amber)':'var(--red)'};">${p>=0?'+':''}$${Math.abs(p).toFixed(2)}</td><td>${dd.trades?.length||0}</td><td>${syms||'—'}</td><td>${dd.setup||'—'}</td><td style="color:var(--paper3)">${dd.notes||'—'}</td>`;
    tb.appendChild(tr);
  });
}

/* ═══════════════════════════════════
   FINANCE
═══════════════════════════════════ */
function addPayout(){
  const firm=document.getElementById('p-firm').value.trim(),amt=parseFloat(document.getElementById('p-amt').value),date=document.getElementById('p-date').value.trim();
  if(!firm||isNaN(amt)||amt<=0)return;
  const data=D();if(!data.payouts)data.payouts=[];
  data.payouts.push({id:Date.now(),firm,amount:amt,date:date||tod(),month:mk(vy,vm)});
  SD(data);['p-firm','p-amt','p-date'].forEach(id=>document.getElementById(id).value='');
  renderFin();updateTop();
}
function delPayout(id){const data=D();data.payouts=(data.payouts||[]).filter(p=>p.id!==id);SD(data);renderFin();updateTop();}
function addExpense(){
  const firm=document.getElementById('e-firm').value.trim(),desc=document.getElementById('e-desc').value.trim(),amt=parseFloat(document.getElementById('e-amt').value),date=document.getElementById('e-date').value.trim();
  if(!firm||isNaN(amt)||amt<=0)return;
  const data=D();if(!data.expenses)data.expenses=[];
  data.expenses.push({id:Date.now(),firm,desc,amount:amt,date:date||tod(),month:mk(vy,vm)});
  SD(data);['e-firm','e-desc','e-amt','e-date'].forEach(id=>document.getElementById(id).value='');
  renderFin();updateTop();
}
function delExpense(id){const data=D();data.expenses=(data.expenses||[]).filter(e=>e.id!==id);SD(data);renderFin();updateTop();}
function renderFin(){
  const data=D(),mk_=mk(vy,vm);
  const pays=(data.payouts||[]).filter(p=>p.month===mk_),exps=(data.expenses||[]).filter(e=>e.month===mk_);
  const pT=pays.reduce((s,p)=>s+p.amount,0),eT=exps.reduce((s,e)=>s+e.amount,0);
  const aP=(data.payouts||[]).reduce((s,p)=>s+p.amount,0),aE=(data.expenses||[]).reduce((s,e)=>s+e.amount,0);
  document.getElementById('fin-pay-tot').textContent='$'+pT.toFixed(2);
  document.getElementById('fin-exp-tot').textContent='$'+eT.toFixed(2);
  document.getElementById('fin-s-pay').textContent='$'+pT.toFixed(2);
  document.getElementById('fin-s-exp').textContent='$'+eT.toFixed(2);
  document.getElementById('fin-all-pay').textContent='$'+aP.toFixed(2);
  document.getElementById('fin-all-exp').textContent='$'+aE.toFixed(2);
  document.getElementById('fin-all-net').textContent=(aP-aE>=0?'+':'')+'$'+Math.abs(aP-aE).toFixed(2);
  const pfx=`${vy}-${String(vm+1).padStart(2,'0')}-`;let pnl=0;
  Object.keys(data.days||{}).filter(k=>k.startsWith(pfx)).forEach(k=>{pnl+=dayPnl(data.days[k]);});
  document.getElementById('fin-s-pnl').textContent=(pnl>=0?'+':'')+'$'+Math.abs(pnl).toFixed(2);
  const net=pnl+pT-eT;
  document.getElementById('fin-s-net').textContent=(net>=0?'+':'')+'$'+Math.abs(net).toFixed(2);
  document.getElementById('fin-s-net').style.color=net>=0?'var(--amber)':'var(--red)';
  const pL=document.getElementById('payout-list');pL.innerHTML='';
  pays.forEach(p=>{const el=document.createElement('div');el.className='fin-entry';el.innerHTML=`<div style="flex:1"><div class="fin-entry-name">${p.firm}</div></div><span class="fin-entry-date">${p.date}</span><span class="fin-entry-amt up">+$${p.amount.toFixed(2)}</span><button class="rm-btn" onclick="delPayout(${p.id})">×</button>`;pL.appendChild(el);});
  if(!pays.length)pL.innerHTML=`<div style="padding:12px 18px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);">No payouts this month</div>`;
  const eL=document.getElementById('expense-list');eL.innerHTML='';
  exps.forEach(e=>{const el=document.createElement('div');el.className='fin-entry';el.innerHTML=`<div style="flex:1"><div class="fin-entry-name">${e.firm}</div><div class="fin-entry-desc">${e.desc}</div></div><span class="fin-entry-date">${e.date}</span><span class="fin-entry-amt dn">−$${e.amount.toFixed(2)}</span><button class="rm-btn" onclick="delExpense(${e.id})">×</button>`;eL.appendChild(el);});
  if(!exps.length)eL.innerHTML=`<div style="padding:12px 18px;font-family:var(--font-mono);font-size:10px;color:var(--paper3);">No expenses this month</div>`;
}

/* ═══════════════════════════════════
   CSV
═══════════════════════════════════ */
function exportCSV(){
  const data=D(),rows=[['Date','Symbol','Side','P&L','Day Total','Emotion','Setup','Notes','Tags']];
  Object.keys(data.days||{}).sort().forEach(k=>{
    const dd=data.days[k],dp=dayPnl(dd);
    if(!(dd.trades||[]).length)rows.push([k,'','','',dp.toFixed(2),dd.emotion||'',dd.setup||'',dd.notes||'',(dd.tags||[]).join(';')]);
    else(dd.trades||[]).forEach((t,i)=>rows.push([k,t.symbol,t.side||'',t.pnl.toFixed(2),i===0?dp.toFixed(2):'',i===0?(dd.emotion||''):'',i===0?(dd.setup||''):'',i===0?(dd.notes||''):'',(dd.tags||[]).join(';')]));
  });
  const csv=rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download=`tradedesk-${vy}-${String(vm+1).padStart(2,'0')}.csv`;a.click();
}
function importCSV(ev){
  const file=ev.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    const lines=e.target.result.split(/\r?\n/).filter(l=>l.trim());
    if(lines.length<2){alert('CSV appears empty.');return;}
    const pr=l=>{const out=[];let cur='',inQ=false;for(let i=0;i<l.length;i++){const c=l[i];if(c==='"'){if(inQ&&l[i+1]==='"'){cur+='"';i++;}else inQ=!inQ;}else if(c===','&&!inQ){out.push(cur.trim());cur='';}else cur+=c;}out.push(cur.trim());return out;};
    const headers=pr(lines[0]).map(h=>h.toLowerCase().replace(/[^a-z0-9]/g,''));
    const col=name=>{const al={date:['date','tradedate','closedate','exitdate','filldate','time','datetime'],symbol:['symbol','instrument','contract','ticker','name','market'],side:['side','direction','type','action','buysell'],pnl:['pnl','profit','netloss','netprofit','realizedpnl','realizedpl','gainloss','pl','profitloss','closedpl']};for(const a of(al[name]||[])){const i=headers.indexOf(a);if(i>=0)return i;}for(const a of(al[name]||[])){const i=headers.findIndex(h=>h.includes(a)||a.includes(h));if(i>=0)return i;}return -1;};
    const di=col('date'),si=col('symbol'),xi=col('side'),pi=col('pnl');
    if(di<0||pi<0){alert('Could not detect date/P&L columns.\n\nHeaders: '+headers.join(', '));ev.target.value='';return;}
    const data=D();if(!data.days)data.days={};
    let imported=0,skipped=0;
    lines.slice(1).forEach(line=>{
      if(!line.trim())return;
      const cols=pr(line);let rawDate=cols[di]||'',date='';
      let m=rawDate.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
      if(m)date=`${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
      if(!date){m=rawDate.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})/);if(m)date=`${m[3]}-${m[1].padStart(2,'0')}-${m[2].padStart(2,'0')}`;}
      if(!date||!date.match(/^\d{4}-\d{2}-\d{2}$/)){skipped++;return;}
      const pnlVal=parseFloat((cols[pi]||'').replace(/[$,\s]/g,''));
      if(isNaN(pnlVal)){skipped++;return;}
      const symbol=si>=0?(cols[si]||'').toUpperCase().trim()||'TRADE':'TRADE';
      let side='long';if(xi>=0){const s=(cols[xi]||'').toLowerCase();if(s.includes('short')||s.includes('sell')||s==='s')side='short';}
      if(!data.days[date])data.days[date]={trades:[],notes:'',emotion:'',setup:'',tags:[]};
      data.days[date].trades.push({id:Date.now()+Math.random(),symbol,pnl:pnlVal,side});
      imported++;
    });
    SD(data);renderCal();
    alert(`Import complete!\n✓ ${imported} trades imported${skipped>0?'\n⚠ '+skipped+' rows skipped':''}`);
  };
  reader.readAsText(file);ev.target.value='';
}

/* ═══════════════════════════════════
   KEYBOARD
═══════════════════════════════════ */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeTM();closeFM();}
  const to=document.getElementById('trade-ov');
  if(e.key==='Enter'&&to&&to.classList.contains('open'))addTE();
});
