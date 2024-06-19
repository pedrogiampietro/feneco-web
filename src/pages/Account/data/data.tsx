import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "online",
    label: "Online",
    icon: CheckCircledIcon,
  },
  {
    value: "offline",
    label: "Offline",
    icon: CrossCircledIcon,
  },
  {
    value: "maintenance",
    label: "Maintenance",
    icon: StopwatchIcon,
  },
];

export const types = [
  {
    value: "PvP",
    label: "PvP",
    icon: CircleIcon,
  },
  {
    value: "NoPvP",
    label: "NoPvP",
    icon: CircleIcon,
  },
];

export const regions = [
  {
    value: "BR",
    label: "Brazil",
    icon: ArrowDownIcon,
  },
  {
    value: "USA",
    label: "USA",
    icon: ArrowRightIcon,
  },
];
