from flask import Blueprint, jsonify

from app.models import Project


projects_bp = Blueprint(
    "projects",
    __name__,
    url_prefix="/api/projects"
)


@projects_bp.get("")
def get_projects():
    projects = Project.query.order_by(Project.id.asc()).all()

    return jsonify([
        project.to_dict()
        for project in projects
    ]), 200


@projects_bp.get("/<int:project_id>")
def get_project(project_id):
    project = Project.query.get_or_404(project_id)

    return jsonify(project.to_dict()), 200