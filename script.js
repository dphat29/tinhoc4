const R=[
['pho-bo','Phở bò','Món nước',['bánh phở','thịt bò','hành tây','gừng'],['bánh phở','thịt bò','hành tây','gừng','quế','hoa hồi'],'90','520','Không hải sản'],
['pho-ga','Phở gà','Món nước',['bánh phở','thịt gà','hành tây','gừng'],['bánh phở','thịt gà','hành tây','gừng','hành lá'],'75','460','Không hải sản'],
['bun-bo-hue','Bún bò Huế','Món nước',['bún','thịt bò','giò heo','sả'],['bún','thịt bò','giò heo','sả','ruốc','ớt'],'120','610','Không hải sản'],
['bun-cha','Bún chả','Món bún',['bún','thịt heo','cà rốt','đu đủ'],['bún','thịt heo','cà rốt','đu đủ','nước mắm'],'55','590','Không hải sản'],
['bun-thit-nuong','Bún thịt nướng','Món bún',['bún','thịt heo','rau sống','đậu phộng'],['bún','thịt heo','rau sống','đậu phộng','nước mắm'],'45','560','Không hải sản'],
['bun-rieu','Bún riêu','Món bún',['bún','cua','cà chua','đậu hũ'],['bún','cua','cà chua','đậu hũ','trứng','mắm tôm'],'60','530','Hải sản'],
['bun-ca','Bún cá','Món bún',['bún','cá','cà chua','rau thì là'],['bún','cá','cà chua','rau thì là'],'50','480','Hải sản'],
['bun-mam','Bún mắm','Món bún',['bún','cá','tôm','mực'],['bún','cá','tôm','mực','cà tím'],'60','620','Hải sản'],
['mi-quang','Mì Quảng','Món miền Trung',['mì quảng','tôm','thịt heo','đậu phộng'],['mì quảng','tôm','thịt heo','đậu phộng','trứng'],'55','590','Hải sản'],
['cao-lau','Cao lầu','Món miền Trung',['mì cao lầu','thịt heo','rau sống'],['mì cao lầu','thịt heo','rau sống','hoành thánh'],'70','570','Không hải sản'],
['hu-tieu-nam-vang','Hủ tiếu Nam Vang','Món nước',['hủ tiếu','thịt heo','tôm','trứng'],['hủ tiếu','thịt heo','tôm','trứng','gan'],'55','580','Hải sản'],
['banh-canh-cua','Bánh canh cua','Món nước',['bánh canh','cua','tôm'],['bánh canh','cua','tôm','trứng cút'],'50','540','Hải sản'],
['chao-ga','Cháo gà','Món cháo',['gạo','thịt gà','gừng'],['gạo','thịt gà','gừng','hành lá'],'55','390','Không hải sản'],
['chao-long','Cháo lòng','Món cháo',['gạo','lòng heo','huyết'],['gạo','lòng heo','huyết','gừng'],'75','470','Không hải sản'],
['com-tam-suon','Cơm tấm sườn','Cơm',['cơm tấm','sườn heo','trứng'],['cơm tấm','sườn heo','trứng','mỡ hành','nước mắm'],'55','720','Không hải sản'],
['com-ga-hoi-an','Cơm gà Hội An','Cơm',['cơm','thịt gà','hành tây'],['cơm','thịt gà','hành tây','rau răm'],'70','610','Không hải sản'],
['com-chien-duong-chau','Cơm chiên Dương Châu','Cơm',['cơm','trứng','tôm','xúc xích'],['cơm','trứng','tôm','xúc xích','cà rốt'],'30','640','Hải sản'],
['com-chien-trung','Cơm chiên trứng','Cơm',['cơm','trứng','hành lá'],['cơm','trứng','hành lá'],'20','480','Không hải sản'],
['thit-kho-trung','Thịt kho trứng','Món mặn',['thịt ba chỉ','trứng','nước dừa'],['thịt ba chỉ','trứng','nước dừa','nước mắm'],'70','680','Không hải sản'],
['ca-kho-to','Cá kho tộ','Món mặn',['cá','nước dừa','tiêu'],['cá','nước dừa','tiêu','nước mắm'],'55','520','Hải sản'],
['suon-xao-chua-ngot','Sườn xào chua ngọt','Món mặn',['sườn heo','cà chua','dứa'],['sườn heo','cà chua','dứa','đường'],'45','630','Không hải sản'],
['thit-rang-chay-canh','Thịt rang cháy cạnh','Món mặn',['thịt ba chỉ','hành tím'],['thịt ba chỉ','hành tím','nước mắm'],'30','610','Không hải sản'],
['ga-kho-gung','Gà kho gừng','Món mặn',['thịt gà','gừng'],['thịt gà','gừng','nước mắm'],'45','510','Không hải sản'],
['ga-xao-sa-ot','Gà xào sả ớt','Món mặn',['thịt gà','sả','ớt'],['thịt gà','sả','ớt'],'35','500','Không hải sản'],
['ga-nuong-mat-ong','Gà nướng mật ong','Món nướng',['thịt gà','mật ong'],['thịt gà','mật ong','tỏi'],'45','570','Không hải sản'],
['ga-hap-hanh','Gà hấp hành','Món hấp',['thịt gà','hành lá','gừng'],['thịt gà','hành lá','gừng'],'45','430','Không hải sản'],
['tom-rang-me','Tôm rang me','Hải sản',['tôm','me'],['tôm','me','đường','tỏi'],'30','450','Hải sản'],
['tom-rim-man-ngot','Tôm rim mặn ngọt','Hải sản',['tôm','nước mắm'],['tôm','nước mắm','đường','tỏi'],'25','430','Hải sản'],
['muc-xao-can-toi','Mực xào cần tỏi','Hải sản',['mực','cần tây','tỏi'],['mực','cần tây','tỏi'],'25','410','Hải sản'],
['canh-chua-ca','Canh chua cá','Canh',['cá','cà chua','dứa','đậu bắp'],['cá','cà chua','dứa','đậu bắp','me'],'35','290','Hải sản'],
['canh-bi-xanh-tom','Canh bí xanh nấu tôm','Canh',['bí xanh','tôm'],['bí xanh','tôm','hành lá'],'25','230','Hải sản'],
['canh-rau-ngot-thit-bam','Canh rau ngót thịt bằm','Canh',['rau ngót','thịt heo'],['rau ngót','thịt heo'],'20','220','Không hải sản'],
['canh-cai-thit-bam','Canh cải thịt bằm','Canh',['cải xanh','thịt heo'],['cải xanh','thịt heo'],'20','210','Không hải sản'],
['canh-kho-qua-nhoi-thit','Canh khổ qua nhồi thịt','Canh',['khổ qua','thịt heo'],['khổ qua','thịt heo','nấm mèo'],'40','280','Không hải sản'],
['canh-bi-do-thit-bam','Canh bí đỏ thịt bằm','Canh',['bí đỏ','thịt heo'],['bí đỏ','thịt heo'],'25','260','Không hải sản'],
['dau-hu-sot-ca','Đậu hũ sốt cà chua','Món chay',['đậu hũ','cà chua'],['đậu hũ','cà chua','hành lá'],'20','260','Chay'],
['dau-hu-chien-sa','Đậu hũ chiên sả','Món chay',['đậu hũ','sả'],['đậu hũ','sả','ớt'],'25','290','Chay'],
['rau-muong-xao-toi','Rau muống xào tỏi','Rau',['rau muống','tỏi'],['rau muống','tỏi'],'15','180','Chay'],
['bap-cai-xao-trung','Bắp cải xào trứng','Rau',['bắp cải','trứng'],['bắp cải','trứng','hành lá'],'20','260','Không hải sản'],
['trung-chien-thit-bam','Trứng chiên thịt bằm','Món trứng',['trứng','thịt heo'],['trứng','thịt heo','hành lá'],'15','390','Không hải sản'],
['trung-hap','Trứng hấp','Món trứng',['trứng','thịt heo'],['trứng','thịt heo','nấm'],'25','330','Không hải sản'],
['goi-cuon','Gỏi cuốn','Món cuốn',['bánh tráng','tôm','thịt heo','bún'],['bánh tráng','tôm','thịt heo','bún','rau sống'],'35','320','Hải sản'],
['cha-gio','Chả giò','Món chiên',['bánh tráng','thịt heo','cà rốt'],['bánh tráng','thịt heo','cà rốt','nấm mèo'],'45','510','Không hải sản'],
['banh-xeo','Bánh xèo','Bánh Việt',['bột bánh xèo','tôm','thịt heo','giá đỗ'],['bột bánh xèo','tôm','thịt heo','giá đỗ'],'35','560','Hải sản'],
['banh-khot','Bánh khọt','Bánh Việt',['bột gạo','tôm','nước cốt dừa'],['bột gạo','tôm','nước cốt dừa'],'35','520','Hải sản'],
['banh-cuon','Bánh cuốn','Bánh Việt',['bột gạo','thịt heo','nấm mèo'],['bột gạo','thịt heo','nấm mèo','hành phi'],'50','420','Không hải sản'],
['banh-beo','Bánh bèo','Bánh Việt',['bột gạo','tôm khô','hành lá'],['bột gạo','tôm khô','hành lá'],'45','360','Hải sản'],
['banh-duc-nong','Bánh đúc nóng','Bánh Việt',['bột gạo','thịt heo','nấm mèo'],['bột gạo','thịt heo','nấm mèo'],'40','430','Không hải sản'],
['banh-hoi-thit-nuong','Bánh hỏi thịt nướng','Món nướng',['bánh hỏi','thịt heo','rau sống'],['bánh hỏi','thịt heo','rau sống','nước mắm'],'45','540','Không hải sản'],
['goi-ngo-sen-tom-thit','Gỏi ngó sen tôm thịt','Gỏi',['ngó sen','tôm','thịt heo'],['ngó sen','tôm','thịt heo','cà rốt'],'30','360','Hải sản'],
['nom-ga-xe-phay','Nộm gà xé phay','Gỏi',['thịt gà','bắp cải','cà rốt'],['thịt gà','bắp cải','cà rốt','rau răm'],'30','340','Không hải sản'],
['bo-luc-lac','Bò lúc lắc','Món mặn',['thịt bò','hành tây','ớt chuông'],['thịt bò','hành tây','ớt chuông'],'30','520','Không hải sản'],
['bo-xao-rau-cai','Bò xào rau cải','Món mặn',['thịt bò','cải xanh','tỏi'],['thịt bò','cải xanh','tỏi'],'25','410','Không hải sản'],
['bo-kho','Bò kho','Món hầm',['thịt bò','cà rốt','sả'],['thịt bò','cà rốt','sả','quế'],'100','610','Không hải sản'],
['suon-nuong-sa','Sườn nướng sả','Món nướng',['sườn heo','sả'],['sườn heo','sả','mật ong'],'50','590','Không hải sản'],
['ca-chien-mam-xoai','Cá chiên mắm xoài','Hải sản',['cá','xoài xanh'],['cá','xoài xanh','nước mắm'],'35','500','Hải sản'],
['cha-ca-la-vong','Chả cá Lã Vọng','Hải sản',['cá','thì là','bún'],['cá','thì là','bún','đậu phộng'],'45','560','Hải sản'],
['com-hen','Cơm hến','Cơm',['cơm','hến','rau thơm'],['cơm','hến','rau thơm','đậu phộng'],'35','430','Hải sản'],
['banh-mi-thit','Bánh mì thịt','Bánh mì',['bánh mì','thịt heo','dưa leo','đồ chua'],['bánh mì','thịt heo','dưa leo','đồ chua'],'15','520','Không hải sản']
].map(x=>({id:x[0],name:x[1],cat:x[2],core:x[3],ings:x[4],time:+x[5],cal:+x[6],diet:x[7],query:x[1]+' Vietnamese food'}));
const ING=[...new Set(R.flatMap(r=>r.core))].sort((a,b)=>a.localeCompare(b,'vi'));let selected=new Set(),cat='Tất cả',favorites=new Set(JSON.parse(localStorage.getItem('bnv-favs')||'[]'));let favoriteView=false;let imageCache=JSON.parse(localStorage.getItem('bnv-images')||'{}');
const $=id=>document.getElementById(id), cats=["Tất cả",...new Set(R.map(r=>r.cat))];
function saveFav(){localStorage.setItem('bnv-favs',JSON.stringify([...favorites]));$('favCount').textContent=favorites.size}
function renderCats(){$('cats').innerHTML=cats.map(c=>`<button class="chip ${c===cat?'active':''}" data-cat="${c}">${c}</button>`).join('');document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{cat=b.dataset.cat;renderCats();renderIngredients();render()})}
function renderIngredients(){let q=$('search').value.toLowerCase();$('ingredients').innerHTML=ING.filter(i=>i.toLowerCase().includes(q)).map(i=>`<label class="ingredient ${selected.has(i)?'sel':''}"><input type="checkbox" ${selected.has(i)?'checked':''} data-i="${i}"><span>${i}</span></label>`).join('');document.querySelectorAll('.ingredient input').forEach(c=>c.onchange=()=>{c.checked?selected.add(c.dataset.i):selected.delete(c.dataset.i);renderIngredients();render()});$('selectedCount').textContent=selected.size}
function passDiet(r){let d=$('diet').value;if(d==='vegetarian')return r.diet==='Chay';if(d==='no-seafood')return !r.diet.includes('Hải sản');if(d==='no-spicy')return !r.ings.includes('ớt');if(d==='low-oil')return !['Món chiên','Món mặn'].includes(r.cat);if(d==='low-sugar')return !['Món mặn','Món nướng'].includes(r.cat);return true}
function score(r){return [...selected].filter(x=>r.core.includes(x)).length}
function matches(){let base=R.filter(r=>(cat==='Tất cả'||r.cat===cat)&&passDiet(r));return base.map(r=>({...r,score:score(r)})).sort((a,b)=>b.score-a.score)}
function render(){if(favoriteView){let show=R.filter(r=>favorites.has(r.id));$('resultTitle').textContent='Món yêu thích';$('resultMeta').textContent=` · ${show.length} món`;$('notice').innerHTML='';$('recipes').innerHTML=show.length?show.map(card).join(''):'<div class="noticebox"><b>Chưa có món yêu thích.</b><div>Hãy bấm ♡ trên món ăn bạn muốn lưu.</div></div>';show.forEach(loadImage);return}$('resultTitle').textContent='Gợi ý món ăn';let list=matches(), exact=selected.size?list.filter(r=>selected.size===r.core.filter(x=>selected.has(x)).length):list; if(selected.size) exact=list.filter(r=>[...selected].every(x=>r.core.includes(x))); let show=exact.length?exact:list.filter(r=>r.score>0);let sort=$('sort').value;if(sort==='time')show.sort((a,b)=>a.time-b.time);if(sort==='calories')show.sort((a,b)=>a.cal-b.cal);if(sort==='name')show.sort((a,b)=>a.name.localeCompare(b.name,'vi'));$('resultMeta').textContent=` · ${show.length} món`; if(selected.size>=2&&!exact.length){$('notice').innerHTML=`<div class="noticebox"><b>😥 Rất tiếc, không có món bao gồm đủ các nguyên liệu này.</b><div class="selectedchips">${[...selected].map(x=>`<span>${x}</span>`).join('')}</div><div style="margin-top:8px;color:#6e746d">Dưới đây là các món liên quan có chứa một hoặc nhiều nguyên liệu bạn chọn.</div></div>`}else $('notice').innerHTML='';$('recipes').innerHTML=show.map(card).join('');show.forEach(r=>loadImage(r));}
function card(r){let fav=favorites.has(r.id);return `<article class="card" data-id="${r.id}"><div class="photo"><img id="img-${r.id}" src="./images/loading.svg" alt="${r.name}"><span class="tag">${r.cat}</span><button class="fav" data-fav="${r.id}">${fav?'♥':'♡'}</button></div><div class="cardbody"><h3>${r.name}</h3><div class="meta"><span>⏱ ${r.time} phút</span><span>🔥 ~${r.cal} kcal</span></div>${selected.size?`<div class="match">${r.score}/${selected.size} nguyên liệu trùng</div>`:''}</div></article>`}
function localImage(r){return './images/'+r.id+'.png'}
function loadImage(r){const img=$('img-'+r.id);if(img)img.setAttribute('src',localImage(r))}
function openRecipe(id){let r=R.find(x=>x.id===id);if(!r)return;$('mName').textContent=r.name;$('mCat').textContent=r.cat;$('mImg').src=localImage(r);$('mStats').innerHTML=`<span>⏱ ${r.time} phút</span><span>🔥 ~${r.cal} kcal/khẩu phần</span><span>${r.diet}</span>`;$('mIng').innerHTML=r.ings.map(x=>`<li>${x}</li>`).join('');$('mSeason').innerHTML=['Nước mắm','Muối','Tiêu','Hành lá'].map(x=>`<li>${x}</li>`).join('');$('mSteps').innerHTML=[`Sơ chế và rửa sạch các nguyên liệu.`,`Ướp phần nguyên liệu chính với gia vị phù hợp khoảng 10–20 phút.`,`Nấu/chiên/xào theo kiểu chế biến của món đến khi chín.`,`Nêm lại vừa khẩu vị, trình bày và dùng nóng.`].map(x=>`<li>${x}</li>`).join('');$('mFav').textContent=favorites.has(r.id)?'♥':'♡';$('mFav').onclick=()=>{favorites.has(r.id)?favorites.delete(r.id):favorites.add(r.id);saveFav();$('mFav').textContent=favorites.has(r.id)?'♥':'♡';render()};$('mSource').innerHTML=`Ảnh món ăn được cung cấp sẵn trong thư mục images của website.`;$('modal').classList.remove('hidden')}
$('recipes').onclick=e=>{let f=e.target.closest('[data-fav]');if(f){e.stopPropagation();let id=f.dataset.fav;favorites.has(id)?favorites.delete(id):favorites.add(id);saveFav();render();return}let c=e.target.closest('.card');if(c)openRecipe(c.dataset.id)};$('close').onclick=()=>$('modal').classList.add('hidden');$('modal').querySelector('.backdrop').onclick=()=>$('modal').classList.add('hidden');$('search').oninput=()=>{favoriteView=false;renderIngredients();render()};$('clear').onclick=()=>{favoriteView=false;selected.clear();renderIngredients();render()};$('diet').onchange=()=>{favoriteView=false;render()};$('sort').onchange=()=>{favoriteView=false;render()};$('favBtn').onclick=()=>{favoriteView=!favoriteView;render()};$('qrBtn').onclick=()=>{let u=location.href;$('shareUrl').value=u;$('qrcode').innerHTML='';if(window.QRCode)new QRCode($('qrcode'),{text:u,width:210,height:210});$('qrModal').classList.remove('hidden')};$('qrClose').onclick=()=>$('qrModal').classList.add('hidden');$('qrModal').querySelector('.backdrop').onclick=()=>$('qrModal').classList.add('hidden');$('copyUrl').onclick=()=>navigator.clipboard?.writeText(location.href);saveFav();renderCats();renderIngredients();render();
