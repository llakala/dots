[


  {trigger: "(?<=\n)#t", replacement: "\\text{$0 }$1", options: "mrA"}, // Text at the beginning of a line
  {trigger: "#t", replacement: "\\text{ $0 }$1", options: "mA", priority: -1}, // Text that isn't at the beginning of a line

  {trigger: "#d", replacement: "\\displaystyle ", options: "mA"},
  {trigger: "#b", replacement: "\\mathbf{$0}", options: "mA"},
  {trigger: "#n", replacement: "\\mathrm{$0}", options: "mA"},
  {trigger: "#m", replacement: "\\mathbb{$0}", options: "mA"},

  { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
  { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },
  { trigger: "CC", replacement: "\\mathbb{C}", options: "mA" },
  { trigger: "RR", replacement: "\\mathbb{R}", options: "mA" }, // Reals
  { trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA" }, // // Integers
  { trigger: "NN", replacement: "\\mathbb{N}", options: "mA" }, // Natural Numbers
  { trigger: "QQ", replacement: "\\mathbb{Q}", options: "mA" }, // Rationals


  {trigger: "mk", replacement: "$$0$", options: "tA"},
  {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
  {trigger: "ml", replacement: "$$\n\\begin{gather}\n$0\n\\end{gather}\n$$$1", options: "tAw" }, // Multiline
  {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},

  {trigger: /dd([a-ce-z])/, replacement: "\\dfrac{d}{d[[0]]}\\left[ $0 \\right]$1", options: "mA"},
  {trigger: /d([a-ce-z])d([a-ce-z])/, replacement: "\\dfrac{d[[0]]}{d[[1]]}\\left[ $0 \\right]$1", options: "mA"},

  {trigger: "lim", replacement: "\\lim_{${0:x} \\to ${1:\\infty}}$2", options: "mA"},

  // Sum and prod auto expanded
  {trigger: "sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}}$3", options: "mA"},
  {trigger: "isum", replacement: "\\sum_{${0:i}=${1:1}}^{\\infty}$2", options: "mA"}, // Infinite sum
  {trigger: "prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}}$3", options: "mA"},

  // `|` symbol for integrals
  {trigger: "at", replacement: "\\bigg\\rvert_{${0:a}}^{${1:b}}$2", options: "mA" },
  {trigger: "abs", replacement: "|$0|$1", options: "mA"},

  {trigger: "tta", replacement: "\\theta", options: "mA"},


  // Indefinite and definite integrals, with a constant beforehand if needed
  {trigger: /([^\\])int/, replacement: "[[0]]\\int $0 \\, d${1:x}$2", options: "mA", priority: -1}, // Constant before int
  {trigger: /([^\\])dint/, replacement: "[[0]]\\int_{${0:a}}^{${1:b}} $2 \\, d${3:x}$4", options: "mA", priority: -1}, // Constant before int


  // Weird types of integrals
  {trigger: "oint", replacement: "\\oint", options: "mA"},
	{trigger: "iint", replacement: "\\iint", options: "mA"},
  {trigger: "iiint", replacement: "\\iiint", options: "mA"},

// Select and press
  {
    trigger: "A", replacement: (sel) =>
    {
      let processed = sel.replace(/=/g, "&="); // Replace with align-equals
      processed = processed.replace(/\n/g, " \\\\\n"); // Replace & delineate newlines
      return `\\begin{align}\n${processed}\n\\end{align}`; // Wrap with align environment
    },
    options: "mvA"
  },

  {trigger: "->", replacement: "\\to", options: "mA" },

  {trigger: "^o", replacement: "^\\circ", options: "mA"}, // Degree symbol

  { trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA" }, // Manual brackets, like everywhere else
  { trigger: /(\d)rt/, replacement: "\\sqrt[[[0]]]{$0} $1", options: "mA"}, // Nth root

  // Inverse / arc sin functions quickly
  { trigger: /i(sin|cos|tan|csc|sec|cot)/, replacement: "[[0]]^{-1}", options: "mA", priority: 1},
  { trigger: /a(sin|cos|tan)/, replacement: "\\arc[[0]]($0)$1", options: "mA", priority: 1},
  { trigger: /a(csc|sec|cot)/, replacement: "\\text{arc[[0]]}($0)$1", options: "mA", priority: 1},



  // Conditional logic
  { trigger: "or", replacement: "\\lor", options: "mA" },
  { trigger: "|", replacement: "\\lor$0", options: "mA" }, // This breaks absolute value, so we use abs snippet instead

  { trigger: "and", replacement: "\\land", options: "mA" },
  { trigger: "&", replacement: "\\land$0", options: "mA" },

  { trigger: "not", replacement: "\\neg", options: "mA" },
  { trigger: "!", replacement: "\\neg$0", options: "mA" },

  { trigger: "xor", replacement: "\\oplus", options: "mA" },

  { trigger: "imp", replacement: "\\implies", options: "mA" },
  { trigger: "=>", replacement: "\\implies", options: "mA" },

  { trigger: "exists", replacement: "\\exists", options: "mA" },
  { trigger: "inn", replacement: "\\in", options: "mA" },


  // Existing presets that I don't currently cover
  { trigger: "<->", replacement: "\\leftrightarrow ", options: "mA" },
  // { trigger: "!>", replacement: "\\mapsto", options: "mA" }, // NOT WORKING RIGHT NOW
  { trigger: "=<", replacement: "\\impliedby", options: "mA" },
  { trigger: "yorr", replacement: "\\cup", options: "mA" },
  { trigger: "notin", replacement: "\\not\\in", options: "mA" },
  { trigger: "\\\\\\", replacement: "\\setminus", options: "mA" },
  { trigger: "sub=", replacement: "\\subseteq", options: "mA" },
  { trigger: "sup=", replacement: "\\supseteq", options: "mA" },
  { trigger: "eset", replacement: "\\emptyset", options: "mA" },
  { trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA" },

   {
    trigger: /table_(\d+)_(\d+)/, replacement: (match) => {
      const cols = match[1];
      const rows = match[2];

      let arr = [];
      for (let i = 0; i <= rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {

          if (i == 0 && j == 0) {
              arr[i][j] = "     ";
          }
          else if (i == 1)
          {
            arr[i][j] = " --- ";
          }
          else
          {
            arr[i][j] = " $$  ";
          };
        }
      }

      return arr.map(r => '|' + r.join('|')).join('|\n') + '|';

    }, options: "t", description: "N x N markdown table" // Text mode only
  },
]
