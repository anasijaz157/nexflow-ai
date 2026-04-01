import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
    theme: {
          extend: {
                  colors: {
                            bg: '#faf8ff',
                            'bg-alt': '#f2f3ff',
                            surface: '#ffffff',
                            'surface-2': '#eaedff',
                            primary: '#4F46E5',
                            'primary-dark': '#3525cd',
                            secondary: '#7C3AED',
                            accent: '#06B6D4',
                            'text-primary': '#131b2e',
                            'text-muted': '#64748b',
                            'text-light': '#94a3b8',
                  },
                  fontFamily: {
                            jakarta: ['var(--font-jakarta)', 'sans-serif'],
                            inter: ['var(--font-inter)', 'sans-serif'],
                  },
                  borderRadius: {
                            card: '16px',
                            btn: '100px',
                            xl2: '24px',
                  },
                  animation: {
                            'float-1': 'float1 8s ease-in-out infinite',
                            'float-2': 'float2 10s ease-in-out infinite',
                            'float-3': 'float3 12s ease-in-out infinite',
                            'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
                            marquee: 'marquee 25s linear infinite',
                            'pulse-slow': 'pulse 3s ease-in-out infinite',
                  },
                  keyframes: {
                            float1: {'0%, 100%': {transform: 'translateY(0px) scale(1)'}, '50%': {transform: 'translateY(-24px) scale(1.04)'}},
                            float2: {'0%, 100%': {transform: 'translateY(0px) scale(1)'}, '50%': {transform: 'translateY(20px) scale(0.97)'}},
                            float3: {'0%, 100%': {transform: 'translateY(0px) scale(1)'}, '50%': {transform: 'translateY(-18px) scale(1.06)'}},
                            bounceSlow: {'0%, 100%': {transform: 'translateY(0)'}, '50%': {transform: 'translateY(8px)'}},
                            marquee: {'0%': {transform: 'translateX(0)'}, '100%': {transform: 'translateX(-50%)'}},
                  },
                  boxShadow: {
                            'card': '0 4px 24px -4px rgba(79, 70, 229, 0.10)',
                            'card-hover': '0 20px 48px -8px rgba(79, 70, 229, 0.18)',
                            'nav': '0 1px 0 0 rgba(79, 70, 229, 0.08), 0 4px 16px -4px rgba(79, 70, 229, 0.06)',
                            'cta': '0 8px 32px -4px rgba(124, 58, 237, 0.35)',
                            'btn': '0 4px 16px -4px rgba(79, 70, 229, 0.3)',
                  },
                  backgroundImage: {
                            'gradient-primary': 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                            'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.12) 0%, transparent 70%)',
                            'gradient-accent': 'linear-gradient(135deg, #06B6D4, #4F46E5)',
                  },
          },
    },
    plugins: [],
}
export default config
