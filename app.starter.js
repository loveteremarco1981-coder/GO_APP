
(function(){
  async function load(){
    try{
      const url = window.CONFIG && window.CONFIG.DOGET_URL; if(!url) return;
      const model = await fetch(url,{cache:'no-store'}).then(r=>r.json());
      const b = document.getElementById('stateBanner'); if(b) b.textContent = model.state || '—';
      const w = model.weather||{}; const we=document.getElementById('weatherEmoji'), wt=document.getElementById('weatherTemp'), wp=document.getElementById('weatherProvider'); if(we) we.textContent=w.iconEmoji||''; if(wt) wt.textContent=(w.tempC!=null?(w.tempC+'°C'):'—'); if(wp) wp.textContent=w.provider||'—';
      const ppl=model.people||[]; const online=ppl.filter(p=>p.onlineSmart).length; const po=document.getElementById('peopleOnline'); const hs=document.getElementById('houseStatus'); if(po) po.textContent=online; if(hs) hs.textContent=model.state||'—';
      const ts=document.getElementById('ts'); if(ts) ts.textContent='Aggiornamento: '+new Date().toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'});
    }catch(e){ console.error('[starter]',e); }
  }
  document.addEventListener('DOMContentLoaded', load);
})();
