from app.extensions import db


class ContactMessage(db.Model):
    __tablename__ = "contact_messages"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )
    is_read = db.Column(
        db.Boolean,
        nullable=False,
        default=False
    )