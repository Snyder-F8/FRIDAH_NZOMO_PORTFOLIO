from sqlalchemy import text
from flask import Flask
from config import Config
from app.extensions import db, migrate, cors


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    # Initialise extensions
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={
        r"/api/*": {"origins": ["http://localhost:5173"]}
    })

    @app.route("/")
    def home():
        return {
            "message": "Welcome to Sereluna's Portfolio API!",
            "status": "success"
        }
@app.route("/api/health/db")
def database_health():
    try:
        db.session.execute(text("SELECT 1"))
        return {
            "status": "success",
            "message": "Database connection is working!"
        }, 200

    except Exception as error:
        app.logger.error("Database connection failed: %s", error)

        return {
            "status": "error",
            "message": "Database connection failed."
        }, 500
    return app
