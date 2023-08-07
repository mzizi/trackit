interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <h4 className="text-sm text-muted-foreground">{description}</h4>
    </div>
  );
};
