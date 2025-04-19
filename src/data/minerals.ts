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
    imageUrls: ["/images/minerals/quartz_5c0b661a.jpg", "/images/minerals/quartz_a4584b9e.jpg", "/images/minerals/quartz_2eb255ce.jpg", "/images/minerals/quartz_e5598dfd.jpg", "/images/minerals/quartz_39cdb0ab.jpg", "/images/minerals/quartz_c5e58a52.jpg", "/images/minerals/quartz_28124e0b.jpg", "/images/minerals/quartz_e139689e.jpg", "/images/minerals/quartz_397e325f.jpg", "/images/minerals/quartz_27b316e9.jpg", "/images/minerals/quartz_4972e13b.jpg", "/images/minerals/quartz_855c19db.jpg", "/images/minerals/quartz_25a67824.jpg", "/images/minerals/quartz_a70538e3.jpg", "/images/minerals/quartz_08cfa4f5.jpg", "/images/minerals/quartz_27a8f84e.jpg", "/images/minerals/quartz_747e4061.jpg", "/images/minerals/quartz_fd113e31.jpg", "/images/minerals/quartz_a6cfc281.jpg", "/images/minerals/quartz_1406af5c.jpg", "/images/minerals/quartz_77d08e3d.jpg", "/images/minerals/quartz_99a9eb3b.jpg", "/images/minerals/quartz_812801c0.jpg", "/images/minerals/quartz_54f3813b.jpg", "/images/minerals/quartz_e37a423e.jpg", "/images/minerals/quartz_77e36e0a.jpg", "/images/minerals/quartz_74fa4a42.jpg", "/images/minerals/quartz_60b8d803.jpg", "/images/minerals/quartz_de12078c.jpg", "/images/minerals/quartz_1e7a40c0.jpg", "/images/minerals/quartz_b0554747.jpg", "/images/minerals/quartz_56d8a0a8.jpg", "/images/minerals/quartz_037d71a4.jpg", "/images/minerals/quartz_3322314e.jpg", "/images/minerals/quartz_acf0177d.jpg", "/images/minerals/quartz_96baaf17.jpg", "/images/minerals/quartz_ac3b5e16.jpg", "/images/minerals/quartz_4f19f36b.jpg", "/images/minerals/quartz_ce3e796b.jpg", "/images/minerals/quartz_1da0a46f.jpg", "/images/minerals/quartz_eb9bcec4.jpg", "/images/minerals/quartz_ae0a0f3b.jpg", "/images/minerals/quartz_a2d85a7b.jpg", "/images/minerals/quartz_d7f8a3e8.jpg", "/images/minerals/quartz_679f9994.jpg", "/images/minerals/quartz_7a770d50.jpg", "/images/minerals/quartz_8d20c26b.jpg", "/images/minerals/quartz_4f1a95d3.jpg", "/images/minerals/quartz_2a4b961e.jpg", "/images/minerals/quartz_2f99a148.jpg"],
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
    imageUrls: ["/images/minerals/graphite_5b18ca7a.jpg", "/images/minerals/graphite_bce5e748.jpg", "/images/minerals/graphite_579d3ca9.jpg", "/images/minerals/graphite_97d0c154.jpg", "/images/minerals/graphite_71709bf1.jpg", "/images/minerals/graphite_09d3892c.jpg", "/images/minerals/graphite_2ca5718c.jpg", "/images/minerals/graphite_fdce6c65.jpg", "/images/minerals/graphite_81fba415.jpg", "/images/minerals/graphite_f125eb0e.jpg", "/images/minerals/graphite_b79a2442.jpg", "/images/minerals/graphite_d9d53d92.jpg", "/images/minerals/graphite_1116aad1.jpg", "/images/minerals/graphite_b985d600.jpg", "/images/minerals/graphite_1a58b28f.jpg", "/images/minerals/graphite_88423bf1.jpg", "/images/minerals/graphite_fdfef1da.jpg", "/images/minerals/graphite_0835cadc.jpg", "/images/minerals/graphite_6eff979c.jpg", "/images/minerals/graphite_2cb6b611.jpg", "/images/minerals/graphite_76f8f891.jpg", "/images/minerals/graphite_0c00bf47.jpg", "/images/minerals/graphite_50b45992.jpg", "/images/minerals/graphite_38af4003.jpg", "/images/minerals/graphite_db9d6efd.jpg", "/images/minerals/graphite_ea1f5e8b.jpg", "/images/minerals/graphite_55fc43be.jpg", "/images/minerals/graphite_2210ea00.jpg", "/images/minerals/graphite_3267c908.jpg", "/images/minerals/graphite_525fe67e.jpg", "/images/minerals/graphite_f28978b2.jpg", "/images/minerals/graphite_066b06f6.jpg", "/images/minerals/graphite_5aeb571a.jpg", "/images/minerals/graphite_8270ae16.jpg", "/images/minerals/graphite_fe264155.jpg", "/images/minerals/graphite_a8f68aa5.jpg", "/images/minerals/graphite_94d458dc.jpg", "/images/minerals/graphite_60490946.jpg", "/images/minerals/graphite_a5240287.jpg", "/images/minerals/graphite_69763f88.jpg", "/images/minerals/graphite_e7a198f4.jpg", "/images/minerals/graphite_44c24aef.jpg", "/images/minerals/graphite_04e179f9.jpg", "/images/minerals/graphite_6a9b4dd9.jpg", "/images/minerals/graphite_8a13c77d.jpg", "/images/minerals/graphite_d4e5348b.jpg", "/images/minerals/graphite_454abd78.jpg", "/images/minerals/graphite_65cab19b.jpg", "/images/minerals/graphite_b1caf034.jpg", "/images/minerals/graphite_4dd1fff7.jpg"],
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
    imageUrls: ["/images/minerals/diamond_2e351fa9.jpg", "/images/minerals/diamond_e1d3c543.jpg", "/images/minerals/diamond_c32c1511.jpg", "/images/minerals/diamond_e35c27ca.jpg", "/images/minerals/diamond_ccc6a7ea.jpg", "/images/minerals/diamond_3a2bf86c.jpg", "/images/minerals/diamond_f7fa2300.jpg", "/images/minerals/diamond_7392b695.jpg", "/images/minerals/diamond_0be209f8.jpg", "/images/minerals/diamond_4417e726.jpg", "/images/minerals/diamond_de14c533.jpg", "/images/minerals/diamond_0525a6ee.jpg", "/images/minerals/diamond_2244a082.jpg", "/images/minerals/diamond_3c1e4fa0.jpg", "/images/minerals/diamond_a22910b4.jpg", "/images/minerals/diamond_7fed897b.jpg", "/images/minerals/diamond_5bef0747.jpg", "/images/minerals/diamond_1b19ad35.jpg", "/images/minerals/diamond_6f4b4e9b.jpg", "/images/minerals/diamond_fdaddae9.jpg", "/images/minerals/diamond_404a0d46.jpg", "/images/minerals/diamond_185cd7b7.jpg", "/images/minerals/diamond_828c2679.jpg", "/images/minerals/diamond_84b9a689.jpg", "/images/minerals/diamond_34a96af3.jpg", "/images/minerals/diamond_2c652918.jpg", "/images/minerals/diamond_1aed2343.jpg", "/images/minerals/diamond_e5d72893.jpg", "/images/minerals/diamond_2715ef10.jpg", "/images/minerals/diamond_40ee3e6d.jpg", "/images/minerals/diamond_c0a27965.jpg", "/images/minerals/diamond_0ab08a49.jpg", "/images/minerals/diamond_6f32bb5b.jpg", "/images/minerals/diamond_af75dad7.jpg", "/images/minerals/diamond_29684132.jpg", "/images/minerals/diamond_b806dd56.jpg", "/images/minerals/diamond_415b83c6.jpg", "/images/minerals/diamond_6c3ac99d.jpg", "/images/minerals/diamond_33106c82.jpg", "/images/minerals/diamond_6abff01e.jpg", "/images/minerals/diamond_a5d989b5.jpg", "/images/minerals/diamond_3a1e6bc8.jpg", "/images/minerals/diamond_964dbe79.jpg", "/images/minerals/diamond_63c42ecb.jpg", "/images/minerals/diamond_32b63a56.jpg", "/images/minerals/diamond_3e229fae.jpg", "/images/minerals/diamond_1bad10d7.jpg", "/images/minerals/diamond_6a1e7917.jpg", "/images/minerals/diamond_7dbbf4b2.jpg", "/images/minerals/diamond_2f761078.jpg"],
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
    imageUrls: ["/images/minerals/gold_d50fe9a5.jpg", "/images/minerals/gold_6f3256de.jpg", "/images/minerals/gold_adaa56f0.jpg", "/images/minerals/gold_c308362c.jpg", "/images/minerals/gold_2b3172b3.jpg", "/images/minerals/gold_765902eb.jpg", "/images/minerals/gold_dab4b9c5.jpg", "/images/minerals/gold_eb75a73d.jpg", "/images/minerals/gold_af0aafe7.jpg", "/images/minerals/gold_9eb20e2e.jpg", "/images/minerals/gold_00907d96.jpg", "/images/minerals/gold_247b83bf.jpg", "/images/minerals/gold_dbb328d8.jpg", "/images/minerals/gold_241efa09.jpg", "/images/minerals/gold_2b380ff5.jpg", "/images/minerals/gold_a47d75b0.jpg", "/images/minerals/gold_0a3fb8c1.jpg", "/images/minerals/gold_f79c4038.jpg", "/images/minerals/gold_3c61dda2.jpg", "/images/minerals/gold_fa111e2c.jpg", "/images/minerals/gold_c9c8a2f7.jpg", "/images/minerals/gold_44e53479.jpg", "/images/minerals/gold_57e93010.jpg", "/images/minerals/gold_5eb9a9bf.jpg", "/images/minerals/gold_8ccc2e6d.jpg", "/images/minerals/gold_3c495ae5.jpg", "/images/minerals/gold_b298dbad.jpg", "/images/minerals/gold_c935552a.jpg", "/images/minerals/gold_ca0d1b22.jpg", "/images/minerals/gold_5ef5dee8.jpg", "/images/minerals/gold_100ea329.jpg", "/images/minerals/gold_2fda3e27.jpg", "/images/minerals/gold_becd0887.jpg", "/images/minerals/gold_2dc33873.jpg", "/images/minerals/gold_f7160423.jpg", "/images/minerals/gold_d80ad6e0.jpg", "/images/minerals/gold_0d7e8537.jpg", "/images/minerals/gold_093a1718.jpg", "/images/minerals/gold_ebb20618.jpg", "/images/minerals/gold_cf01ad79.jpg", "/images/minerals/gold_15c08d06.jpg", "/images/minerals/gold_6b82e6ad.jpg", "/images/minerals/gold_12a67ac3.jpg", "/images/minerals/gold_125f1d7a.jpg", "/images/minerals/gold_3d05a6f9.jpg", "/images/minerals/gold_1bc3d514.jpg", "/images/minerals/gold_2289617a.jpg", "/images/minerals/gold_8f0aa670.jpg", "/images/minerals/gold_fabf6b75.jpg", "/images/minerals/gold_c484478d.jpg"],
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
    imageUrls: ["/images/minerals/silver_68984ca0.jpg", "/images/minerals/silver_3a125f24.jpg", "/images/minerals/silver_78f5a8bf.jpg", "/images/minerals/silver_3d847336.jpg", "/images/minerals/silver_041a8f24.jpg", "/images/minerals/silver_63d168b6.jpg", "/images/minerals/silver_59a576c2.jpg", "/images/minerals/silver_f93d0d92.jpg", "/images/minerals/silver_e3cdbe28.jpg", "/images/minerals/silver_41597c9c.jpg", "/images/minerals/silver_b920b38d.jpg", "/images/minerals/silver_93dc13c6.jpg", "/images/minerals/silver_f266c457.jpg", "/images/minerals/silver_06bddf30.jpg", "/images/minerals/silver_981e30cb.jpg", "/images/minerals/silver_cf91062a.jpg", "/images/minerals/silver_57667ce4.jpg", "/images/minerals/silver_15e425e3.jpg", "/images/minerals/silver_e946bc51.jpg", "/images/minerals/silver_058d9910.jpg", "/images/minerals/silver_14d38221.jpg", "/images/minerals/silver_ac11729a.jpg", "/images/minerals/silver_13eb9a57.jpg", "/images/minerals/silver_32c437c0.jpg", "/images/minerals/silver_f3a6dd65.jpg", "/images/minerals/silver_da624ea6.jpg", "/images/minerals/silver_7c1e506b.jpg", "/images/minerals/silver_28d425ca.jpg", "/images/minerals/silver_e3f086a9.jpg", "/images/minerals/silver_06d84008.jpg", "/images/minerals/silver_658ac9a8.jpg", "/images/minerals/silver_1445c4f3.jpg", "/images/minerals/silver_7b654d38.jpg", "/images/minerals/silver_3171e8be.jpg", "/images/minerals/silver_fededd6c.jpg", "/images/minerals/silver_820798e0.jpg", "/images/minerals/silver_6c9b6228.jpg", "/images/minerals/silver_fa1c0cdc.jpg", "/images/minerals/silver_12a4f5b4.jpg", "/images/minerals/silver_2614cb01.jpg", "/images/minerals/silver_78ef200d.jpg", "/images/minerals/silver_42e62ea0.jpg", "/images/minerals/silver_1cf9b734.jpg", "/images/minerals/silver_fc4e13b8.jpg", "/images/minerals/silver_220c50d2.jpg", "/images/minerals/silver_e1b3be41.jpg", "/images/minerals/silver_2e13d8cd.jpg", "/images/minerals/silver_cb84c238.jpg", "/images/minerals/silver_e23d1ec7.jpg", "/images/minerals/silver_40123bb3.jpg"],
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
    imageUrls: ["/images/minerals/copper_b9556ff5.jpg", "/images/minerals/copper_1d6c6592.jpg", "/images/minerals/copper_c4fa0af4.jpg", "/images/minerals/copper_8f86f3c0.jpg", "/images/minerals/copper_99035e66.jpg", "/images/minerals/copper_f3f38636.jpg", "/images/minerals/copper_9718b1be.jpg", "/images/minerals/copper_ecdbb792.jpg", "/images/minerals/copper_03e147fb.jpg", "/images/minerals/copper_3a2588ad.jpg", "/images/minerals/copper_611fdd3c.jpg", "/images/minerals/copper_8d6d9dba.jpg", "/images/minerals/copper_6461bd2f.jpg", "/images/minerals/copper_ff2642f0.jpg", "/images/minerals/copper_19fd3734.jpg", "/images/minerals/copper_317cd275.jpg", "/images/minerals/copper_0ebb789d.jpg", "/images/minerals/copper_141d00ea.jpg", "/images/minerals/copper_fd70a21a.jpg", "/images/minerals/copper_413c2e44.jpg", "/images/minerals/copper_60493ff7.jpg", "/images/minerals/copper_0c3d8069.jpg", "/images/minerals/copper_1e5321ec.jpg", "/images/minerals/copper_a1322854.jpg", "/images/minerals/copper_4fc91c87.jpg", "/images/minerals/copper_b8d63115.jpg", "/images/minerals/copper_9f5a1c9d.jpg", "/images/minerals/copper_0e6432e4.jpg", "/images/minerals/copper_34067b33.jpg", "/images/minerals/copper_cc85f0aa.jpg", "/images/minerals/copper_b156a717.jpg", "/images/minerals/copper_1842f039.jpg", "/images/minerals/copper_36c27309.jpg", "/images/minerals/copper_155626b0.jpg", "/images/minerals/copper_df2880cd.jpg", "/images/minerals/copper_4f043eed.jpg", "/images/minerals/copper_e63d862a.jpg", "/images/minerals/copper_d03e26de.jpg", "/images/minerals/copper_899eed44.jpg", "/images/minerals/copper_a16309a4.jpg", "/images/minerals/copper_3cbd4aa5.jpg", "/images/minerals/copper_0f7b3314.jpg", "/images/minerals/copper_a5163277.jpg", "/images/minerals/copper_1b1cb668.jpg", "/images/minerals/copper_a598e88d.jpg", "/images/minerals/copper_a31b8fe4.jpg", "/images/minerals/copper_19edcb45.jpg", "/images/minerals/copper_9e056c44.jpg", "/images/minerals/copper_35f500c6.jpg", "/images/minerals/copper_60ee5cd1.jpg"],
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
    imageUrls: ["/images/minerals/sulfur_cddd1572.jpg", "/images/minerals/sulfur_ef4886e2.jpg", "/images/minerals/sulfur_38ce098e.jpg", "/images/minerals/sulfur_4076cda3.jpg", "/images/minerals/sulfur_c4865ff2.jpg", "/images/minerals/sulfur_1535b3f1.jpg", "/images/minerals/sulfur_e09e2b75.jpg", "/images/minerals/sulfur_87befbfb.jpg", "/images/minerals/sulfur_ad3458ce.jpg", "/images/minerals/sulfur_e57d36c3.jpg"],
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
    imageUrls: ["/images/minerals/iron_226647f6.jpg", "/images/minerals/iron_fb540cee.jpg", "/images/minerals/iron_1817d9a4.jpg", "/images/minerals/iron_54821207.jpg", "/images/minerals/iron_a583db89.jpg", "/images/minerals/iron_0e69e617.jpg", "/images/minerals/iron_6d64bd10.jpg", "/images/minerals/iron_45cb7a27.jpg", "/images/minerals/iron_36a63809.jpg", "/images/minerals/iron_32bda497.jpg", "/images/minerals/iron_f0adb634.jpg", "/images/minerals/iron_7e7f2f95.jpg", "/images/minerals/iron_57cfc63b.jpg", "/images/minerals/iron_ebb92033.jpg", "/images/minerals/iron_f5d0313f.jpg", "/images/minerals/iron_d7e0811f.jpg", "/images/minerals/iron_46e58c7c.jpg", "/images/minerals/iron_80cd492e.jpg", "/images/minerals/iron_90140a34.jpg", "/images/minerals/iron_4beff418.jpg", "/images/minerals/iron_cb9914b9.jpg", "/images/minerals/iron_6287d3ca.jpg", "/images/minerals/iron_18faadce.jpg", "/images/minerals/iron_54439207.jpg", "/images/minerals/iron_7832dc9e.jpg", "/images/minerals/iron_6629d21c.jpg", "/images/minerals/iron_b54b9f7a.jpg", "/images/minerals/iron_7448a19c.jpg", "/images/minerals/iron_a9d61aa9.jpg", "/images/minerals/iron_3ad4d690.jpg", "/images/minerals/iron_332aa717.jpg", "/images/minerals/iron_d15f88b7.jpg", "/images/minerals/iron_dba3bbca.jpg", "/images/minerals/iron_2ac9c49e.jpg", "/images/minerals/iron_83618842.jpg", "/images/minerals/iron_2a6993f6.jpg", "/images/minerals/iron_251ad5c1.jpg", "/images/minerals/iron_9240b5f1.jpg", "/images/minerals/iron_cff268b6.jpg", "/images/minerals/iron_c47d5945.jpg", "/images/minerals/iron_a78385b2.jpg", "/images/minerals/iron_97b7bebc.jpg", "/images/minerals/iron_3384427a.jpg", "/images/minerals/iron_d4354e29.jpg", "/images/minerals/iron_cd79fe94.jpg", "/images/minerals/iron_d1086368.jpg", "/images/minerals/iron_d95bf4c1.jpg", "/images/minerals/iron_0bb4cb16.jpg", "/images/minerals/iron_f7f23eb1.jpg", "/images/minerals/iron_2403a8c7.jpg"],
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
    imageUrls: ["/images/minerals/pyrite_bf21a99f.jpg", "/images/minerals/pyrite_38940993.jpg", "/images/minerals/pyrite_501854c3.jpg", "/images/minerals/pyrite_ae36358d.jpg", "/images/minerals/pyrite_7fe47d1d.jpg", "/images/minerals/pyrite_ae3ebdd2.jpg", "/images/minerals/pyrite_a9bf802d.jpg", "/images/minerals/pyrite_c6ea8de1.jpg", "/images/minerals/pyrite_7fc570a8.jpg", "/images/minerals/pyrite_b0d635ae.jpg", "/images/minerals/pyrite_98c233bf.jpg", "/images/minerals/pyrite_e3c0606f.jpg", "/images/minerals/pyrite_16e86d9d.jpg", "/images/minerals/pyrite_f0b87b5b.jpg", "/images/minerals/pyrite_0803ca2b.jpg", "/images/minerals/pyrite_db7debac.jpg", "/images/minerals/pyrite_1cbe434d.jpg", "/images/minerals/pyrite_87320fe8.jpg", "/images/minerals/pyrite_9b2d37fb.jpg", "/images/minerals/pyrite_64d4ce0d.jpg", "/images/minerals/pyrite_4df6a209.jpg", "/images/minerals/pyrite_a5b7172f.jpg", "/images/minerals/pyrite_0bf4728b.jpg", "/images/minerals/pyrite_16d17e65.jpg", "/images/minerals/pyrite_730959d1.jpg", "/images/minerals/pyrite_cf73e60e.jpg", "/images/minerals/pyrite_13ab0e9b.jpg", "/images/minerals/pyrite_9c3b0cda.jpg", "/images/minerals/pyrite_fad83c8c.jpg", "/images/minerals/pyrite_5cbd37d4.jpg", "/images/minerals/pyrite_25c5889d.jpg", "/images/minerals/pyrite_cfb82360.jpg", "/images/minerals/pyrite_e1325262.jpg", "/images/minerals/pyrite_b5a9defc.jpg", "/images/minerals/pyrite_0b3de5f0.jpg", "/images/minerals/pyrite_86fa350e.jpg", "/images/minerals/pyrite_6878cc36.jpg", "/images/minerals/pyrite_a68b6fd5.jpg", "/images/minerals/pyrite_fc6a12e7.jpg", "/images/minerals/pyrite_c3f23a4a.jpg", "/images/minerals/pyrite_e96e025f.jpg", "/images/minerals/pyrite_5eb76c63.jpg", "/images/minerals/pyrite_4f6652f5.jpg", "/images/minerals/pyrite_d78e1a61.jpg", "/images/minerals/pyrite_617e6ccc.jpg", "/images/minerals/pyrite_1d346261.jpg", "/images/minerals/pyrite_f853d02c.jpg", "/images/minerals/pyrite_69d6852d.jpg", "/images/minerals/pyrite_a208a97e.jpg", "/images/minerals/pyrite_9f749b2d.jpg"],
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
    imageUrls: ["/images/minerals/marcasite_ba4081f1.jpg", "/images/minerals/marcasite_2f925cf4.jpg", "/images/minerals/marcasite_47348341.jpg", "/images/minerals/marcasite_de54f335.jpg", "/images/minerals/marcasite_2b9648b0.jpg", "/images/minerals/marcasite_320b274a.jpg", "/images/minerals/marcasite_a7053beb.jpg", "/images/minerals/marcasite_e123efbe.jpg", "/images/minerals/marcasite_dd4b8ab3.jpg", "/images/minerals/marcasite_67e2ffe5.jpg", "/images/minerals/marcasite_56bebcdd.jpg", "/images/minerals/marcasite_67f5433f.jpg", "/images/minerals/marcasite_6002d681.jpg", "/images/minerals/marcasite_8cbe4d96.jpg", "/images/minerals/marcasite_4d836b09.jpg", "/images/minerals/marcasite_a56c25c3.jpg", "/images/minerals/marcasite_cf7a3945.jpg", "/images/minerals/marcasite_a94033c4.jpg", "/images/minerals/marcasite_6769906d.jpg", "/images/minerals/marcasite_085c76e4.jpg", "/images/minerals/marcasite_416549ba.jpg", "/images/minerals/marcasite_a362e1b4.jpg", "/images/minerals/marcasite_fe759398.jpg", "/images/minerals/marcasite_60f7e456.jpg", "/images/minerals/marcasite_8a48f3c3.jpg", "/images/minerals/marcasite_c4e1fd70.jpg", "/images/minerals/marcasite_14fc805c.jpg", "/images/minerals/marcasite_663df7cc.jpg", "/images/minerals/marcasite_9717479a.jpg", "/images/minerals/marcasite_e1352560.jpg", "/images/minerals/marcasite_858d1450.jpg", "/images/minerals/marcasite_94b412ed.jpg", "/images/minerals/marcasite_def0e640.jpg", "/images/minerals/marcasite_11c8a43c.jpg", "/images/minerals/marcasite_0d52b247.jpg", "/images/minerals/marcasite_6aa72bda.jpg", "/images/minerals/marcasite_3d4a7e65.jpg", "/images/minerals/marcasite_5df378ea.jpg", "/images/minerals/marcasite_9e376198.jpg", "/images/minerals/marcasite_30e81e92.jpg", "/images/minerals/marcasite_bc51e01d.jpg", "/images/minerals/marcasite_53af8b5e.jpg", "/images/minerals/marcasite_df81b105.jpg", "/images/minerals/marcasite_9a1b0dfb.jpg", "/images/minerals/marcasite_ac9c4974.jpg", "/images/minerals/marcasite_4b37d8f7.jpg", "/images/minerals/marcasite_33545543.jpg", "/images/minerals/marcasite_d34af2b2.jpg", "/images/minerals/marcasite_02261a38.jpg", "/images/minerals/marcasite_a895c00b.jpg"],
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
    imageUrls: ["https://www.mindat.org/xpic.php?fname=0878291001306551453.jpg&h=2f5b2b22738b6bed2a2cbeb6d0c48057"],
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
    imageUrls: ["/images/minerals/sphalerite_ff8ce0f9.jpg", "/images/minerals/sphalerite_c27a4d32.jpg", "/images/minerals/sphalerite_aea055c1.jpg", "/images/minerals/sphalerite_e338515b.jpg", "/images/minerals/sphalerite_7c9cc2d1.jpg", "/images/minerals/sphalerite_2d12b988.jpg", "/images/minerals/sphalerite_de855582.jpg", "/images/minerals/sphalerite_0304ec1d.jpg", "/images/minerals/sphalerite_d61119ea.jpg", "/images/minerals/sphalerite_d295a079.jpg", "/images/minerals/sphalerite_2868cdfb.jpg", "/images/minerals/sphalerite_9296f272.jpg", "/images/minerals/sphalerite_8c70c46e.jpg", "/images/minerals/sphalerite_cc929580.jpg", "/images/minerals/sphalerite_20d6ff45.jpg", "/images/minerals/sphalerite_b1f4cabe.jpg", "/images/minerals/sphalerite_29798f0f.jpg", "/images/minerals/sphalerite_f85ffed8.jpg", "/images/minerals/sphalerite_613f8891.jpg", "/images/minerals/sphalerite_e6dce1b2.jpg", "/images/minerals/sphalerite_bd7f0524.jpg", "/images/minerals/sphalerite_4efaef0a.jpg", "/images/minerals/sphalerite_d98d503d.jpg", "/images/minerals/sphalerite_3802c0f2.jpg", "/images/minerals/sphalerite_4da539a0.jpg", "/images/minerals/sphalerite_69884730.jpg", "/images/minerals/sphalerite_879f1e0e.jpg", "/images/minerals/sphalerite_9faac9b8.jpg", "/images/minerals/sphalerite_bee570d2.jpg", "/images/minerals/sphalerite_14c82758.jpg", "/images/minerals/sphalerite_5ca6a972.jpg", "/images/minerals/sphalerite_f4226536.jpg", "/images/minerals/sphalerite_84961cf3.jpg", "/images/minerals/sphalerite_d609b4f1.jpg", "/images/minerals/sphalerite_c94733c6.jpg", "/images/minerals/sphalerite_0be24145.jpg", "/images/minerals/sphalerite_0e4c4815.jpg", "/images/minerals/sphalerite_3f22dc14.jpg", "/images/minerals/sphalerite_915befd7.jpg", "/images/minerals/sphalerite_7ffde067.jpg", "/images/minerals/sphalerite_31f4469d.jpg", "/images/minerals/sphalerite_ec163747.jpg", "/images/minerals/sphalerite_bf0df57f.jpg", "/images/minerals/sphalerite_5940b987.jpg", "/images/minerals/sphalerite_3afb29c2.jpg", "/images/minerals/sphalerite_d4d5ef10.jpg", "/images/minerals/sphalerite_d772e104.jpg", "/images/minerals/sphalerite_680fddf5.jpg", "/images/minerals/sphalerite_16e6aef0.jpg", "/images/minerals/sphalerite_df68824b.jpg"],
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
    imageUrls: ["/images/minerals/galena_572d0645.jpg", "/images/minerals/galena_2cad3e03.jpg", "/images/minerals/galena_ccd03797.jpg", "/images/minerals/galena_1dc74486.jpg", "/images/minerals/galena_5a6c1566.jpg", "/images/minerals/galena_44ea7df9.jpg", "/images/minerals/galena_c2370262.jpg", "/images/minerals/galena_54d944af.jpg", "/images/minerals/galena_241c0733.jpg", "/images/minerals/galena_42265b3f.jpg", "/images/minerals/galena_90bfc6d0.jpg", "/images/minerals/galena_d072ebce.jpg", "/images/minerals/galena_fec5d1d5.jpg", "/images/minerals/galena_a38c0679.jpg", "/images/minerals/galena_dc9e3b8f.jpg", "/images/minerals/galena_a3f12e96.jpg", "/images/minerals/galena_e37f6985.jpg", "/images/minerals/galena_d989b472.jpg", "/images/minerals/galena_417eff3a.jpg", "/images/minerals/galena_d086195c.jpg", "/images/minerals/galena_ddbb67e1.jpg", "/images/minerals/galena_0240544e.jpg", "/images/minerals/galena_7fd538d4.jpg", "/images/minerals/galena_6e342a64.jpg", "/images/minerals/galena_25c92d49.jpg", "/images/minerals/galena_06c65b1c.jpg", "/images/minerals/galena_273e8a14.jpg", "/images/minerals/galena_16e6bf7b.jpg", "/images/minerals/galena_a22ae32b.jpg", "/images/minerals/galena_6fd4ef56.jpg", "/images/minerals/galena_6a9ffbd2.jpg", "/images/minerals/galena_5b453fa2.jpg", "/images/minerals/galena_4e80a47b.jpg", "/images/minerals/galena_4ec09e7c.jpg", "/images/minerals/galena_ad781f51.jpg", "/images/minerals/galena_a279ccff.jpg", "/images/minerals/galena_b4c4f945.jpg", "/images/minerals/galena_46c9aeed.jpg", "/images/minerals/galena_82cab73e.jpg", "/images/minerals/galena_f0aa16b7.jpg", "/images/minerals/galena_5fa00909.jpg", "/images/minerals/galena_a3cfe6ef.jpg", "/images/minerals/galena_fc581bee.jpg", "/images/minerals/galena_2c6cdadd.jpg", "/images/minerals/galena_fff578c6.jpg", "/images/minerals/galena_3a0992ef.jpg", "/images/minerals/galena_65f00e75.jpg", "/images/minerals/galena_8cbe30bf.jpg", "/images/minerals/galena_bd37a3b3.jpg", "/images/minerals/galena_56ff5c61.jpg"],
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
    imageUrls: ["/images/minerals/goethite_45b362e2.jpg", "/images/minerals/goethite_40500747.jpg", "/images/minerals/goethite_86b6ca85.jpg", "/images/minerals/goethite_595a9461.jpg", "/images/minerals/goethite_a2cb8507.jpg", "/images/minerals/goethite_740330f1.jpg", "/images/minerals/goethite_48fcdea0.jpg", "/images/minerals/goethite_3d7b5748.jpg", "/images/minerals/goethite_58f11165.jpg", "/images/minerals/goethite_0d4f29ad.jpg", "/images/minerals/goethite_43d6b31f.jpg", "/images/minerals/goethite_85395538.jpg", "/images/minerals/goethite_4f5be9ed.jpg", "/images/minerals/goethite_1e5ba78d.jpg", "/images/minerals/goethite_e5072d7d.jpg", "/images/minerals/goethite_4137a30d.jpg", "/images/minerals/goethite_b336c3ce.jpg", "/images/minerals/goethite_b861a6aa.jpg", "/images/minerals/goethite_2fbab629.jpg", "/images/minerals/goethite_6bc5b1ec.jpg", "/images/minerals/goethite_dce45bda.jpg", "/images/minerals/goethite_6de22dac.jpg", "/images/minerals/goethite_5d38288c.jpg", "/images/minerals/goethite_d4269538.jpg", "/images/minerals/goethite_d2f1a65e.jpg", "/images/minerals/goethite_7c81b609.jpg", "/images/minerals/goethite_914085c9.jpg", "/images/minerals/goethite_e6a5eb31.jpg", "/images/minerals/goethite_7666eae1.jpg", "/images/minerals/goethite_03d20bf4.jpg", "/images/minerals/goethite_1b9e7f15.jpg", "/images/minerals/goethite_a802cdae.jpg", "/images/minerals/goethite_593d3351.jpg", "/images/minerals/goethite_373e5e4c.jpg", "/images/minerals/goethite_14739a11.jpg", "/images/minerals/goethite_b57364a9.jpg", "/images/minerals/goethite_d3800d1c.jpg", "/images/minerals/goethite_d16303a7.jpg", "/images/minerals/goethite_5f26e931.jpg", "/images/minerals/goethite_5527367b.jpg", "/images/minerals/goethite_e7601d10.jpg", "/images/minerals/goethite_a4c123ec.jpg", "/images/minerals/goethite_51f7094f.jpg", "/images/minerals/goethite_84715fd5.jpg", "/images/minerals/goethite_4fa4202f.jpg", "/images/minerals/goethite_f8058079.jpg", "/images/minerals/goethite_d7cf7ea5.jpg", "/images/minerals/goethite_ac677d37.jpg", "/images/minerals/goethite_9a061636.jpg", "/images/minerals/goethite_847454d4.jpg"],
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
    imageUrls: ["/images/minerals/halite_5449fb2c.jpg", "/images/minerals/halite_1b1571c3.jpg", "/images/minerals/halite_ee48fc13.jpg", "/images/minerals/halite_586ca494.jpg", "/images/minerals/halite_243137f6.jpg", "/images/minerals/halite_9e6d1639.jpg", "/images/minerals/halite_3b814b64.jpg", "/images/minerals/halite_6585ebf6.jpg", "/images/minerals/halite_c16f6cb9.jpg", "/images/minerals/halite_7f2cf207.jpg", "/images/minerals/halite_8dcea9ae.jpg", "/images/minerals/halite_6e2e1969.jpg", "/images/minerals/halite_3f39d965.jpg", "/images/minerals/halite_4f367f14.jpg", "/images/minerals/halite_bdaa60aa.jpg", "/images/minerals/halite_493e47e9.jpg", "/images/minerals/halite_d0f68ee8.jpg", "/images/minerals/halite_ad86e3e1.jpg", "/images/minerals/halite_48b74c4f.jpg", "/images/minerals/halite_30106855.jpg", "/images/minerals/halite_88e248ef.jpg", "/images/minerals/halite_1c33a1da.jpg", "/images/minerals/halite_cb51cfe4.jpg", "/images/minerals/halite_85c6face.jpg", "/images/minerals/halite_e416bdcb.jpg", "/images/minerals/halite_33853b2a.jpg", "/images/minerals/halite_c152c459.jpg", "/images/minerals/halite_733ede23.jpg", "/images/minerals/halite_7dd5af75.jpg", "/images/minerals/halite_682b1a07.jpg", "/images/minerals/halite_669e9212.jpg", "/images/minerals/halite_5ddfe9fb.jpg", "/images/minerals/halite_3088c657.jpg", "/images/minerals/halite_2b076db9.jpg", "/images/minerals/halite_82470236.jpg", "/images/minerals/halite_1fadb947.jpg", "/images/minerals/halite_dc4e9d9b.jpg", "/images/minerals/halite_5f0e6205.jpg", "/images/minerals/halite_71b862d0.jpg", "/images/minerals/halite_09ad38c3.jpg", "/images/minerals/halite_00a0883b.jpg", "/images/minerals/halite_0a77ad3c.jpg", "/images/minerals/halite_c4795e04.jpg", "/images/minerals/halite_00d97764.jpg", "/images/minerals/halite_bb2700d9.jpg", "/images/minerals/halite_02acee22.jpg", "/images/minerals/halite_dedc350b.jpg", "/images/minerals/halite_a20dacaf.jpg", "/images/minerals/halite_51de5c2c.jpg", "/images/minerals/halite_b9cf4b39.jpg"],
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
    imageUrls: ["/images/minerals/fluorite_1ac64d95.jpg", "/images/minerals/fluorite_76ec274d.jpg", "/images/minerals/fluorite_2c2d31b1.jpg", "/images/minerals/fluorite_2ffcc451.jpg", "/images/minerals/fluorite_c06f320f.jpg", "/images/minerals/fluorite_ee50ed92.jpg", "/images/minerals/fluorite_e3937d70.jpg", "/images/minerals/fluorite_691b13fc.jpg", "/images/minerals/fluorite_660afbb4.jpg", "/images/minerals/fluorite_22dc1081.jpg", "/images/minerals/fluorite_4685527a.jpg", "/images/minerals/fluorite_7f484fb6.jpg", "/images/minerals/fluorite_dab24dee.jpg", "/images/minerals/fluorite_3240c890.jpg", "/images/minerals/fluorite_9dd0e3c5.jpg", "/images/minerals/fluorite_3daa0094.jpg", "/images/minerals/fluorite_0d70fa1c.jpg", "/images/minerals/fluorite_979303da.jpg", "/images/minerals/fluorite_a50a7622.jpg", "/images/minerals/fluorite_5c57af9c.jpg", "/images/minerals/fluorite_dfb323c3.jpg", "/images/minerals/fluorite_81deb156.jpg", "/images/minerals/fluorite_67365d4a.jpg", "/images/minerals/fluorite_0b6bceb5.jpg", "/images/minerals/fluorite_da38f567.jpg", "/images/minerals/fluorite_44f8e0e6.jpg", "/images/minerals/fluorite_dd5ecb4f.jpg", "/images/minerals/fluorite_c8990cc8.jpg", "/images/minerals/fluorite_8dd60005.jpg", "/images/minerals/fluorite_fdf7411c.jpg", "/images/minerals/fluorite_61b6edee.jpg", "/images/minerals/fluorite_786e9dd8.jpg", "/images/minerals/fluorite_b892c48e.jpg", "/images/minerals/fluorite_119d0afa.jpg", "/images/minerals/fluorite_106dcf6f.jpg", "/images/minerals/fluorite_481d3dff.jpg", "/images/minerals/fluorite_cbd5435f.jpg", "/images/minerals/fluorite_246a24c9.jpg", "/images/minerals/fluorite_89e568ac.jpg", "/images/minerals/fluorite_5fdd8474.jpg", "/images/minerals/fluorite_9095b350.jpg", "/images/minerals/fluorite_d90a837d.jpg", "/images/minerals/fluorite_f1db5529.jpg", "/images/minerals/fluorite_478450fc.jpg", "/images/minerals/fluorite_2b89e5d8.jpg", "/images/minerals/fluorite_093f1fa6.jpg", "/images/minerals/fluorite_3f509311.jpg", "/images/minerals/fluorite_9f3eb5f2.jpg", "/images/minerals/fluorite_62d8cff8.jpg", "/images/minerals/fluorite_791e96df.jpg"],
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
    imageUrls: ["/images/minerals/apatite_c97b0cf9.jpg", "/images/minerals/apatite_e9117fbb.jpg", "/images/minerals/apatite_5469f08f.jpg", "/images/minerals/apatite_5823cb94.jpg", "/images/minerals/apatite_510efbbd.jpg", "/images/minerals/apatite_d057cde7.jpg", "/images/minerals/apatite_475f2a39.jpg", "/images/minerals/apatite_a78c4c97.jpg", "/images/minerals/apatite_69eda636.jpg", "/images/minerals/apatite_1906b2df.jpg", "/images/minerals/apatite_acb53b46.jpg", "/images/minerals/apatite_a66fe144.jpg", "/images/minerals/apatite_e5bab951.jpg", "/images/minerals/apatite_9a50b670.jpg", "/images/minerals/apatite_279d034a.jpg", "/images/minerals/apatite_ec705dd7.jpg", "/images/minerals/apatite_aa1eadf6.jpg", "/images/minerals/apatite_a7c51c4a.jpg", "/images/minerals/apatite_318bac2d.jpg", "/images/minerals/apatite_addcaf50.jpg", "/images/minerals/apatite_e7b6840a.jpg", "/images/minerals/apatite_0fca0a69.jpg", "/images/minerals/apatite_f13ad14c.jpg", "/images/minerals/apatite_b5c27f38.jpg", "/images/minerals/apatite_3193120c.jpg", "/images/minerals/apatite_86a7e06f.jpg", "/images/minerals/apatite_a8a91f73.jpg", "/images/minerals/apatite_ce5d4aa3.jpg", "/images/minerals/apatite_be361722.jpg", "/images/minerals/apatite_f4781952.jpg", "/images/minerals/apatite_5010add1.jpg", "/images/minerals/apatite_e6a22dd2.jpg", "/images/minerals/apatite_96567e15.jpg", "/images/minerals/apatite_691e4bb8.jpg", "/images/minerals/apatite_4ab89fce.jpg", "/images/minerals/apatite_723a01f8.jpg", "/images/minerals/apatite_53c190d2.jpg", "/images/minerals/apatite_82c8d3d9.jpg", "/images/minerals/apatite_cb9bef65.jpg", "/images/minerals/apatite_90cb5188.jpg", "/images/minerals/apatite_33813eec.jpg", "/images/minerals/apatite_08d4ce49.jpg", "/images/minerals/apatite_e37ca75c.jpg", "/images/minerals/apatite_45683941.jpg", "/images/minerals/apatite_13361bc7.jpg", "/images/minerals/apatite_bd8eab27.jpg", "/images/minerals/apatite_9d6bce70.jpg", "/images/minerals/apatite_50b7a8dd.jpg", "/images/minerals/apatite_28f53651.jpg", "/images/minerals/apatite_3ae85f79.jpg"],
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
    imageUrls: ["/images/minerals/magnetite_260b5c73.jpg", "/images/minerals/magnetite_3a3c41d1.jpg", "/images/minerals/magnetite_2184d7d6.jpg", "/images/minerals/magnetite_98c61820.jpg", "/images/minerals/magnetite_0ba0822e.jpg", "/images/minerals/magnetite_0be4f1b1.jpg", "/images/minerals/magnetite_88edae58.jpg", "/images/minerals/magnetite_e349b6b5.jpg", "/images/minerals/magnetite_ec90b44a.jpg", "/images/minerals/magnetite_6cd413c8.jpg", "/images/minerals/magnetite_be15a4ec.jpg", "/images/minerals/magnetite_cdafe56f.jpg", "/images/minerals/magnetite_fa9cf68c.jpg", "/images/minerals/magnetite_368c9956.jpg", "/images/minerals/magnetite_b940ef37.jpg", "/images/minerals/magnetite_3f4b26a3.jpg", "/images/minerals/magnetite_efbe8dfb.jpg", "/images/minerals/magnetite_b7bc151d.jpg", "/images/minerals/magnetite_5b8ebf54.jpg", "/images/minerals/magnetite_2b0d50d3.jpg", "/images/minerals/magnetite_995a71aa.jpg", "/images/minerals/magnetite_739edcf0.jpg", "/images/minerals/magnetite_629c29b2.jpg", "/images/minerals/magnetite_17c7a72a.jpg", "/images/minerals/magnetite_506ec56d.jpg", "/images/minerals/magnetite_bb67cb22.jpg", "/images/minerals/magnetite_cb293de8.jpg", "/images/minerals/magnetite_07ba6d9a.jpg", "/images/minerals/magnetite_97a766dd.jpg", "/images/minerals/magnetite_3915855a.jpg", "/images/minerals/magnetite_cf1c0ac4.jpg", "/images/minerals/magnetite_fa5dce65.jpg", "/images/minerals/magnetite_e625262c.jpg", "/images/minerals/magnetite_5e6ee5dc.jpg", "/images/minerals/magnetite_da54833f.jpg", "/images/minerals/magnetite_a09d10a4.jpg", "/images/minerals/magnetite_335c12fc.jpg", "/images/minerals/magnetite_5ebbe0d2.jpg", "/images/minerals/magnetite_fafb8dd6.jpg", "/images/minerals/magnetite_2ea27622.jpg", "/images/minerals/magnetite_0234add5.jpg", "/images/minerals/magnetite_b5ef8312.jpg", "/images/minerals/magnetite_ef9b716d.jpg", "/images/minerals/magnetite_2044b7ca.jpg", "/images/minerals/magnetite_a9c46cea.jpg", "/images/minerals/magnetite_10e6559a.jpg", "/images/minerals/magnetite_425d2dd8.jpg", "/images/minerals/magnetite_9ed997c3.jpg", "/images/minerals/magnetite_dd16533a.jpg", "/images/minerals/magnetite_42c8ca65.jpg"],
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
    imageUrls: ["/images/minerals/rutile_4163fcff.jpg", "/images/minerals/rutile_4264db23.jpg", "/images/minerals/rutile_e35df4d1.jpg", "/images/minerals/rutile_edebe05a.jpg", "/images/minerals/rutile_1e292815.jpg", "/images/minerals/rutile_cbea0afc.jpg", "/images/minerals/rutile_e85b9245.jpg", "/images/minerals/rutile_e79c461d.jpg", "/images/minerals/rutile_f2b734ae.jpg", "/images/minerals/rutile_ee3d9feb.jpg", "/images/minerals/rutile_29dd3fda.jpg", "/images/minerals/rutile_d2052560.jpg", "/images/minerals/rutile_fe18c82a.jpg", "/images/minerals/rutile_978392cb.jpg", "/images/minerals/rutile_a614a045.jpg", "/images/minerals/rutile_3b689ec7.jpg", "/images/minerals/rutile_460898b6.jpg", "/images/minerals/rutile_38fe938f.jpg", "/images/minerals/rutile_ceae43b8.jpg", "/images/minerals/rutile_41e67c94.jpg", "/images/minerals/rutile_228de8a6.jpg", "/images/minerals/rutile_f5d967f8.jpg", "/images/minerals/rutile_ac47786d.jpg", "/images/minerals/rutile_4c0d59ec.jpg", "/images/minerals/rutile_02268158.jpg", "/images/minerals/rutile_02f601d1.jpg", "/images/minerals/rutile_18681cde.jpg", "/images/minerals/rutile_f109b441.jpg", "/images/minerals/rutile_fa2a8b36.jpg", "/images/minerals/rutile_8b6ca680.jpg", "/images/minerals/rutile_62bdc3bf.jpg", "/images/minerals/rutile_b93215b6.jpg", "/images/minerals/rutile_15f9eab6.jpg", "/images/minerals/rutile_f0c58475.jpg", "/images/minerals/rutile_35a8d389.jpg", "/images/minerals/rutile_01b7936e.jpg", "/images/minerals/rutile_b8f3e154.jpg", "/images/minerals/rutile_f578879d.jpg", "/images/minerals/rutile_3ca227ab.jpg", "/images/minerals/rutile_251f1444.jpg", "/images/minerals/rutile_06a6bff9.jpg", "/images/minerals/rutile_9e2719a8.jpg", "/images/minerals/rutile_bf660173.jpg", "/images/minerals/rutile_c7d9d553.jpg", "/images/minerals/rutile_d5bb635c.jpg", "/images/minerals/rutile_64c98dcb.jpg", "/images/minerals/rutile_34313338.jpg", "/images/minerals/rutile_97721313.jpg", "/images/minerals/rutile_3c7e71ab.jpg", "/images/minerals/rutile_be3e3b2c.jpg"],
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
    imageUrls: ["/images/minerals/ilmenite_7791c46b.jpg", "/images/minerals/ilmenite_7f3ec982.jpg", "/images/minerals/ilmenite_468f16cc.jpg", "/images/minerals/ilmenite_3fc6851d.jpg", "/images/minerals/ilmenite_430117e4.jpg", "/images/minerals/ilmenite_04051cef.jpg", "/images/minerals/ilmenite_9a6957a5.jpg", "/images/minerals/ilmenite_d130ad05.jpg", "/images/minerals/ilmenite_f10eb996.jpg", "/images/minerals/ilmenite_d799a96e.jpg", "/images/minerals/ilmenite_7a1256e6.jpg", "/images/minerals/ilmenite_9359e4a4.jpg", "/images/minerals/ilmenite_6556db8f.jpg", "/images/minerals/ilmenite_75c70c85.jpg", "/images/minerals/ilmenite_db65dfb4.jpg", "/images/minerals/ilmenite_3b6a2530.jpg", "/images/minerals/ilmenite_4824aa8e.jpg", "/images/minerals/ilmenite_cec8d7ef.jpg", "/images/minerals/ilmenite_82e71a83.jpg", "/images/minerals/ilmenite_aa29774b.jpg", "/images/minerals/ilmenite_adad4ea9.jpg", "/images/minerals/ilmenite_04e0d664.jpg", "/images/minerals/ilmenite_8412de69.jpg", "/images/minerals/ilmenite_c42dbc9c.jpg", "/images/minerals/ilmenite_0a98aea4.jpg", "/images/minerals/ilmenite_81a4bfb2.jpg", "/images/minerals/ilmenite_3acfea55.jpg", "/images/minerals/ilmenite_454fdcb6.jpg", "/images/minerals/ilmenite_5acd9bb8.jpg", "/images/minerals/ilmenite_f33ed0b0.jpg", "/images/minerals/ilmenite_bd215f82.jpg", "/images/minerals/ilmenite_d539f743.jpg", "/images/minerals/ilmenite_55cf1214.jpg", "/images/minerals/ilmenite_28ef1dc4.jpg", "/images/minerals/ilmenite_26c32c67.jpg", "/images/minerals/ilmenite_845c424d.jpg", "/images/minerals/ilmenite_692c961d.jpg", "/images/minerals/ilmenite_fc948727.jpg", "/images/minerals/ilmenite_6129bf14.jpg", "/images/minerals/ilmenite_dbe3e4eb.jpg", "/images/minerals/ilmenite_96cbcacb.jpg", "/images/minerals/ilmenite_5036fe26.jpg", "/images/minerals/ilmenite_4eab5839.jpg", "/images/minerals/ilmenite_050925a1.jpg", "/images/minerals/ilmenite_3676ecc1.jpg", "/images/minerals/ilmenite_1ff81f70.jpg", "/images/minerals/ilmenite_700bdeb8.jpg", "/images/minerals/ilmenite_5a7131e7.jpg", "/images/minerals/ilmenite_db3e6b87.jpg", "/images/minerals/ilmenite_c36e2c94.jpg"],
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
    imageUrls: ["/images/minerals/corundum_79526563.jpg", "/images/minerals/corundum_c0c8e684.jpg", "/images/minerals/corundum_c0e61051.jpg", "/images/minerals/corundum_f6c6da58.jpg", "/images/minerals/corundum_9f16c04b.jpg", "/images/minerals/corundum_68f7e556.jpg", "/images/minerals/corundum_e9abc031.jpg", "/images/minerals/corundum_755da413.jpg", "/images/minerals/corundum_90b930d1.jpg", "/images/minerals/corundum_dec7fc3e.jpg", "/images/minerals/corundum_c60796c2.jpg", "/images/minerals/corundum_91447817.jpg", "/images/minerals/corundum_b3787662.jpg", "/images/minerals/corundum_69e11c19.jpg", "/images/minerals/corundum_62a21ad7.jpg", "/images/minerals/corundum_5fdaab54.jpg", "/images/minerals/corundum_d3e0c780.jpg", "/images/minerals/corundum_e9b42379.jpg", "/images/minerals/corundum_676bd533.jpg", "/images/minerals/corundum_b1c40578.jpg", "/images/minerals/corundum_24f56cb8.jpg", "/images/minerals/corundum_78df098f.jpg", "/images/minerals/corundum_4ce01e22.jpg", "/images/minerals/corundum_1e7f7c8c.jpg", "/images/minerals/corundum_67584448.jpg", "/images/minerals/corundum_df1a0497.jpg", "/images/minerals/corundum_f55106ce.jpg", "/images/minerals/corundum_9da4a40c.jpg", "/images/minerals/corundum_e2cb3242.jpg", "/images/minerals/corundum_9bb52237.jpg", "/images/minerals/corundum_6ebc0d4c.jpg", "/images/minerals/corundum_2135bd6a.jpg", "/images/minerals/corundum_9a6f01b4.jpg", "/images/minerals/corundum_a3a58629.jpg", "/images/minerals/corundum_48aa4750.jpg", "/images/minerals/corundum_cc0853ec.jpg", "/images/minerals/corundum_7248b883.jpg", "/images/minerals/corundum_13d527e3.jpg", "/images/minerals/corundum_eab48c79.jpg", "/images/minerals/corundum_3a12c0ae.jpg", "/images/minerals/corundum_cd8542ea.jpg", "/images/minerals/corundum_134ad5c0.jpg", "/images/minerals/corundum_b05f1664.jpg", "/images/minerals/corundum_bb773156.jpg", "/images/minerals/corundum_61cdadff.jpg", "/images/minerals/corundum_ce05d707.jpg", "/images/minerals/corundum_47402ab3.jpg", "/images/minerals/corundum_5ad8d0c0.jpg", "/images/minerals/corundum_217aa994.jpg", "/images/minerals/corundum_d3a3bfab.jpg"],
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
    imageUrls: ["/images/minerals/hematite_6d4a393a.jpg", "/images/minerals/hematite_24cb8c9e.jpg", "/images/minerals/hematite_5d2aef6a.jpg", "/images/minerals/hematite_9d81644b.jpg", "/images/minerals/hematite_c7ac2904.jpg", "/images/minerals/hematite_7f95ee23.jpg", "/images/minerals/hematite_2aada05e.jpg", "/images/minerals/hematite_2ca2a7fa.jpg", "/images/minerals/hematite_7cc8e3f0.jpg", "/images/minerals/hematite_1e209713.jpg", "/images/minerals/hematite_7d2ce502.jpg", "/images/minerals/hematite_5d9b0f17.jpg", "/images/minerals/hematite_16510c5e.jpg", "/images/minerals/hematite_9f43be94.jpg", "/images/minerals/hematite_244ca63c.jpg", "/images/minerals/hematite_7ecdc864.jpg", "/images/minerals/hematite_07966df4.jpg", "/images/minerals/hematite_d0264930.jpg", "/images/minerals/hematite_200ad2ec.jpg", "/images/minerals/hematite_ac7d1dd1.jpg", "/images/minerals/hematite_9cb99151.jpg", "/images/minerals/hematite_5b1c7b7e.jpg", "/images/minerals/hematite_21dbdfe9.jpg", "/images/minerals/hematite_73f2384e.jpg", "/images/minerals/hematite_4cfab6ff.jpg", "/images/minerals/hematite_f9589daa.jpg", "/images/minerals/hematite_50d580f2.jpg", "/images/minerals/hematite_19aa5ac9.jpg", "/images/minerals/hematite_a5a98cbe.jpg", "/images/minerals/hematite_e2427a73.jpg", "/images/minerals/hematite_06ff80b1.jpg", "/images/minerals/hematite_832e5307.jpg", "/images/minerals/hematite_cc2d2b7b.jpg", "/images/minerals/hematite_c289169d.jpg", "/images/minerals/hematite_f56a8437.jpg", "/images/minerals/hematite_1523650b.jpg", "/images/minerals/hematite_9b9c5303.jpg", "/images/minerals/hematite_d2f42ae5.jpg", "/images/minerals/hematite_3780071d.jpg", "/images/minerals/hematite_1aaef7b8.jpg", "/images/minerals/hematite_873ea2da.jpg", "/images/minerals/hematite_1d5b9b8a.jpg", "/images/minerals/hematite_429b3d53.jpg", "/images/minerals/hematite_f775439a.jpg", "/images/minerals/hematite_6b500bf2.jpg", "/images/minerals/hematite_53e815de.jpg", "/images/minerals/hematite_11804dfd.jpg", "/images/minerals/hematite_8c867fb5.jpg", "/images/minerals/hematite_82854d8f.jpg", "/images/minerals/hematite_dc7e9bd1.jpg"],
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
    imageUrls: ["/images/minerals/lawsonite_8ce4f566.jpg", "/images/minerals/lawsonite_ca23859f.jpg", "/images/minerals/lawsonite_4de80f7e.jpg", "/images/minerals/lawsonite_7554bf6e.jpg", "/images/minerals/lawsonite_8f363373.jpg", "/images/minerals/lawsonite_9b206c5a.jpg", "/images/minerals/lawsonite_76d2431a.jpg", "/images/minerals/lawsonite_d698bf8e.jpg", "/images/minerals/lawsonite_2a11f6b7.jpg", "/images/minerals/lawsonite_c4108b57.jpg", "/images/minerals/lawsonite_e8ca5c76.jpg", "/images/minerals/lawsonite_e45f7d9e.jpg", "/images/minerals/lawsonite_8ba5f8ee.jpg", "/images/minerals/lawsonite_6ee23e37.jpg", "/images/minerals/lawsonite_551a5824.jpg", "/images/minerals/lawsonite_35f2a177.jpg", "/images/minerals/lawsonite_b3404762.jpg", "/images/minerals/lawsonite_5b9bc402.jpg", "/images/minerals/lawsonite_edb463ec.jpg", "/images/minerals/lawsonite_d2233e21.jpg", "/images/minerals/lawsonite_5f10bd27.jpg", "/images/minerals/lawsonite_1dee03c7.jpg", "/images/minerals/lawsonite_86b85901.jpg", "/images/minerals/lawsonite_595ffd77.jpg", "/images/minerals/lawsonite_2a407884.jpg", "/images/minerals/lawsonite_38be1240.jpg", "/images/minerals/lawsonite_7c347cfc.jpg", "/images/minerals/lawsonite_c530d81a.jpg", "/images/minerals/lawsonite_edabc3be.jpg", "/images/minerals/lawsonite_53b6280b.jpg", "/images/minerals/lawsonite_9263ffea.jpg", "/images/minerals/lawsonite_c46b0a91.jpg", "/images/minerals/lawsonite_1c10634f.jpg", "/images/minerals/lawsonite_492b595e.jpg", "/images/minerals/lawsonite_54591c18.jpg", "/images/minerals/lawsonite_fa392217.jpg", "/images/minerals/lawsonite_270f589e.jpg", "/images/minerals/lawsonite_9bc3e7c8.jpg"],
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
    imageUrls: ["/images/minerals/zoisite_fa1bea8d.jpg", "/images/minerals/zoisite_8cfc1b48.jpg", "/images/minerals/zoisite_d967e087.jpg", "/images/minerals/zoisite_143342eb.jpg", "/images/minerals/zoisite_c8389655.jpg", "/images/minerals/zoisite_b1c6f799.jpg", "/images/minerals/zoisite_49b87b8b.jpg", "/images/minerals/zoisite_5b29e241.jpg", "/images/minerals/zoisite_e85f8677.jpg", "/images/minerals/zoisite_0f864936.jpg", "/images/minerals/zoisite_b142405b.jpg", "/images/minerals/zoisite_61267b19.jpg", "/images/minerals/zoisite_6bb65bae.jpg", "/images/minerals/zoisite_92d0dabd.jpg", "/images/minerals/zoisite_cd3edbc8.jpg", "/images/minerals/zoisite_7af4c896.jpg", "/images/minerals/zoisite_f4f63ee0.jpg", "/images/minerals/zoisite_de8b862f.jpg", "/images/minerals/zoisite_56723d1f.jpg", "/images/minerals/zoisite_cdf80226.jpg", "/images/minerals/zoisite_0f64ce09.jpg", "/images/minerals/zoisite_a89b228d.jpg", "/images/minerals/zoisite_32cf0e75.jpg", "/images/minerals/zoisite_1cafe56b.jpg", "/images/minerals/zoisite_99b31a3f.jpg", "/images/minerals/zoisite_4ff92811.jpg", "/images/minerals/zoisite_1cc4ac19.jpg", "/images/minerals/zoisite_6bf5b976.jpg", "/images/minerals/zoisite_1d2f01ed.jpg", "/images/minerals/zoisite_fc993290.jpg", "/images/minerals/zoisite_784629ad.jpg", "/images/minerals/zoisite_5c6e8b2c.jpg", "/images/minerals/zoisite_baa0a2f9.jpg", "/images/minerals/zoisite_2adbb32f.jpg", "/images/minerals/zoisite_a76075d3.jpg", "/images/minerals/zoisite_3171204c.jpg", "/images/minerals/zoisite_fa273308.jpg", "/images/minerals/zoisite_47aa963d.jpg", "/images/minerals/zoisite_8579325f.jpg", "/images/minerals/zoisite_9b8e89af.jpg", "/images/minerals/zoisite_1cfeb30c.jpg", "/images/minerals/zoisite_d0a4c845.jpg", "/images/minerals/zoisite_ca26d418.jpg", "/images/minerals/zoisite_7885e156.jpg", "/images/minerals/zoisite_ee027eb3.jpg", "/images/minerals/zoisite_2987dc1f.jpg", "/images/minerals/zoisite_f41895fa.jpg", "/images/minerals/zoisite_0d2a8648.jpg", "/images/minerals/zoisite_26a7f5e8.jpg", "/images/minerals/zoisite_56740fc8.jpg"],
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
    imageUrls: ["/images/minerals/beryl_044cdf23.jpg", "/images/minerals/beryl_0c3ccbdb.jpg", "/images/minerals/beryl_bfe72ba9.jpg", "/images/minerals/beryl_3442021e.jpg", "/images/minerals/beryl_4c8e3541.jpg", "/images/minerals/beryl_5f624e45.jpg", "/images/minerals/beryl_a7152fc4.jpg", "/images/minerals/beryl_fa56318b.jpg", "/images/minerals/beryl_d8d49e3c.jpg", "/images/minerals/beryl_da5ba1e3.jpg", "/images/minerals/beryl_1b9721d3.jpg", "/images/minerals/beryl_6c3997a9.jpg", "/images/minerals/beryl_3a8cbebd.jpg", "/images/minerals/beryl_f97a92ff.jpg", "/images/minerals/beryl_1816d86b.jpg", "/images/minerals/beryl_0d210ae9.jpg", "/images/minerals/beryl_aca95ae5.jpg", "/images/minerals/beryl_7771a657.jpg", "/images/minerals/beryl_a9fecc07.jpg", "/images/minerals/beryl_efa97e99.jpg", "/images/minerals/beryl_30ae78f7.jpg", "/images/minerals/beryl_f339b491.jpg", "/images/minerals/beryl_da9426b0.jpg", "/images/minerals/beryl_8d6dc76f.jpg", "/images/minerals/beryl_7bc35f37.jpg", "/images/minerals/beryl_5b607ee2.jpg", "/images/minerals/beryl_e89afec2.jpg", "/images/minerals/beryl_b12d9b12.jpg", "/images/minerals/beryl_61c4b52b.jpg", "/images/minerals/beryl_e0b7c941.jpg", "/images/minerals/beryl_172b943a.jpg", "/images/minerals/beryl_bcb017aa.jpg", "/images/minerals/beryl_0ca9a8b7.jpg", "/images/minerals/beryl_8b213f7c.jpg", "/images/minerals/beryl_22e6f149.jpg", "/images/minerals/beryl_35ee4a22.jpg", "/images/minerals/beryl_40520cc5.jpg", "/images/minerals/beryl_271bb483.jpg", "/images/minerals/beryl_3bc64524.jpg", "/images/minerals/beryl_3286b92a.jpg", "/images/minerals/beryl_8d4e05bf.jpg", "/images/minerals/beryl_633d6dee.jpg", "/images/minerals/beryl_414ad7b5.jpg", "/images/minerals/beryl_d7ae901a.jpg", "/images/minerals/beryl_2f62f771.jpg", "/images/minerals/beryl_99787343.jpg", "/images/minerals/beryl_ae18174b.jpg", "/images/minerals/beryl_b5ba7838.jpg", "/images/minerals/beryl_dbe00e46.jpg", "/images/minerals/beryl_8abc5285.jpg"],
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
    imageUrls: ["/images/minerals/tourmaline_9083e63a.jpg", "/images/minerals/tourmaline_7050abf1.jpg", "/images/minerals/tourmaline_330ca5a3.jpg", "/images/minerals/tourmaline_7ec11814.jpg", "/images/minerals/tourmaline_2e048407.jpg", "/images/minerals/tourmaline_6a99048f.jpg", "/images/minerals/tourmaline_d319c71f.jpg", "/images/minerals/tourmaline_94d22634.jpg", "/images/minerals/tourmaline_525fdd7f.jpg", "/images/minerals/tourmaline_6a191fc4.jpg", "/images/minerals/tourmaline_b6dcb1f7.jpg", "/images/minerals/tourmaline_4fe839c7.jpg", "/images/minerals/tourmaline_371f37b7.jpg", "/images/minerals/tourmaline_9bb59003.jpg", "/images/minerals/tourmaline_059f6809.jpg", "/images/minerals/tourmaline_449445b6.jpg", "/images/minerals/tourmaline_caef9b14.jpg", "/images/minerals/tourmaline_6c8d806b.jpg", "/images/minerals/tourmaline_9b816afd.jpg", "/images/minerals/tourmaline_2aac55d8.jpg", "/images/minerals/tourmaline_8db3d584.jpg", "/images/minerals/tourmaline_f375c7d5.jpg", "/images/minerals/tourmaline_8f10fce6.jpg", "/images/minerals/tourmaline_121d64d8.jpg", "/images/minerals/tourmaline_8324d50a.jpg", "/images/minerals/tourmaline_c2244af8.jpg", "/images/minerals/tourmaline_5cd2a0d3.jpg", "/images/minerals/tourmaline_ad9d9099.jpg", "/images/minerals/tourmaline_4b082076.jpg", "/images/minerals/tourmaline_760091bd.jpg", "/images/minerals/tourmaline_4876c948.jpg", "/images/minerals/tourmaline_3d76b725.jpg", "/images/minerals/tourmaline_259db129.jpg", "/images/minerals/tourmaline_c1670c4f.jpg", "/images/minerals/tourmaline_04849430.jpg", "/images/minerals/tourmaline_2ac95dbc.jpg", "/images/minerals/tourmaline_87685c7d.jpg", "/images/minerals/tourmaline_6a0fc595.jpg", "/images/minerals/tourmaline_85368097.jpg", "/images/minerals/tourmaline_a0d3fbda.jpg", "/images/minerals/tourmaline_fd9aeb1a.jpg", "/images/minerals/tourmaline_a8a08a59.jpg", "/images/minerals/tourmaline_6fd51e36.jpg", "/images/minerals/tourmaline_476c8305.jpg", "/images/minerals/tourmaline_ab6794d5.jpg", "/images/minerals/tourmaline_1921aeb7.jpg", "/images/minerals/tourmaline_f72f5b91.jpg", "/images/minerals/tourmaline_862bd27b.jpg", "/images/minerals/tourmaline_3d57df7b.jpg", "/images/minerals/tourmaline_df62dd7b.jpg"],
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
    imageUrls: ["/images/minerals/cordierite_613e5731.jpg", "/images/minerals/cordierite_1e3d3b8f.jpg", "/images/minerals/cordierite_eaff4aa2.jpg", "/images/minerals/cordierite_e230f5bc.jpg", "/images/minerals/cordierite_fb881575.jpg", "/images/minerals/cordierite_ffbc86b8.jpg", "/images/minerals/cordierite_9a9d2137.jpg", "/images/minerals/cordierite_c36cf217.jpg", "/images/minerals/cordierite_116fa756.jpg", "/images/minerals/cordierite_236f2d6c.jpg", "/images/minerals/cordierite_0053520b.jpg", "/images/minerals/cordierite_70003a05.jpg", "/images/minerals/cordierite_78e3aa18.jpg", "/images/minerals/cordierite_fcf5d84f.jpg", "/images/minerals/cordierite_e61de38c.jpg", "/images/minerals/cordierite_812267ee.jpg", "/images/minerals/cordierite_9f6a07ff.jpg", "/images/minerals/cordierite_210b4221.jpg", "/images/minerals/cordierite_8cd7018d.jpg", "/images/minerals/cordierite_a545e9e8.jpg", "/images/minerals/cordierite_2d1af795.jpg", "/images/minerals/cordierite_5c15488d.jpg", "/images/minerals/cordierite_1d9c357f.jpg", "/images/minerals/cordierite_ad848294.jpg", "/images/minerals/cordierite_259d259b.jpg", "/images/minerals/cordierite_381c036b.jpg", "/images/minerals/cordierite_f05657eb.jpg", "/images/minerals/cordierite_e801d948.jpg", "/images/minerals/cordierite_5e669302.jpg", "/images/minerals/cordierite_c241cbcd.jpg", "/images/minerals/cordierite_82610bac.jpg", "/images/minerals/cordierite_dadade7e.jpg", "/images/minerals/cordierite_8639d16e.jpg", "/images/minerals/cordierite_473dc958.jpg", "/images/minerals/cordierite_cc71355c.jpg", "/images/minerals/cordierite_30febfbd.jpg", "/images/minerals/cordierite_a9d564e5.jpg", "/images/minerals/cordierite_a3e30724.jpg", "/images/minerals/cordierite_99bb2387.jpg", "/images/minerals/cordierite_6941b4d5.jpg", "/images/minerals/cordierite_9fedba6d.jpg", "/images/minerals/cordierite_2cc68ab8.jpg", "/images/minerals/cordierite_89172534.jpg", "/images/minerals/cordierite_1be7b83c.jpg", "/images/minerals/cordierite_ebca0a51.jpg", "/images/minerals/cordierite_e12ce167.jpg", "/images/minerals/cordierite_b1c26ddc.jpg", "/images/minerals/cordierite_f7aa65ea.jpg", "/images/minerals/cordierite_ae2a4b36.jpg", "/images/minerals/cordierite_45ad9f91.jpg"],
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
    imageUrls: ["/images/minerals/muscovite_7ccb302e.jpg", "/images/minerals/muscovite_795b0928.jpg", "/images/minerals/muscovite_0799f052.jpg", "/images/minerals/muscovite_a5e0a33e.jpg", "/images/minerals/muscovite_aa9185e8.jpg", "/images/minerals/muscovite_cf4fa02d.jpg", "/images/minerals/muscovite_38a0943d.jpg", "/images/minerals/muscovite_76889c64.jpg", "/images/minerals/muscovite_e6b10c4e.jpg", "/images/minerals/muscovite_7acd4be6.jpg", "/images/minerals/muscovite_f0adcbe0.jpg", "/images/minerals/muscovite_60a8f604.jpg", "/images/minerals/muscovite_4c68284d.jpg", "/images/minerals/muscovite_481122ff.jpg", "/images/minerals/muscovite_a272b3de.jpg", "/images/minerals/muscovite_4ba91fb4.jpg", "/images/minerals/muscovite_93cff2c9.jpg", "/images/minerals/muscovite_a798cecd.jpg", "/images/minerals/muscovite_fb17c219.jpg", "/images/minerals/muscovite_0c2c0b0f.jpg", "/images/minerals/muscovite_dcac2640.jpg", "/images/minerals/muscovite_ed9f3f9b.jpg", "/images/minerals/muscovite_94bb155d.jpg", "/images/minerals/muscovite_63d07826.jpg", "/images/minerals/muscovite_34db49d9.jpg", "/images/minerals/muscovite_e978f20e.jpg", "/images/minerals/muscovite_7c7d1dab.jpg", "/images/minerals/muscovite_bfbe78ff.jpg", "/images/minerals/muscovite_097221ec.jpg", "/images/minerals/muscovite_47d14fee.jpg", "/images/minerals/muscovite_6a81fa79.jpg", "/images/minerals/muscovite_0200e144.jpg", "/images/minerals/muscovite_722ee390.jpg", "/images/minerals/muscovite_d38b44ae.jpg", "/images/minerals/muscovite_e6bd908b.jpg", "/images/minerals/muscovite_02528dba.jpg", "/images/minerals/muscovite_897e9c01.jpg", "/images/minerals/muscovite_0e660d36.jpg", "/images/minerals/muscovite_f359e34f.jpg", "/images/minerals/muscovite_d6ef0ce9.jpg", "/images/minerals/muscovite_6d0baaef.jpg", "/images/minerals/muscovite_119f93ca.jpg", "/images/minerals/muscovite_2361f0a0.jpg", "/images/minerals/muscovite_291d1bbe.jpg", "/images/minerals/muscovite_6fe4c8a6.jpg", "/images/minerals/muscovite_b1515737.jpg", "/images/minerals/muscovite_39f724d3.jpg", "/images/minerals/muscovite_2c299aa8.jpg", "/images/minerals/muscovite_bc895820.jpg", "/images/minerals/muscovite_423b4db7.jpg"],
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
    imageUrls: ["/images/minerals/biotite_7129e9bc.jpg", "/images/minerals/biotite_71d0a9c0.jpg", "/images/minerals/biotite_9f7d159b.jpg", "/images/minerals/biotite_5583cc21.jpg", "/images/minerals/biotite_00fbc52c.jpg", "/images/minerals/biotite_cc074e06.jpg", "/images/minerals/biotite_28b2765c.jpg", "/images/minerals/biotite_0ab66b86.jpg", "/images/minerals/biotite_7bb68cb3.jpg", "/images/minerals/biotite_071666bb.jpg", "/images/minerals/biotite_eb7dbd43.jpg", "/images/minerals/biotite_acefc7cb.jpg", "/images/minerals/biotite_26133b96.jpg", "/images/minerals/biotite_02660064.jpg", "/images/minerals/biotite_ce74629c.jpg", "/images/minerals/biotite_7afdbb03.jpg", "/images/minerals/biotite_edfda588.jpg", "/images/minerals/biotite_26f15e8e.jpg", "/images/minerals/biotite_138a0936.jpg", "/images/minerals/biotite_7d0beb13.jpg", "/images/minerals/biotite_13a41f0e.jpg", "/images/minerals/biotite_03c504bf.jpg", "/images/minerals/biotite_3ab9b990.jpg", "/images/minerals/biotite_cb6c673b.jpg", "/images/minerals/biotite_91d3078c.jpg", "/images/minerals/biotite_595ced6a.jpg", "/images/minerals/biotite_2c6e5160.jpg", "/images/minerals/biotite_e0433219.jpg", "/images/minerals/biotite_750280c0.jpg", "/images/minerals/biotite_134cf6d0.jpg", "/images/minerals/biotite_e6518305.jpg", "/images/minerals/biotite_19248760.jpg", "/images/minerals/biotite_b41d30a3.jpg", "/images/minerals/biotite_cd4cdec7.jpg", "/images/minerals/biotite_384faff0.jpg", "/images/minerals/biotite_132941f5.jpg", "/images/minerals/biotite_f06d665d.jpg", "/images/minerals/biotite_872c56f5.jpg", "/images/minerals/biotite_169b2a63.jpg", "/images/minerals/biotite_8823f6ca.jpg", "/images/minerals/biotite_24615623.jpg", "/images/minerals/biotite_c36465d8.jpg", "/images/minerals/biotite_2d0aecee.jpg", "/images/minerals/biotite_f6a1ca1b.jpg", "/images/minerals/biotite_8df293ad.jpg", "/images/minerals/biotite_865ec721.jpg", "/images/minerals/biotite_67e3f408.jpg", "/images/minerals/biotite_9af1cbdb.jpg", "/images/minerals/biotite_be79a26f.jpg", "/images/minerals/biotite_636f3359.jpg"],
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
    imageUrls: ["/images/minerals/serpentine_fa74f7df.jpg", "/images/minerals/serpentine_2f37e5b7.jpg", "/images/minerals/serpentine_b1071b0e.jpg", "/images/minerals/serpentine_c18a407c.jpg", "/images/minerals/serpentine_0b4f68e0.jpg", "/images/minerals/serpentine_540e88f3.jpg", "/images/minerals/serpentine_d1545639.jpg", "/images/minerals/serpentine_f6cb3d7f.jpg", "/images/minerals/serpentine_7eca8e05.jpg", "/images/minerals/serpentine_766ab8cf.jpg", "/images/minerals/serpentine_3a9b9408.jpg", "/images/minerals/serpentine_2baa1344.jpg", "/images/minerals/serpentine_ce056097.jpg", "/images/minerals/serpentine_12b2c920.jpg", "/images/minerals/serpentine_a0aed4ec.jpg", "/images/minerals/serpentine_27854e20.jpg", "/images/minerals/serpentine_d45c9c03.jpg", "/images/minerals/serpentine_93bf1c30.jpg", "/images/minerals/serpentine_75b5b6de.jpg", "/images/minerals/serpentine_9c38ca97.jpg", "/images/minerals/serpentine_e99546e3.jpg", "/images/minerals/serpentine_823ff938.jpg", "/images/minerals/serpentine_369beddd.jpg", "/images/minerals/serpentine_5d62caa7.jpg", "/images/minerals/serpentine_40e217df.jpg", "/images/minerals/serpentine_f9ab57a3.jpg", "/images/minerals/serpentine_603a3dbf.jpg", "/images/minerals/serpentine_639e5fd6.jpg", "/images/minerals/serpentine_3482189f.jpg", "/images/minerals/serpentine_76f910e9.jpg", "/images/minerals/serpentine_a734bef8.jpg", "/images/minerals/serpentine_33ba3cce.jpg", "/images/minerals/serpentine_4be96a99.jpg", "/images/minerals/serpentine_0910b05b.jpg", "/images/minerals/serpentine_34892903.jpg", "/images/minerals/serpentine_bb42100d.jpg", "/images/minerals/serpentine_3859880b.jpg", "/images/minerals/serpentine_ca79e6a7.jpg", "/images/minerals/serpentine_75c8ccaf.jpg", "/images/minerals/serpentine_0acb0725.jpg", "/images/minerals/serpentine_55194629.jpg", "/images/minerals/serpentine_7c2069d5.jpg", "/images/minerals/serpentine_0851c346.jpg", "/images/minerals/serpentine_79d3785d.jpg", "/images/minerals/serpentine_a70fad71.jpg", "/images/minerals/serpentine_cd13698f.jpg", "/images/minerals/serpentine_fbfd6c4c.jpg", "/images/minerals/serpentine_b8f9c83b.jpg", "/images/minerals/serpentine_fa1894e4.jpg", "/images/minerals/serpentine_b47770ed.jpg"],
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
    imageUrls: ["/images/minerals/talc_41847f19.jpg", "/images/minerals/talc_8ffef1d8.jpg", "/images/minerals/talc_754cfb8d.jpg", "/images/minerals/talc_307860d3.jpg", "/images/minerals/talc_a372a485.jpg", "/images/minerals/talc_a0ccb1bd.jpg", "/images/minerals/talc_6426f572.jpg", "/images/minerals/talc_710ae63c.jpg", "/images/minerals/talc_b2f9baa4.jpg", "/images/minerals/talc_caed339b.jpg", "/images/minerals/talc_6bc5505e.jpg", "/images/minerals/talc_0139c9d1.jpg", "/images/minerals/talc_933fae04.jpg", "/images/minerals/talc_bb0c36c3.jpg", "/images/minerals/talc_a7242273.jpg", "/images/minerals/talc_4e34a540.jpg", "/images/minerals/talc_b5eb4977.jpg", "/images/minerals/talc_ff353bc0.jpg", "/images/minerals/talc_e7621958.jpg", "/images/minerals/talc_2cab2ee3.jpg", "/images/minerals/talc_c5489d43.jpg", "/images/minerals/talc_8c5e216c.jpg", "/images/minerals/talc_733fa17d.jpg", "/images/minerals/talc_f8c9f8ca.jpg", "/images/minerals/talc_b0bb7902.jpg", "/images/minerals/talc_a993659e.jpg", "/images/minerals/talc_6147407d.jpg", "/images/minerals/talc_52c4b754.jpg", "/images/minerals/talc_9372935e.jpg", "/images/minerals/talc_c992a09a.jpg", "/images/minerals/talc_8e64b531.jpg", "/images/minerals/talc_bcb41dd4.jpg", "/images/minerals/talc_852da665.jpg", "/images/minerals/talc_b78c0bfc.jpg", "/images/minerals/talc_27224246.jpg", "/images/minerals/talc_4193d693.jpg", "/images/minerals/talc_796d2a43.jpg", "/images/minerals/talc_d03a14f0.jpg", "/images/minerals/talc_1198f772.jpg", "/images/minerals/talc_e4dbbaf2.jpg", "/images/minerals/talc_f9a018a7.jpg", "/images/minerals/talc_9068b5fb.jpg", "/images/minerals/talc_0ad22db9.jpg", "/images/minerals/talc_4d357a2d.jpg", "/images/minerals/talc_a65517ce.jpg", "/images/minerals/talc_58e495d4.jpg", "/images/minerals/talc_2bd12a36.jpg", "/images/minerals/talc_ef5e3515.jpg", "/images/minerals/talc_eadf9d1d.jpg", "/images/minerals/talc_be4eb8c1.jpg"],
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
    imageUrls: ["/images/minerals/margarite_88b9af5d.jpg", "/images/minerals/margarite_2b668a00.jpg", "/images/minerals/margarite_ab6bb2ac.jpg", "/images/minerals/margarite_b04ff4dd.jpg", "/images/minerals/margarite_ecd03b81.jpg", "/images/minerals/margarite_822bff2f.jpg", "/images/minerals/margarite_048c67cc.jpg", "/images/minerals/margarite_781343bf.jpg", "/images/minerals/margarite_47ea530d.jpg", "/images/minerals/margarite_2bce380c.jpg", "/images/minerals/margarite_9cf464ba.jpg", "/images/minerals/margarite_4111ec27.jpg", "/images/minerals/margarite_37e63799.jpg", "/images/minerals/margarite_e0d62cef.jpg", "/images/minerals/margarite_70ffdd05.jpg", "/images/minerals/margarite_c1c17392.jpg", "/images/minerals/margarite_4f37a56e.jpg", "/images/minerals/margarite_3525f945.jpg", "/images/minerals/margarite_66b11861.jpg", "/images/minerals/margarite_4598b6b8.jpg", "/images/minerals/margarite_471f2998.jpg", "/images/minerals/margarite_d925e780.jpg", "/images/minerals/margarite_1b930663.jpg", "/images/minerals/margarite_d96e5e05.jpg", "/images/minerals/margarite_1091e0cc.jpg", "/images/minerals/margarite_e6a49ab8.jpg", "/images/minerals/margarite_f40bbcea.jpg", "/images/minerals/margarite_6c27a3df.jpg"],
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
    imageUrls: ["/images/minerals/chlorite_39156c53.jpg", "/images/minerals/chlorite_c6d942aa.jpg", "/images/minerals/chlorite_941afd2a.jpg", "/images/minerals/chlorite_88ed5e6d.jpg", "/images/minerals/chlorite_e4b12037.jpg", "/images/minerals/chlorite_dcd89a5b.jpg", "/images/minerals/chlorite_b20fde16.jpg", "/images/minerals/chlorite_13c09d3c.jpg", "/images/minerals/chlorite_910c684c.jpg", "/images/minerals/chlorite_d3bb5eeb.jpg", "/images/minerals/chlorite_adc73397.jpg", "/images/minerals/chlorite_9aea3810.jpg", "/images/minerals/chlorite_234437aa.jpg", "/images/minerals/chlorite_59c17d4a.jpg", "/images/minerals/chlorite_b323e553.jpg", "/images/minerals/chlorite_d60f5e2c.jpg", "/images/minerals/chlorite_38e99ce2.jpg", "/images/minerals/chlorite_ed1649c6.jpg", "/images/minerals/chlorite_c5e41601.jpg", "/images/minerals/chlorite_916d3533.jpg", "/images/minerals/chlorite_b6fd836a.jpg", "/images/minerals/chlorite_ccb29636.jpg", "/images/minerals/chlorite_1de7a7ce.jpg", "/images/minerals/chlorite_6a48edc9.jpg", "/images/minerals/chlorite_e99ba48a.jpg", "/images/minerals/chlorite_16f52dfb.jpg", "/images/minerals/chlorite_a3c817c2.jpg", "/images/minerals/chlorite_040b94d9.jpg", "/images/minerals/chlorite_2bae80b6.jpg", "/images/minerals/chlorite_d3f5ee4d.jpg", "/images/minerals/chlorite_9a47862b.jpg", "/images/minerals/chlorite_14e090b5.jpg", "/images/minerals/chlorite_294b74ef.jpg", "/images/minerals/chlorite_ac16969a.jpg", "/images/minerals/chlorite_80b0dda1.jpg", "/images/minerals/chlorite_e7e95489.jpg", "/images/minerals/chlorite_c921e006.jpg", "/images/minerals/chlorite_1bb8f49d.jpg", "/images/minerals/chlorite_b134aa6e.jpg", "/images/minerals/chlorite_79ebf955.jpg", "/images/minerals/chlorite_b2e8cf9b.jpg", "/images/minerals/chlorite_2c678e24.jpg", "/images/minerals/chlorite_eb8ca83c.jpg", "/images/minerals/chlorite_1ea28f46.jpg", "/images/minerals/chlorite_766f213d.jpg", "/images/minerals/chlorite_6a1dc21a.jpg", "/images/minerals/chlorite_2b529863.jpg", "/images/minerals/chlorite_5e727a73.jpg", "/images/minerals/chlorite_a8157c89.jpg", "/images/minerals/chlorite_b1d5732b.jpg"],
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
    imageUrls: ["/images/minerals/lepidolite_cf2255ad.jpg", "/images/minerals/lepidolite_35aec07a.jpg", "/images/minerals/lepidolite_34d08ebd.jpg", "/images/minerals/lepidolite_693f9d12.jpg", "/images/minerals/lepidolite_3fefb3d1.jpg", "/images/minerals/lepidolite_e6eab552.jpg", "/images/minerals/lepidolite_b693e0ae.jpg", "/images/minerals/lepidolite_1717cbbc.jpg", "/images/minerals/lepidolite_1edf111a.jpg", "/images/minerals/lepidolite_1c06497a.jpg", "/images/minerals/lepidolite_2fe55240.jpg", "/images/minerals/lepidolite_fdbd69ee.jpg", "/images/minerals/lepidolite_77f73bdf.jpg", "/images/minerals/lepidolite_b81212c2.jpg", "/images/minerals/lepidolite_2321f46d.jpg", "/images/minerals/lepidolite_b37d3bcf.jpg", "/images/minerals/lepidolite_f1a71ff9.jpg", "/images/minerals/lepidolite_278ea193.jpg", "/images/minerals/lepidolite_9c3796ba.jpg", "/images/minerals/lepidolite_98c49b66.jpg", "/images/minerals/lepidolite_96da7fbc.jpg", "/images/minerals/lepidolite_85bc7124.jpg", "/images/minerals/lepidolite_94538c22.jpg", "/images/minerals/lepidolite_42062846.jpg", "/images/minerals/lepidolite_59dbcb03.jpg", "/images/minerals/lepidolite_c26ef842.jpg", "/images/minerals/lepidolite_24fa9ecb.jpg", "/images/minerals/lepidolite_c30f7372.jpg", "/images/minerals/lepidolite_89228f33.jpg", "/images/minerals/lepidolite_0bd4269d.jpg", "/images/minerals/lepidolite_fab824ad.jpg", "/images/minerals/lepidolite_694c15cd.jpg", "/images/minerals/lepidolite_a8f6f482.jpg", "/images/minerals/lepidolite_58c6425b.jpg", "/images/minerals/lepidolite_babf90c5.jpg", "/images/minerals/lepidolite_e515c5fc.jpg", "/images/minerals/lepidolite_d1454de3.jpg", "/images/minerals/lepidolite_b268688f.jpg", "/images/minerals/lepidolite_dbd341ab.jpg", "/images/minerals/lepidolite_f7714fdb.jpg", "/images/minerals/lepidolite_f218696b.jpg", "/images/minerals/lepidolite_733ae849.jpg", "/images/minerals/lepidolite_c99c580f.jpg", "/images/minerals/lepidolite_ff57e49b.jpg", "/images/minerals/lepidolite_218dc012.jpg", "/images/minerals/lepidolite_a1ebfed0.jpg", "/images/minerals/lepidolite_8c8a7c38.jpg", "/images/minerals/lepidolite_b1c57ca5.jpg", "/images/minerals/lepidolite_14cab3e3.jpg", "/images/minerals/lepidolite_7bbe1de4.jpg"],
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
    imageUrls: ["/images/minerals/phengite_206bb2ba.jpg", "/images/minerals/phengite_1fbd3c5a.jpg", "/images/minerals/phengite_ee62993f.jpg", "/images/minerals/phengite_5ee3a2da.jpg", "/images/minerals/phengite_05d3818b.jpg", "/images/minerals/phengite_acdc50ae.jpg", "/images/minerals/phengite_e2e1e139.jpg", "/images/minerals/phengite_a2743f17.jpg", "/images/minerals/phengite_ba7730ab.jpg", "/images/minerals/phengite_c6ec4516.jpg", "/images/minerals/phengite_168d1ba2.jpg"],
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
    imageUrls: ["https://www.mindat.org/xpic.php?fname=0621009001400569606.jpg&h=3f994a5ced1a8e6bb5273d6fd3ccbbb7"],
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
    imageUrls: ["/images/minerals/clinopyroxene_88d8e3cb.jpg", "/images/minerals/clinopyroxene_9ecfb6d2.jpg", "/images/minerals/clinopyroxene_5e310a23.jpg", "/images/minerals/clinopyroxene_ecaa256b.jpg", "/images/minerals/clinopyroxene_a7922692.jpg", "/images/minerals/clinopyroxene_f4118b5d.jpg", "/images/minerals/clinopyroxene_4be574cc.jpg", "/images/minerals/clinopyroxene_f57f14ea.jpg", "/images/minerals/clinopyroxene_e576ac1a.jpg", "/images/minerals/clinopyroxene_367fe337.jpg", "/images/minerals/clinopyroxene_9e4edcd4.jpg", "/images/minerals/clinopyroxene_14efcbf7.jpg", "/images/minerals/clinopyroxene_136533a5.jpg", "/images/minerals/clinopyroxene_fd8b4d96.jpg", "/images/minerals/clinopyroxene_c83617f7.jpg", "/images/minerals/clinopyroxene_d606b60a.jpg", "/images/minerals/clinopyroxene_5a7ee67a.jpg", "/images/minerals/clinopyroxene_4792ab8d.jpg"],
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
    imageUrls: ["/images/minerals/omphacite_14a41692.jpg", "/images/minerals/omphacite_b9143599.jpg", "/images/minerals/omphacite_86fe892a.jpg", "/images/minerals/omphacite_0cf2a52c.jpg", "/images/minerals/omphacite_03cfc2dd.jpg"],
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
    imageUrls: ["/images/minerals/wollastonite_bec163b1.jpg", "/images/minerals/wollastonite_1be4118a.jpg", "/images/minerals/wollastonite_6afa01fc.jpg", "/images/minerals/wollastonite_6ba31da3.jpg", "/images/minerals/wollastonite_8d61709d.jpg", "/images/minerals/wollastonite_1fc3dffc.jpg", "/images/minerals/wollastonite_65744b43.jpg", "/images/minerals/wollastonite_b1bf1fd5.jpg", "/images/minerals/wollastonite_63b4839f.jpg", "/images/minerals/wollastonite_b4a6f9b2.jpg", "/images/minerals/wollastonite_0ce891e1.jpg", "/images/minerals/wollastonite_5cbeba86.jpg", "/images/minerals/wollastonite_15f28379.jpg", "/images/minerals/wollastonite_5003c4c2.jpg", "/images/minerals/wollastonite_96bb0243.jpg", "/images/minerals/wollastonite_2624976c.jpg", "/images/minerals/wollastonite_ebb9f9f2.jpg", "/images/minerals/wollastonite_2e50fc2e.jpg", "/images/minerals/wollastonite_b243829f.jpg", "/images/minerals/wollastonite_cb60af64.jpg", "/images/minerals/wollastonite_deee85d9.jpg", "/images/minerals/wollastonite_1c6b9c39.jpg", "/images/minerals/wollastonite_6f581cc3.jpg", "/images/minerals/wollastonite_eab970de.jpg", "/images/minerals/wollastonite_f5452294.jpg", "/images/minerals/wollastonite_74abc08b.jpg", "/images/minerals/wollastonite_3c4d9126.jpg", "/images/minerals/wollastonite_e5425f49.jpg", "/images/minerals/wollastonite_83132f89.jpg", "/images/minerals/wollastonite_74f9bac0.jpg", "/images/minerals/wollastonite_6799bd5d.jpg", "/images/minerals/wollastonite_907b09ef.jpg", "/images/minerals/wollastonite_48b2ab85.jpg", "/images/minerals/wollastonite_08a1d110.jpg", "/images/minerals/wollastonite_b99b33af.jpg", "/images/minerals/wollastonite_4495f840.jpg", "/images/minerals/wollastonite_b8c429a1.jpg", "/images/minerals/wollastonite_6f4f04de.jpg", "/images/minerals/wollastonite_96a176f9.jpg", "/images/minerals/wollastonite_67940bad.jpg", "/images/minerals/wollastonite_58201db3.jpg", "/images/minerals/wollastonite_a8db433e.jpg", "/images/minerals/wollastonite_7fa9795c.jpg", "/images/minerals/wollastonite_2e0c1742.jpg", "/images/minerals/wollastonite_d42adbe9.jpg", "/images/minerals/wollastonite_afa63a71.jpg", "/images/minerals/wollastonite_b33b0245.jpg", "/images/minerals/wollastonite_9fea8a64.jpg", "/images/minerals/wollastonite_0d9b7b88.jpg", "/images/minerals/wollastonite_e9b856e0.jpg"],
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
    imageUrls: ["/images/minerals/actinolite_2cd49e1b.jpg", "/images/minerals/actinolite_13457f38.jpg", "/images/minerals/actinolite_2ddf7a3f.jpg", "/images/minerals/actinolite_3a7a032a.jpg", "/images/minerals/actinolite_91b3b536.jpg", "/images/minerals/actinolite_facc87e4.jpg", "/images/minerals/actinolite_6560dc38.jpg", "/images/minerals/actinolite_56ccbd8a.jpg", "/images/minerals/actinolite_9df7f23c.jpg", "/images/minerals/actinolite_a9c51f62.jpg", "/images/minerals/actinolite_f613d39b.jpg", "/images/minerals/actinolite_0ec78f08.jpg", "/images/minerals/actinolite_41e0bd88.jpg", "/images/minerals/actinolite_8db3428f.jpg", "/images/minerals/actinolite_5d9b36ec.jpg", "/images/minerals/actinolite_20fd0c96.jpg", "/images/minerals/actinolite_0d6241bb.jpg", "/images/minerals/actinolite_8bca53ce.jpg", "/images/minerals/actinolite_983705d2.jpg", "/images/minerals/actinolite_4f1c2142.jpg", "/images/minerals/actinolite_b6db1596.jpg", "/images/minerals/actinolite_d4c08298.jpg", "/images/minerals/actinolite_30a0afbb.jpg", "/images/minerals/actinolite_bbd65f9e.jpg", "/images/minerals/actinolite_2c9e1f87.jpg", "/images/minerals/actinolite_64c29fe8.jpg", "/images/minerals/actinolite_27ab49f1.jpg", "/images/minerals/actinolite_a4ef392e.jpg", "/images/minerals/actinolite_10106376.jpg", "/images/minerals/actinolite_1feffa82.jpg", "/images/minerals/actinolite_58ee9829.jpg", "/images/minerals/actinolite_5c03bb5c.jpg", "/images/minerals/actinolite_a641de2b.jpg", "/images/minerals/actinolite_6d91c4a5.jpg", "/images/minerals/actinolite_4ca2bbc5.jpg", "/images/minerals/actinolite_13f625a1.jpg", "/images/minerals/actinolite_12ffb589.jpg", "/images/minerals/actinolite_01483595.jpg", "/images/minerals/actinolite_f0731f91.jpg", "/images/minerals/actinolite_382d8e27.jpg", "/images/minerals/actinolite_90e21fd8.jpg", "/images/minerals/actinolite_45c8bbf5.jpg", "/images/minerals/actinolite_72f46752.jpg", "/images/minerals/actinolite_d02d0b89.jpg", "/images/minerals/actinolite_2b657f61.jpg", "/images/minerals/actinolite_40f3a384.jpg", "/images/minerals/actinolite_39f7d671.jpg", "/images/minerals/actinolite_9509b326.jpg", "/images/minerals/actinolite_34e2a4be.jpg", "/images/minerals/actinolite_9f82828e.jpg"],
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
    imageUrls: ["/images/minerals/glaucophane_e9aa20f1.jpg", "/images/minerals/glaucophane_446335f4.jpg", "/images/minerals/glaucophane_b4ca4c70.jpg", "/images/minerals/glaucophane_6728f991.jpg", "/images/minerals/glaucophane_f9ee56f6.jpg", "/images/minerals/glaucophane_2b109dda.jpg", "/images/minerals/glaucophane_62bb9c7d.jpg", "/images/minerals/glaucophane_6df5a563.jpg", "/images/minerals/glaucophane_69218469.jpg", "/images/minerals/glaucophane_c5577f46.jpg", "/images/minerals/glaucophane_6808b6d1.jpg", "/images/minerals/glaucophane_ed5d86aa.jpg", "/images/minerals/glaucophane_3f5c6e3d.jpg", "/images/minerals/glaucophane_592be7dd.jpg", "/images/minerals/glaucophane_b4dc7373.jpg", "/images/minerals/glaucophane_2777fe71.jpg", "/images/minerals/glaucophane_77d90f1f.jpg", "/images/minerals/glaucophane_4f680b41.jpg", "/images/minerals/glaucophane_29f040e1.jpg", "/images/minerals/glaucophane_9cff5c92.jpg", "/images/minerals/glaucophane_32ba375f.jpg", "/images/minerals/glaucophane_78c14890.jpg", "/images/minerals/glaucophane_790c0fe9.jpg", "/images/minerals/glaucophane_b0cebab2.jpg", "/images/minerals/glaucophane_9032b36d.jpg", "/images/minerals/glaucophane_701fa32e.jpg", "/images/minerals/glaucophane_ad370019.jpg", "/images/minerals/glaucophane_92bab607.jpg", "/images/minerals/glaucophane_d8e1506b.jpg", "/images/minerals/glaucophane_09dad2f7.jpg", "/images/minerals/glaucophane_25cb4a09.jpg"],
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
    imageUrls: ["/images/minerals/hornblende_1c1f0fcb.jpg", "/images/minerals/hornblende_f16faf4f.jpg", "/images/minerals/hornblende_d83c6584.jpg", "/images/minerals/hornblende_efaf132d.jpg", "/images/minerals/hornblende_9e5077b0.jpg", "/images/minerals/hornblende_4c36e92e.jpg", "/images/minerals/hornblende_de221815.jpg", "/images/minerals/hornblende_e161ac3a.jpg", "/images/minerals/hornblende_675064e0.jpg", "/images/minerals/hornblende_dc54e0b8.jpg", "/images/minerals/hornblende_5f62b16a.jpg", "/images/minerals/hornblende_4790300c.jpg", "/images/minerals/hornblende_75106501.jpg", "/images/minerals/hornblende_00706d54.jpg", "/images/minerals/hornblende_c586a4be.jpg", "/images/minerals/hornblende_66f6db5f.jpg", "/images/minerals/hornblende_cdc7e4fb.jpg", "/images/minerals/hornblende_15fe77a4.jpg", "/images/minerals/hornblende_42e6d368.jpg", "/images/minerals/hornblende_e877b63d.jpg", "/images/minerals/hornblende_c64095c4.jpg", "/images/minerals/hornblende_9e162fd3.jpg", "/images/minerals/hornblende_633f9d4c.jpg", "/images/minerals/hornblende_90e7914c.jpg", "/images/minerals/hornblende_895fe67d.jpg", "/images/minerals/hornblende_0ef9b23c.jpg", "/images/minerals/hornblende_99df39c1.jpg", "/images/minerals/hornblende_96863775.jpg", "/images/minerals/hornblende_1e0dc74d.jpg", "/images/minerals/hornblende_73a4d015.jpg", "/images/minerals/hornblende_36aff79e.jpg", "/images/minerals/hornblende_67732712.jpg", "/images/minerals/hornblende_acb23753.jpg", "/images/minerals/hornblende_8d47594b.jpg", "/images/minerals/hornblende_2bcfb345.jpg", "/images/minerals/hornblende_9978d4c6.jpg", "/images/minerals/hornblende_a8457f40.jpg", "/images/minerals/hornblende_70e00e54.jpg", "/images/minerals/hornblende_49c31c98.jpg", "/images/minerals/hornblende_7346794c.jpg", "/images/minerals/hornblende_92f61d3b.jpg", "/images/minerals/hornblende_0c745364.jpg", "/images/minerals/hornblende_a0f44b56.jpg", "/images/minerals/hornblende_20a5321e.jpg", "/images/minerals/hornblende_dffa9561.jpg", "/images/minerals/hornblende_b49b0888.jpg", "/images/minerals/hornblende_e68fe586.jpg", "/images/minerals/hornblende_612ae922.jpg", "/images/minerals/hornblende_3c2b8ba1.jpg", "/images/minerals/hornblende_aa0c5935.jpg"],
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
    imageUrls: ["/images/minerals/tremolite_adc2842b.jpg", "/images/minerals/tremolite_3a5b68e0.jpg", "/images/minerals/tremolite_4a8517db.jpg", "/images/minerals/tremolite_d0c883ac.jpg", "/images/minerals/tremolite_e804174b.jpg", "/images/minerals/tremolite_8b53383e.jpg", "/images/minerals/tremolite_2ee13f50.jpg", "/images/minerals/tremolite_a94e85f6.jpg", "/images/minerals/tremolite_1f48972a.jpg", "/images/minerals/tremolite_760f5cc2.jpg", "/images/minerals/tremolite_25c660d3.jpg", "/images/minerals/tremolite_118b0659.jpg", "/images/minerals/tremolite_6dbfb7d3.jpg", "/images/minerals/tremolite_e2492f12.jpg", "/images/minerals/tremolite_5262afa1.jpg", "/images/minerals/tremolite_627a0814.jpg", "/images/minerals/tremolite_8c788c81.jpg", "/images/minerals/tremolite_4839296a.jpg", "/images/minerals/tremolite_6f5c1da6.jpg", "/images/minerals/tremolite_6a98c043.jpg", "/images/minerals/tremolite_ead7b5f3.jpg", "/images/minerals/tremolite_32d8a004.jpg", "/images/minerals/tremolite_f20e7417.jpg", "/images/minerals/tremolite_d5365c6c.jpg", "/images/minerals/tremolite_ecb265ee.jpg", "/images/minerals/tremolite_3a0970fb.jpg", "/images/minerals/tremolite_dbd4d673.jpg", "/images/minerals/tremolite_367e9d1a.jpg", "/images/minerals/tremolite_45689c6c.jpg", "/images/minerals/tremolite_40601954.jpg", "/images/minerals/tremolite_444639af.jpg", "/images/minerals/tremolite_837c474a.jpg", "/images/minerals/tremolite_5a531474.jpg", "/images/minerals/tremolite_1a6ed08c.jpg", "/images/minerals/tremolite_823022b5.jpg", "/images/minerals/tremolite_5b405668.jpg", "/images/minerals/tremolite_a848a555.jpg", "/images/minerals/tremolite_41af44df.jpg", "/images/minerals/tremolite_f3295665.jpg", "/images/minerals/tremolite_f12c675b.jpg", "/images/minerals/tremolite_61743368.jpg", "/images/minerals/tremolite_08b21378.jpg", "/images/minerals/tremolite_b8008878.jpg", "/images/minerals/tremolite_15865e2f.jpg", "/images/minerals/tremolite_1e8a49c9.jpg", "/images/minerals/tremolite_1d6e383b.jpg", "/images/minerals/tremolite_96ab61df.jpg", "/images/minerals/tremolite_2877bf01.jpg", "/images/minerals/tremolite_c2fb2928.jpg", "/images/minerals/tremolite_32db10b6.jpg"],
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
    imageUrls: ["/images/minerals/anthophyllite_2bcd4007.jpg", "/images/minerals/anthophyllite_476dfaba.jpg", "/images/minerals/anthophyllite_de9eabc6.jpg", "/images/minerals/anthophyllite_834efc65.jpg", "/images/minerals/anthophyllite_cab85796.jpg", "/images/minerals/anthophyllite_6e17230b.jpg", "/images/minerals/anthophyllite_eca81e57.jpg", "/images/minerals/anthophyllite_68f995e2.jpg", "/images/minerals/anthophyllite_74fd83ee.jpg", "/images/minerals/anthophyllite_2576ce50.jpg", "/images/minerals/anthophyllite_8f40c703.jpg", "/images/minerals/anthophyllite_4339c317.jpg", "/images/minerals/anthophyllite_a48b8a48.jpg", "/images/minerals/anthophyllite_9c394169.jpg", "/images/minerals/anthophyllite_7540fb78.jpg", "/images/minerals/anthophyllite_2db88d9e.jpg", "/images/minerals/anthophyllite_404a65a8.jpg", "/images/minerals/anthophyllite_7575a771.jpg", "/images/minerals/anthophyllite_383f2955.jpg", "/images/minerals/anthophyllite_3f70a51c.jpg", "/images/minerals/anthophyllite_bec54e23.jpg", "/images/minerals/anthophyllite_baddceff.jpg", "/images/minerals/anthophyllite_697d912e.jpg", "/images/minerals/anthophyllite_f9fe8dd4.jpg", "/images/minerals/anthophyllite_0dfc1108.jpg", "/images/minerals/anthophyllite_0769826f.jpg", "/images/minerals/anthophyllite_2269f749.jpg", "/images/minerals/anthophyllite_70e451c6.jpg", "/images/minerals/anthophyllite_d77085ea.jpg", "/images/minerals/anthophyllite_c94ae873.jpg"],
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
    imageUrls: ["/images/minerals/olivine_62c4307c.jpg", "/images/minerals/olivine_1c7597fb.jpg", "/images/minerals/olivine_62b3a347.jpg", "/images/minerals/olivine_66410011.jpg", "/images/minerals/olivine_06fc4e62.jpg", "/images/minerals/olivine_6853bd82.jpg", "/images/minerals/olivine_867d2437.jpg", "/images/minerals/olivine_abeca5fa.jpg", "/images/minerals/olivine_9401862e.jpg", "/images/minerals/olivine_1dcb4d57.jpg", "/images/minerals/olivine_a6f645b3.jpg", "/images/minerals/olivine_84aa18a2.jpg", "/images/minerals/olivine_d844ccb6.jpg", "/images/minerals/olivine_8a465398.jpg", "/images/minerals/olivine_d99086ab.jpg", "/images/minerals/olivine_1e2a12f6.jpg", "/images/minerals/olivine_71e6211e.jpg", "/images/minerals/olivine_dfe04717.jpg", "/images/minerals/olivine_01f1feb3.jpg", "/images/minerals/olivine_884a964d.jpg", "/images/minerals/olivine_51b47a4e.jpg", "/images/minerals/olivine_08ea2a13.jpg", "/images/minerals/olivine_71a2c04f.jpg", "/images/minerals/olivine_6a62d9a0.jpg", "/images/minerals/olivine_7df7992a.jpg", "/images/minerals/olivine_06938335.jpg", "/images/minerals/olivine_319b613c.jpg", "/images/minerals/olivine_98f0516b.jpg", "/images/minerals/olivine_33ef4c4b.jpg", "/images/minerals/olivine_b050d7d7.jpg", "/images/minerals/olivine_1d4b4fa7.jpg", "/images/minerals/olivine_eef24c53.jpg", "/images/minerals/olivine_cebf140c.jpg", "/images/minerals/olivine_a8292dfb.jpg", "/images/minerals/olivine_ad506035.jpg", "/images/minerals/olivine_14d09866.jpg", "/images/minerals/olivine_51006246.jpg", "/images/minerals/olivine_3a8c240e.jpg", "/images/minerals/olivine_ae472279.jpg", "/images/minerals/olivine_a5e3f020.jpg", "/images/minerals/olivine_29ca45f9.jpg", "/images/minerals/olivine_4f487947.jpg", "/images/minerals/olivine_37049139.jpg", "/images/minerals/olivine_d9472210.jpg", "/images/minerals/olivine_3f943bc6.jpg", "/images/minerals/olivine_41fda50b.jpg", "/images/minerals/olivine_2d74bb3a.jpg", "/images/minerals/olivine_05571ff0.jpg", "/images/minerals/olivine_0fd69d5c.jpg", "/images/minerals/olivine_99563bad.jpg"],
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
    imageUrls: ["/images/minerals/garnet_f93f9e53.jpg", "/images/minerals/garnet_28ca23ad.jpg", "/images/minerals/garnet_82dbae87.jpg", "/images/minerals/garnet_722797d2.jpg", "/images/minerals/garnet_a17c7c58.jpg", "/images/minerals/garnet_d28302cc.jpg", "/images/minerals/garnet_60c77359.jpg", "/images/minerals/garnet_228a46a3.jpg", "/images/minerals/garnet_6fab9135.jpg", "/images/minerals/garnet_22b181a6.jpg", "/images/minerals/garnet_285f747f.jpg", "/images/minerals/garnet_b918424a.jpg", "/images/minerals/garnet_f708cb4b.jpg", "/images/minerals/garnet_0f0a4caf.jpg", "/images/minerals/garnet_63cac747.jpg", "/images/minerals/garnet_5cd307d5.jpg", "/images/minerals/garnet_37f53846.jpg", "/images/minerals/garnet_2529a745.jpg", "/images/minerals/garnet_dcc3dcd6.jpg", "/images/minerals/garnet_c3dfa2a4.jpg", "/images/minerals/garnet_99d4d613.jpg", "/images/minerals/garnet_36946c55.jpg", "/images/minerals/garnet_0c55328d.jpg", "/images/minerals/garnet_538461fa.jpg", "/images/minerals/garnet_00e0ec3d.jpg", "/images/minerals/garnet_36d691f9.jpg", "/images/minerals/garnet_fca3b0bb.jpg", "/images/minerals/garnet_eff8033b.jpg", "/images/minerals/garnet_ee0f8fb6.jpg", "/images/minerals/garnet_73d46525.jpg", "/images/minerals/garnet_d6b296b2.jpg", "/images/minerals/garnet_5a2f4873.jpg", "/images/minerals/garnet_3f8ea732.jpg", "/images/minerals/garnet_189103f0.jpg", "/images/minerals/garnet_17b57ec2.jpg", "/images/minerals/garnet_e0ba3931.jpg", "/images/minerals/garnet_ad17a787.jpg", "/images/minerals/garnet_0b36e876.jpg", "/images/minerals/garnet_181f528d.jpg", "/images/minerals/garnet_f57d8edd.jpg", "/images/minerals/garnet_571fe97c.jpg", "/images/minerals/garnet_3842ee52.jpg", "/images/minerals/garnet_2d8b2422.jpg", "/images/minerals/garnet_3a55526c.jpg", "/images/minerals/garnet_50f3b57f.jpg", "/images/minerals/garnet_ba78fa49.jpg", "/images/minerals/garnet_8435e93e.jpg", "/images/minerals/garnet_d4082b7f.jpg", "/images/minerals/garnet_4a72c8c3.jpg", "/images/minerals/garnet_70d60b43.jpg"],
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
    imageUrls: ["/images/minerals/kyanite_de2ff7a4.jpg", "/images/minerals/kyanite_19c05b53.jpg", "/images/minerals/kyanite_ae6ab0c6.jpg", "/images/minerals/kyanite_0e3998f3.jpg", "/images/minerals/kyanite_bdf5ee86.jpg", "/images/minerals/kyanite_72e44df2.jpg", "/images/minerals/kyanite_2bf3b197.jpg", "/images/minerals/kyanite_d9320d58.jpg", "/images/minerals/kyanite_a2b53896.jpg", "/images/minerals/kyanite_8cfe8ae8.jpg", "/images/minerals/kyanite_f30f39ac.jpg", "/images/minerals/kyanite_89f80cb1.jpg", "/images/minerals/kyanite_63c1d137.jpg", "/images/minerals/kyanite_e08aa6ef.jpg", "/images/minerals/kyanite_d175b2c2.jpg", "/images/minerals/kyanite_f2d87f1a.jpg", "/images/minerals/kyanite_e553f092.jpg", "/images/minerals/kyanite_cfb5d79a.jpg", "/images/minerals/kyanite_5bbfccbf.jpg", "/images/minerals/kyanite_c894d479.jpg", "/images/minerals/kyanite_d10ebfba.jpg", "/images/minerals/kyanite_b87a9ac1.jpg", "/images/minerals/kyanite_e792981e.jpg", "/images/minerals/kyanite_baedee2b.jpg", "/images/minerals/kyanite_02025652.jpg", "/images/minerals/kyanite_34b50d1b.jpg", "/images/minerals/kyanite_9b59df8d.jpg", "/images/minerals/kyanite_7a0e8c02.jpg", "/images/minerals/kyanite_5dd43f5f.jpg", "/images/minerals/kyanite_dd8527fc.jpg", "/images/minerals/kyanite_74becc70.jpg", "/images/minerals/kyanite_e8e9badc.jpg", "/images/minerals/kyanite_1a80ff00.jpg", "/images/minerals/kyanite_af32add1.jpg", "/images/minerals/kyanite_893baf6f.jpg", "/images/minerals/kyanite_2927b316.jpg", "/images/minerals/kyanite_40d4cd96.jpg", "/images/minerals/kyanite_7a7b76e9.jpg", "/images/minerals/kyanite_ab37ae8a.jpg", "/images/minerals/kyanite_c4a138c8.jpg", "/images/minerals/kyanite_2e38737f.jpg", "/images/minerals/kyanite_7ebfbac5.jpg", "/images/minerals/kyanite_d7f64f43.jpg", "/images/minerals/kyanite_ebda8d5d.jpg", "/images/minerals/kyanite_3a9cb18b.jpg", "/images/minerals/kyanite_d2898c52.jpg", "/images/minerals/kyanite_19de19fd.jpg", "/images/minerals/kyanite_a0a1178b.jpg", "/images/minerals/kyanite_80353e6d.jpg", "/images/minerals/kyanite_fd729ecc.jpg"],
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
    imageUrls: ["/images/minerals/sillimanite_3e30717c.jpg", "/images/minerals/sillimanite_aa83302b.jpg", "/images/minerals/sillimanite_c5623930.jpg", "/images/minerals/sillimanite_6fef7cc0.jpg", "/images/minerals/sillimanite_1ec0ddcc.jpg", "/images/minerals/sillimanite_dd42cc0d.jpg", "/images/minerals/sillimanite_c3b82808.jpg", "/images/minerals/sillimanite_57990656.jpg", "/images/minerals/sillimanite_8afc9899.jpg", "/images/minerals/sillimanite_c93fd7da.jpg", "/images/minerals/sillimanite_3613de65.jpg", "/images/minerals/sillimanite_3928808c.jpg", "/images/minerals/sillimanite_b20e08db.jpg", "/images/minerals/sillimanite_d6a9d56d.jpg", "/images/minerals/sillimanite_7a6322ec.jpg", "/images/minerals/sillimanite_4ae57bd2.jpg", "/images/minerals/sillimanite_7709c8b9.jpg", "/images/minerals/sillimanite_f6f9f087.jpg", "/images/minerals/sillimanite_ea0af259.jpg", "/images/minerals/sillimanite_c7e91302.jpg", "/images/minerals/sillimanite_34daaed4.jpg", "/images/minerals/sillimanite_c88e27bf.jpg", "/images/minerals/sillimanite_776ae279.jpg", "/images/minerals/sillimanite_a19f77f6.jpg", "/images/minerals/sillimanite_f260d89c.jpg", "/images/minerals/sillimanite_9a4edd84.jpg", "/images/minerals/sillimanite_0d6b5ade.jpg", "/images/minerals/sillimanite_f614112d.jpg", "/images/minerals/sillimanite_1ed60145.jpg", "/images/minerals/sillimanite_1a9f19d2.jpg", "/images/minerals/sillimanite_2e368c44.jpg", "/images/minerals/sillimanite_e5e6110b.jpg", "/images/minerals/sillimanite_83528cd1.jpg", "/images/minerals/sillimanite_438133f7.jpg", "/images/minerals/sillimanite_c694692e.jpg", "/images/minerals/sillimanite_969319f5.jpg", "/images/minerals/sillimanite_b46221d9.jpg", "/images/minerals/sillimanite_c8f0ca6b.jpg", "/images/minerals/sillimanite_b2a2287a.jpg", "/images/minerals/sillimanite_dd738e34.jpg", "/images/minerals/sillimanite_1ff7c1ac.jpg", "/images/minerals/sillimanite_ea8bc0ab.jpg", "/images/minerals/sillimanite_ff53b72a.jpg", "/images/minerals/sillimanite_e9ca577d.jpg", "/images/minerals/sillimanite_db3121a1.jpg", "/images/minerals/sillimanite_b85bb722.jpg", "/images/minerals/sillimanite_561eb8ba.jpg", "/images/minerals/sillimanite_8f266e69.jpg", "/images/minerals/sillimanite_93139b89.jpg", "/images/minerals/sillimanite_b7cf35d2.jpg"],
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
    imageUrls: ["/images/minerals/andalusite_12a7ce3f.jpg", "/images/minerals/andalusite_266d9d67.jpg", "/images/minerals/andalusite_283c4c7d.jpg", "/images/minerals/andalusite_f2a51109.jpg", "/images/minerals/andalusite_b05ce5d6.jpg", "/images/minerals/andalusite_7073125c.jpg", "/images/minerals/andalusite_69b71114.jpg", "/images/minerals/andalusite_092d42d5.jpg", "/images/minerals/andalusite_296bc779.jpg", "/images/minerals/andalusite_8b754f65.jpg", "/images/minerals/andalusite_3a4660b2.jpg", "/images/minerals/andalusite_2e410fe5.jpg", "/images/minerals/andalusite_34ddf616.jpg", "/images/minerals/andalusite_d08cec71.jpg", "/images/minerals/andalusite_5fcf6b28.jpg", "/images/minerals/andalusite_e4d77c78.jpg", "/images/minerals/andalusite_9c511b3c.jpg", "/images/minerals/andalusite_c5cb9f88.jpg", "/images/minerals/andalusite_4132c6da.jpg", "/images/minerals/andalusite_08727ee5.jpg", "/images/minerals/andalusite_700ee2eb.jpg", "/images/minerals/andalusite_565015b0.jpg", "/images/minerals/andalusite_7c97e33f.jpg", "/images/minerals/andalusite_51617e05.jpg", "/images/minerals/andalusite_25be06c8.jpg", "/images/minerals/andalusite_5e0a9bb6.jpg", "/images/minerals/andalusite_0945db58.jpg", "/images/minerals/andalusite_6c4eaeef.jpg", "/images/minerals/andalusite_144f2091.jpg", "/images/minerals/andalusite_14451b21.jpg", "/images/minerals/andalusite_ae3383af.jpg", "/images/minerals/andalusite_6b2c72ee.jpg", "/images/minerals/andalusite_e505de51.jpg", "/images/minerals/andalusite_4e4db19c.jpg", "/images/minerals/andalusite_ade17d89.jpg", "/images/minerals/andalusite_fe527550.jpg", "/images/minerals/andalusite_c642ec31.jpg", "/images/minerals/andalusite_3ff6cb0d.jpg", "/images/minerals/andalusite_c626b768.jpg", "/images/minerals/andalusite_3223b973.jpg", "/images/minerals/andalusite_b0a88f46.jpg", "/images/minerals/andalusite_68743040.jpg", "/images/minerals/andalusite_9f43187a.jpg", "/images/minerals/andalusite_ae333210.jpg", "/images/minerals/andalusite_79c94473.jpg", "/images/minerals/andalusite_1b9a0aa3.jpg", "/images/minerals/andalusite_99ff819f.jpg", "/images/minerals/andalusite_fc1f8aa1.jpg", "/images/minerals/andalusite_988e8c2d.jpg", "/images/minerals/andalusite_cb0a7c1d.jpg"],
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
    imageUrls: ["/images/minerals/staurolite_d3caed91.jpg", "/images/minerals/staurolite_564fb464.jpg", "/images/minerals/staurolite_9e3b6adc.jpg", "/images/minerals/staurolite_455d21c0.jpg", "/images/minerals/staurolite_be0993da.jpg", "/images/minerals/staurolite_ba92f6de.jpg", "/images/minerals/staurolite_56c2e9ee.jpg", "/images/minerals/staurolite_59d925de.jpg", "/images/minerals/staurolite_53f6fb1f.jpg", "/images/minerals/staurolite_d6c0bef7.jpg", "/images/minerals/staurolite_568387bd.jpg", "/images/minerals/staurolite_6d5a1288.jpg", "/images/minerals/staurolite_1c6c075b.jpg", "/images/minerals/staurolite_8ce38c86.jpg", "/images/minerals/staurolite_6aef24a8.jpg", "/images/minerals/staurolite_987f96fc.jpg", "/images/minerals/staurolite_236323f2.jpg", "/images/minerals/staurolite_a2bd571d.jpg", "/images/minerals/staurolite_2c96a489.jpg", "/images/minerals/staurolite_765fbd33.jpg", "/images/minerals/staurolite_51369fce.jpg", "/images/minerals/staurolite_3f699260.jpg", "/images/minerals/staurolite_0df52147.jpg", "/images/minerals/staurolite_6ac550f7.jpg", "/images/minerals/staurolite_aa03abea.jpg", "/images/minerals/staurolite_34f30dda.jpg", "/images/minerals/staurolite_31d40bcd.jpg", "/images/minerals/staurolite_3ce6e918.jpg", "/images/minerals/staurolite_8935ef2e.jpg", "/images/minerals/staurolite_f0068347.jpg", "/images/minerals/staurolite_b2d61ace.jpg", "/images/minerals/staurolite_cb1980a5.jpg", "/images/minerals/staurolite_84800c05.jpg", "/images/minerals/staurolite_ebd87d1c.jpg", "/images/minerals/staurolite_1a88acbe.jpg", "/images/minerals/staurolite_981c14cc.jpg", "/images/minerals/staurolite_78a16d35.jpg", "/images/minerals/staurolite_ff4e5f86.jpg", "/images/minerals/staurolite_031d8588.jpg", "/images/minerals/staurolite_5ed5b168.jpg", "/images/minerals/staurolite_60c79db2.jpg", "/images/minerals/staurolite_4ef4cb10.jpg", "/images/minerals/staurolite_d5bf2e8c.jpg", "/images/minerals/staurolite_c60d3868.jpg", "/images/minerals/staurolite_940ad0e0.jpg", "/images/minerals/staurolite_6078a1e8.jpg", "/images/minerals/staurolite_298c2daa.jpg", "/images/minerals/staurolite_d0570fb9.jpg", "/images/minerals/staurolite_a3f4ed8d.jpg", "/images/minerals/staurolite_0307fd79.jpg"],
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
    imageUrls: ["/images/minerals/zircon_60290adb.jpg", "/images/minerals/zircon_f7c0e7f4.jpg", "/images/minerals/zircon_e5a19b97.jpg", "/images/minerals/zircon_a294d6ab.jpg", "/images/minerals/zircon_c649b1c3.jpg", "/images/minerals/zircon_62ddc0c4.jpg", "/images/minerals/zircon_b970e739.jpg", "/images/minerals/zircon_40ef371d.jpg", "/images/minerals/zircon_618c8009.jpg", "/images/minerals/zircon_d8652adf.jpg", "/images/minerals/zircon_57ebcc4a.jpg", "/images/minerals/zircon_6134ead3.jpg", "/images/minerals/zircon_1773f4ff.jpg", "/images/minerals/zircon_82ad7b93.jpg", "/images/minerals/zircon_94a1e744.jpg", "/images/minerals/zircon_9b6379c0.jpg", "/images/minerals/zircon_942232ae.jpg", "/images/minerals/zircon_5a82454f.jpg", "/images/minerals/zircon_4a5b46f3.jpg", "/images/minerals/zircon_eaec5250.jpg", "/images/minerals/zircon_ec5bc4cb.jpg", "/images/minerals/zircon_631a246a.jpg", "/images/minerals/zircon_39c1f8e0.jpg", "/images/minerals/zircon_518cc861.jpg", "/images/minerals/zircon_6664ed29.jpg", "/images/minerals/zircon_be17bc31.jpg", "/images/minerals/zircon_3c78d167.jpg", "/images/minerals/zircon_51f71162.jpg", "/images/minerals/zircon_0f6c42ba.jpg", "/images/minerals/zircon_68ea2277.jpg", "/images/minerals/zircon_e8940d7c.jpg", "/images/minerals/zircon_72ca3630.jpg", "/images/minerals/zircon_fa1ed8ca.jpg", "/images/minerals/zircon_1cf805b1.jpg", "/images/minerals/zircon_72adb17b.jpg", "/images/minerals/zircon_a0c6b55a.jpg", "/images/minerals/zircon_4b04ab70.jpg", "/images/minerals/zircon_1e80dde7.jpg", "/images/minerals/zircon_ecf43b5b.jpg", "/images/minerals/zircon_9ef1bb48.jpg", "/images/minerals/zircon_37791471.jpg", "/images/minerals/zircon_bbd4b68e.jpg", "/images/minerals/zircon_ffe5841f.jpg", "/images/minerals/zircon_1c9be7ec.jpg", "/images/minerals/zircon_0c7776e4.jpg", "/images/minerals/zircon_7972994d.jpg", "/images/minerals/zircon_0bf93cdd.jpg", "/images/minerals/zircon_830180d0.jpg", "/images/minerals/zircon_eb829023.jpg", "/images/minerals/zircon_de3a5a2a.jpg"],
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
    imageUrls: ["/images/minerals/titanite_d3077b94.jpg", "/images/minerals/titanite_8fca11a6.jpg", "/images/minerals/titanite_7012cf92.jpg", "/images/minerals/titanite_6f2ee98e.jpg", "/images/minerals/titanite_6dac44b5.jpg", "/images/minerals/titanite_9f9a09f7.jpg", "/images/minerals/titanite_9a72fa33.jpg", "/images/minerals/titanite_b0edaa51.jpg", "/images/minerals/titanite_9ebce03a.jpg", "/images/minerals/titanite_658f090d.jpg", "/images/minerals/titanite_dc956aa1.jpg", "/images/minerals/titanite_5138984c.jpg", "/images/minerals/titanite_433b51c9.jpg", "/images/minerals/titanite_19c86cce.jpg", "/images/minerals/titanite_a84233ed.jpg", "/images/minerals/titanite_20374427.jpg", "/images/minerals/titanite_84d90036.jpg", "/images/minerals/titanite_d8774582.jpg", "/images/minerals/titanite_0a41e639.jpg", "/images/minerals/titanite_f80fccb4.jpg", "/images/minerals/titanite_0e174217.jpg", "/images/minerals/titanite_8ff12e88.jpg", "/images/minerals/titanite_d38fb980.jpg", "/images/minerals/titanite_ba958bb2.jpg", "/images/minerals/titanite_4eb07e4c.jpg", "/images/minerals/titanite_f7e343dd.jpg", "/images/minerals/titanite_41c6e660.jpg", "/images/minerals/titanite_fcb27007.jpg", "/images/minerals/titanite_423c7932.jpg", "/images/minerals/titanite_1e81b8e0.jpg", "/images/minerals/titanite_13f7faa8.jpg", "/images/minerals/titanite_57c0e3a0.jpg", "/images/minerals/titanite_da220c72.jpg", "/images/minerals/titanite_fc8cccd9.jpg", "/images/minerals/titanite_7c0a9bf9.jpg", "/images/minerals/titanite_090e0fae.jpg", "/images/minerals/titanite_4c36bf59.jpg", "/images/minerals/titanite_9a63f07b.jpg", "/images/minerals/titanite_aecfabd3.jpg", "/images/minerals/titanite_45b7e80c.jpg", "/images/minerals/titanite_22f2677c.jpg", "/images/minerals/titanite_19f93fc3.jpg", "/images/minerals/titanite_6631bbba.jpg", "/images/minerals/titanite_364fd994.jpg", "/images/minerals/titanite_efe49ba4.jpg", "/images/minerals/titanite_7f1f2e0c.jpg", "/images/minerals/titanite_61e4155f.jpg", "/images/minerals/titanite_601acd38.jpg", "/images/minerals/titanite_ad6fe4ca.jpg", "/images/minerals/titanite_b07d7a1c.jpg"],
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
    imageUrls: ["/images/minerals/topaz_2ff7d6e1.jpg", "/images/minerals/topaz_22ffce88.jpg", "/images/minerals/topaz_305c5b98.jpg", "/images/minerals/topaz_ac56b1c6.jpg", "/images/minerals/topaz_5b6bce47.jpg", "/images/minerals/topaz_4d5285f4.jpg", "/images/minerals/topaz_77a4bb87.jpg", "/images/minerals/topaz_d1723552.jpg", "/images/minerals/topaz_09284ad6.jpg", "/images/minerals/topaz_df7d21b5.jpg", "/images/minerals/topaz_5846a69e.jpg", "/images/minerals/topaz_b3592344.jpg", "/images/minerals/topaz_58728a92.jpg", "/images/minerals/topaz_6e043e5f.jpg", "/images/minerals/topaz_27c21737.jpg", "/images/minerals/topaz_54d3ff99.jpg", "/images/minerals/topaz_34cb462a.jpg", "/images/minerals/topaz_41d26aa1.jpg", "/images/minerals/topaz_2162aff5.jpg", "/images/minerals/topaz_4e8bd0d1.jpg", "/images/minerals/topaz_355ebb12.jpg", "/images/minerals/topaz_c3433599.jpg", "/images/minerals/topaz_6932a867.jpg", "/images/minerals/topaz_512f53ad.jpg", "/images/minerals/topaz_b16b525f.jpg", "/images/minerals/topaz_d781b014.jpg", "/images/minerals/topaz_c59427b2.jpg", "/images/minerals/topaz_e0b1e969.jpg", "/images/minerals/topaz_e877769d.jpg", "/images/minerals/topaz_12cac993.jpg", "/images/minerals/topaz_49bc480b.jpg", "/images/minerals/topaz_5d78353a.jpg", "/images/minerals/topaz_d8e3973c.jpg", "/images/minerals/topaz_05170d3b.jpg", "/images/minerals/topaz_9b542a84.jpg", "/images/minerals/topaz_e33b7ddd.jpg", "/images/minerals/topaz_da102ab7.jpg", "/images/minerals/topaz_a4d45533.jpg", "/images/minerals/topaz_b5c13865.jpg", "/images/minerals/topaz_d4c27012.jpg", "/images/minerals/topaz_cf23f236.jpg", "/images/minerals/topaz_a4e579d3.jpg", "/images/minerals/topaz_4eda9d57.jpg", "/images/minerals/topaz_9967eb60.jpg", "/images/minerals/topaz_abf8fe1d.jpg", "/images/minerals/topaz_7d5c6674.jpg", "/images/minerals/topaz_8a420182.jpg", "/images/minerals/topaz_a7c0970f.jpg", "/images/minerals/topaz_c8eb68f0.jpg", "/images/minerals/topaz_d046d529.jpg"],
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
    imageUrls: ["/images/minerals/chloritoid_6d3dd75b.jpg", "/images/minerals/chloritoid_f754ff85.jpg", "/images/minerals/chloritoid_2d0eec75.jpg", "/images/minerals/chloritoid_dd531be6.jpg", "/images/minerals/chloritoid_84820278.jpg", "/images/minerals/chloritoid_50534e4b.jpg", "/images/minerals/chloritoid_f5bf7eb5.jpg", "/images/minerals/chloritoid_b84f3acf.jpg", "/images/minerals/chloritoid_10f07e1a.jpg", "/images/minerals/chloritoid_e6c1148a.jpg", "/images/minerals/chloritoid_361e73dd.jpg", "/images/minerals/chloritoid_808d0567.jpg", "/images/minerals/chloritoid_009d1c53.jpg", "/images/minerals/chloritoid_8cb59f3f.jpg", "/images/minerals/chloritoid_3ffc26a6.jpg", "/images/minerals/chloritoid_ec0292ef.jpg", "/images/minerals/chloritoid_655d78d8.jpg", "/images/minerals/chloritoid_e41657dd.jpg", "/images/minerals/chloritoid_9fb01ac6.jpg", "/images/minerals/chloritoid_ad011e44.jpg", "/images/minerals/chloritoid_48345b62.jpg", "/images/minerals/chloritoid_87a7de18.jpg", "/images/minerals/chloritoid_90c4c159.jpg", "/images/minerals/chloritoid_2a956217.jpg", "/images/minerals/chloritoid_19351d84.jpg", "/images/minerals/chloritoid_46eefe3b.jpg", "/images/minerals/chloritoid_29536fff.jpg"],
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
    imageUrls: ["/images/minerals/microcline_abd70e09.jpg", "/images/minerals/microcline_b479aefc.jpg", "/images/minerals/microcline_76fefab7.jpg", "/images/minerals/microcline_c9d1de91.jpg", "/images/minerals/microcline_5a29377f.jpg", "/images/minerals/microcline_cba3b5fd.jpg", "/images/minerals/microcline_e2e43525.jpg", "/images/minerals/microcline_79ea3f77.jpg", "/images/minerals/microcline_772dbb67.jpg", "/images/minerals/microcline_6eb74f3c.jpg", "/images/minerals/microcline_1b8954ce.jpg", "/images/minerals/microcline_f0477def.jpg", "/images/minerals/microcline_656b5900.jpg", "/images/minerals/microcline_30f46cc3.jpg", "/images/minerals/microcline_2b71d3f9.jpg", "/images/minerals/microcline_379c8cf4.jpg", "/images/minerals/microcline_3bc2d512.jpg", "/images/minerals/microcline_806c96f6.jpg", "/images/minerals/microcline_3adaad71.jpg", "/images/minerals/microcline_295cc7d2.jpg", "/images/minerals/microcline_23e4f9cf.jpg", "/images/minerals/microcline_a1991303.jpg", "/images/minerals/microcline_6997e100.jpg", "/images/minerals/microcline_95032882.jpg", "/images/minerals/microcline_70434dd3.jpg", "/images/minerals/microcline_7efe6e8b.jpg", "/images/minerals/microcline_1af8c850.jpg", "/images/minerals/microcline_b0a8d6a6.jpg", "/images/minerals/microcline_cb84fb74.jpg", "/images/minerals/microcline_6238db79.jpg", "/images/minerals/microcline_5dd2dbd6.jpg", "/images/minerals/microcline_5427364b.jpg", "/images/minerals/microcline_925b54d8.jpg", "/images/minerals/microcline_15bcc621.jpg", "/images/minerals/microcline_9a3ea1f3.jpg", "/images/minerals/microcline_04c68f87.jpg", "/images/minerals/microcline_efdd6280.jpg", "/images/minerals/microcline_23d59a2e.jpg", "/images/minerals/microcline_a9a92a40.jpg", "/images/minerals/microcline_1e01b4b1.jpg", "/images/minerals/microcline_49405fbb.jpg", "/images/minerals/microcline_a84a7c31.jpg", "/images/minerals/microcline_204162c6.jpg", "/images/minerals/microcline_3137c771.jpg", "/images/minerals/microcline_2fc807b3.jpg", "/images/minerals/microcline_9126e9bf.jpg", "/images/minerals/microcline_65f0efc3.jpg", "/images/minerals/microcline_93651199.jpg", "/images/minerals/microcline_3de42e9e.jpg", "/images/minerals/microcline_b9a7322f.jpg"],
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
    imageUrls: ["/images/minerals/sanidine_543b1ab0.jpg", "/images/minerals/sanidine_c2073530.jpg", "/images/minerals/sanidine_17ba9598.jpg", "/images/minerals/sanidine_49522346.jpg", "/images/minerals/sanidine_e71595ff.jpg", "/images/minerals/sanidine_65cca985.jpg", "/images/minerals/sanidine_21a82011.jpg", "/images/minerals/sanidine_bdb1e43b.jpg", "/images/minerals/sanidine_3f8b2de0.jpg", "/images/minerals/sanidine_a259c5aa.jpg", "/images/minerals/sanidine_76cb67eb.jpg", "/images/minerals/sanidine_524d9034.jpg", "/images/minerals/sanidine_ebebda8a.jpg", "/images/minerals/sanidine_ae631b69.jpg", "/images/minerals/sanidine_42881f46.jpg", "/images/minerals/sanidine_32183567.jpg", "/images/minerals/sanidine_59bd7cba.jpg", "/images/minerals/sanidine_ca31d209.jpg", "/images/minerals/sanidine_25a5572d.jpg", "/images/minerals/sanidine_69da0fd1.jpg", "/images/minerals/sanidine_ef8eded6.jpg", "/images/minerals/sanidine_49a284ab.jpg", "/images/minerals/sanidine_bc8c45bc.jpg", "/images/minerals/sanidine_7086cac1.jpg", "/images/minerals/sanidine_c76b9bb8.jpg", "/images/minerals/sanidine_36e0e51a.jpg", "/images/minerals/sanidine_c33a43d7.jpg", "/images/minerals/sanidine_3c3e1a76.jpg", "/images/minerals/sanidine_ae9ed4e3.jpg", "/images/minerals/sanidine_bc865775.jpg", "/images/minerals/sanidine_e936517a.jpg", "/images/minerals/sanidine_e5e4c2c8.jpg", "/images/minerals/sanidine_11149f77.jpg", "/images/minerals/sanidine_631a70a6.jpg", "/images/minerals/sanidine_6bec0dbf.jpg", "/images/minerals/sanidine_6a4573c3.jpg", "/images/minerals/sanidine_6559e698.jpg", "/images/minerals/sanidine_4f54eaa8.jpg", "/images/minerals/sanidine_0b9198f1.jpg", "/images/minerals/sanidine_7594287f.jpg", "/images/minerals/sanidine_4fa1b1dc.jpg", "/images/minerals/sanidine_a7fbe7c9.jpg", "/images/minerals/sanidine_acbf15ee.jpg", "/images/minerals/sanidine_59d8e5b7.jpg", "/images/minerals/sanidine_bc42f40d.jpg", "/images/minerals/sanidine_f6290465.jpg", "/images/minerals/sanidine_3247b5cf.jpg", "/images/minerals/sanidine_604c97d8.jpg", "/images/minerals/sanidine_12dfe90b.jpg", "/images/minerals/sanidine_b04fe5e7.jpg"],
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
    imageUrls: ["/images/minerals/orthoclase_a999055e.jpg", "/images/minerals/orthoclase_893ba6d8.jpg", "/images/minerals/orthoclase_c9b7902d.jpg", "/images/minerals/orthoclase_b2d74077.jpg", "/images/minerals/orthoclase_975d7037.jpg", "/images/minerals/orthoclase_9592457a.jpg", "/images/minerals/orthoclase_78e885e4.jpg", "/images/minerals/orthoclase_461c5e83.jpg", "/images/minerals/orthoclase_04064edf.jpg", "/images/minerals/orthoclase_b7438bfe.jpg", "/images/minerals/orthoclase_ac8aca35.jpg", "/images/minerals/orthoclase_6761084d.jpg", "/images/minerals/orthoclase_21a951af.jpg", "/images/minerals/orthoclase_0e113404.jpg", "/images/minerals/orthoclase_0423ac47.jpg", "/images/minerals/orthoclase_efaeb215.jpg", "/images/minerals/orthoclase_1c561dd8.jpg", "/images/minerals/orthoclase_838e1b17.jpg", "/images/minerals/orthoclase_5c85ca1c.jpg", "/images/minerals/orthoclase_f3054450.jpg", "/images/minerals/orthoclase_b26161b4.jpg", "/images/minerals/orthoclase_5f784210.jpg", "/images/minerals/orthoclase_7b4513ba.jpg", "/images/minerals/orthoclase_2d3e7538.jpg", "/images/minerals/orthoclase_30656bcd.jpg", "/images/minerals/orthoclase_f436ceef.jpg", "/images/minerals/orthoclase_a24d1635.jpg", "/images/minerals/orthoclase_19c2f8ad.jpg", "/images/minerals/orthoclase_f9e2b7a1.jpg", "/images/minerals/orthoclase_25080a1c.jpg", "/images/minerals/orthoclase_0678326b.jpg", "/images/minerals/orthoclase_d32c0ae3.jpg", "/images/minerals/orthoclase_a66543e0.jpg", "/images/minerals/orthoclase_904b0071.jpg", "/images/minerals/orthoclase_bf2f27c2.jpg", "/images/minerals/orthoclase_775f0bfc.jpg", "/images/minerals/orthoclase_eb6fb811.jpg", "/images/minerals/orthoclase_22a55fd0.jpg", "/images/minerals/orthoclase_b13f4289.jpg", "/images/minerals/orthoclase_e6ca4563.jpg", "/images/minerals/orthoclase_89406053.jpg", "/images/minerals/orthoclase_d552e60c.jpg", "/images/minerals/orthoclase_8a8618de.jpg", "/images/minerals/orthoclase_c3280cfb.jpg", "/images/minerals/orthoclase_54a0725b.jpg", "/images/minerals/orthoclase_9f2ea501.jpg", "/images/minerals/orthoclase_05c2591d.jpg", "/images/minerals/orthoclase_08878a18.jpg", "/images/minerals/orthoclase_f14e8365.jpg", "/images/minerals/orthoclase_e765ed1c.jpg"],
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
    imageUrls: ["/images/minerals/plagioclase_dcaa9dcd.jpg"],
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
    imageUrls: ["/images/minerals/sodalite_61fd305a.jpg", "/images/minerals/sodalite_1827c7e3.jpg", "/images/minerals/sodalite_b217b4df.jpg", "/images/minerals/sodalite_a132947e.jpg", "/images/minerals/sodalite_5032ceb1.jpg", "/images/minerals/sodalite_61d4861e.jpg", "/images/minerals/sodalite_67c5dabf.jpg", "/images/minerals/sodalite_e22c6c2e.jpg", "/images/minerals/sodalite_4678fae7.jpg", "/images/minerals/sodalite_cb47d1af.jpg", "/images/minerals/sodalite_6572b064.jpg", "/images/minerals/sodalite_00ff0585.jpg", "/images/minerals/sodalite_1b76c185.jpg", "/images/minerals/sodalite_ca67ad89.jpg", "/images/minerals/sodalite_e967b6ae.jpg", "/images/minerals/sodalite_39cd23b0.jpg", "/images/minerals/sodalite_d8d4754b.jpg", "/images/minerals/sodalite_98cf351c.jpg", "/images/minerals/sodalite_80c0a491.jpg", "/images/minerals/sodalite_d576c2c0.jpg", "/images/minerals/sodalite_a948eaac.jpg", "/images/minerals/sodalite_bcb71eeb.jpg", "/images/minerals/sodalite_f19d612b.jpg", "/images/minerals/sodalite_e3843e2d.jpg", "/images/minerals/sodalite_c8bdea04.jpg", "/images/minerals/sodalite_f6d9f0eb.jpg", "/images/minerals/sodalite_991c5f5b.jpg", "/images/minerals/sodalite_37ba85a0.jpg", "/images/minerals/sodalite_bfbcf886.jpg", "/images/minerals/sodalite_fc1d4996.jpg", "/images/minerals/sodalite_1c2b8d8b.jpg", "/images/minerals/sodalite_9508c56d.jpg", "/images/minerals/sodalite_2455eb90.jpg", "/images/minerals/sodalite_d8d0663f.jpg", "/images/minerals/sodalite_872e0fa5.jpg", "/images/minerals/sodalite_1f4bfef6.jpg", "/images/minerals/sodalite_7f14c45c.jpg", "/images/minerals/sodalite_6a5fd882.jpg", "/images/minerals/sodalite_0dbd2d9d.jpg", "/images/minerals/sodalite_20ac50c9.jpg", "/images/minerals/sodalite_6aa8b6c0.jpg", "/images/minerals/sodalite_9b14cbcc.jpg", "/images/minerals/sodalite_3fea8d5e.jpg", "/images/minerals/sodalite_634744f8.jpg", "/images/minerals/sodalite_8d909aa2.jpg", "/images/minerals/sodalite_b16b067e.jpg", "/images/minerals/sodalite_ef5c870a.jpg", "/images/minerals/sodalite_88f2e520.jpg", "/images/minerals/sodalite_4a223c89.jpg", "/images/minerals/sodalite_932fe8e5.jpg"],
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
    imageUrls: ["/images/minerals/nepheline_1af0d6e5.jpg", "/images/minerals/nepheline_f0d6e4d3.jpg", "/images/minerals/nepheline_02b64c32.jpg", "/images/minerals/nepheline_0cfe9534.jpg", "/images/minerals/nepheline_7cb71f0f.jpg", "/images/minerals/nepheline_8a0e9096.jpg", "/images/minerals/nepheline_75c94c92.jpg", "/images/minerals/nepheline_92973a14.jpg", "/images/minerals/nepheline_d7d6a1ca.jpg", "/images/minerals/nepheline_bc3676d0.jpg", "/images/minerals/nepheline_28a49165.jpg", "/images/minerals/nepheline_f6c36847.jpg", "/images/minerals/nepheline_6f850c61.jpg", "/images/minerals/nepheline_28ad15b4.jpg", "/images/minerals/nepheline_77b5b456.jpg", "/images/minerals/nepheline_9b688679.jpg", "/images/minerals/nepheline_f6c689c7.jpg", "/images/minerals/nepheline_898113fd.jpg", "/images/minerals/nepheline_ca5b205e.jpg", "/images/minerals/nepheline_70a797af.jpg", "/images/minerals/nepheline_128dd42d.jpg", "/images/minerals/nepheline_0685b84a.jpg", "/images/minerals/nepheline_2fcd4032.jpg", "/images/minerals/nepheline_412511c6.jpg", "/images/minerals/nepheline_94ffdea7.jpg", "/images/minerals/nepheline_4b08cc7b.jpg", "/images/minerals/nepheline_bf0fa44b.jpg", "/images/minerals/nepheline_3cc00f34.jpg", "/images/minerals/nepheline_bd71b6e1.jpg", "/images/minerals/nepheline_8d261a4f.jpg", "/images/minerals/nepheline_a7b65bbe.jpg", "/images/minerals/nepheline_c05eb42f.jpg", "/images/minerals/nepheline_4f3bdd79.jpg", "/images/minerals/nepheline_db48cb12.jpg", "/images/minerals/nepheline_f896bf5a.jpg", "/images/minerals/nepheline_752a37e5.jpg", "/images/minerals/nepheline_e995118e.jpg", "/images/minerals/nepheline_d2f83e5e.jpg", "/images/minerals/nepheline_de50fddb.jpg", "/images/minerals/nepheline_8ed28447.jpg", "/images/minerals/nepheline_45064f38.jpg", "/images/minerals/nepheline_c452ae39.jpg", "/images/minerals/nepheline_452b3f3d.jpg", "/images/minerals/nepheline_d4204442.jpg", "/images/minerals/nepheline_a924bafa.jpg", "/images/minerals/nepheline_f97fe1fb.jpg", "/images/minerals/nepheline_af65a4d4.jpg", "/images/minerals/nepheline_7f4d253a.jpg", "/images/minerals/nepheline_3c75d809.jpg", "/images/minerals/nepheline_830f68ae.jpg"],
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
    imageUrls: ["/images/minerals/scapolite_aec9f129.jpg", "/images/minerals/scapolite_cde899f3.jpg", "/images/minerals/scapolite_0420efa4.jpg", "/images/minerals/scapolite_8eba32a4.jpg", "/images/minerals/scapolite_a3ce4ae5.jpg", "/images/minerals/scapolite_c0fe0c4f.jpg", "/images/minerals/scapolite_906fa5eb.jpg", "/images/minerals/scapolite_72846180.jpg", "/images/minerals/scapolite_7634c51d.jpg", "/images/minerals/scapolite_12870e6e.jpg", "/images/minerals/scapolite_72d8d6a6.jpg", "/images/minerals/scapolite_04168cac.jpg", "/images/minerals/scapolite_06a18da8.jpg", "/images/minerals/scapolite_82ec7088.jpg", "/images/minerals/scapolite_8d04a093.jpg", "/images/minerals/scapolite_99de2833.jpg", "/images/minerals/scapolite_1eea11a5.jpg", "/images/minerals/scapolite_bc287c12.jpg", "/images/minerals/scapolite_ff65e0da.jpg", "/images/minerals/scapolite_84cd5df1.jpg", "/images/minerals/scapolite_f10785e9.jpg", "/images/minerals/scapolite_3a5cdb1b.jpg", "/images/minerals/scapolite_0a516055.jpg", "/images/minerals/scapolite_1d708d97.jpg", "/images/minerals/scapolite_e50f6895.jpg", "/images/minerals/scapolite_e1ddc90d.jpg", "/images/minerals/scapolite_b5aefe66.jpg", "/images/minerals/scapolite_f41c5717.jpg", "/images/minerals/scapolite_7717f69f.jpg", "/images/minerals/scapolite_e1062eba.jpg", "/images/minerals/scapolite_60060c39.jpg", "/images/minerals/scapolite_f56bbe31.jpg", "/images/minerals/scapolite_c88a3358.jpg", "/images/minerals/scapolite_9eaaabd6.jpg", "/images/minerals/scapolite_00b064c3.jpg", "/images/minerals/scapolite_0e36b48e.jpg", "/images/minerals/scapolite_61f6fc07.jpg", "/images/minerals/scapolite_181fcfd2.jpg", "/images/minerals/scapolite_d4946946.jpg", "/images/minerals/scapolite_d0cbcc0d.jpg", "/images/minerals/scapolite_a7c0d335.jpg", "/images/minerals/scapolite_80db9ab1.jpg", "/images/minerals/scapolite_c6c301f3.jpg", "/images/minerals/scapolite_26021914.jpg", "/images/minerals/scapolite_d37ca69e.jpg", "/images/minerals/scapolite_85870ca8.jpg", "/images/minerals/scapolite_7a109fb3.jpg", "/images/minerals/scapolite_f26bb1cd.jpg", "/images/minerals/scapolite_2f92c677.jpg", "/images/minerals/scapolite_396cc5b3.jpg"],
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
    imageUrls: ["/images/minerals/leucite_619b0e44.jpg", "/images/minerals/leucite_644c4e02.jpg", "/images/minerals/leucite_199c6841.jpg", "/images/minerals/leucite_ef5ba4e9.jpg", "/images/minerals/leucite_df3272b0.jpg", "/images/minerals/leucite_a09d44a0.jpg", "/images/minerals/leucite_30822191.jpg", "/images/minerals/leucite_acff9a87.jpg", "/images/minerals/leucite_976e749d.jpg", "/images/minerals/leucite_5516c575.jpg", "/images/minerals/leucite_ed01d1c1.jpg", "/images/minerals/leucite_c9982768.jpg", "/images/minerals/leucite_a810cf7d.jpg", "/images/minerals/leucite_3c112bd7.jpg", "/images/minerals/leucite_33cec86d.jpg", "/images/minerals/leucite_23e8c8f9.jpg", "/images/minerals/leucite_19c26344.jpg", "/images/minerals/leucite_19a7446a.jpg", "/images/minerals/leucite_f2ad6841.jpg", "/images/minerals/leucite_e58735a0.jpg", "/images/minerals/leucite_eb464d0c.jpg", "/images/minerals/leucite_cd96c47e.jpg", "/images/minerals/leucite_427aa5cf.jpg", "/images/minerals/leucite_9ed3b762.jpg", "/images/minerals/leucite_94cfec4d.jpg", "/images/minerals/leucite_cf6da144.jpg", "/images/minerals/leucite_02ecc950.jpg", "/images/minerals/leucite_903bec4e.jpg", "/images/minerals/leucite_97729b28.jpg", "/images/minerals/leucite_ba89f897.jpg", "/images/minerals/leucite_c1560b5e.jpg", "/images/minerals/leucite_c6b0b6c0.jpg", "/images/minerals/leucite_7631bb5c.jpg", "/images/minerals/leucite_be01a017.jpg", "/images/minerals/leucite_3d1469b1.jpg", "/images/minerals/leucite_2c789d7e.jpg", "/images/minerals/leucite_34d7267f.jpg", "/images/minerals/leucite_e3db9d17.jpg", "/images/minerals/leucite_483b92ef.jpg", "/images/minerals/leucite_6ac7c3d3.jpg", "/images/minerals/leucite_bad26600.jpg", "/images/minerals/leucite_15d702c2.jpg", "/images/minerals/leucite_76ac771d.jpg", "/images/minerals/leucite_2d8a1a32.jpg", "/images/minerals/leucite_8c29c1b9.jpg", "/images/minerals/leucite_09916505.jpg", "/images/minerals/leucite_a69e06d5.jpg", "/images/minerals/leucite_bdf89695.jpg", "/images/minerals/leucite_812e86ea.jpg", "/images/minerals/leucite_16e24a34.jpg"],
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
    imageUrls: ["/images/minerals/zeolite_d7e9e7bc.jpg", "/images/minerals/zeolite_0ce5f921.jpg", "/images/minerals/zeolite_d3c5519c.jpg", "/images/minerals/zeolite_c494842c.jpg", "/images/minerals/zeolite_65df696c.jpg", "/images/minerals/zeolite_087f6504.jpg", "/images/minerals/zeolite_38512601.jpg", "/images/minerals/zeolite_a408464d.jpg", "/images/minerals/zeolite_246687df.jpg", "/images/minerals/zeolite_620ed4df.jpg", "/images/minerals/zeolite_fc81f667.jpg", "/images/minerals/zeolite_8e2ed72c.jpg", "/images/minerals/zeolite_31087871.jpg", "/images/minerals/zeolite_73ca4575.jpg", "/images/minerals/zeolite_8b82ae77.jpg", "/images/minerals/zeolite_516bdaca.jpg", "/images/minerals/zeolite_0dc1b502.jpg", "/images/minerals/zeolite_481ee1e4.jpg", "/images/minerals/zeolite_7774aadd.jpg", "/images/minerals/zeolite_58ae54aa.jpg", "/images/minerals/zeolite_de48f9e7.jpg", "/images/minerals/zeolite_8dcd4d24.jpg", "/images/minerals/zeolite_bee2b0de.jpg", "/images/minerals/zeolite_1f6994e7.jpg", "/images/minerals/zeolite_3da13649.jpg", "/images/minerals/zeolite_2ecca459.jpg", "/images/minerals/zeolite_9c7dbc4d.jpg", "/images/minerals/zeolite_6c26bbbd.jpg", "/images/minerals/zeolite_a1dd1caf.jpg", "/images/minerals/zeolite_b1adcdcb.jpg", "/images/minerals/zeolite_ab3901b2.jpg", "/images/minerals/zeolite_7b3a7477.jpg", "/images/minerals/zeolite_49d8c98f.jpg", "/images/minerals/zeolite_1950e74a.jpg", "/images/minerals/zeolite_d712e185.jpg", "/images/minerals/zeolite_3ba98b2d.jpg", "/images/minerals/zeolite_5d35949e.jpg", "/images/minerals/zeolite_741817f2.jpg", "/images/minerals/zeolite_439828df.jpg", "/images/minerals/zeolite_092934de.jpg", "/images/minerals/zeolite_1c121a5b.jpg", "/images/minerals/zeolite_08504fef.jpg", "/images/minerals/zeolite_f6f3947a.jpg", "/images/minerals/zeolite_5ee55c69.jpg", "/images/minerals/zeolite_a2a6c779.jpg", "/images/minerals/zeolite_7cd6c2c1.jpg", "/images/minerals/zeolite_98b21e56.jpg", "/images/minerals/zeolite_48a1b692.jpg", "/images/minerals/zeolite_6a7cc834.jpg", "/images/minerals/zeolite_61812ee3.jpg"],
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