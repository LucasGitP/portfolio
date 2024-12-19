import Icon from "../Icon/Icon";
export default function KnowledgeCard({icon}) {
  return (
    <div className="knowledgeCard">
      <Icon page={icon}></Icon>
      <span>{icon.img}</span>
    </div>
  );
}
