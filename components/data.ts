// All content, colors, and configuration in one place
// Easy to update for future edits

export const siteConfig = {
  name: 'Tasty Kisso',
  description: 'The Pro-ssi Experience - Traditional Indian Lassi with Power-Packed Protein',
  tagline: 'Coming Soon',
};

export const navigation = [
  { label: 'Our Lassis', href: '#' },
  { label: 'Our Story', href: '#' },
  { label: 'The Pro-ssi Story', href: '#' },
  { label: 'Health Benefits', href: '#' },
  { label: 'Recipes', href: '#' },
];

export const hero = {
  pretitle: 'DELICIOUSLY CREME. TRADITIONALLY PURE.',
  title: 'The Pro-ssi Experience.',
  description:
    'The Perfect Fusion of Traditional Indian Lassi and Power-Packed Protein.',
  ctaText: 'Shop Now',
  ctaLink: '#', // Will be replaced with Odoo URL later
  productImage: '/images/pro-ssi-product.png', // To be replaced with actual image
};

export const features = [
  {
    id: 'pistachios',
    title: 'Pistachios & Cashews',
    description: 'Premium pistachios and cashews for texture and taste.',
    subtitle: 'Rich Nutty Goodness',
  },
  {
    id: 'berry',
    title: 'Berry Delight',
    description: 'Every Lassi is topped with a sweet cherry.',
    subtitle: 'Real Cherry Top',
  },
  {
    id: 'protein',
    title: 'Protein Boost',
    description: '20g of high-quality protein in every cup.',
    subtitle: 'Pro-ssi: Protein Lassi',
  },
  {
    id: 'culture',
    title: 'Authentic Culture',
    description: 'Real Indian-style yogurt base.',
    subtitle: 'Traditional Culture',
  },
];

export const footer = {
  contact: 'Contact information | T-sart., +91 133 0001',
  legal: 'Legal and most remination. All rights reserved.',
  socials: [
    { icon: 'facebook', label: 'Facebook', href: '#' },
    { icon: 'instagram', label: 'Instagram', href: '#' },
    { icon: 'youtube', label: 'YouTube', href: '#' },
  ],
};

// Tailwind color config
export const colors = {
  primary: '#7B5BA6', // Purple
  accent: '#D4AF76', // Gold
  cream: '#F5F1E8', // Off-white
  darkBrown: '#5C4033', // Dark text
};