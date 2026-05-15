import { useState, useEffect, useRef } from "react";

const BASE = "https://api.aetheria.my.id";

const ENDPOINTS = [
  { name: "Anime Waifu",       path: "/api/anime/waifu",              desc: "Random anime waifu image",           example: "/api/anime/waifu" },
  { name: "AI Chat",           path: "/api/ai/chat?text=hello",        desc: "AI chatbot response",                example: "/api/ai/chat?text=hello" },
  { name: "TikTok Downloader", path: "/api/downloader/tiktok?url=",    desc: "Download TikTok tanpa watermark",    example: "/api/downloader/tiktok?url=https://tiktok.com" },
  { name: "Random Quote",      path: "/api/random/quote",              desc: "Kutipan inspiratif random",          example: "/api/random/quote" },
  { name: "Image Generate",    path: "/api/image/generate?prompt=cat", desc: "Generate gambar dari teks prompt",   example: "/api/image/generate?prompt=anime+girl" },
  { name: "Google Search",     path: "/api/search/google?q=aetheria",  desc: "Scrape hasil pencarian Google",      example: "/api/search/google?q=aetheria" },
];

const SYSTEM_PROMPT = `You are a mock REST API server for "Aetheria API Platform". 
When given an endpoint path, respond ONLY with a valid JSON object (no markdown, no explanation).

Rules per endpoint:
- /api/anime/waifu → return { status: true, creator: "Aetheria", endpoint: "/api/anime/waifu", runtime: "0.21s", result: { url: "https://i.waifu.pics/~tEBRsxI.jpg", character: "Rem", anime: "Re:Zero", tags: ["cute","moe","blue hair"] } }
- /api/ai/chat → extract the "text" param, reply naturally in "reply" field, return { status: true, creator: "Aetheria", endpoint: "/api/ai/chat", runtime: "0.44s", result: { query: "<the text param>", reply: "<intelligent reply to the query>" } }
- /api/downloader/tiktok → return { status: true, creator: "Aetheria", endpoint: "/api/downloader/tiktok", runtime: "1.12s", result: { title: "TikTok Video", author: "@user", duration: "00:30", downloads: { nowatermark: "https://dl.aetheria.my.id/video/abc123.mp4", audio: "https://dl.aetheria.my.id/audio/abc123.mp3" } } }
- /api/random/quote → return { status: true, creator: "Aetheria", endpoint: "/api/random/quote", runtime: "0.09s", result: { quote: "<an inspirational quote>", author: "<real author name>", category: "inspiration" } }
- /api/image/generate → extract "prompt", return { status: true, creator: "Aetheria", endpoint: "/api/image/generate", runtime: "2.31s", result: { prompt: "<prompt>", url: "https://image.pollinations.ai/prompt/<url-encoded-prompt>", width: 512, height: 512, model: "flux" } }
- /api/search/google → extract "q", return { status: true, creator: "Aetheria", endpoint: "/api/search/google", runtime: "0.67s", result: { query: "<q>", total: 3, results: [ { title: "...", url: "https://example.com", snippet: "..." }, { title: "...", url: "https://example2.com", snippet: "..." } ] } }
- unknown endpoint → return { status: false, creator: "Aetheria", error: "Endpoint not found", code: 404 }

Always return ONLY valid JSON. No markdown fences. Be creative with content but keep structure exact.`;

export default function App() {
  const [input, setInput] = useState(`${BASE}/api/anime/waifu`);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [logs, setLogs] = useState([
    "$ system initialized → Aetheria API Platform v3.0",
    "$ all endpoints online → ready",
  ]);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(null);
  const [counter, setCounter] = useState({ req: 0, dev: 0 });
  const termRef = useRef(null);
  const timerRef = useRef(null);

  // Counter animation
  useEffect(() => {
    let req = 0, dev = 0;
    const t = setInterval(() => {
      req = Math.min(req + 21482, 1284902);
      dev = Math.min(dev + 804, 48231);
      setCounter({ req, dev });
      if (req >= 1284902) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, []);

  // Auto logs
  useEffect(() => {
    const pool = [
      "GET /api/ai/chat → 200 OK",
      "GET /api/anime/waifu → 200 OK",
      "GET /api/downloader/tiktok → 200 OK",
      "GET /api/search/google → 200 OK",
      "GET /api/random/quote → 200 OK",
      "GET /api/image/generate → 200 OK",
    ];
    timerRef.current = setInterval(() => {
      addLog(pool[Math.floor(Math.random() * pool.length)]);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [logs]);

  function addLog(msg) {
    const now = new Date();
    const ts = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => String(n).padStart(2, "0")).join(":");
    setLogs(prev => [...prev.slice(-49), `[${ts}] $ ${msg}`]);
  }

  async function runApi(url) {
    const target = url || input.trim();
    if (!target) return;

    setLoading(true);
    setResponse(null);
    setStatus(null);
    addLog(`GET ${target}`);

    // Extract just the path from full URL
    let path = target;
    try { path = new URL(target).pathname + new URL(target).search; } catch {}

    const start = Date.now();
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: `Endpoint: ${path}` }],
        }),
      });

      const ai = await res.json();
      const text = ai.content?.[0]?.text || "{}";
      const elapsed = Date.now() - start;

      let data;
      try { data = JSON.parse(text); } catch { data = { raw: text }; }

      setResponse(data);
      setStatus({ code: data.status !== false ? 200 : 404, ms: elapsed });
      addLog(`✓ ${data.status !== false ? "200 OK" : "404 Not Found"} — ${elapsed}ms`);
    } catch (err) {
      setStatus({ code: 500, ms: Date.now() - start });
      setResponse({ error: err.message });
      addLog(`✗ error → ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function copyUrl(url) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  const filtered = ENDPOINTS.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  // Find image URL in response
  function findImage(obj, depth = 0) {
    if (!obj || depth > 4) return null;
    if (typeof obj === "string" && /\.(jpg|jpeg|png|gif|webp)/i.test(obj)) return obj;
    if (typeof obj === "string" && obj.startsWith("http") && obj.includes("image")) return obj;
    if (Array.isArray(obj)) { for (const i of obj) { const r = findImage(i, depth+1); if (r) return r; } }
    else if (typeof obj === "object") {
      for (const k of ["url","image","img","src","picture"]) {
        if (obj[k]) { const r = findImage(obj[k], depth+1); if (r) return r; }
      }
      for (const v of Object.values(obj)) { const r = findImage(v, depth+1); if (r) return r; }
    }
    return null;
  }

  const imageUrl = response ? findImage(response) : null;

  return (
    <div style={{
      minHeight: "100vh", background: "#04060f", color: "white",
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      position: "relative", overflowX: "hidden",
    }}>
      {/* BG */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: "linear-gradient(rgba(0,229,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.018) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      <div style={{ position:"fixed", width:600, height:600, borderRadius:"50%", background:"#2a0f7a", filter:"blur(140px)", opacity:.1, top:-200, left:-200, zIndex:0, pointerEvents:"none" }} />
      <div style={{ position:"fixed", width:500, height:500, borderRadius:"50%", background:"#003f5c", filter:"blur(130px)", opacity:.08, bottom:-150, right:-150, zIndex:0, pointerEvents:"none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* NAV */}
        <nav style={{
          display:"flex", justifyContent:"space-between", alignItems:"center",
          padding:"14px 24px", borderBottom:"1px solid rgba(255,255,255,.06)",
          backdropFilter:"blur(20px)", background:"rgba(4,6,15,.8)",
          position:"sticky", top:0, zIndex:99,
        }}>
          <div style={{
            fontFamily:"monospace", fontSize:18, fontWeight:700,
            background:"linear-gradient(90deg,#00e5ff,#8b5cf6)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>AETHERIA</div>
          <div style={{ display:"flex", gap:8 }}>
            {["Endpoints","Tester","Logs"].map(l => (
              <span key={l} style={{ color:"#5a6480", fontSize:13, fontWeight:600, cursor:"pointer" }}>{l}</span>
            ))}
          </div>
          <div style={{
            padding:"8px 16px", border:"1px solid rgba(0,229,255,.25)",
            borderRadius:10, background:"rgba(0,229,255,.05)",
            color:"#00e5ff", fontSize:11, fontFamily:"monospace", cursor:"pointer",
          }}>DASHBOARD</div>
        </nav>

        {/* HERO */}
        <div style={{ textAlign:"center", padding:"80px 24px 48px" }}>
          <div style={{
            display:"inline-block", padding:"6px 16px", borderRadius:999,
            border:"1px solid rgba(0,229,255,.2)", background:"rgba(0,229,255,.05)",
            fontSize:11, color:"#00e5ff", fontFamily:"monospace", letterSpacing:2, marginBottom:24,
          }}>⚡ PREMIUM REST API PLATFORM</div>

          <h1 style={{ fontSize:"clamp(36px,6vw,68px)", fontWeight:800, lineHeight:1.05, marginBottom:16 }}>
            Build The Future With<br />
            <span style={{
              background:"linear-gradient(90deg,#00e5ff,#a78bfa,#00e5ff)",
              backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            }}>Aetheria API</span>
          </h1>

          <p style={{ color:"#5a6480", fontSize:15, marginBottom:36 }}>
            Modern REST API ecosystem — powered by AI, no CORS issues.
          </p>

          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => document.getElementById('endpoints').scrollIntoView({behavior:'smooth'})}
              style={{ padding:"13px 24px", borderRadius:12, border:"none", cursor:"pointer",
                background:"linear-gradient(135deg,#00e5ff,#7c3aed)", color:"white", fontWeight:700, fontSize:14 }}>
              Explore Endpoints
            </button>
            <button onClick={() => document.getElementById('tester').scrollIntoView({behavior:'smooth'})}
              style={{ padding:"13px 24px", borderRadius:12, border:"1px solid rgba(255,255,255,.08)",
                cursor:"pointer", background:"rgba(255,255,255,.03)", color:"white", fontWeight:700, fontSize:14 }}>
              Try Live Tester
            </button>
          </div>
        </div>

        {/* STATS */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:16, padding:"0 24px 64px" }}>
          {[
            { val: counter.req.toLocaleString() + "+", label: "Total API Requests" },
            { val: counter.dev.toLocaleString() + "+", label: "Active Developers" },
            { val: "99.99%", label: "Uptime SLA" },
            { val: "120+", label: "Available Endpoints" },
          ].map(s => (
            <div key={s.label} style={{
              padding:"24px 20px", borderRadius:18,
              background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)",
            }}>
              <div style={{ fontSize:34, fontWeight:800, marginBottom:6, color:"white" }}>{s.val}</div>
              <div style={{ color:"#5a6480", fontSize:12, fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ENDPOINTS */}
        <div id="endpoints" style={{ padding:"0 24px 64px" }}>
          <div style={{ color:"#00e5ff", fontFamily:"monospace", fontSize:11, letterSpacing:3, marginBottom:10 }}>// ENDPOINTS</div>
          <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:800, marginBottom:8 }}>Premium API Endpoints</h2>
          <p style={{ color:"#5a6480", fontSize:14, marginBottom:32 }}>Real responses powered by AI — hit Execute and see live results.</p>

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search endpoints..."
            style={{
              width:"100%", padding:"14px 18px", marginBottom:28,
              background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)",
              borderRadius:14, color:"white", fontSize:14, outline:"none",
            }}
          />

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
            {filtered.map(ep => (
              <div key={ep.name} style={{
                padding:"20px", borderRadius:18,
                background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)",
                transition:"border-color .2s",
              }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                  <span style={{
                    padding:"4px 10px", borderRadius:999,
                    background:"rgba(0,255,170,.08)", color:"#00ffaa",
                    fontSize:10, fontFamily:"monospace", fontWeight:700,
                  }}>GET</span>
                  <span style={{ color:"#00ffaa", fontSize:10, fontFamily:"monospace" }}>● ONLINE</span>
                </div>
                <div style={{ fontWeight:700, fontSize:16, marginBottom:6 }}>{ep.name}</div>
                <div style={{ color:"#5a6480", fontSize:12, marginBottom:14, lineHeight:1.5 }}>{ep.desc}</div>
                <div style={{
                  background:"rgba(0,0,0,.4)", border:"1px solid rgba(255,255,255,.06)",
                  padding:"10px 12px", borderRadius:10,
                  fontFamily:"monospace", fontSize:11, color:"#00e5ff", marginBottom:14,
                  wordBreak:"break-all",
                }}>{ep.path}</div>
                <div style={{ display:"flex", gap:8 }}>
                  <button onClick={() => copyUrl(BASE + ep.example)}
                    style={{
                      flex:1, padding:"10px", borderRadius:10, border:"none", cursor:"pointer",
                      background:"linear-gradient(135deg,#00e5ff,#7c3aed)", color:"white",
                      fontSize:12, fontWeight:700,
                    }}>
                    {copied === BASE + ep.example ? "✓ Copied!" : "Copy URL"}
                  </button>
                  <button onClick={() => { setInput(BASE + ep.example); document.getElementById('tester').scrollIntoView({behavior:'smooth'}); setTimeout(() => runApi(BASE + ep.example), 400); }}
                    style={{
                      flex:1, padding:"10px", borderRadius:10, cursor:"pointer",
                      background:"rgba(0,229,255,.06)", color:"#00e5ff",
                      border:"1px solid rgba(0,229,255,.15)", fontSize:12, fontWeight:700,
                    }}>
                    Try →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TESTER */}
        <div id="tester" style={{ padding:"0 24px 64px" }}>
          <div style={{ color:"#00e5ff", fontFamily:"monospace", fontSize:11, letterSpacing:3, marginBottom:10 }}>// LIVE TESTER</div>
          <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:800, marginBottom:24 }}>API Tester</h2>

          <div style={{ display:"flex", gap:10, marginBottom:18, flexWrap:"wrap" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && runApi()}
              style={{
                flex:1, minWidth:200, padding:"14px 16px",
                background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)",
                borderRadius:12, color:"white", fontFamily:"monospace", fontSize:12, outline:"none",
              }}
            />
            <button onClick={() => runApi()} disabled={loading}
              style={{
                padding:"14px 24px", borderRadius:12, border:"none", cursor:"pointer",
                background:"linear-gradient(135deg,#00e5ff,#7c3aed)",
                color:"white", fontWeight:700, fontSize:14, opacity: loading ? .6 : 1,
                whiteSpace:"nowrap",
              }}>
              {loading ? "⏳ Loading..." : "⚡ Execute"}
            </button>
          </div>

          <div style={{ border:"1px solid rgba(255,255,255,.07)", borderRadius:18, overflow:"hidden" }}>
            <div style={{
              padding:"12px 18px", borderBottom:"1px solid rgba(255,255,255,.07)",
              background:"rgba(0,0,0,.2)", display:"flex", justifyContent:"space-between", alignItems:"center",
            }}>
              <span style={{ fontFamily:"monospace", fontSize:11, color:"#5a6480" }}>RESPONSE</span>
              {status && (
                <span style={{
                  fontFamily:"monospace", fontSize:11,
                  color: status.code === 200 ? "#00ffaa" : "#f87171",
                }}>
                  {status.code} {status.code === 200 ? "OK" : "ERROR"} — {status.ms}ms
                </span>
              )}
            </div>

            <div style={{ padding:"20px", minHeight:200, position:"relative" }}>
              {loading && (
                <div style={{
                  position:"absolute", inset:0, background:"rgba(4,6,15,.7)",
                  display:"flex", alignItems:"center", justifyContent:"center", borderRadius:18,
                }}>
                  <div style={{
                    width:28, height:28, border:"2px solid rgba(255,255,255,.1)",
                    borderTopColor:"#00e5ff", borderRadius:"50%",
                    animation:"spin 0.7s linear infinite",
                  }} />
                </div>
              )}

              {!response && !loading && (
                <pre style={{ fontFamily:"monospace", fontSize:12, color:"#5a6480" }}>
                  // Hit Execute to call the API...
                </pre>
              )}

              {response && (
                <>
                  <pre style={{
                    fontFamily:"monospace", fontSize:12, color:"#00ffaa",
                    whiteSpace:"pre-wrap", wordBreak:"break-all", lineHeight:1.8,
                  }}>
                    {JSON.stringify(response, null, 2)}
                  </pre>

                  {imageUrl && (
                    <div style={{ marginTop:16 }}>
                      <div style={{ fontFamily:"monospace", fontSize:10, color:"#5a6480", marginBottom:10 }}>// IMAGE RESULT</div>
                      <img
                        src={imageUrl}
                        alt="API result"
                        style={{ maxWidth:"100%", maxHeight:300, borderRadius:12, border:"1px solid rgba(255,255,255,.08)" }}
                        onError={e => e.target.style.display='none'}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* TERMINAL */}
        <div style={{ padding:"0 24px 64px" }}>
          <div style={{ border:"1px solid rgba(255,255,255,.07)", borderRadius:18, overflow:"hidden" }}>
            <div style={{
              padding:"12px 18px", background:"rgba(0,0,0,.3)",
              borderBottom:"1px solid rgba(255,255,255,.07)",
              display:"flex", alignItems:"center", gap:6,
            }}>
              {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />
              ))}
              <span style={{ fontFamily:"monospace", fontSize:10, color:"#5a6480", marginLeft:8 }}>
                aetheria-api — live request log
              </span>
            </div>
            <div ref={termRef} style={{
              padding:"18px 20px", minHeight:160, maxHeight:200,
              overflowY:"auto", background:"rgba(0,0,0,.15)",
            }}>
              {logs.map((l, i) => (
                <div key={i} style={{ fontFamily:"monospace", fontSize:11, color:"#00ffaa", marginBottom:5 }}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{
          padding:"48px 24px", textAlign:"center",
          borderTop:"1px solid rgba(255,255,255,.06)",
        }}>
          <div style={{
            fontSize:28, fontWeight:800, fontFamily:"monospace",
            background:"linear-gradient(90deg,#00e5ff,#8b5cf6)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:10,
          }}>AETHERIA</div>
          <p style={{ color:"#5a6480", fontSize:13, marginBottom:24 }}>Premium Cyber Futuristic REST API Platform</p>
          <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="https://t.me/aetheriashopp" target="_blank" style={{
              padding:"10px 20px", borderRadius:10, textDecoration:"none",
              background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)",
              color:"#c8d0e8", fontSize:13,
            }}>✈ Telegram</a>
            <a href="https://youtube.com/@aetheriaoffc" target="_blank" style={{
              padding:"10px 20px", borderRadius:10, textDecoration:"none",
              background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)",
              color:"#c8d0e8", fontSize:13,
            }}>▶ YouTube</a>
          </div>
        </footer>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #04060f; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,229,255,.2); border-radius: 4px; }
        input::placeholder { color: #5a6480; }
        input { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
