/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, MessageCircle, Grid, ExternalLink, Code, Video, Palette, Megaphone, Lightbulb, Quote, X, ChevronLeft, ChevronRight, Download, Share2, ArrowLeft, Video as VideoIcon, Phone, MoreVertical, Smile, Paperclip, Camera, Mic, Send, ShieldAlert, ArrowUpRight } from 'lucide-react';

// Data
const projects = [
  { name: "Free Fire Tournament", url: "https://freefire.zone.id/", tags: ["Gaming"], restricted: false },
  { name: "OpenBazaar", url: "https://openbazaar.vercel.app/#/", tags: ["Market"], restricted: false },
  { name: "AI Studio", url: "https://saqibaistudio.vercel.app/", tags: ["AI"], restricted: false },
  { name: "Food Website", url: "https://food-one-jade.vercel.app/#/", tags: ["E-commerce"], restricted: false },
  { name: "Premium Shoes", url: "https://shoes-91zl.vercel.app/", tags: ["Fashion"], restricted: false },
  { name: "Fashion Hub", url: "https://shoes.zone.id", tags: ["Style"], restricted: false },
  { name: "Unban Tool", url: "https://Unban.zone.id", tags: ["Utility"], restricted: false },
  { name: "Tech AI", url: "https://techai.zone.id", tags: ["Tech"], restricted: false },
  { name: "Free Hosting", url: "https://techai1.kesug.com/", tags: ["Web"], restricted: true }, 
  { name: "Tool Kit Gen", url: "https://techai.ct.ws/", tags: ["Dev Tools"], restricted: true }, 
  { name: "Cam + Loc", url: "https://saqib242.ct.ws/", tags: ["Security"], restricted: true }, 
  { name: "Social Tool", url: "https://follower-woz5.vercel.app/", tags: ["Growth"], restricted: false }
];

const profile = {
  name: "Muhammad Saqib",
  shortName: "SAQIB",
  title: "Creative Visual Artist",
  age: "17 Years",
  location: "Pakistan, FSD",
  phone: "0347-8936242",
  email: "mrsaqib242242@gmail.com",
  quote: "Success is not just what you accomplish in your life, it's about what you inspire others to do.",
  profileImage: "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
  socials: {
    whatsapp: "https://wa.me/923478936242",
    facebook: "https://www.facebook.com/profile.php?id=100085188689033",
    tiktok: "https://www.tiktok.com/@mr_saqib_242",
    instagram: "https://www.instagram.com/mr_saqib242",
  }
};

const gallery = [
  "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573550507_ArSSmUT0tW.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573642529_UEEpMXFEkV.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573647809_L4RIsxMgI.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573652854__LqIeAU47.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573659591_abaSpAF-y.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573669146_5z2ap9EbK.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573674849_RvEzQQfNI.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573679202_aZrkl8hRt.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573689483_NnwuSUKqm.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573697274_CP3034fDP.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573705488_jYpVaM2u0.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575063823_VKv0h9E-k.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575091370_Eff9-yBbl.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575128883_e-W-AMj3q.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575146572_S9cSoOYEd.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575153097_cNAjcwYjl.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575206893_2JJlY1Wm0.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575218262_6SqMS7ijo.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575233008_FM9BCgwYX.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575235727_gOIsiMEMW.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575240340_5tz9dWXNo.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575245369_aFwAR5G1A.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575256985_nCso21_yg.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575261320_xDKXsGy9j.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575265565_APidCqJd2.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575273776_12t6fSWUNF.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575281292_KWCWQm1tp.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575289386_Ohy6x5nR7.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575387302_iPzMxeVnf.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575391677_bsAlvqZL9.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575400809_AMhNzr8n3.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575407874_LewPrAdHC.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575415857_lNqkpn9Iz.jpg"
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{text: string, time: string, isMe: boolean}[]>([
    { text: "Assalam-o-Alaikum! Main Saqib hoon. Aap mujhse yahan baat kar sakte hain.", time: "11:45 AM", isMe: false }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Device detection and redirection
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    
    // If it's not a mobile device and screen is large, redirect to desktop site
    if (!isMobile && !isSmallScreen) {
      window.location.replace('https://mrsaqib.vercel.app/');
    }
  }, []);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, isChatOpen]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add message to UI
    setChatHistory(prev => [...prev, { text: chatMessage, time, isMe: true }]);
    
    // Redirect to actual WhatsApp after a short delay
    const encodedText = encodeURIComponent(chatMessage);
    const whatsappUrl = `https://wa.me/923478936242?text=${encodedText}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setChatMessage('');
      setTimeout(() => setIsChatOpen(false), 500);
    }, 600);
  };

  const handleChatKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % gallery.length : null));
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : null));
  };

  const downloadImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const url = gallery[lightboxIndex];
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `Saqib_Image_${lightboxIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(url, '_blank');
    }
  };

  const shareImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const url = gallery[lightboxIndex];
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Saqib Visuals',
          text: 'Check out this amazing work by Saqib!',
          url: url
        });
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f6] font-sans text-gray-800 pb-12 selection:bg-blue-200">
      {/* Header */}
      <header className="flex items-center justify-between p-4 sticky top-0 bg-[#f4f4f6]/90 backdrop-blur-md z-50">
        <h1 className="font-cursive text-3xl font-bold text-gray-800 tracking-tight">{profile.name}</h1>
        <div className="flex gap-2">
          <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center hover:bg-green-50 transition-colors">
            <WhatsAppIcon />
          </a>
          <a href={profile.socials.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-black text-black flex items-center justify-center hover:bg-gray-100 transition-colors">
            <TikTokIcon />
          </a>
        </div>
      </header>

      <main className="px-4 max-w-md mx-auto space-y-8">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rgb-card-container"
        >
          <div className="rgb-inner-card p-6 flex flex-col items-center relative overflow-hidden">
            
            {/* Profile Image */}
            <div className="profile-orbit relative z-10">
              <div className="profile-img-container rounded-full overflow-hidden border-4 border-white shadow-xl w-32 h-32">
                <img src={profile.profileImage} alt={profile.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Badge */}
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full mt-5 tracking-wider uppercase">
              Verified Profile
            </span>

            {/* Name & Title */}
            <h2 className="text-5xl font-black mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              {profile.shortName}
            </h2>
            <p className="text-gray-500 italic mt-1 font-medium">{profile.title}</p>

            {/* Info Grid */}
            <div className="flex w-full justify-around mt-6 text-center">
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Age</p>
                <p className="font-bold text-gray-900">{profile.age}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</p>
                <p className="font-bold text-gray-900">{profile.location}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone</p>
              <p className="font-bold text-blue-600 text-lg">{profile.phone}</p>
            </div>

            {/* Buttons */}
            <div className="w-full space-y-3 mt-6">
              <a href="#about" className="w-full bg-[#007AFF] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 active:scale-95 transition-transform">
                <Info size={20} /> More About Saqib
              </a>
              <button onClick={() => setIsChatOpen(true)} className="w-full bg-[#25D366] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 active:scale-95 transition-transform">
                <MessageCircle size={20} /> Message Saqib
              </button>
            </div>

            {/* Quote */}
            <div className="mt-10 relative bg-white/80 backdrop-blur-md p-6 rounded-2xl w-full border border-white/60 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full shadow-lg shadow-blue-500/30 border-[3px] border-white z-20">
                <Quote className="text-white fill-white/30" size={22} />
              </div>
              <p className="text-[14px] text-gray-700 italic text-center relative z-10 font-medium leading-relaxed pt-3">
                "{profile.quote}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Recent Work Gallery */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="pt-4"
        >
          <div className="rgb-card-container">
            <div className="rgb-inner-card p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Recent Work</h2>
                  <div className="h-1.5 w-12 bg-blue-600 mt-1 rounded-full"></div>
                </div>
                <button className="flex items-center gap-1.5 text-gray-400 text-xs font-bold tracking-wider uppercase hover:text-gray-600 transition-colors">
                  <Grid size={14} /> Explore
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {gallery.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + ((i % 6) * 0.05) }}
                    className="overflow-hidden rounded-2xl shadow-sm bg-gray-200 aspect-[4/5] cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <img src={img} alt={`Work ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* About / Skills Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pt-8"
        >
          <div className="rgb-card-container">
            <div className="rgb-inner-card p-6 space-y-8">
               <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">About Me</h2>
              <div className="h-1.5 w-12 bg-purple-600 mt-1 rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed text-sm">
                I am a passionate and motivated learner with a strong interest in modern technology and creativity. I enjoy exploring new tools, building digital solutions, and creating engaging visual content. I believe in continuous learning and using technology to create meaningful digital experiences.
              </p>
           </div>

           <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'AI Development', icon: <Code size={14} /> },
                  { name: 'Web Development', icon: <ExternalLink size={14} /> },
                  { name: 'Video Editing', icon: <Video size={14} /> },
                  { name: 'Graphic Design', icon: <Palette size={14} /> },
                  { name: 'Digital Marketing', icon: <Megaphone size={14} /> },
                  { name: 'Creative Thinking', icon: <Lightbulb size={14} /> },
                ].map((skill, i) => (
                  <span key={i} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
           </div>

           {/* Websites */}
           <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">My Website</h3>
              <div className="space-y-3">
                <a href="https://techai.zone.id/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors group">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Main Website</p>
                    <p className="text-xs text-gray-500">techai.zone.id</p>
                  </div>
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
           </div>

           {/* Social Links */}
           <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect With Me</h3>
              <div className="flex gap-3">
                <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#1877F2] hover:scale-105 transition-transform">
                  <FacebookIcon />
                </a>
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#E4405F] hover:scale-105 transition-transform">
                  <InstagramIcon />
                </a>
                <a href={profile.socials.tiktok} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-black hover:scale-105 transition-transform">
                  <TikTokIcon />
                </a>
                <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#25D366] hover:scale-105 transition-transform">
                  <WhatsAppIcon />
                </a>
              </div>
           </div>
            </div>
          </div>
        </motion.section>
        {/* Live Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pt-8 pb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Live <span className="rambo-text">Projects</span></h2>
              <div className="h-1.5 w-12 bg-blue-600 mt-1 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
                className="rambo-card group"
              >
                <div className="relative w-full h-[250px] md:h-[300px] bg-[#fdfdfd] overflow-hidden rounded-t-[1.25rem]">
                  {p.restricted ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#111] text-white text-center p-5">
                      <div className="mb-4 p-3 rounded-full bg-white/10">
                        <ShieldAlert className="w-10 h-10 rambo-text" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Security Restricted</h4>
                      <p className="text-xs text-gray-400">Hosting provider forbids direct embedding. Click arrow below to open.</p>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 z-10 md:hidden"></div>
                      <iframe src={p.url} className="w-[133.33%] h-[133.33%] border-none origin-top-left scale-75 pointer-events-none md:pointer-events-auto" loading="lazy" title={p.name}></iframe>
                    </>
                  )}
                </div>
                
                <div className="p-5 bg-white border-t border-gray-100 relative z-20">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] uppercase font-black text-blue-600 tracking-tighter">{p.tags[0]}</span>
                      <h3 className="text-lg font-extrabold leading-none mt-1 text-gray-900">{p.name}</h3>
                    </div>
                    <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-black hover:text-white transition-all transform hover:scale-110">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-[#1a1a1a]/95 backdrop-blur-md flex flex-col items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[210]"
          >
            <X size={24} />
          </button>

          {/* Left Navigation */}
          <button 
            onClick={prevImage}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[210]"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Right Navigation */}
          <button 
            onClick={nextImage}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[210]"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Image */}
          <div className="relative max-w-4xl w-full max-h-[65vh] px-14 flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={gallery[lightboxIndex]} 
              alt={`Gallery ${lightboxIndex + 1}`} 
              className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-8" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={downloadImage}
              className="flex items-center gap-2 bg-[#007AFF] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-blue-500/30"
            >
              <Download size={20} />
              Download
            </button>
            <button 
              onClick={shareImage}
              className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-6 py-3 rounded-full font-semibold transition-colors border border-white/5"
            >
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      )}
      {/* WhatsApp Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-[#efeae2] rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[80vh] max-h-[700px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* WhatsApp Background Pattern */}
              <div 
                className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
                  backgroundSize: '300px'
                }}
              />

              {/* Chat Header */}
              <div className="bg-[#008069] text-white px-3 py-3 flex items-center justify-between z-10 shadow-md">
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                    <ArrowLeft size={24} />
                  </button>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <img src={profile.profileImage} alt="Saqib" className="w-10 h-10 rounded-full object-cover border border-white/20" />
                    <div>
                      <h3 className="font-semibold text-[16px] leading-tight">Saqib</h3>
                      <p className="text-[12px] text-white/80">online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pr-2">
                  <VideoIcon size={20} className="cursor-pointer" />
                  <Phone size={20} className="cursor-pointer" />
                  <MoreVertical size={20} className="cursor-pointer" />
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 z-10 space-y-3">
                {/* Encryption Notice */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#ffeecd] text-[#544336] text-[11.5px] px-4 py-2 rounded-lg text-center shadow-sm max-w-[90%] leading-relaxed">
                    <span className="inline-block mr-1">🔒</span>
                    Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.
                  </div>
                </div>

                {/* Date Badge */}
                <div className="flex justify-center mb-4">
                  <span className="bg-white text-gray-500 text-[11px] px-3 py-1 rounded-lg shadow-sm uppercase tracking-wide">
                    Today
                  </span>
                </div>

                {/* Messages */}
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`relative max-w-[80%] px-3 py-2 rounded-lg shadow-sm ${msg.isMe ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                      {/* Tail for first message in group */}
                      <svg viewBox="0 0 8 13" width="8" height="13" className={`absolute top-0 ${msg.isMe ? '-right-[8px] text-[#d9fdd3]' : '-left-[8px] text-white'}`}>
                        <path opacity="1" fill="currentColor" d={msg.isMe ? "M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" : "M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"}></path>
                      </svg>
                      
                      <p className="text-[14.5px] text-[#111b21] leading-snug pr-12">{msg.text}</p>
                      <div className="absolute bottom-1 right-2 flex items-center gap-1">
                        <span className="text-[10px] text-gray-500">{msg.time}</span>
                        {msg.isMe && (
                          <svg viewBox="0 0 16 11" width="16" height="11" className="text-[#53bdeb]">
                            <path fill="currentColor" d="M11.832 0L5.34 6.492l-2.172-2.172L1.832 5.656l3.508 3.508L13.168 1.336zM15.832 1.336l-1.336-1.336L8 6.492l1.336 1.336z"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Area */}
              <div className="bg-[#f0f2f5] p-2.5 flex items-end gap-2 z-10 w-full box-border">
                <div className="flex-1 min-w-0 bg-white rounded-3xl flex items-end px-3 py-2 shadow-sm min-h-[44px]">
                  <button className="text-[#8696a0] p-1 hover:text-gray-600 transition-colors flex-shrink-0">
                    <Smile size={24} />
                  </button>
                  <textarea 
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={handleChatKeyPress}
                    placeholder="Message"
                    className="flex-1 min-w-0 w-full bg-transparent border-none focus:ring-0 resize-none max-h-[100px] min-h-[24px] px-3 py-0.5 text-[15px] outline-none text-[#111b21] placeholder-[#8696a0]"
                    rows={1}
                  />
                  <div className="flex items-center gap-3 text-[#8696a0] pb-0.5 flex-shrink-0">
                    <button className="hover:text-gray-600 transition-colors"><Paperclip size={22} className="-rotate-45" /></button>
                    {!chatMessage && <button className="hover:text-gray-600 transition-colors"><Camera size={22} /></button>}
                  </div>
                </div>
                
                {chatMessage ? (
                  <button 
                    onClick={handleSendMessage}
                    className="w-[44px] h-[44px] rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-sm hover:bg-[#008f6f] transition-colors flex-shrink-0"
                  >
                    <Send size={20} className="ml-1" />
                  </button>
                ) : (
                  <button className="w-[44px] h-[44px] rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-sm hover:bg-[#008f6f] transition-colors flex-shrink-0">
                    <Mic size={20} />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
