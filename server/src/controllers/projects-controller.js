import ProjectModel from "../models/projects-model.js";
import GemniPrompt from "../utils/modelAi.js";
import mongoose from "mongoose";

const createProject = async (req, res) => {
    const description = req.body.description;
    const querySTMT =
        "give me a comma separated string containing all the tech stacks required by the project based on this abstract. I DO NOT want arrays, json objects, or any other fancy stuff. simple plain comma separated words corresponding to the tech stack for the project";
    let techStacks = await GemniPrompt(description, querySTMT);
    req.body.techStacks = techStacks.split(", ");
    const Project = new ProjectModel(req.body);
    try {
        await Project.save();
        res.status(201).json(Project);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const getProjects = async function(req, res) {
    const nameQuery = req.query.q || "";
    const stackQuery = req.query.s || "";
    const reName = new RegExp(nameQuery, "i");
    const reStack = new RegExp(stackQuery, "i");
    try {
        const Projects = await ProjectModel.find({
            $and: [{ name: reName }, { techStacks: reStack }],
        });
        res.status(200).json(Projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getProject = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const project = await ProjectModel.findById(_id);

        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No project with that id");

    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(
            _id,
            { ...project, _id },
            { new: true },
        );

        res.json(updatedProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No project with that id");

    try {
        await ProjectModel.findByIdAndDelete(id);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { createProject, getProjects, getProject, updateProject, deleteProject };
