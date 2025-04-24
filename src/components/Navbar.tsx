"use client";
import { cn } from "@/lib/utils";

import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
  Sun,
  Moon,
  User,
} from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/DockAnimation";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const data = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full " />,
      href: "/",
    },
    {
      title: "About",
      icon: <User className="h-full w-full " />,
      href: "/about",
    },
    {
      title: "Skills",
      icon: <LightbulbIcon className="h-full w-full " />,
      href: "/skills",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full " />,
      href: "/education",
    },
    {
      title: "Projects",
      icon: <FolderGit2 className="h-full w-full " />,
      href: "/projects",
    },
    {
      title: "Contact us",
      icon: <Mail className="h-full w-full " />,
      href: "/contact",
    },
    // {
    //   title: "More",
    //   icon: <MoreHorizontal className="h-full w-full " />,
    //   href: "/more",
    // },
    {
      title: "Change Theme",
      icon: <LightbulbIcon className="h-full w-full " />,
      tag: "modeToggle",
      href: "/",
    },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Mark the component as mounted
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${
        scrolling ? "hidden" : "block"
      }`}
    >
      <Dock className="items-end pb-3 rounded-full">
        {data.map((item, idx) =>
          item.tag === "modeToggle" ? (
            <DockItem
              key={idx}
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {/* Render theme icons only after the component has mounted */}
                {mounted && (
                  <>
                    {theme === "light" ? (
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    ) : (
                      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    )}
                  </>
                )}
              </DockIcon>
            </DockItem>
          ) : (
            <Link href={item.href} key={idx}>
              <DockItem
                className={cn(
                  "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                  pathname === item.href &&
                    " bg-gray-100 !border !border-primary-sky"
                )}
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon
                  className={cn(pathname === item.href && "text-[#2f7df4]")}
                >
                  {item.icon}
                </DockIcon>
              </DockItem>
            </Link>
          )
        )}
      </Dock>
    </div>
  );
};

export default Navbar;
