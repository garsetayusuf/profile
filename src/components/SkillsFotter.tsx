import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
            >
              <Image
                src={item.icon as string}
                alt={item.name as string}
                className="w-12 h-12 object-contain"
                width={48}
                height={48}
              />
              <span className="text-sm text-center font-medium text-muted-foreground">
                {item.name}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
