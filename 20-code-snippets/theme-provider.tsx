import { createContext, useContext, useState, ReactNode } from "react";
const ThemeContext = createContext({ theme: "light", toggle: () => {} });
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
