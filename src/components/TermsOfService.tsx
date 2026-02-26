import { useEffect, useRef } from 'react'

function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last Updated: February 27, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using SystemProbe Security software and services ("Services"), you agree to be bound 
              by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not use our Services.
            </p>
          </section>

          {/* License Grant */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. License Grant</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Free Version</h3>
            <p className="mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license 
              to use the free version of SystemProbe Security for personal, non-commercial use on your personal devices.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Premium Version</h3>
            <p className="mb-4">
              Premium subscribers receive an additional license to use advanced features on up to the number of 
              devices specified in their subscription plan.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 License Restrictions</h3>
            <p className="mb-3">You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Remove or modify any copyright, trademark, or proprietary notices</li>
              <li>Redistribute, sell, rent, lease, or sublicense the software</li>
              <li>Use the software for any illegal or unauthorized purpose</li>
              <li>Attempt to disable or circumvent security features</li>
              <li>Use the software to harm others or create malicious software</li>
            </ul>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.1 Account Requirements</h3>
            <p className="mb-4">
              You must provide accurate, current, and complete information during registration. You are responsible 
              for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Account Eligibility</h3>
            <p className="mb-4">
              You must be at least 13 years old to use our Services. Users under 18 must have parental consent.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.3 Account Security</h3>
            <p>
              You are responsible for all activities that occur under your account. Notify us immediately of any 
              unauthorized access.
            </p>
          </section>

          {/* Subscription and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Premium Subscriptions</h3>
            <p className="mb-4">Premium subscriptions are billed on a recurring basis (monthly or annually) until cancelled.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Pricing</h3>
            <p className="mb-4">Prices are subject to change with 30 days notice. Changes do not affect your current subscription period.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Refunds</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Free version: No refunds applicable</li>
              <li>Premium: 30-day money-back guarantee for first-time subscribers</li>
              <li>Refunds for subsequent renewals are at our discretion</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.4 Cancellation</h3>
            <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period.</p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Responsibilities</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.1 Lawful Use</h3>
            <p className="mb-4">You agree to use our Services only for lawful purposes and in accordance with these Terms.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.2 Backups</h3>
            <p className="mb-4">While our software aims to protect your system, you are solely responsible for backing up your data.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.3 Prohibited Activities</h3>
            <p className="mb-3">You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Services to violate any laws or regulations</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Engage in any activity that could harm our reputation</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.1 Ownership</h3>
            <p className="mb-4">SystemProbe Security and all related intellectual property rights remain our exclusive property.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.2 Trademarks</h3>
            <p className="mb-4">Our trademarks, logos, and service marks may not be used without our prior written consent.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.3 Feedback</h3>
            <p>If you provide feedback or suggestions, we may use them without any obligation to you.</p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-6">
              <p className="font-semibold text-white mb-4">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
              <p className="mb-4">We do not guarantee that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Services will be uninterrupted, error-free, or secure</li>
                <li>All threats will be detected or removed</li>
                <li>The Services will meet your specific requirements</li>
                <li>Any defects will be corrected</li>
              </ul>
              <p className="mt-4">No security software can provide 100% protection. We are not responsible for any security breaches, data loss, or system damage.</p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-6">
              <p className="font-semibold text-white mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
              
              <p className="mb-3 font-semibold text-white mt-4">WE SHALL NOT BE LIABLE FOR:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, use, or goodwill</li>
                <li>Business interruption or system failures</li>
                <li>Damages caused by malware, viruses, or security breaches</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">9.1 Termination by You</h3>
            <p className="mb-4">You may terminate your account at any time by contacting customer support.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">9.2 Termination by Us</h3>
            <p className="mb-3">We may suspend or terminate your access immediately if you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent activity</li>
              <li>Fail to pay subscription fees</li>
              <li>Use the Services in a way that harms us or others</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">9.3 Effect of Termination</h3>
            <p className="mb-3">Upon termination:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your license to use the software ends immediately</li>
              <li>You must uninstall the software from all devices</li>
              <li>We may delete your account data after 30 days</li>
              <li>Premium subscriptions are not refunded except as specified</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">10.1 Informal Resolution</h3>
            <p className="mb-4">Contact us first to resolve any disputes informally.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">10.2 Governing Law</h3>
            <p>These Terms are governed by the laws of the State of California, USA, without regard to conflict of law provisions.</p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify you of material changes via email or through 
              the software. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
            <p className="mb-4">For questions about these Terms:</p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-2">
              <p><strong className="text-white">Email:</strong> legal@systemprobe.com</p>
              <p><strong className="text-white">Address:</strong> SystemProbe Security Inc., 123 Security Boulevard, San Francisco, CA 94102, USA</p>
              <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
          */}

          <div className="border-t border-gray-700 pt-8 mt-12">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 text-center">
              <p className="text-white font-semibold mb-2">
                By downloading, installing, or using SystemProbe Security, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-sm text-gray-400 mt-4">Effective Date: February 27, 2026 • Version 3.1</p>
            </div>
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

export default TermsOfService