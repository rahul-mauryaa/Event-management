export interface GoogleReview {
  id: string
  author: string
  avatarLetter: string
  avatarBg: string
  rating: number
  date: string
  event: string
  category: "wedding" | "corporate" | "decor"
  text: string
  verified: boolean
  source: "Google Reviews"
}

export const googlePlaceInfo = {
  name: "Feature Brights south wedding planner",
  brandName: "Feature Brights Events",
  rating: 5.0,
  reviewsCount: "50+",
  placeType: "Event Planner & Wedding Decor Studio",
  address: "Block no. C, Ratna Madhav, Shop no. 3 near Diamond Jalaram Temple, Vesu, Surat, Gujarat 395007",
  shortLocation: "Vesu, Surat, Gujarat",
  phone: "+91-977-326-9662",
  hours: "Mon – Sat: 9:00 AM – 4:00 PM (Sunday Closed)",
  googleSearchReviewsUrl:
    "https://www.google.com/search?q=featurebrights#lrd=0x3be0535473f38b93:0x9fe42a5b79a38f30,1,,,,",
  googleWriteReviewUrl:
    "https://www.google.com/search?q=featurebrights#lrd=0x3be0535473f38b93:0x9fe42a5b79a38f30,3,,,,",
  googleMapsPlaceUrl:
    "https://www.google.com/maps/place/Feature+Brights+south+wedding+planner/data=!4m2!3m1!1s0x0:0x9fe42a5b79a38f30?sa=X&ved=1t:2428&hl=en-IN&ictx=111",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Feature%20Brights%20south%20wedding%20planner,%20Ratna%20Madhav,%20Shop%20no.%203,%20Vesu,%20Surat&t=&z=16&ie=UTF8&iwloc=&output=embed",
}

export const realReviews: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Kavita Desai",
    avatarLetter: "K",
    avatarBg: "bg-[#B08355]",
    rating: 5,
    date: "1 month ago",
    event: "South Indian Traditional Wedding Ceremony",
    category: "wedding",
    text: "Best event management in Surat! We wanted an authentic South Indian traditional wedding with elaborate floral rituals and mandap decor in Surat. Feature Brights brought our dream vision to reality with absolute perfection. Their team coordination, attention to rituals, and polite hospitality made the whole day joyful and stress-free.",
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-2",
    author: "Dr. Rajesh & Meera Patel",
    avatarLetter: "R",
    avatarBg: "bg-[#4A3421]",
    rating: 5,
    date: "2 months ago",
    event: "Luxury Destination Wedding, Surat",
    category: "wedding",
    text: "Feature Brights south wedding planner did an extraordinary job for our wedding celebration. The grand royal entrance, pristine floral arches, and guest management at Ratna Madhav, Vesu were handled with world-class finesse. Every single guest complimented the ambiance. Highly recommend them for any luxury wedding in Surat!",
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    author: "Hardik Shah",
    avatarLetter: "H",
    avatarBg: "bg-[#1E3A8A]",
    rating: 5,
    date: "3 months ago",
    event: "Enterprise Product Launch & Annual Meet",
    category: "corporate",
    text: "Top-level management and execution! We partnered with Feature Brights for our corporate summit in Surat. The stage audio-visuals, LED screen mapping, and conference schedule ran like clockwork with zero glitches. Very transparent budgeting and professional team from start to finish.",
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-4",
    author: "Bhavik Mistry",
    avatarLetter: "B",
    avatarBg: "bg-[#047857]",
    rating: 5,
    date: "4 months ago",
    event: "Engagement & Sangeet Night Setup",
    category: "decor",
    text: "Nice event and best management! They work within your budget without ever compromising on quality. The theme lighting and stage decoration for our Sangeet ceremony were mesmerizing. Met them at their Vesu office and they delivered beyond our expectations!",
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-5",
    author: "Pooja Nair",
    avatarLetter: "P",
    avatarBg: "bg-[#7C3AED]",
    rating: 5,
    date: "5 months ago",
    event: "NRI Destination Wedding Planning",
    category: "wedding",
    text: "Organizing our wedding from abroad felt overwhelming until we found Feature Brights. They took complete charge of vendor contracts, venue decor, hotel hospitality, and traditional South Indian rituals. Trustworthy, responsive on WhatsApp, and genuinely passionate planners in Surat.",
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-6",
    author: "Siddharth Jariwala",
    avatarLetter: "S",
    avatarBg: "bg-[#C2410C]",
    rating: 5,
    date: "6 months ago",
    event: "Reception & Thematic Stage Decor",
    category: "decor",
    text: "Top-level wedding planners in Surat. The floral chandeliers and customized stage setup looked straight out of a luxury magazine. Their on-ground team is always on their toes ensuring hosts don't have to worry about a single detail.",
    verified: true,
    source: "Google Reviews",
  },
]
