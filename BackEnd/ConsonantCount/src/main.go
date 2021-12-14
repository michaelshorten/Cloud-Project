package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)
type Response struct{
    Error bool `json:"error"`
    ErrorMessage string `json:"errorMessage"`
    Input string `json:"input"`
    Answer int `json:"answer"`
}
type Responses []Response

func isInteger(input string ) bool{
    _, err := strconv.ParseFloat(input,64)
    return err == nil
}

func IsConstenant(char rune) bool {
	if (char == 'b') || (char == 'c') || (char == 'd') ||
		(char == 'f') || (char == 'g') || (char == 'h' ||
		(char == 'j') || (char == 'k') || (char == 'l') ||
		(char == 'm') || (char == 'n') || (char == 'p') ||
		(char == 'q') || (char == 'r') || (char == 's') ||
		(char == 't') || (char == 'v') || (char == 'w') ||
		(char == 'x') || (char == 'y') || (char == 'z')) {
		return true
	} else {
		return false
	}
}

func CountConstenant(str string) int {
	count := 0
	for _, char := range str {
		if IsConstenant(char) {
			count = count + 1
		}
	}
	return count

}

func sumConstenants(w http.ResponseWriter, r *http.Request){
    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    response:= Response{Error:false,ErrorMessage:"NA",Input:"NA",Answer:0}
    
    
    fmt.Println("Endpoint Hit: sumConstenants Endpoint")
        keys, ok := r.URL.Query()["input"]
    
    if !ok || len(keys[0]) < 1 {
        log.Println("INPUT MISSING")
        response.Error = true
        response.ErrorMessage = "Input Missing"
        response.Input = keys[0]
        response.Answer = 0
    } else if isInteger(keys[0]){
        log.Println("INPUT IS INTEGER")
        response.Error = true
        response.ErrorMessage = "Input must be string"
        response.Input = keys[0]
        response.Answer = 0
    } else {
        response.Error = false
        response.ErrorMessage = "NA"
        response.Input = keys[0]
        response.Answer = CountConstenant(keys[0])
        //response.Answer = 
    }
    key := keys[0]

    log.Println("Url Param 'input' is: " + string(key))
    json.NewEncoder(w).Encode(response)
}

func handleRequests(){
    http.HandleFunc("/", sumConstenants)
    log.Fatal(http.ListenAndServe(":5001", nil))
}
func main(){
    handleRequests()
}