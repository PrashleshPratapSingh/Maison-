export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Elise Gown',
    price: 850,
    category: 'Silk Series',
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A masterpiece of minimalism. The Elise Gown is crafted from silk crepe de chine, featuring a fluid silhouette that contours perfectly to the form. Hand-finished in our atelier.',
    details: ['100% Silk Crepe', 'Hand-stitched hem', 'Invisible back zipper', 'Made in France']
  },
  {
    id: '2',
    name: 'Margaux Lace Mini',
    price: 1200,
    category: 'Atelier RTW',
    image: 'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1594633309242-425056774630?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Delicate French lace meets a playful contemporary silhouette. The Margaux Mini features intricate floral patterns and a structured fit.',
    details: ['French Chantilly Lace', 'Silk organza lining', 'Hand-applied lace trim', 'Bespoke tailoring']
  },
  {
    id: '3',
    name: 'Inès Tulle Separates',
    price: 950,
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Versatile and ethereal. The Inès separates offer multiple styling options with layers of soft Italian tulle and a silk corset base.',
    details: ['Italian Soft Tulle', 'Internal boning', 'Satin waist tie', 'Breathable lining']
  },
  {
    id: '4',
    name: 'Louise Satin Slip',
    price: 780,
    category: 'Silk Series',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'The ultimate essential for the modern bride. Heavy satin with a liquid-like drape and deep cowl back.',
    details: ['Heavy Satin Silk', 'Cowl neck', 'Adjustable straps', 'Seamless finish']
  }
];
