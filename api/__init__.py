from flask import Flask
from flask_sqlalchemy import SQLAlchemy


def create_app():
    """
    Create Flask App and sqlite database 
    with blueprint registered to app
    """
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///slowloris.db'
    

    from .views import main
    app.register_blueprint(main)
    

    return app

