import {
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconUserShield,
  IconHome,
  IconUserPlus,
  IconKey,
} from "@tabler/icons-react";
import { BarChartIcon } from "@radix-ui/react-icons";

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: "Home",
    label: "",
    href: "/",
    icon: <IconHome size={18} />,
  },
  {
    title: "Authentication",
    label: "",
    href: "",
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: "Sign Up",
        label: "",
        href: "/sign-up",
        icon: <IconUserPlus size={18} />,
      },
      {
        title: "Forgot Password",
        label: "",
        href: "/forgot-password",
        icon: <IconKey size={18} />,
      },
    ],
  },
  {
    title: "Highscores",
    label: "",
    href: "/highscores",
    icon: <BarChartIcon />,
  },
  // {
  //   title: "Forum",
  //   label: "",
  //   href: "/forum",
  //   icon: <IconMessages size={18} />,
  // },
];
