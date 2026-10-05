import { useState, type FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Bot,
  Building2, Check, ChevronDown, Clock3, Globe2, HeartPulse,
  Facebook, Instagram, MapPin, Menu, MessageCircle, MousePointerClick, Search, Send,
  ShieldCheck, Sparkles, Target, TrendingUp, Users, WandSparkles,
  X, Zap,
} from 'lucide-react';

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const businessPhone = '+91 95902 11092';
const businessPhoneHref = 'tel:+919590211092';
const businessWhatsAppHref = 'https://wa.me/919590211092';
const contactEmail = 'dashintegratedsolutions@gmail.com';

const services = [
  { icon: Search, title: 'Google Business Profile Optimization', text: 'Help nearby customers find accurate business details, services, photos and updates on Google Search and Maps.' },
  { icon: Globe2, title: 'Website Development', text: 'Give your business a clear, mobile-friendly website that builds trust and makes it easy to enquire.' },
  { icon: Instagram, title: 'Social Media Management', text: 'Stay visible with consistent, useful social posts made for your business and local audience.' },
  { icon: ShieldCheck, title: 'Google Review Growth', text: 'Make it easier to request reviews, respond thoughtfully and build trust with future customers.' },
  { icon: Target, title: 'Lead Generation Funnels', text: 'Connect useful landing pages and enquiry forms so interested visitors have a clear next step.' },
  { icon: Bot, title: 'AI Chat & Automation', text: 'Answer common questions and follow up on enquiries more consistently with practical automation.' },
];
const problems = [
  { n: '01', icon: Search, title: 'Hard to be found on Google', text: 'When your business is hard to find in local search, nearby customers may choose a competitor.' },
  { n: '02', icon: MessageCircle, title: 'Few Google Reviews', text: 'A small number of reviews can make it harder for new customers to feel confident choosing you.' },
  { n: '03', icon: Globe2, title: 'No website or a poor website', text: 'An outdated or missing website leaves customers without the details they need to take action.' },
  { n: '04', icon: Users, title: 'Losing customers to competitors', text: 'A stronger online presence helps your business earn attention before customers move on.' },
];
const packages = [
  {
    name: 'Basic Presence Package', price: '4,999', descriptor: 'Build a more consistent local presence.', featured: false,
    items: ['Google Profile Optimization', '8 Social Media Posts', 'Review Management', 'Monthly Report'],
  },
  {
    name: 'Growth Package', price: '9,999', descriptor: 'Turn your online presence into a clearer path to new enquiries.', featured: true,
    items: ['Everything in Basic Presence', 'Website', 'Lead Form', 'WhatsApp Integration', 'Analytics Dashboard'],
  },
  {
    name: 'AI Growth Package', price: '19,999', descriptor: 'Add AI tools and customer automation as you grow.', featured: false,
    items: ['Everything in Growth', 'AI Chat Assistant', 'Lead Tracking System', 'CRM Dashboard', 'Customer Automation'],
  },
];
const steps = [
  { n: '01', title: 'Free Digital Audit', text: 'We review your online presence and identify the clearest opportunities to improve.' },
  { n: '02', title: 'Strategy Planning', text: 'We agree on practical priorities that fit your business, customers and budget.' },
  { n: '03', title: 'Setup & Automation', text: 'We put the right digital tools and customer follow-up in place.' },
  { n: '04', title: 'Monthly Growth Monitoring', text: 'We track progress, share a clear report and refine the plan over time.' },
];
const industries = [
  { icon: HeartPulse, label: 'Healthcare clinics', note: 'Be the trusted choice nearby' },
  { icon: ShieldCheck, label: 'Dentists', note: 'Help patients find your practice' },
  { icon: Building2, label: 'Real estate', note: 'Turn local interest into leads' },
  { icon: Zap, label: 'Gyms & fitness', note: 'Keep memberships moving' },
  { icon: Sparkles, label: 'Salons & wellness', note: 'Fill the appointment book' },
  { icon: Users, label: 'Coaching institutes', note: 'Reach the next batch' },
];
const benefits = [
  { icon: MapPin, title: 'Affordable Monthly Plans', text: 'Straightforward monthly packages make digital growth easier to plan for.' },
  { icon: Bot, title: 'AI-Powered Solutions', text: 'Use practical AI and automation to support customer engagement.' },
  { icon: Zap, title: 'Fast Setup', text: 'Get the essentials in place quickly, with a clear plan from day one.' },
  { icon: Building2, title: 'Local Business Focus', text: 'Our work is shaped around local customers and the way businesses grow in Tier 2 cities.' },
  { icon: BarChart3, title: 'Transparent Reporting', text: 'See what work was done and how your online presence is progressing.' },
  { icon: MessageCircle, title: 'Dedicated Support', text: 'Get responsive, straightforward help from a team that knows your goals.' },
];
const faqs = [
  { q: 'How long does setup take?', a: 'Timing depends on the services you choose and what is already in place. We will agree on a practical timeline after your free digital audit.' },
  { q: 'Do I need a website?', a: 'Not always. A website can help customers understand your services and enquire, but we will recommend one only if it supports your goals.' },
  { q: 'Can you help with Google Reviews?', a: 'Yes. We can help you create a consistent review request process and respond to reviews professionally.' },
  { q: 'Do you provide monthly reports?', a: 'Yes. Your plan includes a monthly report showing the work completed and progress on your online presence.' },
  { q: 'Are contracts required?', a: 'We will explain the scope and any agreed terms before work begins. Monthly packages are presented clearly, with no unexpected commitments.' },
];

function Logo({ footer = false }: { footer?: boolean }) {
  const logoLabel = 'Dash Integrated Solutions home';
  if (footer) {
    return <a href="#top" className="inline-flex" aria-label={logoLabel}>
      <img
        src={`${import.meta.env.BASE_URL}dash-logo-lockup.png`}
        alt=""
        data-testid="img-dash-logo-footer"
        className="h-auto w-[174px] rounded-[10px]"
      />
    </a>;
  }

  return <a href="#top" className="inline-flex items-center" aria-label={logoLabel}>
    <img
      src={`${import.meta.env.BASE_URL}dash-logo-lockup.png`}
      alt=""
      data-testid="img-dash-logo-header"
      className="h-[68px] w-auto max-w-[132px] rounded-[10px]"
    />
  </a>;
}

function HeroVisual() {
  return <div className="relative mx-auto aspect-[1.12] w-full max-w-[540px]" aria-label="Illustration of local business growth dashboard" role="img">
    <div className="absolute inset-[8%] rounded-[42%] bg-[#e0e9d8]" />
    <div className="absolute right-[5%] top-[8%] h-16 w-16 rounded-full border-[10px] border-[#a7c7b6]" />
    <div className="absolute left-[8%] top-[16%] h-3 w-3 rounded-full bg-[#d9905d]" />
    <div className="absolute bottom-[9%] left-[8%] h-2.5 w-2.5 rounded-full bg-[#246c60]" />
    <div className="absolute inset-x-[11%] top-[18%] rounded-[24px] border border-[#f3f0e7] bg-[#fffefa] p-4 shadow-[0_24px_65px_rgba(35,66,56,.14)] sm:p-5">
      <div className="flex items-center justify-between border-b border-[#e9eef3] pb-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#8a99a8]">Local growth snapshot</p>
          <p className="mt-1 font-display text-[17px] font-extrabold text-[#1d2c3e]">Your business, in view</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7f2fb] text-[#1764b5]"><BarChart3 size={18} /></span>
      </div>
      <div className="grid grid-cols-2 gap-3 py-4">
        <div className="rounded-2xl bg-[#f3f8fc] p-3">
          <div className="flex items-center gap-2 text-[#6e8193]"><Search size={14} /><span className="text-[10px] font-semibold">Local discovery</span></div>
          <div className="mt-2 flex items-end gap-2"><span className="font-display text-[23px] font-extrabold text-[#22354a]">Seen</span><span className="mb-1 flex items-center text-[10px] font-bold text-[#228774]"><ArrowUpRight size={12} /> locally</span></div>
        </div>
        <div className="rounded-2xl bg-[#eff8f5] p-3">
          <div className="flex items-center gap-2 text-[#6e8193]"><MessageCircle size={14} /><span className="text-[10px] font-semibold">Enquiry path</span></div>
          <div className="mt-2 flex items-end gap-2"><span className="font-display text-[23px] font-extrabold text-[#22354a]">Open</span><span className="mb-1 text-[10px] font-bold text-[#228774]">to customers</span></div>
        </div>
      </div>
      <div className="rounded-2xl border border-[#e9eef3] p-3">
        <div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold text-[#52647a]">A stronger online presence</span><span className="text-[9px] font-semibold text-[#8a99a8]">YOUR NEXT STEPS</span></div>
        <div className="flex h-[72px] items-end gap-2 px-1">
          {[29, 43, 38, 53, 48, 67, 62, 79, 71, 94, 86, 100].map((height, i) => <span key={i} className={`flex-1 rounded-t-[5px] ${i > 8 ? 'bg-[#1764b5]' : 'bg-[#a9cee9]'}`} style={{ height: `${height}%` }} />)}
        </div>
        <div className="mt-2 flex justify-between text-[9px] font-medium text-[#9ba8b6]"><span>Get found</span><span>Earn trust</span><span>Get enquiries</span></div>
      </div>
    </div>
    <div className="absolute -left-[1%] bottom-[22%] flex items-center gap-2 rounded-2xl border border-[#e7edf3] bg-white px-3 py-2.5 shadow-[0_12px_34px_rgba(29,62,97,.13)]">
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e5f5f0] text-[#218675]"><Check size={16} /></span>
      <span><b className="block text-[11px] text-[#22354a]">Made for local growth</b><small className="text-[9px] text-[#7c8c9e]">Clear plan. Real support.</small></span>
    </div>
    <div className="absolute -right-[2%] bottom-[16%] flex h-[58px] w-[58px] items-center justify-center rounded-[19px] bg-[#1764b5] text-white shadow-[0_14px_28px_rgba(23,100,181,.26)]"><TrendingUp size={25} /></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const closeMenu = () => setMenuOpen(false);

  const submitAudit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const fields = ['Business name', 'Contact person', 'Phone', 'Email', 'City', 'Business type'];
    const body = fields.map((label) => `${label}: ${String(form.get(label.toLowerCase().replace(/ /g, '-')) ?? '')}`).join('\n');
    const subject = `Free digital audit request — ${String(form.get('business-name') ?? '')}`;
    const endpoint = import.meta.env.VITE_AUDIT_FORM_ENDPOINT as string | undefined;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: form });
        if (response.ok) {
          setFormMessage('Thanks — your audit request has been sent. We’ll be in touch soon.');
          formElement.reset();
          return;
        }
      } catch {
        // A configured form provider can be unavailable; never imply it received the request.
      }
    }
    setFormMessage(`Your email app should open with the audit details ready. If it does not, email ${contactEmail} directly.`);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const navItems = [['Services', '#services'], ['How it works', '#how-it-works'], ['Industries', '#industries'], ['Pricing', '#pricing'], ['FAQs', '#faqs']];
  return (
    <div id="top" className="min-h-[100dvh] overflow-hidden bg-[#f7f9fb] text-[#253447]">
      <header className="sticky top-0 z-50 border-b border-[#e8edf2] bg-[#fbfcfd]/95 backdrop-blur-xl">
        <div className="section-wrap flex h-[72px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={label} className="nav-link" href={href}>{label}</a>)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href={`mailto:${contactEmail}`} className="text-xs font-semibold text-[#66778b]">{contactEmail}</a>
            <a href="#audit" className="btn-primary !px-[18px] !py-[11px] !text-[13px]">Get a free audit <ArrowRight size={15} /></a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dfe7ee] bg-white text-[#253447] lg:hidden">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#e8edf2] bg-[#fbfcfd] px-5 pb-5 pt-3 lg:hidden" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a onClick={closeMenu} key={label} className="block border-b border-[#edf1f4] py-3 text-sm font-semibold text-[#435369]" href={href}>{label}</a>)}
          <a onClick={closeMenu} href="#audit" className="btn-primary mt-4 w-full">Get a free audit <ArrowRight size={16} /></a>
        </nav>}
      </header>

      <main>
        <section className="hero-grid relative overflow-hidden border-b border-[#e7edf3]">
          <div className="section-wrap grid min-h-[650px] items-center gap-4 py-14 md:grid-cols-[1.03fr_.97fr] md:py-16 lg:min-h-[704px]">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-[620px]">
              <motion.div variants={reveal} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4e5f3] bg-white/80 px-3.5 py-2 text-[11px] font-bold tracking-[.02em] text-[#356188]">
        <span className="h-2 w-2 rounded-full bg-[#c47a4b]" /> Digital growth for businesses in your city
              </motion.div>
              <motion.h1 variants={reveal} className="font-display text-[clamp(2.8rem,6.1vw,5.3rem)] font-extrabold leading-[1.02] tracking-[-.065em] text-[#1b2a3b]">
                Get More Customers From <span className="text-[#1d6d61]">Google, Social Media &amp; AI</span>
              </motion.h1>
              <motion.p variants={reveal} className="mt-6 max-w-[540px] text-[16px] leading-[1.8] text-[#617186] md:text-[17px]">
                We help local businesses improve their online presence, generate leads and automate customer engagement.
              </motion.p>
              <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#audit" className="btn-primary">Book Free Digital Audit <ArrowRight size={17} /></a>
                <a href={businessWhatsAppHref} target="_blank" rel="noopener noreferrer" className="btn-outline">Chat on WhatsApp <MessageCircle size={16} /></a>
              </motion.div>
              <motion.div variants={reveal} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold text-[#78879a]">
                <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#278b78]" /> Straightforward monthly plans</span>
                <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#278b78]" /> Built for local businesses</span>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .15 }} className="relative mt-4 md:mt-0">
              <HeroVisual />
            </motion.div>
          </div>
          <div className="absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#cce8f0]/30 blur-3xl" />
        </section>

        <section className="border-b border-[#e7edf3] bg-white py-14 md:py-[76px]">
          <div className="section-wrap">
            <div className="grid gap-9 md:grid-cols-[.8fr_1.2fr] md:items-end">
              <div><p className="eyebrow">Why online presence matters</p><h2 className="font-display mt-3 max-w-[410px] text-3xl font-extrabold leading-tight tracking-[-.045em] text-[#1e2e40] md:text-[40px]">Why Most Local Businesses Struggle Online</h2></div>
              <p className="max-w-[550px] text-[15px] leading-7 text-[#6b7b8f]">Customers are already looking online. When your digital presence is incomplete or inconsistent, they may find someone else first. We help close that gap.</p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .16 }} variants={stagger} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map((item) => <motion.article variants={reveal} key={item.n} className="card-lift rounded-[20px] border border-[#e3eaf0] bg-[#fbfcfd] p-5">
                <div className="flex items-center justify-between"><span className="font-display text-[11px] font-extrabold tracking-[.1em] text-[#a1afbd]">{item.n}</span><item.icon size={18} className="text-[#4a83b2]" /></div>
                <h3 className="font-display mt-7 text-[16px] font-extrabold tracking-[-.02em] text-[#283a4f]">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#77869a]">{item.text}</p>
              </motion.article>)}
            </motion.div>
            <div className="mt-8 flex justify-center"><a href="#audit" className="btn-primary">Book a Free Digital Audit <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-[#f2f6f9] py-16 md:py-[92px]">
          <div className="section-wrap">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">What we do</p><h2 className="font-display mt-3 max-w-[540px] text-3xl font-extrabold leading-[1.12] tracking-[-.05em] text-[#1e2e40] md:text-[43px]">Digital Growth Services</h2></div>
              <p className="max-w-[350px] text-sm leading-6 text-[#6b7b8f]">Start with what you need today. Build on it as your business grows.</p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }} variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => <motion.article variants={reveal} key={service.title} className="card-lift rounded-[22px] border border-[#e1e8ee] bg-white p-6 md:p-7">
                <span className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${i % 2 ? 'bg-[#e6f4f1] text-[#268a79]' : 'bg-[#e9f2fa] text-[#1764b5]'}`}><service.icon size={20} strokeWidth={1.8} /></span>
                <h3 className="font-display mt-5 text-[17px] font-extrabold tracking-[-.03em] text-[#26384c]">{service.title}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.75] text-[#738297]">{service.text}</p>
                <a href="#audit" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#1764b5] hover:gap-3">Learn More <ArrowRight size={14} /></a>
              </motion.article>)}
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-white py-16 md:py-[92px]">
          <div className="section-wrap">
            <div className="text-center"><p className="eyebrow">A simpler way forward</p><h2 className="font-display mx-auto mt-3 max-w-[610px] text-3xl font-extrabold tracking-[-.05em] text-[#1e2e40] md:text-[43px]">How It Works</h2></div>
            <div className="relative mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-[21px] hidden border-t border-dashed border-[#c8d9e6] lg:block" />
              {steps.map((step) => <article key={step.n} className="relative">
                <span className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#bed8eb] bg-[#f2f8fc] font-display text-[12px] font-extrabold text-[#1764b5]">{step.n}</span>
                <h3 className="font-display mt-5 text-[16px] font-extrabold text-[#293b50]">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.75] text-[#758499]">{step.text}</p>
              </article>)}
            </div>
            <div className="mt-10 text-center"><a href="#audit" className="btn-primary">Book Free Consultation <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="industries" className="scroll-mt-20 border-y border-[#e4ebf1] bg-[#edf4f8] py-16 md:py-[82px]">
          <div className="section-wrap grid gap-10 md:grid-cols-[.75fr_1.25fr] md:items-center">
            <div><p className="eyebrow">Who we work with</p><h2 className="font-display mt-3 max-w-[430px] text-3xl font-extrabold leading-tight tracking-[-.05em] text-[#1e2e40] md:text-[42px]">Industries We Serve</h2><p className="mt-4 max-w-[400px] text-sm leading-7 text-[#6e7f92]">From a first appointment to a familiar neighbourhood name, your next customer is searching nearby.</p><a href="#audit" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1764b5]">Let’s talk about your business <ArrowRight size={16} /></a></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((item) => <div key={item.label} className="rounded-[18px] border border-[#dce6ed] bg-white p-4 sm:p-5">
                <item.icon size={20} className="text-[#1764b5]" strokeWidth={1.8} /><p className="font-display mt-4 text-[13px] font-extrabold leading-snug text-[#2b3e53]">{item.label}</p><p className="mt-1.5 text-[10px] leading-relaxed text-[#8694a4]">{item.note}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#1f3349] py-16 text-white md:py-[84px]">
          <div className="section-wrap">
            <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr] md:items-end">
              <div><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a6c8e4]">The Dash difference</p><h2 className="font-display mt-3 max-w-[400px] text-3xl font-extrabold leading-tight tracking-[-.045em] md:text-[42px]">Why Choose Us</h2></div>
              <p className="max-w-[480px] text-[14px] leading-7 text-[#c0ccda]">Good digital growth should feel clear, considered and connected to the real work of running your business.</p>
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => <article key={benefit.title} className="flex gap-4 border-t border-white/15 pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a9d1ee]"><benefit.icon size={17} /></span>
                <div><h3 className="font-display text-[14px] font-bold text-white">{benefit.title}</h3><p className="mt-1.5 text-[12px] leading-[1.7] text-[#b8c6d5]">{benefit.text}</p></div>
              </article>)}
            </div>
            <div className="mt-9"><a href="#audit" className="btn-outline !border-white/30 !text-white hover:!bg-white/10">Book Free Consultation <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-20 bg-[#f7f9fb] py-16 md:py-[92px]">
          <div className="section-wrap">
            <div className="mx-auto max-w-[620px] text-center"><p className="eyebrow">Simple monthly plans</p><h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-.05em] text-[#1e2e40] md:text-[43px]">Our Packages</h2><p className="mt-4 text-sm leading-6 text-[#718196]">Choose a starting point. We will make sure the plan fits your business before anything begins.</p></div>
            <div className="mt-11 grid items-stretch gap-4 lg:grid-cols-3">
              {packages.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-[24px] border p-6 md:p-7 ${plan.featured ? 'border-[#1764b5] bg-white shadow-[0_22px_60px_rgba(23,100,181,.15)] lg:-my-3 lg:py-10' : 'border-[#e1e8ee] bg-white'}`}>
                {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1764b5] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Most popular</span>}
                <div className="flex items-center justify-between"><p className="font-display text-[15px] font-extrabold text-[#26384c]">{plan.name}</p><span className="rounded-full bg-[#eff5f9] px-2.5 py-1 text-[10px] font-bold text-[#70849a]">Monthly</span></div>
                <p className="mt-2 text-[12px] text-[#7a899c]">{plan.descriptor}</p>
                <div className="mt-6 flex items-baseline gap-1"><span className="font-display text-[34px] font-extrabold tracking-[-.055em] text-[#203349]">₹{plan.price}</span><span className="text-xs text-[#8997a6]">/ month</span></div>
                <div className="my-5 h-px bg-[#e9eef2]" />
                <ul className="flex-1 space-y-3">
                  {plan.items.map((item) => <li key={item} className="flex gap-2.5 text-[12px] leading-[1.6] text-[#5e6f83]"><Check size={15} className="mt-0.5 shrink-0 text-[#218b79]" />{item}</li>)}
                </ul>
                <a href="#audit" className={plan.featured ? 'btn-primary mt-7 w-full !py-3 text-sm' : 'btn-outline mt-7 w-full !py-3 text-sm'}>Book Free Consultation <ArrowRight size={15} /></a>
              </article>)}
            </div>
            <p className="mt-5 text-center text-[11px] leading-5 text-[#8794a3]">Ad spend and any third-party subscription costs are separate. Final scope is confirmed with you before work starts.</p>
          </div>
        </section>

        <section id="audit" className="scroll-mt-20 bg-[#eaf2f7] py-16 md:py-[92px]">
          <div className="section-wrap grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
            <div>
              <p className="eyebrow">Start with clarity</p>
              <h2 className="font-display mt-3 max-w-[480px] text-3xl font-extrabold leading-[1.13] tracking-[-.05em] text-[#1e2e40] md:text-[46px]">Let’s find the next opportunity for your business.</h2>
              <p className="mt-4 max-w-[430px] text-[14px] leading-7 text-[#6d7f92]">Tell us a little about your business. We’ll take a look at your digital presence and get back to you with a practical starting point.</p>
              <div className="mt-7 space-y-3 text-[13px] text-[#4e6278]">
                <a className="flex items-center gap-3 font-semibold hover:text-[#1764b5]" href={`mailto:${contactEmail}`}><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1764b5]"><Send size={16} /></span>{contactEmail}</a>
                <a href={businessPhoneHref} className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1764b5]"><MessageCircle size={16} /></span>{businessPhone}</a>
              </div>
              <p className="mt-6 max-w-[350px] text-[11px] leading-5 text-[#8a98a7]">Prefer WhatsApp? Message us directly or use the audit form to share your business details.</p>
            </div>
            <form onSubmit={submitAudit} className="rounded-[25px] border border-white bg-white p-5 shadow-[0_20px_60px_rgba(26,62,103,.1)] sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4"><div><p className="font-display text-xl font-extrabold tracking-[-.035em] text-[#23364b]">Request your free digital audit</p><p className="mt-1 text-xs text-[#7a899a]">A few details and we’ll take it from there.</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f2f9] text-[#1764b5]"><WandSparkles size={19} /></span></div>
              <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
                <label className="block text-[11px] font-bold text-[#52657a]">Business name <span className="text-[#d46b62]">*</span><input required name="business-name" data-testid="input-business-name" autoComplete="organization" placeholder="e.g. Sunrise Dental Care" className="mt-1.5 w-full rounded-xl border border-[#dce5ec] bg-[#fbfcfd] px-3.5 py-3 text-[13px] font-normal text-[#253447] outline-none transition focus:border-[#6da4d2] focus:ring-2 focus:ring-[#dcecf8]" /></label>
                <label className="block text-[11px] font-bold text-[#52657a]">Contact person <span className="text-[#d46b62]">*</span><input required name="contact-person" data-testid="input-contact-person" autoComplete="name" placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-[#dce5ec] bg-[#fbfcfd] px-3.5 py-3 text-[13px] font-normal text-[#253447] outline-none transition focus:border-[#6da4d2] focus:ring-2 focus:ring-[#dcecf8]" /></label>
                <label className="block text-[11px] font-bold text-[#52657a]">Phone <span className="text-[#d46b62]">*</span><input required type="tel" name="phone" data-testid="input-phone" autoComplete="tel" placeholder="+91 XXXXX XXXXX" className="mt-1.5 w-full rounded-xl border border-[#dce5ec] bg-[#fbfcfd] px-3.5 py-3 text-[13px] font-normal text-[#253447] outline-none transition focus:border-[#6da4d2] focus:ring-2 focus:ring-[#dcecf8]" /></label>
                <label className="block text-[11px] font-bold text-[#52657a]">Email <span className="text-[#d46b62]">*</span><input required type="email" name="email" data-testid="input-email" autoComplete="email" placeholder="you@business.com" className="mt-1.5 w-full rounded-xl border border-[#dce5ec] bg-[#fbfcfd] px-3.5 py-3 text-[13px] font-normal text-[#253447] outline-none transition focus:border-[#6da4d2] focus:ring-2 focus:ring-[#dcecf8]" /></label>
                <label className="block text-[11px] font-bold text-[#52657a]">City <span className="text-[#d46b62]">*</span><input required name="city" data-testid="input-city" autoComplete="address-level2" placeholder="Your city" className="mt-1.5 w-full rounded-xl border border-[#dce5ec] bg-[#fbfcfd] px-3.5 py-3 text-[13px] font-normal text-[#253447] outline-none transition focus:border-[#6da4d2] focus:ring-2 focus:ring-[#dcecf8]" /></label>
                <label className="block text-[11px] font-bold text-[#52657a]">Business type <span className="text-[#d46b62]">*</span><span className="relative mt-1.5 block"><select required name="business-type" data-testid="select-business-type" defaultValue="" className="w-full appearance-none rounded-xl border border-[#dce5ec] bg-[#fbfcfd] px-3.5 py-3 pr-9 text-[13px] font-normal text-[#65768a] outline-none transition focus:border-[#6da4d2] focus:ring-2 focus:ring-[#dcecf8]"><option value="" disabled>Select your industry</option><option>Clinic or dentist</option><option>Real estate</option><option>Gym or fitness</option><option>Salon or wellness</option><option>Coaching institute</option><option>Local retail</option><option>Other local business</option></select><ChevronDown size={15} className="pointer-events-none absolute right-3 top-3.5 text-[#7c8d9e]" /></span></label>
              </div>
              <button type="submit" data-testid="button-submit-audit" className="btn-primary mt-5 w-full">Request my free audit <ArrowRight size={16} /></button>
              <p aria-live="polite" data-testid="status-audit-form" className="mt-3 min-h-4 text-center text-[10px] leading-4 text-[#708195]">{formMessage || `Submitting opens a pre-filled email to ${contactEmail}. Nothing is sent automatically.`}</p>
            </form>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-20 bg-white py-16 md:py-[88px]">
          <div className="section-wrap grid gap-9 md:grid-cols-[.72fr_1.28fr]">
            <div><p className="eyebrow">Good questions</p><h2 className="font-display mt-3 max-w-[340px] text-3xl font-extrabold leading-tight tracking-[-.05em] text-[#1e2e40] md:text-[42px]">Clear answers. No agency-speak.</h2><p className="mt-4 max-w-[300px] text-sm leading-6 text-[#758499]">Still wondering about something? We’re happy to talk it through.</p><a href={`mailto:${contactEmail}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1764b5]">Ask us directly <ArrowRight size={15} /></a></div>
            <div className="divide-y divide-[#e7edf2] border-y border-[#e7edf2]">
              {faqs.map((faq) => <details key={faq.q} className="faq-item group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[14px] font-bold text-[#2a3b4f] marker:hidden">{faq.q}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eff5f9] text-[#1764b5]"><ArrowDownRight size={15} /></span></summary>
                <p className="max-w-[640px] pt-3 pr-8 text-[13px] leading-[1.8] text-[#708095]">{faq.a}</p>
              </details>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-[#e3ebf1] bg-[#f2f6f9] py-14 md:py-[76px]">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-.05em] text-[#1e2e40] md:text-[40px]">Let’s grow your local presence.</h2>
              <p className="mt-4 max-w-[460px] text-sm leading-7 text-[#6e7f92]">Talk with Dash Integrated Solutions about digital visibility, lead generation and customer automation for your business.</p>
              <a href={`mailto:${contactEmail}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1764b5]"><Send size={16} /> {contactEmail}</a>
              <a href={businessPhoneHref} className="mt-3 flex items-center gap-2 text-sm text-[#52657a]"><MessageCircle size={16} /> {businessPhone}</a>
            </div>
            <div className="rounded-[24px] border border-[#e0e8ee] bg-white p-6 shadow-[0_16px_45px_rgba(26,62,103,.07)] sm:p-8">
              <h3 className="font-display text-lg font-extrabold text-[#25384c]">Choose how to get in touch</h3>
              <p className="mt-2 text-sm leading-6 text-[#738297]">Message us on WhatsApp, call us, or use the audit form to request a free digital review.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={businessWhatsAppHref} target="_blank" rel="noopener noreferrer" className="btn-primary"><SiWhatsapp size={17} aria-hidden="true" /> Chat on WhatsApp</a>
                <a href={`mailto:${contactEmail}`} className="btn-outline"><Send size={15} /> Email Dash</a>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-[#edf1f4] pt-5" aria-label="Social media profile links coming soon">
                <span title="Instagram profile link not supplied" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff5f9] text-[#426b8c]"><Instagram size={17} aria-hidden="true" /></span>
                <span title="Facebook profile link not supplied" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff5f9] text-[#426b8c]"><Facebook size={17} aria-hidden="true" /></span>
                <span className="text-xs text-[#8290a0]">Social profiles coming soon</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#dcebf5] py-10">
          <div className="section-wrap flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div><p className="font-display text-[22px] font-extrabold tracking-[-.04em] text-[#20364c]">Your next customer is already looking.</p><p className="mt-1 text-sm text-[#61788e]">Make it easier for them to find you.</p></div>
            <a href="#audit" className="btn-primary">Start with a free audit <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="bg-[#172b40] pb-7 pt-11 text-white">
        <div className="section-wrap">
          <div className="grid gap-8 border-b border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.9fr]">
            <div><Logo footer /><p className="mt-4 max-w-[330px] text-[12px] leading-6 text-[#b3c1d0]">Helping Local Businesses Grow Through Digital &amp; AI Solutions</p></div>
            <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#8fa9bf]">Explore</p><div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] text-[#d1dce6]">{[['Home', '#top'], ['Services', '#services'], ['Packages', '#pricing'], ['Contact', '#contact']].map(([label, href]) => <a key={label} className="hover:text-white" href={href}>{label}</a>)}</div></div>
            <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#8fa9bf]">Say hello</p><a className="text-[12px] font-semibold text-[#e0eaf3] hover:text-white" href={`mailto:${contactEmail}`}>{contactEmail}</a><a href={businessPhoneHref} className="mt-2 block text-[12px] text-[#b3c1d0]">{businessPhone}</a><div className="mt-4 flex items-center gap-2" aria-label="Social media profiles not configured"><span title="Instagram profile link not supplied" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e0eaf3]"><Instagram size={15} aria-hidden="true" /></span><span title="Facebook profile link not supplied" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e0eaf3]"><Facebook size={15} aria-hidden="true" /></span><span className="text-[10px] text-[#9db0c2]">Social profiles coming soon</span></div></div>
          </div>
          <div className="flex flex-col justify-between gap-2 pt-5 text-[10px] text-[#9db0c2] sm:flex-row"><span>© 2026 Dash Integrated Solutions. All rights reserved.</span><span>Local roots. Digital reach.</span></div>
        </div>
      </footer>
      <a href={businessWhatsAppHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Dash Integrated Solutions on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1764b5] text-white shadow-[0_10px_30px_rgba(23,100,181,.3)] transition hover:-translate-y-1 md:hidden"><SiWhatsapp size={21} /></a>
    </div>
  );
}

export default App;
