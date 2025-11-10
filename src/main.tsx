import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { SidebarProvider } from './context/NavbarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <BrowserRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </MantineProvider>
)
