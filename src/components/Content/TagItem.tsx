interface Props {
  tag: string;
}
const TagItem = ({ tag }: Props) => {
  return (
    <span className="bg-primary dark:bg-primaryDark text-tBaseDark rounded-full px-3 py-2 text-xl font-semibold">
      {tag}
    </span>
  );
};
export default TagItem;
