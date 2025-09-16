import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MessageSquare, Send, CheckCircle, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "../components/ui/button"
import { toast, Toaster } from "sonner"
import emailjs from 'emailjs-com'

export function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {

      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }
      )

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})

      toast.success("Message sent successfully!")

      setTimeout(() => setIsSubmitted(false), 3000)

    } catch (error) {
      console.error('Email send failed:', error)
      toast.error('Failed to send message. Please try again or contact me directly at asmithmahendrakar@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Asmith-M",
      color: "#f8f8f8",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/asmith-mahendrakar-955204311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/asmith__M?t=pwsEIUGhsaJcGgp-EmokKQ&s=09",
      color: "#1da1f2",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#1c1c1c] to-[#2a2a2a] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#d67c49] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#7fb77e] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">Let's Work Together</h2>
          <p className="text-xl text-[#f8f8f8]/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-6">Get In Touch</h3>
              <p className="text-[#f8f8f8]/80 leading-relaxed mb-8">
                I'm always interested in new opportunities, whether it's a full-time role, freelance project, or just a
                chat about technology and innovation. Drop me a message and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-xl border border-[#2a2a2a] hover:border-[#d67c49]/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-12 h-12 bg-[#d67c49]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#d67c49]" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-[#f8f8f8]/70">asmithmahendrakar@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-xl border border-[#2a2a2a] hover:border-[#7fb77e]/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-12 h-12 bg-[#7fb77e]/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#7fb77e]" />
                </div>
                <div>
                  <h4 className="font-semibold">Response Time</h4>
                  <p className="text-[#f8f8f8]/70">Usually within 24 hours</p>
                </div>
              </motion.div>
            </div>

            <div>
              <h4 className="text-lg font-semibold font-poppins mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#2a2a2a] hover:border-[#d67c49]/30 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Icon className="w-5 h-5 text-[#f8f8f8]/70 group-hover:text-[#d67c49] transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    maxLength={50}
                    className={`w-full bg-[#2a2a2a]/50 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-[#f8f8f8]/50 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#2a2a2a] focus:border-[#d67c49]'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-[#2a2a2a]/50 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-[#f8f8f8]/50 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#2a2a2a] focus:border-[#d67c49]'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  minLength={5}
                  maxLength={100}
                  className={`w-full bg-[#2a2a2a]/50 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-[#f8f8f8]/50 focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-500 focus:border-red-500' : 'border-[#2a2a2a] focus:border-[#d67c49]'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  minLength={10}
                  maxLength={1000}
                  className={`w-full bg-[#2a2a2a]/50 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-[#f8f8f8]/50 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#2a2a2a] focus:border-[#d67c49]'
                  }`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
                <p className="text-[#f8f8f8]/50 text-sm mt-1">
                  {formData.message.length}/1000 characters
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-[#d67c49] to-[#d67c49]/90 hover:from-[#d67c49]/90 hover:to-[#d67c49] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#2a2a2a',
            color: '#f8f8f8',
            border: '1px solid #d67c49',
          },
        }}
      />
    </section>
  )
}
