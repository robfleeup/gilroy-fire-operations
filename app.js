
:root{
  --navy:#172131;--navy2:#202d42;--red:#b8322b;--red2:#d34a40;
  --gold:#d4af37;--cream:#f4f1ea;--white:#fff;--muted:#697586;
  --line:#dce2e8;--shadow:0 18px 50px rgba(23,33,49,.11);
}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--cream);color:var(--navy);font-family:Inter,Arial,Helvetica,sans-serif}
.topbar{height:100px;padding:10px max(24px,5vw);display:flex;justify-content:space-between;align-items:center;background:white;border-bottom:1px solid var(--line)}
.identity{display:flex;align-items:center;gap:18px}.identity img{width:88px;height:78px;object-fit:contain}.department{font-size:25px;font-weight:950}.subtitle{font-size:13px;color:var(--muted);margin-top:5px}
.clock-area{text-align:right}.clock-area #clock{font-size:28px;font-weight:950}.clock-area #date{font-size:12px;color:var(--muted);margin-top:4px}
.nav{height:54px;padding:0 max(24px,5vw);display:flex;gap:34px;align-items:center;background:var(--navy);position:sticky;top:0;z-index:30}.nav a{color:#e8edf3;text-decoration:none;font-size:14px;font-weight:850}.nav a:hover{color:white}
main{max-width:1540px;margin:auto;padding:28px max(24px,4.5vw) 70px}
.hero{height:590px;border-radius:24px;overflow:hidden;position:relative;box-shadow:var(--shadow);background:#111}.hero-slides,.hero-slide,.hero-overlay{position:absolute;inset:0}.hero-slide{background-size:cover;background-position:center;opacity:0;transition:opacity 1.8s ease,transform 12s linear;transform:scale(1.02)}.hero-slide.active{opacity:1;transform:scale(1.08)}.hero-overlay{background:linear-gradient(90deg,rgba(9,15,24,.88) 0%,rgba(9,15,24,.57) 48%,rgba(9,15,24,.3) 100%),linear-gradient(0deg,rgba(9,15,24,.55),transparent 50%)}
.hero-content{position:absolute;left:6%;top:50%;transform:translateY(-50%);z-index:2;color:white;max-width:720px}.hero-logo{width:160px;height:145px;object-fit:contain;background:rgba(255,255,255,.93);border-radius:22px;padding:8px;box-shadow:0 14px 35px rgba(0,0,0,.28);margin-bottom:22px}.eyebrow{font-size:12px;font-weight:950;letter-spacing:.17em;color:#f1c5c1}.eyebrow.red{color:var(--red)}.hero h1{font-size:58px;line-height:1;margin:11px 0 15px;letter-spacing:-.035em}.hero p{font-size:19px;color:#e0e7ef;margin:0}.hero-status{position:absolute;right:32px;bottom:28px;z-index:2;color:white;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);padding:13px 17px;border-radius:999px;font-weight:850;backdrop-filter:blur(12px)}.hero-status span{display:inline-block;width:9px;height:9px;background:#4be087;border-radius:50%;margin-right:8px;box-shadow:0 0 12px #4be087}
.executive-strip{display:grid;grid-template-columns:repeat(6,1fr);gap:13px;margin-top:-40px;position:relative;z-index:5;padding:0 20px}.executive-strip article{background:rgba(255,255,255,.94);border:1px solid rgba(255,255,255,.8);border-radius:17px;padding:20px;box-shadow:var(--shadow);backdrop-filter:blur(14px)}.executive-strip span,.panel-label{display:block;font-size:10px;font-weight:950;letter-spacing:.12em;color:var(--red);text-transform:uppercase}.executive-strip strong{display:block;font-size:31px;margin:8px 0 4px}.executive-strip small{color:var(--muted)}
.overview-grid{display:grid;grid-template-columns:1.1fr .9fr 1fr;gap:18px;margin-top:32px}.panel{background:white;border:1px solid var(--line);border-radius:18px;padding:25px;box-shadow:var(--shadow);min-height:270px}.weather-main{display:flex;align-items:center;gap:22px;margin-top:24px}.weather-main>strong{font-size:64px}.weather-main h2{margin:0 0 5px}.weather-main p{margin:0;color:var(--muted)}.weather-details{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:28px}.weather-details div{background:#f5f7f9;border-radius:11px;padding:13px}.weather-details span{display:block;font-size:10px;color:var(--muted);margin-bottom:7px}.clear-mark{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:#e7f7ed;color:#228c50;font-size:25px;font-weight:950;margin:24px 0 14px}.alert-item{border-left:4px solid var(--red);padding-left:14px;margin:16px 0}.alert-item b{display:block}.alert-item span{color:var(--muted);font-size:12px}.story-panel h2{margin-top:24px}.story-panel p{line-height:1.55}.muted{color:var(--muted)}
.section-block{margin-top:58px}.section-heading{display:flex;justify-content:space-between;align-items:end;margin-bottom:18px}.section-heading h2{font-size:34px;margin:5px 0 0}.period-tag{background:#eee8de;border-radius:999px;padding:8px 12px;color:#6a6257;font-size:12px}.resource-summary{display:grid;grid-template-columns:repeat(6,1fr);gap:13px}.resource-summary article{background:var(--navy);color:white;border-radius:15px;padding:20px}.resource-summary span{display:block;color:#c5cfda;font-size:11px;text-transform:uppercase;letter-spacing:.09em}.resource-summary strong{display:block;font-size:31px;margin-top:9px}
.unit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:15px}.unit-card{background:white;border:1px solid var(--line);border-radius:15px;padding:19px;box-shadow:var(--shadow)}.unit-head{display:flex;justify-content:space-between;align-items:center}.unit-head b{font-size:23px;color:var(--red)}.unit-head span{font-size:11px;color:var(--muted)}.unit-card>strong{display:block;font-size:34px;margin-top:20px}.unit-card small{color:var(--muted)}
.performance-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.photo-card{height:330px;border-radius:18px;background-size:cover;background-position:center;position:relative;overflow:hidden;box-shadow:var(--shadow)}.photo-card:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(9,15,24,.9),rgba(9,15,24,.05) 70%)}.photo-card div{position:absolute;left:24px;bottom:23px;z-index:2;color:white}.photo-card span,.photo-card small{display:block}.photo-card span{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#d8e0e8}.photo-card strong{display:block;font-size:44px;margin:5px 0}
.external{color:var(--red);font-weight:850;text-decoration:none}.pulse-frame{background:white;border-radius:18px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow)}iframe{width:100%;height:760px;border:0;display:block}
.about{display:flex;align-items:center;gap:25px;margin-top:55px;background:#ebe6dc;border-radius:18px;padding:27px}.about img{width:90px;height:82px;object-fit:contain}.about h2{margin:0 0 7px}.about p{margin:0;line-height:1.55;color:#4f5b6a}
footer{display:flex;justify-content:center;align-items:center;gap:15px;padding:30px;background:var(--navy);color:white}footer img{width:58px;height:52px;object-fit:contain}footer b,footer span{display:block}footer span{color:#bbc6d2;font-size:12px;margin-top:4px}
@media(max-width:1150px){.executive-strip{grid-template-columns:repeat(3,1fr)}.overview-grid{grid-template-columns:1fr 1fr}.story-panel{grid-column:1/-1}.resource-summary{grid-template-columns:repeat(3,1fr)}.unit-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:760px){.topbar{height:auto}.identity img{width:66px}.department{font-size:19px}.subtitle{font-size:10px}.clock-area{display:none}.nav{overflow:auto;gap:24px}.hero{height:560px}.hero-content{left:8%;right:8%}.hero-logo{width:120px;height:110px}.hero h1{font-size:42px}.executive-strip{grid-template-columns:1fr 1fr;margin-top:-25px;padding:0 8px}.overview-grid{grid-template-columns:1fr}.story-panel{grid-column:auto}.resource-summary{grid-template-columns:1fr 1fr}.unit-grid{grid-template-columns:1fr}.performance-grid{grid-template-columns:1fr}.section-heading{align-items:flex-start;flex-direction:column;gap:12px}iframe{height:680px}.about{align-items:flex-start}}

.unit-periods{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}
.unit-periods div{background:#f4f6f8;border-radius:10px;padding:10px;text-align:center}
.unit-periods strong{display:block;font-size:23px;color:var(--navy)}
.unit-periods small{display:block;margin-top:4px;color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.06em}
.period-tag.connected{background:#e7f7ed;color:#237d49}

.recent-panel{background:white;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:var(--shadow)}
.recent-row{display:grid;grid-template-columns:1.3fr 1.7fr 1fr 1fr 90px;gap:14px;padding:15px 18px;border-bottom:1px solid var(--line);align-items:center;font-size:13px}
.recent-row:last-child{border-bottom:0}
.recent-row b,.recent-row span{display:block}
.recent-row span{color:var(--muted);font-size:11px;margin-top:3px}
.status{background:#eef2f6;color:#526070;border-radius:999px;padding:6px 9px;text-align:center;font-size:11px;font-weight:850}
.status.active{background:#fce8e6;color:#a82e27}
@media(max-width:760px){
  .recent-row{grid-template-columns:1fr 1fr}
  .recent-row>div:nth-child(2),.recent-row>div:nth-child(3),.recent-row>div:nth-child(4),.recent-row>div:nth-child(5){grid-column:2}
}

.section-note{margin:-5px 0 18px;color:var(--muted);font-size:13px;line-height:1.5}
.snapshot-grid{display:grid;grid-template-columns:1fr 1fr .72fr;gap:16px}
.chart-card{background:white;border:1px solid var(--line);border-radius:18px;padding:23px;box-shadow:var(--shadow)}
.bar-list{margin-top:20px}
.bar-row{margin-bottom:13px}
.bar-label{display:flex;justify-content:space-between;gap:15px;font-size:12px;margin-bottom:6px}
.bar-label span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar-label b{color:var(--navy)}
.bar-track{height:8px;background:#edf0f3;border-radius:999px;overflow:hidden}
.bar-track i{display:block;height:100%;background:linear-gradient(90deg,var(--red),var(--red2));border-radius:999px}
.completion-number{font-size:64px;font-weight:950;margin-top:24px;letter-spacing:-.05em}
.chart-card h3{margin:0 0 8px}.chart-card p{color:var(--muted);line-height:1.5}
@media(max-width:1000px){.snapshot-grid{grid-template-columns:1fr 1fr}.snapshot-grid .chart-card:last-child{grid-column:1/-1}}
@media(max-width:700px){.snapshot-grid{grid-template-columns:1fr}.snapshot-grid .chart-card:last-child{grid-column:auto}}

.snapshot-grid{display:grid;grid-template-columns:1.45fr .8fr .95fr;gap:18px}
.chart-card{background:white;border:1px solid var(--line);border-radius:20px;padding:25px;box-shadow:var(--shadow);min-height:360px}
.chart-wide{min-width:0}
.svg-chart{width:100%;margin-top:18px}
.svg-chart svg{width:100%;height:auto;overflow:visible}
.grid-line{stroke:#e6eaf0;stroke-width:1}
.axis-text{fill:#7b8796;font-size:12px}
.value-text{fill:#172131;font-size:12px;font-weight:800}
.line-path{fill:none;stroke:#b8322b;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
.line-area{fill:rgba(184,50,43,.10)}
.line-dot{fill:#fff;stroke:#b8322b;stroke-width:4}
.donut-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;margin-top:24px}
.donut{--pct:70;width:205px;height:205px;border-radius:50%;background:conic-gradient(#b8322b calc(var(--pct)*1%),#e9edf2 0);display:grid;place-items:center;box-shadow:inset 0 0 0 1px rgba(23,33,49,.05)}
.donut:before{content:"";width:132px;height:132px;background:white;border-radius:50%;position:absolute}
.donut{position:relative}.donut-center{position:relative;z-index:1;text-align:center}.donut-center strong{display:block;font-size:43px;letter-spacing:-.05em}.donut-center span{display:block;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.12em;margin-top:2px}
.donut-legend{width:100%}.donut-legend div{display:grid;grid-template-columns:14px 1fr auto;gap:9px;align-items:center;padding:9px 0;border-bottom:1px solid var(--line);font-size:12px}.donut-legend div:last-child{border-bottom:0}.donut-legend i{width:10px;height:10px;border-radius:50%}.legend-ems{background:#b8322b}.legend-other{background:#dfe4ea}
.ranking-list{margin-top:22px}.rank-row{display:flex;align-items:center;gap:12px;margin-bottom:15px}.rank-num{width:27px;height:27px;border-radius:9px;background:#edf0f4;display:grid;place-items:center;font-weight:900;font-size:12px}.rank-main{flex:1}.rank-label{display:flex;justify-content:space-between;gap:12px;margin-bottom:7px;font-size:12px}.rank-label span{font-weight:750}.rank-track{height:9px;border-radius:999px;background:#edf0f3;overflow:hidden}.rank-track i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#172131,#b8322b)}
@media(max-width:1150px){.snapshot-grid{grid-template-columns:1fr 1fr}.chart-wide{grid-column:1/-1}}
@media(max-width:760px){.snapshot-grid{grid-template-columns:1fr}.chart-wide{grid-column:auto}.chart-card{min-height:auto}.value-text{font-size:10px}}

.highlight-metrics{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
.highlight-metrics div{min-width:145px;background:rgba(255,255,255,.11);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(10px);padding:13px 15px;border-radius:14px}
.highlight-metrics strong{display:block;font-size:24px;color:white}
.highlight-metrics span{display:block;font-size:11px;color:#d7e0e9;margin-top:4px;text-transform:uppercase;letter-spacing:.08em}
.active-panel{display:flex;flex-direction:column;justify-content:center}
.active-number{font-size:72px;font-weight:950;letter-spacing:-.06em;color:var(--red);line-height:1;margin:18px 0 4px}
.current-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}
.current-grid div{background:#f5f7f9;border-radius:12px;padding:14px}
.current-grid strong{display:block;font-size:27px}
.current-grid span{display:block;color:var(--muted);font-size:11px;margin-top:4px;text-transform:uppercase;letter-spacing:.07em}
@media(max-width:760px){
  .highlight-metrics{display:grid;grid-template-columns:1fr 1fr}
  .highlight-metrics div{min-width:0}
}

.data-error{color:#a82e27;font-size:12px;margin-top:8px}

.current-question{font-size:20px;font-weight:900;line-height:1.25;margin:16px 0 18px;color:var(--navy)}
.live-operations-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}
.live-op{background:#f3f6f9;border:1px solid #e5eaf0;border-radius:12px;padding:12px;min-height:78px}
.live-op.primary{background:#fff0ee;border-color:#efc4c0}
.live-op strong{display:block;font-size:27px;line-height:1;color:var(--navy)}
.live-op.primary strong{color:var(--red)}
.live-op span{display:block;margin-top:8px;font-size:9px;line-height:1.25;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;font-weight:800}
.operations-footer{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:10px}
.operations-footer div{border-top:1px solid var(--line);padding-top:10px}
.operations-footer span{display:block;font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.07em}
.operations-footer strong{display:block;font-size:15px;margin-top:4px}
.operations-note{font-size:11px;line-height:1.4;margin:11px 0 0}
@media(max-width:1200px){.live-operations-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:760px){.live-operations-grid{grid-template-columns:repeat(2,1fr)}}


/* 2025 Annual Report integration */
.annual-report-nav {
  color: #f2c14e !important;
  font-weight: 800;
}

.annual-report-feature {
  width: min(1180px, calc(100% - 32px));
  margin: 28px auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(320px, 1.05fr);
  background: #0b1f33;
  color: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(4, 19, 33, .22);
}

.annual-report-feature-image {
  min-height: 320px;
  background: #050e18;
}

.annual-report-feature-image img {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  display: block;
}

.annual-report-feature-content {
  padding: clamp(28px, 5vw, 62px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.annual-report-feature-content .eyebrow.gold {
  color: #d6a43b;
}

.annual-report-feature-content h2 {
  margin: 10px 0 16px;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.02;
  letter-spacing: -.035em;
}

.annual-report-feature-content p {
  color: #d9e2ea;
  font-size: 1.05rem;
  line-height: 1.65;
  max-width: 680px;
}

.annual-report-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.report-primary,
.report-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
}

.report-primary {
  background: #8f1d28;
  color: #fff;
}

.report-primary:hover { background: #aa2633; }

.report-secondary {
  border: 1px solid rgba(255,255,255,.35);
  color: #fff;
}

.report-secondary:hover { background: rgba(255,255,255,.08); }

@media (max-width: 820px) {
  .annual-report-feature { grid-template-columns: 1fr; }
  .annual-report-feature-image { min-height: 210px; }
  .annual-report-feature-image img { min-height: 210px; }
}
