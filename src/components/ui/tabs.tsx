import { LucideIcon } from "lucide-react";
import React, { useState } from "react";

export interface TabData {
  id?: string;
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabData[];
  defaultActiveTab?: number;
  onTabChange?: (index: number, tab: TabData) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab = 0,
  onTabChange,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

  const handleTabClick = (index: number, tab: TabData): void => {
    if (tab.disabled) return;

    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tab);
    }
  };

  const getTabClasses = (index: number, tab: TabData): string => {
    const baseClasses =
      "inline-flex items-center justify-center py-4 px-2 border-b-3 rounded-t-lg group cursor-pointer transition-colors duration-200";

    if (tab.disabled) {
      return `${baseClasses} text-gray-400 cursor-not-allowed dark:text-gray-500`;
    }

    if (index === activeTab) {
      return `${baseClasses} text-black border-blue-600 active dark:text-blue-500 dark:border-blue-500`;
    }

    return `${baseClasses} border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`;
  };

  return (
    <div
      className={`border-b border-gray-200 dark:border-gray-700 ${className} overflow-x-auto overflow-y-hidden`}
    >
      <ul className="flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li
            key={tab.id || index}
            className={`${
              index === tabs.length - 1 ? "" : "me-2"
            } shrink-0 grow-1`}
          >
            <button
              onClick={() => handleTabClick(index, tab)}
              className={getTabClasses(index, tab)}
              disabled={tab.disabled}
              aria-current={index === activeTab ? "page" : undefined}
              type="button"
            >
              {tab.icon && <span className="me-2">{<tab.icon />}</span>}
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
