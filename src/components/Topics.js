import { Card } from "antd";

const topics = [
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
  {
    name: "Voluptate",
    description:
      "Voluptate ex anim amet irure adipisicing fugiat id aute pariatur velit est commodo ea occaecat.",
  },
];

const Topics = () => {
  return (
    <div className="flex flex-1 items-center">
      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card
            className="cursor-pointer hover:border-gray-400"
            title={topic.name}
          >
            <p>{topic.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Topics;
