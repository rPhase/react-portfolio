interface Props {
  children: React.ReactNode;
}
const NavButton = ({ children }: Props) => {
  return (
    <div className=''>
      <button>{children}</button>
    </div>
  );
};
export default NavButton;
