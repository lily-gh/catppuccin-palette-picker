export type Flavor = 'latte' | 'frappe' | 'macchiato' | 'mocha';
export type Format = 'hex' | 'rgb' | 'hsl';

export const catppuccin: Record<Flavor, Record<string, string>> = {
    latte: {
        rosewater: '#dc8a78',
        flamingo: '#dd7878',
        pink: '#ea76cb',
        // ...
    },
    frappe: {
        rosewater: '#f2d5cf',
        flamingo: '#eebebe',
        pink: '#f4b8e4',
        // ...
    },
    macchiato: {
        rosewater: '#f4dbd6',
        flamingo: '#f0c6c6',
        pink: '#f5bde6',
        // ...
    },
    mocha: {
        rosewater: '#f5e0dc',
        flamingo: '#f2cdcd',
        pink: '#f5c2e7',
        // ...
    }
};
