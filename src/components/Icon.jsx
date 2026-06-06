import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HandCoins,
  HandHeart,
  HeartPulse,
  HouseHeart,
  Sparkles,
  Users,
  UtensilsCrossed,

  // Social Icons Alternative
  Globe,
  Mail,
  Share2,
} from "lucide-react";

const iconMap = {
  HouseHeart,
  GraduationCap,
  HeartPulse,
  HandHeart,
  Sparkles,
  Users,
  BriefcaseBusiness,
  HandCoins,

  child: Baby,
  meal: UtensilsCrossed,
  student: BookOpen,
  community: Users,

  // Social
  instagram: Globe,
  facebook: Share2,
  linkedin: Mail,
};

export default function Icon({ name, className = "" }) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon className={className} aria-hidden="true" />;
}