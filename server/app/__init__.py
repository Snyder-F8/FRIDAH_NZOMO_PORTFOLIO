from flask import Flask
from sqlalchemy import text

from config import Config
from app.extensions import db, migrate, cors
from app.models import Project, ContactMessage
from app.routes.projects import projects_bp


def create_app():
    app = Flask(__name__)

    # Load application configuration
    app.config.from_object(Config)

    # Initialise extensions
    db.init_app(app)
    migrate.init_app(app, db)

    cors.init_app(
        app,
        resources={
            r"/api/*": {
                "origins": ["http://localhost:5173"]
            }
        }
    )

    app.register_blueprint(projects_bp)
    
    # Home endpoint
    @app.route("/")
    def home():
        return {
            "message": "Welcome to Sereluna's Portfolio API!",
            "status": "success"
        }

    # Database health-check endpoint
    @app.route("/api/health/db")
    def database_health():
        try:
            db.session.execute(text("SELECT 1"))

            return {
                "status": "success",
                "message": "Database connection is working!"
            }, 200

        except Exception as error:
            app.logger.error(
                "Database connection failed: %s", error
            )

            return {
                "status": "error",
                "message": "Database connection failed."
            }, 500

    return app
