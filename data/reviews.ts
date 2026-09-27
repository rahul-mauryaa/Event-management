
export interface GoogleReview {
  id: string
  author: string
  avatarLetter: string
  avatarBg: string
  avatarUrl?: string
  rating: number
  date: string
  event: string
  category: "wedding" | "corporate" | "decor"
  text: string
  photos?: string[]
  verified: boolean
  source: "Google Reviews"
}

export interface BranchInfo {
  id: string
  name: string
  branchTag: string
  isMainBranch: boolean
  address: string
  shortLocation: string
  landmark: string
  city: string
  state: string
  pin: string
  phone: string
  hours: string
  googleMapsUrl: string
  mapEmbedUrl: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const branchLocations: Record<"main" | "surat", BranchInfo> = {
  main: {
    id: "bengaluru-main",
    name: "Featurebright south wedding planner",
    branchTag: "Main Branch (Headquarters)",
    isMainBranch: true,
    address: "Building no 701, 1st Cross Rd, Basavanagar, Marathahalli, Bengaluru, Karnataka 560037",
    shortLocation: "Basavanagar, Marathahalli, Bengaluru",
    landmark: "1st Cross Rd, Basavanagar",
    city: "Bengaluru",
    state: "Karnataka",
    pin: "560037",
    phone: "+91-977-326-9662",
    hours: "Mon – Sat: 9:00 AM – 4:00 PM (Sunday Closed)",
    googleMapsUrl:
      "https://www.google.com/maps/place/Featurebright+south+wedding+planner/@12.9621418,77.6671931,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3bae13f8dd6ca405:0x96343368215ec2e7!2sFeaturebright+south+wedding+planner,+Building+no+701,+1st+Cross+Rd,+Basavanagar,+Marathahalli,+Bengaluru,+Karnataka+560037!2m2!1d77.672064!2d12.9621366!3m5!1s0x3bae13f8dd6ca405:0x96343368215ec2e7!8m2!3d12.9621366!4d77.672064!16s%2Fg%2F11zxwz687v",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Featurebright%20south%20wedding%20planner,%20Building%20no%20701,%201st%20Cross%20Rd,%20Basavanagar,%20Marathahalli,%20Bengaluru,%20Karnataka%20560037&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 12.9621366,
      lng: 77.672064,
    },
  },
  surat: {
    id: "surat-studio",
    name: "Feature Brights south wedding planner",
    branchTag: "Regional Studio Branch",
    isMainBranch: false,
    address: "Block no. C, Ratna Madhav, Shop no. 3 near Diamond Jalaram Temple, Vesu, Surat, Gujarat 395007",
    shortLocation: "Ratna Madhav, Vesu, Surat",
    landmark: "Near Diamond Jalaram Temple",
    city: "Surat",
    state: "Gujarat",
    pin: "395007",
    phone: "+91-977-326-9662",
    hours: "Mon – Sat: 9:00 AM – 4:00 PM (Sunday Closed)",
    googleMapsUrl:
      "https://www.google.com/maps/place/Feature+Brights+south+wedding+planner/data=!4m2!3m1!1s0x0:0x9fe42a5b79a38f30?sa=X&ved=1t:2428&hl=en-IN&ictx=111",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Feature%20Brights%20south%20wedding%20planner,%20Ratna%20Madhav,%20Shop%20no.%203,%20Vesu,%20Surat&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 21.1444,
      lng: 72.7766,
    },
  },
}

export const googlePlaceInfo = {
  name: "Featurebright south wedding planner",
  brandName: "Feature Brights Events",
  rating: 5.0,
  reviewsCount: "50+",
  placeType: "Event Planner & South Wedding Specialist",
  mainBranch: branchLocations.main,
  suratBranch: branchLocations.surat,
  address: branchLocations.main.address,
  shortLocation: branchLocations.main.shortLocation,
  phone: "+91-977-326-9662",
  hours: "Mon – Sat: 9:00 AM – 4:00 PM (Sunday Closed)",
  googleSearchReviewsUrl:
    "https://www.google.com/maps/place/Featurebright+south+wedding+planner/@12.9621418,77.6671931,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3bae13f8dd6ca405:0x96343368215ec2e7!2sFeaturebright+south+wedding+planner,+Building+no+701,+1st+Cross+Rd,+Basavanagar,+Marathahalli,+Bengaluru,+Karnataka+560037!2m2!1d77.672064!2d12.9621366!3m5!1s0x3bae13f8dd6ca405:0x96343368215ec2e7!8m2!3d12.9621366!4d77.672064!16s%2Fg%2F11zxwz687v",
  googleWriteReviewUrl:
    "https://www.google.com/maps/place/Featurebright+south+wedding+planner/@12.9621418,77.6671931,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3bae13f8dd6ca405:0x96343368215ec2e7!2sFeaturebright+south+wedding+planner,+Building+no+701,+1st+Cross+Rd,+Basavanagar,+Marathahalli,+Bengaluru,+Karnataka+560037!2m2!1d77.672064!2d12.9621366!3m5!1s0x3bae13f8dd6ca405:0x96343368215ec2e7!8m2!3d12.9621366!4d77.672064!16s%2Fg%2F11zxwz687v",
  googleMapsPlaceUrl: branchLocations.main.googleMapsUrl,
  mapEmbedUrl: branchLocations.main.mapEmbedUrl,
}

export const realReviews: GoogleReview[] = [
  {
    id: "rev-main-1",
    author: "Arvind & Shreya Ramanathan",
    avatarLetter: "A",
    avatarBg: "bg-[#B08355]",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 weeks ago",
    event: "Traditional South Indian Wedding, Bengaluru",
    category: "wedding",
    text: "Visited Featurebright south wedding planner at their Bengaluru Main Branch in Basavanagar. From our very first consultation, their team blew us away with their deep knowledge of authentic South Indian marriage rituals, fresh jasmine/mogra mandap decor, and white-glove hospitality. Every single cue during our muhurtham was orchestrated with grace. Hands down the finest wedding planners in Bengaluru!",
    photos: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-1",
    author: "Kavita Desai",
    avatarLetter: "K",
    avatarBg: "bg-[#B08355]",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "last month",
    event: "South Indian Traditional Wedding Ceremony",
    category: "wedding",
    text: "Best event management in Surat! We wanted an authentic South Indian traditional wedding with elaborate floral rituals and mandap decor in Surat. Feature Brights brought our dream vision to reality with absolute perfection. Their team coordination, attention to rituals, and polite hospitality made the whole day joyful and stress-free.",
    photos: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-2",
    author: "Dr. Rajesh & Meera Patel",
    avatarLetter: "R",
    avatarBg: "bg-[#4A3421]",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 months ago",
    event: "Luxury Destination Wedding, Surat",
    category: "wedding",
    text: "Feature Brights south wedding planner did an extraordinary job for our wedding celebration. The grand royal entrance, pristine floral arches, and guest management at Ratna Madhav, Vesu were handled with world-class finesse. Every single guest complimented the ambiance. Highly recommend them for any luxury wedding in Surat!",
    photos: ["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    author: "Hardik Shah",
    avatarLetter: "H",
    avatarBg: "bg-[#1E3A8A]",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "3 months ago",
    event: "Enterprise Product Launch & Annual Meet",
    category: "corporate",
    text: "Top-level management and execution! We partnered with Feature Brights for our corporate summit in Surat. The stage audio-visuals, LED screen mapping, and conference schedule ran like clockwork with zero glitches. Very transparent budgeting and professional team from start to finish.",
    photos: ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-4",
    author: "Bhavik Mistry",
    avatarLetter: "B",
    avatarBg: "bg-[#047857]",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "4 months ago",
    event: "Engagement & Sangeet Night Setup",
    category: "decor",
    text: "Nice event and best management! They work within your budget without ever compromising on quality. The theme lighting and stage decoration for our Sangeet ceremony were mesmerizing. Met them at their Vesu office and they delivered beyond our expectations!",
    photos: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-5",
    author: "Pooja Nair",
    avatarLetter: "P",
    avatarBg: "bg-[#7C3AED]",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "5 months ago",
    event: "NRI Destination Wedding Planning",
    category: "wedding",
    text: "Organizing our wedding from abroad felt overwhelming until we found Feature Brights. They took complete charge of vendor contracts, venue decor, hotel hospitality, and traditional South Indian rituals. Trustworthy, responsive on WhatsApp, and genuinely passionate planners in Surat.",
    photos: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
  {
    id: "rev-6",
    author: "Siddharth Jariwala",
    avatarLetter: "S",
    avatarBg: "bg-[#C2410C]",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "6 months ago",
    event: "Reception & Thematic Stage Decor",
    category: "decor",
    text: "Top-level wedding planners in Surat. The floral chandeliers and customized stage setup looked straight out of a luxury magazine. Their on-ground team is always on their toes ensuring hosts don't have to worry about a single detail.",
    photos: ["https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80"],
    verified: true,
    source: "Google Reviews",
  },
]
