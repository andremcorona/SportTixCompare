# Importing modules from Flask
from flask import Blueprint, jsonify

# Create a blueprint for the ticket-related routes
tickets_bp = Blueprint('tickets', __name__)

# Define a route to get ticket information
@tickets_bp.route('/get_tickets', methods=['GET'])
def get_tickets():
    # Placeholder for now, returns some sample tickets data as JSON
    tickets = [
        {"event": "Dodgers vs Giants", "price": 150, "platform": "StubHub"},
        {"event": "Dodgers vs Padres", "price": 100, "platform": "Ticketmaster"}
    ]
    return jsonify(tickets)  # Send the list of tickets as JSON response