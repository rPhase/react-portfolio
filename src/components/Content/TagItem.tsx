interface Props {
  tag: string;
}
const TagItem = ({ tag }: Props) => {
  return (
    <span className="rounded-full bg-[#0b0a46] px-3 py-2 text-xl font-semibold text-[#6991ff]">
      {tag}
    </span>
  );
};
export default TagItem;
