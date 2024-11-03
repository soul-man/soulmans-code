import React from 'react';
import { useTheme } from '../../lib/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from './button';

interface ThemeSwitchProps {
  onChange: (theme: string) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ onChange }) => {
    const { theme, setTheme } = useTheme();
  
    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(newTheme)
      if (onChange) onChange(newTheme)
    }
  
    return (
      <button 
        onClick={toggleTheme} 
        className="p-2 absolute top-5 right-5 z-50 rounded-xl bg-themeswitch-bg-primary text-themeswitch-text-primary hover:bg-themeswitch-bg-secondary hover:text-themeswitch-text-secondary duration-300"
      >
        {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  };
  
  export default ThemeSwitch;