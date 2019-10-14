const initState = {
  projects: [
    {
      id: "1",
      title: "Project one",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptates veniam porro commodi amet ab nihil eius quia quam consequuntur perferendis, tempora et quos vitae impedit atque velit nisi. Magnam!"
    },
    {
      id: "2",
      title: "Project two",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptates veniam porro commodi amet ab nihil eius quia quam consequuntur perferendis, tempora et quos vitae impedit atque velit nisi. Magnam!"
    },
    {
      id: "3",
      title: "Project three",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptates veniam porro commodi amet ab nihil eius quia quam consequuntur perferendis, tempora et quos vitae impedit atque velit nisi. Magnam!"
    },
    {
      id: "4",
      title: "Project four",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptates veniam porro commodi amet ab nihil eius quia quam consequuntur perferendis, tempora et quos vitae impedit atque velit nisi. Magnam!"
    },
    {
      id: "5",
      title: "Project five",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptates veniam porro commodi amet ab nihil eius quia quam consequuntur perferendis, tempora et quos vitae impedit atque velit nisi. Magnam!"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
