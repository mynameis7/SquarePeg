#!/usr/bin/python
#
# Flask server, woo!
#

from flask import Flask, request, redirect, url_for, send_from_directory

# Setup Flask app.
app = Flask(__name__, static_url_path="", static_folder="")
app.debug = True


# Routes
@app.route('/')
def root():
  return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_proxy(path):
  print(path)
  # send_static_file will guess the correct MIME type
  return app.send_static_file(path)


if __name__ == '__main__':
  app.config["STATIC_FOLDER"] = ""
  app.run()