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

    return app
