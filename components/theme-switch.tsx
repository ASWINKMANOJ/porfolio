"use client";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setTheme]);

  if (!mounted) return null;
  return (
    <div className="flex items-center justify-center">
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="mx-2"
      />
      <div className="mx-2">
        {resolvedTheme === "dark" ? <LucideMoon /> : <LucideSun />}
      </div>
    </div>
  );
}
