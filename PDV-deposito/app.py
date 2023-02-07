from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/pdv')
def pdv():
    return render_template('pdv.html')

if __name__ == '__main__':
    app.run(debug=True)