export interface Mineral {
  id: string;
  name: string;
  imageUrls: string[];
  formula?: string;
  classification?: string;
  characteristics?: string;
  hints?: string[];
  specificGravity?: string;
  hardness?: string;
  cleavage?: string;
  luster?: string;
  streak?: string;
  color?: string;
  crystalSystem?: string;
  crystalClass?: string;
  crystalHabit?: string;
  environment?: string[];
  associations?: string[];
  uses?: string[];
  fracture?: string;
  features?: string;
}

export const minerals: Mineral[] = [
  {
    id: "quartz",
    name: "Quartz",
    imageUrls: ["/images/minerals/quartz.jpg", "/images/minerals/quartz_crystal.jpg"],
    formula: "SiO₂",
    classification: "Silicate - Tectosilicate",
    characteristics: "Extremely common in a wide variety of geologic environments and colors",
    color: "Various (clear, white, purple, pink, etc.)",
    luster: "Glassy (vitreous)",
    hardness: "7",
    fracture: "Conchoidal",
    crystalSystem: "Trigonal (α-quartz)",
    crystalHabit: "Hexagonal prisms (β-quartz shape often preserved)",
    environment: ["Wide variety of geologic environments"],
    hints: [
      "Glassy (vitreous) luster",
      "Hardness 7 (scratches glass)",
      "Conchoidal fracture",
      "Hexagonal prism crystal shape",
      "All surface quartz is α-quartz (trigonal) but often preserves β-quartz hexagonal shape"
    ]
  },
  {
    id: "graphite",
    name: "Graphite",
    imageUrls: ["/images/minerals/graphite.jpg"],
    formula: "C",
    classification: "Native Element",
    characteristics: "Generally found in metamorphic rocks whose protoliths were sedimentary rocks containing organic matter",
    color: "Black to dark gray",
    luster: "Metallic to dull",
    streak: "Black",
    hardness: "1-2",
    crystalHabit: "Foliated masses, sometimes hexagonal plates",
    environment: ["Metamorphic rocks from organic-rich sedimentary protoliths"],
    uses: ["Pencil 'lead'", "Lubricants", "Refractory materials"],
    hints: [
      "Black color and streak",
      "Metallic to dull luster",
      "Very soft (hardness 1-2)",
      "Feels slippery, soft, and greasy",
      "Marks paper (used in pencils)"
    ]
  },
  {
    id: "diamond",
    name: "Diamond",
    imageUrls: ["/images/minerals/diamond.jpg"],
    formula: "C",
    classification: "Native Element",
    characteristics: "Polymorph of carbon formed at high pressures deep in the Earth",
    hardness: "10",
    crystalHabit: "Octahedral crystals common",
    luster: "Adamantine",
    environment: [
      "Kimberlites brought rapidly to the surface",
      "Ultra-high pressure (UHP) metamorphic rocks",
      "Some meteorites (nano-diamonds)"
    ],
    hints: [
      "Extreme hardness (10 on Mohs scale)",
      "Octahedral crystal form common",
      "Found in kimberlites",
      "Adamantine luster"
    ]
  },
  {
    id: "gold",
    name: "Gold",
    imageUrls: ["/images/minerals/gold.jpg"],
    formula: "Au",
    classification: "Native Element",
    characteristics: "Economically important mineral formed in hydrothermal settings or as placer deposits",
    color: "Golden-yellow",
    luster: "Metallic",
    streak: "Golden-yellow",
    hardness: "2.5-3",
    crystalHabit: "Branches or masses in hydrothermal settings; nuggets or flakes in placer deposits",
    environment: ["Hydrothermal settings", "Placer deposits"],
    associations: ["Quartz veins"],
    hints: [
      "Golden-yellow color and streak",
      "Bright metallic luster",
      "Malleable and sectile",
      "High specific gravity",
      "Often found with quartz"
    ]
  },
  {
    id: "silver",
    name: "Silver",
    imageUrls: ["/images/minerals/silver.jpg"],
    formula: "Ag",
    classification: "Native Element",
    characteristics: "Often grows as wires or masses, silver in color but often tarnishes black",
    color: "Silver-white (may tarnish black)",
    luster: "Metallic",
    hardness: "2.5-3",
    crystalHabit: "Wires or masses",
    environment: ["Hydrothermal deposits"],
    hints: [
      "Silver-white color (may tarnish black)",
      "Metallic luster",
      "Often grows as wires",
      "Malleable and ductile"
    ]
  },
  {
    id: "copper",
    name: "Copper",
    imageUrls: ["/images/minerals/copper.jpg"],
    formula: "Cu",
    classification: "Native Element",
    characteristics: "Often grows in masses or branches, crystals are uncommon",
    color: "Copper-red (may tarnish green or black)",
    luster: "Metallic",
    hardness: "2.5-3",
    crystalHabit: "Masses or branches",
    environment: [
      "Near mafic volcanic rocks that interacted with Cu-bearing fluids",
      "Hydrothermal sulfide deposits"
    ],
    hints: [
      "Distinctive copper-red color",
      "Metallic luster",
      "Often grows in masses or branches",
      "Malleable and ductile"
    ]
  },
  {
    id: "sulfur",
    name: "Sulfur",
    imageUrls: ["/images/minerals/sulfur.jpg"],
    formula: "S",
    classification: "Native Element",
    characteristics: "Forms near volcanic vents or in evaporite deposits",
    color: "Yellow",
    luster: "Greasy to resinous",
    hardness: "1.5-2.5",
    crystalHabit: "Crystals often grow in masses",
    environment: [
      "Near fumaroles or volcanic vents",
      "Hot springs",
      "Marine evaporite deposits"
    ],
    hints: [
      "Bright yellow color",
      "Greasy to resinous luster",
      "Occurs near volcanic vents or in evaporites",
      "Low hardness"
    ]
  },
  {
    id: "iron",
    name: "Iron",
    imageUrls: ["/images/minerals/iron.jpg"],
    formula: "Fe",
    classification: "Native Element",
    characteristics: "Metallic iron found in basalts, carbonaceous sediments, or with organic matter",
    color: "Silver-gray",
    luster: "Metallic",
    streak: "Gray",
    hardness: "4-5",
    environment: [
      "Basalts",
      "Carbonaceous sediments",
      "With organic matter"
    ],
    hints: [
      "Metallic luster",
      "Magnetic",
      "Gray streak",
      "Silver-gray color"
    ]
  },
  {
    id: "pyrite",
    name: "Pyrite",
    imageUrls: ["/images/minerals/pyrite.jpg"],
    formula: "FeS₂",
    classification: "Sulfide",
    characteristics: "Most common sulfide mineral, referred to as 'fool's gold'",
    color: "Pale brass-yellow",
    luster: "Metallic",
    streak: "Greenish-black to brownish-black",
    hardness: "6-6.5",
    crystalHabit: "Cubic, pyritohedral, or octahedral with striations",
    environment: [
      "Hydrothermal environments",
      "As accessory mineral in igneous or metamorphic rocks"
    ],
    uses: ["Source of iron and sulfur"],
    hints: [
      "Pale brass-yellow color (resembles gold)",
      "Greenish-black to brownish-black streak",
      "Cubic or pyritohedral crystals often with striations",
      "Higher hardness than gold",
      "Not malleable like gold"
    ]
  },
  {
    id: "marcasite",
    name: "Marcasite",
    imageUrls: ["/images/minerals/marcasite.jpg"],
    formula: "FeS₂",
    classification: "Sulfide",
    characteristics: "Iron sulfide polymorph with same formula as pyrite but different structure",
    color: "Pale brass-yellow to almost white",
    luster: "Metallic",
    hardness: "6-6.5",
    crystalHabit: "Crystals often have curved faces, characteristic 'cockscomb' shape due to twinning",
    environment: ["Sedimentary environments", "Low-temperature hydrothermal veins"],
    hints: [
      "Pale brass-yellow to whitish color",
      "Distinctive 'cockscomb' crystal habit",
      "Often appears weathered, brittle and crumbly",
      "Less stable than pyrite at Earth's surface"
    ]
  },
  {
    id: "chalcopyrite",
    name: "Chalcopyrite",
    imageUrls: ["/images/minerals/chalcopyrite.jpg"],
    formula: "CuFeS₂",
    classification: "Sulfide",
    characteristics: "Copper and iron sulfide, major ore of copper",
    color: "Brassy to golden yellow (richer than pyrite)",
    luster: "Metallic",
    hardness: "3.5-4",
    crystalHabit: "Tetrahedra (not cubes like pyrite)",
    environment: ["Hydrothermal veins", "Contact metamorphic deposits"],
    uses: ["Major ore of copper"],
    hints: [
      "Brassy to golden yellow color (richer than pyrite)",
      "Forms tetrahedral crystals, not cubic",
      "Softer than pyrite (3.5-4)",
      "May have iridescent tarnish"
    ]
  },
  {
    id: "sphalerite",
    name: "Sphalerite",
    imageUrls: ["/images/minerals/sphalerite.jpg"],
    formula: "ZnS",
    classification: "Sulfide",
    characteristics: "Zinc sulfide with perfect dodecahedral cleavage",
    color: "Yellow-brown to black (color varies with iron content)",
    luster: "Adamantine to resinous",
    streak: "Brownish to light yellow",
    hardness: "3.5-4",
    cleavage: "Perfect dodecahedral",
    crystalHabit: "Tetrahedra, dodecahedra",
    uses: ["Important ore of zinc"],
    hints: [
      "Perfect dodecahedral cleavage",
      "Adamantine to resinous luster",
      "Yellow-brown to black color",
      "Light colored streak"
    ]
  },
  {
    id: "galena",
    name: "Galena",
    imageUrls: ["/images/minerals/galena.jpg"],
    formula: "PbS",
    classification: "Sulfide",
    characteristics: "Lead sulfide that forms distinctive gray cubic crystals",
    color: "Lead-gray",
    luster: "Metallic",
    streak: "Lead-gray",
    hardness: "2.5",
    cleavage: "Perfect cubic",
    crystalHabit: "Cubic",
    specificGravity: "7.4-7.6",
    uses: ["Important source of lead"],
    hints: [
      "Lead-gray color",
      "Metallic luster",
      "Perfect cubic cleavage",
      "High specific gravity (feels heavy)",
      "Cubic crystal habit"
    ]
  },
  {
    id: "goethite",
    name: "Goethite",
    imageUrls: ["/images/minerals/goethite.jpg"],
    formula: "FeO(OH)",
    classification: "Hydroxide",
    characteristics: "Iron hydroxide mineral that often forms from the alteration of other Fe-bearing minerals",
    color: "Yellowish-brown to red",
    crystalHabit: "Botryoidal masses",
    streak: "Brown",
    environment: ["Forms from alteration of other Fe-bearing minerals"],
    hints: [
      "Brown streak",
      "Yellowish-brown to red color",
      "Botryoidal crystal habit",
      "Forms from alteration of iron-bearing minerals"
    ]
  },
  {
    id: "halite",
    name: "Halite",
    imageUrls: ["/images/minerals/halite.jpg"],
    formula: "NaCl",
    classification: "Halide",
    characteristics: "Sodium chloride, commonly known as table salt",
    hardness: "2.5",
    color: "Colorless/clear",
    crystalHabit: "Cubic crystals",
    cleavage: "Cubic cleavage",
    environment: ["Evaporite deposits"],
    hints: [
      "Cubic crystals and cubic cleavage",
      "Colorless or white",
      "Salty taste",
      "Perfect cubic cleavage",
      "Low hardness (2.5)"
    ]
  },
  {
    id: "fluorite",
    name: "Fluorite",
    imageUrls: ["/images/minerals/fluorite.jpg"],
    formula: "CaF₂",
    classification: "Halide",
    characteristics: "Calcium fluoride mineral",
    color: "Purple or green",
    crystalHabit: "Cubic crystals",
    cleavage: "Octahedral cleavage",
    environment: ["Hydrothermal settings"],
    hints: [
      "Purple or green color",
      "Cubic crystals",
      "Octahedral cleavage",
      "Fluorescent under UV light"
    ]
  },
  {
    id: "apatite",
    name: "Apatite",
    imageUrls: ["/images/minerals/apatite.jpg"],
    formula: "Ca₅(PO₄)₃(F,OH,Cl)",
    classification: "Phosphate",
    characteristics: "Calcium phosphate that is charge balanced by a fluorine, a hydroxyl, or a chlorine",
    color: "Greenish-blue",
    crystalHabit: "Hexagonal prisms",
    environment: [
      "Accessory mineral in igneous and metamorphic rocks",
      "Large crystals found in pegmatites"
    ],
    hints: [
      "Greenish-blue color",
      "Hexagonal prismatic crystals",
      "Common accessory mineral in igneous and metamorphic rocks",
      "Hardness 5 on Mohs scale (reference mineral)"
    ]
  },
  {
    id: "magnetite",
    name: "Magnetite",
    imageUrls: ["/images/minerals/magnetite.jpg"],
    formula: "Fe₃O₄",
    classification: "Oxide",
    specificGravity: "5.18",
    hardness: "5.5-6.5",
    cleavage: "None, Brittle Fracture",
    luster: "Dull Metallic",
    streak: "Black",
    color: "Black",
    crystalSystem: "Isometric",
    crystalClass: "4/m 3bar 2/m",
    crystalHabit: "Octahedral Crystals, Euhedral, Magnetic",
    environment: [
      "Accessory mineral in both igneous and metamorphic rocks",
      "Biomineral",
      "Clastic sediments"
    ],
    associations: ["Ilmenite or hematite"],
    uses: [
      "Iron Ore",
      "High density concrete aggregate",
      "Using magnetite to control cells"
    ],
    hints: [
      "Strongly magnetic",
      "Black color and streak",
      "Often forms octahedral crystals",
      "High specific gravity"
    ]
  },
  {
    id: "rutile",
    name: "Rutile",
    imageUrls: ["/images/minerals/rutile.jpg"],
    formula: "TiO₂",
    classification: "Oxide",
    characteristics: "Titanium oxide mineral, present as a Ti-bearing phase in igneous and metamorphic rocks",
    crystalHabit: "Elongated crystals, may twin, sometimes found as inclusions in quartz ('rutilated quartz')",
    color: "Reddish brown to black",
    luster: "Adamantine",
    uses: ["Titanium ore"],
    hints: [
      "Reddish brown to black color",
      "Elongated crystal habit",
      "May show twinning",
      "Can be found as inclusions in quartz"
    ]
  },
  {
    id: "ilmenite",
    name: "Ilmenite",
    imageUrls: ["/images/minerals/ilmenite.jpg"],
    formula: "FeTiO₃",
    classification: "Oxide",
    characteristics: "Iron and titanium oxide containing ferrous (Fe²⁺) iron",
    color: "Black",
    environment: ["Accessory mineral in igneous and metamorphic rocks"],
    associations: ["Forms a solid solution series with hematite above ~1050°C"],
    hints: [
      "Generally black color",
      "Can be weakly magnetic",
      "Common accessory mineral in igneous rocks"
    ]
  },
  {
    id: "corundum",
    name: "Corundum",
    imageUrls: ["/images/minerals/corundum.jpg"],
    formula: "Al₂O₃",
    classification: "Oxide",
    characteristics: "Aluminum oxide mineral found in Al-rich environments",
    crystalHabit: "Often hexagonal prisms",
    hardness: "9",
    environment: ["Found in Al-rich environments like metapelites", "May also form in Al-rich, Si-poor igneous rocks"],
    uses: ["Gemstones ruby (chromium) and sapphire (iron and titanium)"],
    hints: [
      "Extremely hard mineral (9 on Mohs scale)",
      "Can form hexagonal prisms",
      "Varieties include ruby and sapphire"
    ]
  },
  {
    id: "hematite",
    name: "Hematite",
    imageUrls: ["/images/minerals/hematite.jpg"],
    formula: "Fe₂O₃",
    classification: "Oxide",
    characteristics: "Iron oxide mineral containing only ferric (Fe³⁺) iron",
    color: "Reddish brown to steel gray",
    streak: "Reddish-brown",
    luster: "Metallic to earthy",
    crystalHabit: "Platy, botryoidal, or massive",
    associations: ["Forms a solid solution series with ilmenite above ~1050°C"],
    hints: [
      "Distinctive red-brown streak",
      "Can appear metallic gray or reddish brown",
      "May have specular 'hematite' variety with metallic luster",
      "Can be platy, botryoidal, or massive"
    ]
  },
  {
    id: "lawsonite",
    name: "Lawsonite",
    imageUrls: ["/images/minerals/lawsonite.jpg"],
    formula: "CaAl₂Si₂O₇(OH)₂·H₂O",
    classification: "Silicate - Sorosilicate",
    characteristics: "Hydrous sorosilicate mineral that forms almost exclusively in subduction zones",
    color: "Whitish (can be other colors)",
    crystalHabit: "Distinctive rhomb-like shape",
    environment: ["Subduction zones (high-pressure, low-temperature settings)"],
    hints: [
      "Distinctive rhomb-like crystal habit",
      "Forms in subduction zones (high-pressure, low-temperature)",
      "Usually altered to other minerals in the field",
      "Whitish color when fresh"
    ]
  },
  {
    id: "clinozoisite-epidote",
    name: "Clinozoisite-Epidote",
    imageUrls: ["/images/minerals/epidote.jpg"],
    formula: "Ca₂Al₃(SiO₄)₃(OH) - Ca₂Al₂Fe³⁺(SiO₄)₃(OH)",
    classification: "Silicate - Sorosilicate",
    characteristics: "Solid solution with clinozoisite (Al-bearing) and epidote (Fe³⁺-bearing) as endmembers",
    color: "Pistachio green (epidote) to light green or gray (clinozoisite)",
    crystalHabit: "Fibrous or blady crystals in veins",
    environment: [
      "Hydrothermal systems",
      "Regional metamorphic settings",
      "Contact metamorphic settings"
    ],
    hints: [
      "Characteristic 'pistachio green' color (epidote-rich compositions)",
      "Fibrous or blady crystal habit",
      "Often found in veins in hydrothermal systems",
      "Light green to gray color (clinozoisite-rich compositions)"
    ]
  },
  {
    id: "zoisite",
    name: "Zoisite",
    imageUrls: ["/images/minerals/zoisite.jpg"],
    formula: "Ca₂Al₃(SiO₄)₃(OH)",
    classification: "Silicate - Sorosilicate",
    characteristics: "Orthorhombic polymorph of clinozoisite (which is monoclinic)",
    color: "Often gray, blue when contains vanadium (tanzanite)",
    cleavage: "Perfect in one direction, good in another",
    environment: [
      "Calcium-rich metamorphic rocks",
      "Hydrothermal alteration"
    ],
    hints: [
      "Gray color (or blue for tanzanite variety)",
      "Perfect cleavage in one direction",
      "Found in calcium-rich metamorphic rocks",
      "Orthorhombic crystal system (versus monoclinic for clinozoisite)"
    ]
  },
  {
    id: "beryl",
    name: "Beryl",
    imageUrls: ["/images/minerals/beryl.jpg"],
    formula: "Be₃Al₂Si₆O₁₈",
    classification: "Silicate - Cyclosilicate",
    characteristics: "Contains beryllium, an incompatible element",
    color: "Light bluish-green (common), light blue (aquamarine), bright green (emerald), or pink (morganite)",
    crystalHabit: "Elongated hexagonal prisms",
    hardness: "7.5-8",
    environment: ["Granitic pegmatites", "High concentration of incompatible elements"],
    hints: [
      "Elongated hexagonal prismatic crystals",
      "High hardness (7.5-8)",
      "Light bluish-green color (for common beryl)",
      "Found in granitic pegmatites"
    ]
  },
  {
    id: "tourmaline",
    name: "Tourmaline",
    imageUrls: ["/images/minerals/tourmaline.jpg"],
    formula: "Complex, with boron and various cations",
    classification: "Silicate - Cyclosilicate",
    characteristics: "Boron-bearing cyclosilicate that can contain many different cations",
    color: "Various (black, pink, green, etc.)",
    crystalHabit: "Elongated prisms with striated faces, rounded triangular cross-section",
    environment: [
      "Granitic pegmatites",
      "Felsic igneous rocks",
      "Some metamorphic rocks"
    ],
    hints: [
      "Elongated prismatic crystals with striations",
      "Characteristic rounded triangular cross-section",
      "Wide variety of colors possible",
      "Often found in granitic pegmatites"
    ]
  },
  {
    id: "cordierite",
    name: "Cordierite",
    imageUrls: ["/images/minerals/cordierite.jpg"],
    formula: "Mg₂Al₄Si₅O₁₈",
    classification: "Silicate - Cyclosilicate",
    characteristics: "Generally occurs as blue to gray anhedral porphyroblasts in metapelites",
    color: "Blue to gray",
    hardness: "7-7.5",
    environment: ["Metapelites (metamorphosed aluminous sediments)"],
    hints: [
      "Blue to gray color",
      "Softer than corundum but harder than many minerals",
      "Typically forms anhedral porphyroblasts",
      "Found in metapelites"
    ]
  },
  {
    id: "muscovite",
    name: "Muscovite",
    imageUrls: ["/images/minerals/muscovite.jpg"],
    formula: "KAl₂(AlSi₃O₁₀)(OH)₂",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Common phyllosilicate mineral occurring in various geologic settings",
    color: "Colorless to light brown, sometimes greenish",
    crystalHabit: "Tabular crystals with pseudohexagonal outlines (if euhedral)",
    cleavage: "Perfect {001} cleavage",
    environment: [
      "Felsic igneous rocks (granites, pegmatites)",
      "Metamorphic rocks (schist, gneiss)"
    ],
    uses: ["Cosmetics"],
    hints: [
      "Perfect sheet-like cleavage",
      "Colorless to light brown or greenish color",
      "Tabular crystals with pseudohexagonal outlines",
      "Found in granites, pegmatites, schists, and gneisses"
    ]
  },
  {
    id: "biotite",
    name: "Biotite",
    imageUrls: ["/images/minerals/biotite.jpg"],
    formula: "K(Mg,Fe)₃(AlSi₃O₁₀)(OH)₂",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Iron-rich mica occurring in various geologic settings",
    color: "Dark brown to black",
    crystalHabit: "Tabular crystals with pseudohexagonal outlines (if euhedral)",
    cleavage: "Perfect {001} cleavage",
    environment: [
      "Felsic igneous rocks (granite)",
      "Mafic igneous rocks (diorite, gabbro)",
      "Metamorphic rocks (schists, gneisses)"
    ],
    uses: ["Temperature estimates when found with garnet"],
    hints: [
      "Perfect sheet-like cleavage",
      "Dark brown to black color (darker than muscovite)",
      "Tabular crystals with pseudohexagonal outlines",
      "Found in igneous and metamorphic rocks"
    ]
  },
  {
    id: "serpentine",
    name: "Serpentine",
    imageUrls: ["/images/minerals/serpentine.jpg"],
    formula: "Mg₃Si₂O₅(OH)₄",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Phyllosilicate with three different layering structures (chrysotile, antigorite, lizardite)",
    color: "Most often green",
    crystalHabit: "Variable: fibrous (chrysotile), waxy/soapy appearance (antigorite, lizardite)",
    cleavage: "Perfect {001} cleavage visible in antigorite",
    luster: "Waxy, soapy",
    environment: [
      "Result of hydrothermal alteration of mafic and ultramafic rocks",
      "Often found with other ultramafic minerals"
    ],
    associations: ["Ultramafic minerals", "Peridotite"],
    hints: [
      "Fibrous habit (chrysotile) or waxy/soapy appearance (antigorite, lizardite)",
      "Usually green color",
      "Waxy to soapy luster",
      "Forms from alteration of mafic/ultramafic rocks",
      "Chrysotile has been used as asbestos"
    ]
  },
  {
    id: "talc",
    name: "Talc",
    imageUrls: ["/images/minerals/talc.jpg"],
    formula: "Mg₃Si₄O₁₀(OH)₂",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Softest mineral (1 on Mohs hardness scale)",
    color: "White, bluish green, or brownish",
    crystalHabit: "Grows in aggregates",
    luster: "Pearly to greasy",
    hardness: "1",
    environment: [
      "Hydrothermally altered mafic or ultramafic rocks",
      "Some metamorphic settings"
    ],
    uses: ["Industrial uses", "Cosmetics"],
    hints: [
      "Extremely soft (hardness 1)",
      "Pearly to greasy luster",
      "Waxy feel",
      "White to bluish-green color",
      "Forms from hydrothermal alteration"
    ]
  },
  {
    id: "margarite",
    name: "Margarite",
    imageUrls: ["/images/minerals/margarite.jpg"],
    formula: "CaAl₂(Al₂Si₂O₁₀)(OH)₂",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Brittle, Ca-bearing mica",
    crystalHabit: "Like other micas but with brittle folia",
    cleavage: "Perfect {001} cleavage",
    hardness: "3.5-4.5 (harder than muscovite)",
    environment: [
      "Metamorphic rocks with Al and Ca-rich protoliths"
    ],
    hints: [
      "Perfect cleavage like micas",
      "Brittle folia (unlike flexible muscovite/biotite)",
      "Harder than other micas",
      "Occurs in Al and Ca-rich metamorphic rocks"
    ]
  },
  {
    id: "chlorite",
    name: "Chlorite",
    imageUrls: ["/images/minerals/chlorite.jpg"],
    formula: "(Mg,Fe)₃(Si,Al)₄O₁₀(OH)₂·(Mg,Fe)₃(OH)₆",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Green phyllosilicate common in low-grade metamorphic rocks",
    color: "Green",
    crystalHabit: "Aggregates (scaly or foliated), can occur as isolated grains",
    cleavage: "Perfect {001} cleavage",
    environment: [
      "Low-grade metamorphic rocks",
      "Some igneous rocks",
      "Weathering product"
    ],
    hints: [
      "Green color",
      "Perfect cleavage",
      "Scaly or foliated aggregates",
      "Common in low-grade metamorphic rocks"
    ]
  },
  {
    id: "lepidolite",
    name: "Lepidolite",
    imageUrls: ["/images/minerals/lepidolite.jpg"],
    formula: "K(Li,Al)₃(Si,Al)₄O₁₀(F,OH)₂",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Li-bearing mica with distinctive light purple color",
    color: "Light purple",
    cleavage: "Perfect {001} cleavage",
    environment: [
      "Li-bearing granitic pegmatites"
    ],
    hints: [
      "Distinctive light purple color",
      "Perfect cleavage like other micas",
      "Found in Li-bearing granitic pegmatites"
    ]
  },
  {
    id: "phengite",
    name: "Phengite",
    imageUrls: ["/images/minerals/phengite.jpg"],
    formula: "K(AlMg)₂(Si₄O₁₀)(OH)₂",
    classification: "Silicate - Phyllosilicate",
    characteristics: "Mica with Si:Al ratio > 3:1, additional Mg²⁺ or Fe²⁺ for charge balance",
    color: "White to pale green",
    environment: [
      "High-grade metamorphic rocks"
    ],
    hints: [
      "White to pale green color",
      "Found in high-grade metamorphic rocks",
      "Higher Si:Al ratio than muscovite"
    ]
  },
  {
    id: "orthopyroxene",
    name: "Orthopyroxene",
    imageUrls: ["/images/minerals/orthopyroxene.jpg"],
    formula: "(Mg,Fe)SiO₃",
    classification: "Silicate - Inosilicate (Pyroxene)",
    characteristics: "Solid solution between enstatite (Mg endmember) and ferrosilite (iron endmember)",
    color: "Brown, black, or greenish",
    crystalSystem: "Orthorhombic",
    crystalHabit: "Stubby prisms",
    cleavage: "Two cleavage planes at ~90° to one another",
    environment: [
      "Mafic or ultramafic igneous environments",
      "Occasionally in felsic rocks",
      "Some metamorphic rocks"
    ],
    hints: [
      "Two cleavage planes at ~90°",
      "Brown, black, or greenish color",
      "Stubby prismatic habit",
      "Orthorhombic crystal system",
      "Common in mafic/ultramafic rocks"
    ]
  },
  {
    id: "clinopyroxene",
    name: "Clinopyroxene",
    imageUrls: ["/images/minerals/clinopyroxene.jpg"],
    formula: "Complex (includes diopside CaMgSi₂O₆, hedenbergite CaFeSi₂O₆, augite, pigeonite)",
    classification: "Silicate - Inosilicate (Pyroxene)",
    characteristics: "Ca-bearing pyroxenes with monoclinic crystal structure",
    color: "Black (augite), green (diopside-hedenbergite)",
    crystalSystem: "Monoclinic",
    crystalHabit: "Stubby prisms",
    cleavage: "Two cleavage planes at ~90° to one another",
    environment: [
      "Mafic igneous rocks",
      "Regional metamorphic rocks",
      "Contact metamorphic rocks"
    ],
    hints: [
      "Two cleavage planes at ~90°",
      "Black (augite) or green (diopside) color",
      "Stubby prismatic habit",
      "Monoclinic crystal system",
      "Wider variety of environments than orthopyroxene"
    ]
  },
  {
    id: "omphacite",
    name: "Omphacite",
    imageUrls: ["/images/minerals/omphacite.jpg"],
    formula: "(Ca,Na)(Mg,Fe,Al)Si₂O₆",
    classification: "Silicate - Inosilicate (Pyroxene)",
    characteristics: "Na-bearing pyroxene occurring in high-pressure, low-temperature settings",
    color: "Bright green",
    crystalHabit: "Stubby prisms",
    cleavage: "Two cleavage planes at ~90°",
    environment: ["Eclogite facies metamorphic rocks (high-pressure, low-temperature)"],
    associations: ["Garnet (in eclogites)"],
    hints: [
      "Bright green color",
      "Stubby prismatic habit with two cleavage planes at ~90°",
      "Occurs in eclogite facies metamorphic rocks",
      "High-pressure, low-temperature indicator"
    ]
  },
  {
    id: "wollastonite",
    name: "Wollastonite",
    imageUrls: ["/images/minerals/wollastonite.jpg"],
    formula: "CaSiO₃",
    classification: "Silicate - Inosilicate (Pyroxenoid)",
    characteristics: "Pyroxenoid with distorted single chains",
    color: "White",
    crystalHabit: "Blady or fibrous",
    cleavage: "One perfect cleavage",
    environment: ["Metamorphism of Ca-rich protoliths (limestone, dolomite)"],
    associations: ["Calcite", "Diopside", "Garnet"],
    hints: [
      "White color",
      "Blady or fibrous habit",
      "One perfect cleavage",
      "Forms from metamorphism of limestone or dolomite"
    ]
  },
  {
    id: "actinolite",
    name: "Actinolite",
    imageUrls: ["/images/minerals/actinolite.jpg"],
    formula: "Ca₂(Mg,Fe)₅Si₈O₂₂(OH)₂",
    classification: "Silicate - Inosilicate (Amphibole)",
    characteristics: "Calcic clinoamphibole in solid solution between tremolite (Mg) and ferroactinolite (Fe)",
    color: "Green",
    crystalSystem: "Monoclinic",
    crystalHabit: "Fibrous or prismatic",
    cleavage: "Two cleavage planes intersecting at ~120°",
    environment: ["Medium-grade metamorphic rocks"],
    hints: [
      "Green color",
      "Fibrous or prismatic habit",
      "Two cleavage planes at ~120°",
      "Common in medium-grade metamorphic rocks"
    ]
  },
  {
    id: "glaucophane",
    name: "Glaucophane",
    imageUrls: ["/images/minerals/glaucophane.jpg"],
    formula: "Na₂Mg₃Al₂Si₈O₂₂(OH)₂",
    classification: "Silicate - Inosilicate (Amphibole)",
    characteristics: "Sodic clinoamphibole forming in high-pressure, low-temperature environments",
    color: "Blue",
    crystalSystem: "Monoclinic",
    crystalHabit: "Needle-like or prismatic crystals",
    cleavage: "Two cleavage planes intersecting at ~120°",
    environment: ["High-pressure, low-temperature metamorphic environments (subduction zones)"],
    associations: ["Lawsonite", "Jadeite", "Aragonite"],
    hints: [
      "Distinctive blue color",
      "Needle-like or prismatic habit",
      "Forms in subduction zones",
      "Indicator of high-pressure, low-temperature metamorphism"
    ]
  },
  {
    id: "hornblende",
    name: "Hornblende",
    imageUrls: ["/images/minerals/hornblende.jpg"],
    formula: "(Ca,Na)₂(Mg,Fe,Al)₅(Al,Si)₈O₂₂(OH)₂",
    classification: "Silicate - Inosilicate (Amphibole)",
    characteristics: "Most common amphibole, containing various elements",
    color: "Black to dark green",
    crystalSystem: "Monoclinic",
    crystalHabit: "Needle-like crystals",
    cleavage: "Two cleavage planes intersecting at ~120°",
    environment: ["Igneous rocks", "Metamorphic rocks"],
    hints: [
      "Black to dark green color",
      "Needle-like crystal habit",
      "Two cleavage planes at ~120°",
      "Most common amphibole mineral"
    ]
  },
  {
    id: "tremolite",
    name: "Tremolite",
    imageUrls: ["/images/minerals/tremolite.jpg"],
    formula: "Ca₂Mg₅Si₈O₂₂(OH)₂",
    classification: "Silicate - Inosilicate (Amphibole)",
    characteristics: "Mg endmember of tremolite-ferroactinolite solid solution",
    color: "White",
    crystalSystem: "Monoclinic",
    crystalHabit: "Elongated crystals",
    cleavage: "Two cleavage planes intersecting at ~120°",
    environment: ["Contact metamorphosed dolomites", "Low to medium-grade metamorphic rocks"],
    hints: [
      "White color",
      "Elongated crystal habit",
      "Two cleavage planes at ~120°",
      "Common in metamorphosed dolomites"
    ]
  },
  {
    id: "anthophyllite",
    name: "Anthophyllite",
    imageUrls: ["/images/minerals/anthophyllite.jpg"],
    formula: "(Mg,Fe)₇Si₈O₂₂(OH)₂",
    classification: "Silicate - Inosilicate (Amphibole)",
    characteristics: "Orthoamphibole occurring in Mg-rich environments",
    color: "Clove brown, white, or gray",
    crystalSystem: "Orthorhombic",
    crystalHabit: "Prismatic or fibrous",
    cleavage: "Two cleavage planes intersecting at ~120°",
    environment: ["Mg-rich metamorphic rocks"],
    hints: [
      "Clove brown, white, or gray color",
      "Prismatic or fibrous habit",
      "Two cleavage planes at ~120°",
      "Occurs in Mg-rich environments"
    ]
  },
  {
    id: "olivine",
    name: "Olivine",
    imageUrls: ["/images/minerals/olivine.jpg"],
    formula: "(Mg,Fe)₂SiO₄",
    classification: "Silicate - Nesosilicate",
    characteristics: "Most abundant mineral in the upper mantle, less abundant in the crust",
    color: "Olive-green to yellow-green",
    fracture: "Conchoidal",
    environment: [
      "Mafic igneous rocks (basalts, gabbros)",
      "Mantle peridotite xenoliths",
      "Upper mantle"
    ],
    associations: ["Pyroxene", "Plagioclase", "Spinel"],
    hints: [
      "Olive-green to yellow-green color",
      "Conchoidal fracture",
      "Associated with mafic and ultramafic rocks",
      "Glassy appearance in basalts",
      "Forms solid solution between forsterite (Mg) and fayalite (Fe)"
    ]
  },
  {
    id: "garnet",
    name: "Garnet",
    imageUrls: ["/images/minerals/garnet.jpg"],
    formula: "X₃Y₂(SiO₄)₃ (X = Ca, Mg, Fe²⁺, Mn²⁺; Y = Al, Fe³⁺, Cr, V, Ti, Zr)",
    classification: "Silicate - Nesosilicate",
    characteristics: "Group of minerals with similar crystal structure but different compositions",
    color: "Red, pink, green, brown, black (varies with composition)",
    crystalHabit: "Dodecahedral or trapezohedral crystals",
    hardness: "6.5-7.5",
    environment: [
      "Metamorphic rocks (schists, eclogites)",
      "Some igneous rocks (pegmatites)",
      "Contact metamorphic rocks (skarns)"
    ],
    hints: [
      "Distinctive dodecahedral or trapezohedral crystal habit",
      "Various colors depending on composition (red, pink, green)",
      "High hardness (6.5-7.5)",
      "Common in metamorphic rocks",
      "Important index mineral for metamorphic grade"
    ]
  },
  {
    id: "kyanite",
    name: "Kyanite",
    imageUrls: ["/images/minerals/kyanite.jpg"],
    formula: "Al₂SiO₅",
    classification: "Silicate - Nesosilicate",
    characteristics: "Aluminosilicate polymorph that occurs at higher pressures",
    color: "Blue (typically)",
    crystalHabit: "Elongated, blady crystals",
    hardness: "4.5-7 (varies with direction - anisotropic)",
    environment: [
      "Aluminum-rich metamorphic rocks at higher pressures"
    ],
    hints: [
      "Blue color",
      "Elongated, blady crystal habit",
      "Forms at higher pressures than andalusite or sillimanite",
      "Hardness varies with direction (anisotropic)",
      "Pressure indicator in metamorphic rocks"
    ]
  },
  {
    id: "sillimanite",
    name: "Sillimanite",
    imageUrls: ["/images/minerals/sillimanite.jpg"],
    formula: "Al₂SiO₅",
    classification: "Silicate - Nesosilicate",
    characteristics: "Aluminosilicate polymorph that forms at higher temperatures",
    color: "White to gray",
    crystalHabit: "Fibrous crystals",
    environment: [
      "Aluminum-rich metamorphic rocks at higher temperatures"
    ],
    associations: ["Garnet", "Biotite", "K-feldspar"],
    hints: [
      "White, fibrous crystal habit",
      "Forms at higher temperatures than andalusite or kyanite",
      "Temperature indicator in metamorphic rocks",
      "Often found with high-grade metamorphic minerals"
    ]
  },
  {
    id: "andalusite",
    name: "Andalusite",
    imageUrls: ["/images/minerals/andalusite.jpg"],
    formula: "Al₂SiO₅",
    classification: "Silicate - Nesosilicate",
    characteristics: "Aluminosilicate polymorph that occurs at lower temperatures and pressures",
    color: "Pink, gray, green, or brown",
    crystalHabit: "Elongated prisms with nearly square cross-sections",
    features: "Chiastolite variety has distinctive cross pattern in cross-section formed by carbonaceous inclusions",
    environment: [
      "Contact metamorphic environments",
      "Low-grade regional metamorphic rocks"
    ],
    hints: [
      "Elongated prismatic crystals with square cross-sections",
      "Chiastolite variety shows distinctive cross pattern",
      "Forms at lower temperatures and pressures than kyanite or sillimanite",
      "Common in contact metamorphic aureoles"
    ]
  },
  {
    id: "staurolite",
    name: "Staurolite",
    imageUrls: ["/images/minerals/staurolite.jpg"],
    formula: "(Fe,Mg)₂(Al,Fe)₉O₆(SiO₄)₄(O,OH)₂",
    classification: "Silicate - Nesosilicate",
    characteristics: "Forms distinctive interpenetration twins",
    color: "Dark reddish-brown",
    crystalHabit: "Prismatic, often twinned at 90° or 60° angles (cruciform or X-shaped)",
    environment: [
      "Medium-grade metamorphic rocks"
    ],
    hints: [
      "Dark reddish-brown color",
      "Distinctive cruciform or X-shaped twins",
      "Found in medium-grade metamorphic rocks",
      "Index mineral for metamorphic grade"
    ]
  },
  {
    id: "zircon",
    name: "Zircon",
    imageUrls: ["/images/minerals/zircon.jpg"],
    formula: "ZrSiO₄",
    classification: "Silicate - Nesosilicate",
    characteristics: "Generally too small to be easily visible in hand sample, important for geochronology",
    color: "Colorless, brown, red, yellow",
    crystalSystem: "Tetragonal",
    luster: "Adamantine",
    hardness: "7.5",
    environment: [
      "Accessory mineral in igneous rocks",
      "Detrital mineral in sedimentary rocks"
    ],
    hints: [
      "Tetragonal crystal system",
      "Adamantine luster",
      "Usually too small to be visible in hand sample",
      "Important for radiometric dating (U-Pb system)",
      "Extremely resistant to weathering"
    ]
  },
  {
    id: "titanite",
    name: "Titanite (Sphene)",
    imageUrls: ["/images/minerals/titanite.jpg"],
    formula: "CaTiSiO₅",
    classification: "Silicate - Nesosilicate",
    characteristics: "Common accessory mineral in igneous and metamorphic rocks",
    color: "Brown to yellowish-brown",
    crystalHabit: "Wedge-shaped crystals",
    luster: "Adamantine",
    environment: [
      "Accessory mineral in igneous rocks",
      "Metamorphic rocks"
    ],
    hints: [
      "Brown, wedge-shaped crystals",
      "Adamantine luster",
      "Common accessory mineral",
      "Diamond-like appearance"
    ]
  },
  {
    id: "topaz",
    name: "Topaz",
    imageUrls: ["/images/minerals/topaz.jpg"],
    formula: "Al₂SiO₄(F,OH)₂",
    classification: "Silicate - Nesosilicate",
    characteristics: "Aluminum-rich mineral occurring in felsic igneous rocks and hydrothermal systems",
    color: "Colorless or gray (may take on other colors)",
    crystalHabit: "Stubby or elongated prisms",
    cleavage: "Perfect basal cleavage",
    specificGravity: "3.5-3.6 (relatively high)",
    environment: [
      "Felsic igneous rocks",
      "Hydrothermal systems"
    ],
    uses: ["Gemstone"],
    hints: [
      "Perfect basal cleavage",
      "Stubby or elongated prismatic habit",
      "Relatively high specific gravity",
      "Commonly found in felsic igneous rocks",
      "Valued as a gemstone"
    ]
  },
  {
    id: "chloritoid",
    name: "Chloritoid",
    imageUrls: ["/images/minerals/chloritoid.jpg"],
    formula: "(Fe,Mg,Mn)₂Al₄Si₂O₁₀(OH)₄",
    classification: "Silicate - Nesosilicate",
    characteristics: "Has layered structure resembling micas but is a nesosilicate",
    color: "Greenish gray to greenish black",
    crystalHabit: "Tabular or platy",
    cleavage: "Good (less perfect than micas)",
    environment: [
      "Low to medium grade regional metamorphic settings"
    ],
    hints: [
      "Greenish gray to greenish black color",
      "Tabular or platy habit",
      "Good cleavage but less perfect than micas",
      "Found in low to medium grade metamorphic rocks"
    ]
  },
  {
    id: "microcline",
    name: "Microcline (K-feldspar)",
    imageUrls: ["/images/minerals/microcline.jpg"],
    formula: "KAlSi₃O₈",
    classification: "Silicate - Tectosilicate (Feldspar)",
    characteristics: "Most ordered of the K-feldspars",
    color: "White, pink, sometimes blue (amazonite)",
    cleavage: "Perfect in two directions at ~90°",
    features: "Perthitic exsolution lamellae (separation of Na and K as feldspar cools)",
    environment: ["Felsic igneous rocks"],
    hints: [
      "Perfect cleavage in two directions at ~90°",
      "Perthitic exsolution lamellae (visible intergrowths)",
      "White or pink color (blue if amazonite variety)",
      "Common in felsic igneous rocks",
      "Blue variety (amazonite) contains lead"
    ]
  },
  {
    id: "sanidine",
    name: "Sanidine (K-feldspar)",
    imageUrls: ["/images/minerals/sanidine.jpg"],
    formula: "KAlSi₃O₈",
    classification: "Silicate - Tectosilicate (Feldspar)",
    characteristics: "Most disordered of the K-feldspars",
    color: "Colorless to white",
    cleavage: "Perfect in two directions at ~90°",
    crystalHabit: "Often occurs as phenocrysts",
    environment: ["Volcanic rocks"],
    hints: [
      "Perfect cleavage in two directions at ~90°",
      "Colorless to white color",
      "Occurs as phenocrysts in volcanic rocks",
      "Most disordered K-feldspar structure"
    ]
  },
  {
    id: "orthoclase",
    name: "Orthoclase (K-feldspar)",
    imageUrls: ["/images/minerals/orthoclase.jpg"],
    formula: "KAlSi₃O₈",
    classification: "Silicate - Tectosilicate (Feldspar)",
    characteristics: "Intermediate in ordering between microcline and sanidine",
    color: "Less strongly colored than microcline",
    cleavage: "Perfect in two directions at ~90°",
    features: "Carlsbad twinning is common",
    environment: ["Felsic igneous rocks"],
    hints: [
      "Perfect cleavage in two directions at ~90°",
      "Less strongly colored than microcline",
      "Common Carlsbad twinning",
      "Lacks perthitic exsolution visible in hand sample",
      "Common in felsic igneous rocks"
    ]
  },
  {
    id: "plagioclase",
    name: "Plagioclase",
    imageUrls: ["/images/minerals/plagioclase.jpg"],
    formula: "NaAlSi₃O₈ - CaAl₂Si₂O₈",
    classification: "Silicate - Tectosilicate (Feldspar)",
    characteristics: "Solid solution between albite (Na) and anorthite (Ca) endmembers",
    color: "White to gray",
    cleavage: "Perfect in two directions at ~90°",
    crystalHabit: "Lath-shaped crystals",
    features: "Albite twinning often observed, labradorite variety shows labradorescence",
    environment: ["Most common mineral in the crust", "Both igneous and metamorphic rocks"],
    hints: [
      "Perfect cleavage in two directions at ~90°",
      "White to gray color",
      "Lath-shaped crystals",
      "Albite twinning (fine parallel striations)",
      "Labradorite variety shows iridescence (labradorescence)"
    ]
  },
  {
    id: "sodalite",
    name: "Sodalite",
    imageUrls: ["/images/minerals/sodalite.jpg"],
    formula: "Na₈Al₆Si₆O₂₄Cl₂",
    classification: "Silicate - Tectosilicate (Feldspathoid)",
    characteristics: "Feldspathoid found in alkali-rich, Si-poor igneous rocks",
    color: "Blue (characteristic)",
    environment: [
      "Alkali-rich, Si-poor igneous rocks",
      "Contact metamorphic settings"
    ],
    associations: ["Lapis lazuli contains lazurite (a sodalite group member)"],
    hints: [
      "Distinctive blue color",
      "Found in alkali-rich, silicon-poor rocks",
      "Component of lapis lazuli (with lazurite)"
    ]
  },
  {
    id: "nepheline",
    name: "Nepheline",
    imageUrls: ["/images/minerals/nepheline.jpg"],
    formula: "Na₃KAl₄Si₄O₁₆",
    classification: "Silicate - Tectosilicate (Feldspathoid)",
    characteristics: "Feldspathoid commonly found in alkali-rich, Si-poor igneous rocks",
    color: "Grayish",
    luster: "Greasy",
    environment: ["Alkali-rich, Si-poor igneous rocks"],
    hints: [
      "Grayish color",
      "Distinctive greasy luster",
      "Found in alkali-rich, silicon-poor rocks"
    ]
  },
  {
    id: "scapolite",
    name: "Scapolite",
    imageUrls: ["/images/minerals/scapolite.jpg"],
    formula: "Na₄Al₃Si₉O₂₄Cl - Ca₄Al₆Si₆O₂₄CO₃",
    classification: "Silicate - Tectosilicate",
    characteristics: "Solid solution of marialite (Na) and meionite (Ca)",
    crystalHabit: "Rectangular prisms, may be striated",
    features: "May fluoresce",
    environment: [
      "Contact metamorphic rocks",
      "Regional metamorphic rocks with Ca-rich or gabbroic protoliths"
    ],
    hints: [
      "Rectangular prismatic crystals",
      "May show striations",
      "Found in metamorphic rocks with Ca-rich or gabbroic protoliths",
      "May fluoresce under UV light"
    ]
  },
  {
    id: "leucite",
    name: "Leucite",
    imageUrls: ["/images/minerals/leucite.jpg"],
    formula: "KAlSi₂O₆",
    classification: "Silicate - Tectosilicate (Feldspathoid)",
    characteristics: "Uncommon feldspathoid found in K-bearing mafic igneous rocks",
    color: "White",
    crystalHabit: "Trapezohedral crystals with rounded cross sections",
    environment: ["K-bearing mafic igneous rocks"],
    hints: [
      "White color",
      "Distinctive trapezohedral crystals with rounded cross sections",
      "Found in potassium-bearing mafic igneous rocks"
    ]
  },
  {
    id: "zeolite",
    name: "Zeolite",
    imageUrls: ["/images/minerals/zeolite.jpg"],
    formula: "Various (e.g., Analcime: NaAlSi₂O₆·H₂O, Stilbite: NaCa₄Si₂₇Al₉O₇₆·28H₂O)",
    classification: "Silicate - Tectosilicate",
    characteristics: "Framework silicates with channels and voids containing water and large cations",
    crystalHabit: "Various, often grow as crystals in voids in volcanic rocks",
    specificGravity: "Generally low due to open framework structure",
    environment: ["Often in voids in volcanic rocks"],
    uses: ["Industrial applications due to channel structure"],
    hints: [
      "Often grow in voids in volcanic rocks",
      "Low specific gravity",
      "Framework contains channels with water and cations",
      "Analcime and stilbite form visible crystals in volcanic rock voids"
    ]
  }
]; 