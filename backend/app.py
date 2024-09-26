# Import Flask framework
from flask import Flask, jsonify

# Flask app initialization
app = Flask(__name__)

# Basic route to ensure API is working
@app.route('/')
def hello():
    return "Welcome to the Ticket Price Comparison"

# Run the Flask app if ran directly
if __name__ == '__main__':
    app.run(debug=True)