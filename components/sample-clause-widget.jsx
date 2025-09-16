import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileText, AlertTriangle, CheckCircle, Clock, Zap } from "lucide-react"
import { Button } from "../components/ui/button"

const sampleClauses = [
  {
    id: 1,
    title: "Termination Clause",
    text: "Either party may terminate this agreement with 30 days written notice. Upon termination, all confidential information must be returned within 5 business days.",
    risks: [
      { level: "medium", text: "Short notice period may not allow adequate transition time" },
      { level: "low", text: "Confidential information return timeline is reasonable" },
    ],
    suggestions: [
      "Consider extending notice period to 60 days for better transition planning",
      "Add specific procedures for confidential information return",
    ],
  },
  {
    id: 2,
    title: "Liability Limitation",
    text: "In no event shall either party be liable for any indirect, incidental, special, or consequential damages, regardless of the form of action or the basis of the claim.",
    risks: [
      { level: "high", text: "Broad liability exclusion may not be enforceable in all jurisdictions" },
      { level: "medium", text: "No cap on direct damages specified" },
    ],
    suggestions: [
      "Add specific monetary cap on direct damages",
      "Include carve-outs for gross negligence and willful misconduct",
    ],
  },
]

export function SampleClauseWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentClause, setCurrentClause] = useState(0)
  const [analysisStep, setAnalysisStep] = useState(0)
  const [showAnalysis, setShowAnalysis] = useState(false)

  useEffect(() => {
    if (showAnalysis && analysisStep < 3) {
      const timer = setTimeout(() => {
        setAnalysisStep((prev) => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [showAnalysis, analysisStep])

  const handleAnalyze = () => {
    setShowAnalysis(true)
    setAnalysisStep(0)
  }

  const resetDemo = () => {
    setShowAnalysis(false)
    setAnalysisStep(0)
    setCurrentClause((prev) => (prev + 1) % sampleClauses.length)
  }

  const getRiskColor = (level) => {
    switch (level) {
      case "high":
        return "text-red-400 bg-red-400/10 border-red-400/20"
      case "medium":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      case "low":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20"
    }
  }

  const getRiskIcon = (level) => {
    switch (level) {
      case "high":
        return AlertTriangle
      case "medium":
        return Clock
      case "low":
        return CheckCircle
      default:
        return FileText
    }
  }

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#d67c49] to-[#d67c49]/90 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#7fb77e] rounded-full animate-pulse" />
      </motion.button>
    )
  }

  const clause = sampleClauses[currentClause]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          className="bg-[#2a2a2a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#d67c49]/30 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-[#2a2a2a]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#d67c49]/20 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#d67c49]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins">ClauseIQ Demo</h3>
                  <p className="text-[#f8f8f8]/70">AI-Powered Contract Analysis</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-[#1c1c1c]/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#1c1c1c]/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Clause Text */}
            <div className="bg-[#1c1c1c]/50 rounded-xl p-6 border border-[#2a2a2a]">
              <h4 className="text-lg font-semibold font-poppins mb-3 text-[#d67c49]">{clause.title}</h4>
              <p className="text-[#f8f8f8]/90 leading-relaxed">{clause.text}</p>
            </div>

            {/* Analysis Button */}
            {!showAnalysis && (
              <div className="text-center">
                <Button
                  onClick={handleAnalyze}
                  className="bg-gradient-to-r from-[#d67c49] to-[#7fb77e] hover:from-[#d67c49]/90 hover:to-[#7fb77e]/90 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Analyze with AI
                </Button>
              </div>
            )}

            {/* Analysis Results */}
            {showAnalysis && (
              <div className="space-y-6">
                {/* Analysis Progress */}
                <motion.div
                  className="bg-[#1c1c1c]/50 rounded-xl p-4 border border-[#2a2a2a]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 border-2 border-[#d67c49] border-t-transparent rounded-full animate-spin" />
                    <span className="text-[#d67c49] font-medium">
                      {analysisStep === 0 && "Parsing contract language..."}
                      {analysisStep === 1 && "Identifying risk factors..."}
                      {analysisStep === 2 && "Generating recommendations..."}
                      {analysisStep >= 3 && "Analysis complete!"}
                    </span>
                  </div>
                  <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#d67c49] to-[#7fb77e] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((analysisStep + 1) * 33.33, 100)}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Risk Analysis */}
                {analysisStep >= 3 && (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h5 className="text-xl font-semibold font-poppins">Risk Analysis</h5>
                    {clause.risks.map((risk, index) => {
                      const RiskIcon = getRiskIcon(risk.level)
                      return (
                        <motion.div
                          key={index}
                          className={`p-4 rounded-xl border ${getRiskColor(risk.level)}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.2 }}
                        >
                          <div className="flex items-start gap-3">
                            <RiskIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-medium uppercase tracking-wide">{risk.level} Risk</span>
                              </div>
                              <p className="text-sm opacity-90">{risk.text}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}

                {/* Suggestions */}
                {analysisStep >= 3 && (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <h5 className="text-xl font-semibold font-poppins">AI Recommendations</h5>
                    {clause.suggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-[#7fb77e]/10 border border-[#7fb77e]/20 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.2 }}
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#7fb77e] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-[#f8f8f8]/90">{suggestion}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Try Another Button */}
                {analysisStep >= 3 && (
                  <motion.div
                    className="text-center pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      className="border-[#7fb77e] text-[#7fb77e] hover:bg-[#7fb77e] hover:text-[#1c1c1c] px-6 py-2 rounded-lg font-medium transition-all duration-200 bg-transparent"
                    >
                      Try Another Clause
                    </Button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
