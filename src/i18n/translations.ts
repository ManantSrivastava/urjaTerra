export type Language = 'En' | 'Hi';

export interface Translations {
  nav: {
    home: string;
    waste: string;
    solar: string;
    about: string;
    signIn: string;
    profile: string;
    myProfile: string;
    admin: string;
    logOut: string;
    pts: string;
  };
  hero: {
    heading1: string;
    heading2: string;
    description: string;
    ctaWaste: string;
    ctaSolar: string;
    landscapeAlt: string;
  };
  services: {
    badge: string;
    title: string;
    wasteBadge: string;
    wasteTitle: string;
    wasteDesc: string;
    wasteFeat1: string;
    wasteFeat2: string;
    wasteFeat3: string;
    wasteBtn: string;
    solarBadge: string;
    solarTitle: string;
    solarDesc: string;
    solarFeat1: string;
    solarFeat2: string;
    solarFeat3: string;
    solarBtn: string;
  };
  stats: {
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  benefits: {
    badge: string;
    title: string;
    subtitle: string;
    needsMorePts: string;
    partner: string;
  };
  rewards: Record<string, { title: string; description: string; badge: string }>;
  framework: {
    badge: string;
    title: string;
    desc: string;
    feat1Title: string;
    feat1Desc: string;
    feat2Title: string;
    feat2Desc: string;
  };
  footer: {
    tagline: string;
    cleanTechBadge: string;
    disclaimer: string;
    privacy: string;
    terms: string;
    admin: string;
  };
  waste: {
    service: string;
    title: string;
    subtitle: string;
    academicNotice: string;
    tabBook: string;
    tabPickups: string;
    tabRewards: string;
    tabImpact: string;
    bookHeading: string;
    bookDesc: string;
  };
  solar: {
    service: string;
    title: string;
    subtitle: string;
    academicNotice: string;
    tabCalc: string;
    tabSubsidies: string;
    tabEnquiries: string;
    calcHeading: string;
    calcDesc: string;
  };
  categories: {
    paper: string;
    cardboard: string;
    plastic: string;
    metal: string;
    ewaste: string;
    glass: string;
    organic: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  En: {
    nav: {
      home: 'Home',
      waste: 'Smart Waste',
      solar: 'SolarSaathi',
      about: 'About',
      signIn: 'Sign In',
      profile: 'Profile',
      myProfile: 'My Profile',
      admin: 'Admin',
      logOut: 'Log Out',
      pts: 'pts',
    },
    hero: {
      heading1: 'Waste Less.',
      heading2: 'Power More.',
      description:
        'Smarter recyclable waste management and rooftop solar estimation, brought together in one simple platform.',
      ctaWaste: 'Explore Smart Waste',
      ctaSolar: 'Explore SolarSaathi',
      landscapeAlt: 'urjaTerra renewable energy landscape',
    },
    services: {
      badge: 'Integrated CleanTech Framework',
      title: 'Select an urjaTerra Service',
      wasteBadge: 'Doorstep Circularity',
      wasteTitle: 'Smart Waste Recycling',
      wasteDesc:
        'Schedule verified pickups for segregated dry recyclables with direct digital GreenPoints credits and authorized mill diversion.',
      wasteFeat1: 'Guaranteed doorstep collection with verified digital scale weighing',
      wasteFeat2: 'Direct GreenPoints credits awarded per verified kilogram collected',
      wasteFeat3: 'Transparent scrap price benchmarks for paper, plastic, metal, and e-waste',
      wasteBtn: 'Book a Waste Pickup',
      solarBadge: 'MNRE Subsidy Ready',
      solarTitle: 'SolarSaathi',
      solarDesc:
        'Estimate rooftop solar capacity, monthly power generation, payback timeline, and eligible central subsidies with instant state tariff benchmarks.',
      solarFeat1: 'Precision solar potential modeled on local irradiance data',
      solarFeat2: 'Tiered central subsidy calculator up to ₹78,000 allowance',
      solarFeat3: 'Downloadable pre-feasibility PDF proposal for vendors',
      solarBtn: 'Calculate Solar Potential',
    },
    stats: {
      stat1Val: '6 Streams',
      stat1Label: 'Segregated Recyclables',
      stat2Val: '100%',
      stat2Label: 'Verified Scale Weights',
      stat3Val: '25 Years',
      stat3Label: 'Solar Lifecycle Modeling',
      stat4Val: 'Direct Credit',
      stat4Label: 'GreenPoints on Collection',
    },
    howItWorks: {
      title: 'How urjaTerra Works',
      subtitle:
        'A unified interface for community circularity and decentralized rooftop clean energy.',
      step1Title: 'Segregate & Schedule',
      step1Desc:
        'Book doorstep pickup for sorted household recyclables with guaranteed transparent category pricing and assigned driver tracking.',
      step2Title: 'Earn GreenPoints',
      step2Desc:
        'Every verified kilogram deposited converts instantly into GreenPoints, redeemable towards waste pickup fees or solar installation partners.',
      step3Title: 'Power Your Rooftop',
      step3Desc:
        'Enter your sanctioned load or average power bill into SolarSaathi to simulate optimal system capacity, subsidy yields, and net payback.',
    },
    benefits: {
      badge: 'Community Benefits & Incentives',
      title: 'Earn GreenPoints. Unlock Tangible Rewards.',
      subtitle:
        'Every verified kilogram of sorted recyclable waste earns GreenPoints redeemable for campus dining, native tree plantations, mobility credits, and rooftop solar discounts.',
      needsMorePts: 'Needs {pts} More Pts',
      partner: 'Partner',
    },
    rewards: {
      'rw-1': {
        title: '₹150 Campus Green Cafeteria Voucher',
        description: 'Valid for eco-friendly meals and organic beverages across campus cafes.',
        badge: 'Popular',
      },
      'rw-2': {
        title: 'Verified Tree Plantation Certificate',
        description: 'We sponsor and plant 1 native geo-tagged sapling in our urban micro-forest project.',
        badge: 'High Impact',
      },
      'rw-3': {
        title: '₹1,500 Off Rooftop Solar Technical Audit',
        description: 'Comprehensive drone thermal shading analysis and structural feasibility report.',
        badge: 'SolarSaathi Special',
      },
      'rw-4': {
        title: 'urjaTerra Recycled Stainless Steel Bottle',
        description: 'Double-walled insulated 750ml flask made from 90% post-consumer recycled steel.',
        badge: 'Zero-Waste Gear',
      },
      'rw-5': {
        title: 'Public Transit Metro Pass Recharge (₹200)',
        description: 'Clean commute incentive credited directly to your registered transit card.',
        badge: 'Clean Mobility',
      },
    },
    framework: {
      badge: 'Dual Impact Framework',
      title: 'Bridging Household Waste & Decentralized Solar',
      desc:
        'Traditional sustainability platforms isolate waste management from clean energy adoption. urjaTerra bridges localized recycling incentives with residential rooftop solar adoption within a singular civic ecosystem.',
      feat1Title: 'Synchronized Ecosystem',
      feat1Desc: 'Unified GreenPoints across all actions',
      feat2Title: 'MNRE Regulatory Align',
      feat2Desc: 'Standardized rooftop benchmark calculations',
    },
    footer: {
      tagline: 'Smart Waste Management & Rooftop Solar Estimator',
      cleanTechBadge: 'CleanTech Platform • Sustainable Resource & Solar Solutions',
      disclaimer:
        '© 2026 urjaTerra. Not affiliated with or replacing municipal daily sanitation services.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      admin: 'Admin Portal',
    },
    waste: {
      service: 'Service 01',
      title: 'Smart Waste',
      subtitle:
        'Doorstep collection of segregated dry recyclables with verified scale weights and immediate GreenPoints rewards.',
      academicNotice:
        'urjaTerra coordinates door-to-door dry recyclable collections (plastics, paper, metals, e-waste). It operates alongside municipal solid waste systems for high-value recyclables diversion.',
      tabBook: 'Book a Pickup',
      tabPickups: 'Active Pickups',
      tabRewards: 'GreenPoints Rewards',
      tabImpact: 'Environmental Impact',
      bookHeading: 'Schedule a Recyclable Pickup',
      bookDesc:
        'Choose a dry recyclable stream and book a courier slot. We will dispatch a driver with a calibrated scale.',
    },
    solar: {
      service: 'Service 02',
      title: 'SolarSaathi',
      subtitle: "Understand your rooftop's solar potential.",
      academicNotice:
        'SolarSaathi provides mathematical rooftop solar estimations using standard insolation averages. Figures are estimates and not binding quotes or formal government subsidy guarantees.',
      tabCalc: 'Solar Calculator',
      tabSubsidies: 'Subsidy Benchmarks',
      tabEnquiries: 'Saved Enquiries',
      calcHeading: 'Solar Calculator Inputs',
      calcDesc: 'Adjust your electricity parameters to calculate rooftop solar feasibility.',
    },
    categories: {
      paper: 'Paper',
      cardboard: 'Cardboard',
      plastic: 'Plastic',
      metal: 'Metal',
      ewaste: 'E-waste',
      glass: 'Glass',
      organic: 'Organic',
    },
  },
  Hi: {
    nav: {
      home: 'होम',
      waste: 'स्मार्ट वेस्ट',
      solar: 'सोलर साथी',
      about: 'हमारे बारे में',
      signIn: 'साइन इन',
      profile: 'प्रोफ़ाइल',
      myProfile: 'मेरी प्रोफ़ाइल',
      admin: 'एडमिन',
      logOut: 'लॉग आउट',
      pts: 'अंक',
    },
    hero: {
      heading1: 'कम कचरा।',
      heading2: 'अधिक ऊर्जा।',
      description:
        'पुनर्चक्रण योग्य अपशिष्ट प्रबंधन और रूफटॉप सोलर अनुमान, एक ही सरल और आधुनिक मंच पर।',
      ctaWaste: 'स्मार्ट वेस्ट देखें',
      ctaSolar: 'सोलर साथी देखें',
      landscapeAlt: 'urjaTerra नवीकरणीय ऊर्जा परिदृश्य',
    },
    services: {
      badge: 'एकीकृत क्लीनटेक ढांचा',
      title: 'urjaTerra सेवा चुनें',
      wasteBadge: 'डोरस्टेप चक्रीयता',
      wasteTitle: 'स्मार्ट वेस्ट पुनर्चक्रण',
      wasteDesc:
        'सत्यापित डिजिटल तराजू वजन और तत्काल ग्रीनपॉइंट्स पुरस्कारों के साथ अलग किए गए सूखे कचरे के लिए पिकअप शेड्यूल करें।',
      wasteFeat1: 'सत्यापित डिजिटल स्केल वजन के साथ गारंटीकृत डोरस्टेप संग्रह',
      wasteFeat2: 'एकत्रित प्रत्येक सत्यापित किलोग्राम पर सीधे ग्रीनपॉइंट्स क्रेडिट',
      wasteFeat3: 'कागज़, प्लास्टिक, धातु और ई-कचरे के लिए पारदर्शी मूल्य बेंचमार्क',
      wasteBtn: 'कचरा पिकअप बुक करें',
      solarBadge: 'MNRE सब्सिडी समर्थित',
      solarTitle: 'सोलर साथी',
      solarDesc:
        'तत्काल राज्य टैरिफ बेंचमार्क के साथ अपनी छत की सोलर क्षमता, मासिक बिजली उत्पादन, लागत वापसी अवधि और केंद्रीय सब्सिडी का अनुमान लगाएं।',
      solarFeat1: 'स्थानीय सौर विकिरण डेटा पर आधारित सटीक सोलर क्षमता',
      solarFeat2: '₹78,000 तक का स्तरीय केंद्रीय सब्सिडी कैलकुलेटर',
      solarFeat3: 'सोलर विक्रेताओं के लिए डाउनलोड योग्य पूर्व-व्यवहार्यता प्रस्ताव',
      solarBtn: 'सोलर क्षमता की गणना करें',
    },
    stats: {
      stat1Val: '6 श्रेणियां',
      stat1Label: 'अलग किए गए पुनर्चक्रण योग्य अपशिष्ट',
      stat2Val: '100%',
      stat2Label: 'सत्यापित डिजिटल तराजू वजन',
      stat3Val: '25 वर्ष',
      stat3Label: 'सोलर जीवनचक्र मॉडलिंग',
      stat4Val: 'सीधा क्रेडिट',
      stat4Label: 'संग्रह पर तुरंत ग्रीनपॉइंट्स',
    },
    howItWorks: {
      title: 'urjaTerra कैसे काम करता है',
      subtitle:
        'सामुदायिक चक्रीयता और विकेंद्रीकृत रूफटॉप स्वच्छ ऊर्जा के लिए एक एकीकृत मंच।',
      step1Title: 'अलग करें और शेड्यूल करें',
      step1Desc:
        'पारदर्शी श्रेणी मूल्य निर्धारण और ड्राइवर ट्रैकिंग के साथ छांटे गए घरेलू पुनर्चक्रण योग्य कचरे के लिए डोरस्टेप पिकअप बुक करें।',
      step2Title: 'ग्रीनपॉइंट्स कमाएं',
      step2Desc:
        'जमा किया गया प्रत्येक सत्यापित किलोग्राम तुरंत ग्रीनपॉइंट्स में परिवर्तित होता है, जो उपयोगी पुरस्कारों और सोलर छूट के लिए भुनाए जा सकते हैं।',
      step3Title: 'अपनी छत को ऊर्जावान बनाएं',
      step3Desc:
        'अनुकूलतम सिस्टम क्षमता, सब्सिडी लाभ और शुद्ध लागत वापसी देखने के लिए सोलर साथी में अपना औसत बिजली बिल दर्ज करें।',
    },
    benefits: {
      badge: 'सामुदायिक लाभ एवं पुरस्कार',
      title: 'ग्रीनपॉइंट्स अर्जित करें। उपयोगी पुरस्कार पाएं।',
      subtitle:
        'छांटे गए पुनर्चक्रण योग्य कचरे का प्रत्येक सत्यापित किलोग्राम ग्रीनपॉइंट्स अर्जित करता है जिसे कैंपस भोजन, वृक्षारोपण, मेट्रो पास और रूफटॉप सोलर छूट में भुनाया जा सकता है।',
      needsMorePts: '{pts} और अंक चाहिए',
      partner: 'साझेदार',
    },
    rewards: {
      'rw-1': {
        title: '₹150 कैंपस ग्रीन कैफेटेरिया वाउचर',
        description: 'कैंपस कैफे में पर्यावरण-अनुकूल भोजन और जैविक पेय के लिए मान्य।',
        badge: 'लोकप्रिय',
      },
      'rw-2': {
        title: 'सत्यापित वृक्षारोपण प्रमाण पत्र',
        description: 'हम अपनी शहरी माइक्रो-फॉरेस्ट परियोजना में 1 देशी जियो-टैग्ड पौधा प्रायोजित करते हैं।',
        badge: 'उच्च प्रभाव',
      },
      'rw-3': {
        title: 'रूफटॉप सोलर तकनीकी ऑडिट पर ₹1,500 की छूट',
        description: 'व्यापक ड्रोन थर्मल छायांकन विश्लेषण और संरचनात्मक व्यवहार्यता रिपोर्ट।',
        badge: 'सोलर साथी विशेष',
      },
      'rw-4': {
        title: 'urjaTerra पुनर्चक्रित स्टेनलेस स्टील बोतल',
        description: '90% पोस्ट-कंज्यूमर रीसाइक्ल्ड स्टील से निर्मित डबल-दीवार इंसुलेटेड 750 मिली फ्लास्क।',
        badge: 'ज़ीरो-वेस्ट गियर',
      },
      'rw-5': {
        title: 'पब्लिक ट्रांजिट मेट्रो पास रिचार्ज (₹200)',
        description: 'आपके पंजीकृत ट्रांजिट कार्ड में सीधे जमा स्वच्छ यात्रा प्रोत्साहन।',
        badge: 'स्वच्छ गतिशीलता',
      },
    },
    framework: {
      badge: 'दोहरा प्रभाव ढांचा',
      title: 'घरेलू कचरे और विकेंद्रीकृत सौर ऊर्जा का समन्वय',
      desc:
        'पारंपरिक स्थिरता मंच अपशिष्ट प्रबंधन को स्वच्छ ऊर्जा अपनाने से अलग रखते हैं। urjaTerra स्थानीय रीसाइक्लिंग प्रोत्साहनों को आवासीय रूफटॉप सौर ऊर्जा अपनाने के साथ एक ही नागरिक पारिस्थितिकी तंत्र में जोड़ता है।',
      feat1Title: 'समन्वित पारिस्थितिकी तंत्र',
      feat1Desc: 'सभी गतिविधियों में एकीकृत ग्रीनपॉइंट्स',
      feat2Title: 'मंत्रालय मानक अनुरूप',
      feat2Desc: 'मानकीकृत रूफटॉप बेंचमार्क गणना',
    },
    footer: {
      tagline: 'स्मार्ट अपशिष्ट प्रबंधन एवं रूफटॉप सोलर अनुमानक',
      cleanTechBadge: 'क्लीनटेक प्लेटफॉर्म • सतत संसाधन एवं सौर ऊर्जा समाधान',
      disclaimer:
        '© 2026 urjaTerra। नगरपालिका की दैनिक स्वच्छता सेवाओं से संबद्ध या उसका प्रतिस्थापन नहीं।',
      privacy: 'गोपनीयता नीति',
      terms: 'नियम एवं शर्तें',
      admin: 'एडमिन पोर्टल',
    },
    waste: {
      service: 'सेवा 01',
      title: 'स्मार्ट वेस्ट',
      subtitle:
        'सत्यापित वजन और तत्काल ग्रीनपॉइंट्स पुरस्कारों के साथ अलग किए गए सूखे पुनर्चक्रण योग्य कचरे का डोरस्टेप संग्रह।',
      academicNotice:
        'urjaTerra डोर-टू-डोर सूखे पुनर्चक्रण योग्य कचरे (प्लास्टिक, कागज़, धातु, ई-कचरा) के संग्रह का समन्वय करता है। यह मूल्यवान पुनर्चक्रण सामग्री के लिए नगरपालिका ठोस अपशिष्ट प्रणाली के पूरक के रूप में कार्य करता है।',
      tabBook: 'पिकअप बुक करें',
      tabPickups: 'सक्रिय पिकअप',
      tabRewards: 'ग्रीनपॉइंट्स पुरस्कार',
      tabImpact: 'पर्यावरणीय प्रभाव',
      bookHeading: 'पुनर्चक्रण योग्य पिकअप शेड्यूल करें',
      bookDesc:
        'सूखे कचरे की श्रेणी चुनें और पिकअप स्लॉट बुक करें। हम डिजिटल तराजू के साथ ड्राइवर भेजेंगे।',
    },
    solar: {
      service: 'सेवा 02',
      title: 'सोलर साथी',
      subtitle: 'अपनी छत की सौर ऊर्जा क्षमता को समझें।',
      academicNotice:
        'सोलर साथी मानक सौर विकिरण औसत का उपयोग करके गणितीय रूफटॉप सोलर अनुमान प्रदान करता है। आंकड़े केवल अनुमान हैं और बाध्यकारी उद्धरण या औपचारिक सरकारी सब्सिडी गारंटी नहीं हैं।',
      tabCalc: 'सोलर कैलकुलेटर',
      tabSubsidies: 'सब्सिडी मानदंड',
      tabEnquiries: 'सहेजे गए अनुरोध',
      calcHeading: 'सोलर कैलकुलेटर इनपुट',
      calcDesc: 'रूफटॉप सोलर क्षमता की गणना करने के लिए अपने बिजली मापदंडों को समायोजित करें।',
    },
    categories: {
      paper: 'कागज़ (Paper)',
      cardboard: 'गत्ता (Cardboard)',
      plastic: 'प्लास्टिक (Plastic)',
      metal: 'धातु (Metal)',
      ewaste: 'ई-कचरा (E-Waste)',
      glass: 'कांच (Glass)',
      organic: 'जैविक (Organic)',
    },
  },
};
