import './index.css'
import { useState } from 'react'

// Icons as SVG components
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const PsychologyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
)

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

const HealingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
)

const ChildIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
)

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
)

const MedicalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

// Translations
const translations = {
  mm: {
    nav: { guide: 'လမ်းညွှန်', services: 'ဝန်ဆောင်မှုများ', book: 'Book လုပ်ရန်' },
    hero: {
      title: "It's Normal to\nCall Me Today",
      subtitle: 'သင့်စိတ်ကျန်းမာရေးအတွက် လုံခြုံသောနေရာ။ ကျွမ်းကျင်သော counselor များနှင့် session တစ်ခု book လုပ်ပါ။',
      bookNow: 'ယခု Book လုပ်ရန်',
      guide: 'လမ်းညွှန်ကြည့်ရန်',
    },
    services: {
      title: 'ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ',
      subtitle: 'သင့်လိုအပ်ချက်နှင့် ကိုက်ညီသော counseling အမျိုးအစားကို ရွေးချယ်ပါ',
      book: 'Book',
      inquire: 'မေးမြန်းရန်',
      mins: 'မိနစ်',
    },
    counselors: {
      title: 'ကျွန်ုပ်တို့၏ Counselors များ',
      subtitle: 'အတွေ့အကြုံရှိပြီး ကျွမ်းကျင်သော counselors များနှင့် အသင့်ဆွေးနွေးပါ',
      hours: 'နာရီ',
      bookNow: 'Book Now',
    },
    guide: {
      title: 'ဘယ်လို Book လုပ်မလဲ',
      subtitle: 'ရိုးရှင်းသော အဆင့် ၇ ဆင့်ဖြင့် session တစ်ခု book လုပ်ပါ',
      steps: [
        { title: 'Book Now နှိပ်ပါ', desc: 'Website ရှိ "Book Now" ကိုနှိပ်ပါ' },
        { title: 'Counseling အမျိုးအစားရွေးပါ', desc: 'လိုချင်သော counseling အမျိုးအစားကို ရွေးပါ' },
        { title: 'Counselor ရွေးပါ', desc: 'Counselor နှင့် ရနိုင်သော အချိန်ကို ရွေးပါ' },
        { title: 'အချက်အလက်ဖြည့်ပါ', desc: 'ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ ဖြည့်ပါ' },
        { title: 'Email စစ်ဆေးပါ', desc: 'ဂဏန်း ၆ လုံး Token နှင့် Payment Link ရယူပါ' },
        { title: 'ငွေပေးချေပါ', desc: 'Payment screenshot ကို token နှင့်အတူ ပို့ပါ' },
        { title: 'အတည်ပြုချက်စောင့်ပါ', desc: 'Session link ပါဝင်သော email စောင့်ပါ' },
      ],
    },
    footer: {
      about: 'Call Me Today သည် မြန်မာနိုင်ငံရှိ စိတ်ကျန်းမာရေး ဝန်ဆောင်မှု platform တစ်ခုဖြစ်ပါသည်။',
      services: 'ဝန်ဆောင်မှုများ',
      support: 'Support',
      legal: 'တရားဝင်',
      rights: '© 2025 Call Me Today. မူပိုင်ခွင့်အားလုံးရယူထားသည်။',
    },
  },
  en: {
    nav: { guide: 'Guide', services: 'Services', book: 'Book Now' },
    hero: {
      title: "It's Normal to\nCall Me Today",
      subtitle: 'Your safe space for mental wellbeing. Book a session with our professional counselors.',
      bookNow: 'Book Now',
      guide: 'View Guide',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Choose a counseling type that fits your needs',
      book: 'Book',
      inquire: 'Inquire',
      mins: 'Mins',
    },
    counselors: {
      title: 'Our Counselors',
      subtitle: 'Connect with experienced and professional counselors',
      hours: 'Hours',
      bookNow: 'Book Now',
    },
    guide: {
      title: 'How to Book',
      subtitle: 'Book a session in 7 simple steps',
      steps: [
        { title: 'Click Book Now', desc: 'Click "Book Now" on the website' },
        { title: 'Select Counseling Type', desc: 'Choose desired counseling type' },
        { title: 'Select Counselor', desc: 'Choose a counselor and time slot' },
        { title: 'Fill Details', desc: 'Fill in your personal details' },
        { title: 'Check Email', desc: 'Get 6-digit Token and Payment Link' },
        { title: 'Make Payment', desc: 'Send payment screenshot with token' },
        { title: 'Wait for Confirmation', desc: 'Wait for session link via email' },
      ],
    },
    footer: {
      about: 'Call Me Today is a mental health service platform in Myanmar.',
      services: 'Services',
      support: 'Support',
      legal: 'Legal',
      rights: '© 2025 Call Me Today. All rights reserved.',
    },
  },
}

// Services Data
const servicesData = [
  { id: 1, icon: PsychologyIcon, titleMM: 'Psychosocial Counseling', titleEN: 'Psychosocial Counseling', descMM: 'စိတ်ဖိစီးမှု၊ စိုးရိမ်ပူပန်မှု၊ စိတ်ကျရောဂါ၊ ဝမ်းနည်းမှု၊ ထိတ်လန့်မှု စသည်တို့အတွက်', descEN: 'For stress, anxieties, depression, grief, panic and more', duration: 60, price: 50000 },
  { id: 2, icon: HeartIcon, titleMM: 'Relationship Counseling', titleEN: 'Relationship Counseling', descMM: 'မိဘ၊ သားသမီး၊ သူငယ်ချင်း သို့မဟုတ် ချစ်သူနှင့် ဆက်ဆံရေးပြဿနာများအတွက်', descEN: 'For relationship issues with parents, children, friends, or partners', duration: 60, price: 50000 },
  { id: 3, icon: HealingIcon, titleMM: 'Trauma Counseling', titleEN: 'Trauma Counseling', descMM: 'စိတ်ပိုင်းဆိုင်ရာ ဒဏ်ရာရရှိထားသူများအတွက် အထူးကုသမှု', descEN: 'Specialized care for those suffering from psychological trauma', duration: 60, price: 55000 },
  { id: 4, icon: ChildIcon, titleMM: 'Parenting & Child Psychology', titleEN: 'Parenting & Child Psychology', descMM: 'ကလေးစိတ်ကျန်းမာရေးနှင့် မိဘ-ကလေး ဆက်ဆံရေး အကြံဉာဏ်ပေးခြင်း', descEN: 'Child mental health and parent-child relationship advice', duration: 60, price: 50000 },
  { id: 5, icon: MedicalIcon, titleMM: 'Psychiatric Consultation', titleEN: 'Psychiatric Consultation', descMM: 'ဆေးဘက်ဆိုင်ရာ/စိတ်ရောဂါဆိုင်ရာ အကဲဖြတ်စစ်ဆေးမှုလိုအပ်သူများအတွက်', descEN: 'For those needing medical/psychiatric evaluation', duration: 60, price: 67000 },
  { id: 6, icon: ChatIcon, titleMM: 'Telegram Text Counseling', titleEN: 'Telegram Text Counseling', descMM: 'text-based support လိုချင်သူများအတွက် Telegram မှတစ်ဆင့်', descEN: 'Text-based counseling via Telegram for privacy', duration: 40, price: 35000 },
]

// Counselors Data
const counselorsData = [
  { id: 'C-016', name: 'Professional Doctor', image: 'https://i.pravatar.cc/150?img=47', qualifications: ['Diploma in CBT', 'Over 3000 Hours'], specializations: ['Anxiety', 'Depression', 'Trauma'], price: 50000, rating: 4.9, lgbtq: false },
  { id: 'C-004', name: 'Doctor & Musician', image: 'https://i.pravatar.cc/150?img=52', qualifications: ['Music Therapy', 'Mental Health'], specializations: ['Music Therapy', 'LGBTQ+', 'Stress'], price: 50000, rating: 4.8, lgbtq: true },
  { id: 'C-007', name: 'Mental Health Specialist', image: 'https://i.pravatar.cc/150?img=44', qualifications: ['MBBS', 'Master in Mental Health'], specializations: ['Mood Disorders', 'PTSD', 'Child Mental Health'], price: 67000, rating: 5.0, lgbtq: false },
  { id: 'C-012', name: 'Trauma Specialist', image: 'https://i.pravatar.cc/150?img=45', qualifications: ['PhD Clinical Psychology'], specializations: ['Trauma', 'PTSD', 'Grief'], price: 55000, rating: 4.9, lgbtq: false },
]

function App() {
  const [lang, setLang] = useState('mm')
  const t = translations[lang]

  const toggleLang = () => setLang(lang === 'mm' ? 'en' : 'mm')

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">
              <PhoneIcon />
            </div>
            <span className="logo-text">Call Me Today</span>
          </div>

          <nav className="nav">
            <a href="#services" className="nav-link">{t.nav.services}</a>
            <a href="#guide" className="nav-link">{t.nav.guide}</a>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'mm' ? 'EN' : 'MM'} ⇄
            </button>
            <button className="btn btn-primary">{t.nav.book}</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <div className="hero-buttons">
              <button className="btn btn-dark">{t.hero.bookNow}</button>
              <button className="btn btn-outline">{t.hero.guide}</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop" alt="Mental Health Support" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <service.icon />
              </div>
              <h3>{lang === 'mm' ? service.titleMM : service.titleEN}</h3>
              <div className="service-meta">
                <span className="service-duration">⏱ {service.duration} {t.services.mins}</span>
                <span className="service-price">{service.price.toLocaleString()} MMK</span>
              </div>
              <p>{lang === 'mm' ? service.descMM : service.descEN}</p>
              <div className="service-actions">
                <button className="btn btn-primary">{t.services.book}</button>
                <button className="btn btn-outline">{t.services.inquire}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Counselors */}
      <section className="counselors">
        <div className="section-header">
          <h2>{t.counselors.title}</h2>
          <p>{t.counselors.subtitle}</p>
        </div>
        <div className="counselors-carousel">
          {counselorsData.map(counselor => (
            <div key={counselor.id} className="counselor-card">
              <div className="counselor-avatar">
                <img src={counselor.image} alt={counselor.name} />
              </div>
              <span className="counselor-id">{counselor.id}</span>
              <h3>{counselor.name}</h3>
              <div className="counselor-rating">
                <StarIcon />
                <span>{counselor.rating}</span>
              </div>
              <div className="counselor-badges">
                {counselor.qualifications.map((q, i) => (
                  <span key={i} className="badge">{q}</span>
                ))}
                {counselor.lgbtq && <span className="badge badge-lgbtq">LGBTQ+ Friendly</span>}
              </div>
              <div className="counselor-specializations">
                {counselor.specializations.map((s, i) => (
                  <span key={i} className="spec-tag">{s}</span>
                ))}
              </div>
              <div className="counselor-price">{counselor.price.toLocaleString()} MMK</div>
              <button className="btn btn-primary" style={{ width: '100%' }}>{t.counselors.bookNow}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Guide */}
      <section id="guide" className="guide">
        <div className="section-header">
          <h2>{t.guide.title}</h2>
          <p>{t.guide.subtitle}</p>
        </div>
        <div className="guide-steps">
          {t.guide.steps.map((step, index) => (
            <div key={index} className="guide-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <PhoneIcon />
                </div>
                <span className="logo-text" style={{ color: 'white' }}>Call Me Today</span>
              </div>
              <p>{t.footer.about}</p>
            </div>
            <div className="footer-column">
              <h4>{t.footer.services}</h4>
              <ul>
                <li><a href="#">Psychosocial</a></li>
                <li><a href="#">Relationship</a></li>
                <li><a href="#">Trauma</a></li>
                <li><a href="#">Psychiatric</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t.footer.support}</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Guide</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t.footer.legal}</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
