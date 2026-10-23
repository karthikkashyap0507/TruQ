export const site = {
  name: 'TruQ Design Studio',
  tagline: 'Architects | Interior Designers',
  url: 'https://www.truqdesignstudio.com',
  description:
    'TruQ Design Studio — architects and interior designers creating refined luxury estates, residences, workspaces, hospitality and institutional projects across the USA, India and Dubai.',
  email: 'info@truq.studio',
  phone: '+91 85888 22011',
  phoneHref: 'tel:+918588822011',
  instagram: '@truq_design_studio',
  instagramUrl: 'https://www.instagram.com/truq_design_studio/',
  studios: ['USA', 'India', 'Dubai'],
  founded: 'Journey of 15+ years',
  // Set PUBLIC_ENQUIRY_ENDPOINT (e.g. a Formspree / Web3Forms URL) to post enquiries;
  // without it the form opens a pre-filled email to the studio instead.
  enquiryEndpoint: import.meta.env.PUBLIC_ENQUIRY_ENDPOINT || '',
};

export const nav = [
  { label: 'Works', href: '/works/' },
  { label: 'Studio', href: '/studio/' },
  { label: 'Services', href: '/services/' },
  { label: 'Process', href: '/process/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Contact', href: '/contact/' },
];

export const stats = [
  { value: 15, suffix: '+', label: 'Years of practice' },
  { value: 2.5, suffix: 'M+', label: 'Square feet designed', decimals: 1 },
  { value: 200, suffix: '+', label: 'Projects completed' },
  { value: 50, suffix: '+', label: 'Team members' },
];

export const offices = [
  { key: 'india', no: '01', region: 'India', name: 'India', email: 'info@truq.studio', phone: '+91 85888 22011', seed: 3 },
  { key: 'dubai', no: '02', region: 'UAE', name: 'Dubai', email: 'info@truq.studio', phone: '—', seed: 7 },
  { key: 'usa', no: '03', region: 'USA', name: 'USA', email: 'info@truq.studio', phone: '—', seed: 11 },
];

export const marqueeWords = ['TruQ', 'Architecture', 'Interiors', 'USA', 'India', 'Dubai', 'Hospitality'];
