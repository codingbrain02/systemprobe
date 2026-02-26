import { useEffect, useRef } from 'react'

function PrivacyPolicy() {
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

    for (let i = 0; i < 30; i++) {
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
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <img src="/SYSTEMPROBE_LOGO_LANDSCAPE.png" alt="SystemProbe Security" className="h-8" />
          </a>
          <a href="/" className="text-gray-300 hover:text-cyan-400">Back to Home</a>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: February 27, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p>
              SystemProbe Security ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our software and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account registration details (name, email address)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Support communications and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>System information (OS version, hardware specifications)</li>
              <li>Threat detection data (malware signatures, file hashes)</li>
              <li>Software usage statistics and crash reports</li>
              <li>IP address and general location data</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Security Scan Data</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>File checksums and metadata</li>
              <li>Registry information</li>
              <li>Network traffic patterns</li>
              <li>Quarantined threat information</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and maintain our security services</li>
              <li>Detect, prevent, and respond to security threats</li>
              <li>Improve our threat detection algorithms</li>
              <li>Send important security updates and notifications</li>
              <li>Provide customer support</li>
              <li>Process payments and manage subscriptions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share information with:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                <p>Third-party companies that help us provide our services (cloud hosting, payment processing, analytics)</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Threat Intelligence Networks</h3>
                <p>Anonymous threat data shared with security research communities to improve global cybersecurity</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                <p>When required by law, court order, or government regulation</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of assets</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="mb-4">We implement industry-standard security measures including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication protocols</li>
              <li>SOC 2 Type II compliance</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account data: Retained while your account is active</li>
              <li>Threat data: Anonymized and retained for security research</li>
              <li>Payment records: Retained as required by law (typically 7 years)</li>
              <li>Support communications: Retained for 3 years</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
              <li>Object to certain data processing activities</li>
            </ul>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">GDPR Rights (EU Users)</h3>
                <p>If you're in the European Union, you have additional rights under GDPR including data portability and the right to lodge complaints with supervisory authorities.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">CCPA Rights (California Users)</h3>
                <p>California residents have rights under the California Consumer Privacy Act including the right to know what personal information is collected and to opt-out of sale (though we don't sell data).</p>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p>Our services are not intended for users under 13 years of age. We do not knowingly collect information from children under 13.</p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
            <p className="mb-4">We use cookies and similar technologies for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Essential functionality</li>
              <li>Security and fraud prevention</li>
              <li>Analytics and performance monitoring</li>
              <li>User preferences</li>
            </ul>
            <p className="mt-4">You can control cookie settings through your browser.</p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes via email or through our software.</p>
          </section>

          {/* Contact 
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">For privacy-related questions or to exercise your rights:</p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-2">
              <p><strong className="text-white">Email:</strong> privacy@systemprobe.com</p>
              <p><strong className="text-white">Address:</strong> SystemProbe Security Inc., 123 Security Boulevard, San Francisco, CA 94102, USA</p>
              <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
              <p><strong className="text-white">Data Protection Officer:</strong> dpo@systemprobe.com</p>
            </div>
          </section>
          */}

          {/* Consent */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Consent</h2>
            <p>By using SystemProbe Security, you consent to this Privacy Policy and our data practices as described herein.</p>
          </section>

          <div className="border-t border-gray-700 pt-8 mt-12 text-sm text-gray-500 text-center">
            <p>This Privacy Policy is effective as of February 27, 2026 and supersedes all previous versions.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
          <p>© 2026 SystemProbe Security. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy