// src/data/wasteData.js

export const wasteTypes = [
  { id: 'organic', name: 'Organic Waste', img: 'organic-waste.png' },
  { id: 'recyclable', name: 'Recyclable Waste', img: 'recyclable-waste.png' },
  { id: 'hazardous', name: 'Hazardous Waste', img: 'hazardous-waste.png' },
  { id: 'biomedical', name: 'Biomedical Waste', img: 'biomedical-waste.png' },
  { id: 'construction', name: 'Construction Waste', img: 'construction-waste.png' },
  { id: 'industrial', name: 'Industrial Waste', img: 'industrial-waste.png' },
  { id: 'e-waste', name: 'E-Waste', img: 'e-waste.png' },
  { id: 'msw', name: 'MSW', img: 'msw.png' },
  { id: 'residual', name: 'Residual Waste', img: 'residual-waste.png' },
  { id: 'radioactive', name: 'Radioactive Waste', img: 'radioactive-waste.png' },
];

export const subTypesData = {
  organic: [
    { name: "Food Waste", img: "food.jpg" },
    { name: "Garden Waste", img: "garden-waste.png" },
    { name: "Agricultural Waste", img: "agricultural-waste.png" }
  ],
  recyclable: [
    { name: "Paper", img: "paper.png" },
    { name: "Cardboard", img: "cardboard.png" },
    { name: "Glass", img: "glass.png" },
    { name: "Metals", img: "metals.png" },
    { name: "Plastics", img: "plastic.jpg" }
  ],
  hazardous: [
    { name: "Batteries", img: "batteries.png" },
    { name: "Medical Waste", img: "medical-waste.png" },
    { name: "Chemicals", img: "chemicals.png" }
  ],
  biomedical: [
    { name: "Hospital Disposables", img: "hospital-disposables.png" },
    { name: "Syringes", img: "syringes.png" },
    { name: "Pharmaceutical Waste", img: "pharmaceutical-waste.png" }
  ],
  construction: [
    { name: "Concrete", img: "concrete.png" },
    { name: "Bricks", img: "bricks.png" },
    { name: "Wood", img: "wood.png" },
    { name: "Tiles", img: "tiles.png" }
  ],
  industrial: [
    { name: "Factory Sludge", img: "factory-sludge.png" },
    { name: "Scraps", img: "scraps.png" },
    { name: "Production By-products", img: "production-by-products.png" }
  ],
  "e-waste": [
    { name: "Old Electronics", img: "old-electronics.png" },
    { name: "Laptops", img: "laptops.png" },
    { name: "Smartphones", img: "smartphones.png" },
    { name: "TVs", img: "tvs.png" }
  ],
  msw: [
    { name: "Household Waste", img: "household-waste.png" },
    { name: "Mixed Waste", img: "mixed-waste.png" }
  ],
  residual: [
    { name: "Non-recyclable Waste", img: "non-recyclable-waste.png" },
    { name: "Soiled Packaging", img: "soiled-packaging.png" }
  ],
  radioactive: [
    { name: "Nuclear Waste", img: "nuclear-waste.png" },
    { name: "Research Lab Waste", img: "research-lab-waste.png" }
  ],
};


export const wasteActions = {
  // ORGANIC
  "food-waste": ["Composting", "Anaerobic Digestion", "Animal Feed", "Upcycling"],
  "garden-waste": ["Composting", "Mulching", "Biochar Production"],
  "agricultural-waste": ["Composting", "Bioenergy", "Animal Bedding", "Biochar Production"],

  // RECYCLABLE
  paper: ["Recycling", "Upcycling", "Composting"],
  cardboard: ["Recycling", "Upcycling", "Composting"],
  glass: ["Recycling", "Upcycling"],
  metals: ["Recycling", "Upcycling"],
  plastics: ["Recycling", "Upcycling", "Energy Recovery"],

  // HAZARDOUS
  batteries: ["Safe Disposal", "Recycling"],
  "hazardous-e-waste": ["Recycling", "Safe Disposal"],
  "medical-waste": ["Incineration", "Autoclaving", "Secure Landfilling"],
  chemicals: ["Neutralization", "Safe Disposal", "Recycling"],

  // BIOMEDICAL
  "hospital-disposables": ["Incineration", "Sterilization and Shredding"],
  syringes: ["Incineration", "Needle Destruction and Recycling"],
  "pharmaceutical-waste": ["High-Temperature Incineration", "Return to Manufacturer"],

  // CONSTRUCTION
  concrete: ["Recycling", "Downcycling"],
  bricks: ["Recycling", "Reuse"],
  wood: ["Recycling", "Upcycling", "Energy Recovery"],
  tiles: ["Recycling", "Reuse"],

  // INDUSTRIAL
  "factory-sludge": ["Stabilization and Landfilling", "Co-processing in Cement Kilns"],
  scraps: ["Recycling", "Upcycling"],
  "production-by-products": ["Industrial Symbiosis", "Recycling"],

  // E-WASTE (CONSUMER)
  "old-electronics": ["Recycling", "Refurbishing and Reuse"],
  laptops: ["Recycling", "Refurbishing and Reuse"],
  smartphones: ["Recycling", "Refurbishing and Reuse"],
  tvs: ["Recycling", "Refurbishing and Reuse"],

  // MSW
  "household-waste": ["Segregation and Recycling", "Composting", "Energy Recovery"],
  "mixed-waste": ["Material Recovery", "Refuse-Derived Fuel (RDF)", "Landfilling"],

  // RESIDUAL
  "non-recyclable-waste": ["Energy Recovery", "Secure Landfilling"],
  "soiled-packaging": ["Energy Recovery", "Secure Landfilling"],

  // RADIOACTIVE
  "nuclear-waste": ["Vitrification", "Deep Geological Disposal"],
  "research-lab-waste": ["Decay Storage", "Encapsulation and Disposal"],
};

export const actionProcessData = {
  // ORGANIC – FOOD WASTE
  "food-waste-composting": {
    products: [
      "Home garden compost",
      "Organic fertilizer for farms",
      "Potting soil blends",
      "Community garden compost"
    ],
    procedure:
      "Food scraps are collected, shredded if needed, and mixed with dry materials like leaves to balance moisture and carbon content. The mixture is aerated regularly and cured until it becomes stable, nutrient-rich compost suitable for soil application."
  },
  "food-waste-anaerobic-digestion": {
    products: [
      "Biogas for cooking",
      "Electricity from biogas",
      "Digestate-based fertilizer"
    ],
    procedure:
      "Food waste is pulped, diluted, and fed into sealed anaerobic digesters where microbes break it down without oxygen to produce biogas. The biogas is captured for energy use, and the remaining digestate is dewatered and applied as nutrient-rich fertilizer on fields."
  },
  "food-waste-animal-feed": {
    products: [
      "Cooked food scraps for pig feed",
      "Dehydrated food-based poultry feed",
      "Fermented food-based cattle feed"
    ],
    procedure:
      "Suitable food waste is sorted to remove contaminants, then cooked or pasteurized to kill pathogens and stabilize the material. It is then either fed directly in controlled rations or dried and blended into formulated animal feed products."
  },
  "food-waste-upcycling": {
    products: [
      "Fruit peel jams and marmalades",
      "Dehydrated vegetable chips",
      "Bread-based croutons and breadcrumbs"
    ],
    procedure:
      "Edible food by-products like fruit peels and stale bread are cleaned, sorted, and processed with minimal additional ingredients to create value-added foods. Techniques such as dehydration, grinding, boiling with sugar, or baking transform the waste into shelf-stable, marketable products."
  },

  // ORGANIC – GARDEN WASTE
  "garden-waste-composting": {
    products: [
      "Garden compost",
      "Mulch-enriched topsoil"
    ],
    procedure:
      "Leaves, grass clippings, and small branches are shredded and mixed to achieve a balanced carbon-to-nitrogen ratio. The pile is moistened and turned periodically until it breaks down into dark, crumbly compost that can be used to improve soil structure."
  },
  "garden-waste-mulching": {
    products: [
      "Mulch for landscaping",
      "Tree ring mulch",
      "Mulch for erosion control"
    ],
    procedure:
      "Garden trimmings are chipped into coarse pieces using a shredder or chipper. The chips are then directly applied around plants and on bare soil surfaces to suppress weeds, retain moisture, and reduce erosion."
  },
  "garden-waste-biochar-production": {
    products: [
      "Biochar soil amendment",
      "Biochar-based potting mix",
      "Biochar for water filtration pilots"
    ],
    procedure:
      "Dry garden waste is fed into a low-oxygen pyrolysis kiln and heated to high temperatures to convert it into stable carbon-rich biochar. The resulting biochar is cooled, crushed, and blended into soil or substrates to improve water retention and nutrient-holding capacity."
  },

  // ORGANIC – AGRICULTURAL WASTE
  "agricultural-waste-composting": {
    products: [
      "Farmyard manure-compost blend",
      "Composted crop residue",
      "Organic soil conditioner"
    ],
    procedure:
      "Crop residues, animal manure, and other farm wastes are windrowed or piled and layered to achieve proper moisture and aeration. The piles are monitored for temperature and turned regularly until the material stabilizes into mature compost that can be returned to fields."
  },
  "agricultural-waste-bioenergy": {
    products: [
      "Biogas from dung and residues",
      "Biomass briquettes",
      "Pellets for biomass boilers"
    ],
    procedure:
      "Agricultural residues are either fed into biogas digesters or compacted into briquettes and pellets. In digesters, microbes generate biogas from organic feedstock, while in briquetting lines, shredded biomass is dried, compressed, and used as a solid fuel in boilers or cookstoves."
  },
  "agricultural-waste-animal-bedding": {
    products: [
      "Straw-based animal bedding",
      "Chopped husk bedding",
      "Pelleted bedding"
    ],
    procedure:
      "Clean straw, husks, or similar residues are dust-screened and chopped to a consistent size. The material is then packaged loose or compressed into pellets to provide absorbent bedding for livestock housing."
  },
  "agricultural-waste-biochar-production": {
    products: [
      "Rice husk biochar",
      "Maize cob biochar",
      "Sugarcane bagasse biochar"
    ],
    procedure:
      "Specific agricultural residues like rice husk or cobs are dried and fed into controlled pyrolysis units. The resulting biochar is cooled, ground, and incorporated into soil management programs to enhance fertility and sequester carbon."
  },

  // RECYCLABLE – PAPER
  "paper-recycling": {
    products: [
      "Recycled copier paper",
      "Cardboard packaging",
      "Newsprint"
    ],
    procedure:
      "Waste paper is collected, sorted by grade, and pulped with water to separate fibers and remove inks using flotation or washing. The cleaned pulp is then formed, pressed, and dried on paper machines to produce new paper and packaging products."
  },
  "paper-upcycling": {
    products: [
      "Handmade recycled paper notebooks",
      "Paper gift bags",
      "Paper-based art and stationery"
    ],
    procedure:
      "Selected waste paper is shredded and mixed with water to form a pulp, sometimes with natural dyes or flower petals. The pulp is then hand-scooped onto screens, pressed, dried, and cut or bound into artisanal stationery and craft products."
  },
  "paper-composting": {
    products: [
      "Compost with shredded paper",
      "Carbon-rich compost amendment"
    ],
    procedure:
      "Uncoated, non-glossy paper is shredded and added as a carbon-rich bulking agent to organic compost piles. It is mixed with moist, nitrogen-rich materials and allowed to decompose alongside food and yard waste to create balanced compost."
  },

  // RECYCLABLE – CARDBOARD
  "cardboard-recycling": {
    products: [
      "Recycled corrugated boxes",
      "Paperboard for cartons"
    ],
    procedure:
      "Used cardboard boxes are flattened, baled, and transported to paper mills where they are pulped and screened to remove tape and contaminants. The resulting fiber slurry is then used to make new corrugated boards and packaging materials."
  },
  "cardboard-upcycling": {
    products: [
      "Storage organizers",
      "DIY furniture",
      "Children’s craft sets"
    ],
    procedure:
      "Clean cardboard is cut, folded, and reinforced using glue or fasteners to create functional items like storage units and lightweight furniture. Design patterns and templates guide the cutting to ensure structural strength and consistent dimensions."
  },
  "cardboard-composting": {
    products: [
      "Sheet mulch",
      "Brown layer for compost piles"
    ],
    procedure:
      "Plain cardboard is stripped of labels and plastic tape, then shredded or laid as sheets over soil. It is moistened and covered with organic material to act as a mulch or carbon layer that gradually decomposes into the soil."
  },

  // RECYCLABLE – GLASS
  "glass-recycling": {
    products: [
      "New glass bottles",
      "Glass jars",
      "Glass wool insulation"
    ],
    procedure:
      "Waste glass is color-sorted, cleaned, and crushed into cullet. The cullet is mixed with raw materials, melted in furnaces, and molded or blown into new glass containers or industrial glass products."
  },
  "glass-upcycling": {
    products: [
      "Decorative glass lamps",
      "Upcycled glass vases",
      "Mosaic tiles from broken glass"
    ],
    procedure:
      "Intact or broken glass containers are cleaned and cut or reshaped using tools like glass cutters and kilns. They are then assembled, painted, or combined with other materials to create decorative items and functional home accessories."
  },

  // RECYCLABLE – METALS
  "metals-recycling": {
    products: [
      "Recycled steel rebar",
      "Aluminium beverage cans",
      "Metal sheets and profiles"
    ],
    procedure:
      "Metal scrap is sorted by type, cleaned, and shredded or baled before being fed into furnaces or smelters. After melting and refining, the molten metal is cast or rolled into new products such as bars, cans, and structural components."
  },
  "metals-upcycling": {
    products: [
      "Metal art sculptures",
      "Upcycled furniture frames",
      "Decorative garden structures"
    ],
    procedure:
      "Metal offcuts and discarded parts are cut, welded, and ground according to artistic or functional designs. The fabricated pieces are then finished with polishing or protective coatings to create durable, high-value upcycled items."
  },

  // RECYCLABLE – PLASTICS
  "plastics-recycling": {
    products: [
      "Polyester fabric for clothing", // e.g., from recycled PET bottles [web:11]
      "Recycled plastic lumber for benches", // [web:11]
      "Rugs and carpets from recycled PET", // [web:11]
      "Recycled plastic packaging"
    ],
    procedure:
      "Plastic waste is sorted by polymer type, washed to remove residues, and mechanically shredded into flakes. The flakes are melted and pelletized, then used in manufacturing lines to produce textiles, lumber-like profiles, packaging, and other plastic products."
  },
  "plastics-upcycling": {
    products: [
      "Self-watering planters from bottles", // [web:15]
      "Vertical garden modules", // [web:13][web:15]
      "Plastic bottle bird feeders", // [web:15]
      "Decorative lamps from bottles" // [web:15]
    ],
    procedure:
      "Intact plastic bottles and containers are cleaned, cut, and drilled following simple DIY patterns to create planters, bird feeders, and decorative objects. The pieces are assembled with cords, tape, or glue, and sometimes painted, to produce long-lasting, functional upcycled items." // [web:13][web:15]
  },
  "plastics-energy-recovery": {
    products: [
      "Refuse-derived fuel (RDF) pellets",
      "Cement kiln fuel blend"
    ],
    procedure:
      "Non-recyclable plastic fractions are shredded, dried, and sometimes mixed with other high-calorific wastes to form RDF. These prepared fuels are then fed into industrial furnaces such as cement kilns to recover energy and reduce the use of conventional fossil fuels."
  },

  // HAZARDOUS – BATTERIES
  "batteries-safe-disposal": {
    products: [
      "Securely landfilled battery residues",
      "Stabilized hazardous waste blocks"
    ],
    procedure:
      "Used batteries are collected in sealed containers and transported to authorized hazardous waste facilities. Here they are stabilized, often with encapsulation or solidification, and disposed of in engineered landfills with leachate control."
  },
  "batteries-recycling": {
    products: [
      "Recovered metals like cobalt and nickel",
      "Recycled lead for new batteries",
      "Plastic casings for reuse"
    ],
    procedure:
      "Batteries are disassembled or crushed in controlled environments, and their components are separated using mechanical, chemical, or thermal processes. Metals and plastics are recovered and refined for use in new batteries and other industrial products."
  },

  // HAZARDOUS – E-WASTE (GENERAL)
  "hazardous-e-waste-recycling": {
    products: [
      "Recovered copper and gold",
      "Plastic granules from casings",
      "Refurbished components"
    ],
    procedure:
      "E-waste items are manually or mechanically dismantled, segregating circuit boards, metals, plastics, and glass. Precious and base metals are extracted using smelting or hydrometallurgical techniques, while plastics and other materials are processed for reuse."
  },
  "hazardous-e-waste-safe-disposal": {
    products: [
      "Securely stored hazardous residues",
      "Stabilized ash and slag"
    ],
    procedure:
      "Non-recyclable fractions and hazardous residues from e-waste processing are solidified and stabilized. These materials are then placed in licensed hazardous waste landfills with long-term monitoring and containment systems."
  },

  // HAZARDOUS – MEDICAL WASTE
  "medical-waste-incineration": {
    products: [
      "Sterilized inert ash",
      "Heat energy for facility use"
    ],
    procedure:
      "Infectious medical waste is fed into high-temperature incinerators designed to destroy pathogens and hazardous organics. The resulting ash is collected and disposed of in secure landfills, while heat may be recovered for steam or hot water."
  },
  "medical-waste-autoclaving": {
    products: [
      "Sterilized shredded waste",
      "Reduced-risk solid waste"
    ],
    procedure:
      "Bagged medical waste is loaded into autoclaves where it is exposed to pressurized steam at high temperature for a specified duration. After sterilization, the waste is often shredded and can be handled as non-infectious solid waste for further processing or disposal."
  },
  "medical-waste-secure-landfilling": {
    products: [
      "Securely contained medical residues"
    ],
    procedure:
      "Certain medical waste streams and incineration ash are sealed in appropriate containers. These are then placed in engineered sanitary or hazardous landfills with liners and leachate management systems to prevent environmental release."
  },

  // HAZARDOUS – CHEMICALS
  "chemicals-neutralization": {
    products: [
      "Neutralized wastewater",
      "Stabilized sludge"
    ],
    procedure:
      "Acidic or alkaline chemical wastes are analyzed and treated with neutralizing agents under controlled conditions to reach safe pH levels. Precipitates and sludge are separated and managed as solid waste, while treated water is discharged or further polished."
  },
  "chemicals-safe-disposal": {
    products: [
      "Securely disposed hazardous chemicals",
      "Solidified chemical residues"
    ],
    procedure:
      "Unusable chemical wastes are packed, labeled, and transported to licensed hazardous waste treatment, storage, and disposal facilities. There they may be solidified, encapsulated, or incinerated before final secure disposal."
  },
  "chemicals-recycling": {
    products: [
      "Recovered solvents",
      "Regenerated acids",
      "Reused process chemicals"
    ],
    procedure:
      "Selected chemical streams such as solvents are distilled or otherwise purified to remove contaminants. The recovered chemicals are then tested and reintroduced into industrial processes as secondary raw materials."
  },

  // BIOMEDICAL – HOSPITAL DISPOSABLES
  "hospital-disposables-incineration": {
    products: [
      "Ash from burned disposables",
      "Destroyed infectious load"
    ],
    procedure:
      "Single-use items like gowns, masks, and tubing classified as infectious are collected in color-coded bags and incinerated at high temperatures. This process destroys pathogens and reduces waste volume, with ash handled as hazardous residue."
  },
  "hospital-disposables-sterilization-and-shredding": {
    products: [
      "Sterilized plastic flakes",
      "Non-infectious shredded waste"
    ],
    procedure:
      "Hospital disposables are autoclaved or chemically disinfected to eliminate pathogens. The sterilized materials are then shredded, sometimes separated by material type, and may be sent for recycling or safe landfilling."
  },

  // BIOMEDICAL – SYRINGES
  "syringes-incineration": {
    products: [
      "Inert ash from syringes",
      "Destroyed sharps and plastics"
    ],
    procedure:
      "Used syringes and sharps are collected in puncture-proof containers and fed into incinerators designed for biomedical waste. The high temperature destroys needles and plastics, producing ash that is collected for secure disposal."
  },
  "syringes-needle-destruction-and-recycling": {
    products: [
      "Blunted or melted needles",
      "Recycled plastic from syringe barrels"
    ],
    procedure:
      "Needles are rendered non-reusable using needle destroyers or encapsulation devices, making them safe for subsequent handling. The remaining plastic components may be sterilized and redirected to plastic recycling streams where regulations permit."
  },

  // BIOMEDICAL – PHARMACEUTICAL WASTE
  "pharmaceutical-waste-high-temperature-incineration": {
    products: [
      "Destroyed active pharmaceutical ingredients",
      "Ash for secure disposal"
    ],
    procedure:
      "Expired or unusable medicines are segregated and sent to high-temperature incinerators with appropriate gas-cleaning systems. The process destroys complex pharmaceutical compounds, and resulting ash is disposed of in controlled facilities."
  },
  "pharmaceutical-waste-return-to-manufacturer": {
    products: [
      "Centralized pharmaceutical destruction",
      "Recovered packaging materials"
    ],
    procedure:
      "Unopened or recalled medicines are collected through take-back programs and returned to manufacturers or authorized aggregators. These entities then manage bulk-level destruction and may recover packaging materials for recycling."
  },

  // CONSTRUCTION – CONCRETE
  "concrete-recycling": {
    products: [
      "Recycled concrete aggregate",
      "Road base material"
    ],
    procedure:
      "Demolished concrete is crushed and screened to remove rebar and fine debris. The resulting aggregate is graded and reused in road sub-base layers, new concrete mixes, or drainage applications."
  },
  "concrete-downcycling": {
    products: [
      "Fill material for land reclamation",
      "Sub-grade construction fill"
    ],
    procedure:
      "Lower-quality concrete rubble is crushed without extensive cleaning and used as bulk fill. It is placed and compacted in non-structural applications such as embankment construction and landfilling projects."
  },

  // CONSTRUCTION – BRICKS
  "bricks-recycling": {
    products: [
      "Crushed brick aggregate",
      "Landscape pathways"
    ],
    procedure:
      "Old bricks are either cleaned for reuse or crushed into smaller pieces. The crushed material is used as aggregate in landscaping, lightweight fill, or blended into new masonry materials."
  },
  "bricks-reuse": {
    products: [
      "Reclaimed bricks for building",
      "Decorative interior walls"
    ],
    procedure:
      "Reusable bricks are carefully dismantled, cleaned of mortar, and graded for quality. They are then sold or used in new construction and restoration projects where an aged aesthetic is desired."
  },

  // CONSTRUCTION – WOOD
  "wood-recycling": {
    products: [
      "Particleboard panels",
      "Wood chips for pulp",
      "Engineered wood products"
    ],
    procedure:
      "Clean wood offcuts and pallets are shredded or chipped and separated from nails or metal fittings. The chips and fibers are then used as feedstock in particleboard plants, pulp mills, or other engineered wood manufacturing."
  },
  "wood-upcycling": {
    products: [
      "Upcycled furniture",
      "Decorative wall cladding",
      "Handcrafted home décor"
    ],
    procedure:
      "Recovered timber and pallets are de-nailed, cut, and sanded to create new furniture or interior finishes. Designs make use of existing dimensions and textures to minimize additional processing while maximizing visual appeal."
  },
  "wood-energy-recovery": {
    products: [
      "Biomass fuel chips",
      "Wood pellets"
    ],
    procedure:
      "Non-treated wood residues are chipped, dried, and sometimes pelletized into uniform fuel products. These fuels are then burned in biomass boilers or industrial furnaces to generate heat and power."
  },

  // CONSTRUCTION – TILES
  "tiles-recycling": {
    products: [
      "Crushed ceramic aggregate",
      "Decorative terrazzo mixes"
    ],
    procedure:
      "Broken tiles are collected and crushed into small fragments or powder. The material is then used as aggregate in terrazzo flooring, decorative concrete, or as a replacement for natural stone chips."
  },
  "tiles-reuse": {
    products: [
      "Reused floor tiles",
      "Mosaic art installations"
    ],
    procedure:
      "Intact tiles salvaged from renovations are cleaned and sorted by type and size. They are then relaid in new projects or creatively arranged for mosaics and decorative surfaces."
  },

  // INDUSTRIAL – FACTORY SLUDGE
  "factory-sludge-stabilization-and-landfilling": {
    products: [
      "Solidified sludge blocks",
      "Securely landfilled industrial residues"
    ],
    procedure:
      "Industrial sludge is analyzed and mixed with binders like cement or lime to immobilize contaminants and reduce leachability. The stabilized material is then cast or compacted and placed in engineered landfills with leachate control."
  },
  "factory-sludge-co-processing-in-cement-kilns": {
    products: [
      "Alternative fuel for cement kilns",
      "Clinker with co-processed residues"
    ],
    procedure:
      "Suitable dewatered sludge is blended with other alternative fuels and fed into cement kilns at high temperatures. Organic components are destroyed while inorganic fractions become part of the clinker, reducing the need for virgin raw materials."
  },

  // INDUSTRIAL – SCRAPS
  "scraps-recycling": {
    products: [
      "Recycled metal ingots",
      "Regranulated plastic pellets",
      "Recycled paper pulp"
    ],
    procedure:
      "Production scraps are segregated by material type and processed through standard recycling routes such as melting, pulping, or grinding. The recovered materials are then reintegrated into manufacturing lines as secondary raw materials."
  },
  "scraps-upcycling": {
    products: [
      "Designer industrial furniture",
      "Art installations from scrap",
      "Custom fixtures and fittings"
    ],
    procedure:
      "Unique industrial offcuts and components are cleaned and reconfigured through cutting, welding, and assembly. Designers use the inherent shapes and finishes to create bespoke furniture and art pieces with minimal additional processing."
  },

  // INDUSTRIAL – PRODUCTION BY-PRODUCTS
  "production-by-products-industrial-symbiosis": {
    products: [
      "Gypsum from flue gas desulfurization",
      "Slag used in road construction",
      "By-product steam for district heating"
    ],
    procedure:
      "By-products generated in one industrial process are characterized and matched with other industries that can use them as inputs. Agreements and logistics are set up so that materials like slag, gypsum, or waste heat are transferred and used productively instead of discarded."
  },
  "production-by-products-recycling": {
    products: [
      "Recovered process chemicals",
      "Recycled catalysts",
      "Reprocessed intermediate materials"
    ],
    procedure:
      "By-product streams are treated to recover valuable constituents through methods like filtration, distillation, or regeneration. The recovered materials are then reused within the same plant or sold to other users as secondary raw materials."
  },

  // E-WASTE – OLD ELECTRONICS
  "old-electronics-recycling": {
    products: [
      "Recovered metals and plastics",
      "Secondary glass from screens"
    ],
    procedure:
      "Legacy electronics are dismantled and sorted to separate housings, circuit boards, cables, and screens. Each material stream goes through specialized recycling processes to recover metals, plastics, and glass for reuse."
  },
  "old-electronics-refurbishing-and-reuse": {
    products: [
      "Refurbished desktop computers",
      "Reused monitors",
      "Donated devices for schools"
    ],
    procedure:
      "Old but functional electronics are tested, cleaned, and have worn components replaced or upgraded. Refurbished devices are then reloaded with software and distributed through resale, donation, or leasing programs."
  },

  // E-WASTE – LAPTOPS
  "laptops-recycling": {
    products: [
      "Recovered lithium-ion cells",
      "Aluminium casings for reuse",
      "Recycled printed circuit boards"
    ],
    procedure:
      "End-of-life laptops are opened and their batteries, boards, housings, and screens separated. Each part is directed to appropriate recycling routes where metals and other materials are extracted and purified."
  },
  "laptops-refurbishing-and-reuse": {
    products: [
      "Refurbished business laptops",
      "Chromebook conversions",
      "Donated student laptops"
    ],
    procedure:
      "Used laptops with acceptable hardware are inspected, cleaned, and repaired, often receiving new storage drives or batteries. Fresh operating systems and software are installed before the devices are sold or donated for extended life."
  },

  // E-WASTE – SMARTPHONES
  "smartphones-recycling": {
    products: [
      "Recovered gold and copper",
      "Recycled plastic housings"
    ],
    procedure:
      "Collected smartphones are depopulated by removing batteries and major components, which are then mechanically processed. Specialized facilities recover precious metals and plastics that are reintroduced into manufacturing supply chains."
  },
  "smartphones-refurbishing-and-reuse": {
    products: [
      "Refurbished smartphones",
      "Certified pre-owned devices"
    ],
    procedure:
      "Used smartphones are checked for functional issues, repaired with replacement screens or batteries, and thoroughly cleaned. They are then tested, graded, and resold or provided under buyback and exchange programs."
  },

  // E-WASTE – TVS
  "tvs-recycling": {
    products: [
      "Recovered copper from coils",
      "Glass cullet from screens",
      "Recycled plastics from casings"
    ],
    procedure:
      "Televisions are disassembled to separate casings, circuit boards, and display units, with older CRTs handled in specialized lines. Components are processed to recover metals, glass, and plastics, while hazardous phosphors are carefully managed."
  },
  "tvs-refurbishing-and-reuse": {
    products: [
      "Refurbished LED TVs",
      "Reused displays for signage"
    ],
    procedure:
      "Recent-generation TVs that are repairable receive new boards, backlights, or panels as needed. After testing and calibration, they are resold or used as displays in commercial or educational settings."
  },

  // MSW – HOUSEHOLD WASTE
  "household-waste-segregation-and-recycling": {
    products: [
      "Recyclable paper and plastics",
      "Glass cullet",
      "Metal scrap"
    ],
    procedure:
      "Mixed household waste is segregated at source or in material recovery facilities using manual sorting and mechanical equipment. Recyclable fractions are baled and sent to specialized recyclers, while non-recyclables follow other treatment routes."
  },
  "household-waste-composting": {
    products: [
      "Community compost",
      "Organic fertilizer for urban farms"
    ],
    procedure:
      "Biodegradable components like kitchen scraps and yard waste are separated from the rest and processed in composting units. The controlled decomposition yields compost that can be used in community gardens and landscaping."
  },
  "household-waste-energy-recovery": {
    products: [
      "Electricity from waste-to-energy plants",
      "District heating from incineration"
    ],
    procedure:
      "Residual household waste is fed into waste-to-energy incinerators equipped with emissions control systems. The heat produced generates steam that drives turbines for electricity and may also supply district heating networks."
  },

  // MSW – MIXED WASTE
  "mixed-waste-material-recovery": {
    products: [
      "Recovered recyclables from MRFs",
      "Sorted organic fraction"
    ],
    procedure:
      "Mixed municipal waste is processed in material recovery facilities using screens, conveyors, magnets, and air classifiers. These systems separate recyclables and an organic-rich fraction for further treatment."
  },
  "mixed-waste-refuse-derived-fuel-rdf": {
    products: [
      "RDF fluff",
      "RDF pellets"
    ],
    procedure:
      "High-calorific components like plastics, paper, and textiles are extracted from mixed waste, shredded, and dried. The prepared material is then either used as loose RDF or compressed into pellets for industrial combustion."
  },
  "mixed-waste-landfilling": {
    products: [
      "Landfilled stabilized waste",
      "Landfill gas for energy"
    ],
    procedure:
      "Residual mixed waste that cannot be recovered is compacted and placed in engineered landfills with leachate and gas collection systems. Over time, landfill gas can be captured and utilized for power generation or flaring."
  },

  // RESIDUAL – NON-RECYCLABLE WASTE
  "non-recyclable-waste-energy-recovery": {
    products: [
      "Heat and power from incineration",
      "Solid residues for disposal"
    ],
    procedure:
      "Non-recyclable waste fractions are combusted in controlled incinerators or co-processing facilities. The energy released is captured as steam or electricity, while remaining ash and slag are safely managed."
  },
  "non-recyclable-waste-secure-landfilling": {
    products: [
      "Securely contained residual waste"
    ],
    procedure:
      "Residual waste that is unsuitable for incineration is compacted and disposed of in sanitary landfills with liners and leachate collection. Regular monitoring ensures that environmental standards are maintained over the landfill's lifespan."
  },

  // RESIDUAL – SOILED PACKAGING
  "soiled-packaging-energy-recovery": {
    products: [
      "Energy from contaminated packaging",
      "Clinker with co-processed residues"
    ],
    procedure:
      "Food-soiled or multilayer packaging is shredded and sometimes blended into RDF for incinerators or cement kilns. The embedded energy is recovered while the mineral content may integrate into clinker in cement manufacturing."
  },
  "soiled-packaging-secure-landfilling": {
    products: [
      "Landfilled soiled packaging residues"
    ],
    procedure:
      "When energy recovery is not feasible, soiled packaging is compacted and landfilled in lined sanitary sites. Periodic cover layers and leachate control systems minimize environmental impacts."
  },

  // RADIOACTIVE – NUCLEAR WASTE
  "nuclear-waste-vitrification": {
    products: [
      "Vitrified high-level waste canisters"
    ],
    procedure:
      "High-level liquid radioactive waste is mixed with glass-forming materials and heated in specialized furnaces to form a stable glass matrix. The molten mixture is poured into stainless steel canisters where it cools and solidifies, immobilizing radionuclides."
  },
  "nuclear-waste-deep-geological-disposal": {
    products: [
      "Deeply buried waste packages",
      "Engineered barrier systems"
    ],
    procedure:
      "Conditioned radioactive waste packages are transported to deep geological repositories located in stable rock formations. They are emplaced in engineered tunnels with multiple barrier layers designed to contain radioactivity over geological timescales."
  },

  // RADIOACTIVE – RESEARCH LAB WASTE
  "research-lab-waste-decay-storage": {
    products: [
      "Decayed low-level radioactive waste",
      "Waste reclassified as non-radioactive"
    ],
    procedure:
      "Short-lived radioactive materials from research labs are stored in shielded facilities for periods sufficient to allow decay to safe levels. After activity falls below regulatory thresholds, they may be treated as conventional waste under supervision."
  },
  "research-lab-waste-encapsulation-and-disposal": {
    products: [
      "Encapsulated radioactive sources",
      "Securely disposed lab waste"
    ],
    procedure:
      "Solid radioactive waste and sealed sources are embedded in cement or polymer matrices within robust containers. These encapsulated units are then placed in licensed low- and intermediate-level radioactive waste disposal facilities."
  }
};