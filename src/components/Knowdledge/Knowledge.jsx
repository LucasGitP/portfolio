import { knowledge, myInfo } from "../../constants.js";
import Section from "../Section/Section.jsx";
import "./Knowledge.css";
import Subject from "../Subject/Subject.jsx";
import KnowledgeCard from "./KnowledgeCard";

export default function Knowdledge() {
  return (
    <Section section="knowledge">
      <div className="knowledge">
        <div>
          <h3>Programming</h3>
          <div className="know">
            {knowledge
              .filter((k) => k.type === "programming")
              .map((k) => (
                <KnowledgeCard key={k.name} icon={k} />
              ))}
          </div>
        </div>
        <div>
          <h3>Languages</h3>
          <div className="know">
            <Subject title="Native Language">
              <span>{myInfo.languages.native}</span>
            </Subject>
            <Subject title="Others">
              <span>{myInfo.languages.others.join("")}</span>
            </Subject>
          </div>
        </div>
        <div>
          <h3>Tools</h3>
          <div className="know">
            {knowledge
              .filter((k) => k.type === "tools")
              .map((k) => (
                <KnowledgeCard key={k.name} icon={k} />
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
