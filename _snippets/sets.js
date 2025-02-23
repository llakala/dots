[
  { trigger: "uni", replacement: "\\cup", options: "mA" }, // Union
  { trigger: "buni", replacement: "\\bigcup_{$0}^{$1}", options: "mA" }, // Big union
  { trigger: "\\cup_", replacement: "\\bigcup_{$0}^{$1}", options: "mA" }, // I forgot to use big union

  { trigger: "ise", replacement: "\\cap", options: "mA" }, // Intersection
  { trigger: "cmp", replacement: "\\overline{$0}$1", options: "mA" }, // Compliment


  { trigger: "crd", replacement: "|$0|$1", options: "mA" }, // Cardinality

  { trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA" },

  { trigger: "sub", replacement: "\\subseteq", options: "mA" },
  { trigger: "sup", replacement: "\\supseteq", options: "mA" },
  { trigger: "nsub", replacement: "\\nsubseteq", options: "mA" },
  { trigger: "nsup", replacement: "\\nsupseteq", options: "mA" },

  { trigger: "psub", replacement: "\\subset", options: "mA" },
  { trigger: "psup", replacement: "\\supset", options: "mA" },
  { trigger: "npsub", replacement: "\\not\\subset", options: "mA" },
  { trigger: "npsup", replacement: "\\not\\supset", options: "mA" },

  { trigger: "inn", replacement: "\\in", options: "mA", priority: -1 },
  { trigger: "nin", replacement: "\\notin", options: "mA" },
  { trigger: "notin", replacement: "\\not\\in", options: "mA" },

  { trigger: "\\\\\\", replacement: "\\setminus", options: "mA" },
  { trigger: "eset", replacement: "\\emptyset", options: "mA" },
]
