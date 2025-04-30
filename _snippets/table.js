[
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
          else if (i == 1) {
            arr[i][j] = " --- ";
          }
          else {
            arr[i][j] = " $$  ";
          };
        }
      }

      return arr.map(r => '|' + r.join('|')).join('|\n') + '|';

    }, options: "t", description: "N x N markdown table" // Text mode only
  },

  // Referenced from:
  // https://github.com/artisticat1/obsidian-latex-suite/discussions/50#discussioncomment-10984217
  // Slightly modified to only provide one dimension (I'm only doing square
  // matrices right now)
  // We also add another jump point at the very end
  {
    trigger: /(\d)([p|b|B|v|V]?)mat/,
    replacement: (match) => {
      const n = match[1], m = match[1], c = match[2];

      let arr = [];
      // The index of the regex jump, so we can create stuff like $0 and $1
      // automatically
      let jump = 0;

      for (let j = 0; j < n; j++) {
        arr[j] = [];
        for (let i = 0; i < m; i++) {
          jump = i + j * m;

          // fromCharCode logic gives us the alphabet in order from `a`
          // Example output: ${0:a}
          arr[j][i] = `\${${jump}:${String.fromCharCode(97 + jump)}}`;
        }
      }

      let output = arr.map((el) => el.join(" & ")).join(" \\\\\n");

      // Add an extra jump point after the matrix
      output = `\\begin{${c}matrix}\n${output} \n\\end{${c}matrix}$${jump + 1}`;

      return output;
    },

    options: "MA",
    description: "N x M matrix",
  },
]
