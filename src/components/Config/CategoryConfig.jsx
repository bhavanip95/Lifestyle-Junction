import hairCareImg from '../../assets/CategoryConfigImages/hairCare.png';
import skinCareImg from '../../assets/CategoryConfigImages/skinCare.png';


// import recipeImg from '../assets/explore/recipes.jpg';
// import dietPlanImg from '../assets/explore/dietPlans.jpg';

// import pregnancyImg from '../assets/explore/pregnancy.jpg';
// import parentingImg from '../assets/explore/parenting.jpg';
// import afterDeliveryImg from '../assets/explore/afterDelivery.jpg';

// import rangoliImg from '../assets/explore/rangoli.jpg';
// import diyArtImg from '../assets/explore/diyArt.jpg';
// import fashionImg from '../assets/explore/fashion.jpg';

// import stocksImg from '../assets/explore/stocks.jpg';
// import moneyMgmtImg from '../assets/explore/moneyMgmt.jpg';

// import yogaImg from '../assets/explore/yoga.jpg';
// import gardeningImg from '../assets/explore/gardening.jpg';

// import travelDestImg from '../assets/explore/travelDest.jpg';
// import meTimeImg from '../assets/explore/meTime.jpg';

export const categoryConfig = {
  beauty: {
    subCategories: [
      {
        key: 'hairCare',
        title: 'Hair Care',
        heroImage: hairCareImg,
        heroTitle: 'Get the Hair You Love',
        heroSubtitle: 'Simple Remedies for Everyday Healthy Hair',
        badges: ['All', 'Basic Hair Care', 'Hair Growth', 'Scalp Care', 'Anti‑Greying'],
      },
      {
        key: 'skinCare',
        title: 'Skin Care DIYs',
        heroImage: skinCareImg,
        heroTitle: 'Glowing, Healthy Skin',
        heroSubtitle: 'DIY routines for radiant skin at home',
        badges: ['All', 'Tight Skin', 'Radiant Skin', 'Glass Skin', '7‑Day Challenge'],
      },
    ],
  },
  // food: {
  //   subCategories: [
        
  //     {
  //       key: 'recipes',
  //       title: 'Recipes',
  //       heroImage: recipeImg,
  //       heroTitle: 'Delicious Recipes',
  //       heroSubtitle: 'Step‑by‑step guides to healthy cooking',
  //       badges: ['All', 'Vegetarian', 'Vegan', 'Gluten‑Free', 'Desserts'],
  //     },
  //     {
  //       key: 'dietPlans',
  //       title: 'Diet Plans',
  //       heroImage: dietPlanImg,
  //       heroTitle: 'Balanced Diet Plans',
  //       heroSubtitle: 'Nutrition strategies for every goal',
  //       badges: ['All', 'Keto', 'Balanced', 'Low‑Carb', 'High‑Protein'],
  //     },
  //   ],
  // },
  // family: {
  //   subCategories: [
  //     {
  //       key: 'pregnancy',
  //       title: 'Pregnancy',
  //       heroImage: pregnancyImg,
  //       heroTitle: 'Healthy Pregnancy Tips',
  //       heroSubtitle: 'Nutrition, exercise & wellness for expecting moms',
  //       badges: ['All', 'Trimester Tips', 'Nutrition', 'Exercises'],
  //     },
  //     {
  //       key: 'parenting',
  //       title: 'Parenting',
  //       heroImage: parentingImg,
  //       heroTitle: 'Parenting Advice',
  //       heroSubtitle: 'Child development activities and education',
  //       badges: ['All', 'Child Development', 'Activities', 'Education'],
  //     },
  //     {
  //       key: 'afterDelivery',
  //       title: 'After Delivery',
  //       heroImage: afterDeliveryImg,
  //       heroTitle: 'Postnatal Care',
  //       heroSubtitle: 'Recovery, nutrition & support after childbirth',
  //       badges: ['All', 'Recovery', 'Postnatal Care', 'Nutrition'],
  //     },
  //   ],
  // },
  // arts: {
  //   subCategories: [
  //     {
  //       key: 'rangoliDesigns',
  //       title: 'Rangoli Designs',
  //       heroImage: rangoliImg,
  //       heroTitle: 'Artistic Rangoli',
  //       heroSubtitle: 'Festival, freehand & floral patterns',
  //       badges: ['All', 'Festival', 'Freehand', 'Floral'],
  //     },
  //     {
  //       key: 'diyArtProjects',
  //       title: 'DIY Art Projects',
  //       heroImage: diyArtImg,
  //       heroTitle: 'Creative DIY Art',
  //       heroSubtitle: 'Home decor, gift ideas, upcycling',
  //       badges: ['All', 'Home Decor', 'Gift Ideas', 'Upcycling'],
  //     },
  //     {
  //       key: 'blouseFashion',
  //       title: 'Blouse & Fashion Designs',
  //       heroImage: fashionImg,
  //       heroTitle: 'Stylish Blouse Designs',
  //       heroSubtitle: 'Traditional & contemporary patterns',
  //       badges: ['All', 'Traditional', 'Contemporary', 'Pattern Making'],
  //     },
  //   ],
  // },
  // finance: {
  //   subCategories: [
  //     {
  //       key: 'stocksEarning',
  //       title: 'Stocks & Earning',
  //       heroImage: stocksImg,
  //       heroTitle: 'Stock Market Insights',
  //       heroSubtitle: 'Analysis, long‑term strategies & risks',
  //       badges: ['All', 'Market Analysis', 'Long‑Term', 'Risks'],
  //     },
  //     {
  //       key: 'moneyManagement',
  //       title: 'Money Management',
  //       heroImage: moneyMgmtImg,
  //       heroTitle: 'Smart Money Habits',
  //       heroSubtitle: 'Budgeting, saving and investment tips',
  //       badges: ['All', 'Budgeting', 'Saving', 'Investment'],
  //     },
  //   ],
  // },
  // wellness: {
  //   subCategories: [
  //     {
  //       key: 'yoga',
  //       title: 'Yoga',
  //       heroImage: yogaImg,
  //       heroTitle: 'Yoga Practices',
  //       heroSubtitle: 'Asanas, breathing & meditation',
  //       badges: ['All', 'Asanas', 'Breathing', 'Meditation'],
  //     },
  //     {
  //       key: 'gardening',
  //       title: 'Gardening',
  //       heroImage: gardeningImg,
  //       heroTitle: 'Garden Ideas',
  //       heroSubtitle: 'Terrace, herbs & succulents',
  //       badges: ['All', 'Terrace', 'Herbs', 'Succulents'],
  //     },
  //   ],
  // },
  // travel: {
  //   subCategories: [
  //     {
  //       key: 'travel',
  //       title: 'Travel',
  //       heroImage: travelDestImg,
  //       heroTitle: 'Travel Guides',
  //       heroSubtitle: 'Destinations, itineraries & tips',
  //       badges: ['All', 'Guides', 'Itineraries', 'Tips'],
  //     },
  //     {
  //       key: 'meTime',
  //       title: 'Me‑Time',
  //       heroImage: meTimeImg,
  //       heroTitle: 'Self‑Care Escapes',
  //       heroSubtitle: 'Relaxation, mindfulness & wellness',
  //       badges: ['All', 'Relaxation', 'Self‑Care', 'Wellness'],
  //     },
  //   ],
  // },
};
