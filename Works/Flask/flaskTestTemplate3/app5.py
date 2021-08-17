from flask import Flask, render_template

app = Flask(__name__)

@app.route("/search")
def index():
    return render_template("Hey Jorc")

if(__name__ == "__main__"):
    app.run(debug=True)