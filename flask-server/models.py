from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    time = db.Column(db.String(50))
    image = db.Column(db.String(255))

    def __repr__(self):
        return f'<Todo {self.title}>'
