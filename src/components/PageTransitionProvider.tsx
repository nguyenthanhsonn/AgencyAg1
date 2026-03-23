"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface PageTransitionContextValue {
  navigate: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

function getTargetPath(href: string) {
  const [path] = href.split("#");
  return path || "/";
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pendingPathRef = useRef<string | null>(null);
  const pendingHrefRef = useRef<string | null>(null);
  const isNavigatingRef = useRef(false);
  const exitTimeoutRef = useRef<number | null>(null);
  const fallbackTimeoutRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (exitTimeoutRef.current) {
      window.clearTimeout(exitTimeoutRef.current);
    }
    if (fallbackTimeoutRef.current) {
      window.clearTimeout(fallbackTimeoutRef.current);
    }
  }, []);

  const closeTransition = useCallback(() => {
    clearTimers();
    setIsAnimating(false);
    setIsVisible(false);
    pendingPathRef.current = null;
    pendingHrefRef.current = null;
    isNavigatingRef.current = false;
    document.body.style.overflow = "";
  }, [clearTimers]);

  const navigate = useCallback(
    (href: string) => {
      const targetPath = getTargetPath(href);
      if (isNavigatingRef.current || targetPath === pathname) {
        router.push(href);
        return;
      }

      clearTimers();
      pendingHrefRef.current = href;
      pendingPathRef.current = targetPath;
      isNavigatingRef.current = true;
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      window.requestAnimationFrame(() => {
        setIsAnimating(true);
      });

      exitTimeoutRef.current = window.setTimeout(() => {
        if (pendingHrefRef.current) {
          router.push(pendingHrefRef.current);
        }
      }, 800);

      fallbackTimeoutRef.current = window.setTimeout(() => {
        closeTransition();
      }, 2200);
    },
    [clearTimers, closeTransition, pathname, router]
  );

  useEffect(() => {
    if (!isNavigatingRef.current) return;
    if (pendingPathRef.current && pendingPathRef.current !== pathname) return;

    const timeoutId = window.setTimeout(() => {
      closeTransition();
    }, 420);

    return () => window.clearTimeout(timeoutId);
  }, [closeTransition, pathname]);

  useEffect(() => {
    return () => {
      clearTimers();
      document.body.style.overflow = "";
    };
  }, [clearTimers]);

  const value = useMemo(() => ({ navigate }), [navigate]);

  return (
    <PageTransitionContext.Provider value={value}>
      {children}

      <div
        className={`pointer-events-none fixed inset-0 z-[200] flex items-center justify-center bg-[linear-gradient(180deg,#081733_0%,#0d2348_52%,#102956_100%)] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
          } ${isVisible ? "visible" : "invisible"}`}
      >
        <div
          className={`relative will-change-transform ${isAnimating ? "page-transition-rabbit" : "scale-[13]"
            }`}
        >
          <Image
            src="/logos/logo-light.png"
            alt="SHORT PRO. transition logo"
            width={180}
            height={180}
            className="w-24 md:w-36 h-auto object-contain drop-shadow-[0_0_30px_rgba(240,197,122,0.28)]"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(76%) sepia(32%) saturate(712%) hue-rotate(355deg) brightness(93%) contrast(86%)",
            }}
            priority
          />
        </div>

        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,197,122,0.14),transparent_30%)] transition-opacity duration-500 ${isAnimating ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }

  return context;
}
