export type Flavor = 'latte' | 'frappe' | 'macchiato' | 'mocha';
export type Format = 'hex' | 'rgb' | 'hsl';

export interface ColorValue {
  hex: string;
  rgb: string;
  hsl: string;
}

export interface FlavorData {
  name: string;
  colors: Record<string, ColorValue>;
}

export const catppuccinColors: Record<Flavor, FlavorData> = {
  latte: {
    name: '🌻 Latte',
    colors: {
      rosewater: { hex: '#dc8a78', rgb: '220, 138, 120', hsl: '11, 59%, 67%' },
      flamingo: { hex: '#dd7878', rgb: '221, 120, 120', hsl: '0, 60%, 67%' },
      pink: { hex: '#ea76cb', rgb: '234, 118, 203', hsl: '316, 73%, 69%' },
      mauve: { hex: '#8839ef', rgb: '136, 57, 239', hsl: '266, 85%, 58%' },
      red: { hex: '#d20f39', rgb: '210, 15, 57', hsl: '347, 87%, 44%' },
      maroon: { hex: '#e64553', rgb: '230, 69, 83', hsl: '355, 76%, 59%' },
      peach: { hex: '#fe640b', rgb: '254, 100, 11', hsl: '22, 99%, 52%' },
      yellow: { hex: '#df8e1d', rgb: '223, 142, 29', hsl: '35, 77%, 49%' },
      green: { hex: '#40a02b', rgb: '64, 160, 43', hsl: '109, 58%, 40%' },
      teal: { hex: '#179299', rgb: '23, 146, 153', hsl: '183, 74%, 35%' },
      sky: { hex: '#04a5e5', rgb: '4, 165, 229', hsl: '197, 97%, 46%' },
      sapphire: { hex: '#209fb5', rgb: '32, 159, 181', hsl: '189, 70%, 42%' },
      blue: { hex: '#1e66f5', rgb: '30, 102, 245', hsl: '220, 91%, 54%' },
      lavender: { hex: '#7287fd', rgb: '114, 135, 253', hsl: '231, 97%, 72%' },
      text: { hex: '#4c4f69', rgb: '76, 79, 105', hsl: '234, 16%, 35%' },
      subtext1: { hex: '#5c5f77', rgb: '92, 95, 119', hsl: '233, 13%, 41%' },
      subtext0: { hex: '#6c6f85', rgb: '108, 111, 133', hsl: '233, 10%, 47%' },
      overlay2: { hex: '#7c7f93', rgb: '124, 127, 147', hsl: '232, 10%, 53%' },
      overlay1: { hex: '#8c8fa1', rgb: '140, 143, 161', hsl: '231, 10%, 59%' },
      overlay0: { hex: '#9ca0b0', rgb: '156, 160, 176', hsl: '228, 11%, 65%' },
      surface2: { hex: '#acb0be', rgb: '172, 176, 190', hsl: '227, 12%, 71%' },
      surface1: { hex: '#bcc0cc', rgb: '188, 192, 204', hsl: '225, 14%, 77%' },
      surface0: { hex: '#ccd0da', rgb: '204, 208, 218', hsl: '223, 16%, 83%' },
      base: { hex: '#eff1f5', rgb: '239, 241, 245', hsl: '220, 23%, 95%' },
      mantle: { hex: '#e6e9ef', rgb: '230, 233, 239', hsl: '220, 22%, 92%' },
      crust: { hex: '#dce0e8', rgb: '220, 224, 232', hsl: '220, 21%, 89%' }
    }
  },
  frappe: {
    name: '🪴 Frappé',
    colors: {
      rosewater: { hex: '#f2d5cf', rgb: '242, 213, 207', hsl: '10, 57%, 88%' },
      flamingo: { hex: '#eebebe', rgb: '238, 190, 190', hsl: '0, 59%, 84%' },
      pink: { hex: '#f4b8e4', rgb: '244, 184, 228', hsl: '316, 73%, 84%' },
      mauve: { hex: '#ca9ee6', rgb: '202, 158, 230', hsl: '277, 59%, 76%' },
      red: { hex: '#e78284', rgb: '231, 130, 132', hsl: '359, 68%, 71%' },
      maroon: { hex: '#ea999c', rgb: '234, 153, 156', hsl: '358, 67%, 76%' },
      peach: { hex: '#ef9f76', rgb: '239, 159, 118', hsl: '20, 79%, 70%' },
      yellow: { hex: '#e5c890', rgb: '229, 200, 144', hsl: '40, 62%, 73%' },
      green: { hex: '#a6d189', rgb: '166, 209, 137', hsl: '96, 44%, 68%' },
      teal: { hex: '#81c8be', rgb: '129, 200, 190', hsl: '172, 39%, 65%' },
      sky: { hex: '#99d1db', rgb: '153, 209, 219', hsl: '189, 48%, 73%' },
      sapphire: { hex: '#85c1dc', rgb: '133, 193, 220', hsl: '199, 55%, 69%' },
      blue: { hex: '#8caaee', rgb: '140, 170, 238', hsl: '222, 74%, 74%' },
      lavender: { hex: '#babbf1', rgb: '186, 187, 241', hsl: '239, 66%, 84%' },
      text: { hex: '#c6d0f5', rgb: '198, 208, 245', hsl: '227, 70%, 87%' },
      subtext1: { hex: '#b5bfe2', rgb: '181, 191, 226', hsl: '227, 44%, 80%' },
      subtext0: { hex: '#a5adce', rgb: '165, 173, 206', hsl: '228, 29%, 73%' },
      overlay2: { hex: '#949cbb', rgb: '148, 156, 187', hsl: '228, 22%, 66%' },
      overlay1: { hex: '#838ba7', rgb: '131, 139, 167', hsl: '227, 17%, 58%' },
      overlay0: { hex: '#737994', rgb: '115, 121, 148', hsl: '229, 13%, 52%' },
      surface2: { hex: '#626880', rgb: '98, 104, 128', hsl: '228, 13%, 44%' },
      surface1: { hex: '#51576d', rgb: '81, 87, 109', hsl: '227, 15%, 37%' },
      surface0: { hex: '#414559', rgb: '65, 69, 89', hsl: '230, 16%, 30%' },
      base: { hex: '#303446', rgb: '48, 52, 70', hsl: '229, 19%, 23%' },
      mantle: { hex: '#292c3c', rgb: '41, 44, 60', hsl: '231, 19%, 20%' },
      crust: { hex: '#232634', rgb: '35, 38, 52', hsl: '229, 20%, 17%' }
    }
  },
  macchiato: {
    name: '🌺 Macchiato',
    colors: {
      rosewater: { hex: '#f4dbd6', rgb: '244, 219, 214', hsl: '10, 58%, 90%' },
      flamingo: { hex: '#f0c6c6', rgb: '240, 198, 198', hsl: '0, 58%, 86%' },
      pink: { hex: '#f5bde6', rgb: '245, 189, 230', hsl: '316, 74%, 85%' },
      mauve: { hex: '#c6a0f6', rgb: '198, 160, 246', hsl: '267, 83%, 80%' },
      red: { hex: '#ed8796', rgb: '237, 135, 150', hsl: '351, 74%, 73%' },
      maroon: { hex: '#ee99a0', rgb: '238, 153, 160', hsl: '355, 71%, 77%' },
      peach: { hex: '#f5a97f', rgb: '245, 169, 127', hsl: '21, 86%, 73%' },
      yellow: { hex: '#eed49f', rgb: '238, 212, 159', hsl: '40, 70%, 78%' },
      green: { hex: '#a6da95', rgb: '166, 218, 149', hsl: '105, 48%, 72%' },
      teal: { hex: '#8bd5ca', rgb: '139, 213, 202', hsl: '171, 47%, 69%' },
      sky: { hex: '#91d7e3', rgb: '145, 215, 227', hsl: '189, 59%, 73%' },
      sapphire: { hex: '#7dc4e4', rgb: '125, 196, 228', hsl: '199, 66%, 69%' },
      blue: { hex: '#8aadf4', rgb: '138, 173, 244', hsl: '220, 83%, 75%' },
      lavender: { hex: '#b7bdf8', rgb: '183, 189, 248', hsl: '234, 82%, 85%' },
      text: { hex: '#cad3f5', rgb: '202, 211, 245', hsl: '227, 68%, 88%' },
      subtext1: { hex: '#b8c0e0', rgb: '184, 192, 224', hsl: '228, 39%, 80%' },
      subtext0: { hex: '#a5adcb', rgb: '165, 173, 203', hsl: '227, 27%, 72%' },
      overlay2: { hex: '#939ab7', rgb: '147, 154, 183', hsl: '228, 20%, 65%' },
      overlay1: { hex: '#8087a2', rgb: '128, 135, 162', hsl: '228, 15%, 57%' },
      overlay0: { hex: '#6e738d', rgb: '110, 115, 141', hsl: '230, 12%, 49%' },
      surface2: { hex: '#5b6078', rgb: '91, 96, 120', hsl: '230, 14%, 41%' },
      surface1: { hex: '#494d64', rgb: '73, 77, 100', hsl: '231, 16%, 34%' },
      surface0: { hex: '#363a4f', rgb: '54, 58, 79', hsl: '230, 19%, 26%' },
      base: { hex: '#24273a', rgb: '36, 39, 58', hsl: '232, 23%, 18%' },
      mantle: { hex: '#1e2030', rgb: '30, 32, 48', hsl: '233, 23%, 15%' },
      crust: { hex: '#181926', rgb: '24, 25, 38', hsl: '236, 23%, 12%' }
    }
  },
  mocha: {
    name: '🌿 Mocha',
    colors: {
      rosewater: { hex: '#f5e0dc', rgb: '245, 224, 220', hsl: '10, 56%, 91%' },
      flamingo: { hex: '#f2cdcd', rgb: '242, 205, 205', hsl: '0, 59%, 88%' },
      pink: { hex: '#f5c2e7', rgb: '245, 194, 231', hsl: '316, 72%, 86%' },
      mauve: { hex: '#cba6f7', rgb: '203, 166, 247', hsl: '267, 84%, 81%' },
      red: { hex: '#f38ba8', rgb: '243, 139, 168', hsl: '343, 81%, 75%' },
      maroon: { hex: '#eba0ac', rgb: '235, 160, 172', hsl: '350, 65%, 77%' },
      peach: { hex: '#fab387', rgb: '250, 179, 135', hsl: '23, 92%, 75%' },
      yellow: { hex: '#f9e2af', rgb: '249, 226, 175', hsl: '41, 86%, 83%' },
      green: { hex: '#a6e3a1', rgb: '166, 227, 161', hsl: '115, 54%, 76%' },
      teal: { hex: '#94e2d5', rgb: '148, 226, 213', hsl: '170, 57%, 73%' },
      sky: { hex: '#89dceb', rgb: '137, 220, 235', hsl: '189, 71%, 73%' },
      sapphire: { hex: '#74c7ec', rgb: '116, 199, 236', hsl: '199, 76%, 69%' },
      blue: { hex: '#89b4fa', rgb: '137, 180, 250', hsl: '217, 92%, 76%' },
      lavender: { hex: '#b4befe', rgb: '180, 190, 254', hsl: '232, 97%, 85%' },
      text: { hex: '#cdd6f4', rgb: '205, 214, 244', hsl: '226, 64%, 88%' },
      subtext1: { hex: '#bac2de', rgb: '186, 194, 222', hsl: '227, 35%, 80%' },
      subtext0: { hex: '#a6adc8', rgb: '166, 173, 200', hsl: '227, 24%, 72%' },
      overlay2: { hex: '#9399b2', rgb: '147, 153, 178', hsl: '228, 17%, 64%' },
      overlay1: { hex: '#7f849c', rgb: '127, 132, 156', hsl: '230, 13%, 55%' },
      overlay0: { hex: '#6c7086', rgb: '108, 112, 134', hsl: '231, 11%, 47%' },
      surface2: { hex: '#585b70', rgb: '88, 91, 112', hsl: '233, 12%, 39%' },
      surface1: { hex: '#45475a', rgb: '69, 71, 90', hsl: '234, 13%, 31%' },
      surface0: { hex: '#313244', rgb: '49, 50, 68', hsl: '237, 16%, 23%' },
      base: { hex: '#1e1e2e', rgb: '30, 30, 46', hsl: '240, 21%, 15%' },
      mantle: { hex: '#181825', rgb: '24, 24, 37', hsl: '240, 21%, 12%' },
      crust: { hex: '#11111b', rgb: '17, 17, 27', hsl: '240, 23%, 9%' }
    }
  }
};

// Helper function to get color value in specified format
export function getColorValue(colorValue: ColorValue, format: Format): string {
  switch (format) {
    case 'hex':
      return colorValue.hex;
    case 'rgb':
      return `rgb(${colorValue.rgb})`;
    case 'hsl':
      return `hsl(${colorValue.hsl})`;
    default:
      return colorValue.hex;
  }
}
