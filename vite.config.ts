import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'rds-forms',
      formats: ['es', 'umd'],
      fileName: (format) => `rds-forms.${format}.js`,
    },
    rollupOptions: {
      external: [
        'formik',
        'react',
        'react-datepicker',
        'react-dom',
        'react-quill',
        'react-select',
        'yup'
      ],
      output: {
        globals: {
          formik: 'formik',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-datepicker': 'ReactDatePicker',
          'react-quill': 'ReactQuill',
          'react-select': 'ReactSelect',
          yup: 'Yup',
        },
      },
    },
  },
}))
