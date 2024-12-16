import { Speaker } from "@/types/speaker";

export const speakers: Speaker[] = [
  {
    id: "sam-altman",
    name: "Sam Altman",
    role: "CEO",
    company: "OpenAI",
    bio: "Sam Altman is the CEO of OpenAI and former president of Y Combinator. He focuses on AGI development and its implications for society.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    twitter: "sama",
    linkedin: "samaltman",
    topics: ["AGI", "AI Safety", "Future of AI"],
    featured: true
  },
  {
    id: "dario-amodei",
    name: "Dario Amodei",
    role: "CEO",
    company: "Anthropic",
    bio: "Dario Amodei is the CEO of Anthropic, focusing on developing safe and ethical AI systems through constitutional AI.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    twitter: "dario_amodei",
    linkedin: "darioamodei",
    topics: ["Constitutional AI", "AI Safety", "Large Language Models"],
    featured: true
  },
  {
    id: "demis-hassabis",
    name: "Demis Hassabis",
    role: "CEO",
    company: "Google DeepMind",
    bio: "Demis Hassabis is the founder and CEO of DeepMind, pioneering breakthroughs in artificial intelligence and its application to scientific discovery.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    twitter: "demishassabis",
    linkedin: "demis-hassabis",
    topics: ["AI Research", "Scientific Discovery", "Neural Networks"],
    featured: true
  },
  {
    id: "fei-fei-li",
    name: "Fei-Fei Li",
    role: "Professor",
    company: "Stanford University",
    bio: "Dr. Fei-Fei Li is the Co-Director of Stanford's Human-Centered AI Institute and a pioneer in computer vision and AI education.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    twitter: "drfeifei",
    linkedin: "fei-fei-li",
    topics: ["Computer Vision", "AI Education", "Human-Centered AI"],
    featured: true
  },
  {
    id: "ilya-sutskever",
    name: "Ilya Sutskever",
    role: "Chief Scientist",
    company: "OpenAI",
    bio: "Ilya Sutskever is a co-founder and Chief Scientist of OpenAI, known for his groundbreaking work in deep learning and neural networks.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    twitter: "ilyasut",
    linkedin: "ilya-sutskever",
    topics: ["Deep Learning", "Neural Networks", "AI Architecture"],
    featured: true
  },
  {
    id: "yoshua-bengio",
    name: "Yoshua Bengio",
    role: "Scientific Director",
    company: "Mila",
    bio: "Yoshua Bengio is a pioneer in deep learning, focusing on neural networks and their applications in AI systems.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    twitter: "yoshuabengio",
    linkedin: "yoshua-bengio",
    topics: ["Deep Learning", "Neural Networks", "AI Ethics"],
    featured: true
  }
];

export const getFeaturedSpeakers = () => speakers.filter(speaker => speaker.featured);
export const getRegularSpeakers = () => speakers.filter(speaker => !speaker.featured);