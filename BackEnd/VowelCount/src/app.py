from flask import *
app = Flask(__name__)
import sumVowels

def isInteger(text):
    try:
        int(text)
        return True
    except ValueError:
        return False

def verify(text):
    errorMessage=""
    if text == "":
        errorMessage="Please Enter Value"
        return errorMessage
    elif isInteger(text):
        errorMessage="Please Enter A String"
        return errorMessage
    else:
        errorMessage=""
        return errorMessage


@app.route("/")      
def countVowels():
  text = request.args.get('input', '')
  errorCode=200
  response = {
      "error":False,
      "errorMessage":"",
      "result": 0,
      }
  
  errorMessage = verify(text)
  if errorMessage != "":
      errorCode=400
      response = {
      "error":True,
      "errorMessage":errorMessage,
      "result": 0,
      }
  else:
      result = sumVowels.sum(text)
      response = {
      "error":False,
      "input":text,
      "result": sumVowels.sum(text),
      }
  reply = json.dumps(response)
  r = Response (response=reply, status=errorCode, mimetype="application/json")
  r.headers["Content-Type"]="application/json"
  r.headers["Access-Control-Allow-Origin"]="*"
  return r
if __name__ == '__main__':
    app.run(host ='0.0.0.0',port=5000)