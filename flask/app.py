from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=False)
    password = db.Column(db.String(144), unique=False)

    def __init__(self, title, content):
        self.email = email
        self.password = password


class UserSchema(ma.Schema):
    class Meta:
        fields = ('email', 'password')


user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Endpoint to create a new user
@app.route('/user', methods=["POST"])
def add_user():
    email = request.json['email']
    password = request.json['password']

    new_user = User(email, password)

    db.session.add(new_user)
    db.session.commit()

    user = User.query.get(new_user.id)

    return user_schema.jsonify(user)


# Endpoint for querying a single user
@app.route("/user/<id>", methods=["GET"])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)


# Endpoint for updating a user
@app.route("/user/<id>", methods=["PUT"])
def user_update(id):
    user = User.query.get(id)
    email = request.json['email']
    password = request.json['password']

    user.email = email
    user.password = password

    db.session.commit()
    return user_schema.jsonify(user)


# Endpoint for deleting a user
@app.route("/user/<id>", methods=["DELETE"])
def user_delete(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return "User was successfully deleted"


if __name__ == '__main__':
    app.run(debug=True)