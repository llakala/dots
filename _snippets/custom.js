[
  { trigger: "(?<=\n)\"", replacement: "\\text{$0 } $1", options: "mrA" }, // Text at the beginning of a line
  { trigger: "\"", replacement: "\\text{ $0 } $1", options: "mA", priority: -1 }, // Text that isn't at the beginning of a line

  { trigger: "#d", replacement: "\\displaystyle ", options: "mA" },
  { trigger: "#b", replacement: "\\mathbf{$0}", options: "mA" },
  { trigger: "#n", replacement: "\\mathrm{$0}", options: "mA" },
  { trigger: "#m", replacement: "\\mathbb{$0}", options: "mA" },

  { trigger: "@d", replacement: "\\Delta", options: "mA" },
  { trigger: "@D", replacement: "\\delta", options: "mA" },
  { trigger: "@e", replacement: "\\mathcal{E}", options: "mA" },

  // Use block letters when we get one of these letters twice
  { trigger: /([A-GI-KM-Z])\1/, replacement: "\\mathbb{[[0]]}", options: "mA" },

  { trigger: /\\mathbb{(\w)}([\+\-\d])/, replacement: "\\mathbb{[[0]]}^[[1]]", options: "mA" }, // Positive/negative
  { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
  { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },

  { trigger: "mk", replacement: "$$0$", options: "tA" },
  { trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw" },
  // Multiline
  { trigger: "ml", replacement: "$$\n\\begin{gather}\n$0\n\\end{gather}\n$$$1", options: "tAw" },
  { trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA" },

  { trigger: "lim", replacement: "\\lim_{${0:n} \\to ${1:\\infty}} $2", options: "mA" },

  { trigger: "~=", replacement: "\\approx", options: "mA" },

  // Sum and prod auto expanded
  { trigger: "sum", replacement: "\\sum_{${0:n}=${1:1}}^{${2:N}} $3", options: "mA" },
  { trigger: "isum", replacement: "\\sum_{${0:n}=${1:1}}^{\\infty} $2", options: "mA" }, // Infinite sum
  { trigger: "prod", replacement: "\\prod_{${0:n}=${1:1}}^{${2:N}} $3", options: "mA" },

  { trigger: "abs", replacement: "|$0|$1", options: "mA" },

  { trigger: "tta", replacement: "\\theta", options: "mA" },

  // Select and press
  {
    trigger: "A", replacement: (sel) => {
      let processed = sel.replace(/=/g, "&="); // Replace with align-equals
      processed = processed.replace(/\n/g, " \\\\\n"); // Replace & delineate newlines
      return `\\begin{align}\n${processed}\n\\end{align}`; // Wrap with align environment
    },
    options: "mvA"
  },

  { trigger: "->", replacement: "\\to", options: "mA" },

  { trigger: "^o", replacement: "^\\circ", options: "mA" }, // Degree symbol

  { trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA" }, // Manual brackets, like everywhere else
  { trigger: /(\d)rt/, replacement: "\\sqrt[[[0]]]{$0} $1", options: "mA" }, // Nth root

  { trigger: "oo", replacement: "\\circ", options: "mA" },
  { trigger: "mod", replacement: "\\bmod", options: "mA" },

  { trigger: "!|", replacement: "\\nmid", options: "mA" },
  { trigger: "%", replacement: "\\%$0", options: "mA" },

  { trigger: "ang", replacement: "\\angle", options: "mA" },

  { trigger: "flr", replacement: "\\lfloor $0 \\rfloor $1", options: "mA" },
  { trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA" },

  // Auto subscripts when typing something like `a1`
  { trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA", priority: -1 },
  { trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA" },
  { trigger: /\\hat{([A-Za-z])}(\d)/, replacement: "\\hat{[[0]]}_{[[1]]}", options: "mA" },
  { trigger: /\\vec{([A-Za-z])}(\d)/, replacement: "\\vec{[[0]]}_{[[1]]}", options: "mA" },
  { trigger: /\\mathbf{([A-Za-z])}(\d)/, replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "mA" },

  // Inverse / arc sin functions quickly
  { trigger: /i(sin|cos|tan|csc|sec|cot)/, replacement: "[[0]]^{-1}", options: "mA", priority: 1 },
  { trigger: /a(sin|cos|tan)/, replacement: "\\arc[[0]]($0)$1", options: "mA", priority: 1 },
  { trigger: /a(csc|sec|cot)/, replacement: "\\text{arc[[0]]}($0)$1", options: "mA", priority: 1 },
]
