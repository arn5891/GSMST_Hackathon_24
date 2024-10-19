import re
import os
import requests
from flask import Flask, request
from html.parser import HTMLParser

def create_app(test_config=None):

    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    return app

app = create_app()#define app first

@app.route('/api/query', methods = ['POST'])#creates route for app, runs function in route name
def query():
  try:
    url = request.json["url"];
  except:
     return "error"
  html = requests.get(url).text
  parser = MyHTMLParser()
  parser.feed(html)
  issues = parser.issues
  
  return {"code": html, "issues": issues}


class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.issues = []  # List to store tag name and its attributes
        self.line_number = 1

    def feed(self, data):
        # Increment line number for each newline character
        self.line_number += data.count('\n') 
        super().feed(data)

    def handle_starttag(self, tag, attrs):
        goodtags = []
        # Convert attrs list of tuples to a dictionary
        if ((tag == "a") or (tag == "img") or (tag == "input") or (tag == "button") and ("aria-label" not in attrs)):
            self.issues.append({"line_number": self.line_number, "description": "aria-label tag attribute is missing from element"})
        # Store the tag and its attributes in the list
        
