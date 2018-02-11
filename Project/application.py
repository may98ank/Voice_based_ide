from flask import Flask, render_template, redirect, request
# import subprocess

app  = Flask(__name__)

@app.route("/")
def index():
	return render_template("/similarities/Project/templates/index.html")

@app.route("/help")
def hel():
	return render_template("help.html")

@app.route("/ide")
def ide():
	return render_template("ide.html")


# @app.route('/run', methods = ['POST'])
# def run():
#     data = request.form['projectFilepath']
#     print(data)

# def run():
# 	subprocess.call('python3 new.py  <input.txt >output.txt',shell = True)
# 	return redirect('/')

# if __name__ == "__main__":
# 	app.run(debug=True)
