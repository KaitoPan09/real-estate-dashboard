import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

// ModeSwitch component to toggle between light and dark modes
export function ModeSwitch() {
  const { theme, setTheme } = useTheme() 

  return (
    <Button
      size='icon'
      variant='ghost'
      className='rounded-full'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  )
}

export default ModeSwitch;