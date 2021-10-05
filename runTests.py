import os
import sys
from utils import write_errs_to_file, run_js_npx_node, is_js_file

COMP_TESTS_DIR = "compiledTests" if len(sys.argv) <= 1 else sys.argv[1]
COMP_ARGS = ["node", "--experimental-modules",  "--es-module-specifier-resolution=node" ]
ERR_PATH = "compiledTests/runtime_error_log.txt"

err_out = {}

def run_tests(directory):
  js_files = os.listdir(directory)
  #print(len(js_files))
  total_tests = 0
  for js_file in js_files:
    #print (js_file)
    if is_js_file(js_file):
      #print ("found a js file")
      print('\t- Running test %s' % (js_file))
      total_tests += 1
      res = run_js_npx_node([ directory+"/"+js_file ])
      if res.returncode != 0:
        print('\t\t Test failed with code ' + str(res.returncode))
        err_msg = "" if res.stderr == None else res.stderr
        err_out[js_file] = err_msg

  print('Passing %s out of %s tests.' % ((total_tests - len(err_out)), total_tests))
  print('The following %s tests failed:' % (len(err_out)))
  for test in err_out:
    print('\t - %s' % (test))


###################################################################

walk_dir = COMP_TESTS_DIR
run_tests(walk_dir)
write_errs_to_file(err_out, ERR_PATH)
