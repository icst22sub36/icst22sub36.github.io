import os
import sys
import subprocess
from utils import check_flag, get_js_args, is_js_file, run_js_npx_node, write_errs_to_file, checkDirExistence, traverse_compile

COMP_TESTS_DIR = "compiledTests"
JS_ARGS = ["index.js"]
C_LOG_PATH = COMP_TESTS_DIR + "/compile_error_log.txt"
TEST262_FLAG = "--test262"

walk_dir = sys.argv[1]

def shallow_traverse(walk_dir, func, out_dir):
  err_out = {}
  total_tests = 0
  for filename in os.listdir(walk_dir):
    if is_js_file(filename):
      total_tests += 1
      print('\t- Compiling file %s' % (filename))
      args = get_js_args(filename, out_dir)
      res = func(args)          
      if res.returncode != 0 and res.stderr:
        err_out[filename] = res.stderr
  print('Compiled %s out of %s tests.' % ((total_tests - len(err_out)), total_tests))
  print('The following %s tests failed to compile:' % (len(err_out)))
  for test in err_out:
    print('\t - %s' % (test))
  return err_out


def addHarnessToRuntime():
  path = getHarnessPath()
  # probably missing / in harness.js
  subprocess.call(["cp", "-rf", path + "/harness.js", COMP_TESTS_DIR + "/src"])


def getHarnessPath():
  for i in range(len(sys.argv)):
    if (sys.argv[i] == TEST262_FLAG):
      return (sys.argv[i+1])

subprocess.call(["rm", "-rf", COMP_TESTS_DIR])
checkDirExistence(COMP_TESTS_DIR)
if not check_flag("-f"):
  err_out = traverse_compile(walk_dir, run_js_npx_node, COMP_TESTS_DIR)
else:
  err_out = shallow_traverse(walk_dir, run_js_npx_node, COMP_TESTS_DIR)
write_errs_to_file(err_out, C_LOG_PATH)
subprocess.call(["cp", "-rf", "src", COMP_TESTS_DIR])
if check_flag(TEST262_FLAG):
  addHarnessToRuntime()
