interface Props {
  className?: string;
  children: React.ReactNode;
}
const HoverCard = ({ children, className }: Props) => {
  return (
    <div
      className={`lg:hover:bg-hover lg:hover:border-cardBorder lg:border-y-[0.01rem] lg:border-transparent lg:hover:rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
};
export default HoverCard;
