export type Language = 'En' | 'Hi';

export interface CategoryDetail {
  name: string;
  description: string;
  examples: string;
}

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
    refer: string;
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
  categories: {
    paper: string;
    cardboard: string;
    plastic: string;
    metal: string;
    ewaste: string;
    glass: string;
    organic: string;
  };
  categoryDetails: Record<string, CategoryDetail>;
  wasteForm: {
    categoryLabel: string;
    quantityLabel: string;
    quickSelect: string;
    estimatedReward: string;
    creditedNotice: string;
    greenPoints: string;
    environmentalImpact: string;
    addressLabel: string;
    addressPlaceholder: string;
    presets: string;
    preferredDate: string;
    preferredTime: string;
    slotMorning: string;
    slotAfternoon: string;
    slotEvening: string;
    optionalNotes: string;
    notesPlaceholder: string;
    scheduleBtn: string;
    footerNote: string;
    errQuantity: string;
    errAddress: string;
    errDate: string;
  };
  wasteSidebar: {
    rewardLogic: string;
    protocolTitle: string;
    protocolDesc: string;
    activePending: string;
    completedRewarded: string;
    currentBalance: string;
    recentActivity: string;
    noActivity: string;
    sortingChecklist: string;
    check1: string;
    check2: string;
    check3: string;
    check4: string;
    historyHeading: string;
    historyDesc: string;
  };
  solar: {
    service: string;
    title: string;
    subtitle: string;
    academicNotice: string;
    tabCalc: string;
    tabSubsidies: string;
    tabEnquiries: string;
    tabMaintenance: string;
    calcHeading: string;
    calcDesc: string;
  };
  solarCalc: {
    academicNoticeTitle: string;
    academicNoticeDesc: string;
    inputHeading: string;
    inputDesc: string;
    billLabel: string;
    tariffLabel: string;
    derivedConsumption: string;
    roofAreaLabel: string;
    locationLabel: string;
    assumptionsTitle: string;
    peakSunHours: string;
    systemPerf: string;
    areaFootprint: string;
    turnkeyBenchmark: string;
    longtermModel: string;
    resultsBadge: string;
    suitableCapacity: string;
    roofRequired: string;
    available: string;
    spaceSufficient: string;
    spaceConstrained: string;
    monthlyGen: string;
    displaces: string;
    monthlySavings: string;
    directReduction: string;
    annualSavings: string;
    year1: string;
    paybackPeriod: string;
    years: string;
    breakEven: string;
    outlookHeading: string;
    benchmarkOutlay: string;
    turnkeyEstimate: string;
    modeledGain: string;
    netGain: string;
    co2Offset: string;
    gridDisplaced: string;
    requestConsultation: string;
  };
  profile: {
    greenPoints: string;
    lifetimePts: string;
    ecoChampion: string;
    activeMember: string;
    rewardsTab: string;
    accountTab: string;
    rewardsCenter: string;
    redeemHeading: string;
    availableBalance: string;
    emptyNotice: string;
    earnedNotice: string;
    accountSettings: string;
    manageInfo: string;
    demoNoticeTitle: string;
    demoNoticeDesc: string;
    profileDetails: string;
    editInfo: string;
    fullName: string;
    emailAddress: string;
    deptOrg: string;
    campusLoc: string;
    saveChanges: string;
    cancel: string;
    nameLabel: string;
    emailLabel: string;
    deptLabel: string;
    locationLabel: string;
    notSet: string;
    signOut: string;
    clearData: string;
    platformName: string;
    partner: string;
    needsMorePts: string;
    claimCode: string;
    active: string;
    redeemNow: string;
  };
  refer: {
    badge: string;
    title: string;
    subtitle: string;
    codeCardTitle: string;
    codeCardDesc: string;
    copyCode: string;
    copiedCode: string;
    copyLink: string;
    copiedLink: string;
    shareWhatsapp: string;
    statInvited: string;
    statSuccessful: string;
    statPending: string;
    statPointsEarned: string;
    howTitle: string;
    howSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    tableTitle: string;
    tableDesc: string;
    colDate: string;
    colFriend: string;
    colStatus: string;
    colReward: string;
    colPoints: string;
    emptyHistory: string;
    statusRegistered: string;
    statusVerified: string;
    rewardPending: string;
    rewardRewarded: string;
    demoNoticeTitle: string;
    demoNoticeDesc: string;
    simulateBtn: string;
    simulateSuccess: string;
    whatsappMessage: string;
  };
  solarMaintenance: {
    title: string;
    subtitle: string;
    bookService: string;
    viewBookings: string;
    serviceTypeLabel: string;
    systemCapacityLabel: string;
    contactDetailsTitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    cityLabel: string;
    dateLabel: string;
    timeSlotLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBooking: string;
    estimatedCost: string;
    bookingSuccessTitle: string;
    bookingSuccessMsg: string;
    statusBooked: string;
    statusAssigned: string;
    statusCompleted: string;
    statusCancelled: string;
    emptyBookingsTitle: string;
    emptyBookingsDesc: string;
    cancelBooking: string;
    technicianBadge: string;
    bannerNotice: string;
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
      refer: 'Refer & Earn',
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
    categories: {
      paper: 'Paper',
      cardboard: 'Cardboard',
      plastic: 'Plastic',
      metal: 'Metal',
      ewaste: 'E-waste',
      glass: 'Glass',
      organic: 'Organic',
    },
    categoryDetails: {
      paper: {
        name: 'Paper',
        description: 'Dry notebooks, newspapers, office stationery, exam booklets, shredded paper.',
        examples: 'Newspapers, office paper, notebooks, exam sheets',
      },
      cardboard: {
        name: 'Cardboard',
        description: 'Corrugated cartons, e-commerce delivery boxes, cereal boxes, paperboard.',
        examples: 'Shipping boxes, delivery cartons, packaging board',
      },
      plastic: {
        name: 'Plastic',
        description: 'PET bottles, HDPE containers, cleaned packaging, wrappers & hard plastics.',
        examples: 'Water bottles, milk jugs, shampoo bottles, clean food containers',
      },
      metal: {
        name: 'Metal',
        description: 'Beverage cans, scrap metal, copper wiring, tin food cans, aluminum trays.',
        examples: 'Soda cans, aerosol cans, metal lids, aluminum trays',
      },
      ewaste: {
        name: 'E-waste',
        description: 'Old mobile phones, chargers, laptops, circuit boards, batteries, electronic cords.',
        examples: 'Dead batteries, earphones, old routers, broken motherboards, cables',
      },
      glass: {
        name: 'Glass',
        description: 'Whole or crushed beverage bottles, laboratory glassware, glass jars.',
        examples: 'Beverage bottles, cosmetic jars, sauce containers',
      },
      organic: {
        name: 'Organic',
        description: 'Cafeteria vegetable scraps, coffee grounds, garden clippings for composting.',
        examples: 'Fruit peelings, vegetable trim, tea leaves, dry clippings',
      },
    },
    wasteForm: {
      categoryLabel: 'Waste Category',
      quantityLabel: 'Estimated Quantity (kg)',
      quickSelect: 'Quick select:',
      estimatedReward: 'Estimated Reward',
      creditedNotice: 'Credited on Completed Pickup',
      greenPoints: 'GreenPoints',
      environmentalImpact: 'Recovers recyclable material and prevents ~{co2} kg of landfill emissions.',
      addressLabel: 'Pickup Address',
      addressPlaceholder: 'Room number, building, floor or street address',
      presets: 'Presets:',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time Slot',
      slotMorning: 'Morning (08:00 - 11:00)',
      slotAfternoon: 'Afternoon (12:00 - 15:00)',
      slotEvening: 'Evening (16:00 - 19:00)',
      optionalNotes: 'Optional Notes',
      notesPlaceholder: 'e.g. Leave with reception, call on arrival, segregated in marked boxes',
      scheduleBtn: 'Schedule Waste Pickup',
      footerNote: 'Your segregated waste collection request will be routed to localized recycling partners.',
      errQuantity: 'Please specify a valid quantity greater than 0 kg.',
      errAddress: 'Please provide a complete pickup address (at least 5 characters).',
      errDate: 'Please select a preferred pickup date.',
    },
    wasteSidebar: {
      rewardLogic: 'GreenPoints Reward Logic',
      protocolTitle: 'Single-Credit Verification Protocol',
      protocolDesc:
        'Points are credited exactly once when a request transitions from Pending or Scheduled to Completed. This ensures simulation accuracy without duplicate awards.',
      activePending: 'Active Pending / Scheduled:',
      completedRewarded: 'Completed & Rewarded:',
      currentBalance: 'Current Balance:',
      recentActivity: 'Recent GreenPoints Activity',
      noActivity: 'No recent activity logged yet.',
      sortingChecklist: 'Sorting Checklist',
      check1: 'Paper & Cardboard: Keep dry and flattened.',
      check2: 'Plastic containers: Empty and lightly rinse.',
      check3: 'E-waste: Keep cables and chargers grouped together.',
      check4: 'Metal: Remove non-metal caps and residue.',
      historyHeading: 'Waste Collection History',
      historyDesc: 'Track submitted requests, review statuses, and manage your scheduled pickups.',
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
      tabMaintenance: 'Panel Maintenance',
      calcHeading: 'Solar Calculator Inputs',
      calcDesc: 'Adjust your electricity parameters to calculate rooftop solar feasibility.',
    },
    solarCalc: {
      academicNoticeTitle: 'Transparent Estimation Notice: ',
      academicNoticeDesc:
        'The metrics displayed below are theoretical models for academic and preliminary feasibility exploration based on regional solar irradiance. Figures are estimates and do not represent binding installation quotes, installer contracts, or guaranteed government subsidies.',
      inputHeading: 'Solar Calculator Inputs',
      inputDesc: 'Adjust your electricity parameters to calculate rooftop solar feasibility.',
      billLabel: 'Monthly Electricity Bill (INR)',
      tariffLabel: 'Electricity Tariff (INR per kWh)',
      derivedConsumption: 'Derived monthly consumption:',
      roofAreaLabel: 'Available Rooftop Area (sq ft)',
      locationLabel: 'Location / State',
      assumptionsTitle: 'Calculation Assumptions',
      peakSunHours: 'Peak Sun Hours:',
      systemPerf: 'System Performance Ratio: 78% (considers inverter efficiency, wiring losses, and temperature derating).',
      areaFootprint: 'Area Footprint: ~90 sq ft per 1 kW capacity.',
      turnkeyBenchmark: 'Turnkey Benchmark Cost: ~₹54,000 per kW benchmark.',
      longtermModel: 'Long-term Model: 3.5% annual utility tariff inflation with 0.7% annual solar panel degradation.',
      resultsBadge: 'Estimated Feasibility Results',
      suitableCapacity: 'Suitable Solar Capacity',
      roofRequired: 'Roof area required:',
      available: 'Available:',
      spaceSufficient: '✓ Roof Space Sufficient',
      spaceConstrained: '⚠ Space Constrained (Capacity Adjusted)',
      monthlyGen: 'Estimated Monthly Generation',
      displaces: 'Displaces ~{percent}% of monthly usage',
      monthlySavings: 'Estimated Monthly Savings',
      directReduction: 'Direct reduction in utility bill',
      annualSavings: 'Estimated Annual Savings',
      year1: 'Year 1 annualized savings',
      paybackPeriod: 'Approximate Payback Period',
      years: 'Years',
      breakEven: 'Estimated break-even against benchmark capex',
      outlookHeading: 'INSTALLATION BENCHMARK & LIFETIME OUTLOOK',
      benchmarkOutlay: 'Benchmark Outlay:',
      turnkeyEstimate: 'Turnkey estimate',
      modeledGain: '25-Yr Modeled Gain:',
      netGain: 'Cumulative net gain',
      co2Offset: 'Annual CO₂ Offset:',
      gridDisplaced: 'Grid emissions displaced',
      requestConsultation: 'Request Consultation',
    },
    profile: {
      greenPoints: 'GreenPoints',
      lifetimePts: 'Lifetime Pts',
      ecoChampion: 'Eco Champion',
      activeMember: 'Active Member',
      rewardsTab: 'GreenPoints Rewards',
      accountTab: 'Account & Profile',
      rewardsCenter: 'GreenPoints Rewards Center',
      redeemHeading: 'Redeem Points for Sustainable Perks',
      availableBalance: 'Available Balance',
      emptyNotice: 'Your GreenPoints balance will appear here once you complete eligible activities.',
      earnedNotice: 'Points are earned exclusively upon verified waste collections.',
      accountSettings: 'Account & Profile Settings',
      manageInfo: 'Manage your personal information and browser data persistence.',
      demoNoticeTitle: 'Frontend Demonstration Notice',
      demoNoticeDesc:
        'All profile entries and operational records are stored strictly within client-side browser storage (LocalStorage). This demonstration does not persist data to a remote production database and is not secured for enterprise authentication.',
      profileDetails: 'Profile Details',
      editInfo: 'Edit Information',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      deptOrg: 'Department / Organization',
      campusLoc: 'Campus / Location',
      saveChanges: 'Save Changes',
      cancel: 'Cancel',
      nameLabel: 'Name:',
      emailLabel: 'Email:',
      deptLabel: 'Department:',
      locationLabel: 'Location:',
      notSet: 'Not set',
      signOut: 'Sign Out',
      clearData: 'Clear Stored Browser Data',
      platformName: 'urjaTerra CleanTech Platform',
      partner: 'Partner',
      needsMorePts: 'Needs {pts} More Pts',
      claimCode: 'Claimed! Code: ',
      active: 'Active',
      redeemNow: 'Redeem Now',
    },
    refer: {
      badge: 'Community Growth & Referral Program',
      title: 'Refer & Earn GreenPoints',
      subtitle:
        'Invite friends, neighbours, and classmates to join urjaTerra. When they complete their first verified recyclable waste collection, you receive 100 GreenPoints and they get a 50 GreenPoints welcome bonus.',
      codeCardTitle: 'Your Unique Referral Code',
      codeCardDesc: 'Share your code or direct invitation link with friends to start earning.',
      copyCode: 'Copy Code',
      copiedCode: 'Copied!',
      copyLink: 'Copy Referral Link',
      copiedLink: 'Link Copied!',
      shareWhatsapp: 'Share via WhatsApp',
      statInvited: 'People Invited',
      statSuccessful: 'Verified Referrals',
      statPending: 'Pending 1st Pickup',
      statPointsEarned: 'Referral GreenPoints',
      howTitle: 'How Refer & Earn Works',
      howSubtitle: 'Earn rewards in 3 simple and transparent steps.',
      step1Title: 'Share Your Code',
      step1Desc: 'Send your referral code or invitation link to friends, peers, and family.',
      step2Title: 'Friend Collects First Recyclables',
      step2Desc: 'Your friend registers and schedules their first dry waste pickup with verified scale weighing.',
      step3Title: 'Both Earn GreenPoints',
      step3Desc: 'Once verified by our collection team, you receive 100 GreenPoints and your friend gets 50 GreenPoints!',
      tableTitle: 'Referral History',
      tableDesc: 'Track your invitations, collection progress, and reward status in real time.',
      colDate: 'Invitation Date',
      colFriend: 'Referred User',
      colStatus: 'User Status',
      colReward: 'Reward Status',
      colPoints: 'Points Awarded',
      emptyHistory: 'No referrals yet. Share your code above to invite your first friend!',
      statusRegistered: 'Registered (Awaiting Pickup)',
      statusVerified: 'First Collection Verified',
      rewardPending: 'Pending Collection',
      rewardRewarded: '100 GreenPoints Rewarded',
      demoNoticeTitle: 'Frontend Demonstration Storage Notice',
      demoNoticeDesc:
        'Referral links, codes, and rewards are simulated locally in client-side storage (LocalStorage). In this demo, points are granted only after a verified collection is marked in the system.',
      simulateBtn: 'Simulate Friend Sign-up & First Pickup',
      simulateSuccess: 'Simulation complete! Referral created and verified with 100 GreenPoints awarded.',
      whatsappMessage:
        'Hey! Join me on urjaTerra to recycle recyclable waste at your doorstep and evaluate rooftop solar savings. Use my referral code {code} to get a 50 GreenPoints bonus on your first verified collection! Join here: {link}',
    },
    solarMaintenance: {
      title: 'Solar Panel Maintenance & Servicing',
      subtitle: 'Certified technician visits for panel de-soiling, inverter inspection, and preventative health audits.',
      bookService: 'Book Maintenance Service',
      viewBookings: 'My Maintenance Bookings',
      serviceTypeLabel: 'Select Maintenance Service Package',
      systemCapacityLabel: 'Approximate Rooftop Solar Capacity (kW)',
      contactDetailsTitle: 'Service Location & Contact Details',
      nameLabel: 'Full Name',
      phoneLabel: 'Mobile Phone Number',
      emailLabel: 'Email Address',
      addressLabel: 'Rooftop Service Address',
      cityLabel: 'City / Region',
      dateLabel: 'Preferred Service Date',
      timeSlotLabel: 'Preferred Arrival Window',
      notesLabel: 'System Observations or Issues (Optional)',
      notesPlaceholder: 'e.g. Dust buildup from nearby construction, low generation alert on app, water drainage blockage...',
      submitBooking: 'Confirm & Schedule Maintenance',
      estimatedCost: 'Estimated Service Fee',
      bookingSuccessTitle: 'Maintenance Visit Scheduled!',
      bookingSuccessMsg: 'A certified SolarSaathi technician has been booked. You will receive an arrival call prior to visit.',
      statusBooked: 'Service Booked',
      statusAssigned: 'Technician Dispatched',
      statusCompleted: 'Servicing Completed',
      statusCancelled: 'Booking Cancelled',
      emptyBookingsTitle: 'No Solar Maintenance Bookings Yet',
      emptyBookingsDesc: 'Keep your solar rooftop generating peak kilowatt-hours by scheduling an annual inspection or deep panel cleaning.',
      cancelBooking: 'Cancel Booking',
      technicianBadge: 'Certified SolarSaathi Field Engineer',
      bannerNotice: 'Regular semi-annual cleaning and terminal inspection recovers 15% to 25% of energy generation lost to dust and electrical degradation.',
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
      refer: 'रेफर और कमाएं',
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
    categories: {
      paper: 'कागज़ (Paper)',
      cardboard: 'गत्ता (Cardboard)',
      plastic: 'प्लास्टिक (Plastic)',
      metal: 'धातु (Metal)',
      ewaste: 'ई-कचरा (E-Waste)',
      glass: 'कांच (Glass)',
      organic: 'जैविक (Organic)',
    },
    categoryDetails: {
      paper: {
        name: 'कागज़ (Paper)',
        description: 'सूखी नोटबुक, समाचार पत्र, कार्यालय स्टेशनरी, परीक्षा पुस्तिकाएं, कटे हुए कागज़।',
        examples: 'समाचार पत्र, कार्यालय कागज़, नोटबुक, परीक्षा शीट',
      },
      cardboard: {
        name: 'गत्ता (Cardboard)',
        description: 'नालीदार कार्टन, ई-कॉमर्स डिलीवरी बॉक्स, अनाज के डिब्बे, पैकेजिंग बोर्ड।',
        examples: 'शिपिंग बॉक्स, डिलीवरी कार्टन, पैकेजिंग बोर्ड',
      },
      plastic: {
        name: 'प्लास्टिक (Plastic)',
        description: 'पीईटी बोतलें, एचडीपीई डिब्बे, साफ पैकेजिंग, रैपर और कठोर प्लास्टिक।',
        examples: 'पानी की बोतलें, दूध के डिब्बे, शैम्पू की बोतलें, खाद्य कंटेनर',
      },
      metal: {
        name: 'धातु (Metal)',
        description: 'पेय के डिब्बे, स्क्रैप धातु, तांबे के तार, टिन के डिब्बे, एल्युमिनियम ट्रे।',
        examples: 'सोडा के डिब्बे, धातु के ढक्कन, एल्युमिनियम ट्रे',
      },
      ewaste: {
        name: 'ई-कचरा (E-Waste)',
        description: 'पुराने मोबाइल फोन, चार्जर, लैपटॉप, सर्किट बोर्ड, बैटरी, इलेक्ट्रॉनिक तार।',
        examples: 'खराब बैटरी, ईयरफोन, पुराने राउटर, टूटे मदरबोर्ड, केबल',
      },
      glass: {
        name: 'कांच (Glass)',
        description: 'साबुत या टूटी पेय की बोतलें, प्रयोगशाला कांच के बर्तन, कांच के जार।',
        examples: 'पेय की बोतलें, कॉस्मेटिक जार, सॉस की बोतलें',
      },
      organic: {
        name: 'जैविक (Organic)',
        description: 'कैफेटेरिया सब्जी अवशेष, कॉफी पाउडर, खाद बनाने के लिए बगीचे की कतरनें।',
        examples: 'फलों के छिलके, सब्जी के टुकड़े, चाय की पत्ती',
      },
    },
    wasteForm: {
      categoryLabel: 'अपशिष्ट श्रेणी',
      quantityLabel: 'अनुमानित मात्रा (किलोग्राम)',
      quickSelect: 'त्वरित चयन:',
      estimatedReward: 'अनुमानित पुरस्कार',
      creditedNotice: 'पिकअप पूर्ण होने पर क्रेडिट',
      greenPoints: 'ग्रीनपॉइंट्स',
      environmentalImpact: 'पुनर्चक्रण योग्य सामग्री बचाता है और ~{co2} किग्रा लैंडफिल उत्सर्जन रोकता है।',
      addressLabel: 'पिकअप का पता',
      addressPlaceholder: 'कमरा नंबर, भवन, मंजिल या सड़क का पूरा पता',
      presets: 'सुझाए गए पते:',
      preferredDate: 'पसंदीदा तारीख',
      preferredTime: 'पसंदीदा समय स्लॉट',
      slotMorning: 'सुबह (08:00 - 11:00)',
      slotAfternoon: 'दोपहर (12:00 - 15:00)',
      slotEvening: 'शाम (16:00 - 19:00)',
      optionalNotes: 'अतिरिक्त निर्देश (वैकल्पिक)',
      notesPlaceholder: 'उदा. रिसेप्शन पर छोड़ें, पहुंचने पर कॉल करें, डिब्बों में अलग रखा है',
      scheduleBtn: 'कचरा पिकअप शेड्यूल करें',
      footerNote: 'आपका सूखा कचरा संग्रह अनुरोध स्थानीय अधिकृत पुनर्चक्रण साझेदारों को भेजा जाएगा।',
      errQuantity: 'कृपया 0 किग्रा से अधिक वैध मात्रा दर्ज करें।',
      errAddress: 'कृपया पूरा पिकअप पता दर्ज करें (कम से कम 5 अक्षर)।',
      errDate: 'कृपया पसंदीदा पिकअप तारीख चुनें।',
    },
    wasteSidebar: {
      rewardLogic: 'ग्रीनपॉइंट्स रिवॉर्ड नियम',
      protocolTitle: 'एकल-क्रेडिट सत्यापन प्रोटोकॉल',
      protocolDesc:
        'अनुरोध के पूरा (Completed) होने पर अंक केवल एक बार जमा किए जाते हैं। इससे बिना किसी दोहराव के सटीक संतुलन बना रहता है।',
      activePending: 'सक्रिय लंबित / निर्धारित:',
      completedRewarded: 'पूर्ण और पुरस्कृत:',
      currentBalance: 'वर्तमान शेष:',
      recentActivity: 'हाल की ग्रीनपॉइंट्स गतिविधि',
      noActivity: 'अभी तक कोई गतिविधि दर्ज नहीं है।',
      sortingChecklist: 'कचरा छंटाई चेकलिस्ट',
      check1: 'कागज़ और गत्ता: सूखा और चपटा रखें।',
      check2: 'प्लास्टिक कंटेनर: खाली करें और हल्का धो लें।',
      check3: 'ई-कचरा: केबल और चार्जर एक साथ रखें।',
      check4: 'धातु: गैर-धातु ढक्कन और अवशेष हटाएं।',
      historyHeading: 'कचरा संग्रह इतिहास',
      historyDesc: 'सबमिट किए गए अनुरोध देखें, स्थिति जांचें और पिकअप प्रबंधित करें।',
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
      tabMaintenance: 'पैनल रखरखाव',
      calcHeading: 'सोलर कैलकुलेटर इनपुट',
      calcDesc: 'रूफटॉप सोलर क्षमता की गणना करने के लिए अपने बिजली मापदंडों को समायोजित करें।',
    },
    solarCalc: {
      academicNoticeTitle: 'पारदर्शी अनुमान सूचना: ',
      academicNoticeDesc:
        'नीचे दिए गए आंकड़े स्थानीय सौर विकिरण पर आधारित सैद्धांतिक अनुमान हैं। ये आंकड़े बाध्यकारी स्थापना उद्धरण, अनुबंध या औपचारिक सरकारी सब्सिडी गारंटी नहीं हैं।',
      inputHeading: 'सोलर कैलकुलेटर इनपुट',
      inputDesc: 'रूफटॉप सोलर क्षमता की गणना करने के लिए अपने बिजली मापदंडों को समायोजित करें।',
      billLabel: 'मासिक बिजली बिल (रुपये)',
      tariffLabel: 'बिजली दर (रुपये प्रति यूनिट / kWh)',
      derivedConsumption: 'मासिक अनुमानित खपत:',
      roofAreaLabel: 'उपलब्ध छत का क्षेत्रफल (वर्ग फुट)',
      locationLabel: 'स्थान / राज्य',
      assumptionsTitle: 'गणना की मान्यताएं',
      peakSunHours: 'दैनिक प्रभावी धूप घंटे:',
      systemPerf: 'सिस्टम दक्षता अनुपात: 78% (इन्वर्टर दक्षता, वायरिंग नुकसान और तापमान पर आधारित)।',
      areaFootprint: 'स्थान की आवश्यकता: ~90 वर्ग फुट प्रति 1 kW क्षमता।',
      turnkeyBenchmark: 'टर्नकी मानक लागत: ~₹54,000 प्रति kW बेंचमार्क।',
      longtermModel: 'दीर्घकालिक मॉडल: 3.5% वार्षिक बिजली मूल्य वृद्धि एवं 0.7% वार्षिक सोलर पैनल मूल्यह्रास।',
      resultsBadge: 'अनुमानित व्यवहार्यता परिणाम',
      suitableCapacity: 'उपयुक्त सोलर क्षमता',
      roofRequired: 'आवश्यक छत क्षेत्र:',
      available: 'उपलब्ध:',
      spaceSufficient: '✓ छत का क्षेत्र पर्याप्त है',
      spaceConstrained: '⚠ सीमित स्थान (क्षमता समायोजित)',
      monthlyGen: 'अनुमानित मासिक उत्पादन',
      displaces: 'मासिक बिजली उपयोग का ~{percent}% विस्थापित',
      monthlySavings: 'अनुमानित मासिक बचत',
      directReduction: 'बिजली बिल में सीधी कमी',
      annualSavings: 'अनुमानित वार्षिक बचत',
      year1: 'प्रथम वर्ष की वार्षिक बचत',
      paybackPeriod: 'अनुमानित लागत वापसी अवधि',
      years: 'वर्ष',
      breakEven: 'मानक पूंजीगत व्यय पर अनुमानित ब्रेक-ईवन',
      outlookHeading: 'स्थापना मानदंड एवं 25-वर्षीय दृष्टिकोण',
      benchmarkOutlay: 'मानक स्थापना लागत:',
      turnkeyEstimate: 'टर्नकी अनुमान',
      modeledGain: '25-वर्षीय अनुमानित लाभ:',
      netGain: 'संचयी शुद्ध लाभ',
      co2Offset: 'वार्षिक कार्बन कमी:',
      gridDisplaced: 'विस्थापित ग्रिड उत्सर्जन',
      requestConsultation: 'परामर्श का अनुरोध करें',
    },
    profile: {
      greenPoints: 'ग्रीनपॉइंट्स',
      lifetimePts: 'कुल अर्जित अंक',
      ecoChampion: 'इको चैंपियन',
      activeMember: 'सक्रिय सदस्य',
      rewardsTab: 'ग्रीनपॉइंट्स पुरस्कार',
      accountTab: 'खाता और प्रोफ़ाइल',
      rewardsCenter: 'ग्रीनपॉइंट्स रिवॉर्ड केंद्र',
      redeemHeading: 'पर्यावरण-अनुकूल लाभों के लिए अंक भुनाएं',
      availableBalance: 'उपलब्ध शेष',
      emptyNotice: 'योग्य गतिविधियां पूरी करने पर आपके अंक यहां दिखाई देंगे।',
      earnedNotice: 'अंक केवल सत्यापित कचरा संग्रह पर दिए जाते हैं।',
      accountSettings: 'खाता एवं प्रोफ़ाइल सेटिंग्स',
      manageInfo: 'अपनी व्यक्तिगत जानकारी और ब्राउज़र डेटा प्रबंधित करें।',
      demoNoticeTitle: 'फ़्रंटएंड प्रदर्शन सूचना',
      demoNoticeDesc:
        'सभी प्रोफ़ाइल प्रविष्टियां और परिचालन रिकॉर्ड केवल क्लाइंट-साइड ब्राउज़र स्टोरेज (LocalStorage) में सुरक्षित हैं। यह प्रदर्शन डेटा को रिमोट डेटाबेस में सहेजता नहीं है।',
      profileDetails: 'प्रोफ़ाइल विवरण',
      editInfo: 'जानकारी संपादित करें',
      fullName: 'पूरा नाम',
      emailAddress: 'ईमेल पता',
      deptOrg: 'विभाग / संगठन',
      campusLoc: 'परिसर / स्थान',
      saveChanges: 'बदलाव सहेजें',
      cancel: 'रद्द करें',
      nameLabel: 'नाम:',
      emailLabel: 'ईमेल:',
      deptLabel: 'विभाग:',
      locationLabel: 'स्थान:',
      notSet: 'दर्ज नहीं',
      signOut: 'साइन आउट',
      clearData: 'ब्राउज़र डेटा साफ़ करें',
      platformName: 'urjaTerra क्लीनटेक प्लेटफ़ॉर्म',
      partner: 'साझेदार',
      needsMorePts: '{pts} और अंक चाहिए',
      claimCode: 'दावा किया गया! कोड: ',
      active: 'सक्रिय',
      redeemNow: 'अभी भुनाएं',
    },
    refer: {
      badge: 'सामुदायिक विकास एवं रेफरल कार्यक्रम',
      title: 'रेफर करें और ग्रीनपॉइंट्स कमाएं',
      subtitle:
        'अपने दोस्तों, पड़ोसियों और सहपाठियों को urjaTerra पर आमंत्रित करें। जब वे अपना पहला सत्यापित सूखा कचरा संग्रह पूरा करते हैं, तो आपको 100 ग्रीनपॉइंट्स मिलते हैं और उन्हें 50 ग्रीनपॉइंट्स का स्वागत बोनस मिलता है।',
      codeCardTitle: 'आपका विशिष्ट रेफरल कोड',
      codeCardDesc: 'कमाई शुरू करने के लिए अपने दोस्तों के साथ अपना कोड या सीधा आमंत्रण लिंक साझा करें।',
      copyCode: 'कोड कॉपी करें',
      copiedCode: 'कॉपी हो गया!',
      copyLink: 'रेफरल लिंक कॉपी करें',
      copiedLink: 'लिंक कॉपी हो गया!',
      shareWhatsapp: 'व्हाट्सएप पर साझा करें',
      statInvited: 'कुल आमंत्रित लोग',
      statSuccessful: 'सत्यापित रेफरल',
      statPending: 'प्रतीक्षारत रेफरल',
      statPointsEarned: 'रेफरल से अर्जित ग्रीनपॉइंट्स',
      howTitle: 'रेफर और कमाएं कैसे काम करता है',
      howSubtitle: '3 सरल और पारदर्शी चरणों में पुरस्कार अर्जित करें।',
      step1Title: 'अपना कोड साझा करें',
      step1Desc: 'अपने दोस्तों, साथियों और परिवार को अपना रेफरल कोड या आमंत्रण लिंक भेजें।',
      step2Title: 'दोस्त पहला कचरा पिकअप पूरा करें',
      step2Desc: 'आपका मित्र पंजीकरण करता है और डिजिटल तराजू वजन के साथ अपना पहला सूखा कचरा पिकअप पूरा करता है।',
      step3Title: 'दोनों ग्रीनपॉइंट्स अर्जित करते हैं',
      step3Desc: 'संग्रह सत्यापित होने पर, आपको 100 ग्रीनपॉइंट्स और आपके मित्र को 50 ग्रीनपॉइंट्स मिलते हैं!',
      tableTitle: 'रेफरल इतिहास',
      tableDesc: 'अपने आमंत्रणों, संग्रह प्रगति और पुरस्कार स्थिति को वास्तविक समय में ट्रैक करें।',
      colDate: 'आमंत्रण तारीख',
      colFriend: 'आमंत्रित उपयोगकर्ता',
      colStatus: 'उपयोगकर्ता स्थिति',
      colReward: 'पुरस्कार स्थिति',
      colPoints: 'अर्जित अंक',
      emptyHistory: 'अभी तक कोई रेफरल नहीं है। अपने पहले दोस्त को आमंत्रित करने के लिए ऊपर अपना कोड साझा करें!',
      statusRegistered: 'पंजीकृत (पिकअप प्रतीक्षारत)',
      statusVerified: 'पहला संग्रह सत्यापित',
      rewardPending: 'पिकअप प्रतीक्षारत',
      rewardRewarded: '100 ग्रीनपॉइंट्स प्राप्त',
      demoNoticeTitle: 'फ़्रंटएंड प्रदर्शन सूचना',
      demoNoticeDesc:
        'रेफरल लिंक, कोड और पुरस्कार स्थानीय क्लाइंट-साइड ब्राउज़र स्टोरेज (LocalStorage) में सुरक्षित हैं। इस प्रदर्शन में, अंक केवल सत्यापित पिकअप पूरा होने पर दिए जाते हैं।',
      simulateBtn: 'मित्र पंजीकरण और पहला पिकअप अनुकरण करें',
      simulateSuccess: 'अनुकरण सफल! रेफरल सत्यापित हुआ और 100 ग्रीनपॉइंट्स जमा किए गए।',
      whatsappMessage:
        'नमस्ते! अपने घर पर सूखा कचरा रीसायकल करने और रूफटॉप सोलर बचत देखने के लिए urjaTerra से जुड़ें। अपने पहले सत्यापित संग्रह पर 50 ग्रीनपॉइंट्स बोनस पाने के लिए मेरे रेफरल कोड {code} का उपयोग करें! यहां जुड़ें: {link}',
    },
    solarMaintenance: {
      title: 'सोलर पैनल रखरखाव एवं सर्विसिंग',
      subtitle: 'पैनल की गहरी सफाई, इन्वर्टर स्वास्थ्य परीक्षण और नियमित तकनीकी ऑडिट के लिए प्रमाणित तकनीशियन बुक करें।',
      bookService: 'रखरखाव सेवा बुक करें',
      viewBookings: 'मेरी बुकिंग्स',
      serviceTypeLabel: 'रखरखाव सेवा पैकेज चुनें',
      systemCapacityLabel: 'अनुमानित रूफटॉप सोलर क्षमता (kW)',
      contactDetailsTitle: 'सेवा स्थान एवं संपर्क विवरण',
      nameLabel: 'पूरा नाम',
      phoneLabel: 'मोबाइल नंबर',
      emailLabel: 'ईमेल पता',
      addressLabel: 'रूफटॉप सेवा का पता',
      cityLabel: 'शहर / राज्य',
      dateLabel: 'पसंदीदा सेवा तारीख',
      timeSlotLabel: 'पसंदीदा आगमन समय',
      notesLabel: 'सोलर सिस्टम संबंधी समस्या या निर्देश (वैकल्पिक)',
      notesPlaceholder: 'उदा. निर्माण कार्य से जमी धूल, इन्वर्टर एरर कोड, पानी निकासी में रुकावट...',
      submitBooking: 'रखरखाव सेवा सुनिश्चित करें',
      estimatedCost: 'अनुमानित सेवा शुल्क',
      bookingSuccessTitle: 'रखरखाव सेवा बुक हो गई!',
      bookingSuccessMsg: 'सोलर साथी प्रमाणित फील्ड इंजीनियर को असाइन कर दिया गया है। आने से पूर्व आपको कॉल प्राप्त होगी।',
      statusBooked: 'सेवा बुक की गई',
      statusAssigned: 'तकनीशियन रवाना',
      statusCompleted: 'सर्विसिंग पूर्ण',
      statusCancelled: 'बुकिंग रद्द',
      emptyBookingsTitle: 'कोई सक्रिय रखरखाव बुकिंग नहीं है',
      emptyBookingsDesc: 'नियमित सफाई और निरीक्षण से सौर ऊर्जा उत्पादन 15% से 25% तक बढ़ जाता है। आज ही पहली सर्विसिंग शेड्यूल करें।',
      cancelBooking: 'बुकिंग रद्द करें',
      technicianBadge: 'सोलर साथी प्रमाणित फील्ड इंजीनियर',
      bannerNotice: 'नियमित 6-मासिक सफाई और टर्मिनल जांच से धूल और इन्वर्टर गिरावट के कारण होने वाले 15% से 25% ऊर्जा नुकसान को ठीक किया जा सकता है।',
    },
  },
};
