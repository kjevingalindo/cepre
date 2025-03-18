import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: SidebarItemProps): React.JSX.Element {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
          active ? "bg-white" : "hover:bg-yellow-500"
        }`}
      >
        <Icon className="size-5" />
        <span>{label}</span>
      </a>
    </li>
  );
}

export default SidebarItem;
