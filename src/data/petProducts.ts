export interface PetProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  nutritionalHighlights: string[];
  suitableFor?: string;
  feedingDirections?: string;
  madeFrom?: string;
  image: string;
  badge?: string;
}

export const PET_PRODUCTS: PetProduct[] = [
  {
    id: 'namo-elite-adult-dogs',
    name: 'NAMO Elite for Adult Dogs',
    category: 'Dog Food',
    tagline: 'Premium nutrition for active, healthy adult dogs.',
    description:
      'NAMO Elite for Adult Dogs is a premium dry food formulated to support the daily nutritional needs of adult dogs. Its chicken and herbal formulation combines high-quality animal-origin protein with essential nutrients for energy, healthy muscles, coat condition and overall vitality.',
    keyBenefits: [
      '26% Protein for daily muscle support',
      '14% Fat for sustained energy',
      'Organic calcium from fish bones',
      'Supports healthy skin and coat',
      'Supports agility and overall vitality',
      'Supports hip and joint health',
    ],
    nutritionalHighlights: [
      '20 Amino Acids | 12 Vitamins',
      '5 Herbs: Turmeric, Rosemary, Wheat Grass, Chicory, Moringa',
      'Energy: 3950 Kcal',
      '75% Protein from Animal Origin',
    ],
    suitableFor: 'Adult dogs of different breeds requiring a complete premium dry-food diet.',
    image: '/products/pets/NAMO Elite for Adult Dogs.png',
    badge: 'Adult Dogs',
  },
  {
    id: 'namo-elite-mother-baby',
    name: 'NAMO Elite for Mother & Baby',
    category: 'Puppy & Mother Dog Food',
    tagline: 'High-protein nutrition for healthy mothers and growing puppies.',
    description:
      'NAMO Elite for Mother & Baby is a super-premium dry food formulated for mother dogs and growing puppies. Its high-protein formulation provides nutritional support during pregnancy, lactation and early growth while supporting healthy development.',
    keyBenefits: [
      '80% Protein from Animal Origin',
      'No Added Gluten',
      'Supports faster growth',
      'Supports healthy skin and coat',
      'Suitable for all breeds',
      'Nutrient-rich formulation for mothers and puppies',
    ],
    nutritionalHighlights: [
      '20 Amino Acids | 8 Vitamins',
      '4 Herbs: Turmeric, Rosemary, Wheat Grass, Moringa',
      'Energy: 4000 Kcal',
      'Chicken & Fish Unique Formulation',
    ],
    suitableFor: 'Mother dogs and growing puppies requiring a high-protein nutritional diet.',
    image: '/products/pets/NAMO Elite for Mother & Baby.png',
    badge: 'Mother & Baby',
  },
  {
    id: 'namo-xcite-stud-dogs',
    name: 'NAMO Xcite for Stud Dogs',
    category: 'Specialized Dog Food',
    tagline: 'Specialized high-energy nutrition for stud dogs.',
    description:
      'NAMO Xcite for Stud Dogs is an ultra-premium dry food specially formulated for stud dogs. The nutritional formulation is designed to support vitality, physical condition and reproductive health while providing very high energy for active dogs.',
    keyBenefits: [
      'Supports sperm count, motility and stability',
      '30% Protein | 20% Fat',
      'No Added Gluten, Corn & Soya',
      'Supports faster growth and superior shine',
      'Very high energy formulation (4900 Kcal)',
    ],
    nutritionalHighlights: [
      '20 Amino Acids | 12 Vitamins',
      '8 Herbs: Rosemary, Turmeric, Wheat Grass, Chicory, Asparagus, Spirulina, Seaweed, Moringa',
      'Energy: 4900 Kcal',
      '30% Protein | 20% Fat',
    ],
    suitableFor: 'Stud dogs requiring a high-energy, specialized nutritional formulation.',
    image: '/products/pets/NAMO Xcite for Stud Dogs.png',
    badge: 'Stud Dogs',
  },
  {
    id: 'namo-elite-cats',
    name: 'NAMO Elite for Cats',
    category: 'Cat Food',
    tagline: 'Complete nutrition for healthy vision, coat and growth.',
    description:
      'NAMO Elite for Cats is a super-premium dry food formulated for Queen Mothers and kittens. The recipe combines chicken liver, chicken heart and sardines with essential nutrients designed to support healthy vision, coat quality and growth.',
    keyBenefits: [
      '34% Protein | 14% Fat',
      '2000 mg/kg Taurine for heart & vision',
      'Supports healthy vision',
      'Supports superior coat condition',
      'Supports healthy growth',
      'Rich in Omega 3, 6 & 9 (Higher EPA & DHA)',
    ],
    nutritionalHighlights: [
      '20 Amino Acids | 12 Vitamins',
      '5 Herbs: Turmeric, Rosemary, Wheat Grass, Chicory, Moringa',
      'Energy: 4000 Kcal',
      '34% Protein | 14% Fat | 2000 mg/kg Taurine',
    ],
    suitableFor: 'Persian and Himalayan cats, including queen mothers and kittens.',
    image: '/products/pets/NAMO Elite for Cats.png',
    badge: 'Feline Care',
  },
  {
    id: 'namo-fish-tail-chew',
    name: 'NAMO Fish Tail Chew',
    category: 'Dog Chews',
    tagline: 'A natural fish-based chew for healthy joints, teeth and coat.',
    description:
      'NAMO Fish Tail Chew is a natural chew made from fish cartilage, designed to provide dogs with a nutritious chewing experience while supporting dental and joint health. It contains naturally occurring Omega 3, taurine and Vitamin E.',
    keyBenefits: [
      '100% Natural Chew from fish cartilage',
      'Supports joint health and mobility',
      'Helps improve coat shine',
      'Helps decrease dental tartar and plaque',
      'No preservatives, no steroids',
      'Rich in fish cartilage from Ray & Guitar fish',
    ],
    nutritionalHighlights: [
      'Naturally Occurring Omega 3',
      'Taurine & Vitamin E',
      'Pure Fish Cartilage',
      '100% Preservative-Free',
    ],
    madeFrom: 'Ray & Guitar Fish',
    image: '/products/pets/NAMO Fish Tail Chew.png',
    badge: '100% Natural',
  },
  {
    id: 'namo-fish-oil',
    name: 'NAMO Fish Oil',
    category: 'Pet Supplements',
    tagline: 'Premium fish oil for healthy skin, coat and fur.',
    description:
      'NAMO Fish Oil is a premium fish oil supplement for dogs and cats, extracted from Indian-origin catfish. It is rich in Omega 3 and Omega 6 and provides EPA and DHA to support skin, coat and overall wellness.',
    keyBenefits: [
      'Suitable for both dogs and cats',
      'Rich in Omega 3 and Omega 6',
      'Supports skin and coat health',
      'Supports fur growth and luster',
      'High palatability and natural anti-inflammatory',
      'Suitable for all breeds and life stages',
    ],
    nutritionalHighlights: [
      '23g EPA & DHA per 100ml',
      'Omega 3 & Omega 6 Fatty Acids',
      'Extracted from Indian-Origin Catfish',
      'Natural Anti-Inflammatory Profile',
    ],
    feedingDirections:
      'Puppies & kittens (small breeds): 2.5–5 ml/day | Adult dogs & cats (medium/large): 5–10 ml/day',
    image: '/products/pets/NAMO Fish Oil.png',
    badge: 'Omega-3 Rich',
  },
  {
    id: 'namo-pets-addon-weight-gain',
    name: 'NAMO Pets Addon for Weight Gain',
    category: 'Pet Food Supplement',
    tagline: 'High-protein nutrition to complement everyday home food.',
    description:
      'NAMO Pets Addon for Weight Gain is a high-protein nutritional addon designed to be mixed with regular home food. It provides concentrated nutrition for mother dogs and puppies requiring additional calories and protein.',
    keyBenefits: [
      '50% Protein | 35% Fat',
      'Very high energy (5400 Kcal)',
      'Gluten Free, Grain Free & Hypoallergenic',
      'Easily mixed with everyday home food',
      'Formulated specifically for healthy weight gain',
      'Supports mother dogs & growing puppies',
    ],
    nutritionalHighlights: [
      '50% Protein',
      '35% Fat',
      '5400 Kcal High-Energy Formulation',
      'Gluten-Free & Hypoallergenic',
    ],
    suitableFor:
      'Mother dogs, puppies, starter feeding, and dogs requiring additional nutritional support.',
    image: '/products/pets/NAMO Pets Addon for Weight Gain.png',
    badge: 'Weight Gain',
  },
  {
    id: 'namo-pets-addon-healthy-cats',
    name: 'NAMO Pets Addon for Healthy Cats',
    category: 'Cat Food Supplement',
    tagline: 'Protein-rich nutritional support for healthy cats.',
    description:
      'NAMO Pets Addon for Healthy Cats is a protein-rich nutritional addon designed for adult cats and kittens. It can be mixed with regular home food to provide additional protein, calories and nutritional support.',
    keyBenefits: [
      '50% Protein | 35% Fat',
      'High-calorie diet formulation',
      'Gluten Free & Hypoallergenic',
      'Supports healthy weight gain and skin condition',
      'Easy to mix with everyday home food',
    ],
    nutritionalHighlights: [
      '50% Protein',
      '35% Fat',
      'High-Calorie Diet',
      'Gluten-Free & Hypoallergenic',
    ],
    suitableFor:
      'Adult cats, kittens, and cats requiring additional nutritional support or skin vitality.',
    image: '/products/pets/NAMO Pets Addon for Healthy Cats.png',
    badge: 'Feline Vitality',
  },
  {
    id: 'namo-xcite-lactating-females',
    name: 'NAMO Xcite for Lactating Females',
    category: 'Specialized Dog Food',
    tagline: 'Specialized nutrition for lactating mothers and their growing pups.',
    description:
      'NAMO Xcite for Lactating Females is an ultra-premium dry food specially formulated for female dogs during lactation. Its nutrient-rich formulation is designed to support the nutritional demands of lactating mothers and help maintain milk production.',
    keyBenefits: [
      'Supports healthy milk secretion in mothers',
      '30% Protein | 20% Fat',
      'No Added Gluten, Corn & Soya',
      'Supports faster growth and superior shine',
      'Suitable for all breeds',
    ],
    nutritionalHighlights: [
      '20 Amino Acids | 12 Vitamins',
      '10 Herbs: Asparagus, Rosemary, Wheat Grass, Withania, Turmeric, Chicory, Spirulina, Seaweed, Trigonella, Moringa',
      '4 Unsaturated Lipids',
      'Energy: 5100 Kcal | 30% Protein | 20% Fat',
    ],
    suitableFor:
      'Female dogs from the heat stage through lactation to support adequate milk secretion.',
    image: '/products/pets/NAMO Xcite for Lactating Females.png',
    badge: 'Lactation Care',
  },
];
