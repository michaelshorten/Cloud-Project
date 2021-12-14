package main

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestSumConstenants(t *testing.T) {
    answer := CountConstenant("qwrty")
    if answer != 5 {
       t.Error("Sum was incorrect, Answer is 5 not ",answer)
    }
}

// HTTP RESPONSE UNIT TESTS
func TestValidInput200(t *testing.T){
    request, err := http.NewRequest("GET","?input=test", nil)
    if err != nil{
        t.Error(err)
    }
    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(sumConstenants)
    handler.ServeHTTP(rr,request)
    
    if status := rr.Code; status != http.StatusOK{
        t.Error("Expected: " + fmt.Sprint((http.StatusOK))+" Actual: "+ fmt.Sprint((status)))
    }
}
func TestInValidInput200(t *testing.T){
    request, err := http.NewRequest("GET","?input=123", nil)
    if err != nil{
        t.Error(err)
    }
    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(sumConstenants)
    handler.ServeHTTP(rr,request)
    
    if status := rr.Code; status != http.StatusOK{
        t.Error("Expected: " + fmt.Sprint((http.StatusOK))+" Actual: "+ fmt.Sprint((status)))
    }
}

func TestNoInput200(t *testing.T){
    request, err := http.NewRequest("GET","?input=", nil)
    if err != nil{
        t.Error(err)
    }
    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(sumConstenants)
    handler.ServeHTTP(rr,request)
    
    if status := rr.Code; status != http.StatusOK{
        t.Error("Expected: " + fmt.Sprint((http.StatusOK))+" Actual: "+ fmt.Sprint((status)))
    }
}