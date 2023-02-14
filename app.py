from flask import Flask,render_template,request
from MyLib.banco import *
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')
@app.route('/login', methods=["POST",'GET'])
def login():
    nome = request.form.get('lnome')
    senha = request.form.get('lsenha')
    res = Search(nome=nome,senha=senha)
    id = SearchID(nome=nome,senha=senha)
    if res:
        try:
            id = id[0]
            return render_template('funcionario.html',nome=nome,id=id)
            
        except:
            return render_template('login.html')
    else:
        return render_template('login.html')
        
@app.route('/cadastrar',methods=['POST',"GET"])
def cadastrar():
    return render_template('cadastrar.html')

@app.route('/cadastrar/gerente',methods=['POST',"GET"])
def cg():
    return render_template('cadg.html')

@app.route('/cadastrar/funcionario',methods=["POST","GET"])
def cf():
    return render_template('cadf.html')

@app.route('/cadastrar/fadd',methods=["POST","GET"])
def cfadd():
    nome = request.form.get('cnome')
    nome.upper()
    senha = request.form.get('csenha')
    acesso = 'funcionario'
    InsertDB(nome,senha,acesso)
    return render_template('login.html')

@app.route('/cadastrar/gadd',methods=["POST","GET"])
def cgadd():
    nome = request.form.get('cnome')
    senha = request.form.get('csenha')
    acesso = 'gerente'
    InsertDB(nome,senha,acesso)
    return render_template('login.html')

@app.route('/close',methods=["POST","GET"])
def close():
    nome = request.form.get('nomec')
    senha = request.form.get('senhac')
    res = Search(nome=nome,senha=senha)
    if res:
        return render_template('login.html')
    else:
        return render_template('funcionario.html') 


        
        
if __name__ == '__main__':
    app.run(debug=True)