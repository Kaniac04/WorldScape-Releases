
// Your PUBLIC releases repository, as "owner/repo".
var REPO = "Kaniac04/WorldScape-Releases";

(function () {
  var stubs = {};
  var $ = function (id) { return document.getElementById(id) || (stubs[id] = stubs[id] || document.createElement("span")); };
  var root = document.documentElement;

  /* Appearance: follows the system, and the button overrides it (remembered on this device). */
  try { var saved = localStorage.getItem("ws-theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  $("theme").addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") ? root.getAttribute("data-theme") === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("ws-theme", next); } catch (e) {}
  });

  $("copy").addEventListener("click", function () {
    var b = this, t = $("xcmd").textContent;
    var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, function () { b.textContent = "Select and copy"; });
    else b.textContent = "Select and copy";
  });

  var releasesPage = "https://github.com/" + REPO + "/releases/latest";
  var names = { windows: "Windows", macos: "macOS", linux: "Linux" };
  var icons = {
    windows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="1"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1"/><rect x="13" y="13" width="7.5" height="7.5" rx="1"/></svg>',
    macos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.6"/><path d="M2.5 19.5h19"/></svg>',
    linux: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7.5 10 3 2.5-3 2.5"/><path d="M13 15h3.5"/></svg>'
  };
  var dlIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/></svg>';

  function detectOS() {
    var p = ((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "").toLowerCase();
    var ua = (navigator.userAgent || "").toLowerCase();
    if (/android|iphone|ipad|ipod/.test(ua)) return "mobile";
    if (p.indexOf("win") === 0 || ua.indexOf("windows") > -1) return "windows";
    if (p.indexOf("mac") === 0 || ua.indexOf("mac os") > -1) return "macos";
    if (p.indexOf("linux") > -1 || ua.indexOf("linux") > -1) return "linux";
    return "";
  }

  // Maps one release file to a platform. Signatures and update bundles are skipped.
  function classify(name) {
    var n = name.toLowerCase();
    if (/\.sig$|\.tar\.gz$|\.zip$|\.json$|\.blockmap$/.test(n)) return null;
    var arm = /arm64|aarch64/.test(n);
    if (/\.dmg$/.test(n)) return { os: "macos", rank: 0, label: "Disk image (.dmg)", short: ".dmg", tag: /universal/.test(n) ? "Apple silicon and Intel" : (arm ? "Apple silicon" : "Intel") };
    if (/setup\.exe$/.test(n)) return { os: "windows", rank: 0, label: "Installer (.exe)", short: ".exe installer", tag: arm ? "ARM" : "64-bit" };
    if (/\.msi$/.test(n)) return { os: "windows", rank: 1, label: "MSI package", tag: arm ? "ARM" : "64-bit" };
    if (/\.appimage$/.test(n)) return { os: "linux", rank: 0, label: "AppImage", short: "AppImage", tag: "Runs on most distributions" };
    if (/\.deb$/.test(n)) return { os: "linux", rank: 1, label: "Debian package (.deb)", tag: "Debian and Ubuntu" };
    if (/\.rpm$/.test(n)) return { os: "linux", rank: 2, label: "RPM package (.rpm)", tag: "Fedora and openSUSE" };
    return null;
  }

  function size(b) { return b > 1048576 ? (b / 1048576).toFixed(0) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB"; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  function fail() {
    $("meta").textContent = "";
    var box = $("list"); box.innerHTML = "";
    var s = el("div", "dl-state");
    s.appendChild(document.createTextNode("We couldn’t load the file list just now. "));
    var a = el("a", null, "Open the downloads page on GitHub"); a.href = releasesPage;
    s.appendChild(a); s.appendChild(document.createTextNode("."));
    box.appendChild(s);
    $("main").href = releasesPage;
    $("main-label").textContent = "Go to downloads";
  }

  function render(rel) {
    var yours = detectOS();
    var groups = { windows: [], macos: [], linux: [] };
    (rel.assets || []).forEach(function (a) { var c = classify(a.name); if (c) groups[c.os].push({ a: a, c: c }); });
    var version = (rel.tag_name || "").replace(/^v/i, "");
    var date = rel.published_at ? new Date(rel.published_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) : "";

    var box = $("list"); box.innerHTML = "";
    var order = ["windows", "macos", "linux"];
    if (groups[yours] && groups[yours].length) order = [yours].concat(order.filter(function (o) { return o !== yours; }));

    order.forEach(function (os) {
      var items = groups[os].sort(function (x, y) { return x.c.rank - y.c.rank; });
      var card = el("article", "os" + (os === yours ? " yours" : ""));
      var head = el("div", "os-head");
      var ic = el("span", "ic"); ic.innerHTML = icons[os];
      head.appendChild(ic); head.appendChild(el("h3", null, names[os]));
      if (os === yours) head.appendChild(el("span", "badge", "This computer"));
      card.appendChild(head);

      if (!items.length) { card.appendChild(el("p", "none", "No installer in this release.")); box.appendChild(card); return; }

      var first = items[0];
      card.appendChild(el("p", "sub", first.c.tag));
      var btn = el("a", "btn " + (os === yours ? "btn-primary" : "btn-ghost"));
      btn.href = first.a.browser_download_url;
      btn.setAttribute("download", "");
      btn.innerHTML = dlIcon;
      var lab = el("span", null, "Download " + (first.c.short || first.c.label)); lab.style.marginRight = "auto"; lab.style.marginLeft = "2px";
      btn.appendChild(lab); btn.appendChild(el("span", "sz", size(first.a.size)));
      card.appendChild(btn);

      if (items.length > 1) {
        card.appendChild(el("p", "alt-h", "Other formats"));
        var ul = el("ul", "alt");
        items.slice(1).forEach(function (it) {
          var li = el("li"), a = el("a", null, it.c.label); a.href = it.a.browser_download_url;
          li.appendChild(a); li.appendChild(el("span", "tag", it.c.tag)); li.appendChild(el("span", "sz", size(it.a.size)));
          ul.appendChild(li);
        });
        card.appendChild(ul);
      }
      box.appendChild(card);
    });

    var best = groups[yours] && groups[yours][0];
    if (best) {
      $("main").href = best.a.browser_download_url;
      $("main-label").textContent = "Download for " + names[yours];
    } else {
      $("main-label").textContent = yours === "mobile" ? "Worldscape is for computers" : "Choose your download";
    }
    $("meta").innerHTML = "";
    var v = el("b", null, "Version " + version);
    $("meta").appendChild(v);
    $("meta").appendChild(document.createTextNode((date ? ", released " + date : "") + ". Free to use." + (yours === "mobile" ? " Open this page on your computer to install it." : "")));
    $("foot-version").textContent = "Version " + version;
    $("foot-notes").href = rel.html_url || releasesPage;
  }

  // GitHub allows 60 anonymous requests an hour per visitor, so remember the answer for 10 minutes.
  var KEY = "ws-release:" + REPO;
  try {
    var c = JSON.parse(sessionStorage.getItem(KEY) || "null");
    if (c && Date.now() - c.t < 600000) { render(c.r); return; }
  } catch (e) {}

  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (rel) {
      try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), r: { tag_name: rel.tag_name, published_at: rel.published_at, html_url: rel.html_url, assets: (rel.assets || []).map(function (a) { return { name: a.name, size: a.size, browser_download_url: a.browser_download_url }; }) } })); } catch (e) {}
      render(rel);
    })
    .catch(fail);
})();


(function(){
  var toc=document.querySelectorAll(".qs-toc a"),chaps=document.querySelectorAll(".qs-chap");
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
      toc.forEach(function(a){var on=a.getAttribute("href")==="#"+e.target.id;a.classList.toggle("on",on);
        if(on&&getComputedStyle(a.parentNode.parentNode).display==="flex")a.parentNode.parentNode.scrollTo({left:a.offsetLeft-20,behavior:"smooth"});});});},{rootMargin:"-30% 0px -60% 0px"});
    chaps.forEach(function(c){io.observe(c);});
  }
  document.querySelectorAll(".car").forEach(function(car){
    var track=car.querySelector(".car-track"),slides=track.children,n=slides.length,dots=car.querySelector(".car-dots"),
        count=car.querySelector(".car-count"),prev=car.querySelector('[data-d="-1"]'),next=car.querySelector('[data-d="1"]'),cur=0;
    for(var i=0;i<n;i++){(function(i){var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Go to screenshot "+(i+1));
      b.addEventListener("click",function(){go(i);});dots.appendChild(b);})(i);}
    function go(i){i=Math.max(0,Math.min(n-1,i));track.scrollTo({left:slides[i].offsetLeft-track.offsetLeft-2,behavior:"smooth"});}
    function sync(){var w=slides[0].offsetWidth+16;cur=Math.max(0,Math.min(n-1,Math.round(track.scrollLeft/w)));
      Array.prototype.forEach.call(dots.children,function(d,i){if(i===cur)d.setAttribute("aria-current","true");else d.removeAttribute("aria-current");});
      count.textContent=(cur+1)+" / "+n;prev.disabled=cur===0;next.disabled=cur===n-1;}
    prev.addEventListener("click",function(){go(cur-1);});next.addEventListener("click",function(){go(cur+1);});
    track.addEventListener("scroll",function(){window.requestAnimationFrame(sync);},{passive:true});
    car.addEventListener("keydown",function(e){if(e.key==="ArrowLeft"){e.preventDefault();go(cur-1);}else if(e.key==="ArrowRight"){e.preventDefault();go(cur+1);}});
    window.addEventListener("resize",sync);sync();
  });
})();
