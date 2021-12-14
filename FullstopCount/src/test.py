import unittest
import sumFullstops
from app import app
class TestAdd(unittest.TestCase):
    def test_sum(self):
        self.assertEqual(sumFullstops.sum("aeious..."),3)

#API TESTING 
# STATUS CODE 400 TESTS
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

# STATUS CODE 200 TESTS
    def testValidText(self):
     response = self.tester.get("/?input=a.b.c")
     statuscode = response.status_code
     self.assertEqual(statuscode,200)
    
    def testValidChars(self):
     response = self.tester.get("/?input=ab.cd")
     statuscode = response.status_code
     self.assertEqual(statuscode,200)
if __name__ == 'main':
    unittest.main()