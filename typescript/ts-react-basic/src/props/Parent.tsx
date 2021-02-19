import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Hello!")}>
      what?
    </ChildAsFC>
  );
};

export default Parent;
