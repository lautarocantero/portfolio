import './App.css'
import { DialogProvider } from './components/SimpleDialog/DialogProvider'
import PortfolioPage from './pages/PortfolioPage'
import { AppTheme } from './theme/AppTheme'
import { ThemeProvider } from './theme/context/ThemeProvider'

const PortfolioApp = () => {

  return (
    <ThemeProvider>
      <AppTheme>
        <DialogProvider>
          <PortfolioPage />
        </DialogProvider>
      </AppTheme>
    </ThemeProvider>
  )
}

export default PortfolioApp
