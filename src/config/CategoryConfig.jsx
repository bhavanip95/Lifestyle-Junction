export const categoryConfig = {

  beauty: {
    key: "beauty",
    title: "Beauty & Self-Care",
    description: "Glow naturally with simple self-care routines.",
    image: "/Images/categories/beauty.jpg",

    route: "/articles/beauty",
    subCategories: [
      {
        key: "hair-care",
        title: "Hair Care",
        subtitle: "Healthy hair made simple",
        image: "/images/subcategories/hair-care.jpg", // ✅ subcategory image
      },
      {
        key: "skin-care",
        title: "Skin Care",
        subtitle: "Daily care for glowing skin",
        image: "/images/subcategories/skin-care.jpg",
      },
      {
        key: "makeup",
        title: "Makeup",
        subtitle: "Easy everyday looks",
        image: "/images/subcategories/makeup.jpg",
      },
    ],
  },

  food: {
    key: "food",
    title: "Food & Nutrition",
    description: "Cook smart, eat healthy & enjoy every bite.",
    image: "/Images/categories/food.jpg",
    route: "/articles/food",
    subCategories: [
      {
        key: "regional-cuisines",
        title: "Regional Cuisines",
        subtitle: "Flavors from every region",
        image: "/images/subcategories/regional-cuisines.jpg",
      },
      {
        key: "healthy-snacks",
        title: "Healthy Snacks",
        subtitle: "Quick & guilt-free",
        image: "/images/subcategories/healthy-snacks.jpg",
      },
    ],
  },

  family: {
    key: "family",
    title: "Family & Lifestyle",
    description: "Everyday tips for a happy family life.",
    image: "/Images/categories/family.jpg",
    route: "/articles/family",
    subCategories: [
      {
        key: "baby-care",
        title: "Baby Care",
        subtitle: "Safe & loving baby care tips",
        image: "/images/family/baby-care.jpg",

      },
      {
        key: "parenting",
        title: "Parenting",
        subtitle: "Raising kids with confidence",
        image: "/images/family/parenting.jpg",

      },
      {
        key: "new-mom-support",
        title: "New Mom Support",
        subtitle: "Care after delivery",
        image: "/images/family/new-mom.jpg",

      },
      {
        key: "pregnancy-care",
        title: "Pregnancy Care",
        subtitle: "Care through every trimester",
        image: "/images/family/pregnancy.jpg",

      },
      {
        key: "elderly-care",
        title: "Elderly Care",
        subtitle: "Support for aging parents",
        image: "/images/family/elderly.jpg",
      
      },
      {
        key: "relationships",
        title: "Relationship Advice",
        subtitle: "Stronger family bonds",
        image: "/images/family/relationships.jpg",
      
      },
    ],
  },

  wellness: {
    key: "wellness",
    title: "Health & Wellness",
    description: "Daily habits for better health & calm.",
    image: "/Images/categories/wellness.jpg",
    route: "/articles/wellness",
    subCategories: [
      {
        key: "yoga",
        title: "Yoga",
        subtitle: "Gentle practices for daily wellness",
        image: "/images/wellness/yoga.jpg",

      },
      {
        key: "home-remedies",
        title: "Home Remedies",

        subtitle: "Grandma-approved natural cures",
        image: "/images/wellness/remedies.jpg",

      },
      {
        key: "mental-health",
        title: "Mental Health",

        heroSubtitle: "Care for your mind",
        heroImage: "/images/wellness/mental.jpg",

      },
      {
        key: "immunity",
        title: "Immunity Care",

        subtitle: "Boost immunity naturally",
        heroImage: "/images/wellness/immunity.jpg",

      },
      {
        key: "gardening",
        title: "Gardening",


        subtitle: "Wellness through plants",
        image: "/images/wellness/gardening.jpg",

      },
    ],
  },

  home: {
    key: "home",
    title: "Home & Living",
    description: "Smart ideas for a better home.",
    image: "/Images/categories/community.jpg",
    route: "/articles/home",
    subCategories: [
      {
        key: "home-organization",
        title: "Home Organization",

        subtitle: "Simple storage solutions",
        heroImage: "/images/home/organization.jpg",

      },
      {
        key: "cleaning-hacks",
        title: "Cleaning Hacks",

        subtitle: "Clean smarter, not harder",
        image: "/images/home/cleaning.jpg",

      },
      {
        key: "storage-ideas",
        title: "Storage Ideas",
        subtitle: "Make space smarter",

        image: "/images/home/storage.jpg",

      },
      {
        key: "kitchen-hacks",
        title: "Kitchen Hacks",
        subtitle: "Simplify daily cooking",

        image: "/images/home/kitchen.jpg",

      },
      {
        key: "minimal-living",
        title: "Minimal Living",
        subtitle: "Clutter-free life",

        image: "/images/home/minimal.jpg",

      },
      {
        key: "vastu-basics",
        title: "Vastu Basics",
        subtitle: "Positive home energy",

        image: "/images/home/vastu.jpg",

      },
    ],
  },

  arts: {
    key: "arts",
    title: "Arts, Crafts & Fashion",
    description: "Create, design & express your style.",
    image: "/Images/categories/arts.jpg",
    route: "/articles/arts",
    subCategories: [
      {
        key: "rangoli",
        title: "Rangoli Designs",
        subtitle: "Traditional floor art",
        heroTitle: "Rangoli Designs",
        heroSubtitle: "Beautiful festive patterns",
        heroImage: "/images/arts/rangoli.jpg",
        badges: ["Festival", "Traditional"],
      },
      {
        key: "mehendi",
        title: "Mehendi Designs",
        subtitle: "Beautiful hand art",

        image: "/images/arts/mehendi.jpg",

      },
      {
        key: "crafts",
        title: "DIY Crafts",
        subtitle: "Creative handmade projects",

        image: "/images/arts/crafts.jpg",

      },
      {
        key: "kids-crafts",
        title: "Crafts for Kids",
        subtitle: "Fun learning activities",

        image: "/images/arts/kids-crafts.jpg",

      },
      {
        key: "blouse-designs",
        title: "Blouse Designs",
        subtitle: "Modern & classic styles",

        image: "/images/arts/blouse.jpg",

      },
    ],
  },

  finance: {
    key: "finance",
    title: "Finance & Career",
    description: "Grow your money, skills & confidence.",
    image: "/Images/categories/finance.jpg",
    route: "/articles/finance",
    subCategories: [
      {
        key: "savings",
        title: "Savings Tips",
        subtitle: "Smart money habits",

        image: "/images/finance/savings.jpg",

      },
      {
        key: "government-schemes",
        title: "Government Schemes",
        subtitle: "Benefits & support",
        heroTitle: "Government Schemes",
        heroSubtitle: "Know your entitlements",
        heroImage: "/images/finance/schemes.jpg",

      },
      {
        key: "budget-planning",
        title: "Budget Planning",

        subtitle: "Plan & track expenses",
        image: "/images/finance/budget.jpg",

      },
      {
        key: "side-hustles",
        title: "Side Hustles",
        subtitle: "Extra income ideas",

        image: "/images/finance/hustle.jpg",

      },
    ],
  },

  travel: {
    key: "travel",
    title: "Travel & Culture",
    description: "Explore places, festivals & traditions.",
    image: "/Images/categories/travel.jpg",
    route: "/articles/travel",
    subCategories: [
      {
        key: "travel-ideas",
        title: "Travel Ideas",
        subtitle: "Inspiration for trips",
        heroTitle: "Travel Ideas",
        heroSubtitle: "Plan your next journey",
        heroImage: "/images/travel/ideas.jpg",

      },
      {
        key: "pilgrimage",
        title: "Pilgrimage Trips",
        subtitle: "Spiritual journeys",
        heroTitle: "Pilgrimage Trips",
        heroSubtitle: "Sacred travel experiences",
        heroImage: "/images/travel/pilgrimage.jpg",

      },
      {
        key: "festivals-traditions",
        title: "Festivals & Traditions",

        subtitle: "Celebrate Indian culture",
        image: "/images/travel/festivals.jpg",

      },
      {
        key: "vrat-fasting",
        title: "Vrat & Fasting",
        subtitle: "Traditional practices",

        heroImage: "/images/travel/fasting.jpg",

      },
    ],
  },
};

