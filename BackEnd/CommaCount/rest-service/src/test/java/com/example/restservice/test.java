package com.example.restservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;




@SpringBootTest
class SumTest {
	@Test
	public void sumCommas() {
        SumCommas x = new SumCommas();
        int result = x.sumCommasFunction(",,,,");
        assertEquals(result,4);
    }
}
