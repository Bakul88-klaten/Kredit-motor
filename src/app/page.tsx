'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MessageCircle, 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Gift, 
  Percent, 
  Shield, 
  HeadphonesIcon,
  Bike,
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// WhatsApp link
const WHATSAPP_LINK = 'https://wa.me/6287781658231'
const WHATSAPP_NUMBER = '087781658231'

// Motor data
const hondaMotors = [
  { name: 'Honda Vario 125', price: 'Rp 680.000/bln', image: '/images/vario-125.webp' },
  { name: 'Honda Vario 125 Street', price: 'Rp 700.000/bln', image: '/images/vario-125-street.webp' },
  { name: 'Honda Vario 160', price: 'Rp 750.000/bln', image: '/images/vario-160.webp' },
  { name: 'Honda Beat', price: 'Rp 580.000/bln', image: '/images/beat.webp' },
  { name: 'Honda Beat Street', price: 'Rp 620.000/bln', image: '/images/beat-street.webp' },
  { name: 'Honda Scoopy', price: 'Rp 650.000/bln', image: '/images/scopy.webp' },
  { name: 'Honda Genio', price: 'Rp 600.000/bln', image: '/images/genio.webp' },
  { name: 'Honda ADV 160', price: 'Rp 880.000/bln', image: '/images/adv-160.webp' },
  { name: 'Honda PCX 160', price: 'Rp 850.000/bln', image: '/images/pcx-160.webp' },
  { name: 'Honda Forza', price: 'Rp 1.200.000/bln', image: '/images/forza.webp' },
  { name: 'Honda Stylo 160', price: 'Rp 780.000/bln', image: '/images/stylo-160.webp' },
]

const yamahaMotors = [
  { name: 'Yamaha NMAX', price: 'Rp 820.000/bln', image: '/images/yamaha-motor.png' },
  { name: 'Yamaha Aerox', price: 'Rp 780.000/bln', image: '/images/yamaha-motor.png' },
  { name: 'Yamaha Mio', price: 'Rp 580.000/bln', image: '/images/yamaha-motor.png' },
  { name: 'Yamaha Lexi', price: 'Rp 700.000/bln', image: '/images/yamaha-motor.png' },
]

// Testimoni data
const testimonials = [
  {
    name: 'Budi Santoso',
    location: 'Klaten',
    text: 'Proses cepat, DP ringan, motor langsung bisa dibawa pulang. Pelayanan ramah banget!',
    rating: 5
  },
  {
    name: 'Siti Rahayu',
    location: 'Prambanan',
    text: 'Cicilan bulanan terjangkau, tidak memberatkan. Recommended untuk yang mau kredit motor!',
    rating: 5
  },
  {
    name: 'Agus Wijaya',
    location: 'Jogonalan',
    text: 'Sudah 2x kredit di sini, selalu puas. Admin responsif dan bantu proses sampai selesai.',
    rating: 5
  },
]

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Bike className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Kredit Motor Klaten</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#promo" className="text-gray-600 hover:text-blue-600 transition-colors">Promo</a>
              <a href="#motor" className="text-gray-600 hover:text-blue-600 transition-colors">Motor</a>
              <a href="#keunggulan" className="text-gray-600 hover:text-blue-600 transition-colors">Keunggulan</a>
              <a href="#testimoni" className="text-gray-600 hover:text-blue-600 transition-colors">Testimoni</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                <a href="#promo" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Promo</a>
                <a href="#motor" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Motor</a>
                <a href="#keunggulan" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Keunggulan</a>
                <a href="#testimoni" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Testimoni</a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-full font-medium text-center"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left z-10"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-2 mb-4 animate-bounce">
                  🔥 PROMO SPESIAL!
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Kredit Motor Baru{' '}
                <span className="text-blue-600">Honda</span> &{' '}
                <span className="text-red-600">Yamaha</span>{' '}
                di Klaten
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl sm:text-2xl text-gray-600 mb-6"
              >
                Cicilan Ringan, Proses Cepat, DP Rendah!
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>05.00 - 20.00 WIB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Jalan Pemuda Klaten</span>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
                  Hubungi via WhatsApp
                </a>
                <a
                  href="#motor"
                  className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg border-2 border-gray-200 flex items-center justify-center gap-2"
                >
                  Lihat Motor
                  <ChevronDown className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Motor Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-400 rounded-3xl blur-2xl opacity-20 transform rotate-3" />
                <Image
                  src="/images/hero-motor.png"
                  alt="Motor Honda dan Yamaha"
                  width={700}
                  height={500}
                  className="relative drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -right-4 top-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse"
              >
                GRATIS Angsuran 1x!
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll ke bawah</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Promo Section */}
      <section id="promo" className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Badge className="bg-red-100 text-red-600 mb-4">PROMO SPESIAL</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Penawaran Terbaik Untuk Anda!
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Jangan lewatkan promo menarik yang sedang berlangsung. Kredit motor impian Anda sekarang!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Promo Cards */}
            {[
              { icon: Gift, title: 'GRATIS Angsuran 1x', desc: 'Bayar cicilan bulan pertama langsung gratis!', color: 'from-green-500 to-emerald-600', emoji: '🎁' },
              { icon: Percent, title: 'Cicilan Rendah', desc: 'Mulai dari Rp 580.000/bulan', color: 'from-blue-500 to-cyan-600', emoji: '💰' },
              { icon: Shield, title: 'GRATIS Helm', desc: 'Dapatkan helm berkualitas untuk setiap pembelian', color: 'from-purple-500 to-pink-600', emoji: '🪖' },
              { icon: HeadphonesIcon, title: 'Diskon Khusus', desc: 'Potongan harga spesial untuk Anda', color: 'from-orange-500 to-red-600', emoji: '🏷️' },
            ].map((promo, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${promo.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <span className="text-3xl">{promo.emoji}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{promo.title}</h3>
                    <p className="text-gray-600 text-sm">{promo.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Motor Showcase Section */}
      <section id="motor" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4">PILIHAN MOTOR</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Motor Baru Honda & Yamaha
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pilihan lengkap motor baru dengan cicilan ringan. Semua motor kondisi PRIME!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <Tabs defaultValue="honda" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gray-100 p-1">
                <TabsTrigger 
                  value="honda" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                    Honda
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="yamaha"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold rounded-lg transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-600" />
                    Yamaha
                  </span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="honda" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {hondaMotors.map((motor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-blue-50 to-white p-4">
                            <Image
                              src={motor.image}
                              alt={motor.name}
                              width={300}
                              height={200}
                              className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <Badge className="bg-blue-100 text-blue-700 mb-2">Honda</Badge>
                            <h3 className="font-bold text-lg text-gray-900">{motor.name}</h3>
                            <p className="text-blue-600 font-bold text-xl mt-1">{motor.price}</p>
                            <a
                              href={`${WHATSAPP_LINK}?text=Halo, saya tertarik dengan ${motor.name}. Apakah masih tersedia?`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                            >
                              <MessageCircle className="h-4 w-4" />
                              Tanya Harga
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="yamaha" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {yamahaMotors.map((motor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-red-200">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-red-50 to-white p-4">
                            <Image
                              src={motor.image}
                              alt={motor.name}
                              width={300}
                              height={200}
                              className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <Badge className="bg-red-100 text-red-700 mb-2">Yamaha</Badge>
                            <h3 className="font-bold text-lg text-gray-900">{motor.name}</h3>
                            <p className="text-red-600 font-bold text-xl mt-1">{motor.price}</p>
                            <a
                              href={`${WHATSAPP_LINK}?text=Halo, saya tertarik dengan ${motor.name}. Apakah masih tersedia?`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                            >
                              <MessageCircle className="h-4 w-4" />
                              Tanya Harga
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Badge className="bg-green-100 text-green-600 mb-4">KENAPA PILIH KAMI?</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Kredit Motor Klaten
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik untuk Anda memiliki motor impian
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: '⚡', title: 'Proses Cepat & Mudah', desc: 'Proses pengajuan cepat, tidak ribet, bisa diselesaikan dalam 1 hari!' },
              { icon: '💵', title: 'DP Rendah', desc: 'Uang muka ringan, mulai dari 10% saja. Cocok untuk semua kalangan.' },
              { icon: '📊', title: 'Cicilan Ringan', desc: 'Tenor fleksibel hingga 3 tahun dengan bunga kompetitif.' },
              { icon: '🏍️', title: 'Pilihan Lengkap', desc: 'Tersedia semua tipe motor Honda & Yamaha terbaru.' },
              { icon: '😊', title: 'Pelayanan Ramah', desc: 'Tim kami siap membantu dengan pelayanan terbaik dan ramah.' },
              { icon: '📍', title: 'Lokasi Strategis', desc: 'Berlokasi di Jalan Pemuda Klaten, mudah dijangkau.' },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">TESTIMONI</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ribuan pelanggan sudah mempercayakan kredit motor mereka kepada kami
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Customer Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-400 rounded-3xl blur-2xl opacity-20" />
              <Image
                src="/images/customer-happy.png"
                alt="Customer Happy"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInRight}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-3">&ldquo;{testimonial.text}&rdquo;</p>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Siap Punya Motor Impian?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8"
            >
              Hubungi kami sekarang dan wujudkan impian memiliki motor baru!
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="h-7 w-7 group-hover:animate-bounce" />
                Chat WhatsApp Sekarang
              </a>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white"
            >
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">{WHATSAPP_NUMBER}</span>
              </div>
              <div className="hidden sm:block w-1 h-6 bg-blue-400" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>05.00 - 20.00 WIB</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bike className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl">Kredit Motor Klaten</span>
              </div>
              <p className="text-gray-400">
                Solusi kredit motor terpercaya di Klaten. Motor baru Honda & Yamaha dengan cicilan ringan.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Kontak Kami</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>Jalan Pemuda Klaten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span>{WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>05.00 - 20.00 WIB</span>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-bold text-lg mb-4">Merek Motor</h3>
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Honda</div>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Yamaha</div>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Motor baru dengan garansi resmi
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kredit Motor Klaten. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-semibold">
          Chat Sekarang!
        </span>
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronDown className="h-6 w-6 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
