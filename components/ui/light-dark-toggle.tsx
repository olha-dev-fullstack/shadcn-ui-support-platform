"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const LightDarkToggle = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme, theme } = useTheme();
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            console.log(theme);
            
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          <Button variant={"outline"}>
            <SunIcon className="block dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="hidden dark:inline">Enable light mode</span>
          <span className="inline dark:hidden">Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;
