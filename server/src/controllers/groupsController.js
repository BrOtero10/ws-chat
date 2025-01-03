const groupsModel = require("../models/groupsModel");

const getGroups = (req, res) => {
    try {
        const groupsData = groupsModel.getGroups();
        res.status(200).json(groupsData);
    } catch (error) {
        console.log("Error - getGroups");
        console.error(error);
        res.status(500).json({ message: "Error retrieving groups" });
    }
}

const getGroup = (req, res) => {
    try {
        const { id } = req.params;
        const groupData = groupsModel.getGroup(id);
        res.status(200).json(groupData);
    } catch (error) {
        console.log("Error - getGroup");
        console.error(error);
        res.status(500).json({ message: "Error retrieving group" });
    }
}

const createGroup = (req, res) => {
    try {
        const newGroup = req.body;
        groupsModel.createGroup(newGroup);
        res.status(201).json({ message: "Group created successfully" });
    } catch (error) {
        console.log("Error - createGroup");
        console.error(error);
        res.status(500).json({ message: "Error creating group" });
    }
}

const updateGroup = (req, res) => {
    try {
        const { id } = req.params;
        const updatedGroup = req.body;
        groupsModel.updateGroup(id, updatedGroup);
        res.status(200).json({ message: "Group updated successfully" });
    } catch (error) {
        console.log("Error - updateGroup");
        console.error(error);
        res.status(500).json({ message: "Error updating group" });
    }
}

const deleteGroup = (req, res) => {
    try {
        const { id } = req.params;
        groupsModel.deleteGroup(id);
        res.status(200).json({ message: "Group deleted successfully" });
    } catch (error) {
        console.log("Error - deleteGroup");
        console.error(error);
        res.status(500).json({ message: "Error deleting group" });
    }
}

module.exports = {
    getGroups,
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup
};