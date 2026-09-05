import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{ink:'#14211b',deep:'#1c3028',paper:'#f8f7f2',accent:'#b38a52',muted:'#66736c'},fontFamily:{sans:['DM Sans','sans-serif'],serif:['Playfair Display','serif']}}},plugins:[]} satisfies Config;
