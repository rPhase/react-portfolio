interface Props {
  children: React.ReactNode;
  onClick: () => void;
}
const NavButton = ({ children, onClick }: Props) => {
  return (
    <div className="">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};
export default NavButton;
