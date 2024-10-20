interface Props {
  tag: string;
}
const TagItem = ({ tag }: Props) => {
  return <span>{tag}</span>;
};
export default TagItem;
