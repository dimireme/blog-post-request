import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'rgb(147 51 234)', // text-purple-600
              textDecoration: 'none',
              '&:hover': {
                color: 'rgb(126 34 206)', // text-purple-800
              },
            },
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.625',
            },
            h1: {
              color: 'inherit',
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginBottom: '2rem',
              '@screen md': {
                fontSize: '2.5rem',
                lineHeight: '2.75rem',
              },
            },
            h2: {
              color: 'inherit',
              fontWeight: '700',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              '@screen md': {
                fontSize: '1.875rem',
                lineHeight: '2.25rem',
              },
            },
            h3: {
              color: 'inherit',
              fontWeight: '700',
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              '@screen md': {
                fontSize: '1.5rem',
                lineHeight: '2rem',
              },
            },
            'h1, h2, h3, h4': {
              color: 'inherit',
              fontWeight: '700',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.625em',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '0.375em',
              marginBottom: '0.5rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.625em',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'ol > li': {
              position: 'relative',
              paddingLeft: '0.375em',
              marginBottom: '0.5rem',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderColor: 'rgb(168 85 247)', // border-purple-500
              backgroundColor: 'rgb(249 250 251)', // bg-gray-50
              padding: '1rem',
              borderRadius: '0.375rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            code: {
              color: 'inherit',
              fontWeight: '400',
              fontSize: '0.875rem',
              backgroundColor: 'rgb(243 244 246)', // bg-gray-100
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid rgb(229 231 235)', // border-gray-200
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              color: 'rgb(243 244 246)', // text-gray-100
              backgroundColor: 'rgb(31 41 55)', // bg-gray-800
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              border: '1px solid rgb(75 85 99)', // border-gray-600
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderRadius: '0',
              padding: '0',
              border: 'none',
              fontSize: '0.875rem',
              color: 'inherit',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
          },
        },
        invert: {
          css: {
            blockquote: {
              borderColor: 'rgb(192 132 252)', // border-purple-400
              backgroundColor: 'rgb(31 41 55)', // bg-gray-800
            },
            code: {
              backgroundColor: 'rgb(55 65 81)', // bg-gray-700
              border: '1px solid rgb(75 85 99)', // border-gray-600
            },
            pre: {
              backgroundColor: 'rgb(17 24 39)', // bg-gray-900
              border: '1px solid rgb(75 85 99)', // border-gray-600
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config 