package com.example.restservice;

public class SumCommas {
    public int sumCommasFunction(String x){
        int numCommas =0;
        for (int i=0 ; i<x.length(); i++){
         char ch = x.charAt(i);
         if(ch == ','){
            numCommas ++;
         }
      }
      return numCommas;
    }
}
