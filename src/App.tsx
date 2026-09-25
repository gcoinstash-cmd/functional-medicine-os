import React, { useState } from 'react';
import { 
  Activity, Shield, Dna, Stethoscope, Clock, Check, ChevronRight, Calendar, 
  UserCheck, ArrowRight, HeartPulse, Sparkles, Award, Phone, Mail, MapPin, 
  Plus, CheckCircle2, Lock, FileText, FlaskConical, Droplet, Zap
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface Protocol {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  biomarkers: string[];
  duration: string;
  recommendedFor: string;
  image: string;
}

const PROTOCOLS: Protocol[] = [
  {
    id: 'p1',
    name: 'Cellular Epigenetic Reset',
    category: 'LONGEVITY & TELOMERES',
    tagline: 'Comprehensive epigenetic clock analysis with intracellular NAD+ replenishment.',
    price: '$2,450',
    biomarkers: ['DNA Methylation Rate', 'Telomere Length Assay', 'Intracellular NAD+/NADH Ratio', 'Mitochondrial Density'],
    duration: '12-Week Guided Cycle',
    recommendedFor: 'Executive cognitive endurance, cellular age reversal, and metabolic renewal.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Neuro-Metabolic & Peptide Core',
    category: 'PEPTIDE OPTIMIZATION',
    tagline: 'Precision peptide sequencing (BPC-157 / TB-500 / CJC-Ipam) with neuro-endocrine mapping.',
    price: '$1,850',
    biomarkers: ['Comprehensive Hormone Cascade', 'Fasting Insulin & HOMA-IR', 'hs-CRP & Neuro-Inflammation', 'IGF-1 Binding Protein'],
    duration: '8-Week Target Cycle',
    recommendedFor: 'Athletic injury acceleration, deep REM architecture, and metabolic plasticity.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    name: 'Microbiome & Autoimmune Defense',
    category: 'GUT AXIS & IMMUNOLOGY',
    tagline: 'Metagenomic whole-genome stool sequencing paired with mucosal barrier restoration.',
    price: '$1,650',
    biomarkers: ['Metagenomic Species Abundance', 'Zonulin Mucosal Permeability', 'Secretory IgA', 'Short-Chain Fatty Acid Profiles'],
    duration: '16-Week Gut Re-Inoculation',
    recommendedFor: 'Chronic systemic fatigue, persistent inflammation, and food tolerance re-engineering.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p4',
    name: 'Cardio-Metabolic Plaque Intercept',
    category: 'PRECISION CARDIOLOGY',
    tagline: 'Cleerly AI coronary plaque volume modeling and lipid sub-fraction fractionation.',
    price: '$2,200',
    biomarkers: ['ApoB & LDL Particle Number', 'Lp(a) Genetic Expression', 'Coronary Plaque Volume Metric', 'Endothelial Glycocalyx Index'],
    duration: 'Annual Longevity Registry',
    recommendedFor: 'Early atherosclerosis prevention, family vascular history, and preventive bypass.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol>(PROTOCOLS[0]);
  const [cart, setCart] = useState<Protocol[]>([]);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [intakeSuccess, setIntakeSuccess] = useState(false);

  const toggleCart = (protocol: Protocol) => {
    if (cart.find(p => p.id === protocol.id)) {
      setCart(cart.filter(p => p.id !== protocol.id));
    } else {
      setCart([...cart, protocol]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIntakeSuccess(true);
    setTimeout(() => {
      setIntakeSuccess(false);
      setIsBookModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#07090c] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Bar Announcement */}
      <div className="bg-[#0b1017] border-b border-emerald-900/30 px-4 py-2 text-center text-xs tracking-wider text-slate-400 flex items-center justify-center space-x-3">
        <span className="flex items-center text-emerald-400 font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5 mr-1" />
          AURA PROTOCOL LONGEVITY FOUNDRY
        </span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span className="hidden sm:inline">Now Accepting Q4 Epigenetic & Biomarker Cohorts</span>
        <span className="text-slate-600">•</span>
        <button 
          onClick={() => setIsAdminOpen(true)}
          className="text-emerald-400 hover:text-emerald-300 font-mono text-xs font-semibold underline ml-2 font-semibold"
        >
          [ STAFF PORTAL ]
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#07090c]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-black font-extrabold shadow-lg shadow-emerald-500/20">
              <Dna className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg text-white font-mono flex items-center gap-1.5">
                AURA<span className="text-emerald-400">PROTOCOL</span>
              </span>
              <p className="text-xs font-semibold tracking-wider tracking-widest text-slate-400 uppercase font-mono">Functional Medicine & Longevity OS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#protocols" className="hover:text-emerald-400 transition-colors">Protocols</a>
            <a href="#biomarkers" className="hover:text-emerald-400 transition-colors">Biomarker Panels</a>
            <a href="#physicians" className="hover:text-emerald-400 transition-colors">Physicians</a>
            <a href="#telehealth" className="hover:text-emerald-400 transition-colors">Telehealth</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-emerald-500/25 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK INTAKE</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>EVIDENCE-BASED CELLULAR LONGEVITY OS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Reverse Biological Decay. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Optimize Every Biomarker.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Standard healthcare waits for symptoms. Aura Protocol maps over 120 cellular endpoints—from epigenetic methylation clocks to metabolomics—delivering bespoke physician-designed longevity roadmaps.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center space-x-2"
              >
                <span>INITIATE CLINICAL INTAKE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#protocols"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>EXPLORE PROTOCOLS</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">120+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Biomarkers Scanned</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">-4.8 yrs</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Avg Epigenetic Reversal</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Physician Monitored</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-emerald-500/40 via-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-[#0b0f15] rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">LIVE TELEMETRY FEED</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono">SECURE TIER-3</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Biological vs Chronological Age</span>
                      <span className="text-emerald-400 font-mono font-bold">-5.2 Years</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full w-[78%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Intracellular NAD+ Level</span>
                      <span className="text-cyan-400 font-mono font-bold">Optimal (94th Percentile)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[94%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">ApoB Vascular Plaque Clearance</span>
                      <span className="text-teal-400 font-mono font-bold">58 mg/dL (Target Met)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full w-[90%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="w-full py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Schedule Baseline Biomarker Scan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocols Section */}
      <section id="protocols" className="py-20 px-4 sm:px-8 bg-[#090d13] border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              CLINICAL ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Standardized Longevity Protocols
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Turnkey outpatient modules designed by board-certified functional physicians. Choose an intensive targeted cycle or comprehensive annual concierge monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROTOCOLS.map((protocol) => {
              const isInCart = !!cart.find(p => p.id === protocol.id);
              return (
                <div 
                  key={protocol.id}
                  className="bg-[#0b0f16] border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={protocol.image} 
                      alt={protocol.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f16] via-transparent to-black/40"></div>
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider font-mono text-emerald-400 uppercase">
                      {protocol.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                          {protocol.name}
                        </h3>
                        <span className="font-mono font-bold text-emerald-400 text-sm">{protocol.price}</span>
                      </div>
                      <p className="text-base text-zinc-200 leading-relaxed line-clamp-2 leading-relaxed mt-2">
                        {protocol.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider block">Key Biomarkers:</span>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {protocol.biomarkers.slice(0, 3).map((bio, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{bio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCart(protocol)}
                        className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                          isInCart 
                            ? 'bg-emerald-500 text-black shadow-md' 
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>ADDED TO PLAN</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-emerald-400" />
                            <span>SELECT PROTOCOL</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Biomarker Architecture / Technology */}
      <section id="biomarkers" className="py-20 px-4 sm:px-8 bg-[#07090c] scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              DIAGNOSTIC PRECISION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Intelligent Clinical Diagnostic Framework
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every patient intake triggers full-panel metabolomic profiling, continuous glucose analysis, autonomic nervous system tone (HRV), and intracellular nutrient assays.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 mt-0.5">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Spectrum Phlebotomy & Cellular Metabolomics</h4>
                  <p className="text-base text-zinc-200 leading-relaxed mt-1">120+ unique biomarkers analyzed at CLIA-certified national reference laboratories.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Real-Time Wearable Biomarker Synchronization</h4>
                  <p className="text-base text-zinc-200 leading-relaxed mt-1">Direct API integration with Oura Ring, Whoop 4.0, Dexcom CGM, and Apple HealthKit.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 mt-0.5">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Board-Certified Longevity Concierge Oversight</h4>
                  <p className="text-base text-zinc-200 leading-relaxed mt-1">Continuous physician oversight with bi-monthly telemetry check-ins and protocol titration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0b0f16] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white">Instant Intake & Protocol Calculator</h3>
            <p className="text-base text-zinc-200 leading-relaxed">Select your focus areas to receive a custom protocol recommendation:</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold font-mono text-slate-300 block mb-2">Primary Optimization Goal:</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-emerald-500 outline-none">
                  <option>Cellular Reversal & Epigenetics (Age 35-65)</option>
                  <option>Executive Focus, Mood & Sleep Architecture</option>
                  <option>Athletic Endurance, Injury Repair & Peptides</option>
                  <option>Gut Permeability & Autoimmune Modulation</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold font-mono text-slate-300 block mb-2">Intake Preference:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-xl text-base font-semibold min-h-[44px] font-bold text-center">
                    In-Clinic Concierge
                  </button>
                  <button className="p-3 bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 rounded-xl text-base font-semibold min-h-[44px] font-bold text-center">
                    At-Home Phlebotomy Kit
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                >
                  CALCULATE PROTOCOL ROADMAP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physicians Section */}
      <section id="physicians" className="py-20 px-4 sm:px-8 bg-[#090d13] border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              CLINICAL LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Institute for Functional Medicine (IFM) Certified Physicians
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Double board-certified medical doctors integrating root-cause pathology with genomics and clinical longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0c1017] border border-slate-800 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" alt="Physician" className="w-full h-64 object-cover rounded-xl mb-4" />
              <span className="text-xs font-semibold tracking-wider font-mono text-emerald-400 uppercase">INTERNAL MEDICINE // IFMCP</span>
              <h4 className="text-lg font-bold text-white mt-1">Dr. Julian Hayes, M.D.</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-2">Stanford Medical School • Lead Longevity Investigator • Metabolic Sirtuin & Telomere Reversal.</p>
            </div>

            <div className="p-6 bg-[#0c1017] border border-slate-800 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1594824813596-f089602a8eb2?auto=format&fit=crop&w=600&q=80" alt="Physician" className="w-full h-64 object-cover rounded-xl mb-4" />
              <span className="text-xs font-semibold tracking-wider font-mono text-cyan-400 uppercase">ENDOCRINOLOGY // ANTI-AGING</span>
              <h4 className="text-lg font-bold text-white mt-1">Dr. Evelyn Vance, M.D.</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-2">Johns Hopkins Medicine • BHRT & Adrenal Axis Lead • Autoimmune Remission Specialist.</p>
            </div>

            <div className="p-6 bg-[#0c1017] border border-slate-800 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" alt="Physician" className="w-full h-64 object-cover rounded-xl mb-4" />
              <span className="text-xs font-semibold tracking-wider font-mono text-indigo-400 uppercase">GASTROENTEROLOGY // MICROBIOME</span>
              <h4 className="text-lg font-bold text-white mt-1">Dr. Marcus Thorne, M.D.</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-2">Harvard Medical Fellow • Gut-Brain Axis & Intestinal Permeability Protocol Director.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section id="telehealth" className="py-20 px-4 sm:px-8 bg-[#07090c] border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto bg-[#0c1017] border border-emerald-900/40 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                50-STATE TELEHEALTH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
                At-Home Blood Draw & Encrypted Telehealth
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Licensed mobile phlebotomists dispatched directly to your home or executive suite. High-definition 45-minute video reviews with your dedicated physician.
              </p>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs rounded-xl transition shadow-lg shadow-emerald-500/20"
                >
                  SCHEDULE AT-HOME PHLEBOTOMY
                </button>
              </div>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Mobile Phlebotomy:</span>
                <span className="text-white font-bold">50 U.S. States Doorstep Dispatch</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Lab Turnaround:</span>
                <span className="text-emerald-400 font-bold">5–7 Business Days Complete Panel</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">HIPAA Compliance:</span>
                <span className="text-cyan-400 font-bold">End-to-End 256-Bit Encrypted Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-[#05070a] px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Dna className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white font-mono tracking-wider">AURA PROTOCOL OS</span>
            </div>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed">
              Clinical-grade Operating System designed for modern functional medicine, longevity clinics, and cellular optimization practices.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Clinical Verticals</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>Epigenetic Longevity</li>
              <li>Peptide Therapies</li>
              <li>Gut & Microbiome</li>
              <li>Executive Health</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">System Compliance</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>HIPAA Compliant</li>
              <li>Supabase Row Level Security</li>
              <li>CLIA Certified Lab Routing</li>
              <li>256-Bit Vault Encryption</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-mono text-white text-xs uppercase tracking-wider">Staff Administration</h5>
            <p className="text-xs font-semibold text-slate-400">
              Access the clinical telemetry portal with the 1-click bypass passkey:
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 font-mono text-xs rounded-xl transition-all"
            >
              Staff Portal (/admin)
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-300">
          <div>© 2026 Aura Protocol OS. All Rights Reserved. Turnkey Clinical Operating System.</div>
          <div className="mt-2 sm:mt-0 font-mono text-emerald-400">Passkey: functional2026</div>
        </div>
      </footer>

      {/* Modals */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Booking Modal */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0b0f16] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl">
            <button 
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              ✕
            </button>

            {!intakeSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Book Initial Clinical Intake</h3>
                    <p className="text-base text-zinc-200 leading-relaxed">Select consultation time and physician review</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Full Legal Name</label>
                  <input required placeholder="Elena Rostova" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-emerald-500 outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Email</label>
                    <input required type="email" placeholder="patient@example.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Phone</label>
                    <input required type="tel" placeholder="+1 (555) 019-2834" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-emerald-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Desired Intake Protocol</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-emerald-500 outline-none">
                    <option>Cellular Epigenetic Reset ($2,450)</option>
                    <option>Neuro-Metabolic & Peptide Core ($1,850)</option>
                    <option>Microbiome & Autoimmune Defense ($1,650)</option>
                    <option>Cardio-Metabolic Plaque Intercept ($2,200)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-base font-semibold min-h-[44px] tracking-wider transition-all shadow-lg shadow-emerald-500/25 mt-4"
                >
                  CONFIRM INTAKE APPOINTMENT
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Intake Confirmed!</h4>
                <p className="text-base text-zinc-200 leading-relaxed max-w-xs mx-auto">
                  Your clinical packet and lab requisition forms have been dispatched. Check your email for login credentials.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
