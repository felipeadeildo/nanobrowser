import type { Config } from 'tailwindcss/types/config';

export default {
  theme: {
    extend: {
      colors: {
        // Cores da Lamyada
        lamyada: {
          blue: '#2600C8',
          purple: '#8061FF',
          black: '#101010',
          background: '#2A2949',
        },
        // Cores derivadas para melhor usabilidade
        primary: {
          '50': '#f0f4ff',
          '100': '#e0e9ff',
          '200': '#c7d6ff',
          '300': '#a5b8ff',
          '400': '#8061ff',
          '500': '#6b46ff',
          '600': '#5b21b6',
          '700': '#4c1d95',
          '800': '#2600c8',
          '900': '#1e1b4b',
        },
        secondary: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
        },
        accent: {
          '50': '#faf5ff',
          '100': '#f3e8ff',
          '200': '#e9d5ff',
          '300': '#d8b4fe',
          '400': '#c084fc',
          '500': '#a855f7',
          '600': '#9333ea',
          '700': '#7c3aed',
          '800': '#6b21a8',
          '900': '#581c87',
        },
      },
    },
  },
  plugins: [],
} as Omit<Config, 'content'>;
