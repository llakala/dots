[
  { trigger: "or", replacement: "\\lor", options: "mA", priority: -1 },
  { trigger: "|", replacement: "\\lor$0", options: "mA" }, // This breaks absolute value, so we use abs snippet instead

  { trigger: "and", replacement: "\\land", options: "mA" },
  { trigger: "&", replacement: "\\land$0", options: "mA" },

  { trigger: "not", replacement: "\\neg", options: "mA" },
  { trigger: "!", replacement: "\\neg$0", options: "mA" },

  { trigger: "xor", replacement: "\\oplus", options: "mA" },

  { trigger: "imp", replacement: "\\implies", options: "mA" },
  { trigger: "=>", replacement: "\\implies", options: "mA" },

  { trigger: "exi", replacement: "\\exists", options: "mA" },
  { trigger: "for", replacement: "\\forall", options: "mA" },

  // Existing presets that I don't currently cover
  { trigger: "<->", replacement: "\\leftrightarrow ", options: "mA" },
  // { trigger: "!>", replacement: "\\mapsto", options: "mA" }, // NOT WORKING RIGHT NOW
  { trigger: "=<", replacement: "\\impliedby", options: "mA" },
]
