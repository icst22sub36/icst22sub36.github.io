import csv
import os
import subprocess
import sys
from utils import is_js_file, checkDirExistence, getNiceTestName
from timeUtils import get_compile_time_and_res, get_run_time_and_res

HEADERS = [
  "Test file Name",
  "Total Tests",
  "Tests Failing Compilation",
  "Tests failing",
  "Percentage Passing",
  "Average Compile Time", 
  "Average Run Time"
]

def handleDir(directory):
  subprocess.call(["rm", "-rf", directory])
  checkDirExistence(directory)

def copyRuntimeAndHarness(directory, harness_path):
  subprocess.call(["cp", "-rf", "src", directory])
  subprocess.call(["cp", "tests/test262/harness/harness.js", directory + "/src"])

def compileAndRun(test_dir, out_dir):
  csv_path = out_dir + "/test_results.csv"
  fst = True
  with open(csv_path, 'w') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(HEADERS)
    for root, subdirs, files in os.walk(test_dir):
      if fst:
        chop=root
        fst=False
      test_file_name     = ""
      total_tests        = 0
      failed_comp        = 0
      failed_pass        = 0
      percentage_passing = 0
      avg_comp_time      = 0
      avg_run_time       = 0

      print(root)
      # Compile sub directory
      for filename in files:
        if is_js_file(filename):
          total_tests += 1
          filepath = os.path.join(root, filename)
          (t_time, res) = get_compile_time_and_res(filepath, out_dir)
          if res.returncode == 0:
            avg_comp_time += t_time
          else:
            failed_comp += 1
            print(res.stderr.decode('utf-8'))
          # check if failed to compile
      

      print(f"Compiled all tests. Failed: {str(failed_comp)}")
      # Run sub directory
      js_files = os.listdir(out_dir)
      for js_file in js_files:
        if is_js_file(js_file):
          path = os.path.join(out_dir, js_file)
          # args = ['npx', 'babel-node', OUTDIR + "/" + js_file]
          # res = subprocess.run(args, capture_output=True)
          (t_time, res) = get_run_time_and_res(path)
          if res.returncode == 0:
            avg_run_time += t_time
          if res.returncode != 0:
            failed_pass += 1
            print(res.stderr.decode('utf-8'))
          os.remove(OUTDIR + "/" + js_file)

      test_file_name = getNiceTestName(root, chop)

      print(f"Ran all tests. Failed: {str(failed_pass)}")
      if total_tests > 0:
        percentage_passing = (total_tests - failed_comp - failed_pass)*100/total_tests
        if total_tests - failed_comp > 0:
          avg_comp_time = avg_comp_time/(total_tests - failed_comp)
        if total_tests - failed_pass > 0:
          avg_run_time = avg_run_time/(total_tests - failed_pass)
        row = [
          test_file_name,
          str(total_tests),
          str(failed_comp),
          str(failed_pass),
          str(round(percentage_passing, 1)),
          str(round(avg_comp_time, 3)),
          str(round(avg_run_time, 3))
        ]
      else:
        row = [test_file_name]

      # Write row to  csv
      csv_writer.writerow(row)
    
    
#####################################################################################

OUTDIR = "Test262Log" if len(sys.argv) <= 1 else sys.argv[1]
TESTDIR = "tests/test262/test"
HARNESS_PATH = "test/test262/harness/harness.js" if len(sys.argv) <= 2 else sys.argv[2]
handleDir(OUTDIR)
copyRuntimeAndHarness(OUTDIR, HARNESS_PATH)
compileAndRun(TESTDIR, OUTDIR)