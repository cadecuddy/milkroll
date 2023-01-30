import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

export default function ThemeToggle(): FunctionalComponent {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div class="text-white">⚫</div>;
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick} class="text-black dark:text-white">
      {theme === "light" ? "🌚" : "🌞"}
    </button>
  );
}
