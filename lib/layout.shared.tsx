import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import IconLinkedin from "@/components/icons/linkedin";
import IconYouTubeV2 from "@/components/icons/youtubev2";
import IconInstagram from "@/components/icons/instagram";
import IconGitHub from "@/components/icons/github";
import IconFour from "@/components/icons/four";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <IconFour
            className="size-9 shrink-0"
            aria-label="Four Icon"
            width={44}
            height={44}
          />
          Safe
        </>
      ),
      url: `/`,
    },
    links: [
      {
        type: "main",
        text: "Aaron (Iso) Pescasio",
        url: "https://apescasio.fr",
      },
      {
        type: "icon",
        text: "YouTube",
        url: "https://youtube.com/@apescasio",
        icon: (
          <span style={{ transform: "scale(1.2)" }}>
            <IconYouTubeV2 />
          </span>
        ),
        external: true,
      },
      {
        type: "icon",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/aaron-pescasio",
        icon: (
          <span style={{ marginLeft: "-7px", transform: "scale(1.3)" }}>
            <IconLinkedin />
          </span>
        ),
        external: true,
      },
      {
        type: "icon",
        text: "Instagram",
        url: "https://www.instagram.com/himapescasio",
        icon: (
          <span style={{ marginLeft: "-7px", transform: "scale(1.2)" }}>
            <IconInstagram />
          </span>
        ),
        external: true,
      },
      {
        type: "icon",
        text: "GitHub",
        url: "https://github.com/apescasio",
        icon: (
          <span style={{ marginLeft: "-7px", transform: "scale(1.3)" }}>
            <IconGitHub />
          </span>
        ),
        external: true,
      },
    ],
  };
}