import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import '@google/model-viewer'

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element')
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function HomePage() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-marble min-h-screen text-stone-900">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-4 md:px-12 md:py-6 bg-white/50 backdrop-blur-md border-b border-stone-100/50 safe-area-top">
        <a href="#" className="font-serif-ature text-2xl md:text-3xl tracking-tight font-semibold text-stone-900">
          ATURE <span className="text-xs font-sans font-normal text-stone-500 tracking-widest ml-1">STUDIO</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
            How it Works
          </a>
          <a href="#features" className="hover:text-stone-900 transition-colors">
            Styles
          </a>
          <a href="#pricing" className="hover:text-stone-900 transition-colors">
            Pricing
          </a>
          <a href="#teams" className="hover:text-stone-900 transition-colors">
            For Teams
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-sm font-medium text-stone-600 hover:text-stone-900 px-2 py-1.5 md:px-0">
            Log In
          </button>
          <button
            className="hidden md:block px-5 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold tracking-wide hover:bg-stone-800 transition-colors"
            onClick={() => navigate('/studio')}
          >
            Start Visualizing
          </button>
          <button
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100/50 md:hidden safe-area-top">
          <div className="flex flex-col px-4 py-4 gap-2">
            <a
              href="#how-it-works"
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#features"
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Styles
            </a>
            <a
              href="#pricing"
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#teams"
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Teams
            </a>
            <button
              className="mt-2 px-4 py-3 rounded-full bg-stone-900 text-white text-sm font-semibold tracking-wide hover:bg-stone-800 transition-colors"
              onClick={() => {
                navigate('/studio')
                setMobileMenuOpen(false)
              }}
            >
              Start Visualizing
            </button>
          </div>
        </div>
      )}

      <main className="pt-24 md:pt-32 pb-20 px-4 md:px-12 max-w-[1600px] mx-auto safe-area-x">
        <section className="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 reveal-element">
            <div className="inline-block px-3 py-1 mb-6 border border-stone-200 rounded-full bg-white/50 text-[10px] font-bold tracking-widest uppercase text-stone-500">
              For Interior Designers
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif-ature leading-[1.1] tracking-tight text-stone-950 mb-6">
              Visualize furniture <br />
              in <span className="italic font-light text-stone-500">any environment</span>
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-md mb-8">
              Stop relying on imagination. Upload a photo of any furniture piece and seamlessly blend it into your client&apos;s specific room style using our AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-all hover:scale-105 shadow-xl shadow-stone-900/20 touch-manipulation"
                onClick={() => navigate('/studio')}
              >
                Try Feature Now
              </button>
              <button className="px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white border border-stone-200 text-stone-900 text-sm font-semibold hover:bg-stone-50 transition-colors flex items-center gap-2 touch-manipulation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mb-32 relative">
          <div className="flex justify-between items-end mb-12 reveal-element">
            <h2 className="text-3xl md:text-4xl font-serif-ature text-stone-900">How it works</h2>
            <div className="hidden md:block h-px bg-stone-200 w-1/3 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div className="reveal-element group bg-white rounded-3xl border border-stone-200 p-6 flex flex-col h-[380px] hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-stone-400 border border-stone-100 px-2 py-1 rounded bg-stone-50">STEP 01</span>
              </div>
              <div className="h-[200px] flex items-center justify-center p-4 relative bg-stone-50 rounded-2xl mb-6 overflow-hidden">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9cbe1cf-20b8-4ac2-9d96-86eb52b46d6b_800w.jpg"
                  alt="Raw Furniture"
                  className="w-full h-full object-contain mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-stone-700"
                    >
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                      <line x1="16" x2="22" y1="5" y2="5" />
                      <line x1="19" x2="19" y1="2" y2="8" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif-ature text-xl text-stone-900 mb-2">Upload Asset</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Upload a photo of the furniture piece you want to showcase. Our tool automatically crops and preps it.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="reveal-element group bg-white rounded-3xl border border-stone-200 p-6 flex flex-col h-[380px] hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-stone-400 border border-stone-100 px-2 py-1 rounded bg-stone-50">STEP 02</span>
              </div>
              <div className="h-[200px] flex items-center justify-center p-6 bg-stone-50 rounded-2xl mb-6 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=400&auto=format&fit=crop"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  alt="Environment style"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                <div className="z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-stone-100 text-xs font-semibold text-stone-700">
                  Style: Minimalist Beige
                </div>
              </div>
              <div>
                <h3 className="font-serif-ature text-xl text-stone-900 mb-2">Select Environment</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Choose a style template or upload the client&apos;s room photo. We define the lighting and perspective.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="reveal-element group bg-stone-900 rounded-3xl border border-stone-800 p-6 flex flex-col h-[380px] hover:shadow-2xl hover:shadow-stone-900/30 transition-all duration-500 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-stone-500 border border-stone-700 px-2 py-1 rounded bg-stone-800">STEP 03</span>
              </div>
              <div className="h-[200px] flex items-center justify-center p-4 relative rounded-2xl mb-6 overflow-hidden bg-stone-800">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aff9cab-5646-41b8-80cf-ff8b10b942b6_800w.webp"
                  alt="Blended Result"
                  className="w-full h-full object-contain z-10 relative drop-shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-800 to-stone-700" />
              </div>
              <div>
                <h3 className="font-serif-ature text-xl text-white mb-2 flex items-center gap-2">
                  AI Blend
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                  </svg>
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Our engine generates shadows, reflections, and color grading to match the furniture to the room perfectly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 reveal-element flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative bg-yellow-100/50 rounded-xl w-full max-w-[200px] h-32 mb-16 mx-auto md:mx-0 border border-yellow-100">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 flex items-center justify-center">
                <div className="w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-40 absolute" />
                <img
                  src="https://images.unsplash.com/photo-1590634336568-7b4c05b5d9c6?q=80&w=400&auto=format&fit=crop"
                  className="relative mix-blend-multiply drop-shadow-xl w-24"
                  alt="Bulb"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="font-serif-ature text-2xl text-stone-900 mb-2">Smart Lighting</h3>
            <p className="text-stone-500 text-sm max-w-[200px]">
              The AI analyzes the light source in the room photo and casts realistic shadows.
            </p>
          </div>

          <div className="md:col-span-4 reveal-element relative py-10 md:py-0">
            <div className="relative flex justify-center bg-white rounded-full w-80 h-80 mx-auto items-center border border-stone-100 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"
                alt="Feature Chair"
                className="w-48 mix-blend-multiply object-contain z-10"
                loading="lazy"
              />
              <div className="absolute top-[30%] left-12 z-20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-stone-900 text-white px-3 py-1 rounded-full text-[10px] font-medium shadow-md flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Texture
                </div>
              </div>

              <div className="absolute bottom-[30%] right-12 z-20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-stone-900 text-white px-3 py-1 rounded-full text-[10px] font-medium shadow-md flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Perspective
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 reveal-element md:pl-8">
            <h2 className="text-5xl md:text-6xl font-serif-ature tracking-tight leading-[0.95] text-stone-900 mb-8">
              Designed for <br />
              <span className="inline-block align-middle mx-1 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-inner relative top-1">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100"
                  className="w-full h-full object-cover"
                  alt="Designer"
                  loading="lazy"
                />
              </span>
              professionals.
            </h2>
            <p id="pricing" className="text-stone-500 text-sm leading-relaxed max-w-sm mb-6">
              We don&apos;t sell furniture. We sell the ability to sell your vision. Perfect for interior designers, stagers, and furniture manufacturers.
            </p>
            <Link to="/studio" className="text-stone-900 font-bold border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors">
              View Subscription Plans &gt;
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 px-6 md:px-12 text-xs font-medium">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-serif-ature text-2xl text-stone-200">
              ATURE <span className="text-xs font-sans font-normal text-stone-600 tracking-widest">STUDIO</span>
            </span>
            <p className="text-stone-600">AI-Powered Visualization</p>
          </div>
          <div className="flex gap-8">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <Link to="/studio" className="hover:text-white transition-colors">
              API
            </Link>
            <a href="#teams" className="hover:text-white transition-colors">
              Support
        </a>
      </div>
          <p>© {new Date().getFullYear()} Ature Inc.</p>
        </div>
      </footer>
    </div>
  )
}

function StudioPage() {
  useRevealOnScroll()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [dragDepth, setDragDepth] = useState(0) // used to smooth drag enter/leave transitions
  const [fileName, setFileName] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const [furnitureFile, setFurnitureFile] = useState(null)
  const [_model3dFile, setModel3dFile] = useState(null)
  const [model3dUrl, setModel3dUrl] = useState('')
  const [is3dModel, setIs3dModel] = useState(false)
  const [roomFileName, setRoomFileName] = useState('')
  const [roomPreviewUrl, setRoomPreviewUrl] = useState('')
  const [roomFile, setRoomFile] = useState(null)
  const [resultUrl, setResultUrl] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState('') // 'picture' | 'ar'

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
      if (roomPreviewUrl) {
        URL.revokeObjectURL(roomPreviewUrl)
      }
      if (model3dUrl) {
        URL.revokeObjectURL(model3dUrl)
      }
    }
  }, [previewUrl, roomPreviewUrl, model3dUrl])

  const handleDragEnter = (event) => {
    event.preventDefault()
    setDragDepth((depth) => depth + 1)
    setDragActive(true)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    setDragDepth((depth) => {
      const next = Math.max(0, depth - 1)
      if (next === 0) {
        setDragActive(false)
      }
      return next
    })
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setDragDepth(0)
    setDragActive(false)
    const file = event.dataTransfer.files?.[0]
    if (file) {
      setFileName(file.name)
      const is3d = is3dModelFile(file.name)
      setIs3dModel(is3d)
      
      if (is3d) {
        setModel3dFile(file)
        if (model3dUrl) {
          URL.revokeObjectURL(model3dUrl)
        }
        setModel3dUrl(URL.createObjectURL(file))
        setFurnitureFile(null)
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
          setPreviewUrl('')
        }
      } else {
        setFurnitureFile(file)
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        setPreviewUrl(URL.createObjectURL(file))
        setModel3dFile(null)
        if (model3dUrl) {
          URL.revokeObjectURL(model3dUrl)
          setModel3dUrl('')
        }
      }
    }
  }

  const is3dModelFile = (filename) => {
    const ext = filename.toLowerCase().split('.').pop()
    return ['glb', 'gltf', 'usdz', 'obj', 'fbx'].includes(ext)
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      const is3d = is3dModelFile(file.name)
      setIs3dModel(is3d)
      
      if (is3d) {
        setModel3dFile(file)
        if (model3dUrl) {
          URL.revokeObjectURL(model3dUrl)
        }
        setModel3dUrl(URL.createObjectURL(file))
        setFurnitureFile(null)
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
          setPreviewUrl('')
        }
      } else {
        setFurnitureFile(file)
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        setPreviewUrl(URL.createObjectURL(file))
        setModel3dFile(null)
        if (model3dUrl) {
          URL.revokeObjectURL(model3dUrl)
          setModel3dUrl('')
        }
      }
    }
  }

  const handleRoomFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setRoomFileName(file.name)
      setRoomFile(file)
      if (roomPreviewUrl) {
        URL.revokeObjectURL(roomPreviewUrl)
      }
      setRoomPreviewUrl(URL.createObjectURL(file))
    }
  }

  const triggerRoomFileInput = () => {
    const input = document.getElementById('ature-room-upload-input')
    input?.click()
  }

  const handleSeeResult = async () => {
    if (!furnitureFile || !roomFile) return
    setIsProcessing(true)
    setError('')
    setResultUrl('')
    try {
      const formData = new FormData()
      formData.append('furniture', furnitureFile)
      formData.append('room', roomFile)

      // TODO: replace this endpoint with the real Google Nano Banana proxy in your backend
      const response = await fetch('/api/nano-banana/visualize', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to generate visualization')
      }

      const data = await response.json()
      // Expecting { imageUrl: string } from backend
      if (data.imageUrl) {
        setResultUrl(data.imageUrl)
      } else {
        throw new Error('Missing imageUrl in response')
      }
    } catch (e) {
      setError(e.message || 'Something went wrong while generating the result.')
    } finally {
      setIsProcessing(false)
    }
  }

  const triggerFileInput = () => {
    const input = document.getElementById('ature-upload-input')
    input?.click()
  }

  return (
    <div className="bg-marble min-h-screen text-stone-900 flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-4 md:px-12 md:py-6 bg-white/60 backdrop-blur-md border-b border-stone-100/60 safe-area-top">
        <Link to="/" className="font-serif-ature text-2xl md:text-3xl tracking-tight font-semibold text-stone-900">
          ATURE <span className="text-xs font-sans font-normal text-stone-500 tracking-widest ml-1">STUDIO</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4 text-xs font-medium text-stone-600">
          <span className="hidden md:inline px-3 py-1 rounded-full border border-stone-200 bg-white/60">
            Beta – Visual canvas
          </span>
          <button className="px-3 py-1.5 md:px-4 rounded-full border border-stone-200 bg-white text-stone-900 hover:bg-stone-50 transition-colors text-xs touch-manipulation">
            Save
          </button>
          <button
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu for Studio */}
      {mobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100/50 md:hidden safe-area-top">
          <div className="flex flex-col px-4 py-4 gap-2">
            <Link
              to="/"
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Save Session
            </button>
            <span className="px-4 py-2 text-xs text-stone-500">
              Beta – Visual canvas
            </span>
          </div>
        </div>
      )}

      <main className="flex-1 pt-24 md:pt-28 pb-16 px-4 md:px-12 max-w-5xl mx-auto safe-area-x">
        <section className="reveal-element mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-2">Upload console</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif-ature text-stone-900">
              Blend your next <span className="italic text-stone-500">hero piece</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Real-time preview
            </span>
            <span className="w-px h-4 bg-stone-300" />
            <span>Export: PNG • WEBP</span>
          </div>
        </section>

        <section className="reveal-element grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Left side: Initial mode selection OR drag and drop */}
          <div className="min-h-[400px] md:min-h-[500px] relative">
            {!mode ? (
              // Initial mode selection - "Let's design" card
              <button
                type="button"
                onClick={() => setMode('picture')}
                className="bg-white/80 backdrop-blur border border-stone-200 rounded-3xl p-8 h-full w-full flex flex-col items-center justify-center text-center hover:border-stone-400 hover:shadow-lg transition-all duration-300 group fade-in"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-900 text-stone-50 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <h3 className="font-serif-ature text-2xl text-stone-900 mb-2">Let&apos;s design</h3>
                <p className="text-xs text-stone-500">Blend furniture into room photos</p>
              </button>
            ) : (
              // Drag and drop window (appears after mode selection)
              <div
                data-drag-depth={dragDepth}
                className={`upload-zone-simple rounded-3xl h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer group relative overflow-hidden bg-white/60 backdrop-blur transition-all duration-300 fade-in ${
                  dragActive ? 'bg-stone-900/5 shadow-lg shadow-stone-900/15 scale-[1.01] -translate-y-0.5' : 'hover:shadow-md hover:shadow-stone-900/5'
                }`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 opacity-70" />
                  <div className="absolute -bottom-14 -right-6 w-40 h-40 rounded-full bg-gradient-to-tr from-stone-900/10 to-stone-400/5" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-stone-900 text-stone-50 flex items-center justify-center shadow-lg shadow-stone-900/30">
                    <span className="text-xs tracking-[0.2em] uppercase">AI</span>
                  </div>
                  <p className="text-xs font-mono text-stone-700 tracking-wide">
                    Drag &amp; drop or click to browse
                  </p>
                  <p className="text-[10px] text-stone-500 mt-1">
                    {mode === 'ar' ? '3D models (GLB, GLTF, USDZ)' : 'Images (JPG, PNG, WEBP)'}
                  </p>
                  {fileName && (
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-50 px-3 py-1 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="truncate max-w-[160px]">{fileName}</span>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] text-stone-500">
                  <span className="inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full border border-stone-100 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Auto background
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full border border-stone-100 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Lighting match
                  </span>
                </div>

                <input
                  id="ature-upload-input"
                  type="file"
                  accept={mode === 'ar' ? '.glb,.gltf,.usdz,.obj,.fbx' : 'image/jpeg,image/png,image/webp'}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>

          {/* Right side: Output options */}
          <aside className="min-h-[400px] md:min-h-[500px] space-y-4 text-xs text-stone-600">
            {!mode ? (
              // Show the second mode selection card initially
              <div className="bg-white/80 backdrop-blur border border-stone-200 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center fade-in">
                <button
                  type="button"
                  onClick={() => setMode('ar')}
                  className="w-full h-full flex flex-col items-center justify-center group hover:border-stone-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-stone-900 text-stone-50 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <h3 className="font-serif-ature text-2xl text-stone-900 mb-2">Let&apos;s explore</h3>
                  <p className="text-xs text-stone-500">View 3D models in AR</p>
                </button>
              </div>
            ) : (
              // Show selected mode info and options
              <div className="bg-white/80 backdrop-blur border border-stone-200 rounded-3xl p-6 h-full flex flex-col space-y-4 fade-in">
                <div className="flex items-center justify-between mb-2">
                  <p className="uppercase tracking-[0.2em] text-[10px] text-stone-500">
                    {mode === 'picture' ? 'Design Mode' : 'Explore Mode'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('')
                      setFileName('')
                      setPreviewUrl('')
                      setModel3dUrl('')
                      setFurnitureFile(null)
                      setModel3dFile(null)
                      if (previewUrl) URL.revokeObjectURL(previewUrl)
                      if (model3dUrl) URL.revokeObjectURL(model3dUrl)
                    }}
                    className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    Change mode
                  </button>
                </div>

                {previewUrl && !is3dModel && (
                  <div className="bg-white/60 backdrop-blur border border-stone-200 rounded-2xl p-3 shadow-sm">
                    <p className="uppercase tracking-[0.2em] text-[10px] text-stone-500 mb-2">Preview</p>
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-stone-100 bg-stone-50 flex items-center justify-center">
                      <img src={previewUrl} alt={fileName} className="max-h-full max-w-full object-contain" />
                    </div>
                  </div>
                )}
                
                {model3dUrl && is3dModel && (
                  <div className="bg-white/60 backdrop-blur border border-stone-200 rounded-2xl p-3 shadow-sm">
                    <p className="uppercase tracking-[0.2em] text-[10px] text-stone-500 mb-2">3D Model Preview</p>
                    <div className="w-full h-[200px] rounded-xl border border-stone-100 bg-stone-900 overflow-hidden">
                      <model-viewer
                        src={model3dUrl}
                        alt="3D Model"
                        camera-controls
                        touch-action="pan-y"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </div>
                )}

                {mode === 'picture' && (
                  <div className="flex-1 flex flex-col space-y-4">
                    <p className="text-sm text-stone-600">
                      Upload your furniture image, then add a room photo to blend them together.
                    </p>
                    {previewUrl && (
                      <div className="space-y-3">
                        <p className="uppercase tracking-[0.2em] text-[10px] text-stone-500">Add your room</p>
                        <button
                          type="button"
                          onClick={triggerRoomFileInput}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-dashed border-stone-300 text-left text-[11px] hover:border-stone-500 transition-colors"
                        >
                          <span className="text-stone-700">
                            {roomFileName || 'Upload a room / environment photo'}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500">Room</span>
                        </button>
                        {roomPreviewUrl && (
                          <div className="aspect-video w-full overflow-hidden rounded-xl border border-stone-100 bg-stone-50 flex items-center justify-center">
                            <img src={roomPreviewUrl} alt={roomFileName} className="max-h-full max-w-full object-contain" />
                          </div>
                        )}
                        <input
                          id="ature-room-upload-input"
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          className="hidden"
                          onChange={handleRoomFileChange}
                        />
                        <button
                          type="button"
                          onClick={handleSeeResult}
                          disabled={!previewUrl || !roomPreviewUrl || isProcessing}
                          className={`w-full mt-1 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase ${
                            !previewUrl || !roomPreviewUrl || isProcessing
                              ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                              : 'bg-stone-900 text-stone-50 hover:bg-stone-800'
                          }`}
                        >
                          {isProcessing ? 'Generating result…' : 'See the result'}
        </button>
                        {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
                      </div>
                    )}
                  </div>
                )}

                {mode === 'ar' && (
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm text-stone-600 mb-4">
                      Upload a 3D model to view it in augmented reality using your device camera.
        </p>
      </div>
                )}
              </div>
            )}

            {mode === 'ar' && model3dUrl && (
              <div className="bg-white/80 backdrop-blur border border-stone-200 rounded-2xl p-4 shadow-sm space-y-3">
                <p className="uppercase tracking-[0.2em] text-[10px] text-stone-500 mb-1">AR Viewer</p>
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl border border-stone-100 bg-stone-900 overflow-hidden">
                  <model-viewer
                    src={model3dUrl}
                    alt="3D Model"
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    touch-action="pan-y"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <button
                      slot="ar-button"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-stone-900 text-white text-xs font-semibold tracking-wide hover:bg-stone-800 transition-colors shadow-lg"
                    >
                      View in AR
                    </button>
                  </model-viewer>
                </div>
                <p className="text-[11px] text-stone-500 text-center">
                  Tap &quot;View in AR&quot; to place this model in your space using your device camera
                </p>
              </div>
            )}

            {resultUrl && (
              <div className="bg-white/90 backdrop-blur border border-stone-200 rounded-2xl p-4 shadow-sm">
                <p className="uppercase tracking-[0.2em] text-[10px] text-stone-500 mb-2">Result</p>
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-stone-100 bg-stone-50 flex items-center justify-center">
                  <img src={resultUrl} alt="Visualization result" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            )}
          </aside>
        </section>
      </main>
    </div>
  )
}

function App() {
  useRevealOnScroll()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/studio" element={<StudioPage />} />
    </Routes>
  )
}

export default App
