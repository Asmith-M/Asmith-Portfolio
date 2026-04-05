import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MessageSquare, Github, Linkedin, Twitter } from "lucide-react"
import { toast, Toaster } from "sonner"
import emailjs from "emailjs-com"

const TERMINAL_FIELDS = [
  { id: "name",    label: "name",    type: "text",  placeholder: "your name",         minLength: 2,  maxLength: 50  },
  { id: "email",   label: "email",   type: "email", placeholder: "your@email.com"                                  },
  { id: "subject", label: "subject", type: "text",  placeholder: "what's this about?", minLength: 5, maxLength: 100 },
]

export function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const [formData, setFormData]   = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted,  setIsSubmitted]  = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = "Please enter a valid email address"
    if (!formData.subject.trim() || formData.subject.trim().length < 5)
      newErrors.subject = "Subject must be at least 5 characters"
    if (!formData.message.trim() || formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) { toast.error("Please fix the errors in the form"); return }
    setIsSubmitting(true)
    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name.trim(),
          from_email: formData.email.trim(),
          subject:    formData.subject.trim(),
          message:    formData.message.trim(),
        }
      )
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})
      toast.success("Message transmitted successfully.")
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Email send failed:", error)
      toast.error("Transmission failed. Try asmithmahendrakar@gmail.com directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: "GitHub",   icon: Github,   url: "https://github.com/Asmith-M" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/asmith-mahendrakar-955204311" },
    { name: "Twitter",  icon: Twitter,  url: "https://x.com/asmith__M?t=pwsEIUGhsaJcGgp-EmokKQ&s=09" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 lg:py-20 border-t border-[#233554]"
    >
      {/* Section header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold font-poppins text-[#64FFDA] mb-1">
          Let&apos;s Build Something
        </h2>
        <p className="text-[#8892B0] font-inter text-sm max-w-md">
          Full-time roles, interesting problems, or just a conversation about
          why your RAG pipeline is hallucinating   all welcome.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left   info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-[#161B27] border border-[#233554] rounded-[4px] hover:border-[#64FFDA]/40 transition-colors duration-200">
              <div className="w-9 h-9 bg-[#64FFDA]/10 rounded-[4px] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-[10px] font-jetbrains-mono text-[#495670] tracking-widest uppercase mb-0.5">
                  EMAIL
                </p>
                <p className="text-[#CCD6F6] font-inter text-sm">
                  asmithmahendrakar@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#161B27] border border-[#233554] rounded-[4px] hover:border-[#64FFDA]/40 transition-colors duration-200">
              <div className="w-9 h-9 bg-[#64FFDA]/10 rounded-[4px] flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-[10px] font-jetbrains-mono text-[#495670] tracking-widest uppercase mb-0.5">
                  RESPONSE TIME
                </p>
                <p className="text-[#CCD6F6] font-inter text-sm">
                  Usually within 48 hours
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-jetbrains-mono tracking-[0.15em] text-[#64FFDA] uppercase mb-3">
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 bg-[#161B27] border border-[#233554] rounded-[4px] flex items-center justify-center text-[#495670] hover:border-[#64FFDA]/50 hover:text-[#64FFDA] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right   terminal form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="bg-[#161B27] border border-[#233554] rounded-[4px] p-6">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#233554]">
              <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
              <span className="w-3 h-3 rounded-full bg-[#64FFDA]/60" />
              <span className="w-3 h-3 rounded-full bg-[#4ADE80]" />
              <span className="ml-4 text-xs font-jetbrains-mono text-[#495670]">
                contact.sh
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              {TERMINAL_FIELDS.map((field) => (
                <div
                  key={field.id}
                  className={`border-b py-3 transition-colors duration-200 ${
                    errors[field.id]
                      ? "border-[#ff6b6b]"
                      : "border-[#233554] focus-within:border-[#64FFDA]/60"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#64FFDA] font-jetbrains-mono text-sm shrink-0">&gt;</span>
                    <span className="text-[#495670] font-jetbrains-mono text-sm shrink-0 w-20">
                      {field.label}:
                    </span>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      required
                      minLength={field.minLength}
                      maxLength={field.maxLength}
                      placeholder={field.placeholder}
                      className="flex-1 bg-transparent border-none outline-none text-[#CCD6F6] font-jetbrains-mono text-sm placeholder-[#495670] caret-[#64FFDA]"
                    />
                  </div>
                  {errors[field.id] && (
                    <p className="text-[#ff6b6b] text-xs font-jetbrains-mono mt-1 pl-6">
                      // {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              {/* Message */}
              <div
                className={`border-b py-3 transition-colors duration-200 ${
                  errors.message
                    ? "border-[#ff6b6b]"
                    : "border-[#233554] focus-within:border-[#64FFDA]/60"
                }`}
              >
                <div className="flex gap-2">
                  <span className="text-[#64FFDA] font-jetbrains-mono text-sm shrink-0 pt-0.5">&gt;</span>
                  <span className="text-[#495670] font-jetbrains-mono text-sm shrink-0 w-20 pt-0.5">
                    message:
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    minLength={10}
                    maxLength={1000}
                    placeholder="tell me about your project..."
                    className="flex-1 bg-transparent border-none outline-none text-[#CCD6F6] font-jetbrains-mono text-sm placeholder-[#495670] caret-[#64FFDA] resize-none"
                  />
                </div>
                <div className="flex justify-between pl-6 mt-1">
                  {errors.message
                    ? <p className="text-[#ff6b6b] text-xs font-jetbrains-mono">// {errors.message}</p>
                    : <span />
                  }
                  <span className="text-[#495670] text-xs font-jetbrains-mono">
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-5">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border border-[#64FFDA] text-[#64FFDA] py-2.5 px-6 rounded-[4px] font-jetbrains-mono text-sm font-semibold transition-all duration-200 hover:bg-[#64FFDA]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#64FFDA]/30 border-t-[#64FFDA] rounded-full animate-spin" />
                      SENDING...
                    </span>
                  ) : isSubmitted ? (
                    "MESSAGE_SENT.exe ✓"
                  ) : (
                    "SEND_MESSAGE.exe ▶"
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#161B27",
            color: "#CCD6F6",
            border: "1px solid #64FFDA",
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "13px",
          },
        }}
      />
    </section>
  )
}
