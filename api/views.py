from flask import Blueprint
from flask import jsonify


main = Blueprint('main', __name__)


@main.route('/slowlorises')
def getSlowLorises():
    lorises = []
    return jsonify({'lorises': lorises})