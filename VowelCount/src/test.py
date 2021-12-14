import unittest
import sumVowels

from app import app

class TestAdd(unittest.TestCase):
    def test_sum(self):
        self.assertEqual(sumVowels.sum("aeious"),5)
#API TESTING 
# STATUS CODE 400 TESTS (FAIL)
    def setUp(self):
        self.tester = app.test_client()
    
    def testNoInputParameter(self):
     response = self.tester.get("/")
     statuscode = response.status_code
     self.assertEqual(statuscode,400)

    def testNumberInput(self):
     response = self.tester.get("/?input=123")
     statuscode = response.status_code
     self.assertEqual(statuscode,400)

# STATUS CODE 200 TESTS (SUCCESS)
    def testValidText(self):
     response = self.tester.get("/?input=abc")
     statuscode = response.status_code
     self.assertEqual(statuscode,200)
    
    def testValidChars(self):
     response = self.tester.get("/?input=a,b.cd")
     statuscode = response.status_code
     self.assertEqual(statuscode,200)


if __name__ == 'main':
    unittest.main()