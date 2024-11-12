interface Props {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}
const NavButton = ({ children, onClick, active }: Props) => {
  return (
    <div className={`${active ? 'bg-primary text-secondary' : ''}`}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};
export default NavButton;
