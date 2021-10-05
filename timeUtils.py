import timeit
import os

def get_run_time_and_res(file_name):
  cmd = f'globals()[\'r\'] = subprocess.run([\'npx\', \'babel-node\', \'{file_name}\'], capture_output=True)'
  g = globals()
  g.update({'r':'Err: Subprocess value not set'})
  t = timeit.Timer(stmt=cmd, setup='import subprocess', globals=g)
  test_time = t.timeit(number=1)
  res = g['r']
  return (test_time, res)

def get_compile_time_and_res(test_name, out_dir):
  cmd = f'globals()[\'c\'] = subprocess.run([\'npx\', \'babel-node\', \'index.js\', \'{test_name}\', \'{out_dir}\', \'--test262\'], capture_output=True)'
  g = globals()
  g.update({'c':'Err: Subprocess value not set'})
  t = timeit.Timer(stmt=cmd, setup='import subprocess', globals=g)
  test_time = t.timeit(number=1)
  res = g['c'] 
  return (test_time, res)

def testme(path):
  for root, subdirs, files in os.walk(path):
    print("Entering")
    print(root)
    print(subdirs)

