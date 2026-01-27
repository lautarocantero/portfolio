import './App.css'
import SnackBarProvider from './components/shared/snackbar/SnackBarProvider'
import { DialogProvider } from './components/SimpleDialog/DialogProvider'
import PortfolioPage from './pages/PortfolioPage'
import { AppTheme } from './theme/AppTheme'
import { ThemeProvider } from './theme/context/ThemeProvider'

const PortfolioApp = () => {

  return (
    <ThemeProvider>
      <SnackBarProvider>
        <AppTheme>
          <DialogProvider>
            <PortfolioPage />
          </DialogProvider>
        </AppTheme>
      </SnackBarProvider>
    </ThemeProvider>
  )
}

export default PortfolioApp
