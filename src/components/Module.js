import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { catId, sessionId } = useParams()

  const { name, desc, speaker } = getModule({ catId, sessionId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
}
