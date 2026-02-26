import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = 'rgba(0, 229, 255, 0.4)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/SYSTEMPROBE_LOGO_LANDSCAPE.png" alt="SystemProbe Security" className="h-8" />
          <div className="flex items-center gap-8">
            <a href="/window" className="text-gray-300 hover:text-cyan-400">Features</a>
            <a href="#support" className="text-gray-300 hover:text-cyan-400">Support</a>
            <a href="#business" className="text-gray-300 hover:text-cyan-400">For Business</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Download Focused */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete System Protection
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Real-time threat detection and system monitoring. Protect your computer from malware, viruses, and security threats.
          </p>

          {/* Download Card */}
          <div className="max-w-2xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white mb-2">SystemProbe Security</h2>
                <p className="text-gray-400">Version 2026.02.27 • Windows 10/11</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-cyan-400">FREE</div>
                <p className="text-sm text-gray-400">For Personal Use</p>
              </div>
            </div>

            <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Free Installer
            </button>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Verified Safe
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Digitally Signed
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                5-Min Install
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-500 text-center">
              By downloading, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>

          {/* System Requirements */}
          <div className="text-left max-w-2xl mx-auto">
            <button className="text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-2 mx-auto">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
              Other operating systems and system requirements
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">50M+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Detection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">A+</div>
            <div className="text-sm text-gray-400">AV-TEST Rating</div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Comprehensive Protection</h2>
          <p className="text-gray-400">Everything you need to stay safe online</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-Time Protection</h3>
            <p className="text-gray-400 text-sm">Continuous monitoring and instant threat blocking to keep your system safe.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Malware Scanner</h3>
            <p className="text-gray-400 text-sm">Advanced scanning engine detects and removes viruses, trojans, and spyware.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Web Shield</h3>
            <p className="text-gray-400 text-sm">Protects you from malicious websites and phishing attacks while browsing.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ransomware Shield</h3>
            <p className="text-gray-400 text-sm">Protects your important files from ransomware encryption attacks.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Firewall Protection</h3>
            <p className="text-gray-400 text-sm">Advanced firewall monitors network traffic and blocks suspicious connections.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Protection</h3>
            <p className="text-gray-400 text-sm">Scans email attachments and blocks malicious content automatically.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/SYSTEMPROBE_LOGO_PNG.png" alt="SystemProbe" className="h-12 mb-3" />
              <p className="text-sm text-gray-400">Trusted security for millions worldwide.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-gray-400 hover:text-cyan-400">Features</a>
                <a href="#pricing" className="block text-gray-400 hover:text-cyan-400">Pricing</a>
                <a href="#download" className="block text-gray-400 hover:text-cyan-400">Download</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#help" className="block text-gray-400 hover:text-cyan-400">Help Center</a>
                <a href="#contact" className="block text-gray-400 hover:text-cyan-400">Contact Us</a>
                <a href="#report" className="block text-gray-400 hover:text-cyan-400">Report a Threat</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link to="/privacy" className="block text-gray-400 hover:text-cyan-400">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-400 hover:text-cyan-400">Terms of Service</Link>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex items-center justify-between text-sm text-gray-400">
            <p>© 2026 SystemProbe Security. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400">Twitter</a>
              <a href="#" className="hover:text-cyan-400">Facebook</a>
              <a href="#" className="hover:text-cyan-400">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App