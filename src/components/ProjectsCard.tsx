import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const colors = [
                "bg-teal-100 text-teal-800",
                "bg-yellow-100 text-yellow-800",
                "bg-blue-100 text-blue-800",
                "bg-red-100 text-red-800",
                "bg-orange-100 text-orange-800",
                "bg-purple-100 text-purple-800",
                "bg-emerald-100 text-emerald-800",
                "bg-indigo-100 text-indigo-800",
                "bg-pink-100 text-pink-800",
                "bg-cyan-100 text-cyan-800",
                "bg-violet-100 text-violet-800",
                "bg-gray-100 text-gray-800",
              ];

              const randomStyle =
                colors[Math.floor(Math.random() * colors.length)];

              return (
                <span
                  key={index}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    colors[index % colors.length]
                  }`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 ">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "w-fit hover:shadow-md"
            )}
          >
            Visit Project
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
