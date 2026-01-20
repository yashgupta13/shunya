import { useEffect, useRef } from "react";

// Helper to allow other components to dispatch analytics events
export const trackCustomEvent = (eventName, data = {}) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("erasure-analytics-event", {
      detail: { eventName, data },
    });
    window.dispatchEvent(event);
  }
};

// This component is headless (no UI) and runs in the background to collect user behavior metrics.
export const AnalyticsTracker = () => {
  const sessionStart = useRef(Date.now());
  const maxScroll = useRef(0);
  const sectionsViewed = useRef(new Set());

  // 1. Generate or retrieve a Session ID
  const getSessionId = () => {
    let sid = sessionStorage.getItem("analytics_session_id");
    if (!sid) {
      sid =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem("analytics_session_id", sid);
    }
    return sid;
  };

  // Helper to log analytics events
  const logEvent = (eventName, data = {}) => {
    const sessionId = getSessionId();
    const payload = {
      event: eventName,
      sessionId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      ...data,
    };

    // 1. Keep the console log for local debugging
    console.groupCollapsed(`📊 [Analytics] ${eventName}`);
    console.log("Payload:", payload);
    console.groupEnd();

    // 2. Send to Google Analytics 4 if available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        ...data,
        session_id: sessionId,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  };

  // 2. Track Session Start & Custom Events
  useEffect(() => {
    logEvent("session_start", {
      referrer: document.referrer,
      language: navigator.language,
    });

    // Listener for custom events dispatched by other components
    const handleCustomEvent = (e) => {
      if (e.detail) {
        logEvent(e.detail.eventName, e.detail.data);
      }
    };

    window.addEventListener("erasure-analytics-event", handleCustomEvent);

    return () => {
      window.removeEventListener("erasure-analytics-event", handleCustomEvent);
    };
  }, []);

  // 3. Track Clicks (Interaction) & Form Focus
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      const clickable = target.closest("button, a");

      if (clickable) {
        const text = clickable.textContent?.substring(0, 50).trim();
        const href = clickable.href;

        logEvent("interaction_click", {
          elementType: clickable.tagName.toLowerCase(),
          elementText: text,
          targetUrl: href || "n/a",
        });
      }
    };

    const handleFocus = (e) => {
      const target = e.target;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        const contactSection = target.closest("#contact");

        if (contactSection) {
          logEvent("contact_form_focus", {
            fieldName: target.name || "unknown",
            fieldType: target.tagName.toLowerCase(),
          });
        }
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("focus", handleFocus, true);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("focus", handleFocus, true);
    };
  }, []);

  // 4. Track Scroll Depth and Section Visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScroll.current) {
        maxScroll.current = scrollPercent;

        if (
          maxScroll.current === 25 ||
          maxScroll.current === 50 ||
          maxScroll.current === 75 ||
          maxScroll.current === 100
        ) {
          logEvent("scroll_depth_milestone", {
            depth: maxScroll.current + "%",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            if (!sectionsViewed.current.has(entry.target.id)) {
              sectionsViewed.current.add(entry.target.id);
              logEvent("section_viewed", {
                sectionId: entry.target.id,
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();

      const duration = (Date.now() - sessionStart.current) / 1000;

      logEvent("session_end", {
        durationSeconds: Math.round(duration),
        maxScrollDepth: maxScroll.current + "%",
        sectionsExplored: Array.from(sectionsViewed.current),
      });
    };
  }, []);

  return null;
};
