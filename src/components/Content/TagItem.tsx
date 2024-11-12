interface Props {
  tag: string;
}
const TagItem = ({ tag }: Props) => {
  return (
    <span className="rounded-full bg-primary px-3 py-2 text-xl font-semibold text-secondary">
      {tag}
    </span>
  );
};
export default TagItem;
