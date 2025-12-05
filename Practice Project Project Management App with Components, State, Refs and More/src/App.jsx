import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevProjectsState.selectedProjectId,
      };

      return {
        ...prevProjectsState,
        tasks: [...prevProjectsState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectId: projectId,
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  const selectedTasks = projectsState.tasks.filter(
  (task) => task.projectId === projectsState.selectedProjectId
);

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(project) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };

      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      const updatedProjects = prevProjectsState.projects.filter(
        (project) => project.id !== prevProjectsState.selectedProjectId
      );

      return {
        projects: updatedProjects,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <ProjectDetails
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedTasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
