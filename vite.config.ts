import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({

// })

export default {
  plugins: [react()],
  server:
  {
    fs:
    {
      deny:
        ['.env', '.env.*', '*.{crt,pem}', 'custom.secret']
    }
  }
}
